/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — BANK ITEM MINAT  v3
   48 item · 8 per Kelompok · format 5 titik · 6 positif + 2 reverse per skala

   Dipakai oleh lakon_scoring.js melalui bank.minat

   KONTRAK DATA
     id       : id unik item
     kelompok : 'Yasa' | 'Nalar' | 'Karya' | 'Bakti' | 'Karsa' | 'Tata'
     reverse  : true bila SETUJU berarti minat RENDAH pada Kelompok itu
     id_s/en_s: bunyi pernyataan

   CARA PENSKORAN
     Sangat Setuju 5 | Setuju 4 | Netral 3 | Tidak Setuju 2 | Sangat Tidak Setuju 1
     Mesin membalik (6 - nilai) bila reverse:true, lalu memetakan ke 0-100
     dan merata-ratakan per Kelompok. Hasilnya NORMATIF, bisa dibandingkan
     antar orang.

   ── ENAM KAIDAH PENULISAN, DIPAKAI DI SETIAP ITEM ───────────────────────

   1. REVERSE DITULIS SEBAGAI PREFERENSI TANDINGAN, BUKAN NEGASI
      "Saya tidak senang bekerja dengan mesin" menambah beban baca dan sering
      salah tafsir. Yang dipakai: pernyataan berlawanan yang wajar diucapkan.

   2. REVERSE TIDAK MENYEBUT KELOMPOK LAIN
      Item reverse hanya menyatakan rendahnya daya tarik domain sasaran.
      Menyebut domain pembanding akan membuat satu item membebani dua skala
      sekaligus, dan itu merusak kemandirian keenam skor.

   3. TIDAK ADA KUTUB YANG TERDENGAR LEBIH MULIA
      Ini penyebab utama Bakti unggul 8,7 poin atas Yasa pada data lama.
      Item Bakti lama berbunyi "Membantu orang lain berkembang adalah salah
      satu hal paling memuaskan", yang hampir semua orang setujui terlepas
      dari minatnya. Setiap skala kini memuat ongkos nyata: waktu, risiko,
      ketelitian, penilaian orang, atau kenyamanan yang dikorbankan.

   4. BEBAS KONOTASI KELAS DAN GENDER
      Yasa dirumuskan lewat keterampilan dan hasil, bukan status pekerjaan.
      Kata "mengasuh" (terkode perempuan) dan penekanan "mesin" (terkode
      laki-laki) diganti rumusan aktivitas yang netral.

   5. BEBAS ASUMSI AKSES
      Tidak ada item yang mengandaikan seminar, kantor, laboratorium, atau
      fasilitas kota besar. Semua kegiatan bisa dibayangkan siswa di daerah.

   6. MINAT, BUKAN KEMAMPUAN
      Holland mengukur ketertarikan. "Saya pandai menganalisis data"
      mengukur keyakinan diri. Semua item berbunyi senang, ingin, tertarik,
      atau rela, tidak pernah bisa atau pandai.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_SKALA_MINAT = {
  id: [
    { v: 5, label: "Sangat Setuju" },
    { v: 4, label: "Setuju" },
    { v: 3, label: "Netral" },
    { v: 2, label: "Tidak Setuju" },
    { v: 1, label: "Sangat Tidak Setuju" }
  ],
  en: [
    { v: 5, label: "Strongly Agree" },
    { v: 4, label: "Agree" },
    { v: 3, label: "Neutral" },
    { v: 2, label: "Disagree" },
    { v: 1, label: "Strongly Disagree" }
  ]
};

var LAKON_ITEMS_MINAT = [

  /* ─────────────────── YASA · Realistic (R) ───────────────────
     Membangun, memperbaiki, keterampilan teknis, hasil yang nyata.
     Dirumuskan lewat keahlian dan hasil, bukan status pekerjaan.   */

  { id:"m_ya_01", kelompok:"Yasa", reverse:false,
    id_s:"Saya senang mengutak-atik alat atau perangkat sampai berfungsi seperti seharusnya.",
    en_s:"I enjoy tinkering with tools or devices until they work as they should." },

  { id:"m_ya_02", kelompok:"Yasa", reverse:false,
    id_s:"Ada kepuasan tersendiri saat melihat hasil kerja yang bisa saya pegang dan saya tunjuk.",
    en_s:"There's a particular satisfaction in seeing work I can hold and point to." },

  { id:"m_ya_03", kelompok:"Yasa", reverse:false,
    id_s:"Saya rela berlatih bertahun-tahun untuk menguasai satu keterampilan teknis sampai mahir.",
    en_s:"I'd willingly practise for years to master one technical skill properly." },

  { id:"m_ya_04", kelompok:"Yasa", reverse:false,
    id_s:"Kalau ada yang rusak di sekitar saya, saya tertarik mencoba memperbaikinya sendiri dulu.",
    en_s:"When something near me breaks, I'm drawn to trying to fix it myself first." },

  { id:"m_ya_05", kelompok:"Yasa", reverse:false,
    id_s:"Saya lebih betah bekerja sambil bergerak daripada menetap di satu tempat seharian.",
    en_s:"I'm more at ease working on the move than staying in one spot all day." },

  { id:"m_ya_06", kelompok:"Yasa", reverse:false,
    id_s:"Saya tertarik memahami cara kerja alat, bangunan, atau benda fisik di sekitar saya.",
    en_s:"I'm curious about how the tools, buildings, and objects around me actually work." },

  { id:"m_ya_07", kelompok:"Yasa", reverse:true,
    id_s:"Kalau boleh memilih, saya menghindari pekerjaan yang menuntut saya berurusan dengan alat dan bahan.",
    en_s:"Given the choice, I'd avoid work that requires handling tools and materials." },

  { id:"m_ya_08", kelompok:"Yasa", reverse:true,
    id_s:"Saya tidak merasa perlu bisa memperbaiki atau merakit sesuatu sendiri.",
    en_s:"I don't feel any need to be able to repair or assemble things myself." },


  /* ─────────────────── NALAR · Investigative (I) ───────────────────
     Menyelidiki, menganalisis, memahami sebab. Ongkosnya: waktu dan
     upaya berpikir yang terus-menerus.                                */

  { id:"m_na_01", kelompok:"Nalar", reverse:false,
    id_s:"Saya rela menghabiskan waktu lama menelusuri satu pertanyaan sampai benar-benar paham.",
    en_s:"I'd willingly spend a long time chasing one question until I truly understand it." },

  { id:"m_na_02", kelompok:"Nalar", reverse:false,
    id_s:"Saya tertarik mencari tahu sebab di balik sesuatu, bukan hanya menerima keterangan yang ada.",
    en_s:"I want to find the reason behind things, not just accept the explanation given." },

  { id:"m_na_03", kelompok:"Nalar", reverse:false,
    id_s:"Membedah masalah rumit sampai ketemu polanya terasa menyenangkan bagi saya.",
    en_s:"Taking a complicated problem apart until the pattern shows is enjoyable to me." },

  { id:"m_na_04", kelompok:"Nalar", reverse:false,
    id_s:"Saya senang membaca atau menonton hal-hal yang menjelaskan bagaimana sesuatu bekerja.",
    en_s:"I enjoy reading or watching things that explain how something works." },

  { id:"m_na_05", kelompok:"Nalar", reverse:false,
    id_s:"Saya menginginkan pekerjaan yang menuntut saya berpikir keras hampir setiap hari.",
    en_s:"I want work that requires hard thinking almost every day." },

  { id:"m_na_06", kelompok:"Nalar", reverse:false,
    id_s:"Saya tertarik menguji apakah sesuatu yang selama ini dianggap benar memang terbukti benar.",
    en_s:"I'm drawn to testing whether something long assumed true actually holds up." },

  { id:"m_na_07", kelompok:"Nalar", reverse:true,
    id_s:"Memahami dasar teori suatu hal bukan sesuatu yang saya kejar.",
    en_s:"Understanding the theory behind something isn't something I go after." },

  { id:"m_na_08", kelompok:"Nalar", reverse:true,
    id_s:"Kegiatan yang penuh menelaah bacaan atau angka terasa melelahkan bagi saya.",
    en_s:"Activities full of poring over text or figures feel draining to me." },


  /* ─────────────────── KARYA · Artistic (A) ───────────────────
     Mencipta, mengekspresikan, kepekaan bentuk. Ongkosnya: hasil kerja
     dinilai lewat selera orang lain.                                   */

  { id:"m_ka_01", kelompok:"Karya", reverse:false,
    id_s:"Saya sering terdorong membuat sesuatu hanya karena ingin melihat hasilnya jadi.",
    en_s:"I'm often driven to make something just to see it come into being." },

  { id:"m_ka_02", kelompok:"Karya", reverse:false,
    id_s:"Saya memperhatikan apakah sesuatu sudah terlihat, terdengar, atau terasa pas.",
    en_s:"I notice whether something looks, sounds, or feels quite right." },

  { id:"m_ka_03", kelompok:"Karya", reverse:false,
    id_s:"Saya ingin ruang untuk mengerjakan sesuatu dengan cara saya sendiri, bukan mengikuti contoh.",
    en_s:"I want room to do things my own way rather than follow an example." },

  { id:"m_ka_04", kelompok:"Karya", reverse:false,
    id_s:"Menyusun kata, gambar, suara, atau gerak menjadi sesuatu yang utuh terasa memuaskan bagi saya.",
    en_s:"Shaping words, images, sound, or movement into a whole is satisfying to me." },

  { id:"m_ka_05", kelompok:"Karya", reverse:false,
    id_s:"Saya siap menerima bahwa hasil kerja saya akan dinilai berdasarkan selera orang lain.",
    en_s:"I'm prepared for my work to be judged by other people's taste." },

  { id:"m_ka_06", kelompok:"Karya", reverse:false,
    id_s:"Saya senang mengubah sesuatu yang biasa menjadi lebih hidup atau lebih berkesan.",
    en_s:"I enjoy turning something ordinary into something more alive or memorable." },

  { id:"m_ka_07", kelompok:"Karya", reverse:true,
    id_s:"Pekerjaan yang menuntut selera dan penilaian keindahan bukan hal yang saya cari.",
    en_s:"Work that calls for taste and judgments about beauty isn't what I look for." },

  { id:"m_ka_08", kelompok:"Karya", reverse:true,
    id_s:"Kebebasan berekspresi bukan hal yang saya pertimbangkan saat memilih pekerjaan.",
    en_s:"Freedom of expression isn't something I weigh when choosing work." },


  /* ─────────────────── BAKTI · Social (S) ───────────────────
     Membimbing, melayani, menumbuhkan orang. Skala yang ongkosnya
     dinaikkan paling banyak, karena versi lama terlalu mudah disetujui
     siapa pun (rata-rata 83,9 dari 100 pada data lama).                */

  { id:"m_ba_01", kelompok:"Bakti", reverse:false,
    id_s:"Saya rela meluangkan waktu berjam-jam mendengarkan orang yang sedang kesulitan.",
    en_s:"I'd willingly give hours to listening to someone who is struggling." },

  { id:"m_ba_02", kelompok:"Bakti", reverse:false,
    id_s:"Saya menginginkan pekerjaan yang sebagian besar waktunya dihabiskan bersama orang lain.",
    en_s:"I want work where most of my time is spent alongside other people." },

  { id:"m_ba_03", kelompok:"Bakti", reverse:false,
    id_s:"Saya tertarik mempelajari cara membimbing orang supaya berkembang.",
    en_s:"I'm interested in learning how to guide people so they grow." },

  { id:"m_ba_04", kelompok:"Bakti", reverse:false,
    id_s:"Melihat orang yang saya dampingi maju terasa lebih berharga bagi saya daripada pencapaian saya sendiri.",
    en_s:"Seeing someone I've supported move forward means more to me than my own achievement." },

  { id:"m_ba_05", kelompok:"Bakti", reverse:false,
    id_s:"Saya bersedia menempatkan kebutuhan orang yang saya layani di atas kenyamanan saya sendiri.",
    en_s:"I'm willing to put the needs of those I serve above my own comfort." },

  { id:"m_ba_06", kelompok:"Bakti", reverse:false,
    id_s:"Saya senang berada di tengah orang yang sedang belajar sesuatu yang baru.",
    en_s:"I like being among people who are in the middle of learning something new." },

  { id:"m_ba_07", kelompok:"Bakti", reverse:true,
    id_s:"Pekerjaan yang menuntut saya terus-menerus mengurus kebutuhan orang lain akan menguras saya.",
    en_s:"Work that has me continually tending to other people's needs would drain me." },

  { id:"m_ba_08", kelompok:"Bakti", reverse:true,
    id_s:"Saya lebih menginginkan tanggung jawab yang hasilnya bergantung pada diri saya sendiri.",
    en_s:"I'd rather hold responsibility whose outcome rests on me alone." },


  /* ─────────────────── KARSA · Enterprising (E) ───────────────────
     Memimpin, mempengaruhi, mengejar peluang. Ongkosnya: risiko dan
     tanggung jawab atas hasil orang lain.                              */

  { id:"m_kr_01", kelompok:"Karsa", reverse:false,
    id_s:"Saya tertarik mengambil peran memimpin ketika sebuah kelompok butuh arah.",
    en_s:"I'm drawn to taking the lead when a group needs direction." },

  { id:"m_kr_02", kelompok:"Karsa", reverse:false,
    id_s:"Saya menginginkan pekerjaan yang hasilnya diukur dari target yang berhasil dicapai.",
    en_s:"I want work measured by the targets I manage to hit." },

  { id:"m_kr_03", kelompok:"Karsa", reverse:false,
    id_s:"Meyakinkan orang untuk ikut pada suatu gagasan terasa menantang dan menyenangkan bagi saya.",
    en_s:"Persuading people to join an idea feels challenging and enjoyable to me." },

  { id:"m_kr_04", kelompok:"Karsa", reverse:false,
    id_s:"Saya bersedia menanggung risiko demi peluang yang menurut saya layak dikejar.",
    en_s:"I'm willing to carry risk for an opportunity I judge worth chasing." },

  { id:"m_kr_05", kelompok:"Karsa", reverse:false,
    id_s:"Saya tertarik memulai sesuatu dari nol meski belum jelas hasilnya.",
    en_s:"I'm drawn to starting something from nothing even when the outcome is unclear." },

  { id:"m_kr_06", kelompok:"Karsa", reverse:false,
    id_s:"Saya ingin berada di posisi yang keputusannya berpengaruh pada banyak orang.",
    en_s:"I want to be in a position where my decisions affect many people." },

  { id:"m_kr_07", kelompok:"Karsa", reverse:true,
    id_s:"Menanggung tanggung jawab atas hasil kerja orang lain bukan sesuatu yang saya inginkan.",
    en_s:"Carrying responsibility for other people's results isn't something I want." },

  { id:"m_kr_08", kelompok:"Karsa", reverse:true,
    id_s:"Saya lebih menginginkan pekerjaan yang tidak menuntut saya bersaing atau mengejar target.",
    en_s:"I'd rather have work that doesn't require me to compete or chase targets." },


  /* ─────────────────── TATA · Conventional (C) ───────────────────
     Menata, memastikan, menjaga sistem. Dirumuskan sebagai keahlian
     bernilai, bukan pekerjaan rutin kelas dua. Ongkosnya: ketelitian
     yang tidak boleh kendur.                                           */

  { id:"m_ta_01", kelompok:"Tata", reverse:false,
    id_s:"Saya senang menata sesuatu yang berantakan menjadi rapi dan mudah ditelusuri.",
    en_s:"I enjoy turning something disordered into something tidy and easy to trace." },

  { id:"m_ta_02", kelompok:"Tata", reverse:false,
    id_s:"Saya tertarik pada pekerjaan yang menuntut ketelitian tinggi dan tidak memberi ruang keliru.",
    en_s:"I'm drawn to work that demands high precision and leaves no room for error." },

  { id:"m_ta_03", kelompok:"Tata", reverse:false,
    id_s:"Membuat catatan, daftar, atau cara penyimpanan yang rapi terasa memuaskan bagi saya.",
    en_s:"Building neat records, lists, or filing systems is satisfying to me." },

  { id:"m_ta_04", kelompok:"Tata", reverse:false,
    id_s:"Saya menginginkan pekerjaan dengan standar dan prosedur yang jelas untuk dijalankan.",
    en_s:"I want work with clear standards and procedures to follow." },

  { id:"m_ta_05", kelompok:"Tata", reverse:false,
    id_s:"Saya senang memastikan angka, dokumen, atau data tersusun benar sampai ke bagian terkecilnya.",
    en_s:"I like making sure figures, documents, or data are correct down to the smallest part." },

  { id:"m_ta_06", kelompok:"Tata", reverse:false,
    id_s:"Saya tertarik menjaga agar sesuatu berjalan tertib hari demi hari tanpa ada yang terlewat.",
    en_s:"I'm drawn to keeping things running in order day after day with nothing missed." },

  { id:"m_ta_07", kelompok:"Tata", reverse:true,
    id_s:"Pekerjaan yang banyak berurusan dengan pencatatan dan prosedur terasa membosankan bagi saya.",
    en_s:"Work that deals heavily in records and procedures feels dull to me." },

  { id:"m_ta_08", kelompok:"Tata", reverse:true,
    id_s:"Saya tidak merasa perlu segala sesuatu tercatat dan tersimpan dengan rapi.",
    en_s:"I don't feel any need for everything to be recorded and stored neatly." }

];


/* ═══════════════════════════════════════════════════════════════════
   URUTAN TAMPIL
   Enam Kelompok diselang-seling, dan item reverse disebar ke bagian
   akhir tiap putaran. Menampilkan 8 item Bakti berturut-turut membuat
   peserta sadar apa yang diukur dan mengundang jawaban seragam.
   ═══════════════════════════════════════════════════════════════════ */
function lakonUrutkanItemMinat(items) {
  var K = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];
  var byK = {}, i, k;
  for (i = 0; i < K.length; i++) byK[K[i]] = [];
  for (i = 0; i < items.length; i++) if (byK[items[i].kelompok]) byK[items[i].kelompok].push(items[i]);

  // dalam tiap Kelompok: positif dulu, reverse belakangan
  for (i = 0; i < K.length; i++) {
    byK[K[i]].sort(function (a, b) { return (a.reverse ? 1 : 0) - (b.reverse ? 1 : 0); });
  }

  var out = [], round = 0, guard = 0;
  while (out.length < items.length && guard++ < 100) {
    for (i = 0; i < K.length; i++) {
      // geser titik mulai tiap putaran supaya urutan Kelompok tidak tetap
      k = K[(i + round) % K.length];
      if (byK[k][round]) out.push(byK[k][round]);
    }
    round++;
  }
  return out;
}


/* ═══════════════════════════════════════════════════════════════════
   PEMERIKSAAN MANDIRI
   Jalankan setiap kali bank item disunting.
   ═══════════════════════════════════════════════════════════════════ */
function lakonPeriksaBankMinat(items) {
  var stat = {}, ids = {}, masalah = [], i, it, k;

  for (i = 0; i < items.length; i++) {
    it = items[i];
    if (ids[it.id]) masalah.push("id ganda: " + it.id);
    ids[it.id] = true;
    if (!stat[it.kelompok]) stat[it.kelompok] = { total: 0, positif: 0, reverse: 0 };
    stat[it.kelompok].total++;
    if (it.reverse) stat[it.kelompok].reverse++; else stat[it.kelompok].positif++;
    if (!it.id_s || !it.en_s) masalah.push("teks kosong: " + it.id);
  }

  for (k in stat) {
    if (!stat.hasOwnProperty(k)) continue;
    if (stat[k].total !== 8) masalah.push(k + " punya " + stat[k].total + " item, seharusnya 8");
    if (stat[k].reverse !== 2) masalah.push(k + " punya " + stat[k].reverse + " item reverse, seharusnya 2");
  }
  if (Object.keys(stat).length !== 6) masalah.push("jumlah Kelompok bukan 6");

  return { total: items.length, perKelompok: stat, masalah: masalah, lolos: masalah.length === 0 };
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LAKON_ITEMS_MINAT: LAKON_ITEMS_MINAT,
    LAKON_SKALA_MINAT: LAKON_SKALA_MINAT,
    lakonUrutkanItemMinat: lakonUrutkanItemMinat,
    lakonPeriksaBankMinat: lakonPeriksaBankMinat
  };
}
