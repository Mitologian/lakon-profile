/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — app.js  v4
   FILE UTUH SIAP TIMPA. Menggantikan app.js v3.

   Perubahan terbesar dari v3: halaman hasil tidak lagi membaca satu objek
   PARAGA, melainkan tiga lapis isi lewat LakonReport. app.js kembali jadi
   perekat, bukan tempat menyimpan isi maupun menulis HTML panjang.

   URUTAN MUAT DI index.html (menentukan):
     lakon_label.js
     lakon_content.js            ← PERAN_IDEAL, KELOMPOK_COLORS, KELOMPOK_LABELS
     lakon_kelompok_content.js
     lakon_watak_content.js
     lakon_paraga.js
     lakon_items_watak.js · lakon_items_minat.js · lakon_items_pick2.js
     lakon_bank.js · lakon_scoring.js · lakon_assessment.js
     lakon_nuansa.js
     lakon_report.js
     lakon_paraga_card_content.js · lakon_paraga_card.js · lakon_rating.js
     app.js

   TITIK PASANG DI index.html:
     #r-name #r-sub #r-tags #r-good-fit   hero
     #rb-atas          Pertemuan Identitasmu + Kekuatan Utamamu
     #r-kelompok-graph grafik minat
     #rb-dimensi       empat sumbu + dua kandidat Watak
     #rb-tengah        Situasi yang Kamu Cari + Yang Terlihat pada Caramu
     #r-langkah        Tiga Langkah Berikutnya
     #rb-terkunci      empat blok terkunci

   BLOK 4C DISELESAIKAN DI SINI. Field lama tidak dibaca lagi:
     PARAGA.overview          → Paraga.pertemuan
     PARAGA.lingkungan_ideal  → Kelompok.suasana
     PARAGA.kekuatan          → Paraga.kekuatan (orang kedua)
     PARAGA.tags/tagClasses   → data mati
   Keempatnya masih ADA di lakon_content.js sebagai cadangan. Hapus
   belakangan, setelah penyambungan terbukti jalan.
═══════════════════════════════════════════════════════════════════════════ */

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZ4Yez1bc5K-COQCgCnqZWJGwHm6vx2n9tmyd25kBO9PcjqG6y1orDVxbRh64vysFv/exec";
var URL_BATCH = new URLSearchParams(window.location.search).get("batch") || "General";
var WA_LINK = "https://wa.me/6282126373601";

var lang = "id";
function L() { return lang === "id"; }

var KEL_TAG_CLASS = {
  Yasa: "rtag-yasa", Nalar: "rtag-nalar", Karya: "rtag-amber",
  Bakti: "rtag-sage", Karsa: "rtag-karsa", Tata: "rtag-tata"
};

var DIM_WARNA = { arus: "#C17A3C", pandang: "#3A6B9E", timbang: "#4A7C6B", irama: "#7B5A9E" };

/* Baris tabel Peran yang tampil di halaman gratis. Sisanya dikunci. */
var PERAN_PREVIEW = 3;

function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function T(o) { return o ? (L() ? o.id : o.en) : ""; }
function LBL(g, k) { return LakonReport.label(g, k); }
function set(id, html) { var e = document.getElementById(id); if (e) e.innerHTML = html; }

var hasilTerakhir = null;


/* ═══════════════════════════════════════════════════════════
   HALAMAN HASIL
   ═══════════════════════════════════════════════════════════ */
function showResult(skor, dariServer) {
  if (!skor) { console.error("showResult dipanggil tanpa hasil skoring"); return; }
  hasilTerakhir = skor;

  var cek = LakonReport.periksa();
  if (!cek.lolos) console.error("Isi lapis tidak lengkap:", cek.masalah);

  isiHero(skor);
  set("rb-atas", LakonReport.gratis(skor));
  isiGrafik(skor);
  set("rb-dimensi", htmlDimensi(skor));
  set("rb-tengah", LakonReport.gratisLanjutan(skor));
  set("r-langkah", htmlLangkah(skor));
  set("rb-terkunci", htmlTerkunci(skor));

  if (typeof mountResultCard === "function") mountResultCard(skor.kelompok1, skor.watak);
  if (typeof mountRating === "function") mountRating(skor.kelompok1, skor.watak, dariServer);

  showScreen("screen-result");
}


/* ── HERO ─────────────────────────────────────────────────────
   Peringatan margin tipis TIDAK ditampilkan di sini. Hal pertama
   setelah nama Paraga tidak boleh berupa sanggahan; margin tipis
   dibahas di bagian Empat Sumbu sebagai dua kandidat setara. */
function isiHero(skor) {
  var kunci = skor.kelompok1 + "|" + skor.watak;
  var P = (typeof LAKON_PARAGA_CONTENT !== "undefined") ? LAKON_PARAGA_CONTENT[kunci] : null;

  var n = document.getElementById("r-name");
  var s = document.getElementById("r-sub");
  if (n) n.textContent = skor.kelompok1 + " " + skor.watak;
  if (s) s.textContent = P ? P.en : "";

  set("r-tags",
    '<span class="rtag ' + (KEL_TAG_CLASS[skor.kelompok1] || "rtag-grey") + '">' + esc(skor.kelompok1) + "</span>" +
    '<span class="rtag rtag-grey">' + esc(T(LAKON_LABEL.lapis.watak.istilah)) + " " + esc(skor.watak) + "</span>" +
    '<span class="rtag rtag-nuance">' + esc(T(LAKON_LABEL.lapis.nuansa.istilah)) + " " + esc(skor.kelompok2) + "</span>");

  var kons = skor.konsistensi || {};
  var teks = kons.label === "Konsisten"
    ? (L() ? "Dua minat teratasmu berdekatan, jadi arah karirmu cenderung terfokus."
           : "Your top two interests sit close together, so your direction tends to be focused.")
    : kons.label === "Kombinatif"
    ? (L() ? "Dua minat teratasmu berjauhan. Kombinasi ini tidak umum, dan biasanya justru jadi pembeda."
           : "Your top two interests sit far apart. That combination is uncommon, and usually becomes a differentiator.")
    : (L() ? "Dua minat teratasmu saling melengkapi."
           : "Your top two interests complement each other.");

  set("r-good-fit",
    '<div class="good-fit-badge"><span class="good-fit-label">' +
    esc(T(LAKON_LABEL.lapis.nuansa.penjelas)) + "</span>" +
    '<span class="good-fit-kelompok">' + esc(skor.kelompok2) + "</span></div>" +
    '<p class="good-fit-desc">' + teks + "</p>");
}


/* ── GRAFIK MINAT ─────────────────────────────────────────────
   Panjang bar dari indeksTampilan (#1 = 100). Angka di sebelahnya
   skor normatif 0-100 yang sah dibandingkan antar orang.
   Skor lama dinormalisasi agar keenamnya berjumlah 100, sehingga
   rata-ratanya terpaksa 16,7 dan yang tertinggi jarang lewat 25.
   Pada 43 responden nyata, rentang di layar hanya 13,4 poin
   padahal rentang normatifnya 40,4 poin.                        */
function isiGrafik(skor) {
  var bar = skor.urutanKelompok.map(function (k, i) {
    var w = Math.max(4, skor.indeksTampilan[k]);
    var col = (typeof KELOMPOK_COLORS !== "undefined" && KELOMPOK_COLORS[k]) || { bar: "#888" };
    var nama = (typeof KELOMPOK_LABELS !== "undefined" && KELOMPOK_LABELS[k]) ? T(KELOMPOK_LABELS[k]) : k;
    var badge = i === 0 ? '<span class="graph-badge best">Best Fit</span>'
              : i === 1 ? '<span class="graph-badge good">Good Fit</span>' : "";
    return '<div class="graph-row"><div class="graph-label">' + esc(nama) + " " + badge + "</div>" +
      '<div class="graph-track"><div class="graph-fill" style="width:' + w + "%;background:" + col.bar + '"></div></div>' +
      '<div class="graph-pct" style="color:' + col.bar + '">' + skor.skorNormatif[k] + "</div></div>";
  }).join("");

  var d = skor.diferensiasi || { label: "Sedang" };
  var narasi = d.label === "Terfokus"
    ? (L() ? "Minatmu terfokus. Jarak antara yang paling menarik dan paling tidak menarik bagimu lebar, dan itu memudahkan menyempitkan pilihan."
           : "Your interests are focused. The gap between what draws you most and least is wide, which makes narrowing down easier.")
    : d.label === "Tersebar"
    ? (L() ? "Minatmu tersebar cukup merata. Ini bukan kelemahan: kamu punya keleluasaan lintas bidang, dan Watak-mu jadi penentu yang lebih menentukan arah daripada bidangnya sendiri."
           : "Your interests are spread fairly evenly. That is not a weakness: you have latitude across fields, and your Watak becomes the stronger determinant than the field itself.")
    : (L() ? "Minatmu punya arah yang jelas, dengan beberapa bidang pendukung yang cukup kuat."
           : "Your interests have a clear direction, with several supporting fields close behind.");

  /* Heksagon ditaruh SEBELUM bar. Bar menjawab "siapa yang tertinggi";
     heksagon menjawab "seberapa jauh jaraknya", dan pertanyaan kedua lebih
     dulu membentuk cara membaca angkanya. */
  var hex = "";
  if (typeof LakonHexagon !== "undefined") {
    hex = '<div class="hex-wrap">' + LakonHexagon.svg(skor, { bahasa: lang }) + "</div>" +
          LakonHexagon.keterangan(skor, lang);
  }

  set("r-kelompok-graph",
    '<h3 class="rb-judul">' + esc(LBL("lain", "grafik")) + "</h3>" + hex +
    '<p class="graph-howto">' + (L()
      ? "Angka di kanan adalah skor 0\u2013100 untuk tiap bidang, dihitung terpisah. Keenamnya tidak dibagi rata, jadi kamu bisa punya beberapa skor tinggi sekaligus."
      : "The number on the right is a 0\u2013100 score for each field, computed independently. The six are not divided between them, so several can be high at once.") + "</p>" +
    '<div class="graph-bars">' + bar + "</div>" +
    '<div class="graph-diff"><strong>' + (L() ? "Sebaran minat: " : "Interest spread: ") +
    esc(d.label) + "</strong><br>" + narasi + "</div>");
}


/* ── EMPAT SUMBU ──────────────────────────────────────────────
   Bagian "Nuansa Watak" yang dulu terkunci sudah dihapus: isinya
   hanya menayangkan ulang dua dari empat sumbu yang sudah gratis,
   jadi peserta diminta membayar untuk data yang sudah dilihat.   */
function htmlDimensi(skor) {
  var urutan = ["pandang", "timbang", "irama", "arus"];
  var h = '<h3 class="rb-judul">' + esc(LBL("lain", "dimensi")) + "</h3>" +
    '<p class="rb-lead">' + (L()
      ? "Empat sumbu ini menggambarkan cara kamu menyerap keadaan dan mengambil keputusan. Tanda \u25c6 menandai dua sumbu yang ikut menentukan Watak-mu."
      : "These four axes describe how you take in a situation and decide. The \u25c6 marks the two that determine your Watak.") + "</p>";

  for (var i = 0; i < urutan.length; i++) {
    var d = skor.dims[urutan[i]];
    if (!d) continue;
    h += barDimensi(d, urutan[i], (skor.watakBasis || []).indexOf(urutan[i]) >= 0);
  }
  if (skor.needsDualDisplay && skor.watakAlt) h += htmlDuaKandidat(skor);
  return h;
}

function barDimensi(d, kunci, pembentuk) {
  var pos = Math.max(2, Math.min(98, d.barPos));
  var zona = LAKON_LABEL.zona[d.zone] ? T(LAKON_LABEL.zona[d.zone]) : d.zone;
  var tanda = pembentuk
    ? '<span class="dim2-key" title="' +
      (L() ? "Sumbu ini ikut menentukan Watak-mu" : "This axis helps determine your Watak") + '">\u25c6</span>' : "";

  return '<div class="dim2-block"><div class="dim2-head">' +
    '<span class="dim2-title">' + esc(d.labelDominan) + " " + tanda + "</span>" +
    '<span class="dim2-zone dim2-zone-' + d.zone.toLowerCase() + '">' + esc(zona) + "</span></div>" +
    '<div class="dim2-poles"><span>' + esc(d.labelB) + "</span><span>" + esc(d.labelA) + "</span></div>" +
    '<div class="dim2-track"><div class="dim2-center"></div>' +
    '<div class="dim2-marker" style="left:' + pos + "%;background:" + DIM_WARNA[kunci] + '"></div></div></div>';
}

/* Dua kandidat Watak.
   Sistem lama menampilkan satu Watak plus lencana "Samar" dan ajakan
   konsultasi, yang terbaca sebagai alat mengaku gagal. Pada 43 responden
   lama, 45% mendapat minimal satu Samar dan 88% minimal satu zona lemah,
   jadi hampir semua orang melihat sanggahan itu.                        */
function htmlDuaKandidat(skor) {
  var a = skor.watak, b = skor.watakAlt;
  var beda = {
    "Logika|Reka": { id: "Reka bergerak dari makna dan orang; Logika bergerak dari sistem dan konsistensi.",
                     en: "Reka moves from meaning and people; Logika moves from systems and consistency." },
    "Guna|Jaga":   { id: "Jaga bergerak dari standar dan keandalan; Guna bergerak dari situasi dan tindakan.",
                     en: "Jaga moves from standards and reliability; Guna moves from the situation and action." },
    "Jaga|Reka":   { id: "Reka bergerak dari kemungkinan; Jaga bergerak dari apa yang sudah terbukti.",
                     en: "Reka moves from possibility; Jaga moves from what is already proven." },
    "Guna|Logika": { id: "Logika bergerak dari rancangan; Guna bergerak dari percobaan langsung.",
                     en: "Logika moves from design; Guna moves from direct trial." }
  };
  var teks = beda[[a, b].sort().join("|")];

  return '<div class="dual-watak"><div class="dual-watak-h">' + esc(LBL("lain", "dual")) + "</div>" +
    '<div class="dual-watak-pair"><span class="dual-chip on">' + esc(a) + "</span>" +
    '<span class="dual-vs">' + (L() ? "atau" : "or") + "</span>" +
    '<span class="dual-chip">' + esc(b) + "</span></div>" +
    (teks ? '<p class="dual-watak-p">' + esc(T(teks)) + "</p>" : "") +
    '<p class="dual-watak-p">' + (L()
      ? "Kami menampilkan <strong>" + esc(a) + "</strong> sebagai perkiraan terbaik. Sebagian orang memang berada di perbatasan, dan itu bukan kekurangan pada dirimu maupun pada hasilnya. Mana dari dua deskripsi di atas yang lebih terasa seperti kamu?"
      : "We show <strong>" + esc(a) + "</strong> as the best estimate. Some people genuinely sit on the boundary, and that is not a shortcoming in you or in the result. Which of the two feels more like you?") + "</p>" +
    '<a class="dual-watak-cta" href="' + WA_LINK + '" target="_blank" rel="noopener">' +
    (L() ? "Bahas lewat WhatsApp" : "Talk it through on WhatsApp") + "</a></div>";
}


/* ── TIGA LANGKAH BERIKUTNYA ──────────────────────────────────
   Versi lama berhenti di ajakan membeli. Untuk alat yang mengaku
   developmental, tidak adanya tindak lanjut adalah kontradiksi.
   Ketiganya disusun dari hasil, bukan dari daftar umum.          */
function htmlLangkah(skor) {
  var k1 = skor.kelompok1, k2 = skor.kelompok2, w = skor.watak;
  var d = skor.diferensiasi || { label: "Sedang" };

  var l1 = d.label === "Terfokus"
    ? (L() ? "Minatmu terpusat di <strong>" + esc(k1) + "</strong>. Pilih satu peran nyata di bidang itu, lalu cari satu orang yang sudah menjalaninya dan tanyakan seperti apa hari-harinya. Bacaan tidak akan memberitahumu itu."
           : "Your interests centre on <strong>" + esc(k1) + "</strong>. Pick one concrete role there, then find someone already doing it and ask what their days look like. Reading will not tell you that.")
    : d.label === "Tersebar"
    ? (L() ? "Minatmu tersebar cukup rata, jadi menyempitkan lewat bidang tidak akan menolong. Mulai dari cara kerja: cari peran yang <strong>bentuk pekerjaannya</strong> cocok dengan Watak " + esc(w) + ", apa pun industrinya."
           : "Your interests are fairly even, so narrowing by field will not help. Start from how you work: look for roles whose <strong>shape</strong> suits Watak " + esc(w) + ", whatever the industry.")
    : (L() ? "Arah utamamu <strong>" + esc(k1) + "</strong> dengan <strong>" + esc(k2) + "</strong> tepat di belakangnya. Cari peran yang menyentuh keduanya sekaligus, bukan memilih salah satu."
           : "Your main direction is <strong>" + esc(k1) + "</strong> with <strong>" + esc(k2) + "</strong> close behind. Look for roles touching both rather than picking one.");

  var l2 = skor.needsDualDisplay && skor.watakAlt
    ? (L() ? "Watak-mu ada di perbatasan <strong>" + esc(w) + "</strong> dan <strong>" + esc(skor.watakAlt) + "</strong>. Selama seminggu ke depan, catat satu keputusan tiap hari dan tandai mana dari dua cara itu yang kamu pakai. Polanya akan lebih jelas dari satu tes mana pun."
           : "Your Watak sits between <strong>" + esc(w) + "</strong> and <strong>" + esc(skor.watakAlt) + "</strong>. Over the next week, note one decision each day and mark which way you used. The pattern will show more clearly than any single test.")
    : (L() ? "Watak <strong>" + esc(w) + "</strong> keluar cukup jelas. Uji sekali: ingat satu proyek yang paling memuaskan buatmu, lalu periksa apakah cara kamu mengerjakannya cocok dengan deskripsi di atas. Kalau tidak, itu bahan bagus untuk dibicarakan."
           : "Watak <strong>" + esc(w) + "</strong> came out clearly. Test it once: recall the project that satisfied you most, then check whether how you worked matches the description above. If it does not, that is worth talking through.");

  var l3 = (skor.konsistensi || {}).label === "Kombinatif"
    ? (L() ? "Gabungan <strong>" + esc(k1) + "</strong> dan <strong>" + esc(k2) + "</strong> jarang muncul bersamaan. Alih-alih memilih salah satu, cari bidang yang justru butuh keduanya."
           : "The pairing of <strong>" + esc(k1) + "</strong> and <strong>" + esc(k2) + "</strong> rarely occurs together. Rather than choosing one, look for fields that need both.")
    : (L() ? "Tulis satu kalimat: \u201cSaya paling berguna ketika ___.\u201d Isi dengan kata-katamu sendiri, bukan menyalin dari halaman ini. Kalau kalimat itu terasa benar, kamu punya penyaring untuk semua tawaran berikutnya."
           : "Write one sentence: \u201cI am most useful when ___.\u201d Fill it in your own words, not copied from this page. If it rings true, you have a filter for every offer that comes next.");

  var judul = L()
    ? ["Persempit lewat kenyataan, bukan bacaan", "Uji hasilnya pada dirimu sendiri", "Rumuskan satu kalimat penyaring"]
    : ["Narrow it through reality, not reading", "Test the result against yourself", "Write one filtering sentence"];

  return '<h3 class="rb-judul">' + esc(LBL("lain", "langkah")) + "</h3>" +
    [l1, l2, l3].map(function (x, i) {
      return '<div class="langkah-item"><div class="langkah-num">' + (i + 1) + "</div>" +
        '<div class="langkah-body"><div class="langkah-h">' + esc(judul[i]) + "</div>" +
        '<p class="langkah-p">' + x + "</p></div></div>";
    }).join("");
}


/* ── EMPAT BLOK TERKUNCI ──────────────────────────────────────
   Blok A setengah terbuka: satu bagian tampil utuh sebagai bukti.
   Tabel Peran Ideal disisipkan ke blok C, tiga baris tampil.
   Sembilan blok tertutup rapat terbaca sebagai dinding; bukti
   nyata lebih meyakinkan daripada rasa penasaran.                */
function htmlTerkunci(skor) {
  var blok = LakonReport.terkunci(skor);
  if (!blok || !blok.length) return "";

  /* Tabel Peran disisipkan ke slot yang disediakan LakonReport, bukan
     lewat pencocokan judul. Pencocokan judul rapuh: begitu labelnya
     disunting di lakon_label.js, tabelnya hilang tanpa error apa pun. */
  var slot = '<div id="rb-peran-slot"></div>';
  if (blok[2].tertutup.indexOf(slot) >= 0)
    blok[2].tertutup = blok[2].tertutup.replace(slot, htmlPeran(skor));
  else console.warn("Slot tabel Peran tidak ditemukan di blok terkunci C.");

  var h = '<div class="locked-intro no-print"><div class="locked-intro-line"></div><span>' +
    (L() ? "Empat bagian berikut ada di laporan lengkap" : "Four more sections are in the full report") +
    '</span><div class="locked-intro-line"></div></div>';

  for (var i = 0; i < blok.length; i++) {
    var b = blok[i];
    h += '<div class="rb-kunci' + (b.terbuka ? " rb-kunci-separuh" : "") + '">' +
      '<div class="rb-kunci-h">' + esc(b.judul) + "</div>" +
      (b.terbuka || "") +
      '<div class="rb-kunci-isi">' + b.tertutup + "</div>" +
      '<div class="rb-kunci-lock no-print"><span class="lock-icon">\ud83d\udd12</span> ' +
      (L() ? b.sisa + " bagian lagi di laporan lengkap" : b.sisa + " more sections in the full report") +
      "</div></div>";
  }
  return h;
}


/* ── TABEL PERAN IDEAL ────────────────────────────────────────
   FIT_LABEL kini dwibahasa. Legenda hanya menampilkan tingkat yang
   benar-benar muncul; versi lama selalu memuat "Bisa" padahal
   blendPeran() membuangnya setiap kali ada Nuansa.                */
function susunPratinjau(rows, batas) {
  var out = [], dipakai = {}, i;

  function ambil(uji) {
    for (var j = 0; j < rows.length; j++) {
      if (dipakai[j]) continue;
      if (!uji(rows[j])) continue;
      dipakai[j] = true; out.push(rows[j]); return true;
    }
    return false;
  }

  ambil(function (r) { return !r.isNuansa && r.fit === "ideal"; });
  ambil(function (r) { return r.isNuansa; });
  ambil(function (r) { return !r.isNuansa && r.fit === "cocok"; });

  // lengkapi kalau salah satu jenis tidak tersedia
  for (i = 0; i < rows.length && out.length < batas; i++)
    if (!dipakai[i]) { dipakai[i] = true; out.push(rows[i]); }

  return out.slice(0, batas);
}

var FIT_LABEL = {
  ideal: { id: "Ideal", en: "Ideal",    cls: "peran-ideal" },
  cocok: { id: "Cocok", en: "Strong",   cls: "peran-cocok" },
  bisa:  { id: "Bisa",  en: "Possible", cls: "peran-bisa"  }
};

function htmlPeran(skor) {
  var kunci = skor.kelompok1 + "|" + skor.watak;
  var pd = (typeof PERAN_IDEAL !== "undefined") ? PERAN_IDEAL[kunci] : null;
  if (!pd) return "";

  var nuPd = PERAN_IDEAL[skor.kelompok2 + "|" + skor.watak];
  var blend = (typeof LakonNuansa !== "undefined" && nuPd)
    ? LakonNuansa.blendPeran(pd.posisi, nuPd.posisi, skor.kelompok2, lang)
    : { rows: pd.posisi.slice(), label: "" };

  /* Pratinjau TIDAK diambil dari tiga baris teratas begitu saja.
     blendPeran() menaruh baris nuansa di posisi 7 dan 8, jadi memotong
     tiga teratas membuat seluruh kerja mesin Nuansa tidak pernah terlihat
     peserta, dan legendanya cuma memuat satu tingkat karena ketiganya
     sama-sama "Ideal".

     Pratinjau disusun sengaja: satu peran utama, satu peran nuansa yang
     bertanda, dan satu peran bertingkat "Cocok". Dengan begitu peserta
     melihat bahwa minat keduanya benar-benar mengubah daftar, dan melihat
     bahwa tingkat kecocokan memang bergradasi. */
  var tampil = susunPratinjau(blend.rows, PERAN_PREVIEW);
  var sisa = Math.max(0, blend.rows.length - tampil.length);
  var munculFit = {};

  var baris = tampil.map(function (x) {
    var f = FIT_LABEL[x.fit] || FIT_LABEL.bisa;
    munculFit[x.fit || "bisa"] = true;
    var tag = x.isNuansa ? ' <span class="peran-nuansa-tag">\u2197 ' + esc(blend.label) + "</span>" : "";
    return '<tr class="peran-row"><td class="peran-td-fit">' +
      '<span class="peran-dot ' + f.cls + '"></span>' +
      '<span class="peran-fit-lbl ' + f.cls + '">' + T(f) + "</span></td>" +
      '<td class="peran-td-posisi"><div class="peran-nama">' + esc(x.nama) + tag + "</div>" +
      '<span class="peran-level">' + esc(x.level) + "</span></td>" +
      '<td class="peran-td-desc">' + esc(x.peran) + "</td></tr>";
  }).join("");

  var legenda = ["ideal", "cocok", "bisa"].filter(function (f) { return munculFit[f]; })
    .map(function (f) {
      return '<span class="legend-item"><span class="peran-dot ' + FIT_LABEL[f].cls + '"></span>' +
        T(FIT_LABEL[f]) + "</span>";
    }).join("");

  /* pd.naratif hanya berbahasa Indonesia. Untuk EN paragrafnya dilewati
     sampai naratif_en ditulis; menampilkan teks Indonesia di halaman
     Inggris lebih buruk daripada tidak menampilkan apa pun. */
  return (L() && pd.naratif ? '<p class="rb-p">' + esc(pd.naratif) + "</p>" : "") +
    '<div class="peran-legend">' + legenda + "</div>" +
    '<div class="peran-table-wrap"><table class="peran-table"><tbody>' + baris + "</tbody></table></div>" +
    (sisa > 0 ? '<div class="peran-sisa">+ ' + sisa + " " +
      (L() ? "posisi lainnya di laporan lengkap" : "more positions in the full report") + "</div>" : "");
}


/* ═══════════════════════════════════════════════════════════
   BAHASA, LAYAR, UTILITAS
   ═══════════════════════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  var tombol = document.querySelectorAll(".lang-btn");
  for (var i = 0; i < tombol.length; i++)
    tombol[i].classList.toggle("on", tombol[i].textContent.trim().toLowerCase() === l);

  var el = document.querySelectorAll("[data-" + l + "]");
  for (var j = 0; j < el.length; j++) {
    if (el[j].tagName === "INPUT") continue;
    var v = el[j].getAttribute("data-" + l);
    if (v !== null) el[j].textContent = v;
  }

  var layar = document.getElementById("screen-assessment");
  if (layar && layar.classList.contains("active") && typeof LakonAssessment !== "undefined")
    LakonAssessment.renderUlang();

  /* Halaman hasil dirender ulang, karena isinya datang dari data,
     bukan dari atribut data-id/data-en di HTML. */
  var hasil = document.getElementById("screen-result");
  if (hasil && hasil.classList.contains("active") && hasilTerakhir) showResult(hasilTerakhir);
}

function showScreen(id) {
  var s = document.querySelectorAll(".screen");
  for (var i = 0; i < s.length; i++) s[i].classList.remove("active");
  var t2 = document.getElementById(id);
  if (t2) t2.classList.add("active");
  window.scrollTo(0, 0);
}

function goToAssessment() {
  showScreen("screen-assessment");
  if (LakonAssessment.adaProgresTersimpan()) {
    var lanjut = window.confirm(L()
      ? "Kamu punya pengerjaan yang belum selesai. Lanjutkan dari terakhir?"
      : "You have an unfinished attempt. Continue where you left off?");
    if (lanjut) { LakonAssessment.pulihkanProgres(); return; }
    LakonAssessment.hapusProgres();
  }
  LakonAssessment.mulai();
}

function showToast(msg) {
  var t2 = document.getElementById("toast");
  if (!t2) { console.log(msg); return; }
  t2.textContent = msg;
  t2.classList.add("show");
  setTimeout(function () { t2.classList.remove("show"); }, 2500);
}

function cetakHasil() { window.print(); }


/* ═══════════════════════════════════════════════════════════
   INISIALISASI
   ═══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof LakonAssessment === "undefined" || typeof LakonScoring === "undefined" ||
      typeof LakonReport === "undefined") {
    console.error("Berkas mesin belum dimuat. Periksa urutan <script> di index.html.");
    return;
  }

  var isi = LakonReport.periksa();
  if (!isi.lolos) console.error("Isi lapis tidak lengkap:", isi.masalah);

  var ok = LakonAssessment.init({ endpoint: APPS_SCRIPT_URL, batch: URL_BATCH });
  if (!ok) {
    showToast(L() ? "Gagal memuat soal. Muat ulang halaman." : "Failed to load questions. Please reload.");
    return;
  }
  LakonAssessment.pasangListener();

  /* Angka soal diisi dari kode, bukan diketik di HTML. Angka "90" yang lama
     tidak pernah cocok dengan versi mana pun: versi pertama 66, kedua 72. */
  var statN = document.getElementById("hero-stat-n");
  if (statN) statN.textContent = LakonAssessment.totalItem();

  document.addEventListener("keydown", function (e) {
    var layar = document.getElementById("screen-assessment");
    if (!layar || !layar.classList.contains("active")) return;
    if (e.key === "ArrowRight") LakonAssessment.maju();
    if (e.key === "ArrowLeft") LakonAssessment.mundur();
  });
});
