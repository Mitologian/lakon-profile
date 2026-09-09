/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — MODUL PERENDER LAPORAN
   Mengubah isi tiga lapis menjadi HTML halaman hasil.

   MUAT SETELAH:
     lakon_label.js · lakon_kelompok_content.js · lakon_watak_content.js
     lakon_paraga.js · lakon_content.js · lakon_scoring.js · lakon_nuansa.js
   MUAT SEBELUM: app.js

   ═══════════════════════════════════════════════════════════════════════
   KENAPA ADA BERKAS INI
   ═══════════════════════════════════════════════════════════════════════

   Sebelum arsitektur tiga lapis, halaman hasil membaca satu objek PARAGA
   saja, jadi perenderannya cukup ditulis di app.js. Sekarang ada 18 bagian
   dari tiga lapis, masing-masing berbentuk struktur (inti, poin, paragraf,
   dua kolom, sorot, tutup). Menulis perender terpisah untuk tiap bagian
   berarti 18 fungsi yang hampir sama.

   Maka: SATU perender generik yang mengenali bentuk blok dari fieldnya.
   Menambah bagian baru nanti cukup menambah isinya dan satu label; tidak
   perlu menyentuh berkas ini.

   ═══════════════════════════════════════════════════════════════════════
   SUSUNAN LAPORAN
   ═══════════════════════════════════════════════════════════════════════

   GRATIS
     1  Pertemuan Identitasmu        Paraga.pertemuan
     2  Kekuatan Utamamu             Paraga.kekuatan
     3  Profil Minatmu               grafik + Indeks Diferensiasi
     4  Situasi yang Kamu Cari       Kelompok.tanda_situasi
     5  Yang Terlihat pada Caramu    Watak.tanda_gerak
     6  Empat Sumbu Caramu Bergerak  dimensi + dua kandidat Watak
     7  Tiga Langkah Berikutnya      diturunkan dari hasil

   TERKUNCI, 4 blok
     A  Bidang yang Menarikmu        Kelompok: menikmati, suasana,
                                     mengisi_energi, saat_belajar, harga_diam
     B  Cara Kamu Bergerak           Watak: cara_kerja, dalam_tim,
                                     salah_paham, kalau_tertekan, tumbuh_lewat
     C  Peran & Arah                 Paraga.peran_khas, arah_karir,
                                     arah_studi, tabel Peran Ideal
     D  Titik Rawan & Pengembangan   Paraga.titik_rawan, pengembangan

   Bagian gratis sengaja memuat `tanda_situasi` dan `tanda_gerak`, karena
   keduanya adalah alat baca yang bisa langsung dipakai peserta dan paling
   enak dibagikan. Yang terkunci adalah kedalamannya, bukan alatnya.
═══════════════════════════════════════════════════════════════════════════ */

var LakonReport = (function () {
  "use strict";

  var L = function () { return (typeof lang !== "undefined" ? lang : "id") === "id"; };
  function t(o) { return o ? (L() ? o.id : o.en) : ""; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function lbl(grup, kunci) {
    var L2 = (typeof LAKON_LABEL !== "undefined") ? LAKON_LABEL : null;
    if (!L2 || !L2[grup] || !L2[grup][kunci]) return kunci;
    return t(L2[grup][kunci]);
  }

  /* ═══════════════════════════════════════════════════════════
     PERENDER GENERIK
     Mengenali bentuk blok dari field yang ada padanya.
     Urutan render sengaja tetap: inti → poin → dua kolom →
     paragraf → sorot → tutup → bagian bertanda.
     Ritmenya diselang di tingkat ISI, bukan di sini, supaya
     naskah yang menentukan bentuk halaman, bukan kodenya.
     ═══════════════════════════════════════════════════════════ */
  function blok(o, opsi) {
    if (!o) return "";
    opsi = opsi || {};
    var h = "";

    if (o.inti) h += '<p class="rb-inti">' + esc(t(o.inti)) + "</p>";

    if (o.poin && o.poin.length) {
      h += '<ul class="rb-poin">';
      for (var i = 0; i < o.poin.length; i++) h += "<li>" + esc(t(o.poin[i])) + "</li>";
      h += "</ul>";
    }

    // Dua kolom berpasangan: betah/layu (Kelompok) dan membawa/butuh (Watak)
    if (o.betah && o.layu) h += duaKolom(o.betah, o.layu, lbl("sub", "betah"), lbl("sub", "layu"), "tumbuh", "layu");
    if (o.membawa && o.butuh) h += duaKolom(o.membawa, o.butuh, lbl("sub", "membawa"), lbl("sub", "butuh"), "bawa", "butuh");

    if (o.paragraf && o.paragraf.length) {
      for (var j = 0; j < o.paragraf.length; j++)
        h += '<p class="rb-p">' + esc(t(o.paragraf[j])) + "</p>";
    }

    if (o.sorot) h += '<p class="rb-sorot">' + esc(t(o.sorot)) + "</p>";
    if (o.tutup) h += '<p class="rb-tutup">' + esc(t(o.tutup)) + "</p>";

    // Bagian bertanda: terjadi / menolong pada harga_diam,
    // peran / pola pada titik_rawan
    ["terjadi", "menolong", "peran", "pola"].forEach(function (k) {
      if (!o[k]) return;
      var arah = (k === "menolong") ? "naik" : (k === "terjadi") ? "turun" : "";
      h += '<div class="rb-sub rb-sub-' + k + '">' +
           '<div class="rb-sub-h' + (arah ? " rb-" + arah : "") + '">' +
             esc(t(o[k].judul) || lbl("sub", k)) + "</div>" +
           blok(o[k], {}) +
           "</div>";
    });

    if (opsi.pembungkus === false) return h;
    return h;
  }

  function duaKolom(a, b, judulA, judulB, clsA, clsB) {
    function kol(arr, judul, cls) {
      var h = '<div class="rb-kol rb-kol-' + cls + '"><div class="rb-kol-h">' + esc(judul) + "</div>";
      for (var i = 0; i < arr.length; i++) h += "<p>" + esc(t(arr[i])) + "</p>";
      return h + "</div>";
    }
    return '<div class="rb-dua">' + kol(a, judulA, clsA) + kol(b, judulB, clsB) + "</div>";
  }

  function bagian(judul, isi, opsi) {
    if (!isi) return "";
    opsi = opsi || {};
    return '<section class="rb-bagian' + (opsi.cls ? " " + opsi.cls : "") + '">' +
             '<h3 class="rb-judul">' + esc(judul) + "</h3>" +
             (opsi.lead ? '<p class="rb-lead">' + esc(opsi.lead) + "</p>" : "") +
             isi +
           "</section>";
  }

  /* ═══════════════════════════════════════════════════════════
     PENGANTAR LAPIS
     Tiap istilah khas Lakon selalu tampil berpasangan dengan
     penjelasan biasa, supaya peserta baru tidak tersesat.
     ═══════════════════════════════════════════════════════════ */
  function pengantarLapis(kunci, nilai) {
    var L2 = (typeof LAKON_LABEL !== "undefined") ? LAKON_LABEL.lapis[kunci] : null;
    if (!L2) return "";
    return '<div class="rb-lapis">' +
             '<div class="rb-lapis-h">' +
               '<span class="rb-lapis-istilah">' + esc(t(L2.istilah)) +
               (nilai ? " " + esc(nilai) : "") + "</span>" +
               '<span class="rb-lapis-titik">·</span>' +
               '<span class="rb-lapis-penjelas">' + esc(t(L2.penjelas)) + "</span>" +
             "</div>" +
             '<p class="rb-lapis-p">' + esc(t(L2.pengantar)) + "</p>" +
           "</div>";
  }

  /* ═══════════════════════════════════════════════════════════
     BAGIAN GRATIS
     ═══════════════════════════════════════════════════════════ */
  function gratis(skor) {
    var kunci = skor.kelompok1 + "|" + skor.watak;
    var P = ambil("LAKON_PARAGA_CONTENT")[kunci];
    var K = ambil("LAKON_KELOMPOK_CONTENT")[skor.kelompok1];
    var W = ambil("LAKON_WATAK_CONTENT")[skor.watak];
    if (!P || !K || !W) { console.error("Isi lapis tidak lengkap untuk", kunci); return ""; }

    var h = "";

    // 1 · Pertemuan Identitasmu
    h += pengantarLapis("paraga", skor.kelompok1 + " " + skor.watak);
    h += bagian(lbl("paraga", "pertemuan"), blok(P.pertemuan));

    // 2 · Kekuatan Utamamu
    h += bagian(lbl("paraga", "kekuatan"), blok({ poin: P.kekuatan }), { cls: "rb-kekuatan" });

    return h;
  }

  /* Bagian yang dirender SETELAH grafik dan bar dimensi,
     supaya angka tidak mendahului narasi.  [butir 3.2] */
  function gratisLanjutan(skor) {
    var K = ambil("LAKON_KELOMPOK_CONTENT")[skor.kelompok1];
    var W = ambil("LAKON_WATAK_CONTENT")[skor.watak];
    var h = "";

    h += pengantarLapis("kelompok", skor.kelompok1);
    h += bagian(lbl("kelompok", "tanda_situasi"), blok(K.tanda_situasi));

    h += pengantarLapis("watak", skor.watak);
    h += bagian(lbl("watak", "tanda_gerak"), blok(W.tanda_gerak));

    return h;
  }

  /* ═══════════════════════════════════════════════════════════
     EMPAT BLOK TERKUNCI
     Blok pertama setengah terbuka: satu bagian tampil utuh
     sebagai bukti, sisanya dikunci. Sembilan blok tertutup rapat
     terbaca sebagai dinding; bukti nyata lebih meyakinkan.
     ═══════════════════════════════════════════════════════════ */
  function terkunci(skor) {
    var kunci = skor.kelompok1 + "|" + skor.watak;
    var P = ambil("LAKON_PARAGA_CONTENT")[kunci];
    var K = ambil("LAKON_KELOMPOK_CONTENT")[skor.kelompok1];
    var W = ambil("LAKON_WATAK_CONTENT")[skor.watak];
    if (!P || !K || !W) return "";

    var blokTerkunci = [];

    // A · Bidang yang Menarikmu — setengah terbuka
    blokTerkunci.push({
      judul: t(LAKON_LABEL.lapis.kelompok.istilah) + " " + skor.kelompok1 + " · " +
             t(LAKON_LABEL.lapis.kelompok.penjelas),
      terbuka: bagian(lbl("kelompok", "menikmati"), blok(K.menikmati)),
      tertutup: [
        bagian(lbl("kelompok", "suasana"), blok(K.suasana)),
        bagian(lbl("kelompok", "mengisi_energi"), blok(K.mengisi_energi)),
        bagian(lbl("kelompok", "saat_belajar"), blok(K.saat_belajar)),
        bagian(lbl("kelompok", "harga_diam"), blok(K.harga_diam))
      ].join(""),
      sisa: 4
    });

    // B · Cara Kamu Bergerak
    blokTerkunci.push({
      judul: t(LAKON_LABEL.lapis.watak.istilah) + " " + skor.watak + " · " +
             t(LAKON_LABEL.lapis.watak.penjelas),
      tertutup: [
        bagian(lbl("watak", "cara_kerja"), blok(W.cara_kerja)),
        bagian(lbl("watak", "dalam_tim"), blok(W.dalam_tim)),
        bagian(lbl("watak", "salah_paham"), blok(W.salah_paham)),
        bagian(lbl("watak", "kalau_tertekan"), blok(W.kalau_tertekan)),
        bagian(lbl("watak", "tumbuh_lewat"), blok(W.tumbuh_lewat))
      ].join(""),
      sisa: 5
    });

    // C · Peran & Arah
    blokTerkunci.push({
      judul: lbl("paraga", "peran_khas") + " · " + lbl("paraga", "arah_karir"),
      tertutup: [
        bagian(lbl("paraga", "peran_khas"), blok(P.peran_khas)),
        bagian(lbl("paraga", "arah_karir"), daftar(P.arah_karir)),
        bagian(lbl("lain", "peran_tbl"), '<div id="rb-peran-slot"></div>')
      ].join(""),
      sisa: 3
    });

    // D · Titik Rawan & Pengembangan
    blokTerkunci.push({
      judul: lbl("paraga", "titik_pola") + " · " + lbl("paraga", "pengembangan"),
      tertutup: [
        bagian(lbl("paraga", "titik_peran"), blok(P.titik_rawan.peran)),
        bagian(lbl("paraga", "titik_pola"), blok(P.titik_rawan.pola)),
        bagian(lbl("paraga", "pengembangan"), langkah(P.pengembangan))
      ].join(""),
      sisa: 3
    });

    return blokTerkunci;
  }

  function daftar(o) {
    if (!o) return "";
    var arr = L() ? o.id : o.en;
    var h = '<ul class="rb-poin rb-daftar">';
    for (var i = 0; i < arr.length; i++) h += "<li>" + esc(arr[i]) + "</li>";
    return h + "</ul>";
  }

  function langkah(arr) {
    if (!arr) return "";
    var h = '<ol class="rb-langkah">';
    for (var i = 0; i < arr.length; i++) {
      h += "<li>" +
           '<div class="rb-langkah-h">' + esc(t(arr[i].judul)) + "</div>" +
           '<div class="rb-langkah-p">' + esc(t(arr[i].kenapa)) + "</div>" +
           "</li>";
    }
    return h + "</ol>";
  }

  /* Pencarian isi lapis. TIDAK memakai globalThis: pada runtime V8
     Apps Script, var tingkat atas tidak terdaftar di sana, dan
     pencarian lewat globalThis mengembalikan objek kosong tanpa error. */
  function ambil(nama) {
    if (nama === "LAKON_PARAGA_CONTENT")
      return (typeof LAKON_PARAGA_CONTENT !== "undefined") ? LAKON_PARAGA_CONTENT : {};
    if (nama === "LAKON_KELOMPOK_CONTENT")
      return (typeof LAKON_KELOMPOK_CONTENT !== "undefined") ? LAKON_KELOMPOK_CONTENT : {};
    if (nama === "LAKON_WATAK_CONTENT")
      return (typeof LAKON_WATAK_CONTENT !== "undefined") ? LAKON_WATAK_CONTENT : {};
    return {};
  }

  /* ═══════════════════════════════════════════════════════════
     PEMERIKSAAN KELENGKAPAN
     Dijalankan sekali saat halaman dimuat. Kalau ada Paraga yang
     isinya belum lengkap, lebih baik ketahuan di konsol pengembang
     daripada muncul sebagai bagian kosong di layar peserta.
     ═══════════════════════════════════════════════════════════ */
  function periksa() {
    var UK = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];
    var UW = ["Reka", "Logika", "Jaga", "Guna"];
    var P = ambil("LAKON_PARAGA_CONTENT"), K = ambil("LAKON_KELOMPOK_CONTENT"), W = ambil("LAKON_WATAK_CONTENT");
    var masalah = [], i, j;

    for (i = 0; i < UK.length; i++) {
      if (!K[UK[i]]) masalah.push("Kelompok " + UK[i] + " hilang");
      for (j = 0; j < UW.length; j++) {
        var kk = UK[i] + "|" + UW[j];
        if (!P[kk]) masalah.push("Paraga " + kk + " hilang");
      }
    }
    for (j = 0; j < UW.length; j++) if (!W[UW[j]]) masalah.push("Watak " + UW[j] + " hilang");
    if (typeof LAKON_LABEL === "undefined") masalah.push("lakon_label.js belum dimuat");

    return { lolos: masalah.length === 0, masalah: masalah };
  }

  return {
    gratis: gratis,
    gratisLanjutan: gratisLanjutan,
    terkunci: terkunci,
    blok: blok,
    bagian: bagian,
    daftar: daftar,
    langkah: langkah,
    pengantarLapis: pengantarLapis,
    label: lbl,
    teks: t,
    periksa: periksa
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LakonReport;
