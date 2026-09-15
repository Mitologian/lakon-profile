/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — MATRIKS INDUSTRI
   LENGKAP — 13 industri, keenam pintu terisi di semuanya.

   Satu industri, enam pintu masuk. Inilah yang membuat Lakon bisa disebut
   asesmen PERAN, bukan hanya minat: dua orang bisa berada di industri yang
   sama dan mengerjakan hal yang sama sekali berbeda.

   Sekali tulis, dipakai oleh keempat Watak. Watak menentukan peran DI DALAM
   pintu itu, bukan pintunya.

   ═══ SYARAT SEBELUM TAYANG ═══
   Matriks harus diperkenalkan sebagai CARA MEMBACA, bukan katalog.
   Sertakan bagian yang mengajarkan polanya: industri apa pun bisa dipetakan
   jadi enam pintu, dan ini caranya. Tanpa itu, peserta yang industrinya
   tidak ada di daftar akan merasa alat ini tidak tahu tentang dirinya, dan
   fitur setengah lengkap menciptakan lubang yang sebelumnya tidak terasa.

   ═══ RISIKO BASI: RENDAH ═══
   Enam pintu itu struktural, bukan tren. Usaha makanan akan selalu butuh
   produksi, pengembangan produk, tampilan, pelayanan, pengembangan usaha,
   dan pengendalian biaya. Yang bisa basi hanya contoh nama jabatannya.
   Tidak ada angka gaji atau prospek kerja di sini, dan memang tidak boleh
   ditambahkan, karena itu yang paling cepat basi dan paling merusak.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_INDUSTRI = {

"kuliner": {
  nama: { id: "Kuliner & Makanan", en: "Food & Culinary" },
  pengantar: {
    id: "Satu industri, enam pintu masuk. Orang sering mengira menyukai kuliner berarti harus masuk dapur. Kenyataannya sebuah usaha makanan berdiri di atas enam jenis pekerjaan yang sangat berbeda, dan orang yang sama bisa bahagia di satu pintu sekaligus kelelahan di pintu sebelahnya.",
    en: "One industry, six ways in. People often assume that loving food means the kitchen. In practice a food business rests on six very different kinds of work, and the same person can be happy at one door and exhausted at the one beside it."
  },

  pintu: {
    Yasa: {
      apa: { id: "Dapur, produksi, kendali mutu bahan.",
             en: "Kitchen, production, ingredient quality control." },
      kenapa_nyaman: {
        id: "Hasil kerjanya bisa dipegang dan dicicipi hari itu juga. Tangan yang terlatih terasa lebih berarti daripada rapat, dan ada kepuasan pada alat yang dipakai sampai hafal betul perilakunya.",
        en: "The result can be held and tasted the same day. Trained hands matter more than meetings, and there is satisfaction in tools used until their behaviour is known by heart." },
      contoh: { id: ["Juru masak", "Baker / pastry", "Kepala produksi dapur", "Quality control bahan baku", "Butcher / spesialis potong"],
                en: ["Cook", "Baker / pastry", "Kitchen production lead", "Raw material QC", "Butcher / cutting specialist"] }
    },

    Nalar: {
      apa: { id: "Pengembangan resep, keamanan pangan, riset rasa dan daya simpan.",
             en: "Recipe development, food safety, research on flavour and shelf life." },
      kenapa_nyaman: {
        id: "Ada pertanyaan yang belum terjawab di tiap batch: kenapa yang ini lebih renyah, kenapa yang kemarin gagal. Menikmati bagian kerja yang berupa menguji dugaan berulang kali sampai ketemu sebabnya.",
        en: "Every batch holds an unanswered question: why this one is crisper, why yesterday's failed. Enjoys the part of the work that is testing a hunch over and over until the cause shows." },
      contoh: { id: ["Food technologist", "R&D produk makanan", "Ahli keamanan pangan", "Analis sensori", "Pengembang resep industri"],
                en: ["Food technologist", "Food product R&D", "Food safety specialist", "Sensory analyst", "Industrial recipe developer"] }
    },

    Karya: {
      apa: { id: "Plating, konsep hidangan, identitas dan suasana tempat.",
             en: "Plating, dish concept, identity and atmosphere of the place." },
      kenapa_nyaman: {
        id: "Makanan di sini adalah bahasa. Ada ruang menentukan bagaimana sesuatu terlihat, terasa, dan diingat, dan reaksi tamu pada menit pertama adalah umpan balik yang paling jujur.",
        en: "Food here is a language. There is room to decide how something looks, feels, and is remembered, and a guest's first-minute reaction is the most honest feedback there is." },
      contoh: { id: ["Chef konseptor menu", "Food stylist", "Desainer kemasan makanan", "Perancang konsep restoran", "Fotografer / videografer makanan"],
                en: ["Menu concept chef", "Food stylist", "Food packaging designer", "Restaurant concept designer", "Food photographer / videographer"] }
    },

    Bakti: {
      apa: { id: "Pelayanan, pelatihan tim, pengalaman tamu dari pintu masuk sampai pulang.",
             en: "Service, team training, guest experience from door to departure." },
      kenapa_nyaman: {
        id: "Hasil kerjanya terlihat di wajah orang, bukan di laporan. Ada kepuasan pada tamu yang datang lagi karena merasa dikenali, dan pada anggota tim baru yang tiga bulan kemudian sudah percaya diri.",
        en: "The result shows on people's faces, not in a report. There is satisfaction in a guest returning because they felt recognised, and in a new team member who is confident three months later." },
      contoh: { id: ["Manajer layanan / floor manager", "Trainer tim restoran", "Guest experience lead", "Konsultan pelatihan F&B", "Pengelola kantin sekolah / rumah sakit"],
                en: ["Service / floor manager", "Restaurant team trainer", "Guest experience lead", "F&B training consultant", "School / hospital catering manager"] }
    },

    Karsa: {
      apa: { id: "Pengembangan usaha, kemitraan, pembukaan cabang, waralaba.",
             en: "Business development, partnerships, new outlets, franchising." },
      kenapa_nyaman: {
        id: "Yang menarik di sini adalah kemungkinan yang belum ada: lokasi berikutnya, mitra berikutnya, pasar yang belum tersentuh. Menikmati bagian kerja yang berupa meyakinkan orang untuk ikut pada sesuatu yang belum terbukti.",
        en: "What draws here is what does not exist yet: the next location, the next partner, the market nobody has touched. Enjoys the part of the work that is convincing people to join something unproven." },
      contoh: { id: ["Pemilik / pendiri usaha makanan", "Business development F&B", "Manajer waralaba", "Manajer area multi-cabang", "Pengelola kemitraan pemasok"],
                en: ["Food business owner / founder", "F&B business development", "Franchise manager", "Multi-outlet area manager", "Supplier partnership manager"] }
    },

    Tata: {
      apa: { id: "Biaya pokok, rantai pasok, persediaan, standar operasi antar cabang.",
             en: "Cost of goods, supply chain, inventory, cross-outlet operating standards." },
      kenapa_nyaman: {
        id: "Ada kelegaan tersendiri saat angka cocok, stok tidak bocor, dan cabang kelima menghasilkan rasa yang sama dengan cabang pertama. Menikmati pekerjaan yang membuat hal rumit berjalan tanpa kejutan.",
        en: "There is a particular relief when the numbers reconcile, stock does not leak, and the fifth outlet tastes like the first. Enjoys work that keeps something complicated running without surprises." },
      contoh: { id: ["Cost control F&B", "Manajer rantai pasok makanan", "Manajer persediaan / gudang", "Auditor standar operasi cabang", "Perencana produksi katering"],
                en: ["F&B cost controller", "Food supply chain manager", "Inventory / warehouse manager", "Outlet standards auditor", "Catering production planner"] }
    }
  },

  /* Watak menentukan peran DI DALAM pintu, bukan pintunya.
     Contoh untuk satu pintu, supaya polanya terlihat. */
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama masuk lewat pintu Bakti dan mengerjakan hal yang berbeda. Bakti Jaga cenderung ke layanan yang standarnya terjaga hari demi hari. Bakti Guna ke lantai saat ramai, membaca situasi dan bergerak duluan. Bakti Reka ke pelatihan dan pengembangan orang. Bakti Karsa ke membangun hubungan dengan pelanggan besar dan mitra.",
    en: "Four people can all come in through the Bakti door and do different work. Bakti Jaga tends toward service whose standard holds day after day. Bakti Guna toward the floor at peak hour, reading the room and moving first. Bakti Reka toward training and developing people. Bakti Karsa toward building relationships with large customers and partners."
  }
}

,

/* ═══════════════════════════════════════════════════════════════════════
   KESEHATAN
   ═══════════════════════════════════════════════════════════════════════ */
kesehatan: {
  nama: { id: "Kesehatan", en: "Healthcare" },
  pengantar: {
    id: "Orang sering mengira menyukai dunia kesehatan berarti harus jadi dokter atau perawat. Kenyataannya rumah sakit berdiri di atas enam jenis pekerjaan yang sangat berbeda, dan sebagian besarnya tidak pernah menyentuh pasien.",
    en: "People often assume that caring about health means becoming a doctor or nurse. In practice a hospital rests on six very different kinds of work, and most of them never touch a patient." },
  pintu: {
    Yasa: {
      apa: { id: "Alat medis, instalasi, pemeliharaan fasilitas.", en: "Medical equipment, installation, facility maintenance." },
      kenapa_nyaman: { id: "Alat yang tadinya mati lalu hidup lagi adalah hasil yang bisa dilihat hari itu juga. Tidak perlu menunggu rapat untuk tahu pekerjaanmu berhasil.", en: "A machine that was dead and now runs is a result you can see the same day. No meeting is needed to know it worked." },
      contoh: { id: ["Teknisi elektromedis", "Teknisi laboratorium", "Manajer fasilitas rumah sakit", "Teknisi instalasi gas medis"],
                en: ["Biomedical technician", "Lab technician", "Hospital facility manager", "Medical gas installation technician"] } },
    Nalar: {
      apa: { id: "Diagnostik, riset klinis, analisis data kesehatan.", en: "Diagnostics, clinical research, health data analysis." },
      kenapa_nyaman: { id: "Ada pertanyaan yang jawabannya belum ada di mana pun, dan menelusurinya adalah pekerjaannya sendiri.", en: "There are questions whose answers are not yet anywhere, and tracing them is the job itself." },
      contoh: { id: ["Analis laboratorium medis", "Peneliti klinis", "Epidemiolog", "Analis data kesehatan"],
                en: ["Medical lab analyst", "Clinical researcher", "Epidemiologist", "Health data analyst"] } },
    Karya: {
      apa: { id: "Edukasi kesehatan, desain layanan, komunikasi publik.", en: "Health education, service design, public communication." },
      kenapa_nyaman: { id: "Informasi kesehatan yang benar sering tidak sampai karena cara menyampaikannya. Membuatnya dimengerti adalah pekerjaan tersendiri.", en: "Correct health information often fails to land because of how it is delivered. Making it understood is work in itself." },
      contoh: { id: ["Promotor kesehatan", "Desainer pengalaman pasien", "Komunikator kesehatan", "Perancang materi edukasi"],
                en: ["Health promoter", "Patient experience designer", "Health communicator", "Education material designer"] } },
    Bakti: {
      apa: { id: "Perawatan pasien, konseling, pendampingan keluarga.", en: "Patient care, counselling, family support." },
      kenapa_nyaman: { id: "Keadaan seseorang berubah karena kamu ada di sana, dan perubahan itu bisa dilihat pada orangnya, bukan di laporan.", en: "Someone's state changes because you are there, and the change shows in the person, not a report." },
      contoh: { id: ["Perawat", "Bidan", "Fisioterapis", "Konselor kesehatan"],
                en: ["Nurse", "Midwife", "Physiotherapist", "Health counsellor"] } },
    Karsa: {
      apa: { id: "Pengembangan layanan, kemitraan, pemasaran rumah sakit.", en: "Service development, partnerships, hospital marketing." },
      kenapa_nyaman: { id: "Ada yang dipertaruhkan dan hasilnya bergantung pada keputusanmu. Layanan baru tidak akan ada kalau tidak ada yang memulainya.", en: "Something is at stake and the outcome rests on your decision. A new service will not exist unless someone starts it." },
      contoh: { id: ["Manajer pengembangan bisnis rumah sakit", "Manajer kemitraan asuransi", "Direktur klinik", "Manajer pemasaran layanan kesehatan"],
                en: ["Hospital business development manager", "Insurance partnership manager", "Clinic director", "Healthcare marketing manager"] } },
    Tata: {
      apa: { id: "Rekam medis, akreditasi, klaim, tata kelola.", en: "Medical records, accreditation, claims, governance." },
      kenapa_nyaman: { id: "Ada yang harus berjalan tanpa kesalahan, dan kesalahannya berakibat nyata pada orang. Ketelitian di sini bukan sifat, tapi tanggung jawab.", en: "Something must run without error, and errors have real consequences for people. Precision here is a duty, not a trait." },
      contoh: { id: ["Perekam medis", "Petugas akreditasi rumah sakit", "Analis klaim asuransi", "Manajer mutu pelayanan"],
                en: ["Medical records officer", "Hospital accreditation officer", "Insurance claims analyst", "Service quality manager"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama masuk lewat pintu Bakti dan mengerjakan hal yang berbeda. Bakti Jaga cenderung ke perawatan yang standarnya sama setiap giliran. Bakti Guna ke gawat darurat, membaca situasi dan bertindak sebelum prosedurnya lengkap. Bakti Reka ke paliatif dan pendampingan keluarga. Bakti Logika ke mutu layanan dan sistem keperawatan.",
    en: "Four people can enter through the Bakti door and do different work. Bakti Jaga tends toward care whose standard holds every shift. Bakti Guna toward emergency, reading the situation and acting before the procedure is complete. Bakti Reka toward palliative care and family support. Bakti Logika toward care quality and nursing systems." }
},

/* ═══════════════════════════════════════════════════════════════════════
   PENDIDIKAN
   ═══════════════════════════════════════════════════════════════════════ */
pendidikan: {
  nama: { id: "Pendidikan", en: "Education" },
  pengantar: {
    id: "Menyukai dunia pendidikan sering langsung diterjemahkan jadi menjadi guru. Padahal sebuah sekolah atau lembaga belajar berdiri di atas enam jenis pekerjaan, dan hanya satu di antaranya berdiri di depan kelas.",
    en: "Caring about education is often translated straight into becoming a teacher. Yet a school rests on six kinds of work, and only one of them stands in front of a class." },
  pintu: {
    Yasa: {
      apa: { id: "Laboratorium, bengkel, sarana praktik, pendidikan vokasi.", en: "Labs, workshops, practical facilities, vocational training." },
      kenapa_nyaman: { id: "Mengajar lewat alat dan benda nyata, bukan lewat penjelasan. Muridnya belajar dengan memegang, dan kamu juga.", en: "Teaching through tools and real objects rather than explanation. Students learn by handling, and so do you." },
      contoh: { id: ["Instruktur vokasi", "Laboran sekolah", "Pengelola bengkel praktik", "Pelatih teknis bersertifikat"],
                en: ["Vocational instructor", "School lab technician", "Workshop manager", "Certified technical trainer"] } },
    Nalar: {
      apa: { id: "Riset pendidikan, asesmen, pengembangan kurikulum.", en: "Education research, assessment, curriculum development." },
      kenapa_nyaman: { id: "Pertanyaan kenapa sebagian murid tertinggal belum terjawab dengan baik, dan menjawabnya butuh data, bukan dugaan.", en: "Why some students fall behind is still poorly answered, and answering it needs data rather than assumption." },
      contoh: { id: ["Peneliti pendidikan", "Pengembang instrumen asesmen", "Analis data pendidikan", "Perancang kurikulum"],
                en: ["Education researcher", "Assessment instrument developer", "Education data analyst", "Curriculum designer"] } },
    Karya: {
      apa: { id: "Bahan ajar, media belajar, desain pengalaman belajar.", en: "Learning materials, media, learning experience design." },
      kenapa_nyaman: { id: "Materi yang benar bisa gagal hanya karena membosankan. Membuatnya hidup adalah pekerjaan tersendiri, bukan hiasan.", en: "Correct material can fail simply by being dull. Making it alive is its own work, not decoration." },
      contoh: { id: ["Perancang bahan ajar", "Produser konten belajar", "Ilustrator pendidikan", "Perancang permainan edukatif"],
                en: ["Learning material designer", "Learning content producer", "Education illustrator", "Educational game designer"] } },
    Bakti: {
      apa: { id: "Mengajar, konseling, pendampingan murid.", en: "Teaching, counselling, student support." },
      kenapa_nyaman: { id: "Perubahan pada satu murid terasa lebih memuaskan daripada pencapaian besar yang dikerjakan sendirian.", en: "A change in one student satisfies more than a large achievement made alone." },
      contoh: { id: ["Guru kelas", "Guru bimbingan konseling", "Pendamping pendidikan khusus", "Wali kelas"],
                en: ["Classroom teacher", "Guidance counsellor", "Special education aide", "Form tutor"] } },
    Karsa: {
      apa: { id: "Membangun lembaga, kemitraan, penerimaan murid baru.", en: "Building institutions, partnerships, student recruitment." },
      kenapa_nyaman: { id: "Sekolah yang bagus tidak otomatis bertahan. Ada yang harus meyakinkan orang tua, mencari mitra, dan menjaga usahanya berjalan.", en: "A good school does not survive automatically. Someone must convince parents, find partners, and keep the venture running." },
      contoh: { id: ["Kepala sekolah", "Manajer penerimaan murid", "Pengelola lembaga kursus", "Manajer kemitraan pendidikan"],
                en: ["School principal", "Admissions manager", "Course institution manager", "Education partnership manager"] } },
    Tata: {
      apa: { id: "Administrasi akademik, akreditasi, tata usaha.", en: "Academic administration, accreditation, registry." },
      kenapa_nyaman: { id: "Ada hal yang harus berjalan tanpa kesalahan agar guru bisa mengajar dengan tenang, dan itu jarang terlihat sampai tidak ada.", en: "Some things must run without error so teachers can teach calmly, and that is rarely seen until it is missing." },
      contoh: { id: ["Staf tata usaha", "Petugas akreditasi sekolah", "Pengelola data pokok pendidikan", "Manajer administrasi akademik"],
                en: ["Registry staff", "School accreditation officer", "Education data officer", "Academic administration manager"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama jadi guru dan mengajar dengan cara yang sangat berbeda. Bakti Jaga menjaga rutinitas kelas dan ekspektasi yang tidak berubah. Bakti Guna membaca kelas dan mengubah rencana di tengah jalan. Bakti Reka mendampingi murid yang sedang kesulitan di luar pelajaran. Bakti Logika merancang cara mengajar yang bisa diulang guru lain.",
    en: "Four people can all be teachers and teach very differently. Bakti Jaga holds classroom routine and unchanging expectations. Bakti Guna reads the room and changes plan mid-lesson. Bakti Reka stays with the student who is struggling beyond the subject. Bakti Logika designs teaching that other teachers can repeat." }
},

/* ═══════════════════════════════════════════════════════════════════════
   TEKNOLOGI
   ═══════════════════════════════════════════════════════════════════════ */
teknologi: {
  nama: { id: "Teknologi & Digital", en: "Technology & Digital" },
  pengantar: {
    id: "Bekerja di teknologi sering disamakan dengan menjadi programmer. Padahal sebuah produk digital berdiri di atas enam jenis pekerjaan, dan sebagian besar orang di dalamnya tidak menulis kode.",
    en: "Working in tech is often equated with being a programmer. Yet a digital product rests on six kinds of work, and most people in it write no code." },
  pintu: {
    Yasa: {
      apa: { id: "Infrastruktur, perangkat keras, jaringan, perangkat lapangan.", en: "Infrastructure, hardware, networks, field devices." },
      kenapa_nyaman: { id: "Ada mesin dan kabel yang nyata di baliknya. Kalau ada yang mati, kamu boleh langsung memperbaikinya.", en: "There are real machines and cables behind it. When something goes down, you may fix it yourself." },
      contoh: { id: ["Teknisi jaringan", "Insinyur infrastruktur", "Teknisi perangkat IoT", "Administrator pusat data"],
                en: ["Network technician", "Infrastructure engineer", "IoT device technician", "Data centre administrator"] } },
    Nalar: {
      apa: { id: "Rekayasa perangkat lunak, data, keamanan, riset.", en: "Software engineering, data, security, research." },
      kenapa_nyaman: { id: "Masalah yang belum ada jawabannya adalah bahan bakarnya, dan salah dulu justru bagian dari caranya bekerja.", en: "Problems without known answers are the fuel, and being wrong first is part of how the work runs." },
      contoh: { id: ["Pengembang perangkat lunak", "Ilmuwan data", "Analis keamanan siber", "Insinyur pembelajaran mesin"],
                en: ["Software developer", "Data scientist", "Cybersecurity analyst", "Machine learning engineer"] } },
    Karya: {
      apa: { id: "Desain produk, antarmuka, konten, riset pengguna.", en: "Product design, interface, content, user research." },
      kenapa_nyaman: { id: "Bentuknya belum ditentukan dan kamu ikut menentukannya. Hasilnya dipakai orang, jadi pilihan kecil punya akibat.", en: "The shape is not yet decided and you help decide it. People use the result, so small choices have consequences." },
      contoh: { id: ["Desainer produk digital", "Peneliti pengguna", "Penulis UX", "Desainer antarmuka"],
                en: ["Product designer", "User researcher", "UX writer", "Interface designer"] } },
    Bakti: {
      apa: { id: "Dukungan pengguna, keberhasilan pelanggan, pelatihan produk.", en: "User support, customer success, product training." },
      kenapa_nyaman: { id: "Produk sebagus apa pun gagal kalau orangnya tidak bisa memakainya. Menemani sampai bisa adalah pekerjaannya.", en: "However good a product is, it fails when people cannot use it. Staying with them until they can is the job." },
      contoh: { id: ["Manajer keberhasilan pelanggan", "Spesialis dukungan teknis", "Pelatih produk", "Manajer komunitas pengguna"],
                en: ["Customer success manager", "Technical support specialist", "Product trainer", "User community manager"] } },
    Karsa: {
      apa: { id: "Kemitraan, penjualan, pengembangan pasar, pendanaan.", en: "Partnerships, sales, market development, fundraising." },
      kenapa_nyaman: { id: "Produk bagus tidak menjual dirinya sendiri. Ada yang harus membuka pintu yang tertutup bagi tim lain.", en: "A good product does not sell itself. Someone must open doors closed to everyone else." },
      contoh: { id: ["Manajer pengembangan bisnis", "Manajer kemitraan", "Manajer akun korporat", "Pendiri usaha rintisan"],
                en: ["Business development manager", "Partnership manager", "Enterprise account manager", "Start-up founder"] } },
    Tata: {
      apa: { id: "Tata kelola data, kepatuhan, operasional TI, manajemen rilis.", en: "Data governance, compliance, IT operations, release management." },
      kenapa_nyaman: { id: "Ada yang harus jalan setiap hari tanpa kejutan, dan hari tanpa kejutan adalah tanda pekerjaannya berhasil.", en: "Something must run daily without surprises, and a day without surprises is the sign it worked." },
      contoh: { id: ["Analis tata kelola data", "Manajer kepatuhan TI", "Insinyur penjaminan mutu", "Manajer operasional TI"],
                en: ["Data governance analyst", "IT compliance manager", "QA engineer", "IT operations manager"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Nalar",
    id: "Empat orang bisa sama-sama masuk lewat pintu Nalar dan mengerjakan hal yang berbeda. Nalar Logika ke arsitektur sistem dan masalah yang belum terpecahkan. Nalar Guna ke perbaikan cepat dan fitur yang bisa dipakai minggu depan. Nalar Jaga ke pengujian, keamanan, dan rilis yang terkendali. Nalar Reka ke produk yang berdampak pada orang yang memakainya.",
    en: "Four people can enter through the Nalar door and do different work. Nalar Logika toward system architecture and unsolved problems. Nalar Guna toward quick fixes and features usable next week. Nalar Jaga toward testing, security, and controlled releases. Nalar Reka toward products that affect the people using them." }
},

/* ═══════════════════════════════════════════════════════════════════════
   KEUANGAN
   ═══════════════════════════════════════════════════════════════════════ */
keuangan: {
  nama: { id: "Keuangan & Perbankan", en: "Finance & Banking" },
  pengantar: {
    id: "Dunia keuangan sering dibayangkan sebagai pekerjaan berhitung di balik meja. Padahal sebuah bank atau lembaga keuangan berdiri di atas enam jenis pekerjaan, dan sebagian besarnya justru berurusan dengan orang.",
    en: "Finance is often pictured as calculation behind a desk. Yet a bank rests on six kinds of work, and most of it deals with people." },
  pintu: {
    Yasa: {
      apa: { id: "Penilaian aset fisik, agunan, pemeliharaan jaringan cabang.", en: "Physical asset valuation, collateral, branch network upkeep." },
      kenapa_nyaman: { id: "Yang dinilai adalah benda nyata yang bisa dilihat dan diukur, bukan angka yang berdiri sendiri.", en: "What you assess is a real object you can see and measure, not a number standing alone." },
      contoh: { id: ["Penilai aset dan properti", "Surveyor agunan", "Manajer fasilitas cabang", "Penilai kendaraan"],
                en: ["Asset and property appraiser", "Collateral surveyor", "Branch facility manager", "Vehicle appraiser"] } },
    Nalar: {
      apa: { id: "Analisis risiko, aktuaria, riset investasi, model keuangan.", en: "Risk analysis, actuarial work, investment research, financial modelling." },
      kenapa_nyaman: { id: "Ada pertanyaan yang jawabannya menentukan keputusan besar, dan ketepatan lebih dihargai daripada kecepatan.", en: "There are questions whose answers decide large moves, and accuracy counts more than speed." },
      contoh: { id: ["Analis risiko kredit", "Aktuaris", "Analis investasi", "Analis kuantitatif"],
                en: ["Credit risk analyst", "Actuary", "Investment analyst", "Quantitative analyst"] } },
    Karya: {
      apa: { id: "Merek, komunikasi produk, literasi keuangan, desain layanan.", en: "Brand, product communication, financial literacy, service design." },
      kenapa_nyaman: { id: "Produk keuangan sulit dimengerti kebanyakan orang. Membuatnya bisa dipahami adalah pekerjaan tersendiri.", en: "Financial products are hard for most people to grasp. Making them understandable is work in itself." },
      contoh: { id: ["Manajer merek perbankan", "Perancang pengalaman nasabah", "Edukator keuangan", "Penulis konten keuangan"],
                en: ["Banking brand manager", "Customer experience designer", "Financial educator", "Financial content writer"] } },
    Bakti: {
      apa: { id: "Layanan nasabah, perencanaan keuangan pribadi, pembiayaan mikro.", en: "Customer service, personal financial planning, microfinance." },
      kenapa_nyaman: { id: "Keputusan keuangan sering menentukan hidup seseorang, dan menemani orang mengambilnya adalah bagian yang berarti.", en: "Financial decisions often shape someone's life, and being with them as they decide is the part that matters." },
      contoh: { id: ["Perencana keuangan", "Petugas pembiayaan mikro", "Manajer layanan nasabah", "Konsultan nasabah prioritas"],
                en: ["Financial planner", "Microfinance officer", "Customer service manager", "Priority banking consultant"] } },
    Karsa: {
      apa: { id: "Penjualan produk, kemitraan, pengembangan pasar.", en: "Product sales, partnerships, market development." },
      kenapa_nyaman: { id: "Ada target yang nyata dan hasilnya bergantung pada kepercayaan yang kamu bangun, bukan pada brosurnya.", en: "There are real targets, and results rest on the trust you build rather than the brochure." },
      contoh: { id: ["Manajer relasi korporat", "Manajer penjualan produk", "Manajer kemitraan", "Kepala cabang"],
                en: ["Corporate relationship manager", "Product sales manager", "Partnership manager", "Branch head"] } },
    Tata: {
      apa: { id: "Kepatuhan, audit, operasional transaksi, pelaporan.", en: "Compliance, audit, transaction operations, reporting." },
      kenapa_nyaman: { id: "Kesalahan sekecil apa pun berakibat nyata, dan ada kelegaan tersendiri saat angkanya akhirnya bertemu.", en: "The smallest error has real consequences, and there is a particular relief when the figures finally reconcile." },
      contoh: { id: ["Petugas kepatuhan", "Auditor internal", "Analis operasional transaksi", "Pengendali keuangan"],
                en: ["Compliance officer", "Internal auditor", "Transaction operations analyst", "Financial controller"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Tata",
    id: "Empat orang bisa sama-sama masuk lewat pintu Tata dan mengerjakan hal yang berbeda. Tata Jaga ke kepatuhan dan audit, tempat ketelitian tidak bisa ditawar. Tata Logika ke merancang ulang proses yang berbelit. Tata Guna ke operasional harian yang harus cepat sekaligus akurat. Tata Reka ke sistem yang memastikan nasabah diperlakukan adil.",
    en: "Four people can enter through the Tata door and do different work. Tata Jaga toward compliance and audit, where precision is not negotiable. Tata Logika toward redesigning tangled processes. Tata Guna toward daily operations that must be fast and accurate at once. Tata Reka toward systems that ensure customers are treated fairly." }
}
,

/* ═══════════════════════════════════════════════════════════════════════
   KONSTRUKSI & PROPERTI
   ═══════════════════════════════════════════════════════════════════════ */
konstruksi: {
  nama: { id: "Konstruksi & Properti", en: "Construction & Property" },
  pengantar: {
    id: "Konstruksi sering dibayangkan sebagai pekerjaan di bawah terik dengan helm proyek. Padahal sebuah gedung berdiri di atas enam jenis pekerjaan, dan sebagian besarnya selesai jauh sebelum tiang pertama dipasang.",
    en: "Construction is often pictured as hard hats under the sun. Yet a building rests on six kinds of work, and most of it is done long before the first column goes up." },
  pintu: {
    Yasa: {
      apa: { id: "Pelaksanaan lapangan, pengawasan mutu, pemeliharaan bangunan.", en: "Site execution, quality supervision, building maintenance." },
      kenapa_nyaman: { id: "Yang tadi pagi belum ada, sore ini sudah berdiri. Hasilnya bisa dipegang dan tidak perlu dijelaskan.", en: "What did not exist this morning stands by evening. The result can be touched and needs no explaining." },
      contoh: { id: ["Pelaksana lapangan", "Pengawas mutu konstruksi", "Manajer pemeliharaan gedung", "Surveyor pengukuran"],
                en: ["Site supervisor", "Construction QC inspector", "Building maintenance manager", "Survey engineer"] } },
    Nalar: {
      apa: { id: "Perhitungan struktur, geoteknik, analisis kelayakan.", en: "Structural calculation, geotechnics, feasibility analysis." },
      kenapa_nyaman: { id: "Ada perhitungan yang tidak boleh keliru karena akibatnya nyata, dan ketepatan lebih dihargai daripada kecepatan.", en: "There are calculations that must not be wrong because the consequences are real, and accuracy counts more than speed." },
      contoh: { id: ["Insinyur struktur", "Ahli geoteknik", "Analis kelayakan proyek", "Perencana sistem bangunan"],
                en: ["Structural engineer", "Geotechnical specialist", "Project feasibility analyst", "Building systems planner"] } },
    Karya: {
      apa: { id: "Perancangan arsitektur, interior, lanskap, visualisasi.", en: "Architectural design, interiors, landscape, visualisation." },
      kenapa_nyaman: { id: "Bentuknya belum ditentukan dan kamu ikut menentukannya. Orang akan tinggal di dalam pilihan kecilmu bertahun-tahun.", en: "The shape is not decided and you help decide it. People will live inside your small choices for years." },
      contoh: { id: ["Arsitek", "Desainer interior", "Arsitek lanskap", "Visualiser arsitektur"],
                en: ["Architect", "Interior designer", "Landscape architect", "Architectural visualiser"] } },
    Bakti: {
      apa: { id: "Keselamatan kerja, hubungan warga, pengelolaan penghuni.", en: "Work safety, community relations, occupant management." },
      kenapa_nyaman: { id: "Proyek besar selalu menyentuh orang di sekitarnya. Memastikan mereka tidak dirugikan adalah pekerjaan tersendiri.", en: "A large project always touches the people around it. Ensuring they are not harmed is its own work." },
      contoh: { id: ["Petugas keselamatan kerja", "Manajer hubungan warga", "Pengelola gedung dan penghuni", "Koordinator pembebasan lahan"],
                en: ["Safety officer", "Community relations manager", "Building and tenant manager", "Land acquisition coordinator"] } },
    Karsa: {
      apa: { id: "Pengembangan proyek, penjualan properti, kemitraan investor.", en: "Project development, property sales, investor partnerships." },
      kenapa_nyaman: { id: "Ada yang dipertaruhkan dan proyeknya tidak akan ada kalau tidak ada yang meyakinkan orang untuk memulainya.", en: "Something is at stake, and the project will not exist unless someone convinces people to start it." },
      contoh: { id: ["Manajer pengembangan properti", "Manajer penjualan properti", "Manajer hubungan investor", "Manajer tender"],
                en: ["Property development manager", "Property sales manager", "Investor relations manager", "Tender manager"] } },
    Tata: {
      apa: { id: "Estimasi biaya, kontrak, perizinan, pengendalian proyek.", en: "Cost estimation, contracts, permits, project control." },
      kenapa_nyaman: { id: "Satu kesalahan di kontrak atau perizinan bisa menghentikan seluruh proyek. Ketelitian di sini menahan beban besar.", en: "One error in a contract or permit can halt an entire project. Precision here carries a heavy load." },
      contoh: { id: ["Estimator biaya", "Manajer kontrak", "Pengurus perizinan bangunan", "Pengendali proyek"],
                en: ["Cost estimator", "Contract manager", "Building permit officer", "Project controller"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Yasa",
    id: "Empat orang bisa sama-sama masuk lewat pintu Yasa dan mengerjakan hal yang berbeda. Yasa Jaga ke pengawasan mutu, memastikan tidak ada yang lolos di bawah standar. Yasa Guna ke lapangan saat ada masalah mendadak yang tidak ada prosedurnya. Yasa Logika ke metode kerja dan efisiensi pelaksanaan. Yasa Reka ke bangunan yang benar-benar layak dihuni orangnya.",
    en: "Four people can enter through the Yasa door and do different work. Yasa Jaga toward quality supervision, letting nothing substandard through. Yasa Guna toward the site when something goes wrong with no procedure for it. Yasa Logika toward method and efficiency of execution. Yasa Reka toward buildings genuinely fit for the people in them." }
},

/* ═══════════════════════════════════════════════════════════════════════
   MANUFAKTUR
   ═══════════════════════════════════════════════════════════════════════ */
manufaktur: {
  nama: { id: "Manufaktur & Industri", en: "Manufacturing & Industry" },
  pengantar: {
    id: "Pabrik sering dibayangkan sebagai deretan mesin dan orang di lini produksi. Padahal sebuah pabrik berdiri di atas enam jenis pekerjaan, dan sebagian besarnya menentukan hasil sebelum mesin pertama dinyalakan.",
    en: "A factory is often pictured as rows of machines and line workers. Yet it rests on six kinds of work, most of which decide the outcome before the first machine starts." },
  pintu: {
    Yasa: {
      apa: { id: "Produksi, pemeliharaan mesin, perakitan, teknik lapangan.", en: "Production, machine maintenance, assembly, field engineering." },
      kenapa_nyaman: { id: "Mesin yang tadi mati lalu hidup lagi adalah hasil yang tidak perlu dijelaskan kepada siapa pun.", en: "A machine that was down and now runs is a result that needs no explaining." },
      contoh: { id: ["Teknisi pemeliharaan", "Supervisor produksi", "Teknisi perakitan", "Insinyur lapangan"],
                en: ["Maintenance technician", "Production supervisor", "Assembly technician", "Field engineer"] } },
    Nalar: {
      apa: { id: "Riset produk, pengujian material, analisis proses.", en: "Product research, material testing, process analysis." },
      kenapa_nyaman: { id: "Kenapa cacatnya muncul adalah pertanyaan yang belum terjawab, dan menelusurinya sampai akar adalah pekerjaannya.", en: "Why the defect appears is an unanswered question, and tracing it to the root is the job." },
      contoh: { id: ["Peneliti dan pengembang produk", "Analis laboratorium material", "Insinyur proses", "Analis data produksi"],
                en: ["Product R&D researcher", "Materials lab analyst", "Process engineer", "Production data analyst"] } },
    Karya: {
      apa: { id: "Desain produk, kemasan, identitas merek pabrikan.", en: "Product design, packaging, manufacturer brand identity." },
      kenapa_nyaman: { id: "Produk yang berfungsi belum tentu dipilih orang. Bentuk dan kemasannya menentukan sama besar.", en: "A product that works is not automatically chosen. Form and packaging decide as much." },
      contoh: { id: ["Desainer produk industri", "Desainer kemasan", "Manajer merek pabrikan", "Perancang purwarupa"],
                en: ["Industrial product designer", "Packaging designer", "Manufacturer brand manager", "Prototype designer"] } },
    Bakti: {
      apa: { id: "Keselamatan kerja, pelatihan operator, hubungan industrial.", en: "Work safety, operator training, industrial relations." },
      kenapa_nyaman: { id: "Pabrik berjalan karena orangnya, dan menjaga mereka tetap aman serta terlatih adalah pekerjaan yang terus-menerus.", en: "A factory runs on its people, and keeping them safe and trained is continuous work." },
      contoh: { id: ["Petugas keselamatan dan kesehatan kerja", "Pelatih operator", "Manajer hubungan industrial", "Koordinator pengembangan tenaga kerja"],
                en: ["Occupational health and safety officer", "Operator trainer", "Industrial relations manager", "Workforce development coordinator"] } },
    Karsa: {
      apa: { id: "Penjualan industri, pengadaan strategis, pengembangan pasar.", en: "Industrial sales, strategic sourcing, market development." },
      kenapa_nyaman: { id: "Pabrik tidak berjalan tanpa pesanan. Membuka pasar baru adalah taruhan yang hasilnya terlihat jelas.", en: "A factory does not run without orders. Opening a new market is a bet whose result is plain to see." },
      contoh: { id: ["Manajer penjualan industri", "Manajer pengadaan strategis", "Manajer ekspor", "Manajer pengembangan pasar"],
                en: ["Industrial sales manager", "Strategic sourcing manager", "Export manager", "Market development manager"] } },
    Tata: {
      apa: { id: "Perencanaan produksi, persediaan, mutu, kepatuhan standar.", en: "Production planning, inventory, quality, standards compliance." },
      kenapa_nyaman: { id: "Ada yang harus berjalan sama setiap hari, dan hari tanpa kejutan adalah tanda pekerjaannya berhasil.", en: "Something must run the same every day, and a day without surprises is the sign it worked." },
      contoh: { id: ["Perencana produksi", "Pengendali persediaan", "Manajer penjaminan mutu", "Petugas sertifikasi standar"],
                en: ["Production planner", "Inventory controller", "Quality assurance manager", "Standards certification officer"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Tata",
    id: "Empat orang bisa sama-sama masuk lewat pintu Tata dan mengerjakan hal yang berbeda. Tata Jaga ke penjaminan mutu, tempat standar tidak boleh turun meski tenggat mendekat. Tata Logika ke merancang ulang alur produksi yang boros. Tata Guna ke perencanaan harian yang harus berubah saat pesanan mendadak masuk. Tata Reka ke sistem yang membuat kerja orang lebih manusiawi.",
    en: "Four people can enter through the Tata door and do different work. Tata Jaga toward quality assurance, where the standard cannot drop as deadlines close in. Tata Logika toward redesigning wasteful production flow. Tata Guna toward daily planning that must shift when a rush order lands. Tata Reka toward systems that make the work more humane." }
},

/* ═══════════════════════════════════════════════════════════════════════
   RITEL & KONSUMEN
   ═══════════════════════════════════════════════════════════════════════ */
ritel: {
  nama: { id: "Ritel & Barang Konsumen", en: "Retail & Consumer Goods" },
  pengantar: {
    id: "Ritel sering dianggap pekerjaan menjaga toko. Padahal sebuah jaringan ritel berdiri di atas enam jenis pekerjaan, dan sebagian besarnya terjadi jauh sebelum barang sampai di rak.",
    en: "Retail is often seen as minding a shop. Yet a retail chain rests on six kinds of work, most of it happening long before goods reach the shelf." },
  pintu: {
    Yasa: {
      apa: { id: "Gudang, distribusi, penataan toko, pemeliharaan peralatan.", en: "Warehousing, distribution, store fit-out, equipment upkeep." },
      kenapa_nyaman: { id: "Barang berpindah dan raknya terisi. Hasil kerjanya terlihat di akhir hari tanpa perlu laporan.", en: "Goods move and shelves fill. The result is visible at day's end without a report." },
      contoh: { id: ["Supervisor gudang", "Koordinator distribusi", "Petugas penataan toko", "Teknisi peralatan toko"],
                en: ["Warehouse supervisor", "Distribution coordinator", "Store layout officer", "Store equipment technician"] } },
    Nalar: {
      apa: { id: "Analisis penjualan, riset konsumen, penetapan harga.", en: "Sales analysis, consumer research, pricing." },
      kenapa_nyaman: { id: "Kenapa barang ini laku di satu kota dan tidak di kota lain adalah pertanyaan yang jawabannya ada di data.", en: "Why an item sells in one city and not another is a question whose answer sits in the data." },
      contoh: { id: ["Analis penjualan", "Peneliti konsumen", "Analis penetapan harga", "Analis kategori produk"],
                en: ["Sales analyst", "Consumer researcher", "Pricing analyst", "Category analyst"] } },
    Karya: {
      apa: { id: "Visual merchandising, kemasan, kampanye, desain toko.", en: "Visual merchandising, packaging, campaigns, store design." },
      kenapa_nyaman: { id: "Barang yang sama bisa terjual atau terlewat hanya karena cara menampilkannya, dan itu keputusanmu.", en: "The same item can sell or be missed purely on how it is shown, and that is your call." },
      contoh: { id: ["Visual merchandiser", "Desainer kemasan", "Perancang kampanye ritel", "Desainer konsep toko"],
                en: ["Visual merchandiser", "Packaging designer", "Retail campaign designer", "Store concept designer"] } },
    Bakti: {
      apa: { id: "Pelayanan pelanggan, pelatihan staf toko, penanganan keluhan.", en: "Customer service, store staff training, complaint handling." },
      kenapa_nyaman: { id: "Orang yang datang dengan keluhan lalu pulang merasa dibantu adalah perubahan yang terlihat langsung pada orangnya.", en: "Someone who arrives complaining and leaves feeling helped is a change visible in the person." },
      contoh: { id: ["Manajer layanan pelanggan", "Pelatih staf toko", "Kepala toko", "Spesialis pengalaman pelanggan"],
                en: ["Customer service manager", "Store staff trainer", "Store manager", "Customer experience specialist"] } },
    Karsa: {
      apa: { id: "Pengembangan jaringan, kemitraan pemasok, ekspansi pasar.", en: "Network expansion, supplier partnerships, market growth." },
      kenapa_nyaman: { id: "Toko baru tidak muncul sendiri. Ada yang harus meyakinkan pemilik lahan, pemasok, dan investor sekaligus.", en: "New stores do not appear on their own. Someone must convince landlords, suppliers, and investors at once." },
      contoh: { id: ["Manajer pengembangan jaringan", "Manajer kemitraan pemasok", "Manajer waralaba", "Manajer area"],
                en: ["Network development manager", "Supplier partnership manager", "Franchise manager", "Area manager"] } },
    Tata: {
      apa: { id: "Pengendalian persediaan, kasir dan keuangan toko, audit.", en: "Inventory control, store cash and finance, audit." },
      kenapa_nyaman: { id: "Selisih stok sekecil apa pun akan ketahuan, dan ada kelegaan saat hitungannya akhirnya cocok.", en: "The smallest stock discrepancy shows up, and there is relief when the count finally matches." },
      contoh: { id: ["Pengendali persediaan", "Auditor toko", "Analis keuangan ritel", "Supervisor administrasi toko"],
                en: ["Inventory controller", "Store auditor", "Retail finance analyst", "Store administration supervisor"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama masuk lewat pintu Bakti dan mengerjakan hal yang berbeda. Bakti Guna ke lantai toko saat ramai, membaca situasi dan bergerak duluan. Bakti Jaga ke layanan yang standarnya sama meski hari sedang berat. Bakti Reka ke pelatihan dan pengembangan staf. Bakti Logika ke sistem layanan yang bisa dijalankan seluruh cabang.",
    en: "Four people can enter through the Bakti door and do different work. Bakti Guna toward the shop floor when it is busy, reading the situation and moving first. Bakti Jaga toward service whose standard holds even on a hard day. Bakti Reka toward staff training and development. Bakti Logika toward service systems every branch can run." }
},

/* ═══════════════════════════════════════════════════════════════════════
   MEDIA & KREATIF
   ═══════════════════════════════════════════════════════════════════════ */
media: {
  nama: { id: "Media & Industri Kreatif", en: "Media & Creative Industry" },
  pengantar: {
    id: "Industri kreatif sering disamakan dengan menjadi seniman atau desainer. Padahal sebuah rumah produksi atau penerbit berdiri di atas enam jenis pekerjaan, dan tanpa lima yang lain, karya bagus pun tidak pernah sampai ke orang.",
    en: "The creative industry is often equated with being an artist or designer. Yet a production house rests on six kinds of work, and without the other five, good work never reaches anyone." },
  pintu: {
    Yasa: {
      apa: { id: "Teknis produksi, kamera, tata suara, tata cahaya, cetak.", en: "Production technicals, camera, sound, lighting, print." },
      kenapa_nyaman: { id: "Alat adalah bahan kerjanya, dan keahlian tangan yang terlatih lebih berarti daripada rapat konsep.", en: "Equipment is the material, and trained hands matter more than concept meetings." },
      contoh: { id: ["Penata kamera", "Penata suara", "Penata cahaya", "Operator mesin cetak"],
                en: ["Camera operator", "Sound engineer", "Lighting technician", "Print machine operator"] } },
    Nalar: {
      apa: { id: "Riset konten, analitik audiens, riset naskah.", en: "Content research, audience analytics, script research." },
      kenapa_nyaman: { id: "Kenapa satu tayangan berhasil dan yang mirip gagal adalah pertanyaan yang jawabannya bisa ditelusuri.", en: "Why one show lands and a similar one does not is a question that can be traced." },
      contoh: { id: ["Peneliti konten", "Analis audiens", "Periset naskah", "Analis performa kanal"],
                en: ["Content researcher", "Audience analyst", "Script researcher", "Channel performance analyst"] } },
    Karya: {
      apa: { id: "Penulisan, penyutradaraan, desain, penyuntingan.", en: "Writing, directing, design, editing." },
      kenapa_nyaman: { id: "Bentuknya belum ditentukan, boleh dicoba beberapa kali, dan hasilnya akan dirasakan orang.", en: "The shape is not decided, several attempts are allowed, and people will feel the result." },
      contoh: { id: ["Penulis naskah", "Sutradara", "Desainer grafis", "Penyunting video"],
                en: ["Scriptwriter", "Director", "Graphic designer", "Video editor"] } },
    Bakti: {
      apa: { id: "Manajemen talenta, komunitas, pendampingan kreator.", en: "Talent management, community, creator support." },
      kenapa_nyaman: { id: "Orang kreatif sering butuh orang yang mengurus sisanya. Menjadi orang itu adalah pekerjaan tersendiri.", en: "Creative people often need someone handling the rest. Being that person is its own work." },
      contoh: { id: ["Manajer talenta", "Manajer komunitas", "Pendamping kreator", "Koordinator relawan acara"],
                en: ["Talent manager", "Community manager", "Creator support lead", "Event volunteer coordinator"] } },
    Karsa: {
      apa: { id: "Penjualan iklan, kemitraan merek, pendanaan produksi.", en: "Ad sales, brand partnerships, production funding." },
      kenapa_nyaman: { id: "Karya bagus tetap tidak jadi kalau tidak ada yang membiayainya. Membuka pintu itu adalah taruhannya sendiri.", en: "Good work still will not happen without funding. Opening that door is its own gamble." },
      contoh: { id: ["Manajer penjualan iklan", "Manajer kemitraan merek", "Produser eksekutif", "Manajer pengembangan bisnis media"],
                en: ["Ad sales manager", "Brand partnership manager", "Executive producer", "Media business development manager"] } },
    Tata: {
      apa: { id: "Manajemen produksi, jadwal, hak cipta, anggaran.", en: "Production management, scheduling, copyright, budgeting." },
      kenapa_nyaman: { id: "Produksi kreatif mudah berantakan, dan ada kelegaan tersendiri saat semuanya selesai tepat waktu.", en: "Creative production falls apart easily, and there is a particular relief when it all lands on time." },
      contoh: { id: ["Manajer produksi", "Koordinator jadwal produksi", "Petugas hak cipta dan lisensi", "Pengendali anggaran produksi"],
                en: ["Production manager", "Production scheduler", "Rights and licensing officer", "Production budget controller"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Karya",
    id: "Empat orang bisa sama-sama masuk lewat pintu Karya dan mengerjakan hal yang berbeda. Karya Reka ke gagasan dan pesan yang diperjuangkan. Karya Logika ke sistem desain dan panduan yang membuat karya tim tetap konsisten. Karya Jaga ke penyelesaian akhir yang mutunya tidak pernah turun. Karya Guna ke liputan langsung dan momen yang tidak terulang.",
    en: "Four people can enter through the Karya door and do different work. Karya Reka toward the idea and the message worth fighting for. Karya Logika toward design systems that keep the team's output consistent. Karya Jaga toward final execution whose quality never drops. Karya Guna toward live coverage and moments that do not repeat." }
}
,

/* ═══════════════════════════════════════════════════════════════════════
   PERTANIAN & PANGAN
   ═══════════════════════════════════════════════════════════════════════ */
pertanian: {
  nama: { id: "Pertanian & Pangan", en: "Agriculture & Food Systems" },
  pengantar: {
    id: "Pertanian sering dibayangkan sebagai bekerja di sawah. Padahal rantai pangan berdiri di atas enam jenis pekerjaan, dan sebagian besarnya terjadi sebelum benih ditanam atau setelah panen diangkut.",
    en: "Agriculture is often pictured as working the field. Yet the food chain rests on six kinds of work, most of it before the seed goes in or after the harvest leaves." },
  pintu: {
    Yasa: {
      apa: { id: "Budidaya, alat mesin pertanian, pengolahan hasil.", en: "Cultivation, farm machinery, post-harvest processing." },
      kenapa_nyaman: { id: "Hasilnya tumbuh dan bisa dipegang. Keahlian tangan dan membaca tanah tidak bisa digantikan penjelasan.", en: "The result grows and can be held. Hand skill and reading the soil cannot be replaced by explanation." },
      contoh: { id: ["Manajer kebun", "Teknisi alat mesin pertanian", "Operator pengolahan hasil", "Penyuluh teknis budidaya"],
                en: ["Plantation manager", "Farm machinery technician", "Processing operator", "Cultivation field officer"] } },
    Nalar: {
      apa: { id: "Pemuliaan tanaman, riset hama, analisis mutu pangan.", en: "Plant breeding, pest research, food quality analysis." },
      kenapa_nyaman: { id: "Kenapa panen turun tahun ini adalah pertanyaan yang jawabannya harus ditelusuri, bukan ditebak.", en: "Why yields fell this year is a question that must be traced, not guessed." },
      contoh: { id: ["Peneliti pemuliaan tanaman", "Ahli perlindungan tanaman", "Analis mutu pangan", "Peneliti pascapanen"],
                en: ["Plant breeding researcher", "Crop protection specialist", "Food quality analyst", "Post-harvest researcher"] } },
    Karya: {
      apa: { id: "Kemasan, merek produk pangan, komunikasi pertanian.", en: "Packaging, food brand, agricultural communication." },
      kenapa_nyaman: { id: "Hasil panen yang sama bisa bernilai berkali lipat hanya karena cara mengemas dan menceritakannya.", en: "The same harvest can be worth many times more purely through how it is packaged and told." },
      contoh: { id: ["Desainer kemasan pangan", "Manajer merek produk tani", "Pembuat konten pertanian", "Perancang identitas produk lokal"],
                en: ["Food packaging designer", "Agri-brand manager", "Agricultural content creator", "Local product identity designer"] } },
    Bakti: {
      apa: { id: "Penyuluhan, pendampingan petani, koperasi tani.", en: "Extension work, farmer support, farming cooperatives." },
      kenapa_nyaman: { id: "Keadaan satu keluarga petani berubah karena kamu mendampinginya, dan perubahan itu terlihat pada orangnya.", en: "A farming family's situation changes because you stayed with them, and the change shows in the people." },
      contoh: { id: ["Penyuluh pertanian", "Pendamping koperasi tani", "Fasilitator kelompok tani", "Pengelola program pemberdayaan"],
                en: ["Agricultural extension officer", "Farm cooperative facilitator", "Farmer group facilitator", "Empowerment programme manager"] } },
    Karsa: {
      apa: { id: "Perdagangan hasil tani, ekspor, membangun usaha tani.", en: "Produce trading, export, building agribusiness." },
      kenapa_nyaman: { id: "Harga ditentukan di pasar, bukan di kebun. Membuka pembeli baru adalah taruhan yang hasilnya cepat terlihat.", en: "Price is set in the market, not the field. Opening a new buyer is a bet whose result shows quickly." },
      contoh: { id: ["Manajer perdagangan hasil tani", "Manajer ekspor pertanian", "Pendiri usaha agribisnis", "Manajer kemitraan petani"],
                en: ["Produce trading manager", "Agricultural export manager", "Agribusiness founder", "Farmer partnership manager"] } },
    Tata: {
      apa: { id: "Sertifikasi, ketertelusuran, rantai pasok, keamanan pangan.", en: "Certification, traceability, supply chain, food safety." },
      kenapa_nyaman: { id: "Satu batch yang tidak tertelusur bisa menghentikan seluruh pengiriman. Ketelitian di sini menahan beban besar.", en: "One untraceable batch can halt an entire shipment. Precision here carries a heavy load." },
      contoh: { id: ["Petugas sertifikasi pangan", "Analis rantai pasok pertanian", "Petugas keamanan pangan", "Pengendali mutu dan ketertelusuran"],
                en: ["Food certification officer", "Agri supply chain analyst", "Food safety officer", "Quality and traceability controller"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama jadi penyuluh dan bekerja dengan cara berbeda. Bakti Jaga menjaga kunjungan rutin yang jadwalnya tidak pernah meleset. Bakti Guna turun saat hama menyerang mendadak dan bertindak sebelum ada arahan. Bakti Reka mendampingi keluarga petani yang sedang paling terdesak. Bakti Logika merancang program penyuluhan yang bisa dijalankan di banyak desa.",
    en: "Four people can all be extension officers and work differently. Bakti Jaga keeps routine visits that never slip. Bakti Guna goes out when pests strike suddenly and acts before instructions arrive. Bakti Reka stays with the family under the most pressure. Bakti Logika designs programmes that many villages can run." }
},

/* ═══════════════════════════════════════════════════════════════════════
   PEMERINTAHAN & LEMBAGA SOSIAL
   ═══════════════════════════════════════════════════════════════════════ */
publik: {
  nama: { id: "Pemerintahan & Lembaga Sosial", en: "Public Sector & Social Institutions" },
  pengantar: {
    id: "Bekerja di sektor publik sering disamakan dengan mengurus berkas di kantor dinas. Padahal sebuah lembaga publik berdiri di atas enam jenis pekerjaan, dan sebagian besarnya menentukan apakah kebijakan benar-benar sampai ke warga.",
    en: "Working in the public sector is often equated with paperwork at a government office. Yet a public institution rests on six kinds of work, most of which decide whether policy actually reaches people." },
  pintu: {
    Yasa: {
      apa: { id: "Infrastruktur publik, sarana umum, pemeliharaan fasilitas.", en: "Public infrastructure, amenities, facility maintenance." },
      kenapa_nyaman: { id: "Jalan yang diperbaiki dan air yang akhirnya mengalir adalah hasil yang bisa dilihat warga, bukan angka di laporan.", en: "A repaired road and water that finally flows are results residents can see, not figures in a report." },
      contoh: { id: ["Pengawas pekerjaan umum", "Teknisi sarana publik", "Manajer pemeliharaan fasilitas daerah", "Surveyor infrastruktur"],
                en: ["Public works supervisor", "Public facility technician", "Regional facility maintenance manager", "Infrastructure surveyor"] } },
    Nalar: {
      apa: { id: "Riset kebijakan, statistik daerah, evaluasi program.", en: "Policy research, regional statistics, programme evaluation." },
      kenapa_nyaman: { id: "Apakah programnya benar-benar berhasil adalah pertanyaan yang jarang dijawab jujur, dan menjawabnya butuh data.", en: "Whether a programme actually worked is rarely answered honestly, and answering it needs data." },
      contoh: { id: ["Analis kebijakan", "Statistisi daerah", "Evaluator program", "Peneliti pembangunan"],
                en: ["Policy analyst", "Regional statistician", "Programme evaluator", "Development researcher"] } },
    Karya: {
      apa: { id: "Komunikasi publik, kampanye sosial, desain layanan warga.", en: "Public communication, social campaigns, citizen service design." },
      kenapa_nyaman: { id: "Kebijakan yang benar bisa gagal hanya karena tidak dimengerti warganya. Membuatnya dimengerti adalah pekerjaan tersendiri.", en: "A sound policy can fail simply by not being understood. Making it understood is its own work." },
      contoh: { id: ["Pranata humas", "Perancang kampanye sosial", "Desainer layanan publik", "Pembuat konten kelembagaan"],
                en: ["Public information officer", "Social campaign designer", "Public service designer", "Institutional content creator"] } },
    Bakti: {
      apa: { id: "Pelayanan warga, pendampingan sosial, program komunitas.", en: "Citizen services, social casework, community programmes." },
      kenapa_nyaman: { id: "Orang datang dalam keadaan terdesak dan pulang dengan urusannya selesai. Perubahan itu terlihat pada orangnya.", en: "People arrive under pressure and leave with the matter resolved. The change shows in the person." },
      contoh: { id: ["Pekerja sosial", "Petugas pelayanan terpadu", "Pendamping program keluarga", "Fasilitator pemberdayaan desa"],
                en: ["Social worker", "Integrated services officer", "Family programme caseworker", "Village empowerment facilitator"] } },
    Karsa: {
      apa: { id: "Kemitraan, penggalangan dana, advokasi, pengembangan program.", en: "Partnerships, fundraising, advocacy, programme development." },
      kenapa_nyaman: { id: "Program baik tidak jalan tanpa dana dan dukungan politik. Membuka pintu itu adalah pekerjaan tersendiri.", en: "Good programmes do not run without funding and political backing. Opening those doors is its own work." },
      contoh: { id: ["Manajer kemitraan lembaga", "Penggalang dana", "Manajer advokasi", "Direktur program lembaga sosial"],
                en: ["Institutional partnership manager", "Fundraiser", "Advocacy manager", "Social institution programme director"] } },
    Tata: {
      apa: { id: "Administrasi, anggaran, pengadaan, kepatuhan dan audit.", en: "Administration, budgeting, procurement, compliance and audit." },
      kenapa_nyaman: { id: "Uang publik menuntut jejak yang bisa diperiksa siapa pun, dan menjaga jejak itu bersih adalah tanggung jawab yang nyata.", en: "Public money demands a trail anyone can inspect, and keeping that trail clean is a real responsibility." },
      contoh: { id: ["Analis anggaran", "Pejabat pengadaan", "Auditor internal pemerintah", "Analis kepegawaian"],
                en: ["Budget analyst", "Procurement officer", "Government internal auditor", "Civil service HR analyst"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Tata",
    id: "Empat orang bisa sama-sama masuk lewat pintu Tata dan mengerjakan hal yang berbeda. Tata Jaga ke audit dan kepatuhan, tempat jejaknya harus bersih tanpa pengecualian. Tata Logika ke menyederhanakan prosedur yang membuat warga bolak-balik. Tata Guna ke pelayanan harian yang harus cepat sekaligus tertib. Tata Reka ke memastikan aturan yang dibuat benar-benar berpihak pada yang dilayani.",
    en: "Four people can enter through the Tata door and do different work. Tata Jaga toward audit and compliance, where the trail must be clean without exception. Tata Logika toward simplifying procedures that send citizens back and forth. Tata Guna toward daily service that must be both quick and orderly. Tata Reka toward ensuring the rules genuinely favour those being served." }
},

/* ═══════════════════════════════════════════════════════════════════════
   OTOMOTIF & TRANSPORTASI
   ═══════════════════════════════════════════════════════════════════════ */
transportasi: {
  nama: { id: "Otomotif & Transportasi", en: "Automotive & Transport" },
  pengantar: {
    id: "Dunia otomotif sering disamakan dengan bengkel dan mekanik. Padahal sebuah perusahaan transportasi berdiri di atas enam jenis pekerjaan, dan sebagian besarnya menentukan apakah armada bisa jalan besok pagi.",
    en: "The automotive world is often equated with workshops and mechanics. Yet a transport company rests on six kinds of work, most of which decide whether the fleet moves tomorrow morning." },
  pintu: {
    Yasa: {
      apa: { id: "Perbaikan, pemeliharaan armada, pengoperasian alat.", en: "Repair, fleet maintenance, equipment operation." },
      kenapa_nyaman: { id: "Kendaraan yang tadi mogok lalu jalan lagi adalah hasil yang bisa dilihat hari itu juga.", en: "A vehicle that broke down and now runs is a result you see the same day." },
      contoh: { id: ["Mekanik senior", "Manajer bengkel", "Teknisi diagnostik kendaraan", "Operator alat berat"],
                en: ["Senior mechanic", "Workshop manager", "Vehicle diagnostic technician", "Heavy equipment operator"] } },
    Nalar: {
      apa: { id: "Rekayasa kendaraan, analisis rute, riset efisiensi bahan bakar.", en: "Vehicle engineering, route analysis, fuel efficiency research." },
      kenapa_nyaman: { id: "Kenapa satu rute selalu telat adalah pertanyaan yang jawabannya ada di data, bukan di keluhan sopir.", en: "Why one route is always late is a question answered in the data, not in driver complaints." },
      contoh: { id: ["Insinyur otomotif", "Analis rute dan jaringan", "Peneliti efisiensi energi", "Analis data armada"],
                en: ["Automotive engineer", "Route and network analyst", "Energy efficiency researcher", "Fleet data analyst"] } },
    Karya: {
      apa: { id: "Desain kendaraan, modifikasi, merek dan pengalaman pengguna.", en: "Vehicle design, customisation, brand and user experience." },
      kenapa_nyaman: { id: "Dua kendaraan dengan mesin sama bisa dipilih atau ditinggalkan hanya karena bentuk dan rasanya.", en: "Two vehicles with the same engine can be chosen or passed over purely on form and feel." },
      contoh: { id: ["Desainer kendaraan", "Spesialis modifikasi", "Manajer merek otomotif", "Perancang pengalaman penumpang"],
                en: ["Vehicle designer", "Customisation specialist", "Automotive brand manager", "Passenger experience designer"] } },
    Bakti: {
      apa: { id: "Layanan pelanggan, pelatihan pengemudi, keselamatan penumpang.", en: "Customer service, driver training, passenger safety." },
      kenapa_nyaman: { id: "Pengemudi yang terlatih baik menyelamatkan orang yang tidak pernah tahu namanya, dan itu hasil yang nyata.", en: "A well-trained driver saves people who never learn their name, and that is a real result." },
      contoh: { id: ["Pelatih pengemudi", "Manajer layanan pelanggan armada", "Petugas keselamatan transportasi", "Koordinator kesejahteraan awak"],
                en: ["Driver trainer", "Fleet customer service manager", "Transport safety officer", "Crew welfare coordinator"] } },
    Karsa: {
      apa: { id: "Penjualan kendaraan, kemitraan armada, pengembangan layanan.", en: "Vehicle sales, fleet partnerships, service development." },
      kenapa_nyaman: { id: "Kesepakatan armada besar sering selesai sebelum rapat resminya dimulai, dan itu bergantung pada kepercayaan.", en: "Large fleet deals are often settled before the formal meeting, and that rests on trust." },
      contoh: { id: ["Manajer penjualan kendaraan", "Manajer kemitraan armada", "Manajer pengembangan layanan logistik", "Kepala dealer"],
                en: ["Vehicle sales manager", "Fleet partnership manager", "Logistics service development manager", "Dealership head"] } },
    Tata: {
      apa: { id: "Perizinan, uji kelaikan, penjadwalan armada, kepatuhan.", en: "Permits, roadworthiness testing, fleet scheduling, compliance." },
      kenapa_nyaman: { id: "Satu kendaraan yang izinnya lewat bisa menghentikan seluruh operasi. Ketelitian di sini menahan beban besar.", en: "One vehicle with a lapsed permit can halt an entire operation. Precision here carries a heavy load." },
      contoh: { id: ["Petugas perizinan armada", "Penguji kelaikan kendaraan", "Penjadwal armada", "Analis kepatuhan transportasi"],
                en: ["Fleet permit officer", "Roadworthiness inspector", "Fleet scheduler", "Transport compliance analyst"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Yasa",
    id: "Empat orang bisa sama-sama masuk lewat pintu Yasa dan mengerjakan hal yang berbeda. Yasa Guna ke perbaikan mendadak di jalan, membaca gejala dari bunyi sebelum alat ukur menunjukkannya. Yasa Jaga ke pemeliharaan terjadwal yang tidak pernah dilewati. Yasa Logika ke metode kerja bengkel dan diagnosis yang bisa diulang. Yasa Reka ke teknologi yang membuat kendaraan lebih aman dan bersih.",
    en: "Four people can enter through the Yasa door and do different work. Yasa Guna toward roadside repairs, reading symptoms by sound before instruments show them. Yasa Jaga toward scheduled maintenance that is never skipped. Yasa Logika toward workshop methods and repeatable diagnosis. Yasa Reka toward technology that makes vehicles safer and cleaner." }
},

/* ═══════════════════════════════════════════════════════════════════════
   PARIWISATA & PERHOTELAN
   ═══════════════════════════════════════════════════════════════════════ */
pariwisata: {
  nama: { id: "Pariwisata & Perhotelan", en: "Tourism & Hospitality" },
  pengantar: {
    id: "Pariwisata sering dibayangkan sebagai menyambut tamu di meja depan. Padahal sebuah destinasi atau hotel berdiri di atas enam jenis pekerjaan, dan sebagian besarnya tidak pernah bertemu tamu sama sekali.",
    en: "Tourism is often pictured as greeting guests at a front desk. Yet a destination or hotel rests on six kinds of work, most of which never meets a guest at all." },
  pintu: {
    Yasa: {
      apa: { id: "Teknik bangunan hotel, tata graha, pemeliharaan sarana wisata.", en: "Hotel engineering, housekeeping, tourism facility upkeep." },
      kenapa_nyaman: { id: "Kamar yang siap dan alat yang berfungsi adalah hasil yang terlihat langsung, dan tamunya merasakannya tanpa tahu siapa yang mengerjakan.", en: "A ready room and working equipment are visible results, felt by guests who never learn who did it." },
      contoh: { id: ["Teknisi hotel", "Supervisor tata graha", "Pengelola sarana wisata", "Teknisi peralatan dapur dan kolam"],
                en: ["Hotel engineer", "Housekeeping supervisor", "Tourism facility manager", "Kitchen and pool equipment technician"] } },
    Nalar: {
      apa: { id: "Riset destinasi, manajemen pendapatan, analisis pasar wisata.", en: "Destination research, revenue management, tourism market analysis." },
      kenapa_nyaman: { id: "Kenapa okupansi turun di bulan tertentu adalah pertanyaan yang jawabannya bisa ditelusuri, bukan ditebak.", en: "Why occupancy drops in certain months is a question that can be traced rather than guessed." },
      contoh: { id: ["Analis pendapatan hotel", "Peneliti destinasi wisata", "Analis pasar pariwisata", "Perencana pengembangan destinasi"],
                en: ["Hotel revenue analyst", "Destination researcher", "Tourism market analyst", "Destination development planner"] } },
    Karya: {
      apa: { id: "Konsep destinasi, desain pengalaman tamu, konten promosi.", en: "Destination concept, guest experience design, promotional content." },
      kenapa_nyaman: { id: "Dua tempat dengan pemandangan sama bisa dikenang atau dilupakan hanya karena cara pengalamannya dirancang.", en: "Two places with the same view can be remembered or forgotten purely through how the experience is designed." },
      contoh: { id: ["Perancang pengalaman tamu", "Pembuat konten pariwisata", "Konseptor destinasi", "Manajer merek hotel"],
                en: ["Guest experience designer", "Tourism content creator", "Destination concept designer", "Hotel brand manager"] } },
    Bakti: {
      apa: { id: "Pelayanan tamu, pemanduan wisata, pariwisata berbasis komunitas.", en: "Guest service, tour guiding, community-based tourism." },
      kenapa_nyaman: { id: "Orang datang lelah dan pulang merasa diurus. Perubahan itu terlihat langsung pada orangnya, bukan di laporan.", en: "People arrive tired and leave feeling looked after. The change shows in the person, not a report." },
      contoh: { id: ["Pemandu wisata", "Manajer layanan tamu", "Pendamping pariwisata desa", "Koordinator pengalaman tamu"],
                en: ["Tour guide", "Guest service manager", "Village tourism facilitator", "Guest experience coordinator"] } },
    Karsa: {
      apa: { id: "Penjualan kamar, kemitraan agen, pengembangan usaha wisata.", en: "Room sales, agent partnerships, tourism business development." },
      kenapa_nyaman: { id: "Kamar kosong tidak menghasilkan apa pun, dan hasil kerjamu terlihat pada angka yang berubah minggu itu juga.", en: "An empty room earns nothing, and your work shows in numbers that shift the same week." },
      contoh: { id: ["Manajer penjualan hotel", "Manajer kemitraan agen perjalanan", "Pengelola usaha wisata", "Manajer pengembangan bisnis destinasi"],
                en: ["Hotel sales manager", "Travel agent partnership manager", "Tourism business owner", "Destination business development manager"] } },
    Tata: {
      apa: { id: "Reservasi, administrasi hotel, standar layanan, kepatuhan.", en: "Reservations, hotel administration, service standards, compliance." },
      kenapa_nyaman: { id: "Satu kesalahan reservasi terasa langsung oleh tamunya, dan ada kelegaan saat semuanya berjalan tanpa keluhan.", en: "One booking error is felt immediately by the guest, and there is relief when a day passes without complaint." },
      contoh: { id: ["Supervisor reservasi", "Manajer administrasi hotel", "Petugas standar mutu layanan", "Analis operasional hotel"],
                en: ["Reservations supervisor", "Hotel administration manager", "Service quality standards officer", "Hotel operations analyst"] } } },
  contoh_watak_dalam_pintu: {
    pintu: "Bakti",
    id: "Empat orang bisa sama-sama masuk lewat pintu Bakti dan mengerjakan hal yang berbeda. Bakti Guna ke lantai saat hotel penuh, membaca situasi dan bergerak sebelum diminta. Bakti Jaga ke layanan yang standarnya sama di giliran mana pun. Bakti Reka ke pariwisata berbasis komunitas yang menguntungkan warga setempat. Bakti Logika ke sistem layanan yang bisa dijalankan seluruh properti.",
    en: "Four people can enter through the Bakti door and do different work. Bakti Guna toward the floor when the hotel is full, reading the situation and moving before being asked. Bakti Jaga toward service whose standard holds on any shift. Bakti Reka toward community-based tourism that benefits local people. Bakti Logika toward service systems every property can run." }
}
};if (typeof module !== "undefined" && module.exports) module.exports = LAKON_INDUSTRI;
