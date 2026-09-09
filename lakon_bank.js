/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — PERAKIT BANK ITEM  v3
   Satu pintu masuk untuk seluruh bank soal 108 item.

   URUTAN MUAT DI index.html (penting, jangan diubah):
     <script src="lakon_items_watak.js"></script>
     <script src="lakon_items_minat.js"></script>
     <script src="lakon_items_pick2.js"></script>
     <script src="lakon_bank.js"></script>
     <script src="lakon_scoring.js"></script>
     <script src="lakon_nuansa.js"></script>
     <script src="app.js"></script>

   Di Code.gs, salin isi kelima file pertama ke atas file, lalu panggil
   LakonBank.build() dan LakonScoring.computeAll() seperti di browser.

   SUSUNAN 108 ITEM
     Watak     48   12 per dimensi, keying seimbang 6/6
     Minat     48    8 per Kelompok, 6 positif + 2 reverse
     Pick-2    10    6 opsi per item, satu opsi per Kelompok
     Validity   2    attention check, tidak memengaruhi skor
═══════════════════════════════════════════════════════════════════════════ */

var LakonBank = (function () {
  "use strict";

  var TARGET = { watak: 48, minat: 48, pick2: 10, validity: 2, total: 108 };

  /* Pencarian bank item.
     TIDAK memakai globalThis. Pada runtime V8 Apps Script, deklarasi var di
     tingkat atas dibagi antar file tetapi tidak terdaftar sebagai properti
     globalThis, sehingga pencarian lewat globalThis mengembalikan bank kosong
     di server TANPA melempar error. Referensi identifier langsung dengan
     penjaga typeof bekerja benar di browser maupun Apps Script. */
  function build() {
    return {
      watak:    (typeof LAKON_ITEMS_WATAK    !== "undefined") ? LAKON_ITEMS_WATAK    : [],
      minat:    (typeof LAKON_ITEMS_MINAT    !== "undefined") ? LAKON_ITEMS_MINAT    : [],
      pick2:    (typeof LAKON_ITEMS_PICK2    !== "undefined") ? LAKON_ITEMS_PICK2    : [],
      validity: (typeof LAKON_ITEMS_VALIDITY !== "undefined") ? LAKON_ITEMS_VALIDITY : []
    };
  }

  /* Urutan tampil gabungan.
     Bagian sengaja diselang: Minat dipecah dua oleh Pick-2 agar peserta
     tidak menghadapi 48 pernyataan Likert berturut-turut, yang merupakan
     pemicu utama straight-lining. Attention check disisipkan ke dalam
     aliran Minat pada posisi yang sudah ditentukan di item validity. */
  function urutanTampil() {
    var bank = build();
    var w = (typeof lakonUrutkanItemWatak === "function")
              ? lakonUrutkanItemWatak(bank.watak) : bank.watak.slice();
    var m = (typeof lakonUrutkanItemMinat === "function")
              ? lakonUrutkanItemMinat(bank.minat) : bank.minat.slice();

    // sisipkan attention check ke dalam aliran Minat
    var v = bank.validity.slice().sort(function (a, b) { return b.sisip - a.sisip; });
    var mv = m.slice(), i;
    for (i = 0; i < v.length; i++) {
      var pos = Math.min(Math.max(v[i].sisip, 0), mv.length);
      mv.splice(pos, 0, v[i]);
    }

    var mid = Math.ceil(mv.length / 2);
    return []
      .concat(w.map(tag("watak")))
      .concat(mv.slice(0, mid).map(tagMinat))
      .concat(bank.pick2.map(tag("pick2")))
      .concat(mv.slice(mid).map(tagMinat));

    function tag(sec) { return function (it) { var c = clone(it); c.sec = sec; return c; }; }
    function tagMinat(it) {
      var c = clone(it);
      c.sec = (it.expected !== undefined) ? "validity" : "minat";
      return c;
    }
    function clone(o) { var c = {}, k; for (k in o) if (o.hasOwnProperty(k)) c[k] = o[k]; return c; }
  }

  /* ═════════════════════════════════════════════════════════════
     VERIFIKASI MENYELURUH
     Jalankan setiap kali bank item disunting, dan sebelum setiap
     deploy. Menjumlahkan seluruh pemeriksaan per bagian, lalu
     memeriksa hal-hal yang hanya kelihatan di tingkat gabungan.
     ═════════════════════════════════════════════════════════════ */
  function verifikasi() {
    var bank = build(), masalah = [], laporan = {}, i, j;

    // ── pemeriksaan per bagian ──
    if (typeof lakonPeriksaBankWatak === "function") {
      laporan.watak = lakonPeriksaBankWatak(bank.watak);
      masalah = masalah.concat(laporan.watak.masalah);
    } else masalah.push("lakonPeriksaBankWatak tidak dimuat");

    if (typeof lakonPeriksaBankMinat === "function") {
      laporan.minat = lakonPeriksaBankMinat(bank.minat);
      masalah = masalah.concat(laporan.minat.masalah);
    } else masalah.push("lakonPeriksaBankMinat tidak dimuat");

    if (typeof lakonPeriksaBankPick2 === "function") {
      laporan.pick2 = lakonPeriksaBankPick2(bank.pick2, bank.validity);
      masalah = masalah.concat(laporan.pick2.masalah);
    } else masalah.push("lakonPeriksaBankPick2 tidak dimuat");

    // ── jumlah per bagian ──
    var jml = {
      watak: bank.watak.length, minat: bank.minat.length,
      pick2: bank.pick2.length, validity: bank.validity.length
    };
    jml.total = jml.watak + jml.minat + jml.pick2 + jml.validity;
    laporan.jumlah = jml;

    var key;
    for (key in TARGET) {
      if (!TARGET.hasOwnProperty(key)) continue;
      if (jml[key] !== TARGET[key])
        masalah.push("jumlah " + key + " = " + jml[key] + ", seharusnya " + TARGET[key]);
    }

    // ── id unik lintas seluruh bagian ──
    var semua = [], seen = {};
    ["watak", "minat", "pick2", "validity"].forEach(function (s) {
      for (var n = 0; n < bank[s].length; n++) semua.push(bank[s][n].id);
    });
    for (i = 0; i < semua.length; i++) {
      if (seen[semua[i]]) masalah.push("id dipakai lebih dari sekali lintas bagian: " + semua[i]);
      seen[semua[i]] = true;
    }

    // ── teks pernyataan tidak boleh kembar ──
    // Dua item berbunyi hampir sama akan menaikkan alfa secara semu
    // tanpa menambah informasi apa pun.
    var teks = [];
    for (i = 0; i < bank.watak.length; i++) teks.push({ id: bank.watak[i].id, s: bank.watak[i].id_s });
    for (i = 0; i < bank.minat.length; i++) teks.push({ id: bank.minat[i].id, s: bank.minat[i].id_s });
    for (i = 0; i < teks.length; i++) {
      for (j = i + 1; j < teks.length; j++) {
        if (miripKuat(teks[i].s, teks[j].s))
          masalah.push("teks nyaris kembar: " + teks[i].id + " dan " + teks[j].id);
      }
    }

    // ── urutan tampil tidak boleh menumpuk sejenis ──
    var urut = urutanTampil(), run = 1, maxRun = 1, pemicu = "";
    for (i = 1; i < urut.length; i++) {
      var a = urut[i - 1], b = urut[i];
      var sama = (a.dim && b.dim && a.dim === b.dim) ||
                 (a.kelompok && b.kelompok && a.kelompok === b.kelompok);
      if (sama) { run++; if (run > maxRun) { maxRun = run; pemicu = b.dim || b.kelompok; } }
      else run = 1;
    }
    laporan.runTerpanjang = { panjang: maxRun, pada: pemicu };
    if (maxRun > 2) masalah.push("ada " + maxRun + " item sejenis berturut-turut (" + pemicu + ")");

    laporan.totalTampil = urut.length;
    if (urut.length !== jml.total)
      masalah.push("urutan tampil memuat " + urut.length + " item, bank memuat " + jml.total);

    return { lolos: masalah.length === 0, masalah: masalah, laporan: laporan };
  }

  /* dua teks dianggap nyaris kembar bila berbagi >=70% kata bermakna */
  function miripKuat(a, b) {
    var stop = { yang:1, dan:1, atau:1, saya:1, untuk:1, pada:1, dari:1, dengan:1,
                 tidak:1, lebih:1, itu:1, ini:1, akan:1, bisa:1, sudah:1, juga:1,
                 daripada:1, saat:1, kalau:1, bagi:1, ada:1, dalam:1, adalah:1 };
    function kata(s) {
      var arr = String(s).toLowerCase().split(/[^a-z]+/), out = [], seen = {}, i;
      for (i = 0; i < arr.length; i++)
        if (arr[i].length > 3 && !stop[arr[i]] && !seen[arr[i]]) { seen[arr[i]] = 1; out.push(arr[i]); }
      return out;
    }
    var wa = kata(a), wb = kata(b);
    if (!wa.length || !wb.length) return false;
    var sh = 0, i;
    for (i = 0; i < wa.length; i++) if (wb.indexOf(wa[i]) >= 0) sh++;
    return sh / Math.min(wa.length, wb.length) >= 0.7;
  }

  return { TARGET: TARGET, build: build, urutanTampil: urutanTampil, verifikasi: verifikasi };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LakonBank;
