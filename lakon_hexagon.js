/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — HEKSAGON RIASEC
   Menggambar profil enam Kelompok sebagai heksagon Holland.

   MUAT SETELAH lakon_scoring.js dan lakon_content.js, SEBELUM app.js.

   ═══════════════════════════════════════════════════════════════════════
   KENAPA HEKSAGON, BUKAN SEKADAR BAR LAIN
   ═══════════════════════════════════════════════════════════════════════

   Bar sudah menunjukkan siapa yang tertinggi. Heksagon menunjukkan sesuatu
   yang tidak bisa ditunjukkan bar: JARAK ANTAR MINAT.

   Holland menyusun enam tipe sebagai lingkaran, bukan daftar. Urutannya
   R-I-A-S-E-C, dan yang bersebelahan memang berdekatan sifatnya, sedangkan
   yang berseberangan menuntut hal yang saling bertentangan. Itu sebabnya
   urutan titik sudut di sini WAJIB mengikuti urutan lingkaran, bukan urutan
   skor. Kalau diurutkan dari yang tertinggi, seluruh maknanya hilang dan
   yang tersisa cuma hiasan.

   Yang jadi terlihat:
     bentuk MENJULUR ke satu sisi  → minat terfokus
     bentuk MERATA                 → minat tersebar
     dua titik tertinggi BERSEBELAHAN   → profil konsisten
     dua titik tertinggi BERSEBERANGAN  → kombinasi langka

   Data konsistensinya sudah dihitung mesin (`konsistensi.distance`), jadi
   visual ini tidak menambah klaim baru. Ia hanya membuat sesuatu yang sudah
   terhitung jadi bisa dilihat dalam sekali pandang.

   ═══════════════════════════════════════════════════════════════════════
   KEPUTUSAN TAMPILAN
   ═══════════════════════════════════════════════════════════════════════

   - Skor yang diplot NORMATIF 0-100, bukan share-of-total. Share-of-total
     memaksa keenamnya berjumlah 100, sehingga heksagonnya nyaris selalu
     berbentuk sama dan tidak membedakan siapa pun.
   - Jarak dari pusat dimulai dari 18% radius, bukan 0. Titik yang benar-benar
     di pusat membuat bentuknya patah dan sulit dibaca.
   - Ruas antara dua titik tertinggi dipertebal. Itu satu-satunya elemen yang
     menyampaikan konsistensi, dan tanpa itu heksagonnya cuma radar biasa.
   - Tidak ada angka di dalam gambar. Angkanya sudah ada di bar tepat di
     bawahnya; mengulanginya membuat gambar penuh tanpa menambah apa pun.
═══════════════════════════════════════════════════════════════════════════ */

var LakonHexagon = (function () {
  "use strict";

  /* Urutan lingkaran Holland. JANGAN diubah jadi urutan skor. */
  var URUT = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];

  var CFG = {
    ukuran: 260,        // viewBox persegi
    radius: 92,         // radius titik sudut terluar
    minRasio: 0.18,     // titik terdekat ke pusat, agar bentuk tidak patah
    labelJarak: 22      // jarak label dari titik sudut
  };

  function titik(i, rasio) {
    // -90° supaya titik pertama ada di atas
    var sudut = (Math.PI * 2 * i / 6) - Math.PI / 2;
    var r = CFG.radius * (CFG.minRasio + (1 - CFG.minRasio) * rasio);
    var c = CFG.ukuran / 2;
    return [c + Math.cos(sudut) * r, c + Math.sin(sudut) * r];
  }

  function titikLabel(i) {
    var sudut = (Math.PI * 2 * i / 6) - Math.PI / 2;
    var r = CFG.radius + CFG.labelJarak;
    var c = CFG.ukuran / 2;
    return [c + Math.cos(sudut) * r, c + Math.sin(sudut) * r];
  }

  function warna(k) {
    if (typeof KELOMPOK_COLORS !== "undefined" && KELOMPOK_COLORS[k]) return KELOMPOK_COLORS[k].bar;
    return "#C17A3C";
  }

  /* skor: hasil LakonScoring.computeAll()
     opsi.bahasa: 'id' | 'en'  (hanya untuk label sudut) */
  function svg(skor, opsi) {
    opsi = opsi || {};
    var id = (opsi.bahasa || "id") === "id";
    var c = CFG.ukuran / 2;

    var nilai = URUT.map(function (k) { return skor.skorNormatif[k] || 0; });
    var maks = Math.max.apply(null, nilai) || 1;

    var i, h = "";

    /* ── jaring latar: tiga cincin ── */
    [1, 0.66, 0.33].forEach(function (r) {
      var p = [];
      for (i = 0; i < 6; i++) {
        var s = (Math.PI * 2 * i / 6) - Math.PI / 2;
        p.push((c + Math.cos(s) * CFG.radius * r).toFixed(1) + "," +
               (c + Math.sin(s) * CFG.radius * r).toFixed(1));
      }
      h += '<polygon points="' + p.join(" ") + '" class="hex-grid"/>';
    });

    /* ── jari-jari ── */
    for (i = 0; i < 6; i++) {
      var s2 = (Math.PI * 2 * i / 6) - Math.PI / 2;
      h += '<line x1="' + c + '" y1="' + c + '" x2="' +
           (c + Math.cos(s2) * CFG.radius).toFixed(1) + '" y2="' +
           (c + Math.sin(s2) * CFG.radius).toFixed(1) + '" class="hex-spoke"/>';
    }

    /* ── bidang profil ── */
    var tp = URUT.map(function (k, n) { return titik(n, (skor.skorNormatif[k] || 0) / maks); });
    h += '<polygon points="' + tp.map(function (p) {
      return p[0].toFixed(1) + "," + p[1].toFixed(1);
    }).join(" ") + '" class="hex-area"/>';

    /* ── ruas penghubung dua titik tertinggi ──
       Inilah satu-satunya elemen yang menyampaikan konsistensi.
       Ruas pendek berarti bersebelahan; garis panjang menyilang berarti
       berseberangan, dan itu kombinasi yang langka. */
    var i1 = URUT.indexOf(skor.kelompok1), i2 = URUT.indexOf(skor.kelompok2);
    if (i1 >= 0 && i2 >= 0) {
      var jarak = Math.min(Math.abs(i1 - i2), 6 - Math.abs(i1 - i2));
      h += '<line x1="' + tp[i1][0].toFixed(1) + '" y1="' + tp[i1][1].toFixed(1) +
           '" x2="' + tp[i2][0].toFixed(1) + '" y2="' + tp[i2][1].toFixed(1) +
           '" class="hex-link hex-link-' + jarak + '"/>';
    }

    /* ── titik dan label ── */
    for (i = 0; i < 6; i++) {
      var k2 = URUT[i], p2 = tp[i], lp = titikLabel(i);
      var utama = (k2 === skor.kelompok1), kedua = (k2 === skor.kelompok2);
      var r2 = utama ? 6 : kedua ? 5 : 3.2;

      h += '<circle cx="' + p2[0].toFixed(1) + '" cy="' + p2[1].toFixed(1) + '" r="' + r2 +
           '" fill="' + warna(k2) + '" class="hex-dot' + (utama ? " hex-dot-1" : kedua ? " hex-dot-2" : "") + '"/>';

      var anchor = lp[0] < c - 8 ? "end" : lp[0] > c + 8 ? "start" : "middle";
      var dy = lp[1] < c ? -1 : 9;
      var nama = (typeof KELOMPOK_LABELS !== "undefined" && KELOMPOK_LABELS[k2])
        ? (id ? KELOMPOK_LABELS[k2].id : KELOMPOK_LABELS[k2].en) : k2;

      h += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + dy).toFixed(1) +
           '" text-anchor="' + anchor + '" class="hex-label' +
           (utama ? " hex-label-1" : kedua ? " hex-label-2" : "") + '">' + esc(nama) + "</text>";
    }

    return '<svg viewBox="0 0 ' + CFG.ukuran + " " + CFG.ukuran +
           '" class="hex-svg" role="img" aria-label="' +
           esc(id ? "Heksagon minat: " + skor.kelompok1 + " tertinggi, " + skor.kelompok2 + " kedua"
                  : "Interest hexagon: " + skor.kelompok1 + " highest, " + skor.kelompok2 + " second") +
           '">' + h + "</svg>";
  }

  /* Keterangan di bawah gambar. Tanpa ini heksagonnya cantik tapi bisu:
     pembaca melihat bentuk dan tidak tahu bentuk itu berarti apa. */
  function keterangan(skor, bahasa) {
    var id = (bahasa || "id") === "id";
    var j = (skor.konsistensi || {}).distance;
    var d = (skor.diferensiasi || {}).label;

    var soalJarak = j === 1
      ? (id ? "<strong>" + skor.kelompok1 + "</strong> dan <strong>" + skor.kelompok2 +
              "</strong> bersebelahan di lingkaran ini. Keduanya menuntut hal yang mirip, jadi arahmu cenderung terfokus dan pilihan karirmu lebih mudah disempitkan."
            : "<strong>" + skor.kelompok1 + "</strong> and <strong>" + skor.kelompok2 +
              "</strong> sit next to each other. They ask for similar things, so your direction tends to be focused and easier to narrow down.")
      : j === 3
      ? (id ? "<strong>" + skor.kelompok1 + "</strong> dan <strong>" + skor.kelompok2 +
              "</strong> berseberangan. Kombinasi ini jarang muncul bersamaan, dan biasanya jadi pembeda: cari bidang yang justru membutuhkan keduanya, bukan memilih salah satu."
            : "<strong>" + skor.kelompok1 + "</strong> and <strong>" + skor.kelompok2 +
              "</strong> sit opposite each other. This pairing is uncommon and usually becomes a differentiator: look for fields that need both rather than choosing one.")
      : (id ? "<strong>" + skor.kelompok1 + "</strong> dan <strong>" + skor.kelompok2 +
              "</strong> berjarak sedang. Keduanya bisa berjalan bersama tanpa saling menghambat."
            : "<strong>" + skor.kelompok1 + "</strong> and <strong>" + skor.kelompok2 +
              "</strong> sit a moderate distance apart. The two can run together without pulling against each other.");

    var soalBentuk = d === "Terfokus"
      ? (id ? "Bentuknya menjulur ke satu sisi: minatmu terpusat."
            : "The shape reaches to one side: your interests are concentrated.")
      : d === "Tersebar"
      ? (id ? "Bentuknya cukup merata: minatmu tersebar, dan Watak-mu jadi penentu arah yang lebih menentukan daripada bidangnya."
            : "The shape is fairly even: your interests are spread, and your Watak matters more for direction than the field does.")
      : (id ? "Bentuknya condong ke satu sisi dengan beberapa sisi pendukung."
            : "The shape leans to one side with several supporting sides.");

    return '<p class="hex-ket">' + soalBentuk + " " + soalJarak + "</p>";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  return { svg: svg, keterangan: keterangan, URUT: URUT, CFG: CFG };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LakonHexagon;
