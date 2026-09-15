/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — DATABASE JURUSAN
   LENGKAP — 120 jurusan, keenam Kelompok lolos ambang tayang.

   FIELD `perpaduan` DITAMBAHKAN
   Satu jurusan sering melayani lebih dari satu perpaduan, dan itu tidak
   tertangkap oleh pasangan kelompok_1/kelompok_2 saja. Keperawatan melayani
   Bakti|Yasa DAN Yasa|Bakti: bedanya ada pada minat mana yang dominan pada
   PESERTA, bukan pada jurusannya.

   Tanpa field ini, 11 dari 30 perpaduan hanya punya satu atau dua jurusan,
   dan empat di antaranya kosong sama sekali.

   ═══ AMBANG MINIMUM SEBELUM TAYANG ═══
   Jangan tayang sebelum tiap Kelompok punya minimal 20 jurusan. Di bawah
   itu akan ada peserta yang mendapat daftar tipis, dan daftar tipis lebih
   merugikan daripada tidak ada daftar sama sekali: peserta menyimpulkan
   alatnya dangkal, bukan menyimpulkan databasenya belum lengkap.

   ═══ KEJUJURAN YANG DIPEGANG ═══
   Kecocokan jurusan hampir seluruhnya ditentukan KELOMPOK, bukan Watak.
   Yasa Reka dan Yasa Jaga sama-sama cocok di Teknik Sipil. Memaksakan
   daftar jurusan yang berbeda untuk keduanya adalah presisi palsu, dan
   orang yang paham akan melihatnya.

   Maka: jurusan dicocokkan lewat Kelompok, lalu `watak_condong` menjelaskan
   KE MANA peserta akan condong DI DALAM jurusan itu. Tetap terasa personal,
   dan tetap benar.

   ═══ YANG TIDAK BOLEH DIMASUKKAN ═══
   Kisaran gaji, prospek kerja, peringkat kampus, nilai ambang SNBT. Semua
   itu basi dalam hitungan bulan dan paling merusak kredibilitas bila salah.
   Lakon tahu minat; Lakon tidak tahu biaya kuliah, jarak dari rumah, nilai
   rapor, atau keadaan keluarga. Kalimatnya "jurusan yang cocok dengan
   minatmu", bukan "jurusan yang sebaiknya kamu ambil".

   ═══ KETENTUAN ISI ═══
   - Nomenklatur mengikuti penamaan resmi yang dipakai kampus di Indonesia.
   - Jalur vokasi D3/D4 wajib disertakan. Hampir tidak ada alat asesmen
     karir di Indonesia yang menggarapnya serius, padahal segmennya besar.
   - Field `catatan` berisi hal yang biasanya tidak diketahui pendaftar.
     Itu bagian yang membuat orang tua merasa alat ini jujur.
   - Tinjau ulang setahun sekali.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_JURUSAN = [

{ id: "j001", nama: "Desain Komunikasi Visual", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Karsa",
  perpaduan: ["Karya|Karsa", "Karya|Tata"],
  watak_condong: {
    Reka:   "arah konsep dan penceritaan merek",
    Logika: "arah sistem desain dan strategi visual",
    Jaga:   "arah produksi dan penjagaan standar visual",
    Guna:   "arah konten cepat dan kerja lapangan" },
  catatan: { id: "Beban studionya besar dan penilaiannya subjektif. Cocok bagi yang tahan karyanya dikritik terbuka.",
             en: "Heavy studio load and subjective assessment. Suits those who can take open critique of their work." } },

{ id: "j002", nama: "Teknik Sipil", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar", "Karsa|Yasa"],
  watak_condong: {
    Reka:   "arah perancangan dan dampak sosial bangunan",
    Logika: "arah analisis struktur dan optimasi",
    Jaga:   "arah pengawasan mutu dan pelaksanaan",
    Guna:   "arah lapangan dan penyelesaian masalah di lokasi" },
  catatan: { id: "Banyak hitungan di tiga tahun pertama sebelum menyentuh proyek nyata.",
             en: "Heavy calculation in the first three years before touching real projects." } },

{ id: "j003", nama: "Psikologi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar"],
  watak_condong: {
    Reka:   "arah konseling dan pendampingan",
    Logika: "arah psikologi industri dan pengukuran",
    Jaga:   "arah asesmen dan praktik terstruktur",
    Guna:   "arah intervensi lapangan dan krisis" },
  catatan: { id: "Lebih banyak statistik dan metodologi daripada yang dibayangkan kebanyakan pendaftar.",
             en: "More statistics and methodology than most applicants expect." } },

{ id: "j004", nama: "Teknologi Pangan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa"],
  watak_condong: {
    Reka:   "arah pengembangan produk dan makna gizi",
    Logika: "arah riset formulasi dan daya simpan",
    Jaga:   "arah keamanan pangan dan penjaminan mutu",
    Guna:   "arah produksi dan pemecahan masalah pabrik" },
  catatan: { id: "Salah satu jalur paling langsung ke industri kuliner tanpa lewat dapur.",
             en: "One of the most direct routes into the food industry without going through a kitchen." } },

{ id: "j005", nama: "Seni Kuliner", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Karya",
  perpaduan: ["Yasa|Karya", "Yasa|Karsa"],
  watak_condong: {
    Reka:   "arah konsep menu dan cerita hidangan",
    Logika: "arah standardisasi resep dan biaya",
    Jaga:   "arah konsistensi dan manajemen dapur",
    Guna:   "arah lini panas dan operasional harian" },
  catatan: { id: "Praktik jauh lebih banyak daripada teori. Jalur cepat ke kerja, bukan ke riset.",
             en: "Far more practice than theory. A fast route to work, not to research." } },

{ id: "j006", nama: "Akuntansi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar"],
  watak_condong: {
    Reka:   "arah akuntansi sektor sosial dan keberlanjutan",
    Logika: "arah analisis keuangan dan sistem",
    Jaga:   "arah audit dan kepatuhan",
    Guna:   "arah akuntansi operasional dan perpajakan praktis" },
  catatan: { id: "Jalur karirnya paling terpetakan di antara jurusan Soshum, termasuk sertifikasi profesinya.",
             en: "Among Soshum majors, its career path is the most clearly mapped, certifications included." } },

{ id: "j007", nama: "Keperawatan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Yasa",
  perpaduan: ["Bakti|Yasa", "Yasa|Bakti", "Bakti|Nalar", "Bakti|Tata"],
  watak_condong: {
    Reka:   "arah pendampingan pasien dan edukasi keluarga",
    Logika: "arah keperawatan berbasis bukti dan manajemen kasus",
    Jaga:   "arah perawatan yang standarnya terjaga",
    Guna:   "arah gawat darurat dan tindakan cepat" },
  catatan: { id: "Beban emosionalnya nyata dan jarang dibicarakan sebelum masuk.",
             en: "The emotional load is real and rarely discussed before enrolling." } },

{ id: "j008", nama: "Manajemen", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah pemasaran dan pembangunan merek",
    Logika: "arah strategi dan keuangan korporat",
    Jaga:   "arah operasional dan manajemen mutu",
    Guna:   "arah penjualan dan pengembangan usaha lapangan" },
  catatan: { id: "Sangat luas, jadi arahnya baru terbentuk dari magang dan kegiatan, bukan dari kuliahnya.",
             en: "Very broad, so direction comes from internships and activities rather than from coursework." } },

{ id: "j009", nama: "Teknik Mesin", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar", "Yasa|Tata"],
  watak_condong: {
    Reka:   "arah rancang produk dan energi terbarukan",
    Logika: "arah perancangan sistem dan efisiensi",
    Jaga:   "arah pemeliharaan terjadwal dan keandalan",
    Guna:   "arah perbaikan lapangan dan operasi mesin" },
  catatan: { id: "Bengkel dan praktikum sejak semester awal. Jalur langsung ke industri manufaktur dan energi.",
             en: "Workshop and lab work from the first semesters. A direct route into manufacturing and energy." } },

{ id: "j010", nama: "Ilmu Komunikasi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Bakti",
  perpaduan: ["Karya|Bakti", "Nalar|Karya", "Karya|Nalar"],
  watak_condong: {
    Reka:   "arah penceritaan dan kampanye bermakna",
    Logika: "arah riset audiens dan strategi media",
    Jaga:   "arah hubungan masyarakat dan komunikasi korporat",
    Guna:   "arah produksi konten dan peliputan lapangan" },
  catatan: { id: "Peminatannya sangat menentukan. Dua lulusan dari kampus yang sama bisa berakhir di dunia yang berbeda.",
             en: "The concentration matters enormously. Two graduates from the same campus can end up in different worlds." } }
,

/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK YASA · Realistic
   Membangun, memperbaiki, mengerjakan yang nyata dengan keahlian.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j011", nama: "Teknik Mesin", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah desain produk dan teknologi tepat guna",
    Logika: "arah analisis termal, material, dan optimasi",
    Jaga:   "arah keandalan mesin dan pemeliharaan terjadwal",
    Guna:   "arah manufaktur dan penanganan masalah di lini produksi" },
  catatan: { id: "Dua tahun pertama hampir seluruhnya fisika dan matematika, bukan bengkel. Banyak yang kaget di semester tiga.",
             en: "The first two years are nearly all physics and maths, not workshop. Many are surprised in semester three." } },

{ id: "j012", nama: "Teknik Elektro", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah energi terbarukan dan akses listrik desa",
    Logika: "arah kendali, sinyal, dan perancangan sistem",
    Jaga:   "arah keandalan jaringan dan standar keselamatan",
    Guna:   "arah instalasi, pengujian, dan perbaikan lapangan" },
  catatan: { id: "Percabangannya lebar: arus kuat, elektronika, telekomunikasi, kendali. Pilihan peminatan biasanya baru di semester lima.",
             en: "It branches widely: power, electronics, telecoms, control. Specialisation is usually only chosen in semester five." } },

{ id: "j013", nama: "Teknik Industri", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Tata",
  perpaduan: ["Yasa|Tata", "Karsa|Yasa"],
  watak_condong: {
    Reka:   "arah ergonomi dan perancangan kerja yang manusiawi",
    Logika: "arah riset operasi dan optimasi sistem",
    Jaga:   "arah penjaminan mutu dan sistem manajemen",
    Guna:   "arah perbaikan proses langsung di lantai produksi" },
  catatan: { id: "Paling sedikit menyentuh alat di antara jurusan teknik. Isinya sistem, data, dan orang, bukan mesin.",
             en: "Touches tools least among engineering courses. It is about systems, data, and people rather than machines." } },

{ id: "j014", nama: "Arsitektur", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Karya",
  perpaduan: ["Yasa|Karya", "Karya|Yasa"],
  watak_condong: {
    Reka:   "arah arsitektur yang berangkat dari makna dan konteks",
    Logika: "arah sistem bangunan dan rasionalisasi rancangan",
    Jaga:   "arah dokumen teknis dan pengawasan pelaksanaan",
    Guna:   "arah kerja lapangan dan penyelesaian di lokasi" },
  catatan: { id: "Beban studio sangat besar dan karyamu dikritik terbuka tiap minggu. Yang berat bukan gambarnya, melainkan ritmenya.",
             en: "The studio load is very heavy and your work is critiqued openly each week. The difficulty is the rhythm, not the drawing." } },

{ id: "j015", nama: "Teknik Kimia", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah proses hijau dan teknologi berdampak lingkungan",
    Logika: "arah pemodelan proses dan perancangan pabrik",
    Jaga:   "arah keselamatan proses dan penjaminan mutu",
    Guna:   "arah operasi pabrik dan penanganan gangguan proses" },
  catatan: { id: "Berbeda jauh dari Kimia murni. Isinya perancangan pabrik dan neraca massa, bukan percobaan di laboratorium.",
             en: "Very different from pure Chemistry. It is plant design and mass balance, not lab experiments." } },

{ id: "j016", nama: "Teknik Lingkungan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar", "Yasa|Bakti"],
  watak_condong: {
    Reka:   "arah keadilan lingkungan dan pendampingan masyarakat",
    Logika: "arah pemodelan pencemaran dan rancangan pengolahan",
    Jaga:   "arah kepatuhan regulasi dan pemantauan mutu",
    Guna:   "arah pengambilan sampel dan operasi instalasi" },
  catatan: { id: "Banyak kerja lapangan dan berurusan dengan limbah nyata. Bukan jurusan untuk yang membayangkan kerja kantoran hijau.",
             en: "Much fieldwork and real waste. Not for those picturing a clean green office job." } },

{ id: "j017", nama: "Teknik Geologi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah mitigasi bencana dan keselamatan warga",
    Logika: "arah pemodelan bawah permukaan dan interpretasi data",
    Jaga:   "arah pemetaan sistematis dan dokumentasi cadangan",
    Guna:   "arah survei lapangan dan pengambilan contoh batuan" },
  catatan: { id: "Kuliah lapangan berminggu-minggu di daerah terpencil adalah bagian wajib, bukan pilihan.",
             en: "Weeks of fieldwork in remote areas is compulsory, not optional." } },

{ id: "j018", nama: "Teknik Perkapalan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah rancangan kapal untuk kebutuhan kepulauan",
    Logika: "arah hidrodinamika dan analisis struktur kapal",
    Jaga:   "arah klasifikasi, sertifikasi, dan mutu galangan",
    Guna:   "arah produksi dan reparasi di galangan" },
  catatan: { id: "Lapangan kerjanya terpusat di kota pelabuhan besar. Perlu siap pindah kota sejak magang.",
             en: "Work is concentrated in major port cities. Be ready to relocate from internship onward." } },

{ id: "j019", nama: "Agroteknologi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar", "Karya|Yasa"],
  watak_condong: {
    Reka:   "arah pertanian berkelanjutan dan pemberdayaan petani",
    Logika: "arah pemuliaan tanaman dan riset budidaya",
    Jaga:   "arah sertifikasi benih dan penjaminan mutu hasil",
    Guna:   "arah pengelolaan lahan dan penanganan hama di lapangan" },
  catatan: { id: "Sebagian besar praktikum di kebun percobaan, bukan laboratorium. Panas, kotor, dan berjadwal mengikuti musim tanam.",
             en: "Most practicals are in experimental fields rather than labs. Hot, dirty, and scheduled around planting seasons." } },

{ id: "j020", nama: "Peternakan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah kesejahteraan hewan dan peternakan rakyat",
    Logika: "arah nutrisi ternak dan pemuliaan genetik",
    Jaga:   "arah biosekuriti dan mutu produk ternak",
    Guna:   "arah pengelolaan kandang dan penanganan ternak langsung" },
  catatan: { id: "Menyentuh dan menangani hewan besar adalah bagian rutin, termasuk saat sakit dan saat dipotong.",
             en: "Handling large animals is routine, including when they are ill and at slaughter." } },

{ id: "j021", nama: "Kehutanan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah konservasi dan hutan bersama masyarakat adat",
    Logika: "arah inventarisasi, pemodelan tegakan, dan perencanaan",
    Jaga:   "arah tata kelola kawasan dan penegakan aturan",
    Guna:   "arah patroli, pemetaan lapangan, dan penanganan kebakaran" },
  catatan: { id: "Penempatan kerja sering jauh dari kota dan sinyal. Itu bagian dari pekerjaannya, bukan kebetulan.",
             en: "Postings are often far from cities and signal. That is part of the job, not an accident." } },

{ id: "j022", nama: "Perencanaan Wilayah dan Kota", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Tata",
  perpaduan: ["Yasa|Tata", "Yasa|Karya"],
  watak_condong: {
    Reka:   "arah kota yang berpihak pada warga kecil",
    Logika: "arah analisis spasial dan pemodelan pertumbuhan kota",
    Jaga:   "arah penyusunan rencana tata ruang dan kepatuhannya",
    Guna:   "arah survei lapangan dan pendampingan pelaksanaan" },
  catatan: { id: "Hasil kerjanya baru terasa lima sampai sepuluh tahun kemudian. Perlu tahan pada umpan balik yang sangat lambat.",
             en: "Results only show after five to ten years. You need tolerance for very slow feedback." } },

{ id: "j023", nama: "Teknologi Rekayasa Konstruksi Bangunan Gedung", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Tata",
  perpaduan: ["Yasa|Tata", "Karsa|Yasa", "Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah bangunan yang layak huni dan terjangkau",
    Logika: "arah metode kerja dan efisiensi pelaksanaan",
    Jaga:   "arah pengawasan mutu dan keselamatan konstruksi",
    Guna:   "arah pelaksanaan langsung dan penyelesaian di lokasi" },
  catatan: { id: "Lebih cepat siap kerja daripada S1 Teknik Sipil, dengan porsi praktik jauh lebih besar. Jalur lanjut ke S2 terapan tetap terbuka.",
             en: "Job-ready faster than a Civil Engineering degree, with far more practice. A path to an applied master's remains open." } },

{ id: "j024", nama: "Teknologi Rekayasa Otomotif", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar", "Yasa|Karsa"],
  watak_condong: {
    Reka:   "arah kendaraan listrik dan mobilitas yang lebih bersih",
    Logika: "arah diagnostik sistem dan rekayasa performa",
    Jaga:   "arah standar bengkel dan pemeliharaan berkala",
    Guna:   "arah perbaikan langsung dan diagnosis cepat" },
  catatan: { id: "Sertifikasi pabrikan sering lebih menentukan daripada ijazah. Cari kampus yang punya kemitraan resmi dengan merek.",
             en: "Manufacturer certification often matters more than the diploma. Look for campuses with official brand partnerships." } },

{ id: "j025", nama: "Teknik Listrik", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Tata",
  perpaduan: ["Yasa|Tata", "Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah kelistrikan untuk daerah yang belum terjangkau",
    Logika: "arah perancangan instalasi dan efisiensi daya",
    Jaga:   "arah keselamatan kelistrikan dan pemeriksaan berkala",
    Guna:   "arah instalasi, pengujian, dan penanganan gangguan" },
  catatan: { id: "Sertifikat kompetensi ketenagalistrikan lebih dicari daripada nilai akhir. Urus sejak masih kuliah.",
             en: "Electrical competency certification is sought after more than final grades. Arrange it while still studying." } },

{ id: "j026", nama: "Agribisnis", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Yasa", kelompok_2: "Karsa",
  perpaduan: ["Yasa|Karsa", "Karsa|Yasa", "Yasa|Tata"],
  watak_condong: {
    Reka:   "arah usaha tani yang berpihak pada petani kecil",
    Logika: "arah rantai pasok dan analisis usaha tani",
    Jaga:   "arah mutu hasil panen dan ketertelusuran",
    Guna:   "arah pemasaran lapangan dan pengelolaan kebun" },
  catatan: { id: "Menggabungkan pertanian dan usaha. Cocok bagi yang ingin punya usaha sendiri, bukan hanya bekerja di perusahaan.",
             en: "Combines farming and business. Suits those who want their own venture rather than only employment." } },


/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK NALAR · Investigative
   Menelusuri, menganalisis, memahami sebab.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j027", nama: "Matematika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata"],
  watak_condong: {
    Reka:   "arah pengajaran matematika dan pemodelan isu sosial",
    Logika: "arah matematika murni dan pembuktian",
    Jaga:   "arah aktuaria dan pemodelan risiko yang terdokumentasi",
    Guna:   "arah matematika terapan dan analisis data praktis" },
  catatan: { id: "Berbeda jauh dari matematika SMA. Isinya membuktikan, bukan menghitung, dan itu keterampilan yang berbeda.",
             en: "Very different from school maths. It is about proving rather than calculating, a different skill entirely." } },

{ id: "j028", nama: "Statistika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata", "Nalar|Karya", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah statistika sosial dan riset kebijakan",
    Logika: "arah pemodelan dan pengembangan metode",
    Jaga:   "arah pengendalian mutu dan survei resmi",
    Guna:   "arah analitik bisnis dan data yang langsung dipakai" },
  catatan: { id: "Salah satu jurusan dengan permintaan paling luas lintas industri, tapi menuntut ketekunan pada detail yang membosankan.",
             en: "One of the most widely demanded fields across industries, but it demands patience with tedious detail." } },

{ id: "j029", nama: "Informatika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah teknologi untuk pendidikan dan dampak sosial",
    Logika: "arah algoritma, kecerdasan buatan, dan arsitektur sistem",
    Jaga:   "arah keamanan siber dan keandalan sistem",
    Guna:   "arah pengembangan aplikasi dan penyelesaian bug" },
  catatan: { id: "Belajar mandiri di luar kelas menentukan hasilnya lebih besar daripada kurikulumnya sendiri.",
             en: "Self-directed learning outside class shapes the outcome more than the curriculum does." } },

{ id: "j030", nama: "Fisika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa"],
  watak_condong: {
    Reka:   "arah pengajaran fisika dan komunikasi sains",
    Logika: "arah fisika teoretis dan pemodelan",
    Jaga:   "arah instrumentasi dan pengukuran presisi",
    Guna:   "arah fisika terapan dan pengembangan alat" },
  catatan: { id: "Jalur kerjanya jarang langsung. Sebagian besar lulusan berbelok ke data, keuangan, atau lanjut S2.",
             en: "The career path is rarely direct. Most graduates move into data, finance, or continue to a master's." } },

{ id: "j031", nama: "Kimia", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa"],
  watak_condong: {
    Reka:   "arah kimia lingkungan dan isu keberlanjutan",
    Logika: "arah sintesis, karakterisasi, dan riset material",
    Jaga:   "arah analisis mutu dan laboratorium terakreditasi",
    Guna:   "arah kimia terapan di industri dan pengujian rutin" },
  catatan: { id: "Waktu di laboratorium sangat panjang dan jadwalnya tidak selalu bisa diatur sendiri.",
             en: "Lab hours are long and the schedule is not always yours to set." } },

{ id: "j032", nama: "Biologi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Bakti",
  perpaduan: ["Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah konservasi dan pendidikan lingkungan",
    Logika: "arah biologi molekuler dan riset dasar",
    Jaga:   "arah taksonomi, koleksi, dan kerja laboratorium terstruktur",
    Guna:   "arah kerja lapangan dan pengamatan ekologi" },
  catatan: { id: "Sangat luas, dari molekul sampai ekosistem. Tanpa memilih peminatan sejak awal, mudah tersesat di tengah.",
             en: "Very broad, from molecules to ecosystems. Without choosing a focus early, it is easy to drift." } },

{ id: "j033", nama: "Farmasi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Bakti",
  perpaduan: ["Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah farmasi komunitas dan edukasi pasien",
    Logika: "arah pengembangan obat dan farmakologi",
    Jaga:   "arah kendali mutu, registrasi, dan kepatuhan regulasi",
    Guna:   "arah pelayanan apotek dan farmasi rumah sakit" },
  catatan: { id: "Untuk menjadi apoteker perlu satu tahun profesi setelah S1. Rencanakan sejak awal, bukan dipikirkan di semester akhir.",
             en: "Becoming a pharmacist needs a year of professional training after the degree. Plan for it early." } },

{ id: "j034", nama: "Kedokteran", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Bakti",
  perpaduan: ["Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah kedokteran keluarga dan pendampingan pasien",
    Logika: "arah diagnostik kompleks dan riset klinis",
    Jaga:   "arah praktik berbasis protokol dan keselamatan pasien",
    Guna:   "arah gawat darurat dan tindakan cepat" },
  catatan: { id: "Total pendidikan sampai bisa praktik mandiri sekitar enam tahun, belum termasuk spesialis. Biayanya besar dan waktunya panjang.",
             en: "Around six years before independent practice, before any specialisation. The cost and time are substantial." } },

{ id: "j035", nama: "Kesehatan Masyarakat", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Bakti",
  perpaduan: ["Nalar|Bakti", "Yasa|Bakti"],
  watak_condong: {
    Reka:   "arah promosi kesehatan dan pemberdayaan komunitas",
    Logika: "arah epidemiologi dan analisis data kesehatan",
    Jaga:   "arah administrasi kebijakan dan sistem pelayanan",
    Guna:   "arah program lapangan dan respons wabah" },
  catatan: { id: "Bekerja pada populasi, bukan pada pasien satu per satu. Yang mencari kontak langsung dengan pasien biasanya kecewa.",
             en: "You work on populations, not individual patients. Those seeking direct patient contact are usually disappointed." } },

{ id: "j036", nama: "Ilmu Gizi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Bakti",
  perpaduan: ["Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah edukasi gizi dan perubahan perilaku makan",
    Logika: "arah riset gizi dan analisis pola konsumsi",
    Jaga:   "arah gizi klinis dan penyelenggaraan makanan institusi",
    Guna:   "arah gizi olahraga dan pendampingan langsung" },
  catatan: { id: "Bukan jurusan tentang diet dan penurunan berat badan saja. Sebagian besar isinya biokimia dan kesehatan masyarakat.",
             en: "Not a course about diets and weight loss. Most of it is biochemistry and public health." } },

{ id: "j037", nama: "Ekonomi Pembangunan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah ekonomi pembangunan dan pengentasan kemiskinan",
    Logika: "arah ekonometrika dan pemodelan kebijakan",
    Jaga:   "arah perencanaan pembangunan dan evaluasi program",
    Guna:   "arah riset pasar dan analisis terapan" },
  catatan: { id: "Jauh lebih matematis daripada yang dibayangkan calon mahasiswa. Statistika dan kalkulus jadi tulang punggungnya.",
             en: "Far more mathematical than applicants expect. Statistics and calculus are its backbone." } },

{ id: "j038", nama: "Teknologi Laboratorium Medis", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata", "Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah edukasi pasien dan pelayanan yang manusiawi",
    Logika: "arah pengembangan metode dan validasi alat",
    Jaga:   "arah penjaminan mutu laboratorium dan akreditasi",
    Guna:   "arah pemeriksaan rutin dan penanganan sampel" },
  catatan: { id: "Hasil kerjamu jadi dasar keputusan dokter, dan jarang ada yang memeriksanya ulang. Ketelitian di sini bukan sifat, tapi tanggung jawab.",
             en: "Your results become the basis for a doctor's decision, and are rarely rechecked. Precision here is a duty, not a trait." } },

{ id: "j039", nama: "Analisis Kimia", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa", "Nalar|Tata"],
  watak_condong: {
    Reka:   "arah pengujian lingkungan dan keamanan konsumen",
    Logika: "arah pengembangan metode analisis",
    Jaga:   "arah laboratorium terakreditasi dan dokumentasi hasil",
    Guna:   "arah pengujian rutin dan pemeliharaan instrumen" },
  catatan: { id: "Lulusannya cepat terserap industri karena keterampilan instrumennya spesifik dan terlatih sejak semester awal.",
             en: "Graduates are absorbed quickly because instrument skills are specific and trained from early semesters." } },

{ id: "j040", nama: "Teknologi Rekayasa Perangkat Lunak", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa", "Nalar|Karsa", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah produk digital yang berpihak pada penggunanya",
    Logika: "arah arsitektur perangkat lunak dan kualitas kode",
    Jaga:   "arah pengujian, dokumentasi, dan rilis yang terkendali",
    Guna:   "arah pengembangan cepat dan perbaikan bug" },
  catatan: { id: "Porsi proyek nyata jauh lebih besar daripada S1 Informatika, dengan teori yang lebih sedikit. Portofolio lebih menentukan daripada nilai.",
             en: "Far more real projects than an Informatics degree, with less theory. Portfolio matters more than grades." } },

{ id: "j041", nama: "Rekam Medis dan Informasi Kesehatan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata", "Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah sistem informasi yang memudahkan tenaga kesehatan",
    Logika: "arah analisis data kesehatan dan koding klinis",
    Jaga:   "arah kelengkapan berkas dan kepatuhan standar",
    Guna:   "arah operasional rekam medis harian" },
  catatan: { id: "Jarang terdengar, tapi wajib ada di tiap rumah sakit dan klinik. Peminatnya sedikit dibanding kebutuhannya.",
             en: "Rarely heard of, yet required in every hospital and clinic. Applicants are few relative to demand." } },

{ id: "j042", nama: "Teknik Geodesi dan Geomatika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Yasa", kelompok_2: "Nalar",
  perpaduan: ["Yasa|Nalar"],
  watak_condong: {
    Reka:   "arah pemetaan partisipatif dan hak atas tanah",
    Logika: "arah sistem informasi geografis dan pemodelan spasial",
    Jaga:   "arah kadaster, sertifikasi lahan, dan ketelitian ukur",
    Guna:   "arah survei lapangan dan pengukuran langsung" },
  catatan: { id: "Pekerjaannya campuran lapangan dan komputer, dengan porsi lapangan besar di awal karir.",
             en: "The work mixes field and computer, with heavy field time early in a career." } },

{ id: "j043", nama: "Bioteknologi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa"],
  watak_condong: {
    Reka:   "arah bioteknologi untuk pangan dan kesehatan masyarakat",
    Logika: "arah rekayasa genetika dan riset molekuler",
    Jaga:   "arah bioetika, keamanan hayati, dan protokol laboratorium",
    Guna:   "arah produksi bioproses dan pengujian terapan" },
  catatan: { id: "Sangat bergantung pada fasilitas laboratorium kampus. Periksa alatnya sebelum memilih, bukan hanya nama jurusannya.",
             en: "Heavily dependent on campus lab facilities. Check the equipment before choosing, not just the course name." } },

{ id: "j044", nama: "Geofisika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa"],
  watak_condong: {
    Reka:   "arah mitigasi bencana dan kesiapsiagaan warga",
    Logika: "arah pengolahan sinyal seismik dan inversi data",
    Jaga:   "arah pemantauan berkala dan basis data kebumian",
    Guna:   "arah akuisisi data lapangan dan operasi survei" },
  catatan: { id: "Dulu terikat erat pada industri minyak. Sekarang bergeser ke kebencanaan, panas bumi, dan lingkungan.",
             en: "Once tied to the oil industry. It has shifted toward disaster science, geothermal, and the environment." } },

{ id: "j045", nama: "Sistem Informasi", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Nalar", kelompok_2: "Tata",
  perpaduan: ["Nalar|Tata", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah transformasi digital yang memudahkan penggunanya",
    Logika: "arah arsitektur data dan perancangan sistem",
    Jaga:   "arah tata kelola TI, audit sistem, dan keamanan data",
    Guna:   "arah implementasi sistem dan dukungan pengguna" },
  catatan: { id: "Berada di antara bisnis dan teknologi. Yang mencari pemrograman mendalam biasanya lebih cocok di Informatika.",
             en: "It sits between business and technology. Those wanting deep programming usually fit Informatics better." } },

{ id: "j046", nama: "Teknologi Rekayasa Instrumentasi dan Kontrol", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Nalar", kelompok_2: "Yasa",
  perpaduan: ["Nalar|Yasa", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah otomasi yang membuat pekerjaan lebih aman",
    Logika: "arah perancangan sistem kendali dan kalibrasi",
    Jaga:   "arah kalibrasi berkala dan keandalan pengukuran",
    Guna:   "arah pemasangan dan penanganan gangguan alat" },
  catatan: { id: "Keahlian yang jarang dan dibutuhkan hampir semua pabrik, tapi jurusannya sendiri kurang dikenal calon mahasiswa.",
             en: "A rare skill needed by almost every plant, yet the course itself is little known to applicants." } },


/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK KARYA · Artistic
   Mencipta, memberi bentuk, memberi makna.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j047", nama: "Arsitektur Interior", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Yasa",
  perpaduan: ["Karya|Yasa", "Yasa|Karya"],
  watak_condong: {
    Reka:   "arah ruang yang terasa manusiawi bagi penghuninya",
    Logika: "arah sistem material dan rancangan yang terulang",
    Jaga:   "arah gambar kerja dan pengawasan pelaksanaan",
    Guna:   "arah penyelesaian di lokasi dan koordinasi tukang" },
  catatan: { id: "Kliennya biasanya perorangan dengan selera kuat. Kemampuan bernegosiasi menentukan sama besar dengan kemampuan merancang.",
             en: "Clients are usually individuals with strong tastes. Negotiation matters as much as design ability." } },

{ id: "j048", nama: "Seni Rupa Murni", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Nalar",
  perpaduan: ["Karya|Nalar"],
  watak_condong: {
    Reka:   "arah karya yang berangkat dari gagasan dan isu",
    Logika: "arah eksplorasi medium dan riset artistik",
    Jaga:   "arah penguasaan teknik dan konsistensi berkarya",
    Guna:   "arah karya spontan dan seni pertunjukan rupa" },
  catatan: { id: "Jalur penghidupannya tidak linear dan perlu disiapkan sendiri. Banyak lulusan membangun dua jalur sekaligus sejak kuliah.",
             en: "The livelihood path is not linear and must be built yourself. Many graduates run two tracks from student days." } },

{ id: "j049", nama: "Desain Produk", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Yasa",
  perpaduan: ["Karya|Yasa", "Yasa|Karya"],
  watak_condong: {
    Reka:   "arah produk yang menjawab kebutuhan yang terabaikan",
    Logika: "arah sistem produk dan rekayasa rancangan",
    Jaga:   "arah kesiapan produksi dan standar mutu",
    Guna:   "arah pembuatan purwarupa dan uji langsung" },
  catatan: { id: "Perlu terbiasa dengan bengkel dan material, bukan hanya perangkat lunak desain.",
             en: "Requires comfort with workshop and materials, not only design software." } },

{ id: "j050", nama: "Film dan Televisi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Karsa",
  perpaduan: ["Karya|Karsa", "Karya|Nalar"],
  watak_condong: {
    Reka:   "arah penyutradaraan dan penulisan naskah",
    Logika: "arah sinematografi dan perancangan produksi",
    Jaga:   "arah manajemen produksi dan penyuntingan",
    Guna:   "arah kerja set dan produksi lapangan" },
  catatan: { id: "Kerja kelompok dengan jam tidak menentu adalah intinya, bukan kebetulan. Karya perorangan jarang cukup.",
             en: "Group work with irregular hours is the core, not an accident. Solo work is rarely enough." } },

{ id: "j051", nama: "Musik", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Bakti",
  perpaduan: ["Karya|Bakti", "Bakti|Karya"],
  watak_condong: {
    Reka:   "arah komposisi dan musik yang membawa pesan",
    Logika: "arah teori musik, aransemen, dan produksi",
    Jaga:   "arah penguasaan instrumen dan disiplin latihan",
    Guna:   "arah pertunjukan langsung dan improvisasi" },
  catatan: { id: "Ujian masuknya menuntut kemampuan yang sudah terbentuk. Persiapan biasanya dimulai bertahun-tahun sebelumnya.",
             en: "Entry auditions require ability already formed. Preparation usually starts years earlier." } },

{ id: "j052", nama: "Sastra Indonesia", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Nalar",
  perpaduan: ["Karya|Nalar", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah penulisan kreatif dan kritik sastra",
    Logika: "arah linguistik dan analisis wacana",
    Jaga:   "arah penyuntingan, penerbitan, dan kebahasaan",
    Guna:   "arah penulisan media dan konten" },
  catatan: { id: "Lebih banyak menganalisis karya orang lain daripada menulis karya sendiri, terutama di dua tahun pertama.",
             en: "More analysing others' work than writing your own, especially in the first two years." } },

{ id: "j053", nama: "Sastra Inggris", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Nalar",
  perpaduan: ["Karya|Nalar"],
  watak_condong: {
    Reka:   "arah kajian budaya dan penerjemahan sastra",
    Logika: "arah linguistik terapan dan analisis teks",
    Jaga:   "arah pengajaran bahasa dan penyuntingan",
    Guna:   "arah penerjemahan praktis dan komunikasi lintas budaya" },
  catatan: { id: "Bukan kursus bahasa. Kemampuan bahasa Inggris diasumsikan sudah ada sejak awal, yang dipelajari adalah sastranya.",
             en: "Not a language course. English proficiency is assumed from the start; the subject is the literature." } },

{ id: "j054", nama: "Seni Pertunjukan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Bakti",
  perpaduan: ["Karya|Bakti", "Bakti|Karya"],
  watak_condong: {
    Reka:   "arah penyutradaraan dan teater yang berpihak pada isu",
    Logika: "arah dramaturgi dan perancangan pertunjukan",
    Jaga:   "arah manajemen panggung dan produksi",
    Guna:   "arah akting dan pertunjukan langsung" },
  catatan: { id: "Tubuh dan suara adalah alat kerjanya, dan keduanya dilatih setiap hari seperti atlet.",
             en: "Body and voice are the instruments, trained daily like an athlete's." } },

{ id: "j055", nama: "Kriya", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Yasa",
  perpaduan: ["Karya|Yasa", "Yasa|Karya"],
  watak_condong: {
    Reka:   "arah kriya yang menghidupkan kembali tradisi",
    Logika: "arah eksplorasi material dan sistem produksi",
    Jaga:   "arah penguasaan teknik dan mutu hasil",
    Guna:   "arah pengerjaan langsung dan produksi terbatas" },
  catatan: { id: "Salah satu jurusan seni yang jalur wirausahanya paling jelas, karena karyanya bisa langsung dijual.",
             en: "One of the art courses with the clearest entrepreneurial path, since the work can be sold directly." } },

{ id: "j056", nama: "Animasi", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Nalar",
  perpaduan: ["Karya|Nalar", "Karya|Tata", "Karya|Karsa"],
  watak_condong: {
    Reka:   "arah penceritaan dan pengembangan karakter",
    Logika: "arah alur produksi dan teknis rigging",
    Jaga:   "arah konsistensi visual dan penyelesaian akhir",
    Guna:   "arah animasi cepat dan konten pendek" },
  catatan: { id: "Menuntut ketekunan berjam-jam pada bagian yang berulang. Yang bertahan biasanya bukan yang paling berbakat.",
             en: "Demands hours of patience on repetitive work. Those who last are usually not the most gifted." } },

{ id: "j057", nama: "Desain Mode", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Karsa",
  perpaduan: ["Karya|Karsa", "Karya|Yasa", "Yasa|Karya"],
  watak_condong: {
    Reka:   "arah mode yang berangkat dari identitas dan cerita",
    Logika: "arah pola, konstruksi, dan sistem ukuran",
    Jaga:   "arah mutu jahitan dan pengendalian produksi",
    Guna:   "arah pembuatan sampel dan kerja studio" },
  catatan: { id: "Menjahit dan membuat pola adalah keterampilan wajib, bukan tambahan. Menggambar saja tidak cukup.",
             en: "Sewing and pattern-making are required skills, not extras. Sketching alone is not enough." } },

{ id: "j058", nama: "Produksi Media", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Karsa",
  perpaduan: ["Karya|Karsa", "Karya|Bakti", "Karya|Nalar"],
  watak_condong: {
    Reka:   "arah konsep konten dan penceritaan merek",
    Logika: "arah perencanaan produksi dan alur kerja",
    Jaga:   "arah penyuntingan dan konsistensi mutu tayang",
    Guna:   "arah produksi lapangan dan liputan cepat" },
  catatan: { id: "Portofolio menentukan jauh lebih besar daripada nilai. Mulai kumpulkan sejak semester pertama.",
             en: "Portfolio matters far more than grades. Start collecting from the first semester." } },

{ id: "j059", nama: "Desain Grafis", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Tata",
  perpaduan: ["Karya|Tata", "Karya|Nalar", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah identitas visual dan gagasan kampanye",
    Logika: "arah sistem desain dan panduan merek",
    Jaga:   "arah produksi cetak dan ketepatan spesifikasi",
    Guna:   "arah kerja cepat dan konten harian" },
  catatan: { id: "Lebih cepat siap kerja daripada S1 DKV, dengan teori lebih sedikit dan praktik lebih banyak.",
             en: "Job-ready faster than a visual communication degree, with less theory and more practice." } },

{ id: "j060", nama: "Fotografi", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Yasa",
  perpaduan: ["Karya|Yasa", "Karya|Bakti"],
  watak_condong: {
    Reka:   "arah fotografi dokumenter dan cerita manusia",
    Logika: "arah pencahayaan teknis dan alur pascaproduksi",
    Jaga:   "arah konsistensi mutu dan kerja komersial",
    Guna:   "arah peliputan langsung dan momen yang tidak terulang" },
  catatan: { id: "Biaya peralatan ditanggung sendiri dan tidak kecil. Hitung ini sebelum memilih.",
             en: "Equipment costs fall on you and are not small. Budget for it before choosing." } },

{ id: "j061", nama: "Televisi dan Film", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Karsa",
  perpaduan: ["Karya|Karsa", "Karya|Bakti"],
  watak_condong: {
    Reka:   "arah penyutradaraan dan gagasan tayangan",
    Logika: "arah tata kamera dan perancangan teknis siaran",
    Jaga:   "arah penyuntingan dan kendali mutu tayang",
    Guna:   "arah kerja lapangan dan liputan langsung" },
  catatan: { id: "Magang di rumah produksi biasanya lebih menentukan daripada ijazahnya sendiri.",
             en: "An internship at a production house usually matters more than the diploma itself." } },

{ id: "j062", nama: "Tata Rias dan Kecantikan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Bakti",
  perpaduan: ["Karya|Bakti", "Karya|Karsa", "Bakti|Karya"],
  watak_condong: {
    Reka:   "arah rias karakter dan penceritaan visual",
    Logika: "arah pengetahuan bahan dan keamanan produk",
    Jaga:   "arah konsistensi hasil dan standar kebersihan",
    Guna:   "arah kerja langsung dengan klien dan panggung" },
  catatan: { id: "Jalur wirausahanya sangat terbuka, dan banyak lulusan membuka usaha sendiri sebelum lulus.",
             en: "The entrepreneurial path is wide open, and many open their own business before graduating." } },

{ id: "j063", nama: "Seni Karawitan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karya", kelompok_2: "Bakti",
  perpaduan: ["Karya|Bakti", "Bakti|Karya"],
  watak_condong: {
    Reka:   "arah komposisi baru berbasis tradisi",
    Logika: "arah kajian musikologi dan notasi",
    Jaga:   "arah penguasaan repertoar dan pelestarian",
    Guna:   "arah pertunjukan dan sajian langsung" },
  catatan: { id: "Peminatnya sedikit sehingga persaingan masuk ringan, tapi jalur penghidupannya perlu dirancang sendiri sejak awal.",
             en: "Few applicants make entry easier, but the livelihood path must be designed yourself from the start." } },

{ id: "j064", nama: "Desain Interior", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karya", kelompok_2: "Yasa",
  perpaduan: ["Karya|Yasa", "Yasa|Karya", "Karya|Tata"],
  watak_condong: {
    Reka:   "arah ruang yang menjawab cara hidup penghuninya",
    Logika: "arah sistem material dan perhitungan anggaran",
    Jaga:   "arah gambar kerja dan pengawasan tukang",
    Guna:   "arah penyelesaian di lokasi dan pemasangan" },
  catatan: { id: "Lebih menekankan gambar kerja dan pelaksanaan dibanding jalur S1 yang lebih konseptual.",
             en: "Emphasises working drawings and execution more than the more conceptual degree route." } },


/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK BAKTI · Social
   Membimbing, melayani, menumbuhkan orang.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j065", nama: "Pendidikan Guru Sekolah Dasar", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Karya",
  perpaduan: ["Bakti|Karya"],
  watak_condong: {
    Reka:   "arah pendampingan anak dan pendidikan yang memerdekakan",
    Logika: "arah perancangan kurikulum dan asesmen belajar",
    Jaga:   "arah pengelolaan kelas dan konsistensi rutinitas",
    Guna:   "arah pembelajaran aktif dan penanganan kelas langsung" },
  catatan: { id: "Mengajar anak kecil menuntut stamina fisik yang sering tidak diperhitungkan calon mahasiswa.",
             en: "Teaching young children demands physical stamina that applicants rarely account for." } },

{ id: "j066", nama: "Bimbingan dan Konseling", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar"],
  watak_condong: {
    Reka:   "arah konseling mendalam dan pendampingan pribadi",
    Logika: "arah asesmen psikologis dan perancangan program",
    Jaga:   "arah layanan terstruktur dan administrasi bimbingan",
    Guna:   "arah penanganan kasus mendesak di sekolah" },
  catatan: { id: "Di banyak sekolah perannya masih dianggap mengurus pelanggaran. Mengubah itu jadi bagian dari pekerjaannya.",
             en: "In many schools the role is still seen as handling misconduct. Changing that is part of the job." } },

{ id: "j067", nama: "Kesejahteraan Sosial", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Tata",
  perpaduan: ["Bakti|Tata"],
  watak_condong: {
    Reka:   "arah advokasi dan pendampingan kelompok rentan",
    Logika: "arah analisis kebijakan sosial dan evaluasi program",
    Jaga:   "arah manajemen kasus dan layanan yang konsisten",
    Guna:   "arah kerja lapangan dan respons krisis" },
  catatan: { id: "Berhadapan langsung dengan kemiskinan, kekerasan, dan keterbatasan sistem. Perlu penopang diri yang disiapkan sejak awal.",
             en: "You face poverty, violence, and system limits directly. Personal support needs to be arranged early." } },

{ id: "j068", nama: "Keperawatan", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar", "Yasa|Bakti"],
  watak_condong: {
    Reka:   "arah perawatan paliatif dan pendampingan keluarga",
    Logika: "arah keperawatan berbasis bukti dan manajemen mutu",
    Jaga:   "arah kepatuhan protokol dan keselamatan pasien",
    Guna:   "arah gawat darurat dan tindakan cepat" },
  catatan: { id: "Untuk praktik mandiri perlu satu tahun profesi Ners setelah S1. Kerja giliran malam adalah bagian tetap, bukan sementara.",
             en: "Independent practice needs a year of professional training after the degree. Night shifts are permanent, not temporary." } },

{ id: "j069", nama: "Pendidikan Anak Usia Dini", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Karya",
  perpaduan: ["Bakti|Karya"],
  watak_condong: {
    Reka:   "arah pengasuhan yang menumbuhkan rasa aman",
    Logika: "arah perkembangan anak dan perancangan stimulasi",
    Jaga:   "arah rutinitas, keselamatan, dan konsistensi kelas",
    Guna:   "arah bermain aktif dan penanganan langsung" },
  catatan: { id: "Berurusan dengan orang tua sama besarnya dengan berurusan dengan anak, dan itu bagian yang paling menguras.",
             en: "Dealing with parents is as large a part as dealing with children, and it is the most draining part." } },

{ id: "j070", nama: "Administrasi Rumah Sakit", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Tata",
  perpaduan: ["Bakti|Tata", "Tata|Bakti"],
  watak_condong: {
    Reka:   "arah mutu layanan yang dirasakan pasien",
    Logika: "arah sistem informasi dan efisiensi layanan",
    Jaga:   "arah akreditasi, standar, dan kepatuhan",
    Guna:   "arah operasional harian dan penanganan keluhan" },
  catatan: { id: "Bukan jurusan klinis. Yang dikelola adalah sistem dan orang, bukan pasien secara langsung.",
             en: "Not a clinical course. You manage systems and people, not patients directly." } },

{ id: "j071", nama: "Pendidikan Luar Biasa", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar"],
  watak_condong: {
    Reka:   "arah pendampingan individual dan advokasi inklusi",
    Logika: "arah asesmen kebutuhan dan rancangan intervensi",
    Jaga:   "arah program terstruktur dan pencatatan perkembangan",
    Guna:   "arah penanganan langsung dan terapi perilaku" },
  catatan: { id: "Kemajuan muridnya berjalan sangat lambat dan sering tidak terlihat. Ukuran keberhasilannya harus disesuaikan.",
             en: "Progress is very slow and often invisible. Your measure of success has to be recalibrated." } },

{ id: "j072", nama: "Sosiologi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar"],
  watak_condong: {
    Reka:   "arah pendampingan komunitas dan gerakan sosial",
    Logika: "arah riset sosial dan analisis struktur masyarakat",
    Jaga:   "arah evaluasi program dan riset kebijakan",
    Guna:   "arah riset lapangan dan pendampingan langsung" },
  catatan: { id: "Jalur kerjanya tidak sejelas jurusan terapan. Kekuatannya justru di kemampuan membaca masyarakat yang terpakai lintas bidang.",
             en: "The career path is less defined than applied fields. Its strength is reading society, useful across sectors." } },

{ id: "j073", nama: "Ilmu Kesejahteraan Keluarga", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Yasa",
  perpaduan: ["Bakti|Yasa", "Yasa|Bakti"],
  watak_condong: {
    Reka:   "arah pemberdayaan keluarga dan edukasi masyarakat",
    Logika: "arah riset keluarga dan perancangan program",
    Jaga:   "arah pengelolaan layanan dan standar penyelenggaraan",
    Guna:   "arah praktik langsung di bidang boga, busana, atau anak" },
  catatan: { id: "Percabangannya nyata: boga, busana, atau anak. Pilih peminatan sejak awal agar tidak mengambang.",
             en: "It genuinely branches: culinary, fashion, or child development. Choose early to avoid drifting." } },

{ id: "j074", nama: "Pendidikan Jasmani, Kesehatan, dan Rekreasi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Yasa",
  perpaduan: ["Bakti|Yasa", "Yasa|Bakti"],
  watak_condong: {
    Reka:   "arah olahraga sebagai alat menumbuhkan karakter",
    Logika: "arah ilmu keolahragaan dan program latihan",
    Jaga:   "arah pengelolaan kelas dan keselamatan aktivitas",
    Guna:   "arah pelatihan langsung dan kepelatihan cabang" },
  catatan: { id: "Kebugaran pribadi adalah syarat kerja, bukan nilai tambah, dan itu harus dijaga sepanjang karir.",
             en: "Personal fitness is a job requirement, not a bonus, and must be maintained throughout a career." } },

{ id: "j075", nama: "Kebidanan", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar", "Yasa|Bakti", "Bakti|Yasa"],
  watak_condong: {
    Reka:   "arah pendampingan ibu dan asuhan yang menenangkan",
    Logika: "arah asuhan berbasis bukti dan deteksi dini risiko",
    Jaga:   "arah kepatuhan protokol dan kelengkapan asuhan",
    Guna:   "arah persalinan dan tindakan cepat" },
  catatan: { id: "Tanggung jawabnya menyangkut dua nyawa sekaligus, dan panggilan bisa datang kapan saja.",
             en: "Responsibility covers two lives at once, and calls can come at any hour." } },

{ id: "j076", nama: "Fisioterapi", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Yasa",
  perpaduan: ["Bakti|Yasa", "Yasa|Bakti", "Bakti|Nalar"],
  watak_condong: {
    Reka:   "arah pemulihan yang menumbuhkan kepercayaan diri pasien",
    Logika: "arah asesmen gerak dan rancangan program terapi",
    Jaga:   "arah protokol terapi dan pemantauan kemajuan",
    Guna:   "arah penanganan langsung dan terapi manual" },
  catatan: { id: "Pekerjaan fisik yang menuntut tenaga sendiri setiap hari. Cedera terapisnya sendiri adalah risiko nyata.",
             en: "Physical work demanding your own strength daily. Therapist injury is a real risk." } },

{ id: "j077", nama: "Pekerjaan Sosial", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Tata",
  perpaduan: ["Bakti|Tata", "Bakti|Karsa"],
  watak_condong: {
    Reka:   "arah pendampingan individu dan keluarga",
    Logika: "arah asesmen kebutuhan dan rujukan terstruktur",
    Jaga:   "arah manajemen kasus dan pencatatan layanan",
    Guna:   "arah penjangkauan lapangan dan respons cepat" },
  catatan: { id: "Bebannya emosional, dan lembaga yang baik menyediakan supervisi rutin. Tanyakan itu sebelum menerima pekerjaan.",
             en: "The load is emotional, and good agencies provide regular supervision. Ask about it before accepting a post." } },

{ id: "j078", nama: "Terapi Okupasi", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Yasa",
  perpaduan: ["Bakti|Yasa", "Yasa|Bakti", "Bakti|Karya"],
  watak_condong: {
    Reka:   "arah kemandirian dan martabat orang yang didampingi",
    Logika: "arah analisis aktivitas dan rancangan adaptasi",
    Jaga:   "arah program terapi dan pencatatan kemajuan",
    Guna:   "arah latihan langsung dan pembuatan alat bantu" },
  catatan: { id: "Jarang dikenal padahal dibutuhkan di rumah sakit, sekolah inklusi, dan panti. Lulusannya masih sedikit.",
             en: "Little known yet needed in hospitals, inclusive schools, and care homes. Graduates remain few." } },

{ id: "j079", nama: "Gizi", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Nalar",
  perpaduan: ["Bakti|Nalar", "Bakti|Tata", "Nalar|Bakti"],
  watak_condong: {
    Reka:   "arah edukasi gizi dan pendampingan perubahan perilaku",
    Logika: "arah perhitungan kebutuhan gizi dan menu terapi",
    Jaga:   "arah penyelenggaraan makanan institusi dan mutu",
    Guna:   "arah pelayanan langsung dan konsultasi harian" },
  catatan: { id: "Jalur cepat menuju kerja di rumah sakit dan puskesmas, dengan praktik lebih banyak daripada jalur S1.",
             en: "A fast route into hospitals and clinics, with more practice than the degree route." } },

{ id: "j080", nama: "Manajemen Perhotelan", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Bakti", kelompok_2: "Karsa",
  perpaduan: ["Bakti|Karsa", "Bakti|Karya", "Bakti|Tata"],
  watak_condong: {
    Reka:   "arah pengalaman tamu yang terasa personal",
    Logika: "arah sistem operasi hotel dan manajemen pendapatan",
    Jaga:   "arah standar layanan dan konsistensi operasional",
    Guna:   "arah operasional harian dan penanganan tamu langsung" },
  catatan: { id: "Mulai dari posisi paling bawah adalah hal biasa, termasuk bagi lulusan D4. Kenaikan bergantung pada jam terbang.",
             en: "Starting at the bottom is normal, even for diploma graduates. Advancement depends on hours logged." } },

{ id: "j081", nama: "Ilmu Hubungan Internasional", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Karsa",
  perpaduan: ["Bakti|Karsa"],
  watak_condong: {
    Reka:   "arah diplomasi kemanusiaan dan isu global",
    Logika: "arah analisis kebijakan luar negeri dan keamanan",
    Jaga:   "arah kerja kelembagaan dan protokol diplomatik",
    Guna:   "arah program lapangan lembaga internasional" },
  catatan: { id: "Jalur diplomat sangat sempit dan berbasis seleksi nasional. Sebagian besar lulusan bekerja di lembaga internasional, riset, atau korporasi.",
             en: "The diplomatic route is narrow and nationally selected. Most graduates work in international bodies, research, or corporates." } },

{ id: "j082", nama: "Pendidikan Bahasa Inggris", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Bakti", kelompok_2: "Karya",
  perpaduan: ["Bakti|Karya"],
  watak_condong: {
    Reka:   "arah pengajaran yang menumbuhkan keberanian berbahasa",
    Logika: "arah linguistik terapan dan perancangan kurikulum",
    Jaga:   "arah pengelolaan kelas dan asesmen terstruktur",
    Guna:   "arah kelas aktif dan pengajaran praktis" },
  catatan: { id: "Berbeda dari Sastra Inggris: fokusnya cara mengajarkan, bukan menganalisis karya sastranya.",
             en: "Different from English Literature: the focus is how to teach it, not analysing the literature." } },


/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK KARSA · Enterprising
   Memimpin, menggerakkan, membangun.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j083", nama: "Bisnis Digital", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Nalar",
  perpaduan: ["Karsa|Nalar", "Yasa|Karsa"],
  watak_condong: {
    Reka:   "arah membangun usaha yang punya misi jelas",
    Logika: "arah analitik pertumbuhan dan model bisnis",
    Jaga:   "arah operasional niaga dan pengendalian proses",
    Guna:   "arah penjualan digital dan eksekusi kampanye" },
  catatan: { id: "Jurusan baru di banyak kampus dan mutunya masih sangat beragam. Periksa kurikulum dan pengajarnya, bukan hanya namanya.",
             en: "A new course at many campuses with widely varying quality. Check the curriculum and teaching staff, not just the name." } },

{ id: "j084", nama: "Kewirausahaan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Karya",
  perpaduan: ["Karsa|Karya"],
  watak_condong: {
    Reka:   "arah usaha sosial dan dampak yang diperjuangkan",
    Logika: "arah model bisnis dan pengembangan skala",
    Jaga:   "arah pengelolaan usaha dan keberlanjutan operasional",
    Guna:   "arah penjualan langsung dan eksekusi cepat" },
  catatan: { id: "Kampus tidak bisa mengajarkan keberanian memulai. Yang diberikan kerangka dan jaringan; keputusannya tetap milikmu.",
             en: "A campus cannot teach the nerve to start. It gives frameworks and networks; the decision stays yours." } },

{ id: "j085", nama: "Ilmu Hukum", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Karya"],
  watak_condong: {
    Reka:   "arah bantuan hukum dan advokasi keadilan",
    Logika: "arah hukum bisnis dan penyusunan argumen",
    Jaga:   "arah kepatuhan, notariat, dan ketelitian dokumen",
    Guna:   "arah litigasi dan penanganan perkara langsung" },
  catatan: { id: "Menghafal bukan intinya; membaca banyak dan menyusun argumen yang tahan bantahan adalah intinya.",
             en: "Memorising is not the core; heavy reading and building arguments that withstand challenge is." } },

{ id: "j086", nama: "Administrasi Bisnis", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah budaya organisasi dan pengembangan orang",
    Logika: "arah strategi bisnis dan analisis organisasi",
    Jaga:   "arah tata kelola dan pengendalian operasional",
    Guna:   "arah operasional harian dan koordinasi lapangan" },
  catatan: { id: "Sangat mirip Manajemen di banyak kampus. Bandingkan mata kuliahnya, bukan nama jurusannya.",
             en: "Very similar to Management at many campuses. Compare the modules, not the course names." } },

{ id: "j087", nama: "Ilmu Politik", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Nalar",
  perpaduan: ["Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah gerakan warga dan advokasi kebijakan",
    Logika: "arah analisis politik dan riset kebijakan publik",
    Jaga:   "arah kerja kelembagaan dan administrasi politik",
    Guna:   "arah kampanye dan kerja lapangan politik" },
  catatan: { id: "Jaringan yang dibangun selama kuliah sering lebih menentukan daripada nilai akhirnya.",
             en: "Networks built during study often matter more than final grades." } },

{ id: "j088", nama: "Pariwisata", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Bakti",
  perpaduan: ["Karsa|Bakti", "Bakti|Karsa", "Karsa|Karya"],
  watak_condong: {
    Reka:   "arah pariwisata berbasis komunitas dan pelestarian",
    Logika: "arah perencanaan destinasi dan analisis pasar",
    Jaga:   "arah pengelolaan destinasi dan standar layanan",
    Guna:   "arah operasional lapangan dan penanganan tamu" },
  catatan: { id: "Sangat terpengaruh keadaan di luar kendali seperti wabah dan bencana. Perlu kesiapan menghadapi siklus naik turun.",
             en: "Highly exposed to events beyond control such as outbreaks and disasters. Be ready for boom and bust cycles." } },

{ id: "j089", nama: "Manajemen Pemasaran", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Karya",
  perpaduan: ["Karsa|Karya"],
  watak_condong: {
    Reka:   "arah membangun merek yang punya makna",
    Logika: "arah riset pasar dan strategi berbasis data",
    Jaga:   "arah manajemen kanal dan konsistensi merek",
    Guna:   "arah penjualan lapangan dan aktivasi" },
  catatan: { id: "Semakin banyak dituntut kemampuan membaca data, bukan hanya kreativitas. Pelajari analitik sejak awal.",
             en: "Increasingly demands data literacy, not only creativity. Learn analytics early." } },

{ id: "j090", nama: "Ilmu Administrasi Publik", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata"],
  watak_condong: {
    Reka:   "arah pelayanan publik yang berpihak pada warga",
    Logika: "arah analisis kebijakan dan reformasi birokrasi",
    Jaga:   "arah tata kelola pemerintahan dan kepatuhan",
    Guna:   "arah pelayanan langsung dan pelaksanaan program" },
  catatan: { id: "Jalur utamanya seleksi aparatur negara yang waktunya tidak bisa diatur sendiri. Siapkan rencana kedua.",
             en: "The main route is civil service selection on a timetable you do not control. Have a second plan." } },

{ id: "j091", nama: "Hubungan Masyarakat", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Karya",
  perpaduan: ["Karsa|Karya"],
  watak_condong: {
    Reka:   "arah komunikasi yang menjaga kepercayaan publik",
    Logika: "arah strategi komunikasi dan manajemen isu",
    Jaga:   "arah protokol komunikasi dan penanganan krisis",
    Guna:   "arah hubungan media dan kerja acara" },
  catatan: { id: "Bekerja saat organisasi sedang bermasalah adalah bagian terberatnya, dan itu tidak bisa dijadwalkan.",
             en: "Working while the organisation is in trouble is the hardest part, and it cannot be scheduled." } },

{ id: "j092", nama: "Ekonomi Syariah", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata"],
  watak_condong: {
    Reka:   "arah keuangan inklusif dan pemberdayaan umat",
    Logika: "arah produk keuangan syariah dan analisis akad",
    Jaga:   "arah kepatuhan syariah dan audit",
    Guna:   "arah pemasaran produk dan layanan nasabah" },
  catatan: { id: "Menuntut pemahaman fikih muamalah selain ilmu ekonomi. Keduanya dipelajari bersamaan.",
             en: "Requires grounding in Islamic commercial jurisprudence alongside economics. Both are studied together." } },

{ id: "j093", nama: "Manajemen Bisnis Internasional", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Yasa|Karsa", "Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah kemitraan lintas negara yang saling menguntungkan",
    Logika: "arah analisis pasar global dan strategi ekspor",
    Jaga:   "arah dokumen ekspor impor dan kepatuhan perdagangan",
    Guna:   "arah negosiasi dan penanganan transaksi langsung" },
  catatan: { id: "Kemampuan bahasa asing kedua sering jadi pembeda utama saat melamar, bukan nilainya.",
             en: "A second foreign language is often the deciding factor when applying, not the grades." } },

{ id: "j094", nama: "Manajemen Pemasaran", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Karya",
  perpaduan: ["Karsa|Karya", "Karsa|Bakti"],
  watak_condong: {
    Reka:   "arah cerita produk dan hubungan dengan pelanggan",
    Logika: "arah analisis penjualan dan perencanaan kanal",
    Jaga:   "arah administrasi penjualan dan pemantauan target",
    Guna:   "arah penjualan lapangan dan aktivasi langsung" },
  catatan: { id: "Praktik penjualan nyata dimulai sejak semester awal. Cocok bagi yang ingin cepat terjun, bukan yang ingin banyak teori.",
             en: "Real selling practice starts in early semesters. Suits those wanting to start fast rather than study theory." } },

{ id: "j095", nama: "Manajemen Perjalanan Wisata", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Bakti",
  perpaduan: ["Karsa|Bakti", "Karsa|Karya", "Bakti|Karsa"],
  watak_condong: {
    Reka:   "arah perjalanan yang berkesan dan bermakna",
    Logika: "arah perencanaan paket dan perhitungan biaya",
    Jaga:   "arah operasional perjalanan dan keselamatan tamu",
    Guna:   "arah pemanduan langsung dan penanganan di lapangan" },
  catatan: { id: "Sertifikasi pemandu dan kemampuan bahasa asing menentukan lebih besar daripada ijazahnya.",
             en: "Guide certification and foreign languages matter more than the diploma." } },

{ id: "j096", nama: "Administrasi Bisnis", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Bakti"],
  watak_condong: {
    Reka:   "arah hubungan kerja yang sehat di dalam kantor",
    Logika: "arah efisiensi proses dan pelaporan",
    Jaga:   "arah administrasi yang rapi dan tertelusur",
    Guna:   "arah koordinasi harian dan penanganan cepat" },
  catatan: { id: "Jalur cepat masuk dunia kerja kantor, dengan keterampilan praktis yang langsung terpakai sejak hari pertama.",
             en: "A fast route into office work, with practical skills usable from day one." } },

{ id: "j097", nama: "Manajemen Logistik", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Yasa", "Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah rantai pasok yang adil bagi pemasok kecil",
    Logika: "arah optimasi jaringan distribusi dan persediaan",
    Jaga:   "arah pengendalian persediaan dan ketertelusuran",
    Guna:   "arah operasional gudang dan pengiriman" },
  catatan: { id: "Permintaannya naik terus seiring perdagangan daring, dan jalurnya lebih jelas daripada yang diperkirakan orang.",
             en: "Demand keeps rising with online commerce, and the path is clearer than people assume." } },

{ id: "j098", nama: "Manajemen Sumber Daya Manusia", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Karsa", kelompok_2: "Bakti",
  perpaduan: ["Karsa|Bakti", "Tata|Bakti"],
  watak_condong: {
    Reka:   "arah pengembangan orang dan budaya kerja",
    Logika: "arah analitik SDM dan sistem manajemen talenta",
    Jaga:   "arah hubungan industrial dan kepatuhan ketenagakerjaan",
    Guna:   "arah rekrutmen dan penanganan kebutuhan harian" },
  catatan: { id: "Sering dibayangkan sebagai pekerjaan mengurus orang, padahal sebagian besarnya sistem, aturan, dan angka.",
             en: "Often imagined as people work, when most of it is systems, rules, and numbers." } },

{ id: "j099", nama: "Ilmu Komunikasi Pemasaran", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Karya",
  perpaduan: ["Karsa|Karya", "Karsa|Nalar"],
  watak_condong: {
    Reka:   "arah kampanye yang menggerakkan orang",
    Logika: "arah perencanaan media dan pengukuran hasil",
    Jaga:   "arah manajemen kampanye dan konsistensi pesan",
    Guna:   "arah produksi konten dan aktivasi lapangan" },
  catatan: { id: "Portofolio kampanye nyata lebih dilihat daripada transkrip. Ikut proyek klien sejak semester tengah.",
             en: "A portfolio of real campaigns is looked at more than a transcript. Join client projects from mid-course." } },

{ id: "j100", nama: "Kepolisian dan Ketertiban", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Bakti"],
  watak_condong: {
    Reka:   "arah pemolisian masyarakat dan pencegahan",
    Logika: "arah analisis keamanan dan perancangan prosedur",
    Jaga:   "arah penegakan aturan dan ketertiban prosedural",
    Guna:   "arah tugas lapangan dan penanganan situasi cepat" },
  catatan: { id: "Seleksi masuknya mencakup kesamaptaan jasmani dan kesehatan, bukan hanya nilai akademik.",
             en: "Entry selection includes physical and medical fitness, not only academic scores." } },

{ id: "j101", nama: "Manajemen Ritel", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Karsa", kelompok_2: "Tata",
  perpaduan: ["Karsa|Tata", "Karsa|Karya"],
  watak_condong: {
    Reka:   "arah pengalaman berbelanja yang terasa hangat",
    Logika: "arah analisis penjualan dan pengelolaan barang",
    Jaga:   "arah standar toko dan pengendalian persediaan",
    Guna:   "arah operasional toko dan penanganan pelanggan" },
  catatan: { id: "Jam kerjanya mengikuti jam ramai toko, termasuk akhir pekan dan hari libur.",
             en: "Hours follow store traffic, including weekends and public holidays." } },


/* ═══════════════════════════════════════════════════════════════════════
   KELOMPOK TATA · Conventional
   Menata, mengatur, menjaga sistem.
   ═══════════════════════════════════════════════════════════════════════ */

{ id: "j102", nama: "Manajemen Keuangan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar"],
  watak_condong: {
    Reka:   "arah keuangan yang melayani tujuan organisasi",
    Logika: "arah analisis investasi dan pemodelan keuangan",
    Jaga:   "arah pengendalian anggaran dan pelaporan",
    Guna:   "arah keuangan operasional dan arus kas harian" },
  catatan: { id: "Sertifikasi profesi sering lebih menentukan daripada asal kampus. Rencanakan sejak tahun ketiga.",
             en: "Professional certification often matters more than where you studied. Plan from third year." } },

{ id: "j103", nama: "Perpajakan", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar"],
  watak_condong: {
    Reka:   "arah edukasi pajak dan keadilan kontribusi",
    Logika: "arah perencanaan pajak dan analisis regulasi",
    Jaga:   "arah kepatuhan, pelaporan, dan audit pajak",
    Guna:   "arah penanganan kasus dan konsultasi harian" },
  catatan: { id: "Aturannya berubah hampir tiap tahun, jadi belajarnya tidak berhenti setelah lulus.",
             en: "The rules change almost yearly, so learning does not stop at graduation." } },

{ id: "j104", nama: "Ilmu Perpustakaan dan Informasi", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah literasi masyarakat dan akses pengetahuan",
    Logika: "arah arsitektur informasi dan sistem temu kembali",
    Jaga:   "arah katalogisasi, arsip, dan pelestarian koleksi",
    Guna:   "arah layanan pengguna dan pengelolaan harian" },
  catatan: { id: "Sudah lama bukan sekadar mengurus buku. Isinya pengelolaan informasi digital dan sistem temu kembali.",
             en: "Long since more than tending books. It is digital information management and retrieval systems." } },

{ id: "j105", nama: "Manajemen Informatika", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar"],
  watak_condong: {
    Reka:   "arah sistem yang memudahkan penggunanya",
    Logika: "arah analisis sistem dan perancangan basis data",
    Jaga:   "arah tata kelola data dan keamanan informasi",
    Guna:   "arah dukungan sistem dan penanganan gangguan" },
  catatan: { id: "Lebih dekat ke pengelolaan sistem daripada ke pemrograman mendalam. Yang mencari koding berat lebih cocok di Informatika.",
             en: "Closer to system management than deep programming. Those wanting heavy coding fit Informatics better." } },

{ id: "j106", nama: "Statistika Terapan", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Tata|Karsa"],
  watak_condong: {
    Reka:   "arah statistik sosial dan penyajian yang mudah dipahami",
    Logika: "arah pemodelan dan analisis lanjutan",
    Jaga:   "arah survei resmi dan pengendalian mutu data",
    Guna:   "arah pengolahan data cepat dan pelaporan rutin" },
  catatan: { id: "Sangat terhubung dengan lembaga statistik resmi dan industri survei. Jalurnya jelas sejak awal.",
             en: "Closely tied to official statistics bodies and the survey industry. The path is clear from the start." } },

{ id: "j107", nama: "Akuntansi", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Tata|Karsa", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah pelaporan yang jujur dan mudah dipahami",
    Logika: "arah analisis laporan dan sistem akuntansi",
    Jaga:   "arah audit, kepatuhan, dan ketelitian pembukuan",
    Guna:   "arah pembukuan harian dan penutupan cepat" },
  catatan: { id: "Lebih banyak praktik perangkat lunak akuntansi dibanding jalur S1, dan itu yang paling dicari perusahaan kecil.",
             en: "More accounting software practice than the degree route, which is what small firms want most." } },

{ id: "j108", nama: "Administrasi Perkantoran", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Bakti",
  perpaduan: ["Tata|Bakti", "Tata|Karya"],
  watak_condong: {
    Reka:   "arah suasana kerja yang tertata dan menyenangkan",
    Logika: "arah penyederhanaan prosedur dan sistem berkas",
    Jaga:   "arah kearsipan rapi dan jadwal yang terjaga",
    Guna:   "arah penanganan kebutuhan kantor sehari-hari" },
  catatan: { id: "Sering diremehkan padahal jadi tulang punggung kantor. Keterampilan perangkat lunak perkantoran menentukan banyak hal.",
             en: "Often underrated yet the backbone of an office. Office software skills decide a great deal." } },

{ id: "j109", nama: "Manajemen Keuangan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Karsa",
  perpaduan: ["Tata|Karsa", "Tata|Bakti"],
  watak_condong: {
    Reka:   "arah layanan keuangan yang melayani nasabah kecil",
    Logika: "arah analisis kredit dan perhitungan risiko",
    Jaga:   "arah kepatuhan perbankan dan ketelitian transaksi",
    Guna:   "arah layanan nasabah dan operasional harian" },
  catatan: { id: "Jalur cepat masuk perbankan dan lembaga keuangan, dengan pelatihan praktik sejak semester awal.",
             en: "A fast route into banking and financial institutions, with practical training from early semesters." } },

{ id: "j110", nama: "Kearsipan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Tata|Karya", "Nalar|Karya"],
  watak_condong: {
    Reka:   "arah pelestarian ingatan lembaga dan sejarahnya",
    Logika: "arah sistem klasifikasi dan alih media digital",
    Jaga:   "arah penjagaan arsip dan kepatuhan retensi",
    Guna:   "arah pengelolaan arsip aktif sehari-hari" },
  catatan: { id: "Peminatnya sangat sedikit padahal tiap instansi wajib punya arsiparis. Persaingannya ringan.",
             en: "Very few applicants despite every institution requiring archivists. Competition is light." } },

{ id: "j111", nama: "Manajemen Aset dan Properti", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Yasa",
  perpaduan: ["Tata|Yasa", "Karsa|Yasa", "Tata|Karsa"],
  watak_condong: {
    Reka:   "arah pengelolaan properti yang nyaman bagi penghuni",
    Logika: "arah penilaian aset dan analisis kelayakan",
    Jaga:   "arah inventarisasi aset dan kepatuhan dokumen",
    Guna:   "arah pemeliharaan gedung dan operasional harian" },
  catatan: { id: "Menggabungkan administrasi, teknis bangunan, dan hukum properti. Cakupannya lebih luas daripada namanya.",
             en: "Combines administration, building technicals, and property law. Broader than its name suggests." } },

{ id: "j112", nama: "Ilmu Aktuaria", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Nalar|Karsa"],
  watak_condong: {
    Reka:   "arah produk perlindungan yang terjangkau masyarakat",
    Logika: "arah pemodelan risiko dan perhitungan premi",
    Jaga:   "arah cadangan teknis dan kepatuhan pelaporan",
    Guna:   "arah analisis klaim dan perhitungan terapan" },
  catatan: { id: "Sertifikasi profesi aktuaris memakan waktu bertahun-tahun setelah lulus dan itu yang menentukan karirnya.",
             en: "Actuarial certification takes years after graduation and is what determines the career." } },

{ id: "j113", nama: "Administrasi Negara", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Karsa",
  perpaduan: ["Tata|Karsa"],
  watak_condong: {
    Reka:   "arah pelayanan publik yang berpihak pada warga",
    Logika: "arah analisis kebijakan dan reformasi tata kelola",
    Jaga:   "arah administrasi pemerintahan dan kepatuhan",
    Guna:   "arah pelaksanaan program dan pelayanan langsung" },
  catatan: { id: "Jalur utamanya seleksi aparatur negara yang jadwalnya di luar kendalimu. Siapkan rencana kedua sejak awal.",
             en: "The main route is civil service selection on a timetable beyond your control. Have a second plan early." } },

{ id: "j114", nama: "Manajemen Rekayasa Industri", jenjang: "S1", rumpun: "Saintek",
  kelompok_1: "Tata", kelompok_2: "Yasa",
  perpaduan: ["Tata|Yasa"],
  watak_condong: {
    Reka:   "arah sistem kerja yang manusiawi dan berkelanjutan",
    Logika: "arah optimasi sistem dan analisis kelayakan",
    Jaga:   "arah sistem mutu dan pengendalian proses",
    Guna:   "arah perbaikan langsung di lini operasional" },
  catatan: { id: "Berada di antara teknik dan manajemen. Periksa porsi keduanya di kampus yang kamu tuju, karena berbeda-beda.",
             en: "Sits between engineering and management. Check the balance at your target campus; it varies." } },

{ id: "j115", nama: "Sistem Informasi Akuntansi", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Tata|Yasa"],
  watak_condong: {
    Reka:   "arah sistem yang memudahkan tim keuangan",
    Logika: "arah perancangan sistem dan integrasi data keuangan",
    Jaga:   "arah kontrol internal dan jejak audit",
    Guna:   "arah dukungan sistem dan penanganan transaksi" },
  catatan: { id: "Perpaduan akuntansi dan teknologi yang lulusannya masih sedikit dibanding kebutuhannya.",
             en: "A blend of accounting and technology with far fewer graduates than demand." } },

{ id: "j116", nama: "Bahasa dan Kebudayaan Jepang", jenjang: "S1", rumpun: "Soshum",
  kelompok_1: "Tata", kelompok_2: "Karya",
  perpaduan: ["Tata|Karya"],
  watak_condong: {
    Reka:   "arah kajian budaya dan penerjemahan sastra",
    Logika: "arah linguistik dan analisis kebahasaan",
    Jaga:   "arah penerjemahan teknis dan pengajaran terstruktur",
    Guna:   "arah juru bahasa dan pendampingan langsung" },
  catatan: { id: "Menghafal aksara menuntut disiplin harian bertahun-tahun. Yang berhenti biasanya berhenti di tahun kedua.",
             en: "Learning the scripts demands daily discipline for years. Those who quit usually quit in year two." } },

{ id: "j117", nama: "Teknologi Pengolahan Hasil Perikanan", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Yasa",
  perpaduan: ["Tata|Yasa", "Tata|Karsa"],
  watak_condong: {
    Reka:   "arah nilai tambah bagi nelayan kecil",
    Logika: "arah teknologi pengolahan dan pengembangan produk",
    Jaga:   "arah keamanan pangan dan ketertelusuran mutu",
    Guna:   "arah produksi dan penanganan hasil di lapangan" },
  catatan: { id: "Pekerjaannya dekat dengan pelabuhan dan unit pengolahan, bukan di kantor. Bau dan dingin adalah bagian sehari-hari.",
             en: "Work is near ports and processing units, not offices. Cold and smell are part of the day." } },

{ id: "j118", nama: "Manajemen Perbankan", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Karsa",
  perpaduan: ["Tata|Karsa", "Tata|Bakti"],
  watak_condong: {
    Reka:   "arah inklusi keuangan dan layanan yang adil",
    Logika: "arah analisis kredit dan manajemen risiko",
    Jaga:   "arah kepatuhan, audit, dan ketelitian transaksi",
    Guna:   "arah layanan nasabah dan pencapaian target" },
  catatan: { id: "Target penjualan produk adalah bagian tetap dari hampir semua posisi, termasuk yang terdengar administratif.",
             en: "Product sales targets are a fixed part of almost every role, including administrative-sounding ones." } },

{ id: "j119", nama: "Teknologi Rekayasa Komputer", jenjang: "D4", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Nalar",
  perpaduan: ["Tata|Nalar", "Tata|Yasa"],
  watak_condong: {
    Reka:   "arah teknologi yang memudahkan orang banyak",
    Logika: "arah jaringan, keamanan, dan arsitektur sistem",
    Jaga:   "arah pemeliharaan infrastruktur dan pemantauan",
    Guna:   "arah pemasangan dan penanganan gangguan jaringan" },
  catatan: { id: "Sertifikasi jaringan sering lebih dicari daripada ijazahnya. Kumpulkan sejak semester tiga.",
             en: "Network certifications are often sought more than the diploma. Collect them from semester three." } },

{ id: "j120", nama: "Sekretari", jenjang: "D3", rumpun: "Vokasi",
  kelompok_1: "Tata", kelompok_2: "Bakti",
  perpaduan: ["Tata|Bakti", "Tata|Karya"],
  watak_condong: {
    Reka:   "arah menjaga hubungan baik di sekitar pimpinan",
    Logika: "arah penyederhanaan alur kerja pimpinan",
    Jaga:   "arah jadwal, dokumen, dan kerahasiaan",
    Guna:   "arah penanganan kebutuhan mendadak" },
  catatan: { id: "Posisinya dekat dengan pengambil keputusan, dan itu memberi pengetahuan organisasi yang sulit didapat dari posisi lain.",
             en: "The role sits close to decision-makers, giving organisational insight hard to gain elsewhere." } }
];

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_JURUSAN;
