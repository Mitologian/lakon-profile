/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — BANK ITEM WATAK  v4.1
   Naskah disunting Dedy (6 Sep 2026), lalu diselaraskan ID/EN dan
   diperiksa ulang terhadap enam kaidah penulisan di bawah.
   48 pasang · pilihan berpasangan bertingkat 4 titik · 12 pasang per dimensi

   ═══════════════════════════════════════════════════════════════════════
   KENAPA FORMATNYA BERUBAH LAGI
   ═══════════════════════════════════════════════════════════════════════

   v3 memakai pernyataan tunggal dengan skala setuju 5 titik. Format itu
   menyelesaikan masalah "Samar" dari versi biner, tapi menukarnya dengan
   masalah lain yang tidak kalah serius: BIAS KEINGINAN SOSIAL.

   Selama peserta hanya melihat satu sisi, otaknya menilai "apakah ini
   terdengar seperti orang yang baik", bukan "apakah ini saya". Audit pada
   48 item v3 menemukan 15 di antaranya memuat isyarat norma sosial yang
   jelas, dan angka sebenarnya lebih tinggi. Contoh terburuk:

     "Saya lebih suka mengerjakan sesuatu dengan cara yang sudah terbukti
      berhasil."     → hampir semua orang setuju, apa pun tipenya
     "Saya senang membahas gagasan yang masih abstrak dan belum jelas
      bentuknya."    → terdengar seperti mengaku suka mengkhayal
     "Saya lebih nyaman mengambil keputusan lebih cepat daripada
      menundanya."   → menunda terdengar seperti kelemahan

   Inilah sebabnya MBTI asli memakai pilihan berpasangan, bukan skala
   setuju. Kalau dua sisi ditampilkan bersamaan dan keduanya sama-sama
   masuk akal, tidak ada arah yang "benar" untuk dituju.

   Bagian Minat (Holland) TIDAK diubah dan memang tidak perlu: menyukai
   mesin tidak lebih mulia daripada menyukai orang, jadi tidak ada kutub
   yang menang secara norma di sana.

   ═══════════════════════════════════════════════════════════════════════
   KENAPA BERTINGKAT, BUKAN SEKADAR PILIH SALAH SATU
   ═══════════════════════════════════════════════════════════════════════

   Pilihan berpasangan biasa (pilih A atau B) berarti kembali ke biner,
   dan seri akan muncul lagi seperti versi paling awal. Empat titik antara
   dua kutub mempertahankan gradasi tanpa mengembalikan bias:

     Jelas A · Condong A · Condong B · Jelas B   →   +2 · +1 · −1 · −2

   Tidak ada titik tengah. Pada format berpasangan, titik tengah hanya jadi
   tempat kabur. Pada v3 titik tengahnya bahkan tidak bisa diklik.

   ═══════════════════════════════════════════════════════════════════════
   ENAM KAIDAH PENULISAN
   ═══════════════════════════════════════════════════════════════════════

   1. KATA KERJANYA SAMA DI KEDUA SISI, ISINYA YANG BERBEDA.
      "Cara teruji terasa menarik" / "Cara baru terasa menarik" — dua-duanya
      berbunyi "terasa menarik". Begitu satu sisi memakai kata kerja yang
      lebih berbobot, sisi itu menang sebelum dibaca isinya.

   2. TIDAK ADA SISI YANG MENYEBUT KELEMAHAN.
      Dilarang: "menunda", "berantakan", "tidak penting", "bosan",
      "mengkhayal". Semua dinyatakan sebagai keadaan yang wajar.

   3. KEDUANYA SAMA PANJANG.
      Sisi yang lebih panjang terlihat lebih dipikirkan, dan itu menarik
      pilihan tanpa alasan. Selisih dijaga di bawah 12 karakter.

   4. PENDEK, maksimal sekitar 8 kata.
      Pasangan yang panjang membuat peserta membandingkan tata bahasa,
      bukan membandingkan dirinya.

   5. POSISI KUTUB DISELANG (`flip`).
      Setengah pasang menampilkan kutub A di kiri, setengah lagi di kanan.
      Ini menggantikan kontrol acquiescence versi lama: yang dijaga bukan
      lagi kecenderungan setuju, melainkan kecenderungan memilih sisi kiri.

   6. TIDAK ADA ATTENTION CHECK YANG TERLIHAT.
      "Untuk pernyataan ini, pilih Tidak Setuju" merendahkan orang yang
      membayar, dan mematahkan alur baca. Penggantinya sepasang item yang
      isinya berdekatan, ditaruh berjauhan, ditandai `pasangan`. Kalau
      jawabannya bertolak belakang, itu tanda menjawab asal, tanpa peserta
      pernah merasa sedang diuji.

   ═══════════════════════════════════════════════════════════════════════
   KONTRAK DATA
   ═══════════════════════════════════════════════════════════════════════
     id        id unik
     dim       'arus' | 'pandang' | 'timbang' | 'irama'
     a         pernyataan kutub A  { id, en }
     b         pernyataan kutub B  { id, en }
     flip      true = kutub B ditampilkan di kiri
     pasangan  opsional, penanda pasangan konsistensi

   KUTUB
     arus     A=E  B=I          pandang  A=N  B=S
     timbang  A=T  B=F          irama    A=J  B=P

   Nilai yang disimpan SELALU relatif terhadap kutub A, berapa pun urutan
   tampilnya. UI yang membalik posisi, bukan datanya.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_SKALA_WATAK = {
  id: [
    { v:  2, label: "Jelas",   sisi: "a" },
    { v:  1, label: "Condong", sisi: "a" },
    { v: -1, label: "Condong", sisi: "b" },
    { v: -2, label: "Jelas",   sisi: "b" }
  ],
  en: [
    { v:  2, label: "Clearly", sisi: "a" },
    { v:  1, label: "Leaning", sisi: "a" },
    { v: -1, label: "Leaning", sisi: "b" },
    { v: -2, label: "Clearly", sisi: "b" }
  ],
  tanya: { id: "Mana yang lebih terasa seperti kamu?", en: "Which feels more like you?" }
};

var LAKON_ITEMS_WATAK = [

  /* ───────────────────── ARUS · E / I ─────────────────────
     Ke mana energi mengalir. Tidak menentukan Watak, tapi
     menentukan nuansa dan cara menjalani peran. */
  { id:"w_ar_01", dim:"arus", flip:false,
    a:{ id:"Bicara dulu, perjelas arti kemudian", en:"Speak first, clarify meaning later" },
    b:{ id:"Rencanakan arti dulu, bicara kemudian", en:"Shape the meaning first, speak later" } },
  { id:"w_ar_02", dim:"arus", flip:true, pasangan:"k1",
    a:{ id:"Keramaian lebih mengisi tenaga", en:"A crowd fills your tank more" },
    b:{ id:"Ketenangan lebih mengisi tenaga", en:"Calm fills your tank more" } },
  { id:"w_ar_03", dim:"arus", flip:false,
    a:{ id:"Kenal cepat dengan banyak orang", en:"Warm up fast, with many people" },
    b:{ id:"Kenal perlahan dengan sedikit orang", en:"Warm up slowly, with few people" } },
  { id:"w_ar_04", dim:"arus", flip:true,
    a:{ id:"Ide muncul saat mengobrol", en:"Ideas arrive while talking" },
    b:{ id:"Ide muncul saat menyendiri", en:"Ideas arrive while alone" } },
  { id:"w_ar_05", dim:"arus", flip:false,
    a:{ id:"Akhir pekan bersama orang", en:"Weekends among people" },
    b:{ id:"Akhir pekan tanpa acara", en:"Weekends with nothing on" } },
  { id:"w_ar_06", dim:"arus", flip:true,
    a:{ id:"Suara sekitar tidak terasa", en:"Background noise goes unnoticed" },
    b:{ id:"Suara sekitar terasa jelas", en:"Background noise stays noticed" } },
  { id:"w_ar_07", dim:"arus", flip:false,
    a:{ id:"Menyapa duluan terasa wajar", en:"Greeting first feels natural" },
    b:{ id:"Disapa duluan terasa wajar", en:"Being greeted feels natural" } },
  { id:"w_ar_08", dim:"arus", flip:true,
    a:{ id:"Berpikir sambil bersuara", en:"Thinking out loud" },
    b:{ id:"Berpikir dalam diam", en:"Thinking in silence" } },
  { id:"w_ar_09", dim:"arus", flip:false,
    a:{ id:"Lebih nyaman berinteraksi", en:"Interaction feels natural" },
    b:{ id:"Lebih nyaman berkonsentrasi", en:"Concentration feels natural" } },
  { id:"w_ar_10", dim:"arus", flip:true,
    a:{ id:"Cerita ke beberapa orang", en:"Telling several people" },
    b:{ id:"Cerita ke satu orang saja", en:"Telling just one person" } },
  { id:"w_ar_11", dim:"arus", flip:false, pasangan:"k1",
    a:{ id:"Ruangan penuh terasa hidup", en:"A full room feels alive" },
    b:{ id:"Ruangan penuh terasa padat", en:"A full room feels dense" } },
  { id:"w_ar_12", dim:"arus", flip:true,
    a:{ id:"Jeda kosong diisi obrolan", en:"Empty gaps filled with talk" },
    b:{ id:"Jeda kosong diisi ketenangan", en:"Empty gaps filled with calm" } },

  /* ───────────────────── PANDANG · N / S ─────────────────────
     Bagaimana keadaan diserap. Penentu Watak pertama. */
  { id:"w_pa_01", dim:"pandang", flip:false,
    a:{ id:"Pola besar dulu, rincian kemudian", en:"Big pattern first, detail later" },
    b:{ id:"Rincian dulu, pola besar kemudian", en:"Detail first, big pattern later" } },
  { id:"w_pa_02", dim:"pandang", flip:true,
    a:{ id:"Cara baru terasa lebih menarik", en:"A new way feels more inviting" },
    b:{ id:"Cara teruji terasa lebih menarik", en:"A proven way feels more inviting" } },
  { id:"w_pa_03", dim:"pandang", flip:false,
    a:{ id:"Menjelaskan lewat perumpamaan", en:"Explaining through analogy" },
    b:{ id:"Menjelaskan lewat contoh nyata", en:"Explaining through real cases" } },
  { id:"w_pa_04", dim:"pandang", flip:true,
    a:{ id:"Lebih mengingat kesan keseluruhan", en:"Remembering the overall feel more" },
    b:{ id:"Lebih mengingat urutan kejadian", en:"Remembering the sequence more" } },
  { id:"w_pa_05", dim:"pandang", flip:false,
    a:{ id:"Membahas soal kemungkinan", en:"Discussing what is possible" },
    b:{ id:"Membahas soal fakta adanya", en:"Discussing what is factual" } },
  { id:"w_pa_06", dim:"pandang", flip:true,
    a:{ id:"Arahan garis besar sudah cukup", en:"Broad direction is enough" },
    b:{ id:"Arahan terperinci lebih enak", en:"Detailed direction sits better" } },
  { id:"w_pa_07", dim:"pandang", flip:false,
    a:{ id:"Memikirkan lima tahun lagi", en:"Thinking five years out" },
    b:{ id:"Memikirkan lima hari ini", en:"Thinking about the next five days" } },
  { id:"w_pa_08", dim:"pandang", flip:true,
    a:{ id:"Menangkap maksud di baliknya", en:"Catching what is meant" },
    b:{ id:"Menangkap apa yang dikatakan", en:"Catching what is said" } },
  { id:"w_pa_09", dim:"pandang", flip:false,
    a:{ id:"Tertarik pada ide yang baru", en:"Drawn to new ideas and options" },
    b:{ id:"Tertarik pada yang sudah terbukti", en:"Drawn to what is already proven" } },
  { id:"w_pa_10", dim:"pandang", flip:true,
    a:{ id:"Melompat antar gagasan", en:"Jumping between ideas" },
    b:{ id:"Melangkah satu per satu", en:"Stepping one at a time" } },
  { id:"w_pa_11", dim:"pandang", flip:false,
    a:{ id:"Hal baru terasa menyegarkan", en:"Something new feels refreshing" },
    b:{ id:"Hal yang sama terasa menenangkan", en:"The same thing feels settling" } },
  { id:"w_pa_12", dim:"pandang", flip:true,
    a:{ id:"Bertanya bisa jadi apa", en:"Asking what it could become" },
    b:{ id:"Bertanya sekarang bagaimana", en:"Asking what it is right now" } },

  /* ───────────────────── TIMBANG · T / F ─────────────────────
     Bagaimana keputusan ditimbang. Penentu Watak jalur N. */
  { id:"w_ti_01", dim:"timbang", flip:false,
    a:{ id:"Menimbang untung ruginya", en:"Weighing costs and gains" },
    b:{ id:"Menimbang dampaknya pada orang", en:"Weighing the effect on people" } },
  { id:"w_ti_02", dim:"timbang", flip:true,
    a:{ id:"Berterus terang lebih dulu", en:"Being straight comes first" },
    b:{ id:"Menjaga perasaan lebih dulu", en:"Protecting feelings comes first" } },
  { id:"w_ti_03", dim:"timbang", flip:false,
    a:{ id:"Menilai dari alasannya", en:"Judging by the reasoning" },
    b:{ id:"Menilai dari maksudnya", en:"Judging by the intent" } },
  { id:"w_ti_04", dim:"timbang", flip:true,
    a:{ id:"Perbaiki masalahnya dulu", en:"Fix the problem first" },
    b:{ id:"Tenangkan orangnya dulu", en:"Settle the person first" } },
  { id:"w_ti_05", dim:"timbang", flip:false,
    a:{ id:"Adil berarti sama untuk semua", en:"Fair means the same for all" },
    b:{ id:"Adil berarti sesuai keadaannya", en:"Fair means fitting each case" } },
  { id:"w_ti_06", dim:"timbang", flip:true,
    a:{ id:"Kritik langsung mudah dicerna", en:"Blunt feedback lands easily" },
    b:{ id:"Kritik perlu dirasa untuk dicerna", en:"Blunt feedback needs to be felt first" } },
  { id:"w_ti_07", dim:"timbang", flip:false,
    a:{ id:"Diyakinkan oleh angka", en:"Convinced by the numbers" },
    b:{ id:"Diyakinkan oleh pengalaman", en:"Convinced by lived experience" } },
  { id:"w_ti_08", dim:"timbang", flip:true,
    a:{ id:"Memisahkan orang dari masalahnya", en:"Separating person from problem" },
    b:{ id:"Memandang orang dalam masalahnya", en:"Regarding the person within the problem" } },
  { id:"w_ti_09", dim:"timbang", flip:false,
    a:{ id:"Tetap pada aturan yang sama", en:"Holding to the same rule" },
    b:{ id:"Sesuaikan pada tiap orangnya", en:"Adjusting to each person" } },
  { id:"w_ti_10", dim:"timbang", flip:true,
    a:{ id:"Beda pendapat terasa biasa", en:"Disagreement feels ordinary" },
    b:{ id:"Beda pendapat terasa berat", en:"Disagreement feels weighty" } },
  { id:"w_ti_11", dim:"timbang", flip:false,
    a:{ id:"Bertanya apakah ini masuk akal", en:"Asking whether it makes sense" },
    b:{ id:"Bertanya apakah ini terasa pas", en:"Asking whether it sits right" } },
  { id:"w_ti_12", dim:"timbang", flip:true,
    a:{ id:"Keputusan berdiri di hitungan", en:"Decisions rest on the maths" },
    b:{ id:"Keputusan berdiri di keyakinan", en:"Decisions rest on conviction" } },

  /* ───────────────────── IRAMA · J / P ─────────────────────
     Bagaimana hari dijalani. Penentu Watak jalur S. */
  { id:"w_ir_01", dim:"irama", flip:false,
    a:{ id:"Rencana yang pasti menenangkan", en:"A definite plan settles you" },
    b:{ id:"Pilihan yang terbuka menenangkan", en:"Open options settle you" } },
  { id:"w_ir_02", dim:"irama", flip:true,
    a:{ id:"Tenang setelah selesai sesuai jadwal", en:"Calm comes from finishing as planned" },
    b:{ id:"Fokus datang saat tenggat mendekat", en:"Focus comes as the deadline draws near" } },
  { id:"w_ir_03", dim:"irama", flip:false,
    a:{ id:"Daftar tugas terasa membantu", en:"A task list feels helpful" },
    b:{ id:"Daftar tugas terasa mengikat", en:"A task list feels binding" } },
  { id:"w_ir_04", dim:"irama", flip:true,
    a:{ id:"Akhir pekan sudah ada rencana", en:"The weekend already has a plan" },
    b:{ id:"Akhir pekan dilihat nanti saja", en:"The weekend gets decided later" } },
  { id:"w_ir_05", dim:"irama", flip:false,
    a:{ id:"Menutup keputusan terasa melegakan", en:"Closing a decision feels like relief" },
    b:{ id:"Memiliki pilihan terasa melegakan", en:"Having options feels like relief" } },
  { id:"w_ir_06", dim:"irama", flip:true,
    a:{ id:"Ruang rapi membantu fokus", en:"A tidy space helps you focus" },
    b:{ id:"Ruang apa adanya tidak mengganggu", en:"A space as-is does not distract" } },
  { id:"w_ir_07", dim:"irama", flip:false,
    a:{ id:"Aturan adalah patokan", en:"Rules are the benchmark" },
    b:{ id:"Aturan adalah panduan", en:"Rules are guidance" } },
  { id:"w_ir_08", dim:"irama", flip:true,
    a:{ id:"Rencana diikuti sampai tuntas", en:"Plans followed through to the end" },
    b:{ id:"Rencana berubah sesuai situasi", en:"Plans shift to suit the situation" } },
  { id:"w_ir_09", dim:"irama", flip:false,
    a:{ id:"Perubahan mendadak mengusik", en:"A sudden change unsettles" },
    b:{ id:"Perubahan mendadak menyegarkan", en:"A sudden change refreshes" } },
  { id:"w_ir_10", dim:"irama", flip:true,
    a:{ id:"Satu hal sampai tuntas", en:"One thing until it is done" },
    b:{ id:"Beberapa hal berjalan bersama", en:"Several things running together" } },
  { id:"w_ir_11", dim:"irama", flip:false,
    a:{ id:"Datang lebih awal terasa tenang", en:"Arriving early feels calm" },
    b:{ id:"Datang pas waktu terasa cukup", en:"Arriving on time feels enough" } },
  { id:"w_ir_12", dim:"irama", flip:true,
    a:{ id:"Puas ketika sudah diselesaikan", en:"Satisfied once it has been completed" },
    b:{ id:"Puas mengeksplorasi kemungkinan", en:"Satisfied while exploring options" } }

];



/* ═══════════════════════════════════════════════════════════════════
   URUTAN TAMPIL
   Dimensi diselang-seling. Dua belas pasang sedimensi berturut-turut
   memudahkan peserta menebak apa yang diukur, dan begitu ia menebak,
   ia mulai menjawab sesuai tebakannya.
   ═══════════════════════════════════════════════════════════════════ */
function lakonUrutkanItemWatak(items) {
  var byDim = { arus: [], pandang: [], timbang: [], irama: [] }, i;
  for (i = 0; i < items.length; i++) byDim[items[i].dim].push(items[i]);

  var order = ["pandang", "arus", "timbang", "irama"], out = [], putaran = 0;
  while (out.length < items.length && putaran < 50) {
    for (i = 0; i < order.length; i++) {
      var pool = byDim[order[i]];
      if (pool[putaran]) out.push(pool[putaran]);
    }
    putaran++;
  }
  return out;
}


/* ═══════════════════════════════════════════════════════════════════
   PEMERIKSAAN MANDIRI
   Jalankan setiap kali bank item disunting. Keempat kaidah yang bisa
   diperiksa mesin diperiksa di sini; dua sisanya (kata kerja sama,
   tidak menyebut kelemahan) hanya bisa dinilai manusia.
   ═══════════════════════════════════════════════════════════════════ */
function lakonPeriksaBankWatak(items) {
  var stat = {}, ids = {}, masalah = [], pasangan = {}, i, it;

  for (i = 0; i < items.length; i++) {
    it = items[i];

    if (ids[it.id]) masalah.push("id ganda: " + it.id);
    ids[it.id] = true;

    if (!it.a || !it.a.id || !it.a.en) { masalah.push(it.id + " sisi A tidak lengkap"); continue; }
    if (!it.b || !it.b.id || !it.b.en) { masalah.push(it.id + " sisi B tidak lengkap"); continue; }

    if (!stat[it.dim]) stat[it.dim] = { total: 0, kiriA: 0, kiriB: 0 };
    stat[it.dim].total++;
    if (it.flip) stat[it.dim].kiriB++; else stat[it.dim].kiriA++;

    /* Kaidah 3: sisi yang lebih panjang terlihat lebih dipikirkan,
       dan itu menarik pilihan tanpa alasan. */
    var selisih = Math.abs(it.a.id.length - it.b.id.length);
    if (selisih > 12) masalah.push(it.id + " panjang kedua sisi timpang, selisih " + selisih + " karakter");

    /* Kaidah 4: pendek. */
    [["A", it.a.id], ["B", it.b.id]].forEach(function (s) {
      var n = s[1].trim().split(/\s+/).length;
      if (n > 8) masalah.push(it.id + " sisi " + s[0] + " terlalu panjang, " + n + " kata");
    });

    if (it.pasangan) (pasangan[it.pasangan] = pasangan[it.pasangan] || []).push(it.id);
  }

  for (var d in stat) {
    if (!stat.hasOwnProperty(d)) continue;
    if (stat[d].total !== 12) masalah.push(d + " punya " + stat[d].total + " pasang, seharusnya 12");
    /* Kaidah 5: posisi kutub diselang, supaya kecenderungan memilih sisi
       kiri tidak menumpuk pada satu kutub. */
    if (Math.abs(stat[d].kiriA - stat[d].kiriB) > 2)
      masalah.push(d + " posisi timpang: A di kiri " + stat[d].kiriA + "x, B di kiri " + stat[d].kiriB + "x");
  }

  var jml = 0;
  for (var k in pasangan) {
    if (!pasangan.hasOwnProperty(k)) continue;
    jml++;
    if (pasangan[k].length !== 2)
      masalah.push("pasangan konsistensi '" + k + "' berisi " + pasangan[k].length + " item, seharusnya 2");
  }
  if (jml < 1) masalah.push("tidak ada pasangan konsistensi; kualitas respons kehilangan satu penanda");

  return {
    total: items.length, perDimensi: stat, pasangan: pasangan,
    masalah: masalah, lolos: masalah.length === 0
  };
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LAKON_ITEMS_WATAK: LAKON_ITEMS_WATAK,
    LAKON_SKALA_WATAK: LAKON_SKALA_WATAK,
    lakonUrutkanItemWatak: lakonUrutkanItemWatak,
    lakonPeriksaBankWatak: lakonPeriksaBankWatak
  };
}
