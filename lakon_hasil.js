/* ═══════════════════════════════════════════════════════════════════════════
   LAKON HASIL — mengisi halaman hasil dari penilaian yang sebenarnya
   Dipasang Lapis, 18 Sep 2026.

   Halaman /hasil/ tidak menghitung apa pun sendiri. Angkanya datang dari
   hasil penilaian yang disimpan saat pengiriman selesai di /tes/.
   Kalau tidak ada simpanan (orang membuka alamat ini langsung), halaman
   menampilkan ajakan mengerjakan tes.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var KUNCI = 'lakon_hasil_v1';
  function $(id) { return document.getElementById(id); }

  function baca() {
    try { return JSON.parse(localStorage.getItem(KUNCI) || 'null'); } catch (e) { return null; }
  }

  var simpanan = baca();
  var skor = simpanan && simpanan.skor ? simpanan.skor : null;

  if (!skor) {
    var utama = $('utama');
    if (utama) {
      utama.innerHTML = '<div class="wadah" style="max-width:640px;padding:80px 22px;text-align:center">' +
        '<h1 style="font-family:var(--serif)">Belum ada hasil di perangkat ini.</h1>' +
        '<p style="color:var(--teks);margin-bottom:26px">Hasil tersimpan di peramban yang kamu pakai mengerjakan tes. ' +
        'Kalau kamu mengerjakan di ponsel lain, buka tautan lanjutan dari perangkat itu, atau kerjakan asesmennya di sini.</p>' +
        '<a class="tbl tbl--utama" href="/tes/">Mulai asesmen</a></div>';
    }
    return;
  }

  var P = (typeof LAKON_PARAGA_CONTENT !== 'undefined' && LAKON_PARAGA_CONTENT[skor.paragaId]) || null;
  var C = (typeof PARAGA_CARD !== 'undefined' && PARAGA_CARD[skor.paragaId]) || null;
  var K = (typeof LAKON_KELOMPOK_CONTENT !== 'undefined' && LAKON_KELOMPOK_CONTENT[skor.kelompok1]) || null;
  var teks = function (el, isi) { if (el && isi) el.textContent = isi; };
  var nama = (simpanan && simpanan.nama) ? simpanan.nama : '';

  /* ── kartu paraga ─────────────────────────────────────────────────────── */
  teks($('paraga-nama'), skor.kelompok1 + ' ' + skor.watak);
  teks($('paraga-inggris'), (C && C.archetype_en) || (P && P.en) || '');
  teks($('paraga-narasi'), (C && C.esensi) || '');
  teks($('nama-peserta'), nama || 'Hasilmu');
  var inis = $('inisial');
  if (inis) inis.textContent = (nama || 'L').trim().charAt(0).toUpperCase();

  var kunci = (C && C.kata_kunci) || [];
  var simpulKunci = document.querySelector('.paraga .kata-kunci, .paraga__kata');
  if (simpulKunci && kunci.length) {
    simpulKunci.innerHTML = kunci.map(function (k) { return '<span>' + k + '</span>'; }).join('');
  }

  /* ── bilah enam kelompok ──────────────────────────────────────────────── */
  var urut = skor.urutanKelompok || ['Yasa', 'Nalar', 'Karya', 'Bakti', 'Karsa', 'Tata'];
  var indeks = skor.indeksTampilan || {};
  var bar = $('bar-kelompok');
  if (bar && urut.length) {
    var teratas = urut.slice(0, 2);
    bar.innerHTML = urut.map(function (k) {
      var nilai = Math.round(indeks[k] || 0);
      return '<li class="k-' + k.toLowerCase() + (teratas.indexOf(k) >= 0 ? ' is-atas' : '') + '">' +
        '<span class="bar__nama">' + k + '</span>' +
        '<span class="bar__rel"><span class="bar__isi" style="width:' + nilai + '%"></span></span>' +
        '<span class="bar__skor">' + nilai + '</span></li>';
    }).join('');
  }

  /* ── heksagon minat: titik dihitung dari nilai sebenarnya ─────────────── */
  var heks = $('heks-skor');
  if (heks) {
    var titikDasar = heks.getAttribute('points').trim().split(/\s+/).map(function (p) {
      var s = p.split(','); return { x: parseFloat(s[0]), y: parseFloat(s[1]) };
    });
    var cx = titikDasar.reduce(function (a, p) { return a + p.x; }, 0) / titikDasar.length;
    var cy = titikDasar.reduce(function (a, p) { return a + p.y; }, 0) / titikDasar.length;
    var baru = titikDasar.map(function (p, i) {
      var k = urut[i] || null;
      var f = k ? Math.max(0.18, Math.min(1, (indeks[k] || 0) / 100)) : 0.6;
      return { x: cx + (p.x - cx) * f, y: cy + (p.y - cy) * f };
    });
    heks.setAttribute('points', baru.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' '));
    var svgHeks = heks.closest('svg');
    if (svgHeks) {
      svgHeks.setAttribute('aria-label', 'Heksagon minat: ' + urut.map(function (k) {
        return k + ' ' + Math.round(indeks[k] || 0);
      }).join(', '));
    }
  }

  /* ── selisih dua kelompok teratas ─────────────────────────────────────── */
  var gap = (typeof skor.gapTop2 === 'number') ? Math.round(skor.gapTop2) : null;
  teks($('diferensiasi'), gap === null ? '' : String(gap));
  var tafsir = $('tafsir-diferensiasi');
  if (tafsir && gap !== null && skor.kelompok2) {
    tafsir.textContent = 'Jarak ' + gap + ' poin antara ' + skor.kelompok1 + ' dan ' + skor.kelompok2 + ' ' +
      (gap >= 15 ? 'tergolong lebar, jadi arah minatmu jelas, bukan tersebar rata.'
                 : gap >= 7 ? 'tergolong sedang, jadi minatmu punya arah yang cukup jelas.'
                            : 'tergolong sempit, jadi dua bidang ini sama kuatnya dan layak dicoba berdua.');
  }

  /* ── tiga kekuatan utama ──────────────────────────────────────────────── */
  var wadahKekuatan = $('kekuatan');
  if (wadahKekuatan && P && P.kekuatan) {
    wadahKekuatan.innerHTML = P.kekuatan.slice(0, 3).map(function (k) {
      var t = (typeof k === 'string') ? k : (k.id || '');
      var pisah = t.indexOf('.');
      var judul = pisah > 0 ? t.slice(0, pisah) : t;
      var isi = pisah > 0 ? t.slice(pisah + 1).trim() : '';
      return '<article><h3>' + judul + '</h3>' + (isi ? '<p>' + isi + '</p>' : '') + '</article>';
    }).join('');
  }

  /* ── laporan gratis dari mesin (narasi panjang) ───────────────────────── */
  if (typeof LakonReport !== 'undefined') {
    try {
      var bagian = '';
      if (typeof LakonReport.gratis === 'function') bagian += LakonReport.gratis(skor) || '';
      if (typeof LakonReport.gratisLanjutan === 'function') bagian += LakonReport.gratisLanjutan(skor) || '';
      if (bagian) {
        var seksi = document.createElement('section');
        seksi.className = 'bagian';
        seksi.innerHTML = '<div class="wadah"><div class="larik lapor">' + bagian + '</div></div>';
        var jangkar = document.querySelector('.jelajah') || null;
        if (jangkar && jangkar.parentNode) jangkar.parentNode.insertBefore(seksi, jangkar);
        else { var utama2 = $('utama'); if (utama2) utama2.appendChild(seksi); }
      }
      var gembok = $('gembok');
      if (gembok && typeof LakonReport.terkunci === 'function') {
        var isiTerkunci = LakonReport.terkunci(skor);
        if (isiTerkunci) gembok.innerHTML = isiTerkunci;
      }
    } catch (e) {
      console.warn('Laporan belum bisa disusun:', e);
    }
  }

  /* ── tombol halaman hasil ─────────────────────────────────────────────── */
  var alamat = window.location.origin + '/hasil/';
  var ringkas = 'Paraga saya: ' + skor.kelompok1 + ' ' + skor.watak + ' (' + (C && C.archetype_en ? C.archetype_en : '') + ').';
  var pesanWa = encodeURIComponent('Halo Lakon, saya sudah selesai asesmen. ' + ringkas + ' Saya mau tanya soal laporan lengkapnya.');
  var wa = 'https://wa.me/6282126373601?text=' + pesanWa;

  var salin = $('btn-salin');
  if (salin) salin.addEventListener('click', function () {
    var isi = ringkas + ' ' + alamat;
    if (navigator.clipboard) navigator.clipboard.writeText(isi).then(function () {
      salin.textContent = 'Tersalin';
      setTimeout(function () { salin.textContent = 'Salin'; }, 1800);
    });
  });
  var bagikan = $('btn-bagikan-atas');
  if (bagikan) bagikan.addEventListener('click', function () {
    if (navigator.share) navigator.share({ title: 'Paraga Lakon saya', text: ringkas, url: alamat }).catch(function () {});
    else if (salin) salin.click();
  });
  ['btn-beli', 'btn-unduh', 'btn-gembok'].forEach(function (id) {
    var t = $(id);
    if (t) { t.setAttribute('href', wa); t.setAttribute('target', '_blank'); t.setAttribute('rel', 'noopener'); }
  });
  var surel = $('btn-email');
  if (surel) surel.addEventListener('click', function () {
    var t = window.prompt('Kirim ringkasan hasil ke alamat surel:', (simpanan && simpanan.email) || '');
    if (!t) return;
    var isiSurel = encodeURIComponent('Ringkasan asesmen Lakon\n\n' + ringkas +
      '\nKelompok teratas: ' + skor.kelompok1 + '\nWatak: ' + skor.watak + '\n\nBuka hasilmu: ' + alamat);
    window.location.href = 'mailto:' + t + '?subject=' + encodeURIComponent('Hasil asesmen Lakon') + '&body=' + isiSurel;
  });

  /* ── penilaian pengalaman (bintang 1 sampai 5) ────────────────────────── */
  document.querySelectorAll('#nilai button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('#nilai button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      var pesan = document.getElementById('nilai-pesan');
      if (pesan) pesan.textContent = 'Terima kasih, penilaianmu kami pakai untuk memperbaiki tesnya.';
      try {
        localStorage.setItem('lakon_nilai_pengalaman', b.getAttribute('data-nilai'));
      } catch (e) {}
    });
  });

  var tahun = $('tahun');
  if (tahun) tahun.textContent = new Date().getFullYear();
})();
