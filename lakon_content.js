/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — DATA KONTEN 24 PARAGA
   Dipisahkan dari app.js pada 30 Agustus 2026.

   ISINYA DISALIN PERSIS DARI app.js, TIDAK DIKETIK ULANG DAN TIDAK DIUBAH
   SATU KARAKTER PUN. Ekstraksi dilakukan mekanis lalu diverifikasi identik.

   Berisi:
     PERAN_IDEAL      tabel Peran Ideal 24 Paraga
     PARAGA           profil, kekuatan, lingkungan ideal 24 Paraga
     KELOMPOK_COLORS  warna grafik per Kelompok
     KELOMPOK_LABELS  label Kelompok dwibahasa

   Alasan dipisah: app.js semula 1.444 baris, 670 di antaranya data konten
   yang tidak berubah. Dengan dipisah, app.js cukup kecil untuk dikirim
   sebagai file utuh siap timpa setiap kali ada perubahan, sehingga tidak
   perlu lagi menyunting berdasarkan nomor baris.

   MUAT SEBELUM app.js.

   CATATAN untuk Blok 4, jangan disunting sekarang:
     - PARAGA belum punya field: arah_karir, arah_studi, risiko,
       dalam_memimpin, dalam_bersosialisasi, saran_perkembangan
     - field `tags` dan `tagClasses` sudah mati, di-override showResult
     - "Yasa|Jaga" (The Master Craftsperson) dan "Karya|Jaga"
       (The Master of Craft) masih bertabrakan namanya
═══════════════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// PERAN IDEAL DALAM ORGANISASI — 24 Paraga
// Struktur: { naratif, posisi: [{nama, level, fit, peran}] }
// fit: 'ideal' | 'cocok' | 'bisa'
// ─────────────────────────────────────────────────────────────
const PERAN_IDEAL = {
"Bakti|Reka":{
  naratif:"Di posisi apapun, mereka adalah orang yang membuat lingkungan kerja terasa lebih manusiawi. Kekuatan terbesar mereka bukan pada keahlian teknis tertentu, melainkan pada kemampuan membangun kepercayaan yang tulus dan mendorong pertumbuhan orang lain. Mereka paling efektif ketika diberi ruang untuk benar-benar hadir bagi orang-orang di sekitarnya — dan paling menonjol di peran yang menempatkan pengembangan manusia sebagai inti, bukan sekadar fungsi pendukung.",
  posisi:[
    {nama:"L&D Specialist / OD Manager",level:"Mid–Senior",fit:"ideal",peran:"Merancang program pengembangan yang benar-benar mengubah orang. Mereka membuat proses belajar terasa personal dan bermakna, bukan sekadar materi yang disampaikan."},
    {nama:"HR Business Partner",level:"Mid–Senior",fit:"ideal",peran:"Menjembatani kebutuhan bisnis dengan kepentingan manusia. Kebijakan yang mereka rancang terasa adil karena mereka benar-benar mendengar kedua sisi."},
    {nama:"Counselor / Coach",level:"Entry–Senior",fit:"ideal",peran:"Hadir penuh dalam proses tumbuh orang lain. Mereka tidak hanya memberi solusi — mereka menemani prosesnya dengan kesabaran yang konsisten."},
    {nama:"Team Manager / Team Lead",level:"Mid–Senior",fit:"cocok",peran:"Memimpin dengan memperhatikan pertumbuhan setiap anggota secara individual. Tim merasa dilihat sebagai manusia, bukan sekadar resource."},
    {nama:"Customer Success Manager",level:"Mid",fit:"cocok",peran:"Membangun relasi klien yang dalam dan tahan lama. Klien tidak merasa dilayani secara transaksional — mereka merasa benar-benar dipahami."},
    {nama:"Program Officer — NGO / CSR",level:"Entry–Mid",fit:"cocok",peran:"Mengelola program yang berdampak langsung pada komunitas. Mereka memastikan program benar-benar dirasakan manfaatnya, bukan sekadar terlaksana di atas kertas."},
    {nama:"Trainer / Fasilitator",level:"Mid",fit:"cocok",peran:"Membawakan sesi pelatihan dengan kehadiran emosional yang penuh. Peserta tidak hanya belajar — mereka merasa didukung untuk berkembang."},
    {nama:"Recruiter / Talent Acquisition",level:"Entry–Mid",fit:"bisa",peran:"Membaca orang dengan baik dan membangun rapport cepat. Namun lebih kuat di pengembangan daripada seleksi — bisa terasa terlalu transaksional jika tidak ada dimensi mentoring."},
  ]},
"Bakti|Logika":{
  naratif:"Mereka adalah tipe langka yang bisa berbicara dalam bahasa angka sekaligus bahasa manusia. Pendekatan mereka terhadap pengembangan orang selalu berbasis data dan sistem — bukan sekadar empati. Di peran apapun, mereka adalah orang yang memastikan program people bukan hanya terasa baik, tapi benar-benar terukur dampaknya.",
  posisi:[
    {nama:"People Analytics / HR Data Analyst",level:"Mid",fit:"ideal",peran:"Menganalisis data SDM untuk menemukan pola yang tidak terlihat. Menghubungkan angka dengan keputusan yang berdampak nyata pada orang."},
    {nama:"Talent Management Lead",level:"Mid–Senior",fit:"ideal",peran:"Merancang sistem manajemen talenta yang skalabel. Mereka melihat potensi seseorang bukan dari kesan, tapi dari data yang terstruktur."},
    {nama:"HRBP / HR Manager",level:"Mid–Senior",fit:"ideal",peran:"Menerjemahkan strategi bisnis ke keputusan people yang logis dan adil. Mitra strategis yang dipercaya oleh kedua sisi — manajemen dan karyawan."},
    {nama:"L&D Manager",level:"Mid–Senior",fit:"cocok",peran:"Merancang kurikulum pengembangan berbasis kebutuhan yang terukur. Program mereka punya tujuan yang jelas dan outcome yang bisa dievaluasi."},
    {nama:"Compensation & Benefits Analyst",level:"Mid",fit:"cocok",peran:"Membangun struktur kompensasi yang adil dan berbasis data. Memastikan sistem penggajian tidak hanya kompetitif, tapi juga dirasakan fair."},
    {nama:"Management Consultant — People",level:"Mid–Senior",fit:"cocok",peran:"Mendiagnosis masalah organisasi dan merancang solusi sistemik. Efektif karena tidak terjebak pada solusi generik — mereka mengikuti data."},
    {nama:"Project Manager",level:"Mid",fit:"bisa",peran:"Terorganisir dan konsisten dalam mengelola timeline. Namun lebih optimal jika proyek punya dimensi pengembangan manusia di dalamnya."},
    {nama:"Business Analyst",level:"Mid",fit:"bisa",peran:"Kemampuan analitisnya kuat, tapi motivasi terdalamnya pada orang — bukan proses bisnis. Bisa berhasil, tapi lebih hidup di konteks people."},
  ]},
"Bakti|Jaga":{
  naratif:"Mereka adalah pilar keandalan dalam organisasi yang melayani manusia. Di mana banyak orang bicara tentang kepedulian, mereka hadir dan memastikan setiap orang mendapatkan apa yang mereka butuhkan — secara konsisten, tanpa drama, tanpa kompromi pada standar.",
  posisi:[
    {nama:"Customer Service Manager",level:"Mid–Senior",fit:"ideal",peran:"Memimpin tim layanan dengan standar yang tidak berubah. Mereka memastikan setiap keluhan ditangani dengan benar — bukan hanya ditutup."},
    {nama:"Case Manager / Social Worker",level:"Entry–Mid",fit:"ideal",peran:"Mendampingi individu yang membutuhkan dengan konsistensi yang menjadi fondasi kepercayaan. Tidak membuat janji yang tidak bisa ditepati."},
    {nama:"Nurse / Healthcare Coordinator",level:"Entry–Senior",fit:"ideal",peran:"Memberikan perawatan yang konsisten dan dapat diandalkan. Pasien merasa aman karena mereka tahu standarnya tidak akan berubah."},
    {nama:"HR Generalist / HR Admin",level:"Entry–Mid",fit:"cocok",peran:"Memastikan proses HR berjalan dengan benar dan konsisten. Karyawan merasa diperlakukan adil karena prosedur dijalankan dengan integritas."},
    {nama:"Operations Supervisor — Service",level:"Mid",fit:"cocok",peran:"Memastikan layanan berjalan sesuai standar setiap hari. Alasan mengapa tim frontline bisa bekerja dengan tenang."},
    {nama:"Quality Assurance — Service",level:"Mid",fit:"cocok",peran:"Menjaga standar kualitas layanan dengan teliti. Tidak mudah tergoda untuk mengambil jalan pintas meski ada tekanan waktu."},
    {nama:"Compliance Officer",level:"Mid",fit:"bisa",peran:"Memahami pentingnya prosedur dan menjalankannya dengan disiplin. Namun lebih kuat di layanan langsung daripada di regulasi yang jauh dari manusia."},
    {nama:"Administrative Officer",level:"Entry",fit:"bisa",peran:"Teratur dan dapat diandalkan dalam mengelola dokumen. Lebih optimal jika ada interaksi bermakna dengan orang di dalam perannya."},
  ]},
"Bakti|Guna":{
  naratif:"Mereka tidak menunggu sistem atau instruksi untuk membantu. Begitu melihat kebutuhan, mereka bergerak — hadir secara fisik, emosional, dan praktis. Di lapangan, mereka adalah orang yang paling diingat oleh orang-orang yang mereka layani, karena kehadiran mereka terasa nyata dan tanpa jarak.",
  posisi:[
    {nama:"Community Outreach / Field Officer",level:"Entry–Mid",fit:"ideal",peran:"Terjun langsung ke komunitas dan merespons kebutuhan tanpa birokrasi berlebihan. Membangun kepercayaan komunitas melalui kehadiran nyata."},
    {nama:"Paramedic / Perawat Lapangan",level:"Entry–Mid",fit:"ideal",peran:"Bergerak cepat dan tepat di situasi yang membutuhkan respons segera. Ketenangan mereka di bawah tekanan membuat orang di sekitarnya merasa aman."},
    {nama:"Youth Worker / Pendamping Sosial",level:"Entry–Mid",fit:"ideal",peran:"Membangun koneksi autentik dengan remaja atau komunitas rentan. Mereka tidak memimpin dari jarak jauh — mereka ada di tengah-tengah."},
    {nama:"Customer Service Frontliner",level:"Entry–Mid",fit:"cocok",peran:"Merespons kebutuhan pelanggan dengan cepat dan hangat. Pelanggan merasa dibantu, bukan diproses melalui sistem."},
    {nama:"Field Coordinator",level:"Mid",fit:"cocok",peran:"Memimpin tim lapangan kecil dengan kehadiran langsung. Mereka memimpin dengan hadir, bukan dengan instruksi dari belakang meja."},
    {nama:"Crisis Intervention Specialist",level:"Mid",fit:"cocok",peran:"Membaca situasi kritis dengan cepat dan bertindak tanpa menunggu prosedur lengkap. Kecepatan respons mereka sangat menentukan."},
    {nama:"Sales Lapangan / Territory Sales",level:"Entry–Mid",fit:"bisa",peran:"Energi interpersonalnya kuat dan mudah membangun rapport. Lebih kuat di membantu daripada di closing deal — optimal jika produk genuinely bermanfaat bagi orang."},
    {nama:"Event Coordinator",level:"Entry–Mid",fit:"bisa",peran:"Responsif dan baik dalam membaca kebutuhan orang. Namun lebih optimal di konteks pelayanan langsung daripada koordinasi logistik event."},
  ]},
"Karya|Reka":{
  naratif:"Di posisi apapun, mereka adalah orang yang membawa narasi dan makna ke dalam pekerjaan. Mereka tidak hanya menghasilkan — mereka memastikan apa yang dihasilkan punya dampak emosional yang nyata pada audiens. Kekuatan terbesar mereka adalah kemampuan melihat audiens sebelum melihat kanvas.",
  posisi:[
    {nama:"Brand Strategist / Creative Director",level:"Mid–Senior",fit:"ideal",peran:"Membangun identitas brand yang kohesif dan bermakna. Mereka memimpin dengan visi — setiap keputusan kreatif punya alasan yang bisa dijelaskan kepada stakeholder."},
    {nama:"Content Strategist / Head of Content",level:"Mid–Senior",fit:"ideal",peran:"Merancang narasi konten jangka panjang yang membangun koneksi nyata dengan audiens. Bukan konten viral sesaat — melainkan cerita yang diingat."},
    {nama:"Communications Manager / PR Manager",level:"Mid–Senior",fit:"ideal",peran:"Merancang pesan organisasi yang autentik. Memastikan komunikasi eksternal mencerminkan nilai yang benar-benar dipegang perusahaan, bukan hanya citra."},
    {nama:"UX Writer / Product Copywriter",level:"Mid",fit:"cocok",peran:"Menulis teks produk yang membuat pengguna merasa dipahami. Setiap kata dipilih dengan mempertimbangkan bagaimana rasanya dibaca oleh manusia nyata."},
    {nama:"Social Entrepreneur / Founder",level:"Senior",fit:"cocok",peran:"Membangun organisasi atau gerakan berbasis narasi yang kuat. Menarik orang bukan dengan pitch deck, tapi dengan cerita yang menyentuh."},
    {nama:"Trainer / Fasilitator Kreatif",level:"Mid",fit:"cocok",peran:"Membawakan sesi dengan pendekatan storytelling yang membuat materi terasa relevan dan personal bagi setiap peserta."},
    {nama:"Marketing Manager",level:"Mid–Senior",fit:"bisa",peran:"Kemampuan naratifnya adalah aset besar dalam marketing. Namun perlu partner kuat di sisi eksekusi operasional dan data analytics agar efektif."},
    {nama:"Copywriter / Junior Creative",level:"Entry",fit:"bisa",peran:"Titik masuk yang baik untuk membangun portfolio. Lebih optimal di peran yang memberi ruang untuk merancang strategi narasi, bukan hanya mengeksekusi brief."},
  ]},
"Karya|Logika":{
  naratif:"Mereka adalah jembatan antara dunia kreatif dan dunia sistem. Di mana kreator lain berhenti di estetika, mereka meneruskan ke pertanyaan: bagaimana ini bisa bekerja secara konsisten, skalabel, dan terukur? Inilah yang membuat output mereka tidak hanya indah, tapi juga tahan lama.",
  posisi:[
    {nama:"Design Systems Lead / Head of Design",level:"Senior",fit:"ideal",peran:"Membangun sistem desain yang skalabel dan konsisten di seluruh produk. Mendefinisikan standar kreatif yang bisa diikuti oleh seluruh tim."},
    {nama:"UX Designer / Product Designer",level:"Mid",fit:"ideal",peran:"Menghubungkan keputusan desain dengan tujuan bisnis dan kebutuhan pengguna. Bisa menjelaskan 'mengapa' di balik setiap pilihan visual."},
    {nama:"Creative Technology Lead",level:"Mid–Senior",fit:"ideal",peran:"Menjembatani tim kreatif dan tim engineering. Mereka berbicara dua bahasa — dan itu sangat langka."},
    {nama:"Brand Manager",level:"Mid",fit:"cocok",peran:"Mengelola konsistensi brand dengan pendekatan sistematis. Setiap touchpoint dijaga dengan standar yang tidak berubah."},
    {nama:"MarTech Specialist",level:"Mid",fit:"cocok",peran:"Mengelola stack teknologi marketing dengan pemahaman kreatif. Tahu alat mana yang tepat untuk tujuan apa."},
    {nama:"Product Manager",level:"Mid–Senior",fit:"cocok",peran:"Memimpin pengembangan produk dengan keseimbangan antara intuisi kreatif dan pemikiran sistematis. Menjaga visi produk tetap kohesif di tengah kompleksitas."},
    {nama:"Data Analyst — Marketing",level:"Mid",fit:"bisa",peran:"Kemampuan analitisnya solid. Namun lebih optimal jika analisis tersebut terhubung langsung dengan output kreatif."},
    {nama:"Project Manager — Creative",level:"Mid",fit:"bisa",peran:"Terorganisir dan sistematis dalam mengelola proyek kreatif. Energi terbaiknya ada di merancang, bukan di koordinasi jadwal semata."},
  ]},
"Karya|Jaga":{
  naratif:"Mereka adalah aset produksi kreatif yang paling konsisten. Di industri yang sering bergantung pada mood dan inspirasi, mereka datang setiap hari dan menghasilkan kualitas tinggi tanpa drama. Di posisi apapun, mereka adalah orang yang tim andalkan saat ada proyek yang tidak boleh salah.",
  posisi:[
    {nama:"Senior Graphic Designer / Art Director",level:"Mid–Senior",fit:"ideal",peran:"Menghasilkan karya visual berkualitas tinggi dengan konsistensi yang menjadi standar tim. Orang pertama yang dipanggil saat proyek penting."},
    {nama:"Creative Production Manager",level:"Mid–Senior",fit:"ideal",peran:"Memastikan alur produksi kreatif berjalan tepat waktu tanpa mengorbankan kualitas. Alasan studio bisa menangani volume tinggi dengan standar yang terjaga."},
    {nama:"Brand Executive / MarComm Specialist",level:"Mid",fit:"ideal",peran:"Mengelola konsistensi materi komunikasi brand di semua touchpoint. Tidak ada yang lolos tanpa melewati standar mereka."},
    {nama:"UI Designer / Visual Designer",level:"Entry–Mid",fit:"cocok",peran:"Mengeksekusi brief dengan presisi dan konsistensi yang tinggi. Bukan yang paling eksperimental, tapi yang paling bisa diandalkan untuk kualitas final."},
    {nama:"Video Editor / Content Producer",level:"Entry–Mid",fit:"cocok",peran:"Menghasilkan konten video dengan standar teknis yang konsisten. Deadline bagi mereka bukan ancaman — mereka bekerja terbaik dengan struktur yang jelas."},
    {nama:"Studio Manager / Creative Ops",level:"Mid–Senior",fit:"cocok",peran:"Mengelola operasional studio kreatif dengan keteraturan yang membuat tim kreatif bisa fokus pada pekerjaan mereka."},
    {nama:"Copywriter",level:"Entry–Mid",fit:"bisa",peran:"Konsisten dalam menghasilkan copy yang solid dan sesuai brief. Lebih kuat di eksekusi terstruktur daripada di eksplorasi konsep yang sangat terbuka."},
    {nama:"Social Media Specialist",level:"Entry–Mid",fit:"bisa",peran:"Mampu menjaga konsistensi konten dan jadwal posting. Kurang optimal di platform yang menuntut improvisasi real-time dan respons spontan."},
  ]},
"Karya|Guna":{
  naratif:"Kreativitas mereka paling hidup ketika lahir di momen — responsif, spontan, dan autentik. Di dunia yang penuh dengan konten yang direncanakan berbulan-bulan, mereka adalah tipe yang bisa membaca ruangan dan langsung menciptakan sesuatu yang terasa nyata.",
  posisi:[
    {nama:"Content Creator / Social Media Manager",level:"Entry–Mid",fit:"ideal",peran:"Membuat konten yang terasa segar dan tidak dibuat-buat. Membaca tren lebih cepat dari yang lain dan langsung bereaksi sebelum momentumnya berlalu."},
    {nama:"Brand Activation Specialist",level:"Mid",fit:"ideal",peran:"Membuat event dan aktivasi brand terasa hidup. Tidak hanya mengeksekusi rundown — membaca energi ruangan dan menyesuaikan di tempat."},
    {nama:"Creative Director — Campaign",level:"Senior",fit:"ideal",peran:"Memimpin kampanye dengan naluri kreatif yang tajam. Tahu kapan harus mengikuti rencana dan kapan harus membuang rencana demi momen yang lebih baik."},
    {nama:"Facilitator / MC / Trainer",level:"Mid–Senior",fit:"cocok",peran:"Membawakan sesi dengan energi autentik dan kemampuan membaca peserta secara real-time. Membuat ruangan terasa hidup."},
    {nama:"Digital Marketing Specialist",level:"Mid",fit:"cocok",peran:"Mengelola kampanye digital yang membutuhkan respons cepat terhadap perubahan. Tidak butuh SOP panjang untuk ambil keputusan."},
    {nama:"Videographer / Photographer",level:"Entry–Mid",fit:"cocok",peran:"Menangkap momen dengan naluri yang tajam. Karya terbaik sering lahir dari situasi yang tidak direncanakan."},
    {nama:"Copywriter — Digital",level:"Entry–Mid",fit:"bisa",peran:"Menulis copy yang terasa segar dan relevan. Namun kurang optimal di proyek yang membutuhkan riset mendalam dan revisi berulang yang panjang."},
    {nama:"Account Executive — Agency",level:"Entry–Mid",fit:"bisa",peran:"Energi interpersonalnya bagus untuk membangun relasi klien. Namun perlu partner lebih detail-oriented untuk memastikan deliverable berjalan tepat waktu."},
  ]},
"Karsa|Reka":{
  naratif:"Mereka memimpin dengan cerita dan visi — bukan dengan jabatan atau otoritas formal. Di posisi apapun, mereka adalah orang yang membuat orang lain percaya bahwa ada sesuatu yang lebih besar dari pekerjaan sehari-hari. Kekuatan terbesar mereka adalah kemampuan mengubah pekerjaan menjadi misi.",
  posisi:[
    {nama:"CEO / Founder / Director",level:"Senior",fit:"ideal",peran:"Membangun organisasi atau gerakan dengan visi yang menginspirasi. Menarik talenta terbaik bukan dengan gaji, tapi dengan cerita yang membuat orang ingin jadi bagian dari sesuatu yang berarti."},
    {nama:"Chief Marketing Officer / VP Brand",level:"Senior",fit:"ideal",peran:"Memimpin brand sebagai gerakan, bukan sekadar produk. Marketing bukan tentang awareness — ini tentang membangun komunitas yang percaya."},
    {nama:"Campaign Director / Social Entrepreneur",level:"Mid–Senior",fit:"ideal",peran:"Mengelola kampanye atau inisiatif sosial dengan narasi yang kuat. Tahu bagaimana membuat orang tergerak untuk bertindak."},
    {nama:"Head of Marketing / Brand Manager",level:"Mid–Senior",fit:"cocok",peran:"Memimpin tim kreatif dengan visi yang membuat orang ingin berkontribusi lebih. Menjaga brand tetap punya jiwa di tengah tekanan komersial."},
    {nama:"Public Speaker / Thought Leader",level:"Senior",fit:"cocok",peran:"Menyampaikan ide dengan cara yang menggerakkan orang. Setiap presentasi terasa seperti undangan untuk melihat dunia dengan cara baru."},
    {nama:"Program Director — NGO / Foundation",level:"Senior",fit:"cocok",peran:"Memimpin program dengan misi yang jelas dan tim yang termotivasi oleh tujuan yang lebih besar dari diri mereka sendiri."},
    {nama:"Business Development Manager",level:"Mid",fit:"bisa",peran:"Kemampuan persuasi dan naratifnya kuat untuk membuka peluang baru. Lebih optimal jika ada kebebasan untuk membangun sesuatu, bukan hanya menjual."},
    {nama:"HR / Culture Lead",level:"Mid",fit:"bisa",peran:"Bisa membangun budaya organisasi yang kuat dengan narasi yang tepat. Lebih hidup di peran dengan dampak eksternal dan visibilitas yang lebih luas."},
  ]},
"Karsa|Logika":{
  naratif:"Mereka adalah kombinasi yang paling langka: seseorang yang bisa melihat gambaran besar sekaligus membangun mesin untuk mewujudkannya. Di posisi apapun, mereka adalah orang yang tidak hanya punya jawaban — mereka punya sistem untuk memastikan jawabannya benar-benar terjadi.",
  posisi:[
    {nama:"CEO / COO / Managing Director",level:"Senior",fit:"ideal",peran:"Memimpin organisasi dengan keseimbangan antara visi jangka panjang dan eksekusi yang presisi. Alasan organisasi bisa bergerak cepat tanpa kehilangan arah."},
    {nama:"Strategy Director / Chief of Staff",level:"Senior",fit:"ideal",peran:"Menerjemahkan ambisi besar menjadi rencana yang bisa dieksekusi. Suara yang paling dipercaya dalam ruangan saat keputusan besar harus dibuat."},
    {nama:"Management Consultant",level:"Mid–Senior",fit:"ideal",peran:"Mendiagnosis masalah organisasi dengan tajam dan merancang solusi yang logis. Rekomendasi mereka bisa dipertahankan dengan argumen yang solid."},
    {nama:"Sales Strategy Manager",level:"Mid–Senior",fit:"cocok",peran:"Merancang sistem penjualan yang skalabel. Tidak hanya menetapkan target — membangun proses yang membuat target bisa tercapai secara konsisten."},
    {nama:"Investment Manager / VC Analyst",level:"Mid–Senior",fit:"cocok",peran:"Mengevaluasi peluang dengan kombinasi ketajaman analitis dan intuisi bisnis. Melihat potensi yang tidak terlihat orang lain."},
    {nama:"Product Director",level:"Senior",fit:"cocok",peran:"Memimpin roadmap produk dengan visi yang jelas dan prioritas yang bisa dipertahankan kepada semua stakeholder."},
    {nama:"Business Analyst / Junior Consultant",level:"Entry–Mid",fit:"bisa",peran:"Titik masuk yang baik untuk mengasah kemampuan analitis. Energi terbaiknya ada di kepemimpinan — peran ini idealnya bersifat sementara."},
    {nama:"Operations Manager",level:"Mid",fit:"bisa",peran:"Mampu membangun proses yang efisien. Namun lebih optimal di peran yang memberi ruang untuk keputusan strategis, bukan hanya operasional."},
  ]},
"Karsa|Jaga":{
  naratif:"Mereka memimpin untuk jangka panjang. Setiap keputusan yang mereka buat mempertimbangkan satu pertanyaan: apakah ini akan membuat organisasi lebih kuat lima tahun dari sekarang? Di posisi apapun, mereka adalah orang yang membuat institusi bisa dipercaya — konsisten dalam nilai, konsisten dalam standar.",
  posisi:[
    {nama:"COO / General Manager",level:"Senior",fit:"ideal",peran:"Memastikan organisasi berjalan dengan sistem yang kokoh. Penyeimbang sempurna untuk CEO yang visioner tapi kurang sistematis."},
    {nama:"Branch Manager / Regional Manager",level:"Mid–Senior",fit:"ideal",peran:"Memimpin wilayah atau cabang dengan standar yang konsisten. Tim tahu persis apa yang diharapkan — tidak ada ambiguitas dalam kepemimpinan mereka."},
    {nama:"Operations Director",level:"Senior",fit:"ideal",peran:"Membangun infrastruktur operasional yang tahan lama. Alasan mengapa organisasi bisa tumbuh tanpa kehilangan kualitas."},
    {nama:"Compliance Manager / Internal Audit",level:"Mid–Senior",fit:"cocok",peran:"Menjaga integritas proses dan standar organisasi. Menjalankan fungsi ini bukan karena terpaksa, tapi karena percaya pada nilai sistem yang benar."},
    {nama:"Project Manager / PMO Lead",level:"Mid–Senior",fit:"cocok",peran:"Mengelola proyek dengan disiplin tinggi dari awal hingga selesai. Tidak kehilangan arah meski ada perubahan di tengah jalan."},
    {nama:"Government Administrator / Director",level:"Senior",fit:"cocok",peran:"Membangun kepercayaan publik melalui konsistensi, bukan kampanye. Tipe pemimpin yang dibutuhkan institusi publik."},
    {nama:"Sales Manager",level:"Mid–Senior",fit:"bisa",peran:"Bisa memimpin tim sales dengan standar yang jelas. Lebih kuat di membangun sistem daripada di memotivasi tim melalui energi personal."},
    {nama:"HR Manager",level:"Mid",fit:"bisa",peran:"Mengelola proses HR dengan integritas dan konsistensi. Lebih optimal di fungsi berorientasi sistem daripada di pengembangan budaya yang membutuhkan fleksibilitas."},
  ]},
"Karsa|Guna":{
  naratif:"Mereka memimpin dan mempengaruhi melalui koneksi manusia yang genuine. Di posisi apapun, mereka adalah orang yang membuat orang lain ingin bergerak — bukan karena instruksi, tapi karena mereka percaya pada energi dan kepercayaan yang dibangun melalui setiap interaksi nyata.",
  posisi:[
    {nama:"Sales Director / VP Business Development",level:"Senior",fit:"ideal",peran:"Menggerakkan mesin penjualan melalui jaringan relasi yang kuat dan kepercayaan personal yang dibangun selama bertahun-tahun."},
    {nama:"Key Account Manager",level:"Mid–Senior",fit:"ideal",peran:"Mempertahankan dan mengembangkan akun strategis melalui hubungan yang genuinely personal. Klien besar tidak pergi karena mereka ada."},
    {nama:"Business Development Manager",level:"Mid",fit:"ideal",peran:"Membuka peluang bisnis baru melalui kombinasi energi, intuisi, dan kemampuan membaca orang dengan cepat."},
    {nama:"Sales Manager",level:"Mid–Senior",fit:"cocok",peran:"Memimpin tim sales dengan energi yang menular. Tim bekerja keras untuk mereka karena mereka genuinely peduli pada orang-orangnya."},
    {nama:"Partnership Manager",level:"Mid",fit:"cocok",peran:"Membangun dan menjaga ekosistem kemitraan. Mereka tahu bagaimana membuat semua pihak merasa menang."},
    {nama:"Public Affairs / Government Relations",level:"Senior",fit:"cocok",peran:"Menavigasi hubungan dengan pemangku kepentingan eksternal melalui kepercayaan yang dibangun dari interaksi langsung yang konsisten."},
    {nama:"CEO / Founder",level:"Senior",fit:"bisa",peran:"Energi kepemimpinan dan kemampuan membangun relasi sangat kuat. Namun perlu sistem eksekusi yang solid — jangan hanya mengandalkan energi personal di skala besar."},
    {nama:"Recruiter / Headhunter",level:"Entry–Mid",fit:"bisa",peran:"Kemampuan membaca orang dan membangun rapport sangat relevan. Motivasi terkuatnya pada relasi jangka panjang — bukan pada kecepatan closing kandidat."},
  ]},
"Nalar|Reka":{
  naratif:"Mereka adalah peneliti yang tidak pernah puas dengan data tanpa makna. Di posisi apapun, mereka adalah orang yang mengajukan pertanyaan yang orang lain tidak pikirkan — dan menjawabnya dengan cara yang mengubah bagaimana organisasi melihat sesuatu.",
  posisi:[
    {nama:"UX Researcher / Design Researcher",level:"Mid",fit:"ideal",peran:"Menggali pemahaman mendalam tentang pengguna dan menerjemahkannya menjadi insight yang mengubah arah produk. Memastikan keputusan desain berbasis realita, bukan asumsi."},
    {nama:"Policy Analyst / Social Researcher",level:"Mid–Senior",fit:"ideal",peran:"Menganalisis data dan tren untuk rekomendasi kebijakan yang berdampak nyata. Rigor analitis diimbangi dengan kepekaan pada implikasi manusiawi."},
    {nama:"Impact Researcher / Program Evaluator",level:"Mid–Senior",fit:"ideal",peran:"Mengukur efektivitas program sosial dengan metodologi yang ketat. Mereka memastikan dampak yang diklaim benar-benar terjadi."},
    {nama:"Content Strategist / Insight Manager",level:"Mid",fit:"cocok",peran:"Merancang strategi konten berbasis riset audiens yang mendalam. Setiap keputusan konten punya justifikasi yang bisa dipertahankan."},
    {nama:"Market Research Analyst",level:"Mid",fit:"cocok",peran:"Menganalisis pasar dan konsumen dengan pendekatan yang menggabungkan data kuantitatif dan pemahaman kualitatif."},
    {nama:"Organizational Development Consultant",level:"Senior",fit:"cocok",peran:"Mendiagnosis tantangan organisasi dengan riset yang mendalam dan merancang intervensi berbasis bukti."},
    {nama:"Data Analyst",level:"Mid",fit:"bisa",peran:"Kemampuan analitisnya kuat. Lebih optimal jika analisis tersebut terhubung langsung dengan implikasi pada manusia, bukan sekadar angka di dashboard."},
    {nama:"Academic / Lecturer",level:"Senior",fit:"bisa",peran:"Kedalaman intelektual dan rasa ingin tahu akademisnya sangat kuat. Namun lebih hidup di riset yang punya dampak nyata daripada di pengajaran yang sangat terstruktur."},
  ]},
"Nalar|Logika":{
  naratif:"Mereka adalah arketipe analis sejati: mendedikasikan kemampuan kognitif untuk memahami bagaimana dunia benar-benar bekerja. Di posisi apapun, mereka adalah orang yang kesimpulannya paling tahan terhadap kritik — karena mereka tidak akan menyampaikan sesuatu yang belum bisa mereka pertahankan.",
  posisi:[
    {nama:"Data Scientist / Quantitative Analyst",level:"Mid–Senior",fit:"ideal",peran:"Membangun model dan analisis yang menjadi fondasi keputusan bisnis penting. Tidak tertarik pada cerita yang menarik — mereka tertarik pada kebenaran yang akurat."},
    {nama:"Risk Analyst / Risk Manager",level:"Mid–Senior",fit:"ideal",peran:"Mengidentifikasi dan mengkuantifikasi risiko dengan metodologi yang ketat. Tidak mudah terpengaruh bias optimisme yang sering mewarnai keputusan bisnis."},
    {nama:"Head of Research / Principal Analyst",level:"Senior",fit:"ideal",peran:"Membangun budaya rigor analitis di seluruh tim. Menetapkan standar kualitas yang membuat output tim tahan terhadap audit paling ketat sekalipun."},
    {nama:"Strategy Analyst / Intelligence Analyst",level:"Mid",fit:"cocok",peran:"Menganalisis kompetitor, pasar, atau lingkungan bisnis untuk menghasilkan insight strategis yang actionable."},
    {nama:"Financial Analyst / Investment Analyst",level:"Mid",fit:"cocok",peran:"Mengevaluasi kesehatan finansial dan potensi investasi dengan analisis mendalam. Mengikuti data ke mana pun mengarah, meski hasilnya tidak nyaman."},
    {nama:"Actuarial Analyst",level:"Mid",fit:"cocok",peran:"Memodelkan ketidakpastian dan risiko dengan presisi matematika. Salah satu peran yang paling sesuai dengan cara pikir mereka."},
    {nama:"Compliance Analyst",level:"Mid",fit:"bisa",peran:"Kemampuan analitisnya solid untuk memahami regulasi yang kompleks. Lebih optimal di analisis yang menghasilkan insight baru, bukan di pemantauan kepatuhan yang repetitif."},
    {nama:"Management Consultant",level:"Mid–Senior",fit:"bisa",peran:"Analisis mereka sangat tajam. Namun perlu mengembangkan komunikasi yang lebih persuasif untuk klien yang tidak terbiasa dengan kedalaman teknis."},
  ]},
"Nalar|Jaga":{
  naratif:"Mereka membangun pengetahuan seperti seorang arsitek membangun gedung: dengan fondasi yang kuat, metodologi yang terstruktur, dan tidak ada satu pun langkah yang diambil sembarangan. Di posisi apapun, mereka adalah orang yang menjaga integritas proses — bahkan ketika ada tekanan untuk mempercepat.",
  posisi:[
    {nama:"Clinical Research Associate / CRA",level:"Mid",fit:"ideal",peran:"Memastikan penelitian klinis berjalan sesuai protokol yang ketat. Tidak akan mengambil jalan pintas meski ada tekanan timeline dari sponsor."},
    {nama:"Quality Assurance Manager",level:"Mid–Senior",fit:"ideal",peran:"Menjaga standar kualitas dengan metodologi yang terdokumentasi rapi. Alasan mengapa produk atau layanan bisa dipercaya konsistensinya."},
    {nama:"Regulatory Affairs Specialist",level:"Mid–Senior",fit:"ideal",peran:"Memahami dan menavigasi regulasi yang kompleks dengan presisi. Memastikan organisasi tidak hanya patuh, tapi juga terlindungi dari risiko kepatuhan di masa depan."},
    {nama:"Internal Auditor",level:"Mid",fit:"cocok",peran:"Mengevaluasi proses dan kontrol internal dengan metodologi yang sistematis. Temuan mereka dapat dipercaya karena prosesnya tidak bisa dikompromikan."},
    {nama:"Research Manager / Lab Manager",level:"Mid–Senior",fit:"cocok",peran:"Memimpin tim riset dengan standar metodologi yang konsisten. Memastikan setiap proyek berjalan sesuai protokol yang telah ditetapkan."},
    {nama:"Data Quality Analyst",level:"Mid",fit:"cocok",peran:"Memastikan integritas data yang menjadi dasar seluruh analisis organisasi. Penjaga akurasi yang tidak kenal kompromi."},
    {nama:"Compliance Officer",level:"Mid",fit:"bisa",peran:"Disiplin prosedural sangat kuat untuk fungsi kepatuhan. Lebih optimal di konteks yang masih ada dimensi investigasi dan analisis, bukan sekadar pemantauan rutin."},
    {nama:"Project Coordinator",level:"Entry–Mid",fit:"bisa",peran:"Teratur dan dapat diandalkan dalam mengelola dokumentasi. Namun energi terbaiknya ada di kedalaman analitis, bukan di koordinasi lintas tim."},
  ]},
"Nalar|Guna":{
  naratif:"Mereka tidak menganalisis untuk kesenangan intelektual — mereka menganalisis karena ada masalah yang perlu dipecahkan sekarang. Di posisi apapun, mereka adalah orang yang paling cepat bergerak dari data ke keputusan.",
  posisi:[
    {nama:"Business Analyst / Product Analyst",level:"Mid",fit:"ideal",peran:"Mendiagnosis masalah bisnis atau produk dengan cepat dan menghasilkan rekomendasi yang langsung bisa dieksekusi. Tidak terjebak di analisis yang berlebihan."},
    {nama:"Growth Analyst / Performance Marketer",level:"Mid",fit:"ideal",peran:"Menganalisis funnel dan performa kampanye untuk mengidentifikasi peluang pertumbuhan yang bisa langsung ditindaklanjuti."},
    {nama:"Forensic / Investigative Analyst",level:"Mid–Senior",fit:"ideal",peran:"Membongkar kasus, anomali, atau fraud dengan metode investigatif yang cepat dan langsung menghasilkan temuan yang bisa ditindaklanjuti. Dihargai karena kecepatan dari bukti ke kesimpulan."},
    {nama:"Operations Analyst / Process Improvement",level:"Mid",fit:"cocok",peran:"Mengidentifikasi inefisiensi dalam proses operasional dan langsung merancang perbaikan yang bisa diimplementasikan."},
    {nama:"Product Manager",level:"Mid",fit:"cocok",peran:"Mengelola backlog dan prioritas produk berdasarkan data yang solid. Tidak membiarkan roadmap dikuasai oleh opini."},
    {nama:"Healthcare Quality Improvement",level:"Mid",fit:"cocok",peran:"Menganalisis data klinis untuk mengidentifikasi peluang peningkatan kualitas layanan yang bisa langsung diimplementasikan."},
    {nama:"Data Analyst",level:"Mid",fit:"bisa",peran:"Kemampuan analitisnya solid. Lebih optimal jika hasilnya langsung terhubung ke keputusan yang actionable, bukan hanya laporan yang dibaca sekali."},
    {nama:"Researcher / Academic",level:"Mid–Senior",fit:"bisa",peran:"Kemampuan analitisnya sangat dalam. Ritme penelitian akademis yang lambat bisa terasa frustrasi — mereka lebih hidup di konteks yang menuntut kecepatan."},
  ]},
"Yasa|Reka":{
  naratif:"Mereka membangun dengan visi — setiap proyek teknis yang mereka kerjakan selalu dilandasi pertanyaan: apakah ini benar-benar bermakna? Di posisi apapun, mereka menolak menghasilkan sesuatu yang hanya berfungsi secara teknis tapi kosong dari makna.",
  posisi:[
    {nama:"Architect / Industrial Designer",level:"Mid–Senior",fit:"ideal",peran:"Merancang ruang atau produk fisik yang tidak hanya fungsional tapi juga bermakna. Setiap keputusan desain punya pertimbangan yang melampaui estetika semata."},
    {nama:"Sustainable Design / R&D Specialist",level:"Mid–Senior",fit:"ideal",peran:"Mengembangkan solusi teknis yang berdampak positif pada lingkungan atau masyarakat. Termotivasi oleh pekerjaan yang bisa dirasakan dampaknya jangka panjang."},
    {nama:"Product Designer",level:"Mid",fit:"ideal",peran:"Menghubungkan fungsi teknis dan pengalaman pengguna dalam satu objek yang kohesif. Tidak puas dengan produk yang hanya bekerja — ia harus juga berarti."},
    {nama:"UX / Service Designer",level:"Mid",fit:"cocok",peran:"Merancang pengalaman yang dirasakan manusiawi oleh penggunanya. Keahlian teknis membuat rancangan yang juga bisa diimplementasikan."},
    {nama:"Film / Documentary Maker",level:"Mid",fit:"cocok",peran:"Menggabungkan keahlian teknis produksi dengan narasi yang bermakna. Karya terbaik lahir dari subjek yang benar-benar mereka pedulikan."},
    {nama:"Craftsperson / Artisan",level:"Entry–Senior",fit:"cocok",peran:"Menuangkan keahlian tangan ke dalam karya yang punya nilai estetis dan fungsional sekaligus. Menemukan kepuasan dalam proses pembuatan itu sendiri."},
    {nama:"Site Manager / Technical Lead",level:"Mid–Senior",fit:"bisa",peran:"Kemampuan teknis dan visi proyek solid. Namun lebih optimal di proyek yang punya dimensi makna yang jelas, bukan di proyek konstruksi yang sangat rutin."},
    {nama:"Technical Trainer",level:"Mid",fit:"bisa",peran:"Bisa berbagi keahlian teknis dengan cara yang inspiratif. Namun lebih hidup sebagai praktisi daripada sebagai pengajar penuh waktu."},
  ]},
"Yasa|Logika":{
  naratif:"Mereka melihat dunia sebagai sistem yang bisa dioptimasi. Di posisi apapun, mereka adalah orang yang selalu bertanya: mengapa sistem ini bekerja seperti ini, dan bagaimana cara membuatnya lebih baik? Tidak ada inefisiensi yang lolos dari perhatian mereka.",
  posisi:[
    {nama:"Systems Engineer / Process Engineer",level:"Mid–Senior",fit:"ideal",peran:"Merancang sistem yang skalabel dan andal. Tidak berhenti di solusi yang berfungsi — mereka terus mencari yang lebih efisien."},
    {nama:"Engineering Manager / Head of Engineering",level:"Senior",fit:"ideal",peran:"Memimpin tim teknis dengan kredibilitas yang lahir dari kompetensi nyata. Tim teknis sangat menghormati tipe ini karena mereka tahu pekerjaan tim dari dalam."},
    {nama:"Data Engineer / Platform Engineer",level:"Mid",fit:"ideal",peran:"Membangun infrastruktur data yang solid dan skalabel. Melihat arsitektur yang optimal bahkan sebelum masalah pertama muncul."},
    {nama:"Business Process Analyst",level:"Mid",fit:"cocok",peran:"Menganalisis dan mengoptimasi proses bisnis dengan pendekatan sistematis. Menemukan inefisiensi yang tidak disadari orang lain."},
    {nama:"Procurement / Supply Chain Analyst",level:"Mid",fit:"cocok",peran:"Mengoptimasi rantai pasok dengan analisis yang mendalam. Tidak puas dengan proses yang sudah biasa jika ada cara yang lebih efisien."},
    {nama:"Solution Architect",level:"Senior",fit:"cocok",peran:"Merancang solusi teknis yang menjawab kebutuhan bisnis secara optimal. Penghubung antara dunia bisnis dan dunia teknis."},
    {nama:"Operations Manager",level:"Mid–Senior",fit:"bisa",peran:"Kemampuan sistematis sangat berguna dalam operasional. Lebih optimal di peran yang masih ada dimensi problem-solving teknis, bukan hanya koordinasi."},
    {nama:"IT Project Manager",level:"Mid",fit:"bisa",peran:"Terorganisir dan sistematis dalam mengelola proyek teknis. Energi terbaiknya ada di memecahkan masalah teknis, bukan di koordinasi stakeholder."},
  ]},
"Yasa|Jaga":{
  naratif:"Mereka adalah tulang punggung industri yang membutuhkan keandalan. Di posisi apapun, mereka adalah orang yang bisa dipercaya untuk menghasilkan kualitas yang konsisten — hari demi hari, proyek demi proyek, tanpa perlu diingatkan. Bagi mereka, standar bukan sesuatu yang dinegosiasikan.",
  posisi:[
    {nama:"QA Engineer / Quality Manager",level:"Mid–Senior",fit:"ideal",peran:"Menjaga standar kualitas dengan konsistensi yang tidak tergoyahkan. Tidak akan meloloskan sesuatu yang tidak memenuhi standar, meski ada tekanan deadline."},
    {nama:"Site Manager / Plant Manager",level:"Mid–Senior",fit:"ideal",peran:"Memastikan operasional lapangan berjalan sesuai standar setiap hari. Tim lapangan sangat butuh pemimpin seperti ini — hadir, jelas ekspektasinya, dan bisa diandalkan."},
    {nama:"Maintenance Engineer",level:"Mid",fit:"ideal",peran:"Menjaga mesin dan fasilitas berfungsi optimal dengan jadwal preventif yang disiplin. Tidak menunggu sesuatu rusak untuk bertindak."},
    {nama:"Production Supervisor",level:"Mid",fit:"cocok",peran:"Memimpin tim produksi dengan standar yang konsisten dan ekspektasi yang jelas. Output yang mereka hasilkan bisa diprediksi kualitasnya."},
    {nama:"Safety Officer / HSE Specialist",level:"Mid",fit:"cocok",peran:"Memastikan prosedur keselamatan diikuti dengan ketat. Tidak berkompromi pada keselamatan meski ada tekanan produktivitas."},
    {nama:"Procurement Officer",level:"Mid",fit:"cocok",peran:"Mengelola pengadaan dengan standar dokumentasi dan proses yang tidak berubah-ubah. Vendor tahu apa yang diharapkan dari mereka."},
    {nama:"Technical Trainer",level:"Mid",fit:"bisa",peran:"Bisa menyampaikan keahlian teknis dengan cara yang terstruktur. Namun lebih hidup sebagai praktisi daripada sebagai pengajar."},
    {nama:"General Affairs Supervisor",level:"Mid",fit:"bisa",peran:"Teratur dan bisa diandalkan dalam mengelola fasilitas dan kebutuhan operasional kantor. Lebih optimal jika masih ada dimensi teknis dalam perannya."},
  ]},
"Yasa|Guna":{
  naratif:"Mereka belajar dari lapangan, bukan dari manual. Di posisi apapun, mereka adalah orang yang sudah bergerak saat yang lain masih berdiskusi. Keahlian mereka lahir dari ribuan jam di situasi nyata — dan kemampuan beradaptasi cepat mereka adalah yang paling berharga ketika sesuatu tidak berjalan sesuai rencana.",
  posisi:[
    {nama:"Field Engineer / Field Technician",level:"Entry–Mid",fit:"ideal",peran:"Mendiagnosis dan menyelesaikan masalah teknis di lapangan dengan cepat. Tidak butuh SOP lengkap untuk bertindak — pengalaman dan insting mereka yang bicara."},
    {nama:"Emergency Response / Safety Officer",level:"Mid",fit:"ideal",peran:"Merespons situasi kritis dengan tenang dan cepat. Tidak panik — mengidentifikasi masalah dan bertindak sementara yang lain masih mencari prosedur."},
    {nama:"Technical Operations Manager",level:"Senior",fit:"ideal",peran:"Memimpin operasional teknis yang kompleks dan dinamis. Paling efektif ketika tetap dekat dengan lapangan, bukan duduk di belakang meja."},
    {nama:"Mechanical / Electrical Technician",level:"Entry–Mid",fit:"cocok",peran:"Mengerjakan instalasi, perbaikan, dan pemeliharaan dengan kemampuan problem-solving yang tinggi. Orang yang dipanggil pertama saat ada yang tidak beres."},
    {nama:"Construction Site Supervisor",level:"Mid",fit:"cocok",peran:"Memimpin tim lapangan konstruksi dengan fleksibilitas tinggi. Membuat keputusan cepat saat kondisi berubah tanpa kehilangan arah tujuan."},
    {nama:"Expedition / Outdoor Instructor",level:"Mid",fit:"cocok",peran:"Memimpin kegiatan di alam terbuka dengan ketenangan dan kemampuan membaca situasi yang tajam. Di elemen terbaik mereka di luar ruangan."},
    {nama:"Warehouse Supervisor",level:"Mid",fit:"bisa",peran:"Mampu mengelola operasional gudang dengan responsif terhadap perubahan. Lebih optimal jika ada variasi tantangan teknis, bukan hanya rutinitas logistik."},
    {nama:"Driver / Operator Alat Berat",level:"Entry",fit:"bisa",peran:"Keterampilan teknis dan ketenangan dalam situasi tidak terduga relevan. Potensi terbesar mereka berkembang di peran dengan tantangan yang lebih dinamis."},
  ]},
"Tata|Reka":{
  naratif:"Mereka membangun keteraturan bukan karena itu aturannya — tapi karena mereka tahu sistem yang baik adalah yang membuat hal-hal bermakna bisa terjadi secara konsisten. Di posisi apapun, mereka adalah orang yang memastikan visi bisa dieksekusi dengan andal, tanpa kehilangan nilai yang mendasarinya.",
  posisi:[
    {nama:"Head of Operations / Organizational Development",level:"Senior",fit:"ideal",peran:"Menerjemahkan visi organisasi menjadi sistem dan rencana operasional yang konkret. Alasan organisasi bisa bergerak kohesif tanpa micromanagement."},
    {nama:"Knowledge Management Specialist",level:"Mid",fit:"ideal",peran:"Membangun sistem dokumentasi dan berbagi pengetahuan yang benar-benar digunakan orang. Tidak sekadar mengarsip — memastikan pengetahuan hidup dan accessible."},
    {nama:"Organizational Excellence Manager",level:"Mid–Senior",fit:"ideal",peran:"Memastikan nilai-nilai organisasi tidak hanya terpampang di dinding tapi hidup dalam prosedur dan proses sehari-hari."},
    {nama:"Internal Communications Manager",level:"Mid",fit:"cocok",peran:"Merancang komunikasi internal yang memastikan arah dan nilai organisasi tersampaikan dengan konsisten ke seluruh lapisan."},
    {nama:"Program Manager — Social / NGO",level:"Mid–Senior",fit:"cocok",peran:"Mengelola program dengan sistem yang memastikan dampak yang dijanjikan benar-benar terjadi. Tidak puas dengan program yang hanya bagus di laporan."},
    {nama:"HR / Culture & Engagement Manager",level:"Mid",fit:"cocok",peran:"Membangun sistem engagement yang memastikan nilai-nilai organisasi dirasakan, bukan hanya diumumkan."},
    {nama:"Executive Assistant",level:"Mid",fit:"bisa",peran:"Sangat terorganisir dan mampu mengelola kompleksitas jadwal eksekutif. Energi terbaiknya ada di merancang sistem, bukan di mengeksekusi keperluan orang lain."},
    {nama:"Project Coordinator",level:"Entry–Mid",fit:"bisa",peran:"Teratur dan bisa diandalkan dalam mengelola dokumen dan timeline. Lebih optimal di peran yang memberi ruang untuk merancang sistem, bukan hanya mengikutinya."},
  ]},
"Tata|Logika":{
  naratif:"Mereka tidak hanya menjalankan sistem — mereka mendesain ulang yang sudah ada menjadi lebih baik. Di posisi apapun, mereka adalah orang yang paling credible untuk mengusulkan perubahan karena mereka selalu bisa menjelaskan 'mengapa' dengan logika yang tidak bisa dibantah.",
  posisi:[
    {nama:"Head of Process Excellence / Transformation",level:"Senior",fit:"ideal",peran:"Memimpin transformasi sistem dan proses di seluruh organisasi. Credibilitas tinggi karena bisa menjelaskan 'mengapa' dengan logika yang tidak bisa dibantah."},
    {nama:"Management Consultant",level:"Mid–Senior",fit:"ideal",peran:"Mendiagnosis inefisiensi sistemik dan merancang solusi yang akan benar-benar diimplementasikan. Tidak berhenti di rekomendasi — ingin melihatnya berjalan."},
    {nama:"CFO / Financial Controller",level:"Senior",fit:"ideal",peran:"Membangun sistem keuangan yang andal dan tahan terhadap pertumbuhan. Melihat angka bukan hanya sebagai laporan, tapi sebagai sistem yang bisa dioptimasi."},
    {nama:"Digital Transformation Lead",level:"Senior",fit:"cocok",peran:"Memimpin adopsi teknologi baru dengan pendekatan sistematis yang meminimalisir resistansi. Memahami bahwa transformasi bukan tentang teknologi — tapi tentang sistem kerja."},
    {nama:"Purchasing Manager / Procurement Lead",level:"Mid–Senior",fit:"cocok",peran:"Merancang sistem pengadaan yang efisien, transparan, dan scalable. Menemukan celah pemborosan yang tidak disadari orang lain."},
    {nama:"Strategy Manager",level:"Mid–Senior",fit:"cocok",peran:"Merancang inisiatif strategis yang punya jalur eksekusi yang jelas. Visi tanpa sistem bagi mereka terasa tidak lengkap."},
    {nama:"IT Manager / Systems Administrator",level:"Mid",fit:"bisa",peran:"Kemampuan sistematis relevan untuk mengelola infrastruktur IT. Lebih optimal di peran yang ada dimensi desain dan improvement, bukan hanya pemeliharaan."},
    {nama:"Business Analyst",level:"Mid",fit:"bisa",peran:"Analisis prosesnya tajam. Energi terbaiknya ada di merancang ulang sistem secara menyeluruh, bukan hanya mendokumentasikan yang sudah ada."},
  ]},
"Tata|Jaga":{
  naratif:"Mereka adalah arketipe paling murni dari keandalan organisasi. Di posisi apapun, mereka adalah orang yang membuat semua orang bisa tidur nyenyak — karena tidak ada yang akan terlewat, tidak ada yang akan salah hitung, tidak ada standar yang akan dikompromikan.",
  posisi:[
    {nama:"Financial Controller / Senior Accountant",level:"Mid–Senior",fit:"ideal",peran:"Menjaga integritas keuangan dengan presisi yang tidak tergoyahkan. Tidak ada angka yang salah, tidak ada periode yang terlewat."},
    {nama:"Compliance Officer / Internal Auditor",level:"Mid–Senior",fit:"ideal",peran:"Memastikan organisasi beroperasi sesuai regulasi dan standar internal. Melakukan ini bukan karena takut audit, tapi karena percaya pada nilai integritas sistem."},
    {nama:"Head of Finance / CFO",level:"Senior",fit:"ideal",peran:"Membangun sistem keuangan yang andal untuk jangka panjang. Organisasi yang butuh fondasi finansial yang tidak bisa digoyahkan membutuhkan profil ini."},
    {nama:"Risk Manager / Actuary",level:"Mid–Senior",fit:"cocok",peran:"Memodelkan dan mengelola risiko dengan metodologi yang presisi. Tidak panik menghadapi ketidakpastian — mereka mengkuantifikasinya."},
    {nama:"Purchasing Officer / Vendor Manager",level:"Mid",fit:"cocok",peran:"Mengelola pengadaan dengan standar dokumentasi dan proses yang tidak berubah-ubah. Tidak ada celah dalam sistem procurement mereka."},
    {nama:"Operations Manager — Finance/Admin",level:"Mid–Senior",fit:"cocok",peran:"Memastikan operasional berjalan dengan akurasi tinggi. Fondasi yang memungkinkan bagian lain organisasi bergerak dengan tenang."},
    {nama:"Executive Assistant / Office Manager",level:"Mid",fit:"bisa",peran:"Sangat andal dalam mengelola kompleksitas administratif. Lebih optimal jika ada struktur yang jelas dan tidak terlalu banyak variabel yang tidak terduga."},
    {nama:"Data Entry / Administrative Staff",level:"Entry",fit:"bisa",peran:"Akurasi dan konsistensi relevan untuk pekerjaan berbasis data. Potensi terbesar mereka berkembang di peran dengan tanggung jawab analitis yang lebih besar."},
  ]},
"Tata|Guna":{
  naratif:"Mereka menghargai keteraturan sebagai alat, bukan tujuan. Di posisi apapun, mereka adalah orang yang paling efisien dalam mengeksekusi — mereka tahu aturannya, mereka tahu cara tercepat mencapai tujuan, dan mereka tahu kapan perlu fleksibel tanpa kehilangan arah.",
  posisi:[
    {nama:"Project Manager / PMO Lead",level:"Mid–Senior",fit:"ideal",peran:"Mengelola proyek dengan kompleksitas tinggi dan banyak variabel. Tidak kehilangan arah saat ada perubahan — merespons tanpa kehilangan tujuan."},
    {nama:"Operations Manager",level:"Mid–Senior",fit:"ideal",peran:"Menemukan cara paling efisien untuk mencapai target operasional bahkan saat kondisi tidak ideal. Orang pertama yang dihubungi saat ada masalah operasional."},
    {nama:"Executive Assistant to C-Suite",level:"Mid–Senior",fit:"ideal",peran:"Mengelola prioritas dan agenda eksekutif dengan kombinasi keteraturan dan fleksibilitas taktis. Membuat eksekutif bisa fokus pada hal yang paling penting."},
    {nama:"Sales Coordinator / Sales Operations",level:"Mid",fit:"cocok",peran:"Memastikan mesin penjualan berjalan tanpa hambatan administratif. Tim sales bisa fokus menjual karena back-office dikelola dengan efisien."},
    {nama:"Logistics Coordinator / Supply Chain",level:"Mid",fit:"cocok",peran:"Mengelola alur logistik yang kompleks dengan adaptabilitas tinggi terhadap perubahan. Menemukan solusi ketika rencana awal tidak bisa dijalankan."},
    {nama:"Office Manager / Facility Manager",level:"Mid",fit:"cocok",peran:"Memastikan kantor dan fasilitas berjalan lancar. Responsif terhadap kebutuhan yang muncul tanpa kehilangan pengelolaan yang terstruktur."},
    {nama:"Customer Service Supervisor",level:"Mid",fit:"bisa",peran:"Mampu mengelola tim CS dengan efisien dan responsif. Lebih optimal di peran yang ada dimensi koordinasi dan sistem, bukan hanya pelayanan langsung."},
    {nama:"Purchasing / Procurement Staff",level:"Entry–Mid",fit:"bisa",peran:"Teratur dan efisien dalam mengelola proses pengadaan. Lebih optimal jika ada ruang untuk mengoptimasi proses, bukan hanya menjalankan prosedur yang sudah ada."},
  ]},
};

// ─────────────────────────────────────────────────────────────
// PARAGA DATA — v2
// Key: "Kelompok|Watak" — strictly using Kelompok names (no invented labels)
// Each entry has: en, tags, tagClasses, overview, kekuatan, lingkungan_ideal
// overview = naratif orang ketiga, storytelling
// ─────────────────────────────────────────────────────────────
const PARAGA = {
  // ── KARYA ──
  "Karya|Reka":{
    en:"The Visionary Storyteller",
    tags:["Karya","Bakti","Karsa","Watak Reka"],
    tagClasses:["rtag-orange","rtag-teal","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia tidak sekadar membuat sesuatu — ia membuat sesuatu menjadi bermakna. Di ruang manapun ia masuk, ada energi yang berubah: percakapan menjadi lebih dalam, ide-ide yang tadinya terasa abstrak tiba-tiba punya bentuk dan arah. Ia adalah orang yang melihat audiens sebelum melihat kanvas, dan itulah yang membuat karyanya selalu tepat sasaran.",
      en:"They don't just make things — they make things mean something. In any room they enter, something shifts: conversations go deeper, ideas that felt abstract suddenly have shape and direction. They see the audience before they see the canvas, and that's what makes their work always land."},
    kekuatan:{
      id:["Menerjemahkan visi abstrak menjadi cerita yang bisa dirasakan orang","Memimpin proyek kreatif dengan kepekaan dan arah yang jelas","Membangun koneksi antara karya dan audiens yang paling dalam"],
      en:["Translating abstract vision into stories people can feel","Leading creative projects with sensitivity and clear direction","Building the deepest connection between work and audience"]},
    lingkungan_ideal:{
      id:"Lingkungan kolaboratif yang menghargai orisinalitas dan memberi ruang untuk proses kreatif yang mendalam. Audiens atau komunitas nyata yang karyanya bisa berdampak langsung. Tim kecil dengan kepercayaan tinggi.",
      en:"A collaborative environment that values originality and gives space for deep creative process. A real audience or community where their work can have direct impact. A small team with high trust."}
  },
  "Karya|Logika":{
    en:"The Creative Architect",
    tags:["Karya","Nalar","Watak Logika"],
    tagClasses:["rtag-orange","rtag-teal","rtag-grey"],
    overview:{
      id:"Di balik setiap karya yang ia hasilkan, ada sistem yang solid. Ia bukan hanya seniman — ia adalah perancang sistem kreatif. Ketika orang lain melihat sebuah desain yang indah, ia melihat framework yang bisa direplikasi, proses yang bisa dioptimasi, dan potensi yang bisa diskalakan.",
      en:"Behind every work they produce, there's a solid system. They're not just an artist — they're a designer of creative systems. When others see a beautiful design, they see a replicable framework, an optimizable process, and scalable potential."},
    kekuatan:{
      id:["Membangun sistem dan framework kreatif yang bisa direplikasi","Menganalisis tren estetika dan mengantisipasi arah selanjutnya","Mengintegrasikan data dan intuisi kreatif dalam satu keputusan desain"],
      en:["Building replicable creative systems and frameworks","Analyzing aesthetic trends and anticipating the next direction","Integrating data and creative intuition in one design decision"]},
    lingkungan_ideal:{
      id:"Proyek kreatif dengan kompleksitas dan skala yang sesungguhnya. Akses ke data pengguna atau audiens untuk menginformasikan keputusan kreatif. Lingkungan yang menghargai strategi di balik estetika.",
      en:"Creative projects with real complexity and scale. Access to user or audience data to inform creative decisions. An environment that values the strategy behind aesthetics."}
  },
  "Karya|Jaga":{
    en:"The Master of Craft",
    tags:["Karya","Tata","Watak Jaga"],
    tagClasses:["rtag-orange","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia tidak menunggu inspirasi — ia datang tepat waktu, duduk di tempat kerja, dan mulai bekerja. Di industri yang penuh dengan kreator yang mengandalkan mood, ia adalah anomali yang paling berharga: seseorang yang menghasilkan kualitas tinggi secara konsisten, hari demi hari, tanpa drama.",
      en:"They don't wait for inspiration — they show up on time, sit at their workspace, and start working. In an industry full of mood-dependent creators, they're the most valuable anomaly: someone who delivers high quality consistently, day after day, without drama."},
    kekuatan:{
      id:["Menghasilkan karya berkualitas tinggi dengan konsistensi yang jarang dimiliki kreator lain","Menguasai teknik dan tools kreatif sampai ke tingkat yang paling dalam","Memenuhi deadline kreatif tanpa mengorbankan kualitas"],
      en:["Delivering high-quality work with consistency rare among other creators","Mastering creative techniques and tools to the deepest level","Meeting creative deadlines without sacrificing quality"]},
    lingkungan_ideal:{
      id:"Standar kualitas yang tinggi dan dihargai. Brief yang jelas sehingga energi kreatif bisa dicurahkan sepenuhnya ke eksekusi. Tim yang menghargai keandalan dan presisi.",
      en:"High quality standards that are respected. Clear briefs so creative energy can be fully channeled into execution. A team that values reliability and precision."}
  },
  "Karya|Guna":{
    en:"The Spontaneous Creator",
    tags:["Karya","Karsa","Watak Guna"],
    tagClasses:["rtag-orange","rtag-teal","rtag-grey"],
    overview:{
      id:"Karyanya paling hidup ketika lahir di momen. Ia adalah improviser sejati — responsif, adaptif, dan paling autentik ketika tidak ada skrip. Di saat kreator lain sedang merencanakan, ia sudah berkarya. Hasilnya tidak selalu sempurna secara teknis, tapi selalu terasa nyata.",
      en:"Their work comes most alive when born in the moment. They're a true improviser — responsive, adaptive, and most authentic when there's no script. While other creators are still planning, they're already making. The result isn't always technically perfect, but it always feels real."},
    kekuatan:{
      id:["Menghasilkan karya yang terasa spontan, segar, dan tidak dibuat-buat","Merespons feedback dan kondisi real-time dengan cepat dan natural","Membawa energi dan kehadiran yang nyata ke dalam performa atau presentasi kreatif"],
      en:["Producing work that feels spontaneous, fresh, and genuine","Responding to feedback and real-time conditions quickly and naturally","Bringing real energy and presence to creative performance or presentation"]},
    lingkungan_ideal:{
      id:"Proyek dengan ruang improvisasi yang nyata. Audiens atau klien yang responsif dan bisa diajak berinteraksi langsung. Deadline yang memberikan urgensi tanpa mencekik kreativitas.",
      en:"Projects with real room for improvisation. A responsive audience or client that can be interacted with directly. Deadlines that create urgency without strangling creativity."}
  },

  // ── BAKTI ──
  "Bakti|Reka":{
    en:"The Human Developer",
    tags:["Bakti","Karya","Watak Reka"],
    tagClasses:["rtag-sage","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia melihat potensi di setiap orang bahkan sebelum mereka melihatnya sendiri. Bagi ia, setiap percakapan adalah kesempatan untuk menemukan apa yang tersembunyi di balik ketidakpastian seseorang. Ia tidak hanya membantu — ia melihat, memahami, dan menemani. Dan itulah yang membuat orang-orang kembali padanya.",
      en:"They see potential in every person even before those people see it themselves. For them, every conversation is a chance to find what's hidden behind someone's uncertainty. They don't just help — they see, understand, and accompany. And that's what makes people come back to them."},
    kekuatan:{
      id:["Membangun kepercayaan yang mendalam dengan individu yang mereka dampingi","Mendesain program dan intervensi yang menyentuh akar, bukan hanya gejala","Menjaga kehadiran emosional yang penuh bahkan di situasi yang paling berat"],
      en:["Building deep trust with the individuals they accompany","Designing programs and interventions that address roots, not just symptoms","Maintaining full emotional presence even in the most difficult situations"]},
    lingkungan_ideal:{
      id:"Hubungan jangka panjang yang memungkinkan dampak transformatif yang nyata. Organisasi yang genuinely peduli pada manusia, bukan hanya performa. Ruang refleksi untuk diri sendiri di tengah pekerjaan yang emosionally demanding.",
      en:"Long-term relationships that enable real transformative impact. An organization that genuinely cares about people, not just performance. Space for self-reflection amid emotionally demanding work."}
  },
  "Bakti|Logika":{
    en:"The System of People",
    tags:["Bakti","Nalar","Watak Logika"],
    tagClasses:["rtag-sage","rtag-teal","rtag-grey"],
    overview:{
      id:"Ia peduli pada orang — tapi cara ia menunjukkan kepedulian adalah dengan merancang sistem yang membuat pertumbuhan manusia terjadi secara konsisten. Ia adalah seseorang yang mendekati pengembangan manusia dengan presisi yang sama seperti seorang insinyur mendekati masalah teknis.",
      en:"They care about people — but the way they show that care is by designing systems that make human growth happen consistently. They're someone who approaches human development with the same precision an engineer brings to a technical problem."},
    kekuatan:{
      id:["Merancang sistem people development yang bisa bekerja di skala besar","Menganalisis data SDM untuk menemukan pola dan peluang peningkatan","Membangun framework coaching atau training yang rigorous dan terukur"],
      en:["Designing people development systems that work at scale","Analyzing HR data to find patterns and improvement opportunities","Building rigorous and measurable coaching or training frameworks"]},
    lingkungan_ideal:{
      id:"Organisasi yang serius tentang talent development. Akses ke data dan wewenang untuk membuat keputusan sistemik. Posisi yang memungkinkan pengaruh strategis, bukan hanya operasional.",
      en:"An organization serious about talent development. Access to data and authority to make systemic decisions. A position that allows strategic influence, not just operational."}
  },
  "Bakti|Jaga":{
    en:"The Reliable Guardian",
    tags:["Bakti","Tata","Watak Jaga"],
    tagClasses:["rtag-sage","rtag-plum","rtag-grey"],
    overview:{
      id:"Ia tidak glamor dan tidak mencari pengakuan — ia memastikan sistem berjalan, orang mendapat apa yang mereka butuhkan, dan tidak ada yang terlewat. Di institusi manapun yang melayani manusia, ia adalah alasan kenapa janji-janji yang dibuat di atas bisa sampai ke bawah.",
      en:"They're not glamorous and don't seek recognition — they make sure systems run, people get what they need, and nothing falls through the cracks. In any institution serving people, they're the reason why promises made at the top actually reach the bottom."},
    kekuatan:{
      id:["Membangun proses layanan yang konsisten dan bisa diandalkan","Memastikan kebutuhan individu terpenuhi di tengah sistem yang besar","Menjaga standar etika dan kualitas layanan di bawah tekanan apapun"],
      en:["Building consistent and reliable service processes","Ensuring individual needs are met within large systems","Maintaining ethical standards and service quality under any pressure"]},
    lingkungan_ideal:{
      id:"Institusi dengan mandat sosial yang jelas dan serius. Peran dengan scope yang terdefinisi dan wewenang yang cukup. Tim yang berbagi nilai tentang pelayanan.",
      en:"An institution with a clear and serious social mandate. A role with defined scope and sufficient authority. A team that shares service values."}
  },
  "Bakti|Guna":{
    en:"The Hands-On Helper",
    tags:["Bakti","Karsa","Watak Guna"],
    tagClasses:["rtag-sage","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia tidak menunggu sistem atau prosedur. Ia melihat kebutuhan dan langsung bergerak. Di momen krisis, saat yang lain masih mencari formulir, ia sudah ada di sana — hadir secara fisik, emosional, dan praktis. Kekuatannya bukan di planning jangka panjang, tapi di kehadiran nyata.",
      en:"They don't wait for systems or procedures. They see a need and move. In moments of crisis, while others are still looking for forms, they're already there — physically, emotionally, and practically present. Their strength isn't in long-term planning, but in real presence."},
    kekuatan:{
      id:["Merespons kebutuhan manusia secara langsung dan cepat tanpa birokrasi","Membangun kepercayaan melalui tindakan nyata, bukan kata-kata","Beradaptasi dengan kebutuhan yang berubah-ubah di lapangan"],
      en:["Responding to human needs directly and quickly without bureaucracy","Building trust through real actions, not words","Adapting to constantly changing needs in the field"]},
    lingkungan_ideal:{
      id:"Pekerjaan lapangan yang berinteraksi langsung dengan orang yang dilayani. Lingkungan yang memberikan otonomi untuk bertindak berdasarkan penilaian sendiri. Hasil yang terlihat langsung.",
      en:"Field work that directly interacts with the people being served. An environment that gives autonomy to act based on one's own judgment. Results that are immediately visible."}
  },

  // ── KARSA ──
  "Karsa|Reka":{
    en:"The Vision-Led Entrepreneur",
    tags:["Karsa","Karya","Watak Reka"],
    tagClasses:["rtag-plum","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia memimpin dengan cerita dan visi, bukan dengan jabatan. Orang mengikutinya bukan karena harus, tapi karena mereka merasakan bahwa ada sesuatu yang lebih besar dari diri mereka sendiri di balik apa yang ia bangun. Ia tidak membuat organisasi — ia membuat gerakan.",
      en:"They lead through story and vision, not title. People follow them not because they have to, but because they sense there's something larger than themselves behind what's being built. They don't make organizations — they make movements."},
    kekuatan:{
      id:["Membangun narasi dan visi yang menginspirasi dan menggerakkan orang","Melihat peluang di tempat yang belum dilihat orang lain","Memimpin transformasi budaya organisasi atau komunitas"],
      en:["Building narratives and visions that inspire and move people","Seeing opportunities where others haven't looked","Leading organizational or community culture transformation"]},
    lingkungan_ideal:{
      id:"Zero-to-one energy — membangun dari awal. Tim yang percaya pada misi. Kebebasan untuk menentukan arah, bukan hanya menjalankan instruksi.",
      en:"Zero-to-one energy — building from scratch. A team that believes in the mission. Freedom to determine direction, not just execute instructions."}
  },
  "Karsa|Logika":{
    en:"The Strategic Operator",
    tags:["Karsa","Nalar","Watak Logika"],
    tagClasses:["rtag-plum","rtag-teal","rtag-grey"],
    overview:{
      id:"Ia adalah kombinasi yang paling langka dan paling dicari: seseorang yang bisa melihat gambaran besar sekaligus membangun mesin yang mewujudkannya. Ketika pemimpin lain berhenti di visi, ia sudah merancang sistem eksekusinya. Ketika analis lain berhenti di data, ia sudah bergerak.",
      en:"They're the rarest and most sought-after combination: someone who can see the big picture and simultaneously build the machine that realizes it. When other leaders stop at vision, they're already designing the execution system. When other analysts stop at data, they're already moving."},
    kekuatan:{
      id:["Mengintegrasikan visi jangka panjang dengan eksekusi jangka pendek","Membangun organisasi yang skalabel dan berprestasi tinggi","Mengambil keputusan sulit dengan kepala dingin di bawah tekanan"],
      en:["Integrating long-term vision with short-term execution","Building scalable and high-performing organizations","Making difficult decisions with a cool head under pressure"]},
    lingkungan_ideal:{
      id:"Akuntabilitas tinggi dan otoritas yang setara. Industri yang kompetitif dengan stakes yang nyata. Tim yang bisa ditantang dan tumbuh.",
      en:"High accountability and equal authority. A competitive industry with real stakes. A team that can be challenged and will grow."}
  },
  "Karsa|Jaga":{
    en:"The Institution Builder",
    tags:["Karsa","Tata","Watak Jaga"],
    tagClasses:["rtag-plum","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia memimpin untuk jangka panjang. Bukan spotlight yang ia kejar, tapi warisan. Setiap keputusan yang ia buat mempertimbangkan satu pertanyaan: apakah ini akan membuat institusi ini lebih kuat lima tahun dari sekarang? Ia adalah alasan organisasi bisa bertahan dekade demi dekade.",
      en:"They lead for the long term. Not the spotlight they're after, but the legacy. Every decision they make considers one question: will this make the institution stronger five years from now? They're the reason organizations can survive decade after decade."},
    kekuatan:{
      id:["Membangun sistem tata kelola dan akuntabilitas yang kokoh","Menjaga konsistensi nilai dan standar organisasi di tengah tekanan perubahan","Mengembangkan pemimpin generasi berikutnya secara sistematis"],
      en:["Building solid governance and accountability systems","Maintaining consistency of organizational values and standards amid change pressure","Systematically developing the next generation of leaders"]},
    lingkungan_ideal:{
      id:"Institusi dengan sejarah dan mandat yang jelas. Ekspektasi jangka panjang, bukan hanya quarterly results. Tim yang menghargai stabilitas dan keandalan.",
      en:"An institution with a clear history and mandate. Long-term expectations, not just quarterly results. A team that values stability and reliability."}
  },
  "Karsa|Guna":{
    en:"The Relationship Driver",
    tags:["Karsa","Bakti","Watak Guna"],
    tagClasses:["rtag-plum","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia memimpin dan mempengaruhi melalui koneksi manusia yang genuine. Ia tidak menggunakan teknik persuasi yang dipelajari — ia menggunakan kehadiran nyata, energi yang tulus, dan kemampuan membaca orang yang hampir instingtif. Deal terbaik tidak terjadi di meja — ia yang membuatnya terjadi sebelum itu.",
      en:"They lead and influence through genuine human connection. They don't use learned persuasion techniques — they use real presence, genuine energy, and an almost instinctive ability to read people. The best deals don't happen at the table — they're the one who makes them happen before that."},
    kekuatan:{
      id:["Membangun jaringan dan relasi bisnis yang kuat dan tahan lama","Membaca situasi dan orang dengan cepat dan akurat","Menggerakkan deal atau keputusan melalui kepercayaan personal"],
      en:["Building strong and lasting business networks and relationships","Reading situations and people quickly and accurately","Moving deals or decisions through personal trust"]},
    lingkungan_ideal:{
      id:"High-external interaction — pertemuan, events, negosiasi. Insentif yang terkait langsung dengan hasil. Otonomi dalam mengelola hubungan dan pendekatan.",
      en:"High external interaction — meetings, events, negotiations. Incentives directly tied to results. Autonomy in managing relationships and approaches."}
  },

  // ── NALAR ──
  "Nalar|Reka":{
    en:"The Meaning-Seeker",
    tags:["Nalar","Bakti","Watak Reka"],
    tagClasses:["rtag-teal","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia adalah peneliti yang tidak pernah puas dengan jawaban yang hanya menjawab 'bagaimana'. Ia menggali lebih dalam — mencari makna, implikasi, dan dampak pada manusia di balik setiap data. Temuan ia bukan sekadar angka: ini adalah cerita yang menunggu untuk diceritakan kepada dunia.",
      en:"They're a researcher never satisfied with answers that only address 'how'. They dig deeper — seeking the meaning, implications, and human impact behind every piece of data. Their findings aren't just numbers: they're stories waiting to be told to the world."},
    kekuatan:{
      id:["Menemukan makna yang tersembunyi di balik data dan pola","Mengkomunikasikan insight kompleks dengan cara yang menyentuh orang","Menghubungkan riset dengan dampak manusia yang nyata"],
      en:["Finding hidden meaning behind data and patterns","Communicating complex insights in ways that touch people","Connecting research to real human impact"]},
    lingkungan_ideal:{
      id:"Kebebasan intelektual untuk mengikuti pertanyaan ke mana saja. Kolaborasi dengan orang-orang yang peduli pada dampak, bukan hanya publikasi. Waktu untuk refleksi mendalam.",
      en:"Intellectual freedom to follow questions wherever they lead. Collaboration with people who care about impact, not just publication. Time for deep reflection."}
  },
  "Nalar|Logika":{
    en:"The Pure Analyst",
    tags:["Nalar","Tata","Watak Logika"],
    tagClasses:["rtag-teal","rtag-plum","rtag-grey"],
    overview:{
      id:"Ia adalah arketipe peneliti klasik: seseorang yang mendedikasikan kemampuan kognitifnya untuk memahami bagaimana dunia benar-benar bekerja. Ia tidak tertarik pada kebenaran yang nyaman — ia tertarik pada kebenaran yang akurat. Di tangannya, data bukan angka: ini adalah argumen.",
      en:"They're the classic researcher archetype: someone who dedicates their cognitive abilities to understanding how the world actually works. They're not interested in comfortable truths — they're interested in accurate truths. In their hands, data isn't just numbers: it's an argument."},
    kekuatan:{
      id:["Membangun kerangka analisis yang rigorous dan defensible","Menemukan pola tersembunyi dalam dataset yang kompleks","Menghasilkan kesimpulan yang tahan terhadap kritik paling tajam sekalipun"],
      en:["Building rigorous and defensible analytical frameworks","Finding hidden patterns in complex datasets","Producing conclusions that withstand even the sharpest criticism"]},
    lingkungan_ideal:{
      id:"Akses ke data berkualitas tinggi. Waktu untuk berpikir mendalam tanpa gangguan. Lingkungan yang menghargai akurasi di atas kecepatan.",
      en:"Access to high-quality data. Time to think deeply without interruption. An environment that values accuracy over speed."}
  },
  "Nalar|Jaga":{
    en:"The Methodical Investigator",
    tags:["Nalar","Tata","Watak Jaga"],
    tagClasses:["rtag-teal","rtag-plum","rtag-grey"],
    overview:{
      id:"Ia membangun pengetahuan seperti seorang arsitek membangun gedung: dengan fondasi yang kuat, metodologi yang terstruktur, dan tidak ada satu pun bata yang diletakkan sembarangan. Datanya bersih, prosesnya terdokumentasi, hasilnya dapat direproduksi. Ia adalah penjaga kredibilitas institusi penelitian.",
      en:"They build knowledge like an architect builds a building: with a strong foundation, structured methodology, and not a single brick laid carelessly. Their data is clean, their process documented, their results reproducible. They're the guardian of research institution credibility."},
    kekuatan:{
      id:["Menjalankan penelitian dengan standar metodologi yang ketat","Memastikan data collection dan analisis bebas dari bias prosedural","Mendokumentasikan proses riset dengan presisi yang memungkinkan replikasi"],
      en:["Conducting research with rigorous methodological standards","Ensuring data collection and analysis is free from procedural bias","Documenting research processes with precision that enables replication"]},
    lingkungan_ideal:{
      id:"Protokol penelitian yang jelas. Institusi yang menghargai integritas data. Waktu yang cukup untuk melakukan pekerjaan dengan benar.",
      en:"Clear research protocols. An institution that values data integrity. Enough time to do the work properly."}
  },
  "Nalar|Guna":{
    en:"The Applied Problem-Solver",
    tags:["Nalar","Karsa","Watak Guna"],
    tagClasses:["rtag-teal","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia tidak menganalisis untuk kesenangan intelektual — ia menganalisis karena ada masalah yang perlu dipecahkan. Pendekatannya selalu praktis: apa yang bisa digunakan dari informasi ini? Bagaimana kita menggerakkan ini menjadi sesuatu yang nyata? Insight tanpa aksi baginya terasa seperti pemborosan.",
      en:"They don't analyze for intellectual pleasure — they analyze because there's a problem that needs solving. Their approach is always practical: what can be used from this information? How do we turn this into something real? Insight without action feels like waste to them."},
    kekuatan:{
      id:["Mendiagnosis masalah kompleks secara cepat dan tepat","Mengimplementasikan solusi berbasis data tanpa terjebak di analisis yang berlebihan","Bergerak fleksibel antara investigasi dan eksekusi sesuai kebutuhan"],
      en:["Diagnosing complex problems quickly and accurately","Implementing data-based solutions without getting trapped in over-analysis","Moving flexibly between investigation and execution as needed"]},
    lingkungan_ideal:{
      id:"Masalah nyata yang butuh solusi nyata. Otonomi untuk bergerak dari analisis ke implementasi. Lingkungan yang menghargai hasil lebih dari proses.",
      en:"Real problems that need real solutions. Autonomy to move from analysis to implementation. An environment that values results over process."}
  },

  // ── YASA ──
  "Yasa|Reka":{
    en:"The Visionary Maker",
    tags:["Yasa","Karya","Watak Reka"],
    tagClasses:["rtag-orange","rtag-teal","rtag-grey"],
    overview:{
      id:"Ia adalah perpaduan yang tidak biasa: tertarik pada dunia yang konkret dan terampil, namun memandang setiap proyek melalui lensa makna yang lebih dalam. Ia bukan sekadar membangun — ia membangun dengan visi. Setiap hasil kerjanya mengandung pertanyaan: apakah ini benar-benar berarti sesuatu?",
      en:"They're an unusual combination: drawn to the concrete and skillful world, yet viewing every project through a lens of deeper meaning. They don't just build — they build with vision. Every piece of work they produce carries the question: does this actually mean something?"},
    kekuatan:{
      id:["Menerjemahkan visi abstrak menjadi sesuatu yang nyata dan bisa dipegang","Memberi makna pada pekerjaan teknis yang sering dianggap transaksional","Bekerja dengan penuh dedikasi pada proyek yang mereka percayai"],
      en:["Translating abstract vision into something real and tangible","Giving meaning to technical work often considered transactional","Working with full dedication on projects they believe in"]},
    lingkungan_ideal:{
      id:"Ruang kreatif dengan kebebasan interpretasi. Proyek yang punya dampak nyata pada kehidupan orang. Tim kecil dengan kepercayaan tinggi.",
      en:"A creative space with freedom of interpretation. Projects with real impact on people's lives. A small team with high trust."}
  },
  "Yasa|Logika":{
    en:"The Systems Engineer",
    tags:["Yasa","Nalar","Watak Logika"],
    tagClasses:["rtag-orange","rtag-teal","rtag-grey"],
    overview:{
      id:"Ia adalah insinyur dalam arti paling luas: seseorang yang melihat dunia sebagai sistem yang bisa dioptimasi. Ketika orang lain melihat sebuah mesin, ia melihat apa yang bisa diperbaiki. Ketika orang lain melihat sebuah proses, ia melihat di mana efisiensi bisa ditingkatkan.",
      en:"They're an engineer in the broadest sense: someone who sees the world as a system that can be optimized. When others see a machine, they see what can be improved. When others see a process, they see where efficiency can be increased."},
    kekuatan:{
      id:["Merancang sistem dan proses yang skalabel dan andal","Menemukan inefisiensi yang tidak terlihat orang lain","Mengintegrasikan pemikiran jangka panjang ke dalam keputusan teknis hari ini"],
      en:["Designing scalable and reliable systems and processes","Finding inefficiencies others can't see","Integrating long-term thinking into today's technical decisions"]},
    lingkungan_ideal:{
      id:"Masalah yang kompleks dan belum terpecahkan. Otonomi penuh dalam merancang solusi. Lingkungan yang menghargai kompetensi lebih dari senioritas.",
      en:"Complex and unsolved problems. Full autonomy in designing solutions. An environment that values competence over seniority."}
  },
  "Yasa|Jaga":{
    en:"The Master Craftsperson",
    tags:["Yasa","Tata","Watak Jaga"],
    tagClasses:["rtag-orange","rtag-plum","rtag-grey"],
    overview:{
      id:"Ia adalah tulang punggung setiap industri yang membutuhkan keandalan. Ia membangun dengan standar tinggi, konsisten, dan tidak mudah tergoda oleh shortcut. Bagi ia, kualitas bukan pilihan — ini identitas. Ketika proyek harus benar-benar berfungsi, ia adalah orang yang paling dicari.",
      en:"They're the backbone of every industry that requires reliability. They build to high standards, consistently, and aren't easily tempted by shortcuts. For them, quality isn't a choice — it's an identity. When a project absolutely must work, they're the most sought-after person."},
    kekuatan:{
      id:["Mengeksekusi dengan presisi dan konsistensi yang jarang ditemukan","Membangun standar operasi yang bisa diandalkan orang lain","Menjaga kualitas di bawah tekanan waktu sekalipun"],
      en:["Executing with precision and consistency rarely found in others","Building operational standards others can rely on","Maintaining quality even under time pressure"]},
    lingkungan_ideal:{
      id:"Standar yang jelas dan dihormati. Pekerjaan yang menghasilkan output nyata dan terukur. Tim yang menghargai keandalan di atas segalanya.",
      en:"Clear and respected standards. Work that produces real and measurable output. A team that values reliability above all."}
  },
  "Yasa|Guna":{
    en:"The Field Expert",
    tags:["Yasa","Karsa","Watak Guna"],
    tagClasses:["rtag-orange","rtag-plum","rtag-grey"],
    overview:{
      id:"Ia adalah praktisi sejati. Ia belajar dengan melakukan, bukan dengan membaca manual. Ketika ada masalah di lapangan, ia sudah bergerak sementara yang lain masih berdiskusi. Keahliannya bukan dari teori — tapi dari ribuan jam di tempat kerja yang nyata.",
      en:"They're a true practitioner. They learn by doing, not by reading manuals. When there's a problem in the field, they're already moving while others are still discussing. Their expertise doesn't come from theory — it comes from thousands of hours in real workplaces."},
    kekuatan:{
      id:["Diagnosa dan solusi masalah teknis secara cepat dan tepat","Beradaptasi dengan kondisi lapangan yang tidak terduga","Membangun kepercayaan tim melalui kompetensi langsung yang terlihat"],
      en:["Diagnosing and solving technical problems quickly and accurately","Adapting to unexpected field conditions","Building team trust through visible direct competence"]},
    lingkungan_ideal:{
      id:"Pekerjaan lapangan dengan tantangan yang bervariasi. Otonomi dalam menentukan cara terbaik menyelesaikan masalah. Lingkungan yang menghargai skill lebih dari gelar.",
      en:"Field work with varied challenges. Autonomy in determining the best way to solve problems. An environment that values skill over credentials."}
  },

  // ── TATA ──
  "Tata|Reka":{
    en:"The Purpose-Driven Organizer",
    tags:["Tata","Bakti","Watak Reka"],
    tagClasses:["rtag-plum","rtag-sage","rtag-grey"],
    overview:{
      id:"Ia membangun keteraturan bukan karena itu aturannya — tapi karena ia tahu bahwa tanpa struktur yang baik, hal-hal yang bermakna tidak bisa terjadi secara konsisten. Ia adalah orang yang memastikan visi orang lain bisa dieksekusi dengan andal, sambil menjaga nilai yang mendasarinya.",
      en:"They build order not because it's the rule — but because they know that without good structure, the things that matter can't happen consistently. They're the person who ensures others' visions can be executed reliably, while maintaining the underlying values."},
    kekuatan:{
      id:["Membangun sistem yang melayani manusia, bukan sebaliknya","Menghubungkan proses operasional dengan tujuan yang lebih besar","Menjaga integritas nilai organisasi dalam desain sistem dan prosedur"],
      en:["Building systems that serve people, not the other way around","Connecting operational processes to bigger purposes","Maintaining organizational value integrity in system and procedure design"]},
    lingkungan_ideal:{
      id:"Organisasi dengan misi yang jelas dan genuine. Kepercayaan untuk mendesain sistem secara mandiri. Tim yang menghargai keteraturan yang bermakna.",
      en:"An organization with a clear and genuine mission. Trust to design systems independently. A team that values meaningful order."}
  },
  "Tata|Logika":{
    en:"The Systems Innovator",
    tags:["Tata","Nalar","Watak Logika"],
    tagClasses:["rtag-plum","rtag-teal","rtag-grey"],
    overview:{
      id:"Ia tidak hanya menjalankan sistem — ia mendesain ulang yang sudah ada menjadi lebih baik. Ketidakefisienan bukan hanya mengganggu ia secara estetika — ini adalah masalah yang harus dipecahkan. Ia adalah konsultan yang dibutuhkan organisasi sebelum mereka tahu mereka membutuhkannya.",
      en:"They don't just run systems — they redesign existing ones to make them better. Inefficiency doesn't just bother them aesthetically — it's a problem that must be solved. They're the consultant organizations need before they know they need one."},
    kekuatan:{
      id:["Mendiagnosis inefisiensi sistemik dengan cepat dan akurat","Merancang ulang proses yang lebih efisien, skalabel, dan andal","Mengimplementasikan transformasi sistem dengan resistansi perubahan minimal"],
      en:["Diagnosing systemic inefficiencies quickly and accurately","Redesigning more efficient, scalable, and reliable processes","Implementing system transformations with minimal change resistance"]},
    lingkungan_ideal:{
      id:"Organisasi dengan masalah nyata yang butuh solusi sistemik. Wewenang untuk mengubah, bukan hanya merekomendasikan. Lingkungan yang menghargai perbaikan lebih dari kepatuhan.",
      en:"An organization with real problems needing systemic solutions. Authority to change, not just recommend. An environment that values improvement over compliance."}
  },
  "Tata|Jaga":{
    en:"The Reliable Foundation",
    tags:["Tata","Yasa","Watak Jaga"],
    tagClasses:["rtag-plum","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia adalah arketipe paling murni dari keandalan. Ia membuat organisasi bisa berfungsi hari demi hari, tanpa drama, tanpa kesalahan, tanpa kejutan. Kekuatannya tidak terlihat saat digunakan dengan baik — baru terlihat saat tidak ada. Dan ketika tidak ada, semuanya mulai goyah.",
      en:"They're the purest archetype of reliability. They make organizations function day after day, without drama, without mistakes, without surprises. Their strength isn't visible when it's working well — it only becomes visible when it's absent. And when it's absent, everything starts to wobble."},
    kekuatan:{
      id:["Menjaga sistem berjalan dengan presisi dan konsistensi yang tidak tertandingi","Membangun dan mendokumentasikan proses yang bisa diikuti siapapun","Menjadi titik kepercayaan organisasi untuk urusan compliance dan akurasi"],
      en:["Keeping systems running with unmatched precision and consistency","Building and documenting processes anyone can follow","Becoming the organization's trust point for compliance and accuracy matters"]},
    lingkungan_ideal:{
      id:"Peran yang jelas dengan ekspektasi yang konsisten. Pekerjaan yang menghasilkan output yang terukur. Lingkungan yang menghargai akurasi dan keandalan.",
      en:"A clear role with consistent expectations. Work that produces measurable output. An environment that values accuracy and reliability."}
  },
  "Tata|Guna":{
    en:"The Pragmatic Executor",
    tags:["Tata","Karsa","Watak Guna"],
    tagClasses:["rtag-plum","rtag-orange","rtag-grey"],
    overview:{
      id:"Ia menghargai keteraturan bukan sebagai tujuan, tapi sebagai alat. Ia adalah implementer yang paling efisien: ia tahu aturannya, ia tahu shortcut-nya, dan ia tahu mana yang perlu dijaga dan mana yang bisa difleksibel. Hasilnya selalu tepat sasaran — dengan cara paling efisien yang bisa ditemukan.",
      en:"They value order not as a goal, but as a tool. They're the most efficient implementer: they know the rules, they know the shortcuts, and they know what needs to be maintained and what can be flexible. The result is always on target — by the most efficient means they can find."},
    kekuatan:{
      id:["Mengeksekusi tugas administratif dan operasional dengan cepat dan akurat","Menemukan cara paling efisien untuk menyelesaikan proses yang kompleks","Beradaptasi dengan perubahan prosedur tanpa kehilangan akurasi"],
      en:["Executing administrative and operational tasks quickly and accurately","Finding the most efficient way to complete complex processes","Adapting to procedural changes without losing accuracy"]},
    lingkungan_ideal:{
      id:"Lingkungan dengan struktur yang jelas tapi cukup fleksibel untuk improvisasi taktis. Output yang terlihat dan terukur. Otonomi dalam menentukan cara terbaik mencapai target.",
      en:"An environment with clear structure but flexible enough for tactical improvisation. Visible and measurable output. Autonomy in determining the best way to reach targets."}
  },
};

// Kelompok color mapping for graph
const KELOMPOK_COLORS = {
  Yasa:  { bar:"#D4875A", bg:"#FEF0E8" },
  Nalar: { bar:"#5A8DB0", bg:"#E8F0FE" },
  Karya: { bar:"#E07A3A", bg:"#FEF2EA" },
  Bakti: { bar:"#5FAE82", bg:"#EAF5EE" },
  Karsa: { bar:"#8B7EC8", bg:"#F0EDF9" },
  Tata:  { bar:"#8A8A6A", bg:"#F5F5E8" },
};

const KELOMPOK_LABELS = {
  Yasa:  { id:"Yasa · Membangun",    en:"Yasa · Building" },
  Nalar: { id:"Nalar · Meneliti",    en:"Nalar · Investigating" },
  Karya: { id:"Karya · Mencipta",    en:"Karya · Creating" },
  Bakti: { id:"Bakti · Melayani",    en:"Bakti · Serving" },
  Karsa: { id:"Karsa · Memimpin",    en:"Karsa · Leading" },
  Tata:  { id:"Tata · Menata",       en:"Tata · Organizing" },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PERAN_IDEAL: PERAN_IDEAL, PARAGA: PARAGA,
                     KELOMPOK_COLORS: KELOMPOK_COLORS, KELOMPOK_LABELS: KELOMPOK_LABELS };
}
