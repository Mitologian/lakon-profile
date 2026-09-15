/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — MODUL ASESMEN  v3
   Alur pengerjaan 108 item: paging, render, validasi, simpan-otomatis, kirim.

   MENGGANTIKAN di app.js:
     MBTI_Q, PICK2_Q, LIKERT_Q, ALL_Q, TOTAL_Q
     buildPages, qsBefore, SEC_LABELS, renderPage,
     buildMBTI, buildPick2, buildLikert, renderUserInfo,
     attachListeners, updateP2Counter, recordLikert, restoreAnswers,
     updateProgress, updateNavBtns, nextPage, prevPage, validatePage,
     computeScore, getDimZone, getDimBadgeCls, submitAssessment
   Lihat lakon_patch_appjs.md untuk daftar baris yang dibuang.

   TETAP DIPAKAI dari app.js:
     PARAGA, PERAN_IDEAL, KELOMPOK_COLORS, KELOMPOK_LABELS,
     showResult, renderDimBars, buildDim2HTML, setLang, showScreen,
     goToAssessment, showToast

   ID ELEMEN DOM yang dipakai (sama persis dengan versi lama, jadi
   index.html tidak perlu diubah strukturnya):
     #q-mount  #prog-fill  #prog-pct  #prog-section-label
     #btn-back  #btn-fwd-lbl

   PERBAIKAN
   - Item Watak berformat PILIHAN BERPASANGAN 4 titik (v4), bukan skala
     setuju. Item Minat tetap skala 5 titik dengan titik tengah aktif.
     Versi lama membuat lingkaran tengah tanpa onclick dan tabindex="-1",
     sehingga peserta mengklik dan tidak terjadi apa-apa.  [fix 1.7]
   - Simpan-otomatis ke sessionStorage. Tes 20 menit tanpa penyimpanan
     berarti satu refresh menghapus semua jawaban.
   - Attention check dirender persis seperti item Minat agar tidak menonjol.
   - Durasi pengerjaan dicatat untuk pemeriksaan kualitas respons.
   - Skoring memakai LakonScoring. Tidak ada lagi salinan logika di sini.
═══════════════════════════════════════════════════════════════════════════ */

var LakonAssessment = (function () {
  "use strict";

  var URL_ENDPOINT = null;      // diisi lewat init()
  var BATCH = 'General';
  var L = function () { return (typeof lang !== 'undefined' ? lang : 'id') === 'id'; };

  var bank = null;
  var urutan = [];              // 108 item, sudah diselang-seling
  var halaman = [];
  var halamanKini = 0;
  var mulaiPada = null;
  var p2Urutan = {};            // urutan opsi Pick-2 teracak, stabil per sesi
  var sedangKirim = false;

  var jawaban = { watak: {}, minat: {}, validity: {}, pick2: {} };

  var KUNCI_SIMPAN = 'lakon_progres_v3';

  var PER_HALAMAN = { skala: 5, pick2: 2 };

  var LABEL_BAGIAN = {
    watak:    { id: 'Cara Kamu Bergerak',        en: 'How You Operate' },
    minat:    { id: 'Apa yang Menarik Bagimu',   en: 'What Draws You' },
    validity: { id: 'Apa yang Menarik Bagimu',   en: 'What Draws You' },
    pick2:    { id: 'Pilihan Cepat',             en: 'Quick Choices' }
  };

  /* ═══════════════════════════════════════════════════
     INISIALISASI
     ═══════════════════════════════════════════════════ */
  function init(opsi) {
    opsi = opsi || {};
    URL_ENDPOINT = opsi.endpoint || null;
    BATCH = opsi.batch || 'General';

    if (typeof LakonBank === 'undefined' || typeof LakonScoring === 'undefined') {
      console.error('LakonBank / LakonScoring belum dimuat. Periksa urutan <script>.');
      return false;
    }

    var cek = LakonBank.verifikasi();
    if (!cek.lolos) {
      console.error('Bank item tidak lolos verifikasi:', cek.masalah);
      return false;
    }

    bank = LakonBank.build();
    urutan = LakonBank.urutanTampil();
    acakOpsiPick2();
    susunHalaman();
    mulaiPada = Date.now();
    return true;
  }

  function acakOpsiPick2() {
    p2Urutan = {};
    for (var i = 0; i < bank.pick2.length; i++) {
      var it = bank.pick2[i];
      p2Urutan[it.id] = acak(it.opts.slice());
    }
  }
  function acak(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Halaman dibentuk dengan memotong urutan tampil per blok sejenis,
     supaya satu halaman tidak pernah mencampur Pick-2 dengan skala. */
  function susunHalaman() {
    halaman = [];
    var i = 0;
    while (i < urutan.length) {
      var jenis = urutan[i].sec === 'pick2' ? 'pick2' : 'skala';
      var muat = jenis === 'pick2' ? PER_HALAMAN.pick2 : PER_HALAMAN.skala;
      var isi = [];
      while (i < urutan.length && isi.length < muat) {
        var j = urutan[i].sec === 'pick2' ? 'pick2' : 'skala';
        if (j !== jenis) break;
        isi.push(urutan[i]); i++;
      }
      halaman.push({ jenis: jenis, sec: isi[0].sec, items: isi });
    }
    halaman.push({ jenis: 'info', sec: 'info', items: [] });
  }

  function itemSebelum(idx) {
    var n = 0;
    for (var i = 0; i < idx; i++) n += halaman[i].items.length;
    return n;
  }

  /* ═══════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════ */
  function render(idx) {
    var mount = document.getElementById('q-mount');
    if (!mount) return;
    mount.innerHTML = '';
    var pg = halaman[idx];

    if (pg.jenis === 'info') { renderInfo(mount); return; }

    var lbl = document.getElementById('prog-section-label');
    if (lbl) lbl.textContent = LABEL_BAGIAN[pg.sec] ? (L() ? LABEL_BAGIAN[pg.sec].id : LABEL_BAGIAN[pg.sec].en) : '';

    var wrap = document.createElement('div');
    wrap.className = 'q-container';
    var sebelum = itemSebelum(idx);

    for (var i = 0; i < pg.items.length; i++) {
      var it = pg.items[i];
      var blok = document.createElement('div');
      blok.className = 'q-block';
      blok.innerHTML = (it.sec === 'pick2')
        ? htmlPick2(it, sebelum + i + 1)
        : htmlSkala(it, sebelum + i + 1);
      wrap.appendChild(blok);
    }

    mount.appendChild(wrap);
    pulihkanJawaban(pg);
    window.scrollTo(0, 0);
    perbaruiProgres(idx);
    perbaruiTombol(idx);
  }

  /* ── Pilihan berpasangan bertingkat, untuk item Watak ──────
     Dua pernyataan ditampilkan bersamaan, empat titik di antaranya.
     Format ini menggantikan skala setuju v3 yang rentan bias keinginan
     sosial: selama peserta hanya melihat satu sisi, otaknya menilai
     "apakah ini terdengar seperti orang yang baik", bukan "apakah ini
     saya".

     `flip` menukar POSISI TAMPIL saja. Nilai yang disimpan selalu
     relatif terhadap kutub A, berapa pun urutannya di layar.        */
  function htmlPasangan(it, nomor) {
    var skala = (typeof LAKON_SKALA_WATAK !== 'undefined') ? LAKON_SKALA_WATAK : null;
    if (!skala) return '';
    var opsi = L() ? skala.id : skala.en;
    var tanya = L() ? skala.tanya.id : skala.tanya.en;

    var kiri = it.flip ? it.b : it.a;
    var kanan = it.flip ? it.a : it.b;
    var sisiKiri = it.flip ? 'b' : 'a';

    var h = '<div class="q-num">' + nomor + '</div>' +
            '<p class="q-tanya">' + esc(tanya) + '</p>' +
            '<div class="pasangan">' +
              '<div class="ps-sisi ps-kiri">' + esc(L() ? kiri.id : kiri.en) + '</div>' +
              '<div class="ps-sisi ps-kanan">' + esc(L() ? kanan.id : kanan.en) + '</div>' +
            '</div>' +
            '<div class="ps-skala" role="radiogroup" aria-label="' + esc(tanya) + '">';

    var urut = opsi.slice();
    if (sisiKiri === 'b') urut.reverse();

    for (var i = 0; i < urut.length; i++) {
      var o = urut[i];
      var dekatKiri = (o.sisi === sisiKiri);
      var kuat = Math.abs(o.v) === 2;
      h += '<button type="button" class="ps-btn ps-' + (dekatKiri ? 'ki' : 'ka') +
           (kuat ? ' ps-kuat' : ' ps-condong') + '"' +
           ' data-id="' + it.id + '" data-sec="watak" data-v="' + o.v + '"' +
           ' role="radio" aria-checked="false" tabindex="0">' +
           '<span class="ps-dot"></span>' +
           '<span class="ps-lbl">' + esc(o.label) + '</span>' +
           '</button>';
    }
    return h + '</div>';
  }

  /* ── Skala setuju 5 titik, untuk item Minat ────────────────
     Bagian Holland tetap memakai format ini dan memang tidak perlu
     diubah: menyukai mesin tidak lebih mulia daripada menyukai orang,
     jadi tidak ada kutub yang menang secara norma di sana.
     Titik tengah AKTIF dan berlabel.  [fix 1.7]              */
  function htmlSkala(it, nomor) {
    if (it.a && it.b) return htmlPasangan(it, nomor);

    var teks = L() ? it.id_s : it.en_s;
    var skala = (it.sec === 'watak')
      ? (typeof LAKON_SKALA_WATAK !== 'undefined' ? LAKON_SKALA_WATAK : null)
      : (typeof LAKON_SKALA_MINAT !== 'undefined' ? LAKON_SKALA_MINAT : null);
    var opsi = skala ? (L() ? skala.id : skala.en) : [];

    var h = '<div class="q-num">' + nomor + '</div>' +
            '<p class="q-text">' + esc(teks) + '</p>' +
            '<div class="skala5" role="radiogroup" aria-label="' + esc(teks) + '">';

    for (var i = 0; i < opsi.length; i++) {
      var o = opsi[i];
      h += '<button type="button" class="sk-btn sk-' + i + '"' +
           ' data-id="' + it.id + '" data-sec="' + it.sec + '" data-v="' + o.v + '"' +
           ' role="radio" aria-checked="false" tabindex="0">' +
           '<span class="sk-dot"></span>' +
           '<span class="sk-lbl">' + esc(o.label) + '</span>' +
           '</button>';
    }
    return h + '</div>';
  }

  /* ── Pick-2 ─────────────────────────────────────────── */
  function htmlPick2(it, nomor) {
    var tanya = L() ? it.id_q : it.en_q;
    var opts = p2Urutan[it.id] || it.opts;
    var h = '<div class="q-num">' + nomor + '</div>' +
            '<p class="q-text">' + esc(tanya) + '</p>' +
            '<div class="pick2-grid">';
    for (var i = 0; i < opts.length; i++) {
      var o = opts[i];
      h += '<button type="button" class="p2-opt" data-id="' + it.id + '" data-t="' + o.t + '"' +
           ' aria-pressed="false">' + esc(L() ? o.id : o.en) + '</button>';
    }
    h += '</div><div class="pick2-counter" id="p2c_' + it.id + '">' +
         (L() ? '0 / 2 dipilih' : '0 / 2 selected') + '</div>';
    return h;
  }

  function renderInfo(mount) {
    var lbl = document.getElementById('prog-section-label');
    if (lbl) lbl.textContent = '';
    setProgres(100);
    var b = document.getElementById('btn-back'); if (b) b.disabled = false;
    var f = document.getElementById('btn-fwd-lbl'); if (f) f.textContent = L() ? 'Kirim' : 'Submit';

    mount.innerHTML =
      '<div class="userinfo-wrap">' +
      '<h2 class="userinfo-h">' + (L() ? 'Hampir selesai.' : 'Almost done.') + '</h2>' +
      '<p class="userinfo-sub">' + (L()
        ? 'Isi data berikut untuk menyimpan hasil assessment-mu.'
        : 'Fill in the details below to save your results.') + '</p>' +
      '<div class="field-group"><label class="field-label">' + (L() ? 'Nama Lengkap' : 'Full Name') +
      '</label><input class="field-input" type="text" id="f-name" autocomplete="name" placeholder="' +
      (L() ? 'Nama lengkap kamu' : 'Your full name') + '"></div>' +
      '<div class="field-group"><label class="field-label">Email</label>' +
      '<input class="field-input" type="email" id="f-email" autocomplete="email" placeholder="email@kamu.com"></div>' +
      '<div class="field-group"><label class="field-label">' +
      (L() ? 'Perusahaan / Institusi (opsional)' : 'Company / Institution (optional)') +
      '</label><input class="field-input" type="text" id="f-company" placeholder="—"></div>' +
      '<label class="consent-row"><input type="checkbox" id="f-consent"> <span>' +
      (L()
        ? 'Saya setuju data saya disimpan dan digunakan untuk menyusun hasil asesmen ini.'
        : 'I agree my data may be stored and used to produce this assessment result.') +
      '</span></label>' +
      '<button class="btn-submit" id="btn-submit-form">' +
      (L() ? 'Kirim Hasil Assessment' : 'Submit Assessment') + '</button>' +
      '<p class="submit-note" id="submit-note">' +
      (L() ? 'Hasil akan dikirim ke email kamu.' : 'Results will be sent to your email.') + '</p>' +
      '</div>';

    var btn = document.getElementById('btn-submit-form');
    if (btn) btn.addEventListener('click', kirim);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ═══════════════════════════════════════════════════
     INTERAKSI
     Satu listener di tingkat dokumen, bukan per tombol.
     Versi lama memasang listener ulang tiap render, yang
     menumpuk kalau halaman dikunjungi berkali-kali.
     ═══════════════════════════════════════════════════ */
  function pasangListener() {
    document.addEventListener('click', function (e) {
      var sk = e.target.closest ? e.target.closest('.sk-btn, .ps-btn') : null;
      if (sk) { pilihSkala(sk); return; }
      var p2 = e.target.closest ? e.target.closest('.p2-opt') : null;
      if (p2) { pilihPick2(p2); return; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var t = document.activeElement;
      if (!t || !t.classList) return;
      if (t.classList.contains('sk-btn') || t.classList.contains('ps-btn')) { e.preventDefault(); pilihSkala(t); }
      else if (t.classList.contains('p2-opt')) { e.preventDefault(); pilihPick2(t); }
    });
  }

  function pilihSkala(btn) {
    var id = btn.dataset.id, sec = btn.dataset.sec, v = Number(btn.dataset.v);
    if (sec === 'watak') jawaban.watak[id] = v;
    else if (sec === 'validity') jawaban.validity[id] = v;
    else jawaban.minat[id] = v;

    var grup = btn.parentNode.querySelectorAll('.sk-btn, .ps-btn');
    for (var i = 0; i < grup.length; i++) {
      grup[i].classList.remove('sel');
      grup[i].setAttribute('aria-checked', 'false');
    }
    btn.classList.add('sel');
    btn.setAttribute('aria-checked', 'true');
    simpanProgres();
  }

  function pilihPick2(btn) {
    var id = btn.dataset.id, t = btn.dataset.t;
    if (!jawaban.pick2[id]) jawaban.pick2[id] = [];
    var arr = jawaban.pick2[id], pos = arr.indexOf(t);

    if (pos >= 0) { arr.splice(pos, 1); btn.classList.remove('sel'); btn.setAttribute('aria-pressed', 'false'); }
    else {
      if (arr.length >= 2) { toast(L() ? 'Pilih maksimal 2' : 'Choose a maximum of 2'); return; }
      arr.push(t); btn.classList.add('sel'); btn.setAttribute('aria-pressed', 'true');
    }
    hitungPick2(id);
    simpanProgres();
  }

  function hitungPick2(id) {
    var n = (jawaban.pick2[id] || []).length;
    var el = document.getElementById('p2c_' + id);
    if (!el) return;
    el.textContent = L() ? (n + ' / 2 dipilih') : (n + ' / 2 selected');
    el.className = 'pick2-counter' + (n === 2 ? ' done' : '');
  }

  function pulihkanJawaban(pg) {
    for (var i = 0; i < pg.items.length; i++) {
      var it = pg.items[i];
      if (it.sec === 'pick2') {
        var dipilih = jawaban.pick2[it.id] || [];
        var tombol = document.querySelectorAll('.p2-opt[data-id="' + it.id + '"]');
        for (var j = 0; j < tombol.length; j++) {
          if (dipilih.indexOf(tombol[j].dataset.t) >= 0) {
            tombol[j].classList.add('sel');
            tombol[j].setAttribute('aria-pressed', 'true');
          }
        }
        hitungPick2(it.id);
      } else {
        var v = (it.sec === 'watak') ? jawaban.watak[it.id]
              : (it.sec === 'validity') ? jawaban.validity[it.id]
              : jawaban.minat[it.id];
        if (v === undefined) continue;
        var b = document.querySelector('.sk-btn[data-id="' + it.id + '"][data-v="' + v + '"], ' +
                                       '.ps-btn[data-id="' + it.id + '"][data-v="' + v + '"]');
        if (b) { b.classList.add('sel'); b.setAttribute('aria-checked', 'true'); }
      }
    }
  }

  /* ═══════════════════════════════════════════════════
     NAVIGASI & VALIDASI
     ═══════════════════════════════════════════════════ */
  function setProgres(p) {
    var f = document.getElementById('prog-fill'); if (f) f.style.width = p + '%';
    var t = document.getElementById('prog-pct');  if (t) t.textContent = p + '%';
  }

  function perbaruiProgres(idx) {
    var total = urutan.length;
    var selesai = itemSebelum(idx) + halaman[idx].items.length;
    setProgres(Math.round(selesai / total * 100));
  }

  function perbaruiTombol(idx) {
    var b = document.getElementById('btn-back'); if (b) b.disabled = (idx === 0);
    var akhir = (idx === halaman.length - 1);
    var f = document.getElementById('btn-fwd-lbl');
    if (f) f.textContent = L() ? (akhir ? 'Kirim' : 'Lanjut') : (akhir ? 'Submit' : 'Next');
  }

  function validasiHalaman() {
    var pg = halaman[halamanKini];
    if (pg.jenis === 'info') return true;
    for (var i = 0; i < pg.items.length; i++) {
      var it = pg.items[i];
      if (it.sec === 'pick2') {
        if (!jawaban.pick2[it.id] || jawaban.pick2[it.id].length !== 2) {
          toast(L() ? 'Pilih tepat 2 untuk setiap soal' : 'Pick exactly 2 for each question');
          return false;
        }
      } else {
        var v = (it.sec === 'watak') ? jawaban.watak[it.id]
              : (it.sec === 'validity') ? jawaban.validity[it.id]
              : jawaban.minat[it.id];
        if (v === undefined) {
          toast(L() ? 'Jawab semua pernyataan terlebih dahulu' : 'Please answer all statements first');
          return false;
        }
      }
    }
    return true;
  }

  function maju() {
    if (!validasiHalaman()) return;
    if (halamanKini < halaman.length - 1) { halamanKini++; render(halamanKini); simpanProgres(); }
  }
  function mundur() {
    if (halamanKini > 0) { halamanKini--; render(halamanKini); simpanProgres(); }
  }

  /* ═══════════════════════════════════════════════════
     SIMPAN-OTOMATIS
     Tes 108 item memakan ~20 menit. Tanpa penyimpanan,
     satu refresh atau telepon masuk menghapus semuanya,
     dan itu penyebab dropout yang nyata.
     ═══════════════════════════════════════════════════ */
  function simpanProgres() {
    try {
      sessionStorage.setItem(KUNCI_SIMPAN, JSON.stringify({
        v: 3, jawaban: jawaban, halaman: halamanKini,
        mulai: mulaiPada, p2: p2Urutan, waktu: Date.now()
      }));
    } catch (e) { /* mode privat atau kuota penuh: abaikan, jangan ganggu peserta */ }
  }

  function adaProgresTersimpan() {
    try {
      var s = JSON.parse(sessionStorage.getItem(KUNCI_SIMPAN) || 'null');
      if (!s || s.v !== 3) return false;
      var n = Object.keys(s.jawaban.watak || {}).length + Object.keys(s.jawaban.minat || {}).length;
      return n > 0;
    } catch (e) { return false; }
  }

  function pulihkanProgres() {
    try {
      var s = JSON.parse(sessionStorage.getItem(KUNCI_SIMPAN) || 'null');
      if (!s || s.v !== 3) return false;

      // Isi ulang DI TEMPAT, jangan mengganti referensi objeknya.
      // Reassignment (`jawaban = s.jawaban`) membuat kode lain yang sudah
      // memegang referensi lama terus membaca data usang tanpa error apa pun.
      var bagian = ['watak', 'minat', 'validity', 'pick2'], i, k;
      for (i = 0; i < bagian.length; i++) {
        var b = bagian[i];
        for (k in jawaban[b]) if (jawaban[b].hasOwnProperty(k)) delete jawaban[b][k];
        var src = (s.jawaban && s.jawaban[b]) || {};
        for (k in src) if (src.hasOwnProperty(k)) jawaban[b][k] = src[k];
      }

      halamanKini = Math.min(s.halaman || 0, halaman.length - 1);
      mulaiPada = s.mulai || Date.now();
      if (s.p2) p2Urutan = s.p2;   // urutan opsi harus sama agar pilihan tetap valid
      render(halamanKini);
      return true;
    } catch (e) { return false; }
  }

  function hapusProgres() {
    try { sessionStorage.removeItem(KUNCI_SIMPAN); } catch (e) {}
  }

  /* ═══════════════════════════════════════════════════
     SKORING & PENGIRIMAN
     ═══════════════════════════════════════════════════ */
  function hitungLokal() {
    return LakonScoring.computeAll(bank, {
      watak: jawaban.watak, minat: jawaban.minat,
      pick2: jawaban.pick2, validity: jawaban.validity,
      meta: { durationSec: Math.round((Date.now() - mulaiPada) / 1000) }
    });
  }

  function kirim() {
    if (sedangKirim) return;

    var nama  = (document.getElementById('f-name')  || {}).value || '';
    var email = (document.getElementById('f-email') || {}).value || '';
    var comp  = (document.getElementById('f-company') || {}).value || '';
    var setuju = (document.getElementById('f-consent') || {}).checked;

    if (!nama.trim())  { toast(L() ? 'Nama belum diisi' : 'Name is required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast(L() ? 'Email belum benar' : 'Email is not valid'); return;
    }
    if (!setuju) {
      toast(L() ? 'Mohon centang persetujuan penyimpanan data' : 'Please tick the consent box'); return;
    }

    var kurang = itemBelumDijawab();
    if (kurang.length) {
      toast(L() ? ('Masih ada ' + kurang.length + ' pertanyaan yang belum dijawab')
                : ('Still ' + kurang.length + ' unanswered questions'));
      lompatKe(kurang[0]);
      return;
    }

    sedangKirim = true;
    var btn = document.getElementById('btn-submit-form');
    if (btn) { btn.disabled = true; btn.textContent = L() ? 'Mengirim…' : 'Sending…'; }

    var lokal = hitungLokal();
    var muatan = {
      action: 'submit',
      participant_name: nama.trim(),
      participant_email: email.trim(),
      participant_company: comp.trim(),
      batch_id: BATCH,
      lang: L() ? 'id' : 'en',
      consent: true,
      answers: {
        watak: jawaban.watak, minat: jawaban.minat,
        pick2: jawaban.pick2, validity: jawaban.validity,
        meta: { durationSec: Math.round((Date.now() - mulaiPada) / 1000) }
      }
    };

    fetch(URL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },  // hindari preflight CORS
      body: JSON.stringify(muatan)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.status !== 'ok') throw new Error(res.message || 'Gagal');
        hapusProgres();
        selesai(lokal, res.data);
      })
      .catch(function (err) {
        // Hasil tetap ditampilkan meski penyimpanan gagal. Peserta sudah
        // mengerjakan 108 item; kehilangan hasil karena masalah jaringan
        // adalah kegagalan produk, bukan sekadar kegagalan teknis.
        console.error('Pengiriman gagal:', err);
        toast(L() ? 'Hasil tampil, tapi belum tersimpan. Simpan halaman ini.'
                  : 'Result shown, but not saved. Please keep this page.');
        selesai(lokal, null);
      })
      .then(function () {
        sedangKirim = false;
        if (btn) { btn.disabled = false; btn.textContent = L() ? 'Kirim Hasil Assessment' : 'Submit Assessment'; }
      });
  }

  function selesai(lokal, dariServer) {
    // Server adalah sumber kebenaran. Kalau hasilnya berbeda dari
    // hitungan lokal, itu tanda bank item di klien dan server tidak sama.
    if (dariServer && dariServer.paraga_id && dariServer.paraga_id !== lokal.paragaId) {
      console.warn('Hasil server berbeda dari hitungan lokal. Memakai hasil server.',
                   dariServer.paraga_id, 'vs', lokal.paragaId);
    }
    if (typeof showResult === 'function') showResult(lokal, dariServer);
    else console.error('showResult belum tersedia di app.js');
  }

  function itemBelumDijawab() {
    var kurang = [], i;
    for (i = 0; i < bank.watak.length; i++)
      if (jawaban.watak[bank.watak[i].id] === undefined) kurang.push(bank.watak[i].id);
    for (i = 0; i < bank.minat.length; i++)
      if (jawaban.minat[bank.minat[i].id] === undefined) kurang.push(bank.minat[i].id);
    for (i = 0; i < bank.pick2.length; i++)
      if ((jawaban.pick2[bank.pick2[i].id] || []).length !== 2) kurang.push(bank.pick2[i].id);
    return kurang;
  }

  function lompatKe(itemId) {
    for (var i = 0; i < halaman.length; i++) {
      for (var j = 0; j < halaman[i].items.length; j++) {
        if (halaman[i].items[j].id === itemId) { halamanKini = i; render(i); return; }
      }
    }
  }

  function toast(m) {
    if (typeof showToast === 'function') showToast(m);
    else console.log(m);
  }

  /* ═══════════════════════════════════════════════════
     API PUBLIK
     ═══════════════════════════════════════════════════ */
  return {
    init: init,
    pasangListener: pasangListener,
    mulai: function () { halamanKini = 0; mulaiPada = Date.now(); render(0); },
    render: render,
    // Dipanggil saat bahasa diganti di tengah pengerjaan. Jawaban tidak
    // hilang karena render() memanggil pulihkanJawaban() dari state.
    renderUlang: function () {
      if (!halaman.length) return;
      render(halamanKini);
    },
    maju: maju,
    mundur: mundur,
    kirim: kirim,
    hitungLokal: hitungLokal,
    adaProgresTersimpan: adaProgresTersimpan,
    pulihkanProgres: pulihkanProgres,
    hapusProgres: hapusProgres,
    totalItem: function () { return urutan.length; },
    totalHalaman: function () { return halaman.length; },
    jawaban: function () { return jawaban; }
  };
})();

/* ── Jembatan ke tombol lama di index.html ───────────────────
   index.html memanggil nextPage() dan prevPage() lewat onclick.
   Alias ini menjaga markup lama tetap bekerja tanpa diubah.     */
function nextPage() { LakonAssessment.maju(); }
function prevPage() { LakonAssessment.mundur(); }
function submitAssessment() { LakonAssessment.kirim(); }

if (typeof module !== "undefined" && module.exports) module.exports = LakonAssessment;
