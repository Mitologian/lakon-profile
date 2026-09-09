/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — BANK ITEM PICK-2 & VALIDITY  v3
   10 item Pick-2 + 2 attention check

   ── PERUBAHAN FUNGSI PICK-2 ─────────────────────────────────────────────
   Pick-2 TIDAK LAGI masuk skor utama. Dulu ia diberi bobot 60% yang dalam
   praktik berjalan 25%, dan itulah sumber kontaminasi ipsatif (korelasi
   rata-rata antar enam skor -0,19, praktis identik dengan -0,20 untuk
   instrumen ipsatif murni, yang membuatnya tidak sah dibandingkan antar
   orang dan bermasalah untuk penggunaan B2B).

   Fungsinya sekarang dua saja:
     a. TIE-BREAKER  saat skor Likert #1 dan #2 berjarak di bawah 4 poin
     b. INDEKS KONSISTENSI  antara pilihan spontan dan penilaian diri
   Sebagai bonus, formatnya memecah 48 item Likert berturut-turut sehingga
   peserta tidak jatuh ke straight-lining.

   ── PERBAIKAN BIAS OPSI ─────────────────────────────────────────────────
   Pada 43 responden lama, share pilihan timpang:
     Karsa 21,5% · Bakti 20,5% · Tata 17,4% · Yasa 15,0% · Karya 13,1% · Nalar 12,6%
   Penyebabnya bahasa opsi, bukan minat peserta:
     - Opsi Karsa memakai kata berstatus: "target ambisius", "podium",
       "kantor eksekutif". Semua dihapus.
     - Opsi Nalar terdengar sempit dan akademis: "artikel ilmiah",
       "laboratorium". Diperluas jadi rasa ingin tahu umum.
     - Opsi Yasa berisiko terbaca sebagai kerja kasar. Dirumuskan lewat
       keterampilan dan hasil.
     - Dibuang: "Menghadiri seminar bisnis atau networking" (mengandaikan
       akses yang tidak dimiliki peserta di daerah).
   Semua opsi kini berupa deskripsi kegiatan dengan panjang setara.

   ── KONTRAK DATA ────────────────────────────────────────────────────────
   Pick-2   : { id, id_q, en_q, opts:[{ t, id, en }] }   t = Kelompok
   Validity : { id, expected, id_s, en_s, sisip }
              expected mengacu skala Likert Minat (5 = Sangat Setuju)
              sisip = posisi penyisipan di dalam alur item Minat
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_ITEMS_PICK2 = [

  { id:"p2_01",
    id_q:"Pilih 2 kegiatan yang paling ingin kamu lakukan:",
    en_q:"Pick 2 activities you'd most want to do:",
    opts:[
      { t:"Yasa",  id:"Memperbaiki atau merakit sesuatu sampai berfungsi", en:"Repairing or assembling something until it works" },
      { t:"Nalar", id:"Menelusuri sebuah pertanyaan sampai ketemu jawabannya", en:"Chasing a question until you find the answer" },
      { t:"Karya", id:"Membuat sesuatu yang bentuknya kamu tentukan sendiri", en:"Making something whose shape you decide yourself" },
      { t:"Bakti", id:"Menemani seseorang yang sedang butuh bantuan", en:"Staying with someone who needs help" },
      { t:"Karsa", id:"Mengajak orang bergerak untuk satu tujuan bersama", en:"Getting people moving toward a shared goal" },
      { t:"Tata",  id:"Merapikan sesuatu yang berantakan jadi tertata", en:"Turning something disordered into something arranged" }
    ]},

  { id:"p2_02",
    id_q:"Pilih 2 hal yang paling sering kamu lakukan tanpa disuruh:",
    en_q:"Pick 2 things you most often do without being asked:",
    opts:[
      { t:"Yasa",  id:"Mengotak-atik barang di sekitarmu", en:"Tinkering with things around you" },
      { t:"Nalar", id:"Mencari tahu hal yang bikin penasaran", en:"Looking up whatever makes you curious" },
      { t:"Karya", id:"Menggambar, menulis, atau membuat sesuatu", en:"Drawing, writing, or making something" },
      { t:"Bakti", id:"Menanyakan kabar orang yang sedang susah", en:"Checking in on someone having a hard time" },
      { t:"Karsa", id:"Mengambil alih kalau tidak ada yang memulai", en:"Stepping in when nobody else starts" },
      { t:"Tata",  id:"Membuat catatan atau daftar supaya tidak lupa", en:"Making notes or lists so nothing slips" }
    ]},

  { id:"p2_03",
    id_q:"Pilih 2 peran yang paling mudah kamu bayangkan dirimu di dalamnya:",
    en_q:"Pick 2 roles you can most easily picture yourself in:",
    opts:[
      { t:"Yasa",  id:"Orang yang ahli membuat dan memperbaiki", en:"The one skilled at making and fixing" },
      { t:"Nalar", id:"Orang yang menyelidiki dan menjelaskan", en:"The one who investigates and explains" },
      { t:"Karya", id:"Orang yang merancang dan mencipta", en:"The one who designs and creates" },
      { t:"Bakti", id:"Orang yang mendampingi dan membimbing", en:"The one who accompanies and guides" },
      { t:"Karsa", id:"Orang yang memimpin dan membuka jalan", en:"The one who leads and opens the way" },
      { t:"Tata",  id:"Orang yang menata dan menjaga agar tertib", en:"The one who orders things and keeps them so" }
    ]},

  { id:"p2_04",
    id_q:"Pilih 2 suasana tempat kerja yang paling cocok denganmu:",
    en_q:"Pick 2 work settings that suit you best:",
    opts:[
      { t:"Yasa",  id:"Tempat dengan peralatan dan hasil kerja yang kelihatan", en:"A place with equipment and visible output" },
      { t:"Nalar", id:"Tempat tenang untuk menelaah dan menguji", en:"A quiet place for examining and testing" },
      { t:"Karya", id:"Tempat yang membebaskan kamu mencoba bentuk baru", en:"A place that frees you to try new forms" },
      { t:"Bakti", id:"Tempat yang selalu ada orang untuk ditemui", en:"A place where there are always people to meet" },
      { t:"Karsa", id:"Tempat yang cepat berubah dan penuh peluang", en:"A place that shifts fast and is full of openings" },
      { t:"Tata",  id:"Tempat yang tertata dengan alur kerja yang jelas", en:"A place that is orderly with a clear workflow" }
    ]},

  { id:"p2_05",
    id_q:"Pilih 2 hal yang paling memuaskan saat kamu selesai bekerja:",
    en_q:"Pick 2 things that feel most satisfying when you finish work:",
    opts:[
      { t:"Yasa",  id:"Ada hasil nyata yang bisa dipegang", en:"There's a real result you can hold" },
      { t:"Nalar", id:"Ada yang jadi lebih jelas dari sebelumnya", en:"Something is clearer than it was before" },
      { t:"Karya", id:"Ada sesuatu yang belum pernah ada sebelumnya", en:"Something exists that didn't exist before" },
      { t:"Bakti", id:"Ada orang yang terbantu", en:"Someone has been helped" },
      { t:"Karsa", id:"Ada target yang tercapai", en:"A target has been reached" },
      { t:"Tata",  id:"Ada yang berjalan tanpa satu pun kesalahan", en:"Something ran without a single error" }
    ]},

  { id:"p2_06",
    id_q:"Pilih 2 hal yang paling ingin kamu pelajari lebih dalam:",
    en_q:"Pick 2 things you'd most want to learn more deeply:",
    opts:[
      { t:"Yasa",  id:"Cara membuat dan memperbaiki sesuatu", en:"How to build and repair things" },
      { t:"Nalar", id:"Cara sesuatu bekerja dan mengapa begitu", en:"How things work and why they work that way" },
      { t:"Karya", id:"Cara menyampaikan gagasan lewat bentuk dan cerita", en:"How to convey ideas through form and story" },
      { t:"Bakti", id:"Cara memahami dan membantu orang", en:"How to understand and help people" },
      { t:"Karsa", id:"Cara menggerakkan orang dan membangun usaha", en:"How to move people and build a venture" },
      { t:"Tata",  id:"Cara menyusun sistem dan mengelola sumber daya", en:"How to design systems and manage resources" }
    ]},

  { id:"p2_07",
    id_q:"Pilih 2 hal yang paling sering orang minta bantuanmu:",
    en_q:"Pick 2 things people most often ask your help with:",
    opts:[
      { t:"Yasa",  id:"Membetulkan sesuatu yang rusak", en:"Fixing something that has broken" },
      { t:"Nalar", id:"Menjelaskan hal yang rumit", en:"Explaining something complicated" },
      { t:"Karya", id:"Membuat sesuatu jadi lebih bagus", en:"Making something look or feel better" },
      { t:"Bakti", id:"Mendengarkan saat mereka sedang berat", en:"Listening when they're carrying something heavy" },
      { t:"Karsa", id:"Mengatur dan memimpin kegiatan", en:"Organising and leading an activity" },
      { t:"Tata",  id:"Merapikan catatan, jadwal, atau hitungan", en:"Tidying records, schedules, or figures" }
    ]},

  { id:"p2_08",
    id_q:"Pilih 2 sifat yang paling sering orang lihat pada dirimu:",
    en_q:"Pick 2 traits people most often see in you:",
    opts:[
      { t:"Yasa",  id:"Terampil", en:"Skilled" },
      { t:"Nalar", id:"Ingin tahu", en:"Curious" },
      { t:"Karya", id:"Imajinatif", en:"Imaginative" },
      { t:"Bakti", id:"Peduli", en:"Caring" },
      { t:"Karsa", id:"Berani", en:"Bold" },
      { t:"Tata",  id:"Teliti", en:"Precise" }
    ]},

  { id:"p2_09",
    id_q:"Pilih 2 proyek yang paling ingin kamu kerjakan:",
    en_q:"Pick 2 projects you'd most want to work on:",
    opts:[
      { t:"Yasa",  id:"Membangun sesuatu dari bahan mentah sampai jadi", en:"Building something from raw material to finished" },
      { t:"Nalar", id:"Mencari sebab dari masalah yang belum terpecahkan", en:"Finding the cause of an unsolved problem" },
      { t:"Karya", id:"Membuat karya yang akan dilihat banyak orang", en:"Making a work that many people will see" },
      { t:"Bakti", id:"Menjalankan program yang membantu satu kelompok orang", en:"Running a programme that helps a group of people" },
      { t:"Karsa", id:"Merintis usaha atau kegiatan baru dari nol", en:"Starting a new venture or effort from zero" },
      { t:"Tata",  id:"Membenahi cara kerja yang selama ini berantakan", en:"Repairing a way of working that has been a mess" }
    ]},

  { id:"p2_10",
    id_q:"Pilih 2 hal yang paling ingin dikatakan orang tentang kamu:",
    en_q:"Pick 2 things you'd most want people to say about you:",
    opts:[
      { t:"Yasa",  id:"Kerjanya selalu jadi dan bisa diandalkan", en:"Their work always gets done and holds up" },
      { t:"Nalar", id:"Dia yang paling paham duduk perkaranya", en:"They understand the matter most deeply" },
      { t:"Karya", id:"Dia selalu punya cara pandang yang segar", en:"They always bring a fresh way of seeing" },
      { t:"Bakti", id:"Dia benar-benar peduli pada orang", en:"They genuinely care about people" },
      { t:"Karsa", id:"Dia yang membuat semuanya bergerak", en:"They're the one who gets things moving" },
      { t:"Tata",  id:"Dia yang membuat semuanya tetap tertib", en:"They're the one who keeps everything in order" }
    ]}

];


/* ═══════════════════════════════════════════════════════════════════
   ATTENTION CHECK
   Disisipkan ke dalam alur item Minat, memakai tampilan Likert yang
   sama persis supaya tidak menonjol. Dua buah, dijauhkan posisinya,
   dan nilai yang diminta berbeda agar tidak bisa dilewati dengan
   satu pola jawaban.

   Hasilnya hanya untuk analis lewat responseQuality(). TIDAK
   ditampilkan ke peserta dan TIDAK memengaruhi skor.
   ═══════════════════════════════════════════════════════════════════ */
var LAKON_ITEMS_VALIDITY = [
  { id:"v_att_01", expected:2, sisip:14,
    id_s:"Untuk pernyataan ini, pilih Tidak Setuju.",
    en_s:"For this statement, choose Disagree." },

  { id:"v_att_02", expected:5, sisip:38,
    id_s:"Untuk pernyataan ini, pilih Sangat Setuju.",
    en_s:"For this statement, choose Strongly Agree." }
];


/* ═══════════════════════════════════════════════════════════════════
   PEMERIKSAAN MANDIRI
   ═══════════════════════════════════════════════════════════════════ */
function lakonPeriksaBankPick2(items, validity) {
  var K = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];
  var masalah = [], ids = {}, tally = {}, i, j, it, seen, o;

  for (i = 0; i < K.length; i++) tally[K[i]] = 0;

  for (i = 0; i < items.length; i++) {
    it = items[i];
    if (ids[it.id]) masalah.push("id ganda: " + it.id);
    ids[it.id] = true;
    if (!it.opts || it.opts.length !== 6) {
      masalah.push(it.id + " punya " + (it.opts ? it.opts.length : 0) + " opsi, seharusnya 6");
      continue;
    }
    seen = {};
    for (j = 0; j < it.opts.length; j++) {
      o = it.opts[j];
      if (K.indexOf(o.t) < 0) masalah.push(it.id + " opsi dengan Kelompok tak dikenal: " + o.t);
      if (seen[o.t]) masalah.push(it.id + " punya dua opsi untuk Kelompok " + o.t);
      seen[o.t] = true;
      tally[o.t]++;
      if (!o.id || !o.en) masalah.push(it.id + " opsi " + o.t + " teksnya kosong");
    }
  }

  for (i = 0; i < K.length; i++) {
    if (tally[K[i]] !== items.length)
      masalah.push(K[i] + " muncul " + tally[K[i]] + " kali, seharusnya " + items.length);
  }

  // panjang teks opsi harus setara; opsi yang jauh lebih panjang lebih
  // sering dipilih semata karena lebih menonjol
  for (i = 0; i < items.length; i++) {
    var len = items[i].opts.map(function (x) { return x.id.length; });
    var spread = Math.max.apply(null, len) - Math.min.apply(null, len);
    if (spread > 28) masalah.push(items[i].id + " panjang opsi timpang, selisih " + spread + " karakter");
  }

  var vIds = {};
  for (i = 0; i < (validity || []).length; i++) {
    if (vIds[validity[i].id]) masalah.push("id validity ganda: " + validity[i].id);
    vIds[validity[i].id] = true;
    if (validity[i].expected < 1 || validity[i].expected > 5)
      masalah.push(validity[i].id + " nilai expected di luar 1-5");
  }
  if ((validity || []).length >= 2 && validity[0].expected === validity[1].expected)
    masalah.push("kedua attention check meminta nilai yang sama; bisa dilewati satu pola jawaban");

  return {
    totalPick2: items.length,
    totalValidity: (validity || []).length,
    sebaranKelompok: tally,
    masalah: masalah,
    lolos: masalah.length === 0
  };
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LAKON_ITEMS_PICK2: LAKON_ITEMS_PICK2,
    LAKON_ITEMS_VALIDITY: LAKON_ITEMS_VALIDITY,
    lakonPeriksaBankPick2: lakonPeriksaBankPick2
  };
}
