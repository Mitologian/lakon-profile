/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — MESIN PENCOCOKAN JURUSAN
   Mengubah hasil asesmen jadi daftar arah studi yang bisa ditindaklanjuti.

   MUAT SETELAH lakon_jurusan.js, SEBELUM lakon_report.js.

   ═══════════════════════════════════════════════════════════════════════
   KENAPA MESINNYA DITULIS LEBIH DULU
   ═══════════════════════════════════════════════════════════════════════

   Database sebesar apa pun tidak berguna kalau tidak jelas bagaimana hasil
   peserta diterjemahkan jadi daftar. Menulis 120 entri lebih dulu lalu
   memikirkan pencocokannya belakangan berarti field-nya kemungkinan besar
   salah rancang, dan 120 entri harus ditulis ulang.

   ═══════════════════════════════════════════════════════════════════════
   ATURAN PENCOCOKAN
   ═══════════════════════════════════════════════════════════════════════

   0. PERPADUAN YANG MENCOCOKKAN, BUKAN KELOMPOK #1 SAJA.
      Versi pertama mesin ini mencocokkan dari Kelompok #1 saja, sehingga
      Bakti|Karya dan Bakti|Tata mendapat daftar jurusan yang hampir sama.
      Padahal jenis pekerjaannya sudah terbukti berbeda di tahap 2 rantai:
      yang satu mengarah ke guru dan fasilitator, yang lain ke manajer SDM
      dan administrator layanan.

      Sekarang jurusan dicocokkan lewat field `perpaduan`, sehingga daftar
      jurusan menjawab pertanyaan "lewat mana saya sampai ke peran itu",
      bukan sekadar "apa yang cocok dengan minat saya".

   1. KELOMPOK YANG MENCOCOKKAN, WATAK YANG MENJELASKAN.
      Yasa Reka dan Yasa Jaga sama-sama cocok di Teknik Sipil. Memberi
      daftar jurusan berbeda untuk keduanya adalah presisi palsu, dan orang
      yang paham akan melihatnya. Maka jurusan dipilih lewat Kelompok, lalu
      `watak_condong` menjelaskan KE MANA peserta condong DI DALAM jurusan
      itu. Tetap terasa personal, dan tetap benar.

   2. TIGA LARIK, BUKAN SATU DAFTAR PANJANG.
        inti    dari Kelompok #1              — arah utama
        nuansa  dari Kelompok #2              — arah yang sering terlewat
        vokasi  D3/D4 dari salah satu Kelompok — jalur yang jarang digarap
      Satu daftar panjang membuat peserta membaca dari atas dan berhenti di
      nomor lima. Tiga larik bertanda membuat jalur vokasi ikut terbaca,
      dan itu bagian yang paling jarang disentuh alat asesmen di Indonesia.

   3. VOKASI SELALU MUNCUL, TIDAK PERNAH DI URUTAN BAWAH.
      Kalau D3/D4 cuma diselipkan di akhir daftar S1, ia terbaca sebagai
      pilihan kelas dua. Ia diberi lariknya sendiri dengan judulnya sendiri.

   4. SKOR KECOCOKAN TIDAK DITAMPILKAN SEBAGAI ANGKA.
      Dipakai untuk mengurutkan, tidak untuk dipamerkan. "Teknik Sipil 87%"
      adalah presisi yang tidak dimiliki alat ini, dan angka semacam itu
      yang paling cepat merusak kepercayaan saat peserta membandingkannya
      dengan kenyataan.

   5. TIDAK ADA GAJI, PROSPEK KERJA, ATAU PERINGKAT KAMPUS.
      Semua itu basi dalam hitungan bulan. Lakon tahu minat; Lakon tidak
      tahu biaya kuliah, jarak dari rumah, nilai rapor, atau keadaan
      keluarga. Kalimatnya "cocok dengan minatmu", bukan "sebaiknya kamu
      ambil".
═══════════════════════════════════════════════════════════════════════════ */

var LakonJurusan = (function () {
  "use strict";

  var BATAS = { inti: 6, nuansa: 3, vokasi: 3 };

  /* Bobot kecocokan. Dipakai untuk mengurutkan saja, tidak ditampilkan.
     Jarak melingkar Holland ikut dihitung: jurusan yang Kelompok keduanya
     bersebelahan dengan minat peserta lebih pas daripada yang berseberangan. */
  var URUT_HOLLAND = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];

  function jarak(a, b) {
    var i = URUT_HOLLAND.indexOf(a), j = URUT_HOLLAND.indexOf(b);
    if (i < 0 || j < 0) return 3;
    var d = Math.abs(i - j);
    return Math.min(d, 6 - d);
  }

  function melayani(j, blend) {
    return !!(j.perpaduan && j.perpaduan.indexOf(blend) >= 0);
  }

  function bobot(j, k1, k2) {
    var s = 0, blend = k1 + "|" + k2;

    /* Kecocokan perpaduan menimbang paling berat. Ini yang membedakan
       daftar Bakti|Karya dari Bakti|Tata. */
    if (melayani(j, blend)) s += 14;

    if (j.kelompok_1 === k1) s += 8;
    else if (j.kelompok_2 === k1) s += 5;
    else s += Math.max(0, 3 - jarak(j.kelompok_1, k1));

    if (j.kelompok_1 === k2) s += 3;
    else if (j.kelompok_2 === k2) s += 2;
    else s += Math.max(0, 2 - jarak(j.kelompok_1, k2)) * 0.5;

    return s;
  }

  function ambilDb() {
    return (typeof LAKON_JURUSAN !== "undefined") ? LAKON_JURUSAN : [];
  }

  /* skor: hasil LakonScoring.computeAll()
     Mengembalikan tiga larik siap render, masing-masing sudah memuat
     `arah`, yaitu penjelasan condong sesuai Watak peserta. */
  function cari(skor, opsi) {
    opsi = opsi || {};
    var db = ambilDb();
    var k1 = skor.kelompok1, k2 = skor.kelompok2, w = skor.watak;
    if (!db.length) return { inti: [], nuansa: [], vokasi: [], kosong: true };

    function cariIndex(id) {
      for (var i = 0; i < db.length; i++) if (db[i].id === id) return i;
      return -1;
    }

    function siap(j) {
      return {
        id: j.id, nama: j.nama, jenjang: j.jenjang, rumpun: j.rumpun,
        kelompok_1: j.kelompok_1, kelompok_2: j.kelompok_2,
        arah: (j.watak_condong && j.watak_condong[w]) || "",
        catatan: j.catatan,
        _b: bobot(j, k1, k2)
      };
    }

    var semua = db.map(siap).sort(function (a, b) { return b._b - a._b; });
    var dipakai = {};

    function ambil(saring, batas) {
      var out = [];
      for (var i = 0; i < semua.length && out.length < batas; i++) {
        var x = semua[i];
        if (dipakai[x.id]) continue;
        if (!saring(x)) continue;
        dipakai[x.id] = true;
        out.push(x);
      }
      return out;
    }

    var blend = k1 + "|" + k2;
    var sarjana = function (x) { return x.jenjang === "S1"; };
    var vokasional = function (x) { return x.jenjang === "D3" || x.jenjang === "D4"; };

    /* Vokasi diambil LEBIH DULU, sebelum larik inti menghabiskan jatah.
       Kalau diambil belakangan, jurusan vokasi yang kecocokannya tinggi
       sudah terpakai di larik inti dan larik vokasi jadi kosong. */
    /* Vokasi diambil dari PERPADUAN lebih dulu. Pelonggaran ke Kelompok #1
       hanya dipakai kalau hasilnya masih kurang dari dua, supaya larik ini
       tidak terisi jurusan yang sebenarnya menuju arah lain. Versi pertama
       terlalu longgar: 36 dari 90 entri vokasi tidak melayani perpaduannya,
       dan itu membuat larik vokasi terbaca sebagai daftar acak. */
    var vokasi = ambil(function (x) {
      return vokasional(x) && melayani(db[cariIndex(x.id)], blend);
    }, BATAS.vokasi);

    if (vokasi.length < 2) {
      vokasi = vokasi.concat(ambil(function (x) {
        return vokasional(x) && x.kelompok_1 === k1;
      }, 2 - vokasi.length));
    }

    /* Larik inti kini diisi dari PERPADUAN, bukan dari Kelompok #1 saja. */
    var inti = ambil(function (x) {
      return sarjana(x) && melayani(db[cariIndex(x.id)], blend);
    }, BATAS.inti);

    /* Kalau Kelompok #1 belum punya cukup entri S1, larik inti dilengkapi
       dari jurusan yang Kelompok KEDUAnya cocok. Lebih baik daripada
       menampilkan daftar tipis: peserta menyimpulkan alatnya dangkal,
       bukan menyimpulkan databasenya belum lengkap. */
    if (inti.length < 3) {
      inti = inti.concat(ambil(function (x) {
        return sarjana(x) && x.kelompok_2 === k1;
      }, BATAS.inti - inti.length));
    }

    var nuansa = ambil(function (x) {
      return sarjana(x) && (x.kelompok_1 === k2 || x.kelompok_2 === k2);
    }, BATAS.nuansa);

    return {
      inti: inti, nuansa: nuansa, vokasi: vokasi,
      kelompok1: k1, kelompok2: k2, watak: w,
      kosong: (inti.length + nuansa.length + vokasi.length) === 0
    };
  }

  /* ═══════════════════════════════════════════════════════════
     PEMERIKSAAN KESIAPAN TAYANG
     Ambang 20 jurusan S1 per Kelompok. Di bawah itu akan ada peserta
     yang mendapat daftar tipis, dan daftar tipis lebih merugikan
     daripada tidak ada daftar sama sekali.
     ═══════════════════════════════════════════════════════════ */
  function periksa() {
    var db = ambilDb(), KEL = URUT_HOLLAND, WAT = ["Reka", "Logika", "Jaga", "Guna"];
    var perK = {}, masalah = [], ids = {}, i, j, k;

    for (i = 0; i < KEL.length; i++) perK[KEL[i]] = { s1: 0, vokasi: 0, total: 0 };

    for (i = 0; i < db.length; i++) {
      j = db[i];
      if (ids[j.id]) masalah.push("id ganda: " + j.id);
      ids[j.id] = true;

      if (KEL.indexOf(j.kelompok_1) < 0) masalah.push(j.id + " kelompok_1 tidak sah: " + j.kelompok_1);
      if (KEL.indexOf(j.kelompok_2) < 0) masalah.push(j.id + " kelompok_2 tidak sah: " + j.kelompok_2);
      if (j.kelompok_1 === j.kelompok_2) masalah.push(j.id + " kelompok_1 dan kelompok_2 sama");
      if (["S1", "D4", "D3"].indexOf(j.jenjang) < 0) masalah.push(j.id + " jenjang tidak sah: " + j.jenjang);

      for (k = 0; k < WAT.length; k++) {
        if (!j.watak_condong || !j.watak_condong[WAT[k]])
          masalah.push(j.id + " watak_condong." + WAT[k] + " kosong");
      }
      if (!j.catatan || !j.catatan.id || !j.catatan.en) masalah.push(j.id + " catatan tidak lengkap");

      /* Kaidah 5: tidak ada gaji, prospek, atau peringkat kampus. */
      if (!j.perpaduan || !j.perpaduan.length) masalah.push(j.id + " tanpa field perpaduan");
      else j.perpaduan.forEach(function (b) {
        var bagian = String(b).split("|");
        if (bagian.length !== 2 || KEL.indexOf(bagian[0]) < 0 || KEL.indexOf(bagian[1]) < 0)
          masalah.push(j.id + " perpaduan tidak sah: " + b);
      });

      var teks = ((j.catatan && j.catatan.id) || "").toLowerCase();
      ["gaji", "juta per bulan", "prospek kerja", "peringkat", "akreditasi a", "passing grade"]
        .forEach(function (x) { if (teks.indexOf(x) >= 0) masalah.push(j.id + " catatan memuat '" + x + "'"); });

      if (perK[j.kelompok_1]) {
        perK[j.kelompok_1].total++;
        if (j.jenjang === "S1") perK[j.kelompok_1].s1++; else perK[j.kelompok_1].vokasi++;
      }
    }

    var siap = true;
    for (i = 0; i < KEL.length; i++) {
      var p = perK[KEL[i]];
      if (p.total < 20) { siap = false; masalah.push("AMBANG: " + KEL[i] + " baru " + p.total + " jurusan, minimal 20"); }
      if (p.vokasi < 4) { siap = false; masalah.push("AMBANG: " + KEL[i] + " baru " + p.vokasi + " vokasi, minimal 4"); }
    }

    return { total: db.length, perKelompok: perK, siapTayang: siap, masalah: masalah };
  }

  return { cari: cari, periksa: periksa, BATAS: BATAS, jarak: jarak };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LakonJurusan;
