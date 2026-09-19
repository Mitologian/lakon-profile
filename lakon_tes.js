/* ═══════════════════════════════════════════════════════════════════════════
   LAKON TES — lapisan pengalaman di atas mesin asesmen
   Dipasang Lapis, 18 Sep 2026.

   Mesin asesmen (lakon_assessment.js) tetap yang mengurus soal, jawaban,
   penilaian, dan pengiriman. Berkas ini menambah: maju otomatis, pintasan
   papan tik, bantuan soal, mode ringkas, layar jeda
   antar bagian, tautan lanjutkan, dan pengalihan ke halaman hasil baru.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KUNCI_MODE = 'lakon_mode_ringkas';
  var JEDA_MAJU = 520;               // milidetik sebelum maju sendiri
  var keadaan = { jedaTimer: null, bagianTerakhir: '', siap: false };

  function $(id) { return document.getElementById(id); }
  function teks(el, isi) { if (el) el.textContent = isi; }

  /* ── 1. Salinan kemajuan ke penanda desain ────────────────────────────── */
  function salinKemajuan() {
    var bar = $('prog-fill');
    if (bar) {
      var lebar = (bar.style.width || '0%');
      var rel = $('p-rel');
      if (rel && rel.style.width !== lebar) rel.style.width = lebar;
    }
    var persen = $('prog-pct');
    if (persen) teks($('p-persen'), persen.textContent || '0%');

    var bagian = ($('prog-section-label') || {}).textContent || '';
    if (bagian) teks($('p-judul'), bagian);

    var nomor = document.querySelector('#q-mount .q-num');
    var total = (typeof LakonAssessment !== 'undefined') ? LakonAssessment.totalItem() : 0;
    if (nomor) teks($('p-ke'), nomor.textContent);
    if (total) teks($('p-total'), total);

    var peta = { 'Cara Kamu Bergerak': 't-watak', 'Minat Kerja': 't-minat', 'Pilih 2': 't-pilih' };
    Object.keys(peta).forEach(function (nama) {
      var li = $(peta[nama]);
      if (li) li.classList.toggle('is-kini', nama === bagian);
    });
    var jmlSoal = document.querySelectorAll('#q-mount .q-block').length;
    var petunjuk = $('petunjuk');
    if (petunjuk) {
      if (jmlSoal > 1) {
        petunjuk.innerHTML = 'Tekan <strong>1</strong> sampai <strong>5</strong> di papan ketik, pilihan berpindah sendiri';
      } else {
        petunjuk.innerHTML = 'Jawaban berpindah sendiri setelah kamu memilih';
      }
    }
  }

  /* ── 2. Layar jeda antar bagian ───────────────────────────────────────── */
  /* Urutan mesin yang sebenarnya: Watak 48, lalu separuh Minat, lalu Pilih 2,
     lalu separuh Minat terakhir. Desain hanya punya satu layar jeda, jadi
     teksnya diganti menurut bagian yang baru dimulai, dan jeda hanya muncul
     pada kemunculan PERTAMA tiap bagian. */
  var JEDA_TEKS = {
    'Apa yang Menarik Bagimu': {
      label: 'Bagian 1 selesai',
      judul: 'Cara bergerakmu sudah terekam.',
      teks: 'Sekarang, apa yang menarikmu. Empat puluh delapan soal lagi, sekitar delapan menit.'
    },
    'Pilihan Cepat': {
      label: 'Bagian 2 selesai',
      judul: 'Sedikit lagi, Paraga-mu hampir siap.',
      teks: 'Sepuluh pilihan cepat, lalu bagian penutup. Tiga menit saja.'
    }
  };
  var sudahJeda = {};

  function mungkinJeda() {
    var bagian = ($('prog-section-label') || {}).textContent || '';
    if (!bagian) return false;
    var nomorBagian = (bagian === 'Cara Kamu Bergerak') ? 1 : (bagian === 'Pilihan Cepat' ? 3 : 2);
    teks($('p-bagian'), 'BAGIAN ' + nomorBagian + ' DARI 3');
    var pendek = { 'Cara Kamu Bergerak': '· Watak', 'Apa yang Menarik Bagimu': '· Minat', 'Pilihan Cepat': '· Pilih 2' };
    teks($('p-sub'), pendek[bagian] || '');
    if (bagian === keadaan.bagianTerakhir) return false;
    var sebelumnya = keadaan.bagianTerakhir;
    keadaan.bagianTerakhir = bagian;
    if (!sebelumnya) return false;                       // bagian pertama, tanpa jeda
    var isi = JEDA_TEKS[bagian];
    if (!isi || sudahJeda[bagian]) return false;         // bagian yang terulang, tanpa jeda lagi
    var layar = $('layar-jeda');
    if (!layar) return false;
    sudahJeda[bagian] = true;
    teks($('j-label'), isi.label);
    teks($('j-judul'), isi.judul);
    teks($('j-teks'), isi.teks);
    tampilkanLayar('layar-jeda');
    return true;
  }

  function tampilkanLayar(id) {
    var daftar = document.querySelectorAll('.screen');
    for (var i = 0; i < daftar.length; i++) daftar[i].classList.remove('active');
    var t = $(id);
    if (t) t.classList.add('active');
    window.scrollTo(0, 0);
  }

  /* ── 3. Maju otomatis + pembatal ───────────────────────────────────────── */
  function siapkanBatal() {
    if ($('batal-maju')) return;
    var d = document.createElement('div');
    d.className = 'batal-maju';
    d.id = 'batal-maju';
    d.innerHTML = '<span>Maju sendiri</span><span class="batal-maju__isi"><i id="batal-isi"></i></span>' +
                  '<button type="button" id="btn-batal">Batalkan</button>';
    document.body.appendChild(d);
    d.querySelector('#btn-batal').addEventListener('click', function () {
      if (keadaan.jedaTimer) { clearTimeout(keadaan.jedaTimer); keadaan.jedaTimer = null; }
      d.classList.remove('tampil');
    });
  }

  function majuOtomatis(picu, tombol) {
    siapkanBatal();
    var d = $('batal-maju'), isi = $('batal-isi');
    d.classList.add('tampil');
    if (isi) {
      isi.style.transition = 'none'; isi.style.width = '0%';
      window.requestAnimationFrame(function () {
        isi.style.transition = 'width ' + JEDA_MAJU + 'ms linear';
        isi.style.width = '100%';
      });
    }
    if (keadaan.jedaTimer) clearTimeout(keadaan.jedaTimer);
    keadaan.jedaTimer = setTimeout(function () {
      keadaan.jedaTimer = null;
      d.classList.remove('tampil');
      var blok = (tombol && tombol.closest) ? (tombol.closest('.q-block') || tombol.parentNode) : null;
      if (picu === 'pick2') {
        var terpilih = blok ? blok.querySelectorAll('.p2-opt.is-pilih, .p2-opt[aria-pressed="true"]').length : 0;
        if (terpilih < 2) return;
      } else if (blok && !terjawabDi(blok)) {
        return;                     // pilihan belum tercatat, jangan maju dulu
      }
      if (typeof nextPage === 'function') nextPage();
    }, JEDA_MAJU);
  }

  /* Apakah blok soal ini sudah punya jawaban tercatat? */
  function terjawabDi(blok) {
    var pilihan = blok.querySelectorAll('.sk-btn, .ps-btn'), i;
    for (i = 0; i < pilihan.length; i++) {
      if (pilihan[i].classList.contains('sel') || pilihan[i].getAttribute('aria-checked') === 'true') return true;
    }
    var p2 = blok.querySelectorAll('.p2-opt');
    if (p2.length) {
      var ada = 0;
      for (i = 0; i < p2.length; i++) {
        if (p2[i].classList.contains('sel') || p2[i].getAttribute('aria-pressed') === 'true') ada++;
      }
      return ada >= 2;
    }
    return true;
  }

  /* ── 4. Mode ringkas (lima soal sekaligus) ────────────────────────────── */
  function pasangModeRingkas() {
    var tomb = $('btn-ringkas');
    if (!tomb || typeof LakonAssessment === 'undefined') return;
    var ringkas = false;
    try { ringkas = localStorage.getItem(KUNCI_MODE) === '1'; } catch (e) {}
    if (ringkas) LakonAssessment.setMode(true);
    function perbarui() {
      tomb.textContent = ringkas ? 'Satu soal per layar' : 'Tampilkan 5 soal sekaligus';
    }
    perbarui();
    tomb.addEventListener('click', function () {
      ringkas = !ringkas;
      try { localStorage.setItem(KUNCI_MODE, ringkas ? '1' : '0'); } catch (e) {}
      LakonAssessment.setMode(ringkas);
      perbarui();
      salinKemajuan();
    });
  }

  /* ── 7. Pintasan papan tik ────────────────────────────────────────────── */
  function pasangPintasan() {
    document.addEventListener('keydown', function (e) {
      var layar = $('screen-assessment');
      if (!layar || !layar.classList.contains('active')) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) return;

      var tombolSkala = document.querySelectorAll('#q-mount .sk-btn');
      var tombolPasangan = document.querySelectorAll('#q-mount .ps-sisi');
      var tombolP2 = document.querySelectorAll('#q-mount .p2-opt');

      if (/^[1-5]$/.test(e.key)) {
        var n = parseInt(e.key, 10) - 1;
        var sasaran = tombolSkala[n] || (n < tombolPasangan.length ? tombolPasangan[n] : null);
        if (sasaran) { e.preventDefault(); sasaran.click(); return; }
      }
      if (/^[ab]$/i.test(e.key) && tombolPasangan.length) {
        var idx = e.key.toLowerCase() === 'a' ? 0 : 1;
        if (tombolPasangan[idx]) { e.preventDefault(); tombolPasangan[idx].click(); return; }
      }
      if (e.key === 'ArrowLeft' && typeof prevPage === 'function') { e.preventDefault(); prevPage(); }
      if ((e.key === 'ArrowRight' || e.key === 'Enter') && typeof nextPage === 'function') { e.preventDefault(); nextPage(); }
    }, true);
  }

  /* ── 8. Tautan lanjutkan (pindah perangkat) ───────────────────────────── */
  function bacaSimpanan() {
    try { return localStorage.getItem('lakon_progres_v3'); } catch (e) { return null; }
  }
  function tulisSimpanan(isi) {
    try { localStorage.setItem('lakon_progres_v3', isi); return true; } catch (e) { return false; }
  }
  function pasangTautanLanjut() {
    var tomb = $('btn-tunda');
    if (!tomb) return;
    tomb.addEventListener('click', function () {
      var simpanan = bacaSimpanan();
      if (!simpanan) { alert('Belum ada jawaban yang bisa disimpan.'); return; }
      var alamat = window.location.origin + '/tes/#lanjut=' + encodeURIComponent(btoa(unescape(encodeURIComponent(simpanan))));
      var pesan = 'Simpan tautan ini. Buka di perangkat mana pun untuk melanjutkan asesmen Lakon dari soal terakhir:\n' + alamat;
      if (navigator.share) { navigator.share({ title: 'Lanjutkan asesmen Lakon', text: pesan, url: alamat }).catch(function () {}); return; }
      window.prompt('Salin tautan ini, lalu buka di perangkat lain:', alamat);
    });
  }
  function pulihkanDariTautan() {
    var cocok = /#lanjut=(.+)$/.exec(window.location.hash || '');
    if (!cocok) return false;
    try {
      var isi = decodeURIComponent(escape(atob(decodeURIComponent(cocok[1]))));
      if (!isi) return false;
      tulisSimpanan(isi);
      history.replaceState(null, '', window.location.pathname);
      return true;
    } catch (e) { return false; }
  }

  /* ── 9. Alihkan hasil ke halaman /hasil/ ──────────────────────────────── */
  function pasangAlihHasil() {
    var asli = window.showResult;
    window.showResult = function (skor, dariServer) {
      var simpan = { skor: skor, server: dariServer || null, waktu: Date.now(), nama: '', email: '', perusahaan: '' };
      try {
        var n = $('f-name'), e = $('f-email'), c = $('f-company');
        if (n) simpan.nama = n.value || '';
        if (e) simpan.email = e.value || '';
        if (c) simpan.perusahaan = c.value || '';
      } catch (err) {}
      try { localStorage.setItem('lakon_hasil_v1', JSON.stringify(simpan)); } catch (err) {}
      if (skor) { window.location.href = '/hasil/'; return; }
      if (typeof asli === 'function') asli(skor, dariServer);
    };
  }

  /* ── 10. Pemasangan ───────────────────────────────────────────────────── */
  function pasang() {
    /* kemajuan: pantau perubahan lebar bilah milik mesin */
    var bar = $('prog-fill');
    if (bar && window.MutationObserver) {
      new MutationObserver(salinKemajuan).observe(bar, { attributes: true, attributeFilter: ['style'] });
    }
    var mount = $('q-mount');
    if (mount && window.MutationObserver) {
      new MutationObserver(function () {
        salinKemajuan();
        if (!mungkinJeda()) salinKemajuan();
      }).observe(mount, { childList: true });
    }

    /* maju otomatis */
    if (mount) {
      mount.addEventListener('click', function (e) {
        var t = e.target.closest ? e.target.closest('.sk-btn, .ps-btn, .p2-opt') : null;
        if (!t) return;
        if (t.classList.contains('p2-opt')) majuOtomatis('pick2', t);
        else majuOtomatis('skala', t);
      }, false);
    }

    /* tombol mulai dari layar pembuka */
    var mulai = $('btn-mulai');
    if (mulai) mulai.addEventListener('click', function () {
      if (typeof goToAssessment === 'function') goToAssessment();
    });
    /* tombol lanjut di layar jeda */
    var keSoal = function () {
      tampilkanLayar('screen-assessment');
      salinKemajuan();
    };
    var lanjut = $('btn-lanjut');
    if (lanjut) lanjut.addEventListener('click', keSoal);
    document.querySelectorAll('.jeda__lanjut').forEach(function (b) {
      if (b !== lanjut) b.addEventListener('click', keSoal);
    });

    pasangModeRingkas();
    pasangPintasan();
    pasangTautanLanjut();
    pasangAlihHasil();

    keadaan.siap = true;
    salinKemajuan();
  }

  window.LakonTes = { pasang: pasang, pulihkanDariTautan: pulihkanDariTautan, salinKemajuan: salinKemajuan };

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof LakonAssessment === 'undefined') return;
    var dipulihkan = pulihkanDariTautan();
    pasang();
    if (dipulihkan && typeof goToAssessment === 'function') {
      goToAssessment();
      if (typeof LakonAssessment.pulihkanProgres === 'function') LakonAssessment.pulihkanProgres();
    }
  });
})();
