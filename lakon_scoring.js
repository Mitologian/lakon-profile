/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — MESIN SKORING v3
   File tunggal, dipakai bersama oleh app.js (browser) dan Code.gs (Apps Script).

   Menggantikan seluruh logika skoring lama di kedua file.
   Jangan lagi menyalin logika skoring ke tempat lain.

   MENYELESAIKAN (lihat lakon_master_fix_list.md):
     1.1  pembobotan Pick-2/Likert yang efektif terbalik 25/75
     1.2  bias bawaan antar Kelompok (Bakti +8.7 vs Yasa)
     1.3  format respons Watak 5 titik
     1.4  bug tie-break diam-diam ke E/N/T/J
     1.5  sistem zona yang bergantung pembulatan & tidak konsisten antar dimensi
     1.6  zona Ringan di Arus yang tidak pernah muncul
     1.8  Indeks Diferensiasi
     1.9  Indeks Konsistensi Holland (adjacency heksagon)
     1.10 Indeks Kualitas Respons
     1.11 satu mesin untuk app.js dan Code.gs

   PERUBAHAN YANG MEMUTUS KOMPATIBILITAS (breaking changes):
     - Arah skala Likert DIBALIK. Sekarang 5 = Sangat Setuju (dulu 1).
     - Item Watak bernilai -2..+2, bukan huruf kutub.
     - Pick-2 tidak lagi masuk skor utama.
     - Skor Kelompok tidak lagi dinormalisasi ke total 100.
═══════════════════════════════════════════════════════════════════════════ */

var LakonScoring = (function () {
  "use strict";

  /* ═══════════════════════════════════════════════════════════
     KONFIGURASI
     Semua ambang ada di sini. Jangan tanam angka di tempat lain.
     ═══════════════════════════════════════════════════════════ */
  var CONFIG = {

    // ── Watak ────────────────────────────────────────────────
    // Ambang zona berbasis clarity index (0..1), BUKAN hitungan item mentah.
    // Konsekuensinya ambang berlaku sama untuk dimensi dengan jumlah item
    // berapa pun. Ini yang memperbaiki bug "Arus tidak pernah Ringan".
    // Dikalibrasi dari simulasi 200.000 iterasi, populasi campuran:
    //   Samar 6% | Ringan 20% | Moderat 32% | Kuat 42%
    ZONE: { samar: 0.08, ringan: 0.22, moderat: 0.45 },

    // Di bawah ambang ini, Watak ditampilkan sebagai DUA kandidat,
    // bukan satu kandidat plus disclaimer.
    // Dikalibrasi ke ~15% peserta. Ambang 0.22 memicu 45% dan itu terlalu
    // sering: alat yang mengaku ragu di separuh kasus tidak lebih meyakinkan
    // daripada label "Samar" yang lama.
    DUAL_CANDIDATE_BELOW: 0.12,

    // ── Minat / Kelompok ─────────────────────────────────────
    // Ambang Indeks Diferensiasi, dikalibrasi dari 43 responden nyata
    // pada skala normatif 0-100 (p25 = 27.0, p75 = 50.0).
    DIFF: { tersebar: 27, sedang: 45 },

    // Jarak skor (poin, skala 0-100) di mana Pick-2 boleh jadi tie-breaker.
    // Dari data nyata, 53% peserta punya jarak #1-#2 di bawah 4 poin.
    TIEBREAK_WINDOW: 4.0,

    // Selisih share Pick-2 minimum agar tie-break benar-benar dieksekusi.
    TIEBREAK_MIN_MARGIN: 0.06,

    // ── Kualitas respons ─────────────────────────────────────
    QUALITY: {
      minDurationSec: 300,      // di bawah 5 menit untuk 108 item = mencurigakan
      straightLineSD: 0.45,     // SD respons Likert di bawah ini = straight-lining
      maxRunLength: 12          // 12 jawaban identik berturut-turut = flag
    },

    // ── Heksagon Holland ─────────────────────────────────────
    // Urutan melingkar R-I-A-S-E-C. Dipakai untuk Indeks Konsistensi.
    HEXAGON: ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"],

    KELOMPOK: ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"],
    DIMENSI:  ["arus", "pandang", "timbang", "irama"]
  };

  // Kutub tiap dimensi. poleA = nilai positif, poleB = nilai negatif.
  var POLES = {
    arus:    { A: "E", B: "I", labelA: "Arus Luar",      labelB: "Arus Dalam"  },
    pandang: { A: "N", B: "S", labelA: "Pandang Luas",   labelB: "Pandang Nyata" },
    timbang: { A: "T", B: "F", labelA: "Timbang Logika", labelB: "Timbang Rasa" },
    irama:   { A: "J", B: "P", labelA: "Irama Pasti",    labelB: "Irama Bebas" }
  };

  /* ═══════════════════════════════════════════════════════════
     UTILITAS
     ═══════════════════════════════════════════════════════════ */
  function mean(a) {
    if (!a.length) return 0;
    var s = 0, i;
    for (i = 0; i < a.length; i++) s += a[i];
    return s / a.length;
  }
  function sd(a) {
    if (a.length < 2) return 0;
    var m = mean(a), s = 0, i;
    for (i = 0; i < a.length; i++) s += (a[i] - m) * (a[i] - m);
    return Math.sqrt(s / a.length);
  }
  function round1(x) { return Math.round(x * 10) / 10; }
  function round3(x) { return Math.round(x * 1000) / 1000; }

  /* ═══════════════════════════════════════════════════════════
     1. SKOR WATAK
     items  : [{ id, dim, reverse }]     reverse = kutub dibalik
     answers: { itemId: -2..+2 }         +2 = sangat ke poleA
     ═══════════════════════════════════════════════════════════ */
  function scoreWatak(items, answers) {
    var acc = {}, i, it, v;

    for (i = 0; i < CONFIG.DIMENSI.length; i++) {
      acc[CONFIG.DIMENSI[i]] = { sum: 0, n: 0, extremeA: 0, extremeB: 0, midA: 0, midB: 0 };
    }

    for (i = 0; i < items.length; i++) {
      it = items[i];
      if (!acc[it.dim]) continue;
      v = answers[it.id];
      if (v === undefined || v === null) continue;
      v = Number(v);
      /* Format berpasangan: nilai yang dikirim UI SUDAH relatif terhadap
         kutub A, berapa pun urutan tampilnya. Tidak ada lagi `reverse`;
         yang membalik posisi adalah UI lewat field `flip`, bukan datanya. */
      acc[it.dim].sum += v;
      acc[it.dim].n += 1;
      if (v === 2) acc[it.dim].extremeA++;
      if (v === -2) acc[it.dim].extremeB++;
      if (v === 1) acc[it.dim].midA++;
      if (v === -1) acc[it.dim].midB++;
    }

    var dims = {};
    for (i = 0; i < CONFIG.DIMENSI.length; i++) {
      var d = CONFIG.DIMENSI[i], a = acc[d], p = POLES[d];
      var max = a.n * 2;
      var clarity = max ? Math.abs(a.sum) / max : 0;

      // ── Penentuan kutub, dengan tie-break yang TERDOKUMENTASI ──
      // Bug lama: seri selalu dimenangkan E/N/T/J tanpa penjelasan.
      // Sekarang: seri dipecah oleh intensitas respons, dan kalau tetap
      // seri, ditandai `forced` sehingga UI wajib menampilkan dua kandidat.
      var pole, forced = false;
      if (a.sum > 0)       pole = p.A;
      else if (a.sum < 0)  pole = p.B;
      else {
        if      (a.extremeA !== a.extremeB) pole = a.extremeA > a.extremeB ? p.A : p.B;
        else if (a.midA !== a.midB)         pole = a.midA > a.midB ? p.A : p.B;
        else { pole = p.A; forced = true; }
      }

      dims[d] = {
        dim: d,
        sum: a.sum,
        n: a.n,
        pole: pole,
        forced: forced,
        clarity: round3(clarity),
        zone: zoneOf(clarity),
        // posisi 0..100 untuk bar dua arah; 50 = tepat di tengah
        barPos: round1(50 + (max ? (a.sum / max) * 50 : 0)),
        labelA: p.labelA,
        labelB: p.labelB,
        labelDominan: pole === p.A ? p.labelA : p.labelB,
        ambiguous: clarity < CONFIG.DUAL_CANDIDATE_BELOW
      };
    }

    var type = dims.arus.pole + dims.pandang.pole + dims.timbang.pole + dims.irama.pole;
    var watakInfo = deriveWatak(dims);

    return {
      dims: dims,
      type: type,
      watak: watakInfo.watak,
      watakAlt: watakInfo.alt,
      watakConfidence: watakInfo.confidence,
      watakBasis: watakInfo.basis,
      needsDualDisplay: watakInfo.alt !== null
    };
  }

  function zoneOf(clarity) {
    if (clarity < CONFIG.ZONE.samar)   return "Samar";
    if (clarity < CONFIG.ZONE.ringan)  return "Ringan";
    if (clarity < CONFIG.ZONE.moderat) return "Moderat";
    return "Kuat";
  }

  /* ── Penurunan Watak menurut Keirsey ──────────────────────────
     N + F → Reka    | N + T → Logika
     S + J → Jaga    | S + P → Guna
     Arus (E/I) tidak menentukan Watak.

     Kalau dimensi penentu berada di zona lemah, kembalikan DUA kandidat
     alih-alih memaksa satu. Ini fix inti untuk keluhan "Samar".
     ───────────────────────────────────────────────────────────── */
  function watakFrom(pandangPole, timbangPole, iramaPole) {
    if (pandangPole === "N") return timbangPole === "F" ? "Reka" : "Logika";
    return iramaPole === "J" ? "Jaga" : "Guna";
  }

  function deriveWatak(dims) {
    var pd = dims.pandang, tb = dims.timbang, ir = dims.irama;
    var primary = watakFrom(pd.pole, tb.pole, ir.pole);
    var alt = null, basis, confidence;

    var flip = function (p) {
      return p === "N" ? "S" : p === "S" ? "N"
           : p === "T" ? "F" : p === "F" ? "T"
           : p === "J" ? "P" : "J";
    };

    // Dimensi penentu mana yang paling lemah?
    var decisive = pd.pole === "N" ? tb : ir;   // penentu kedua
    var weakest = pd.clarity <= decisive.clarity ? pd : decisive;

    if (weakest.clarity < CONFIG.DUAL_CANDIDATE_BELOW) {
      if (weakest === pd) {
        alt = watakFrom(flip(pd.pole), tb.pole, ir.pole);
      } else if (pd.pole === "N") {
        alt = watakFrom(pd.pole, flip(tb.pole), ir.pole);
      } else {
        alt = watakFrom(pd.pole, tb.pole, flip(ir.pole));
      }
      if (alt === primary) alt = null;
    }

    basis = pd.pole === "N" ? ["pandang", "timbang"] : ["pandang", "irama"];
    confidence = Math.min(pd.clarity, decisive.clarity);

    return {
      watak: primary,
      alt: alt,
      basis: basis,
      confidence: round3(confidence),
      confidenceLabel: zoneOf(confidence)
    };
  }

  /* ═══════════════════════════════════════════════════════════
     2. SKOR MINAT / KELOMPOK
     items  : [{ id, kelompok, reverse }]
     answers: { itemId: 1..5 }   5 = Sangat Setuju

     PERBAIKAN INTI (item 1.1 & 1.2):
     - Skor per Kelompok = rata-rata itemnya sendiri pada skala 0-100.
       Ini NORMATIF, artinya bisa dibandingkan antar orang. Wajib untuk B2B,
       karena skor ipsatif lama (r rata-rata -0,19) tidak sah dibandingkan.
     - Tidak ada lagi normalisasi ke total 100 yang menghancurkan sebaran.
       Pada data nyata, rentang normatif 40,4 poin vs 13,4 poin setelah
       normalisasi lama.
     - Profil terkoreksi (centered) mengurangi acquiescence: kurangi
       rata-rata pribadi peserta dari tiap skala. Ini yang menghapus
       keunggulan bawaan Bakti atas Yasa.
     ═══════════════════════════════════════════════════════════ */
  function scoreMinat(items, answers) {
    var byScale = {}, allItemScores = [], i, it, raw, val;

    for (i = 0; i < CONFIG.KELOMPOK.length; i++) byScale[CONFIG.KELOMPOK[i]] = [];

    for (i = 0; i < items.length; i++) {
      it = items[i];
      if (!byScale[it.kelompok]) continue;
      raw = answers[it.id];
      if (raw === undefined || raw === null) continue;
      raw = Number(raw);
      if (it.reverse) raw = 6 - raw;        // 1<->5, 2<->4, 3 tetap
      val = (raw - 1) / 4 * 100;            // 0..100
      byScale[it.kelompok].push(val);
      allItemScores.push(val);
    }

    var grandMean = mean(allItemScores);
    var normatif = {}, centered = {}, counts = {};

    for (i = 0; i < CONFIG.KELOMPOK.length; i++) {
      var k = CONFIG.KELOMPOK[i];
      counts[k] = byScale[k].length;
      normatif[k] = round1(mean(byScale[k]));
      centered[k] = round1(normatif[k] - grandMean);
    }

    var vals = CONFIG.KELOMPOK.map(function (k) { return normatif[k]; });
    var hi = Math.max.apply(null, vals), lo = Math.min.apply(null, vals);
    var diffIndex = round1(hi - lo);

    return {
      normatif: normatif,        // 0-100, bisa dibandingkan antar orang
      centered: centered,        // deviasi dari rata-rata pribadi
      counts: counts,
      grandMean: round1(grandMean),
      diffIndex: diffIndex,
      diffLabel: diffIndex < CONFIG.DIFF.tersebar ? "Tersebar"
               : diffIndex < CONFIG.DIFF.sedang   ? "Sedang" : "Terfokus",
      // Acquiescence: rata-rata pribadi jauh di atas titik tengah 50
      acquiescence: round1(grandMean - 50)
    };
  }

  /* ═══════════════════════════════════════════════════════════
     3. PICK-2
     Tidak lagi masuk skor utama. Dua fungsi saja:
       a. tie-breaker saat #1 dan #2 berdekatan
       b. indeks konsistensi antara pilihan spontan dan self-rating
     answers: { itemId: ["Yasa","Bakti"] }
     ═══════════════════════════════════════════════════════════ */
  function scorePick2(answers) {
    var count = {}, total = 0, i, k, picks;
    for (i = 0; i < CONFIG.KELOMPOK.length; i++) count[CONFIG.KELOMPOK[i]] = 0;

    for (k in answers) {
      if (!answers.hasOwnProperty(k)) continue;
      picks = answers[k] || [];
      for (i = 0; i < picks.length; i++) {
        if (count.hasOwnProperty(picks[i])) { count[picks[i]]++; total++; }
      }
    }

    var share = {};
    for (i = 0; i < CONFIG.KELOMPOK.length; i++) {
      var kk = CONFIG.KELOMPOK[i];
      share[kk] = total ? count[kk] / total : 0;
    }
    return { count: count, total: total, share: share };
  }

  // Korelasi peringkat Spearman antara urutan Pick-2 dan urutan Likert.
  // Rendah = peserta menilai dirinya berbeda dari pilihan spontannya.
  function rankAgreement(normatif, share) {
    function ranks(obj) {
      var arr = CONFIG.KELOMPOK.slice().sort(function (a, b) { return obj[b] - obj[a]; });
      var r = {}, i;
      for (i = 0; i < arr.length; i++) r[arr[i]] = i + 1;
      return r;
    }
    var ra = ranks(normatif), rb = ranks(share), d2 = 0, i, k, n = CONFIG.KELOMPOK.length;
    for (i = 0; i < n; i++) { k = CONFIG.KELOMPOK[i]; d2 += Math.pow(ra[k] - rb[k], 2); }
    return round3(1 - (6 * d2) / (n * (n * n - 1)));
  }

  /* ═══════════════════════════════════════════════════════════
     4. INDEKS KONSISTENSI HOLLAND
     Jarak melingkar pada heksagon R-I-A-S-E-C antara Kelompok #1 dan #2.
       1 = bersebelahan  → profil konsisten, arah karir fokus
       2 = jarak sedang
       3 = berseberangan → profil kombinatif, langka, perlu narasi khusus
     ═══════════════════════════════════════════════════════════ */
  function consistency(k1, k2) {
    var h = CONFIG.HEXAGON;
    var i1 = h.indexOf(k1), i2 = h.indexOf(k2);
    if (i1 < 0 || i2 < 0) return { distance: null, label: "—" };
    var d = Math.abs(i1 - i2);
    d = Math.min(d, h.length - d);
    return {
      distance: d,
      label: d === 1 ? "Konsisten" : d === 2 ? "Sedang" : "Kombinatif"
    };
  }

  /* ═══════════════════════════════════════════════════════════
     5. KUALITAS RESPONS  (item 1.10)
     Flag internal untuk analis. TIDAK ditampilkan ke peserta.
     ═══════════════════════════════════════════════════════════ */
  /* Pasangan konsistensi menggantikan attention check yang terlihat.
     Dua item Watak yang isinya berdekatan ditaruh berjauhan dan ditandai
     field `pasangan`. Kalau jawabannya bertolak belakang dan sama-sama
     tegas, itu tanda menjawab asal, tanpa peserta pernah merasa diuji. */
  function cekPasangan(watakItems, watakAnswers) {
    var grup = {}, i, it, hasil = { diperiksa: 0, bertentangan: 0 };
    for (i = 0; i < (watakItems || []).length; i++) {
      it = watakItems[i];
      if (!it.pasangan) continue;
      (grup[it.pasangan] = grup[it.pasangan] || []).push(it.id);
    }
    for (var k in grup) {
      if (!grup.hasOwnProperty(k) || grup[k].length !== 2) continue;
      var a = Number(watakAnswers[grup[k][0]]), b = Number(watakAnswers[grup[k][1]]);
      if (isNaN(a) || isNaN(b)) continue;
      hasil.diperiksa++;
      // bertentangan hanya kalau keduanya tegas dan berlawanan arah
      if (a * b < 0 && Math.abs(a) === 2 && Math.abs(b) === 2) hasil.bertentangan++;
    }
    return hasil;
  }

  function responseQuality(minatAnswers, validityItems, validityAnswers, meta, watakItems, watakAnswers) {
    var flags = [], vals = [], k, i;

    for (k in minatAnswers) {
      if (minatAnswers.hasOwnProperty(k)) vals.push(Number(minatAnswers[k]));
    }

    // straight-lining
    var s = sd(vals);
    if (vals.length && s < CONFIG.QUALITY.straightLineSD) flags.push("straight_lining");

    // runtun jawaban identik
    var run = 1, maxRun = 1;
    for (i = 1; i < vals.length; i++) {
      if (vals[i] === vals[i - 1]) { run++; if (run > maxRun) maxRun = run; }
      else run = 1;
    }
    if (maxRun >= CONFIG.QUALITY.maxRunLength) flags.push("long_run_" + maxRun);

    // pasangan konsistensi di bank Watak
    var pas = cekPasangan(watakItems, watakAnswers || {});
    var failed = pas.bertentangan;
    if (failed > 0) flags.push("pasangan_bertentangan_" + failed);

    // durasi
    var dur = (meta && meta.durationSec) || null;
    if (dur !== null && dur < CONFIG.QUALITY.minDurationSec) flags.push("too_fast_" + dur + "s");

    return {
      flags: flags,
      passed: flags.length === 0,
      sdLikert: round3(s),
      maxRun: maxRun,
      attentionFailed: failed,
      pasanganDiperiksa: pas.diperiksa,
      durationSec: dur
    };
  }

  /* ═══════════════════════════════════════════════════════════
     6. SKOR LENGKAP
     ═══════════════════════════════════════════════════════════ */
  function computeAll(bank, answers) {
    var w  = scoreWatak(bank.watak, answers.watak || {});
    var m  = scoreMinat(bank.minat, answers.minat || {});
    var p2 = scorePick2(answers.pick2 || {});
    var q  = responseQuality(answers.minat || {}, bank.validity, answers.validity || {},
                             answers.meta, bank.watak, answers.watak || {});

    // Urutkan Kelompok berdasarkan skor NORMATIF
    var order = CONFIG.KELOMPOK.slice().sort(function (a, b) {
      return m.normatif[b] - m.normatif[a];
    });

    // ── Tie-break Pick-2 ────────────────────────────────────
    var tiebreak = { applied: false, reason: null };
    var gap = m.normatif[order[0]] - m.normatif[order[1]];
    if (gap < CONFIG.TIEBREAK_WINDOW) {
      var margin = p2.share[order[1]] - p2.share[order[0]];
      if (margin > CONFIG.TIEBREAK_MIN_MARGIN) {
        var t = order[0]; order[0] = order[1]; order[1] = t;
        tiebreak = {
          applied: true,
          reason: "jarak Likert " + round1(gap) + " pt di bawah ambang; Pick-2 lebih memihak " + order[0]
        };
      } else {
        tiebreak = { applied: false, reason: "jarak " + round1(gap) + " pt, Pick-2 tidak menentukan" };
      }
    }

    var k1 = order[0], k2 = order[1];

    // Indeks tampilan: #1 = 100, sisanya proporsional (item 3.1)
    var top = m.normatif[k1] || 1, indeks = {}, i;
    for (i = 0; i < CONFIG.KELOMPOK.length; i++) {
      var kk = CONFIG.KELOMPOK[i];
      indeks[kk] = Math.round(m.normatif[kk] / top * 100);
    }

    return {
      version: "v3",

      watak: w.watak,
      watakAlt: w.watakAlt,
      watakConfidence: w.watakConfidence,
      watakBasis: w.watakBasis,
      needsDualDisplay: w.needsDualDisplay,
      mbtiType: w.type,
      dims: w.dims,

      kelompok1: k1,
      kelompok2: k2,
      urutanKelompok: order,
      skorNormatif: m.normatif,
      skorCentered: m.centered,
      indeksTampilan: indeks,
      gapTop2: round1(gap),

      paragaId: k1 + "|" + w.watak,
      paragaIdAlt: w.watakAlt ? k1 + "|" + w.watakAlt : null,

      diferensiasi: { index: m.diffIndex, label: m.diffLabel },
      konsistensi: consistency(k1, k2),
      acquiescence: m.acquiescence,
      pick2: { share: p2.share, agreement: rankAgreement(m.normatif, p2.share), tiebreak: tiebreak },

      kualitas: q
    };
  }

  return {
    CONFIG: CONFIG,
    POLES: POLES,
    scoreWatak: scoreWatak,
    scoreMinat: scoreMinat,
    scorePick2: scorePick2,
    consistency: consistency,
    responseQuality: responseQuality,
    computeAll: computeAll,
    zoneOf: zoneOf
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LakonScoring;
