/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — RANTAI PENAFSIRAN ARAH
   Tiga tahap: Bidang → Perpaduan → Bentuk Peran

   LENGKAP — 30 perpaduan berurutan, keenam Kelompok sebagai bidang utama.

   MUAT SETELAH lakon_jurusan.js dan lakon_industri.js, SEBELUM lakon_report.js.

   ═══════════════════════════════════════════════════════════════════════
   KENAPA RANTAI, BUKAN DAFTAR
   ═══════════════════════════════════════════════════════════════════════

   Versi sebelumnya mencocokkan jurusan dari Kelompok #1 saja, lalu Watak
   menjelaskan arah di dalamnya. Kelompok #2 cuma menambah daftar kedua di
   sebelahnya. Itu memperlakukan minat kedua sebagai pelengkap.

   Kenyataannya minat kedua MENGUBAH jenis pekerjaannya, bukan menambah
   pilihan. Nalar dengan nuansa Bakti menghasilkan pengajar. Nalar dengan
   nuansa Tata menghasilkan peneliti pendidikan. Keduanya sama-sama berada
   di dunia pendidikan, dan keduanya pekerjaan yang sama sekali berbeda.

   Maka penafsirannya berantai:

     TAHAP 1  BIDANG        dari Kelompok #1
              Dunia mana yang menarikmu.

     TAHAP 2  PERPADUAN     dari Kelompok #1 × Kelompok #2
              Jenis pekerjaan apa yang muncul dari pertemuan keduanya.
              Ini tahap yang paling berharga dan paling sering hilang di
              alat asesmen lain.

     TAHAP 3  BENTUK PERAN  dari Watak
              Bagaimana pekerjaan itu kamu jalani.

   ═══════════════════════════════════════════════════════════════════════
   URUTAN PASANGAN MENENTUKAN
   ═══════════════════════════════════════════════════════════════════════

   "Nalar|Bakti" TIDAK SAMA dengan "Bakti|Nalar".

     Nalar|Bakti  menelusuri lebih dulu, orangnya kemudian
                  → peneliti pendidikan, peneliti pengguna
     Bakti|Nalar  orangnya lebih dulu, menelusuri kemudian
                  → pengajar yang berbasis bukti, konselor yang metodis

   Karena itu ada 30 pasangan berurutan, bukan 15.

   ═══════════════════════════════════════════════════════════════════════
   KAIDAH PENULISAN
   ═══════════════════════════════════════════════════════════════════════

   1. RANTAI INI MEMBANTU MENAFSIRKAN, BUKAN MENUNJUK SATU JAWABAN.
      Kalimatnya "ini jenis pekerjaan yang muncul dari perpaduanmu", bukan
      "kamu sebaiknya jadi ini". Peserta yang melihat namanya sendiri tidak
      ada di daftar harus tetap bisa memakai polanya.

   2. `bentuk` MENYEBUT NAMA PERAN, BUKAN MENJELASKAN SIFAT.
      Lapis Watak sudah menjelaskan cara bergeraknya. Di sini yang
      dibutuhkan nama peran yang bisa dicari di lowongan kerja.

   3. TIDAK ADA PERAN YANG DIPERINGKAT LEBIH TINGGI DARI YANG LAIN.
      Empat bentuk untuk satu perpaduan adalah empat cara, bukan tangga.

   3b. DUA PERPADUAN DITAMPILKAN SAAT JARAKNYA TIPIS.
      Simulasi uji-ulang menunjukkan Kelompok #1 bertahan 81%, tapi
      PERPADUAN hanya 66%. Artinya sepertiga peserta akan mendapat
      perpaduan berbeda kalau mengulang tes, dan karena rantai ini
      menjadikan tahap 2 sebagai penopang, semua yang di bawahnya ikut
      berubah: bentuk peran, jurusan, industri.

      Penyebabnya jarak skor #2 ke #3 yang sering rapat. Pada 29% peserta
      jaraknya di bawah 5 poin, dan pada jarak sekecil itu urutan #2 dan
      #3 praktis ditentukan derau pengukuran, bukan oleh minat peserta.

      Maka: kalau jaraknya di bawah ambang, DUA perpaduan ditampilkan
      sebagai kandidat setara, sama seperti dua kandidat Watak. Menampilkan
      satu perpaduan seolah pasti adalah presisi palsu, dan presisi palsu
      yang paling cepat merusak kepercayaan saat peserta membandingkannya
      dengan kenyataan.

   4. TIDAK MENYEBUT GAJI, PROSPEK, ATAU TINGKAT PRESTISE.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_PERPADUAN = {

/* ───────────────────────── NALAR sebagai bidang utama ───────────────────
   Menelusuri lebih dulu. Minat kedua menentukan ke arah mana penelusuran
   itu diarahkan.                                                        */

"Nalar|Bakti": {
  label: { id: "Penelusuran yang berujung pada orang",
           en: "Inquiry that ends at people" },
  apa: { id: "Minat menelusuri bertemu minat menumbuhkan orang. Yang muncul adalah pekerjaan yang menggali sebab, lalu memakai temuannya untuk mengubah keadaan seseorang. Kamu tidak berhenti di data, dan juga tidak berhenti di simpati.",
         en: "An interest in tracing meets an interest in growing people. What emerges is work that digs for causes, then uses the finding to change someone's situation. You stop neither at the data nor at sympathy." },
  arah: { id: ["Peneliti pendidikan", "Peneliti pengguna", "Analis kebijakan sosial", "Evaluator program"],
          en: ["Education researcher", "User researcher", "Social policy analyst", "Programme evaluator"] },
  bentuk: {
    Reka:   { id: ["Peneliti dampak sosial", "Perancang program pembelajaran"],
              en: ["Social impact researcher", "Learning programme designer"] },
    Logika: { id: ["Analis kebijakan", "Ilmuwan data sosial"],
              en: ["Policy analyst", "Social data scientist"] },
    Jaga:   { id: ["Koordinator riset lapangan", "Pengelola data program"],
              en: ["Field research coordinator", "Programme data manager"] },
    Guna:   { id: ["Peneliti pengguna terapan", "Analis peningkatan mutu layanan"],
              en: ["Applied user researcher", "Service quality improvement analyst"] } }
},

"Nalar|Tata": {
  label: { id: "Penelusuran yang menghasilkan sistem",
           en: "Inquiry that produces systems" },
  apa: { id: "Minat menelusuri bertemu minat menata. Yang muncul adalah pekerjaan yang menemukan pola lalu mengubahnya jadi cara kerja yang bisa diulang orang lain. Temuannya tidak berhenti jadi laporan.",
         en: "An interest in tracing meets an interest in ordering. What emerges is work that finds a pattern then turns it into a method others can repeat. The finding does not stop at a report." },
  arah: { id: ["Analis data", "Aktuaris", "Analis riset pasar", "Auditor sistem"],
          en: ["Data analyst", "Actuary", "Market research analyst", "Systems auditor"] },
  bentuk: {
    Reka:   { id: ["Analis riset berbasis misi", "Perancang sistem pengetahuan"],
              en: ["Mission-driven research analyst", "Knowledge systems designer"] },
    Logika: { id: ["Ilmuwan data", "Analis kuantitatif"],
              en: ["Data scientist", "Quantitative analyst"] },
    Jaga:   { id: ["Analis penjaminan mutu data", "Auditor internal"],
              en: ["Data quality assurance analyst", "Internal auditor"] },
    Guna:   { id: ["Analis bisnis", "Analis peningkatan proses"],
              en: ["Business analyst", "Process improvement analyst"] } }
},

"Nalar|Yasa": {
  label: { id: "Penelusuran yang berakhir pada benda",
           en: "Inquiry that lands on real things" },
  apa: { id: "Minat menelusuri bertemu minat mengerjakan yang nyata. Yang muncul adalah pekerjaan yang menjawab pertanyaan lalu mewujudkan jawabannya jadi alat, proses, atau produk yang bisa dipegang.",
         en: "An interest in tracing meets an interest in the tangible. What emerges is work that answers a question then turns the answer into a tool, process, or product you can hold." },
  arah: { id: ["Peneliti dan pengembang produk", "Insinyur proses", "Analis laboratorium", "Ahli material"],
          en: ["Product R&D researcher", "Process engineer", "Laboratory analyst", "Materials specialist"] },
  bentuk: {
    Reka:   { id: ["Peneliti teknologi tepat guna", "Pengembang produk berdampak"],
              en: ["Appropriate technology researcher", "Impact product developer"] },
    Logika: { id: ["Insinyur riset dan pengembangan", "Perancang sistem teknis"],
              en: ["R&D engineer", "Technical systems designer"] },
    Jaga:   { id: ["Analis pengendalian mutu", "Peneliti laboratorium terakreditasi"],
              en: ["Quality control analyst", "Accredited lab researcher"] },
    Guna:   { id: ["Insinyur lapangan", "Teknisi pengujian terapan"],
              en: ["Field engineer", "Applied testing technician"] } }
},

"Nalar|Karya": {
  label: { id: "Penelusuran yang harus bisa disampaikan",
           en: "Inquiry that has to be told" },
  apa: { id: "Minat menelusuri bertemu minat mencipta. Yang muncul adalah pekerjaan yang menemukan sesuatu lalu memastikan orang lain benar-benar mengerti. Temuan yang tidak bisa dijelaskan bagimu belum selesai.",
         en: "An interest in tracing meets an interest in making. What emerges is work that finds something then ensures others truly understand it. A finding that cannot be explained is unfinished to you." },
  arah: { id: ["Komunikator sains", "Jurnalis data", "Perancang visualisasi data", "Peneliti konten"],
          en: ["Science communicator", "Data journalist", "Data visualisation designer", "Content researcher"] },
  bentuk: {
    Reka:   { id: ["Penulis sains populer", "Pembuat dokumenter riset"],
              en: ["Popular science writer", "Research documentary maker"] },
    Logika: { id: ["Perancang visualisasi data", "Analis konten strategis"],
              en: ["Data visualisation designer", "Strategic content analyst"] },
    Jaga:   { id: ["Penyunting ilmiah", "Pengelola publikasi riset"],
              en: ["Scientific editor", "Research publication manager"] },
    Guna:   { id: ["Jurnalis data", "Pembuat konten edukatif"],
              en: ["Data journalist", "Educational content creator"] } }
},

"Nalar|Karsa": {
  label: { id: "Penelusuran yang dipakai untuk memutuskan",
           en: "Inquiry used to decide" },
  apa: { id: "Minat menelusuri bertemu dorongan menggerakkan. Yang muncul adalah pekerjaan yang menganalisis lalu ikut menanggung akibat keputusannya. Kamu tidak puas jadi penasihat yang tidak menanggung apa pun.",
         en: "An interest in tracing meets a drive to move things. What emerges is work that analyses then carries the consequences of the decision. Being an adviser who bears nothing does not satisfy you." },
  arah: { id: ["Konsultan strategi", "Analis investasi", "Manajer produk", "Analis intelijen bisnis"],
          en: ["Strategy consultant", "Investment analyst", "Product manager", "Business intelligence analyst"] },
  bentuk: {
    Reka:   { id: ["Konsultan dampak sosial", "Pendiri usaha berbasis riset"],
              en: ["Social impact consultant", "Research-based founder"] },
    Logika: { id: ["Konsultan strategi", "Manajer investasi"],
              en: ["Strategy consultant", "Investment manager"] },
    Jaga:   { id: ["Analis risiko", "Manajer riset dan perencanaan"],
              en: ["Risk analyst", "Research and planning manager"] },
    Guna:   { id: ["Manajer produk", "Analis pertumbuhan"],
              en: ["Product manager", "Growth analyst"] } }
},


/* ───────────────────────── BAKTI sebagai bidang utama ───────────────────
   Orangnya lebih dulu. Minat kedua menentukan lewat apa kamu menemani. */

"Bakti|Nalar": {
  label: { id: "Menemani orang dengan cara yang teruji",
           en: "Accompanying people with tested methods" },
  apa: { id: "Minat menumbuhkan orang bertemu minat menelusuri. Yang muncul adalah pekerjaan mendampingi yang berdiri di atas bukti, bukan di atas niat baik saja. Kamu ingin tahu apakah yang kamu lakukan benar-benar menolong.",
         en: "An interest in growing people meets an interest in tracing. What emerges is accompaniment built on evidence rather than good intentions alone. You want to know whether what you do actually helps." },
  arah: { id: ["Psikolog", "Konselor", "Perancang kurikulum", "Spesialis pengembangan organisasi"],
          en: ["Psychologist", "Counsellor", "Curriculum designer", "Organisational development specialist"] },
  bentuk: {
    Reka:   { id: ["Konselor", "Coach pengembangan diri"],
              en: ["Counsellor", "Personal development coach"] },
    Logika: { id: ["Psikolog asesmen", "Perancang program pengembangan"],
              en: ["Assessment psychologist", "Development programme designer"] },
    Jaga:   { id: ["Pendamping kasus terstruktur", "Pengelola program pendampingan"],
              en: ["Structured caseworker", "Support programme manager"] },
    Guna:   { id: ["Terapis okupasi", "Pendamping intervensi lapangan"],
              en: ["Occupational therapist", "Field intervention practitioner"] } }
},

"Bakti|Karya": {
  label: { id: "Menemani orang lewat cara yang terasa hidup",
           en: "Accompanying people through what feels alive" },
  apa: { id: "Minat menumbuhkan orang bertemu minat mencipta. Yang muncul adalah pekerjaan yang membuat orang berubah lewat pengalaman, bukan lewat penjelasan. Materi yang benar tapi membosankan bagimu belum selesai.",
         en: "An interest in growing people meets an interest in making. What emerges is work that changes people through experience rather than explanation. Material that is correct but dull is unfinished to you." },
  arah: { id: ["Guru", "Fasilitator pelatihan", "Perancang pengalaman belajar", "Terapis seni"],
          en: ["Teacher", "Training facilitator", "Learning experience designer", "Art therapist"] },
  bentuk: {
    Reka:   { id: ["Pendidik", "Fasilitator dan trainer"],
              en: ["Educator", "Facilitator and trainer"] },
    Logika: { id: ["Perancang pengalaman belajar", "Pengembang kurikulum kreatif"],
              en: ["Learning experience designer", "Creative curriculum developer"] },
    Jaga:   { id: ["Guru kelas", "Pengelola program pelatihan"],
              en: ["Classroom teacher", "Training programme manager"] },
    Guna:   { id: ["Pelatih praktik", "Coach dan pendamping langsung"],
              en: ["Hands-on instructor", "Coach and direct mentor"] } }
},

"Bakti|Tata": {
  label: { id: "Menemani orang lewat sistem yang bisa diandalkan",
           en: "Accompanying people through systems that hold" },
  apa: { id: "Minat menumbuhkan orang bertemu minat menata. Yang muncul adalah pekerjaan yang memastikan layanan benar-benar sampai, tidak ada yang jatuh di celah, dan janjinya ditepati.",
         en: "An interest in growing people meets an interest in ordering. What emerges is work ensuring services actually arrive, nobody falls through the gaps, and promises are kept." },
  arah: { id: ["Manajer SDM", "Administrator layanan sosial", "Manajer layanan pelanggan", "Koordinator program"],
          en: ["HR manager", "Social services administrator", "Customer service manager", "Programme coordinator"] },
  bentuk: {
    Reka:   { id: ["Mitra bisnis SDM", "Manajer budaya organisasi"],
              en: ["HR business partner", "Organisational culture manager"] },
    Logika: { id: ["Analis people analytics", "Perancang sistem talenta"],
              en: ["People analytics analyst", "Talent systems designer"] },
    Jaga:   { id: ["Manajer layanan", "Administrator program sosial"],
              en: ["Service manager", "Social programme administrator"] },
    Guna:   { id: ["Koordinator lapangan", "Supervisor layanan frontline"],
              en: ["Field coordinator", "Frontline service supervisor"] } }
},

"Bakti|Karsa": {
  label: { id: "Menemani orang sambil menggerakkan",
           en: "Accompanying people while moving things" },
  apa: { id: "Minat menumbuhkan orang bertemu dorongan menggerakkan. Yang muncul adalah pekerjaan yang membangun sesuatu untuk orang banyak, bukan mendampingi satu per satu. Kamu ingin jangkauannya lebih luas.",
         en: "An interest in growing people meets a drive to move things. What emerges is work that builds something for many rather than accompanying one by one. You want the reach to be wider." },
  arah: { id: ["Direktur program sosial", "Manajer pengembangan komunitas", "Wirausahawan sosial", "Manajer kemitraan"],
          en: ["Social programme director", "Community development manager", "Social entrepreneur", "Partnership manager"] },
  bentuk: {
    Reka:   { id: ["Wirausahawan sosial", "Penggerak gerakan komunitas"],
              en: ["Social entrepreneur", "Community movement builder"] },
    Logika: { id: ["Direktur program", "Manajer strategi lembaga sosial"],
              en: ["Programme director", "Social institution strategy manager"] },
    Jaga:   { id: ["Manajer operasional lembaga", "Pengelola kemitraan program"],
              en: ["Institution operations manager", "Programme partnership manager"] },
    Guna:   { id: ["Manajer penjangkauan", "Koordinator program lapangan"],
              en: ["Outreach manager", "Field programme coordinator"] } }
},

"Bakti|Yasa": {
  label: { id: "Menemani orang lewat tindakan langsung",
           en: "Accompanying people through direct action" },
  apa: { id: "Minat menumbuhkan orang bertemu minat mengerjakan yang nyata. Yang muncul adalah pekerjaan yang menolong lewat tangan, bukan lewat kata: merawat, memperbaiki, memulihkan.",
         en: "An interest in growing people meets an interest in the tangible. What emerges is help given through hands rather than words: tending, repairing, restoring." },
  arah: { id: ["Perawat", "Fisioterapis", "Paramedis", "Instruktur vokasi"],
          en: ["Nurse", "Physiotherapist", "Paramedic", "Vocational instructor"] },
  bentuk: {
    Reka:   { id: ["Perawat paliatif", "Pendamping pemulihan"],
              en: ["Palliative nurse", "Recovery support practitioner"] },
    Logika: { id: ["Spesialis mutu keperawatan", "Perancang program rehabilitasi"],
              en: ["Nursing quality specialist", "Rehabilitation programme designer"] },
    Jaga:   { id: ["Perawat klinis", "Koordinator layanan kesehatan"],
              en: ["Clinical nurse", "Healthcare service coordinator"] },
    Guna:   { id: ["Paramedis", "Fisioterapis dan terapis okupasi"],
              en: ["Paramedic", "Physio and occupational therapist"] } }
}

,

/* ───────────────────────── YASA sebagai bidang utama ────────────────────
   Mengerjakan yang nyata lebih dulu. Minat kedua menentukan untuk apa
   keahlian itu dipakai.                                               */

"Yasa|Nalar": {
  label: { id: "Mengerjakan yang nyata dengan perhitungan",
           en: "Building the real, with calculation behind it" },
  apa: { id: "Minat mengerjakan yang nyata bertemu minat menelusuri. Yang muncul adalah pekerjaan yang membangun sesuatu sekaligus memastikan alasannya benar. Kamu tidak puas kalau sesuatu berjalan tanpa tahu kenapa.",
         en: "An interest in the tangible meets an interest in tracing. What emerges is work that builds something while making sure the reasoning holds. You are not satisfied when something works without knowing why." },
  arah: { id: ["Insinyur sipil", "Insinyur mesin", "Insinyur proses", "Teknisi instrumentasi"],
          en: ["Civil engineer", "Mechanical engineer", "Process engineer", "Instrumentation technician"] },
  bentuk: {
    Reka:   { id: ["Insinyur teknologi tepat guna", "Perancang solusi berkelanjutan"],
              en: ["Appropriate technology engineer", "Sustainable solutions designer"] },
    Logika: { id: ["Insinyur sistem", "Arsitek teknis"],
              en: ["Systems engineer", "Technical architect"] },
    Jaga:   { id: ["Insinyur pemeliharaan", "Pengawas mutu teknis"],
              en: ["Maintenance engineer", "Technical quality inspector"] },
    Guna:   { id: ["Insinyur lapangan", "Teknisi diagnostik senior"],
              en: ["Field engineer", "Senior diagnostic technician"] } }
},

"Yasa|Karya": {
  label: { id: "Mengerjakan yang nyata dengan bentuk yang dipikirkan",
           en: "Building the real, with form considered" },
  apa: { id: "Minat mengerjakan yang nyata bertemu minat mencipta. Yang muncul adalah pekerjaan yang membuat sesuatu berfungsi sekaligus terasa benar bagi yang memakainya. Berfungsi saja belum cukup bagimu.",
         en: "An interest in the tangible meets an interest in making. What emerges is work that makes something function and feel right to whoever uses it. Functioning alone is not enough for you." },
  arah: { id: ["Arsitek", "Desainer produk", "Desainer interior", "Pengrajin dan praktisi keahlian"],
          en: ["Architect", "Product designer", "Interior designer", "Craftsperson and specialist maker"] },
  bentuk: {
    Reka:   { id: ["Arsitek berbasis konteks", "Perancang produk berdampak"],
              en: ["Context-led architect", "Impact product designer"] },
    Logika: { id: ["Perancang sistem produk", "Creative technologist"],
              en: ["Product systems designer", "Creative technologist"] },
    Jaga:   { id: ["Drafter dan pengawas pelaksanaan", "Spesialis produksi presisi"],
              en: ["Drafter and site supervisor", "Precision production specialist"] },
    Guna:   { id: ["Pembuat purwarupa", "Pengrajin dan spesialis pengerjaan"],
              en: ["Prototype maker", "Craftsperson and fabrication specialist"] } }
},

"Yasa|Bakti": {
  label: { id: "Mengerjakan yang nyata untuk menolong orang",
           en: "Building the real to help people" },
  apa: { id: "Minat mengerjakan yang nyata bertemu minat menumbuhkan orang. Yang muncul adalah pekerjaan yang keahliannya langsung menyentuh keadaan seseorang, bukan lewat laporan atau kebijakan.",
         en: "An interest in the tangible meets an interest in growing people. What emerges is work whose skill touches someone's situation directly, not through reports or policy." },
  arah: { id: ["Paramedis", "Instruktur vokasi", "Fisioterapis", "Petugas tanggap darurat"],
          en: ["Paramedic", "Vocational instructor", "Physiotherapist", "Emergency responder"] },
  bentuk: {
    Reka:   { id: ["Pelatih keterampilan komunitas", "Pendamping teknologi warga"],
              en: ["Community skills trainer", "Community technology facilitator"] },
    Logika: { id: ["Perancang program pelatihan teknis", "Spesialis ergonomi"],
              en: ["Technical training programme designer", "Ergonomics specialist"] },
    Jaga:   { id: ["Instruktur vokasi", "Petugas keselamatan kerja"],
              en: ["Vocational instructor", "Occupational safety officer"] },
    Guna:   { id: ["Paramedis", "Teknisi tanggap darurat"],
              en: ["Paramedic", "Emergency response technician"] } }
},

"Yasa|Karsa": {
  label: { id: "Mengerjakan yang nyata lalu menggerakkannya",
           en: "Building the real, then setting it moving" },
  apa: { id: "Minat mengerjakan yang nyata bertemu dorongan menggerakkan. Yang muncul adalah pekerjaan yang membangun sesuatu lalu ikut menentukan apakah ia jalan sebagai usaha, bukan berhenti sebagai hasil kerja.",
         en: "An interest in the tangible meets a drive to move things. What emerges is work that builds something then helps decide whether it runs as a venture, rather than stopping at output." },
  arah: { id: ["Manajer proyek", "Manajer operasional pabrik", "Kontraktor", "Manajer pengembangan properti"],
          en: ["Project manager", "Plant operations manager", "Contractor", "Property development manager"] },
  bentuk: {
    Reka:   { id: ["Pendiri usaha berbasis keahlian", "Pengembang proyek berdampak"],
              en: ["Craft-based founder", "Impact project developer"] },
    Logika: { id: ["Manajer teknik", "Manajer pengembangan proyek"],
              en: ["Engineering manager", "Project development manager"] },
    Jaga:   { id: ["Manajer proyek konstruksi", "Manajer operasional"],
              en: ["Construction project manager", "Operations manager"] },
    Guna:   { id: ["Manajer operasional teknis", "Kontraktor pelaksana"],
              en: ["Technical operations manager", "Executing contractor"] } }
},

"Yasa|Tata": {
  label: { id: "Mengerjakan yang nyata dengan standar yang dijaga",
           en: "Building the real, with standards held" },
  apa: { id: "Minat mengerjakan yang nyata bertemu minat menata. Yang muncul adalah pekerjaan yang memastikan hasilnya sama baiknya setiap kali, dan bisa dipercaya tanpa diperiksa ulang.",
         en: "An interest in the tangible meets an interest in ordering. What emerges is work ensuring the result is equally good every time, and can be trusted without rechecking." },
  arah: { id: ["Manajer mutu", "Insinyur pemeliharaan", "Manajer fasilitas", "Petugas sertifikasi teknis"],
          en: ["Quality manager", "Maintenance engineer", "Facility manager", "Technical certification officer"] },
  bentuk: {
    Reka:   { id: ["Spesialis mutu berbasis keselamatan", "Perancang standar kerja"],
              en: ["Safety-led quality specialist", "Work standards designer"] },
    Logika: { id: ["Insinyur proses dan mutu", "Perancang sistem pemeliharaan"],
              en: ["Process and quality engineer", "Maintenance systems designer"] },
    Jaga:   { id: ["Manajer penjaminan mutu", "Manajer fasilitas dan aset"],
              en: ["Quality assurance manager", "Facility and asset manager"] },
    Guna:   { id: ["Supervisor pemeliharaan", "Inspektur lapangan"],
              en: ["Maintenance supervisor", "Field inspector"] } }
},


/* ───────────────────────── KARYA sebagai bidang utama ───────────────────
   Mencipta lebih dulu. Minat kedua menentukan untuk siapa dan lewat apa. */

"Karya|Bakti": {
  label: { id: "Mencipta untuk menggerakkan orang",
           en: "Making in order to move people" },
  apa: { id: "Minat mencipta bertemu minat menumbuhkan orang. Yang muncul adalah pekerjaan yang membuat sesuatu agar orang merasakan, memahami, atau berubah. Karya yang tidak mengenai siapa pun bagimu belum selesai.",
         en: "An interest in making meets an interest in growing people. What emerges is work made so people feel, understand, or change. Work that lands on nobody is unfinished to you." },
  arah: { id: ["Pengarah kreatif merek", "Perancang pengalaman belajar", "Pembuat film dokumenter", "Fasilitator kreatif"],
          en: ["Brand creative director", "Learning experience designer", "Documentary maker", "Creative facilitator"] },
  bentuk: {
    Reka:   { id: ["Brand storyteller", "Pembuat film dokumenter"],
              en: ["Brand storyteller", "Documentary maker"] },
    Logika: { id: ["Perancang strategi konten", "Perancang pengalaman"],
              en: ["Content strategy designer", "Experience designer"] },
    Jaga:   { id: ["Manajer komunikasi", "Produser konten edukatif"],
              en: ["Communications manager", "Educational content producer"] },
    Guna:   { id: ["Fasilitator dan pembawa acara", "Pembuat konten dan aktivasi"],
              en: ["Facilitator and host", "Content creator and activator"] } }
},

"Karya|Nalar": {
  label: { id: "Mencipta dengan alasan yang bisa diuji",
           en: "Making with reasoning that can be tested" },
  apa: { id: "Minat mencipta bertemu minat menelusuri. Yang muncul adalah pekerjaan yang merancang sesuatu sekaligus bisa menjelaskan kenapa rancangan itu bekerja. Selera saja tidak cukup bagimu.",
         en: "An interest in making meets an interest in tracing. What emerges is work that designs something and can explain why the design works. Taste alone is not enough for you." },
  arah: { id: ["Desainer produk digital", "Peneliti pengguna", "Design systems lead", "Perancang visualisasi"],
          en: ["Digital product designer", "User researcher", "Design systems lead", "Visualisation designer"] },
  bentuk: {
    Reka:   { id: ["Peneliti pengguna", "Perancang produk berbasis empati"],
              en: ["User researcher", "Empathy-led product designer"] },
    Logika: { id: ["Design systems lead", "Perancang produk digital"],
              en: ["Design systems lead", "Digital product designer"] },
    Jaga:   { id: ["Manajer panduan merek", "Perancang antarmuka presisi"],
              en: ["Brand guidelines manager", "Precision interface designer"] },
    Guna:   { id: ["Desainer produk iteratif", "Perancang purwarupa cepat"],
              en: ["Iterative product designer", "Rapid prototype designer"] } }
},

"Karya|Karsa": {
  label: { id: "Mencipta lalu membawanya ke pasar",
           en: "Making, then carrying it to market" },
  apa: { id: "Minat mencipta bertemu dorongan menggerakkan. Yang muncul adalah pekerjaan yang tidak berhenti di karya, melainkan ikut memastikan karya itu sampai, dibeli, dan bertahan sebagai usaha.",
         en: "An interest in making meets a drive to move things. What emerges is work that does not stop at the piece but ensures it arrives, sells, and survives as a venture." },
  arah: { id: ["Pengarah kreatif", "Manajer merek", "Pendiri studio kreatif", "Produser"],
          en: ["Creative director", "Brand manager", "Creative studio founder", "Producer"] },
  bentuk: {
    Reka:   { id: ["Pendiri studio berbasis misi", "Pengarah kreatif kampanye"],
              en: ["Mission-led studio founder", "Campaign creative director"] },
    Logika: { id: ["Creative strategist", "Manajer merek"],
              en: ["Creative strategist", "Brand manager"] },
    Jaga:   { id: ["Manajer produksi kreatif", "Manajer akun agensi"],
              en: ["Creative production manager", "Agency account manager"] },
    Guna:   { id: ["Brand activator", "Produser konten dan acara"],
              en: ["Brand activator", "Content and event producer"] } }
},

"Karya|Tata": {
  label: { id: "Mencipta dengan aturan main yang konsisten",
           en: "Making within rules that hold" },
  apa: { id: "Minat mencipta bertemu minat menata. Yang muncul adalah pekerjaan yang menjaga karya tetap konsisten di banyak tempat sekaligus, tanpa kehilangan mutunya.",
         en: "An interest in making meets an interest in ordering. What emerges is work keeping output consistent across many places at once, without losing quality." },
  arah: { id: ["Art director", "Manajer panduan merek", "Manajer produksi kreatif", "Desainer grafis senior"],
          en: ["Art director", "Brand guidelines manager", "Creative production manager", "Senior graphic designer"] },
  bentuk: {
    Reka:   { id: ["Penjaga identitas merek", "Perancang panduan yang manusiawi"],
              en: ["Brand identity guardian", "Human-centred guidelines designer"] },
    Logika: { id: ["Design systems lead", "Manajer sistem merek"],
              en: ["Design systems lead", "Brand systems manager"] },
    Jaga:   { id: ["Art director", "Manajer produksi dan mutu kreatif"],
              en: ["Art director", "Creative production and quality manager"] },
    Guna:   { id: ["Desainer produksi", "Spesialis materi komunikasi"],
              en: ["Production designer", "Communication materials specialist"] } }
},

"Karya|Yasa": {
  label: { id: "Mencipta yang bisa dipegang",
           en: "Making what can be held" },
  apa: { id: "Minat mencipta bertemu minat mengerjakan yang nyata. Yang muncul adalah pekerjaan yang rancangannya harus benar-benar bisa dibuat, bukan berhenti di gambar.",
         en: "An interest in making meets an interest in the tangible. What emerges is work whose design must actually be buildable, not stop at a drawing." },
  arah: { id: ["Desainer produk", "Kriyawan", "Desainer interior", "Perancang kemasan"],
          en: ["Product designer", "Craft practitioner", "Interior designer", "Packaging designer"] },
  bentuk: {
    Reka:   { id: ["Kriyawan berbasis tradisi", "Perancang produk bermakna"],
              en: ["Tradition-led craft practitioner", "Meaningful product designer"] },
    Logika: { id: ["Perancang produk industri", "Spesialis material dan proses"],
              en: ["Industrial product designer", "Materials and process specialist"] },
    Jaga:   { id: ["Desainer produksi", "Pengawas mutu kriya"],
              en: ["Production designer", "Craft quality supervisor"] },
    Guna:   { id: ["Pembuat purwarupa", "Kriyawan dan fabrikator"],
              en: ["Prototype maker", "Craft maker and fabricator"] } }
},


/* ───────────────────────── KARSA sebagai bidang utama ───────────────────
   Menggerakkan lebih dulu. Minat kedua menentukan apa yang digerakkan. */

"Karsa|Nalar": {
  label: { id: "Menggerakkan berdasarkan hitungan",
           en: "Moving things on the strength of the numbers" },
  apa: { id: "Dorongan menggerakkan bertemu minat menelusuri. Yang muncul adalah pekerjaan yang mengambil keputusan besar dengan dasar yang bisa dipertahankan, bukan dengan keberanian saja.",
         en: "A drive to move things meets an interest in tracing. What emerges is work making large decisions on grounds that can be defended, not on nerve alone." },
  arah: { id: ["Konsultan strategi", "Manajer investasi", "Direktur strategi", "Manajer produk"],
          en: ["Strategy consultant", "Investment manager", "Strategy director", "Product manager"] },
  bentuk: {
    Reka:   { id: ["Konsultan strategi berbasis misi", "Pendiri usaha berbasis riset"],
              en: ["Mission-led strategy consultant", "Research-based founder"] },
    Logika: { id: ["Konsultan manajemen", "Direktur strategi"],
              en: ["Management consultant", "Strategy director"] },
    Jaga:   { id: ["Manajer perencanaan korporat", "Manajer risiko bisnis"],
              en: ["Corporate planning manager", "Business risk manager"] },
    Guna:   { id: ["Manajer produk", "Manajer pertumbuhan"],
              en: ["Product manager", "Growth manager"] } }
},

"Karsa|Bakti": {
  label: { id: "Menggerakkan lewat orang",
           en: "Moving things through people" },
  apa: { id: "Dorongan menggerakkan bertemu minat menumbuhkan orang. Yang muncul adalah pekerjaan yang hasilnya bergantung pada kepercayaan yang kamu bangun, bukan pada wewenang jabatanmu.",
         en: "A drive to move things meets an interest in growing people. What emerges is work whose results rest on the trust you build rather than the authority of your title." },
  arah: { id: ["Manajer penjualan", "Kepala SDM", "Manajer kemitraan", "Direktur program sosial"],
          en: ["Sales manager", "Head of people", "Partnership manager", "Social programme director"] },
  bentuk: {
    Reka:   { id: ["Wirausahawan sosial", "Pemimpin berbasis budaya organisasi"],
              en: ["Social entrepreneur", "Culture-led leader"] },
    Logika: { id: ["Kepala SDM", "Konsultan pengembangan organisasi"],
              en: ["Head of people", "Organisational development consultant"] },
    Jaga:   { id: ["Manajer hubungan industrial", "Kepala cabang"],
              en: ["Industrial relations manager", "Branch head"] },
    Guna:   { id: ["Manajer pengembangan bisnis", "Key account manager"],
              en: ["Business development manager", "Key account manager"] } }
},

"Karsa|Karya": {
  label: { id: "Menggerakkan lewat cerita",
           en: "Moving things through story" },
  apa: { id: "Dorongan menggerakkan bertemu minat mencipta. Yang muncul adalah pekerjaan yang menarik orang bukan dengan angka melainkan dengan gambaran yang membuat mereka ingin ikut.",
         en: "A drive to move things meets an interest in making. What emerges is work that draws people not with numbers but with a picture that makes them want to join." },
  arah: { id: ["Kepala pemasaran", "Pendiri usaha", "Manajer merek", "Pembicara dan penggerak gagasan"],
          en: ["Head of marketing", "Founder", "Brand manager", "Speaker and movement builder"] },
  bentuk: {
    Reka:   { id: ["Pendiri berbasis misi", "Pembicara dan penggerak gagasan"],
              en: ["Mission-led founder", "Speaker and movement builder"] },
    Logika: { id: ["Chief marketing officer", "Creative strategist"],
              en: ["Chief marketing officer", "Creative strategist"] },
    Jaga:   { id: ["Manajer merek", "Manajer komunikasi korporat"],
              en: ["Brand manager", "Corporate communications manager"] },
    Guna:   { id: ["Manajer aktivasi merek", "Manajer pemasaran digital"],
              en: ["Brand activation manager", "Digital marketing manager"] } }
},

"Karsa|Tata": {
  label: { id: "Menggerakkan dengan mesin yang rapi",
           en: "Moving things with a clean machine behind it" },
  apa: { id: "Dorongan menggerakkan bertemu minat menata. Yang muncul adalah pekerjaan yang tidak hanya menetapkan arah, melainkan juga membangun sistem yang membuat arah itu tercapai berulang kali.",
         en: "A drive to move things meets an interest in ordering. What emerges is work that not only sets direction but builds the system that reaches it repeatedly." },
  arah: { id: ["Direktur operasional", "Manajer umum", "Manajer strategi penjualan", "Kepala cabang"],
          en: ["Operations director", "General manager", "Sales strategy manager", "Branch head"] },
  bentuk: {
    Reka:   { id: ["Pembangun institusi bermisi", "Direktur program lembaga"],
              en: ["Mission institution builder", "Institutional programme director"] },
    Logika: { id: ["Chief operating officer", "Manajer strategi operasional"],
              en: ["Chief operating officer", "Operations strategy manager"] },
    Jaga:   { id: ["Direktur operasional", "Manajer wilayah"],
              en: ["Operations director", "Regional manager"] },
    Guna:   { id: ["Manajer operasional", "Manajer sales operations"],
              en: ["Operations manager", "Sales operations manager"] } }
},

"Karsa|Yasa": {
  label: { id: "Menggerakkan sesuatu yang nyata",
           en: "Moving something tangible" },
  apa: { id: "Dorongan menggerakkan bertemu minat mengerjakan yang nyata. Yang muncul adalah pekerjaan yang usahanya berdiri di atas barang, proyek, atau alat, bukan di atas jasa yang tidak kelihatan.",
         en: "A drive to move things meets an interest in the tangible. What emerges is a venture standing on goods, projects, or equipment rather than on invisible services." },
  arah: { id: ["Manajer proyek", "Pengembang properti", "Manajer penjualan industri", "Pemilik usaha produksi"],
          en: ["Project manager", "Property developer", "Industrial sales manager", "Production business owner"] },
  bentuk: {
    Reka:   { id: ["Pendiri usaha berbasis keahlian", "Pengembang proyek berdampak"],
              en: ["Craft-based founder", "Impact project developer"] },
    Logika: { id: ["Manajer pengembangan proyek", "Direktur teknik"],
              en: ["Project development manager", "Engineering director"] },
    Jaga:   { id: ["Manajer proyek", "Manajer operasional pabrik"],
              en: ["Project manager", "Plant operations manager"] },
    Guna:   { id: ["Manajer penjualan teknis", "Kontraktor pelaksana"],
              en: ["Technical sales manager", "Executing contractor"] } }
},


/* ───────────────────────── TATA sebagai bidang utama ────────────────────
   Menata lebih dulu. Minat kedua menentukan apa yang ditata.          */

"Tata|Nalar": {
  label: { id: "Menata dengan angka sebagai dasar",
           en: "Ordering with numbers as the base" },
  apa: { id: "Minat menata bertemu minat menelusuri. Yang muncul adalah pekerjaan yang menjaga sesuatu tetap benar sekaligus tahu kenapa angkanya berperilaku begitu.",
         en: "An interest in ordering meets an interest in tracing. What emerges is work keeping things correct while understanding why the numbers behave as they do." },
  arah: { id: ["Akuntan", "Auditor", "Aktuaris", "Analis keuangan"],
          en: ["Accountant", "Auditor", "Actuary", "Financial analyst"] },
  bentuk: {
    Reka:   { id: ["Analis keuangan lembaga sosial", "Perancang pelaporan yang mudah dipahami"],
              en: ["Social institution finance analyst", "Plain-language reporting designer"] },
    Logika: { id: ["Financial controller", "Aktuaris"],
              en: ["Financial controller", "Actuary"] },
    Jaga:   { id: ["Auditor internal", "Akuntan senior"],
              en: ["Internal auditor", "Senior accountant"] },
    Guna:   { id: ["Analis keuangan operasional", "Analis data bisnis"],
              en: ["Operational finance analyst", "Business data analyst"] } }
},

"Tata|Bakti": {
  label: { id: "Menata agar orang terlayani",
           en: "Ordering so that people are served" },
  apa: { id: "Minat menata bertemu minat menumbuhkan orang. Yang muncul adalah pekerjaan yang membangun sistem supaya tidak ada orang yang jatuh di celahnya. Sistem bagimu alat, bukan tujuan.",
         en: "An interest in ordering meets an interest in growing people. What emerges is work building systems so nobody falls through the gaps. To you the system is a tool, not the point." },
  arah: { id: ["Manajer SDM", "Administrator rumah sakit", "Manajer layanan pelanggan", "Kepala staf"],
          en: ["HR manager", "Hospital administrator", "Customer service manager", "Chief of staff"] },
  bentuk: {
    Reka:   { id: ["Manajer budaya dan keterlibatan", "Perancang sistem layanan yang manusiawi"],
              en: ["Culture and engagement manager", "Humane service systems designer"] },
    Logika: { id: ["Kepala staf", "Perancang sistem SDM"],
              en: ["Chief of staff", "HR systems designer"] },
    Jaga:   { id: ["Administrator layanan", "Manajer mutu pelayanan"],
              en: ["Service administrator", "Service quality manager"] },
    Guna:   { id: ["Supervisor operasional layanan", "Koordinator administrasi"],
              en: ["Service operations supervisor", "Administration coordinator"] } }
},

"Tata|Karsa": {
  label: { id: "Menata agar usaha bisa tumbuh",
           en: "Ordering so the venture can grow" },
  apa: { id: "Minat menata bertemu dorongan menggerakkan. Yang muncul adalah pekerjaan yang membangun fondasi agar usahanya bisa membesar tanpa berantakan.",
         en: "An interest in ordering meets a drive to move things. What emerges is work building the foundation so a venture can grow without falling apart." },
  arah: { id: ["Financial controller", "Manajer operasional", "Manajer perencanaan bisnis", "Direktur keuangan"],
          en: ["Financial controller", "Operations manager", "Business planning manager", "Finance director"] },
  bentuk: {
    Reka:   { id: ["Manajer keberlanjutan usaha", "Perancang tata kelola bermisi"],
              en: ["Business sustainability manager", "Mission governance designer"] },
    Logika: { id: ["Chief financial officer", "Manajer transformasi proses"],
              en: ["Chief financial officer", "Process transformation manager"] },
    Jaga:   { id: ["Financial controller", "Manajer tata kelola dan kepatuhan"],
              en: ["Financial controller", "Governance and compliance manager"] },
    Guna:   { id: ["Manajer operasional", "Manajer sales operations"],
              en: ["Operations manager", "Sales operations manager"] } }
},

"Tata|Karya": {
  label: { id: "Menata hal yang harus tetap terasa rapi",
           en: "Ordering what must still feel considered" },
  apa: { id: "Minat menata bertemu minat mencipta. Yang muncul adalah pekerjaan yang menjaga keteraturan tanpa membuatnya terasa kaku, dan memastikan yang tertata juga enak dipakai.",
         en: "An interest in ordering meets an interest in making. What emerges is work holding order without making it feel rigid, ensuring what is ordered is also pleasant to use." },
  arah: { id: ["Manajer panduan merek", "Pengelola pengetahuan", "Manajer komunikasi internal", "Information architect"],
          en: ["Brand guidelines manager", "Knowledge manager", "Internal communications manager", "Information architect"] },
  bentuk: {
    Reka:   { id: ["Manajer komunikasi internal", "Pengelola pengetahuan organisasi"],
              en: ["Internal communications manager", "Organisational knowledge manager"] },
    Logika: { id: ["Information architect", "Perancang sistem dokumentasi"],
              en: ["Information architect", "Documentation systems designer"] },
    Jaga:   { id: ["Manajer panduan merek", "Penyunting dan pengelola publikasi"],
              en: ["Brand guidelines manager", "Editor and publications manager"] },
    Guna:   { id: ["Spesialis materi komunikasi", "Koordinator produksi konten"],
              en: ["Communication materials specialist", "Content production coordinator"] } }
},

"Tata|Yasa": {
  label: { id: "Menata hal yang berwujud",
           en: "Ordering what physically exists" },
  apa: { id: "Minat menata bertemu minat mengerjakan yang nyata. Yang muncul adalah pekerjaan yang menjaga barang, aset, dan alur fisik tetap tertelusur dan berjalan.",
         en: "An interest in ordering meets an interest in the tangible. What emerges is work keeping goods, assets, and physical flows traceable and running." },
  arah: { id: ["Manajer logistik", "Pengendali persediaan", "Manajer aset", "Perencana produksi"],
          en: ["Logistics manager", "Inventory controller", "Asset manager", "Production planner"] },
  bentuk: {
    Reka:   { id: ["Manajer rantai pasok berkelanjutan", "Perancang sistem distribusi yang adil"],
              en: ["Sustainable supply chain manager", "Fair distribution systems designer"] },
    Logika: { id: ["Analis rantai pasok", "Perancang sistem logistik"],
              en: ["Supply chain analyst", "Logistics systems designer"] },
    Jaga:   { id: ["Manajer aset dan inventaris", "Perencana produksi"],
              en: ["Asset and inventory manager", "Production planner"] },
    Guna:   { id: ["Koordinator logistik", "Supervisor gudang dan distribusi"],
              en: ["Logistics coordinator", "Warehouse and distribution supervisor"] } }
}
};


/* ═══════════════════════════════════════════════════════════════════════════
   MESIN RANTAI
   ═══════════════════════════════════════════════════════════════════════════ */

var LakonArah = (function () {
  "use strict";

  /* Ambang jarak skor #2 ke #3. Di bawah ini, urutan keduanya praktis
     ditentukan derau pengukuran, jadi dua perpaduan ditampilkan.
     Nilai 5 mengenai sekitar 29% peserta pada simulasi. */
  var AMBANG_DUA_PERPADUAN = 5;

  function t(o, bahasa) { return o ? ((bahasa || "id") === "id" ? o.id : o.en) : ""; }

  function ambilPerpaduan() {
    return (typeof LAKON_PERPADUAN !== "undefined") ? LAKON_PERPADUAN : {};
  }

  /* Mengembalikan tiga tahap siap render.
     Kalau perpaduannya belum ditulis, tahap 2 dan 3 dikosongkan dengan
     penanda `belumAda`, bukan diisi tebakan. Menampilkan tafsir yang
     dikarang lebih merusak daripada mengosongkan bagiannya. */
  function susun(k1, k2, watak, bahasa) {
    var kunci = k1 + "|" + k2;
    var p = ambilPerpaduan()[kunci];
    if (!p) return null;
    var b = p.bentuk && p.bentuk[watak];
    return {
      kunci: kunci, kelompok2: k2,
      label: t(p.label, bahasa),
      apa: t(p.apa, bahasa),
      arah: t(p.arah, bahasa),
      bentuk: b ? t(b, bahasa) : []
    };
  }

  /* Jarak skor antara Kelompok #2 dan #3. Kalau rapat, urutan keduanya
     praktis ditentukan derau, bukan oleh minat peserta. */
  function jarak23(skor) {
    var u = skor.urutanKelompok, n = skor.skorNormatif;
    if (!u || !n || u.length < 3) return 99;
    return Math.abs((n[u[1]] || 0) - (n[u[2]] || 0));
  }

  function rantai(skor, bahasa) {
    bahasa = bahasa || "id";

    var K = (typeof LAKON_KELOMPOK_CONTENT !== "undefined")
      ? LAKON_KELOMPOK_CONTENT[skor.kelompok1] : null;

    /* Tahap 1 adalah jangkar. Simulasi uji-ulang menunjukkan bagian ini
       bertahan 81%, jauh lebih stabil daripada perpaduannya. Kalau
       perpaduan meleset, peserta masih punya sesuatu yang benar. */
    var tahap1 = {
      kelompok: skor.kelompok1,
      tagline: K ? t(K.tagline, bahasa) : "",
      inti: K && K.tanda_situasi ? t(K.tanda_situasi.inti, bahasa) : ""
    };

    var utama = susun(skor.kelompok1, skor.kelompok2, skor.watak, bahasa);
    if (!utama) {
      return { tahap1: tahap1, tahap2: null, tahap2alt: null, tahap3: null,
               duaKandidat: false, belumAda: skor.kelompok1 + "|" + skor.kelompok2 };
    }

    /* Kandidat kedua: Kelompok #3 sebagai nuansa pengganti. */
    var d = jarak23(skor), alt = null;
    if (d < AMBANG_DUA_PERPADUAN && skor.urutanKelompok && skor.urutanKelompok[2]) {
      alt = susun(skor.kelompok1, skor.urutanKelompok[2], skor.watak, bahasa);
    }

    return {
      tahap1: tahap1,
      tahap2: { kunci: utama.kunci, kelompok2: utama.kelompok2,
                label: utama.label, apa: utama.apa, arah: utama.arah },
      tahap2alt: alt ? { kunci: alt.kunci, kelompok2: alt.kelompok2,
                         label: alt.label, apa: alt.apa, arah: alt.arah } : null,
      tahap3: { watak: skor.watak, peran: utama.bentuk,
                peranAlt: alt ? alt.bentuk : null },
      duaKandidat: !!alt,
      jarak23: d,
      belumAda: null
    };
  }

  /* Kalimat yang menyertai dua kandidat. Nadanya menjelaskan keadaan,
     bukan meminta maaf: berada di perbatasan adalah temuan, bukan
     kegagalan pengukuran. */
  function catatanDuaKandidat(r, bahasa) {
    if (!r || !r.duaKandidat) return "";
    var id = (bahasa || "id") === "id";
    return id
      ? "Minat keduamu dan ketigamu berdekatan, jadi dua arah ini sama-sama masuk akal untukmu. Bukan berarti hasilnya kurang tepat; sebagian orang memang berdiri di antara dua bidang, dan itu justru sering jadi pembeda. Baca keduanya, lalu lihat mana yang lebih terasa seperti kamu."
      : "Your second and third interests sit close together, so both directions make sense for you. That does not mean the result is less accurate; some people genuinely stand between two fields, and that often becomes a differentiator. Read both, then see which feels more like you.";
  }

  /* Pemeriksaan kesiapan: 30 pasangan berurutan harus lengkap. */
  function periksa() {
    var KEL = ["Yasa", "Nalar", "Karya", "Bakti", "Karsa", "Tata"];
    var WAT = ["Reka", "Logika", "Jaga", "Guna"];
    var db = ambilPerpaduan(), ada = 0, kurang = [], masalah = [];

    for (var i = 0; i < KEL.length; i++) {
      for (var j = 0; j < KEL.length; j++) {
        if (i === j) continue;
        var k = KEL[i] + "|" + KEL[j];
        var p = db[k];
        if (!p) { kurang.push(k); continue; }
        ada++;
        if (!p.label || !p.label.en) masalah.push(k + " label tidak lengkap");
        if (!p.apa || !p.apa.en) masalah.push(k + " apa tidak lengkap");
        if (!p.arah || !p.arah.id || !p.arah.en || p.arah.id.length !== p.arah.en.length)
          masalah.push(k + " arah timpang");
        for (var w = 0; w < WAT.length; w++) {
          var b = p.bentuk && p.bentuk[WAT[w]];
          if (!b || !b.id || !b.en || b.id.length !== b.en.length)
            masalah.push(k + " bentuk." + WAT[w] + " tidak lengkap");
        }
      }
    }
    return { ada: ada, dari: 30, kurang: kurang, masalah: masalah,
             siapTayang: kurang.length === 0 && masalah.length === 0 };
  }

  return { rantai: rantai, periksa: periksa,
           catatanDuaKandidat: catatanDuaKandidat,
           AMBANG_DUA_PERPADUAN: AMBANG_DUA_PERPADUAN };
})();

if (typeof module !== "undefined" && module.exports)
  module.exports = { LAKON_PERPADUAN: LAKON_PERPADUAN, LakonArah: LakonArah };
