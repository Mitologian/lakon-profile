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
/* PERAN_IDEAL DIPINDAH ke lakon_peran_penuh.js.
   Tabel Peran Ideal adalah isi berbayar, dan berkas ini dimuat halaman
   peserta. Selama ia di sini, seluruh 24 tabel bisa diunduh siapa pun
   lewat namasitus.pages.dev/lakon_content.js.

   Field `tags` dan `tagClasses` pada PARAGA juga dibuang: data mati yang
   sudah di-override showResult() sejak v3. [butir 4.12] */


// ─────────────────────────────────────────────────────────────
// PARAGA DATA — v2
// Key: "Kelompok|Watak" — strictly using Kelompok names (no invented labels)
// Each entry has: en, tags, tagClasses, overview, kekuatan, lingkungan_ideal
// overview = naratif orang ketiga, storytelling
// ─────────────────────────────────────────────────────────────
const PARAGA = {
  // ── KARYA ──
  "Karya|Reka":{
    en:"The Story Shaper",
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
    en:"The Steady Craftsman",
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
    en:"The Process Rebuilder",
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
    en:"The Keeper of Record",
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
  module.exports = { PARAGA: PARAGA,
                     KELOMPOK_COLORS: KELOMPOK_COLORS, KELOMPOK_LABELS: KELOMPOK_LABELS };
}
