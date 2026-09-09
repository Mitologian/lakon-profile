/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — LAPIS WATAK  (4 dari 4, LENGKAP)
   Sisi Keirsey. Bagaimana kamu bergerak, di dalam apa pun yang kamu nikmati.

   ═══════════════════════════════════════════════════════════════════════
   KENAPA FIELDNYA BERBEDA DARI KELOMPOK
   ═══════════════════════════════════════════════════════════════════════

   Kelompok menjawab: apa yang kamu nikmati, di mana kamu betah, bagaimana
   kamu belajar, apa yang hilang kalau salah tempat.

   Watak menjawab pertanyaan lain: bagaimana kamu mendekati pekerjaan,
   bagaimana orang membacamu, dan seperti apa polamu saat tertekan.
   Kalau fieldnya disamakan, dua lapis ini akan saling mengulang dan
   pembaca akan merasa membaca hal yang sama dua kali.

     tanda_gerak    alat baca yang portabel, ciri cara bergerak
     cara_kerja     bagaimana kamu mendekati sebuah tugas
     dalam_tim      apa yang kamu bawa, dan apa yang kamu butuhkan dari tim
     salah_paham    bagaimana orang biasanya salah membacamu
     kalau_tertekan seperti apa polamu saat beban melebihi kapasitas
     tumbuh_lewat   apa yang benar-benar mengembangkanmu

   ═══════════════════════════════════════════════════════════════════════
   KENAPA ADA `salah_paham`
   ═══════════════════════════════════════════════════════════════════════

   Ini field yang paling tahan terhadap tuduhan cold reading, karena isinya
   justru hal yang tidak enak dibaca dan tidak mungkin cocok untuk semua
   orang. Zodiak tidak pernah mengatakan "orang sering mengira kamu tidak
   peduli", karena pernyataan begitu bisa dibantah.

   Field ini juga yang paling berguna di sesi konseling: ia memberi kata
   untuk pengalaman yang sudah lama dirasakan tapi belum pernah dinamai.

   ═══════════════════════════════════════════════════════════════════════
   ATURAN
   ═══════════════════════════════════════════════════════════════════════
   1–6 sama dengan lapis Kelompok (maks 90 kata per paragraf, orang kedua,
   ritme diselang, `inti` berdiri sendiri).
   7. Aturan 4B berlaku. Penanda // DISKRIMINATIF menandai kalimat yang
      memikul beban ketajaman.
   8. TIDAK ADA WATAK YANG DIPERINGKAT TERHADAP WATAK LAIN. Dilarang
      "paling langka", "paling siap memimpin", "kurang visioner". Empat
      cara bergerak, bukan satu tangga.
   9. `kalau_tertekan` tidak boleh terbaca sebagai vonis. Ia menggambarkan
      pola yang bisa dikenali dan diantisipasi, bukan cacat bawaan.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_WATAK_CONTENT = {

/* ═══════════════════════════════════════════════════════════════════════
   REKA · Idealist (NF) — INFJ · INFP · ENFJ · ENFP
   ═══════════════════════════════════════════════════════════════════════ */
"Reka": {
  keirsey: "NF",
  tagline: { id: "Bergerak dari makna, bukan dari perintah",
             en: "Moving from meaning, not from instruction" },

  tanda_gerak: {
    inti: { id: "Kamu perlu tahu kenapa sebelum bisa sungguh-sungguh mengerjakan apa.",
            en: "You need to know why before you can genuinely work on what." },
    poin: [
      // DISKRIMINATIF: alasan sebagai syarat, bukan pelengkap
      { id: "Tugas yang tidak jelas gunanya bagi siapa pun terasa berat jauh sebelum sulitnya mulai terasa.",
        en: "A task with no clear use to anyone feels heavy long before it becomes difficult." },
      { id: "Kamu membaca suasana ruangan lebih dulu daripada isi pembicaraannya.",
        en: "You read the room before you read what is being said in it." },
      { id: "Kamu lebih ingat bagaimana rasanya bekerja dengan seseorang daripada apa hasilnya.",
        en: "You remember what it felt like to work with someone more than what came out of it." },
      { id: "Kalau nilai yang kamu pegang bertabrakan dengan target, yang goyah biasanya targetnya.",
        en: "When a value you hold collides with a target, it is usually the target that gives way." }
    ],
    tutup: { id: "Ciri ini tidak ada hubungannya dengan bidang. Ia sama terlihatnya pada perawat, insinyur, akuntan, maupun pedagang.",
             en: "These marks have nothing to do with field. They show up just as clearly in a nurse, an engineer, an accountant, or a trader." }
  },

  cara_kerja: {
    inti: { id: "Kamu mulai dari gambaran hasil akhirnya, lalu mundur mencari langkahnya.",
            en: "You start from a picture of the end, then work backward to the steps." },
    paragraf: [
      { id: "Cara ini membuatmu cepat melihat kalau sebuah rencana sebenarnya menuju ke tempat yang salah, bahkan ketika semua langkahnya benar. Tapi ia juga membuatmu sulit memulai sebelum gambaran itu cukup jelas, dan orang di sekitarmu kadang membacanya sebagai menunda.",
        en: "This lets you see quickly when a plan is heading somewhere wrong even though every step in it is correct. It also makes it hard for you to start before that picture is clear enough, which people around you sometimes read as stalling." },
      // DISKRIMINATIF: kualitas kerja naik-turun mengikuti keyakinan, bukan kemampuan
      { id: "Kualitas kerjamu naik-turun mengikuti seberapa kamu percaya pada apa yang dikerjakan, bukan mengikuti seberapa sulit pekerjaannya. Pekerjaan mudah yang tidak kamu yakini bisa selesai jauh lebih lama daripada pekerjaan sulit yang kamu pedulikan.",
        en: "The quality of your work rises and falls with how much you believe in it, not with how hard it is. Easy work you do not believe in can take far longer than hard work you care about." }
    ]
  },

  dalam_tim: {
    inti: { id: "Kamu sering jadi orang yang menyuarakan hal yang semua orang rasakan tapi belum ada yang sebut.",
            en: "You are often the one who names what everyone feels but nobody has said." },
    membawa: [
      { id: "Kemampuan melihat apa yang sebenarnya mengganggu seseorang, bukan apa yang ia katakan.",
        en: "The ability to see what is actually bothering someone, rather than what they said." },
      { id: "Pertanyaan \u201cini untuk siapa\u201d ketika tim sudah sibuk dengan \u201cbagaimana caranya\u201d.",
        en: "The question \u201cwho is this for\u201d when the team is already busy with \u201chow do we do it\u201d." },
      { id: "Kesediaan mengangkat hal yang tidak nyaman kalau kamu yakin itu penting.",
        en: "A willingness to raise the uncomfortable thing when you believe it matters." }
    ],
    butuh: [
      { id: "Alasan di balik keputusan, bukan hanya keputusannya.",
        en: "The reasoning behind a decision, not only the decision." },
      { id: "Umpan balik yang disampaikan langsung, karena diam justru kamu isi sendiri dengan tafsiran terburuk.",
        en: "Feedback said out loud, because silence gets filled by your own worst reading of it." },
      { id: "Sesekali pengakuan bahwa hal yang kamu perjuangkan memang berarti.",
        en: "Occasional acknowledgement that what you fought for did matter." }
    ]
  },

  salah_paham: {
    inti: { id: "Orang sering mengira kamu terlalu memasukkan segala sesuatu ke hati.",
            en: "People often assume you take everything too personally." },
    poin: [
      // DISKRIMINATIF: bukan baper, melainkan menyimpan lebih lama
      { id: "Yang sebenarnya terjadi biasanya bukan kamu tersinggung, melainkan kamu menyimpan kejadian itu jauh lebih lama daripada orang lain.",
        en: "What is usually happening is not that you are offended, but that you hold the incident far longer than others do." },
      { id: "Kehangatanmu kadang dibaca sebagai kelemahan bernegosiasi, padahal kamu justru sedang menghitung ongkos jangka panjangnya.",
        en: "Your warmth is sometimes read as weakness in a negotiation, when you are in fact weighing the longer-term cost." },
      { id: "Saat kamu diam karena sedang menimbang, orang membacanya sebagai setuju.",
        en: "When you go quiet because you are weighing something, people read it as agreement." },
      { id: "Idealismemu dianggap tidak realistis, padahal kamu biasanya sudah tahu ongkosnya dan tetap memilihnya.",
        en: "Your idealism is treated as unrealistic, when you usually know the cost already and choose it anyway." }
    ]
  },

  kalau_tertekan: {
    inti: { id: "Di bawah tekanan panjang, kamu cenderung menarik diri lebih dulu sebelum ada yang tahu ada masalah.",
            en: "Under sustained pressure, you tend to withdraw before anyone knows there is a problem." },
    paragraf: [
      { id: "Bukan karena tidak mau bicara, melainkan karena kamu ingin memastikan dulu bahwa keberatanmu adil sebelum menyampaikannya. Sementara itu kamu tetap mengerjakan semuanya, sehingga dari luar tidak ada yang berubah.",
        en: "Not because you do not want to speak, but because you want to be sure your objection is fair before voicing it. Meanwhile you keep doing everything, so from the outside nothing looks different." }
    ],
    sorot: { id: "Karena itu, kabar bahwa kamu tidak baik-baik saja biasanya datang terlambat bagi orang di sekitarmu, dan sering terasa mendadak padahal sudah lama berjalan.",
             en: "So the news that you are not all right usually reaches people late, and feels sudden to them although it has been building for a long time." }
  },

  tumbuh_lewat: {
    inti: { id: "Kamu tumbuh paling cepat lewat orang, bukan lewat kursus.",
            en: "You grow fastest through people, not through courses." },
    poin: [
      { id: "Menyampaikan keberatan pada hari yang sama, bukan setelah yakin seratus persen.",
        en: "Raising an objection the same day, rather than after you are a hundred percent sure." },
      { id: "Memisahkan mana yang benar-benar soal nilai dan mana yang cuma soal selera.",
        en: "Separating what is genuinely about values from what is only about taste." },
      { id: "Menyelesaikan satu hal yang tidak kamu sukai sampai tuntas, sebagai latihan.",
        en: "Finishing one thing you do not enjoy, all the way, as practice." },
      { id: "Meminta umpan balik lebih awal daripada yang terasa nyaman.",
        en: "Asking for feedback earlier than feels comfortable." }
    ]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   LOGIKA · Rational (NT) — INTJ · INTP · ENTJ · ENTP
   ═══════════════════════════════════════════════════════════════════════ */
"Logika": {
  keirsey: "NT",
  tagline: { id: "Bergerak dari rancangan, bukan dari kebiasaan",
             en: "Moving from design, not from habit" },

  tanda_gerak: {
    inti: { id: "Kamu ingin tahu bagaimana sesuatu bekerja sebelum menerima bahwa ia bekerja.",
            en: "You want to know how something works before accepting that it works." },
    poin: [
      // DISKRIMINATIF: "sudah dari dulu begitu" sebagai pemicu, bukan penjelasan
      { id: "Jawaban \u201csudah dari dulu begitu\u201d tidak menutup pertanyaanmu, malah membukanya.",
        en: "The answer \u201cit has always been done this way\u201d does not close your question, it opens one." },
      { id: "Kamu terganggu oleh hal yang tidak efisien meskipun bukan urusanmu.",
        en: "Inefficiency bothers you even when it is none of your business." },
      { id: "Kamu lebih percaya pada alasan yang bisa diuji daripada pada siapa yang mengatakannya.",
        en: "You trust a reason that can be tested more than the person who gave it." },
      { id: "Kamu nyaman mengubah pendapat sendiri kalau ada bukti yang lebih baik, dan berharap orang lain begitu juga.",
        en: "You are comfortable changing your own view given better evidence, and expect others to be too." }
    ],
    tutup: { id: "Ciri ini tidak berarti kamu harus bekerja dengan angka atau mesin. Ia sama terlihatnya pada guru, perawat, atau pemilik warung yang terus memperbaiki cara kerjanya.",
             en: "These marks do not mean you must work with numbers or machines. They show up just as clearly in a teacher, a nurse, or a shopkeeper who keeps improving how things run." }
  },

  cara_kerja: {
    inti: { id: "Kamu membangun kerangkanya dulu, baru mengisi bagian-bagiannya.",
            en: "You build the framework first, then fill in the parts." },
    paragraf: [
      { id: "Karena itu awalmu sering terlihat lambat: kamu sedang memastikan strukturnya benar sebelum ada satu bagian pun dikerjakan. Setelah kerangkanya berdiri, kecepatanmu naik tajam dan bagian-bagiannya jatuh pada tempatnya.",
        en: "That is why your start often looks slow: you are making sure the structure is right before a single part is built. Once the frame stands, your pace rises sharply and the parts fall into place." },
      // DISKRIMINATIF: bosan setelah masalahnya terpecahkan, bukan setelah selesai
      { id: "Minatmu pada sebuah pekerjaan sering habis di titik ketika masalahnya sudah terpecahkan, bukan ketika pekerjaannya sudah selesai. Sisa penyelesaiannya terasa seperti mengetik ulang jawaban yang sudah kamu tahu.",
        en: "Your interest in a piece of work often runs out at the point the problem is solved, not at the point the work is done. Finishing it can feel like retyping an answer you already know." }
    ]
  },

  dalam_tim: {
    inti: { id: "Pertanyaanmu di rapat biasanya: apakah ini masih masuk akal kalau skalanya sepuluh kali lipat.",
            en: "Your question in a meeting is usually: does this still hold at ten times the scale." },
    membawa: [
      { id: "Kemampuan melihat konsekuensi dua atau tiga langkah di depan.",
        en: "The ability to see consequences two or three moves ahead." },
      { id: "Kesediaan menyampaikan bahwa sesuatu tidak akan bekerja, meski itu tidak populer.",
        en: "A willingness to say something will not work, even when that is unpopular." },
      { id: "Cara kerja yang bisa diulang orang lain, bukan hanya olehmu.",
        en: "A method others can repeat, not only you." }
    ],
    butuh: [
      { id: "Orang yang mau berdebat tanpa menganggapnya sebagai serangan.",
        en: "People who will argue without treating it as an attack." },
      { id: "Wewenang untuk mengubah, bukan hanya untuk merekomendasikan.",
        en: "Authority to change things, not only to recommend." },
      { id: "Partner yang menuntaskan bagian akhir yang kamu cepat bosan padanya.",
        en: "A partner who finishes the last stretch you tire of quickly." }
    ]
  },

  salah_paham: {
    inti: { id: "Orang sering mengira kamu tidak peduli pada perasaan mereka.",
            en: "People often assume you do not care about their feelings." },
    poin: [
      // DISKRIMINATIF: memisahkan gagasan dari orangnya, dan mengira orang lain begitu juga
      { id: "Yang sebenarnya terjadi biasanya kamu sedang memisahkan gagasan dari orangnya, dan mengira lawan bicaramu melakukan hal yang sama.",
        en: "What is usually happening is that you are separating the idea from the person, and assuming the other side is doing the same." },
      { id: "Pertanyaanmu yang bertubi-tubi dibaca sebagai meragukan, padahal itu cara kamu menunjukkan bahwa hal itu kamu anggap serius.",
        en: "Your rapid questions read as doubting, when they are how you show you are taking something seriously." },
      { id: "Diammu saat orang bercerita dibaca sebagai tidak tertarik, padahal kamu sedang menyusun jawaban yang berguna.",
        en: "Your silence while someone talks reads as disinterest, when you are assembling something useful to say." },
      { id: "Kesediaanmu mengakui salah dianggap tidak konsisten, padahal justru itu yang membuat pendapatmu layak dipercaya.",
        en: "Your readiness to admit error is taken as inconsistency, when it is exactly what makes your view worth trusting." }
    ]
  },

  kalau_tertekan: {
    inti: { id: "Tekanan yang berkepanjangan membuatmu mengurung diri ke pekerjaan yang bisa kamu kendalikan sendiri.",
            en: "Prolonged pressure pushes you into work you can control alone." },
    paragraf: [
      { id: "Kamu berhenti melibatkan orang, bukan karena marah, melainkan karena berkoordinasi terasa lebih mahal daripada mengerjakan sendiri. Hasilnya tetap bagus untuk sementara, dan itu yang membuat polanya sulit ketahuan.",
        en: "You stop involving people, not out of anger but because coordinating feels more expensive than doing it yourself. The output stays good for a while, and that is what makes the pattern hard to catch." }
    ],
    sorot: { id: "Yang lebih dulu terlihat biasanya bukan kelelahanmu, melainkan kesabaranmu yang menipis pada hal-hal kecil.",
             en: "What shows first is usually not your exhaustion but your patience thinning on small things." }
  },

  tumbuh_lewat: {
    inti: { id: "Yang paling mengembangkanmu adalah menyelesaikan, bukan menganalisis lebih dalam.",
            en: "What develops you most is finishing, not analysing more deeply." },
    poin: [
      { id: "Menuntaskan satu hal sampai dipakai orang, bukan berhenti di titik masalahnya terpecahkan.",
        en: "Taking one thing all the way to being used, not stopping where the problem was solved." },
      { id: "Menjelaskan alasanmu kepada orang yang tidak sebidang, tanpa menyederhanakannya jadi salah.",
        en: "Explaining your reasoning to someone outside your field without simplifying it into something wrong." },
      { id: "Menanyakan bagaimana perasaan orang atas keputusan yang kamu ambil, dan benar-benar menunggu jawabannya.",
        en: "Asking how people feel about a decision you made, and actually waiting for the answer." },
      { id: "Membiarkan satu cara yang tidak optimal tetap berjalan, kalau menggantinya lebih mahal daripada manfaatnya.",
        en: "Letting one suboptimal method stand, when replacing it costs more than it returns." }
    ]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   JAGA · Guardian (SJ) — ISTJ · ISFJ · ESTJ · ESFJ
   ═══════════════════════════════════════════════════════════════════════ */
"Jaga": {
  keirsey: "SJ",
  tagline: { id: "Bergerak dari tanggung jawab, bukan dari suasana hati",
             en: "Moving from responsibility, not from mood" },

  tanda_gerak: {
    inti: { id: "Kamu mengerjakan yang sudah kamu janjikan, terlepas dari sedang ingin atau tidak.",
            en: "You do what you said you would, regardless of whether you feel like it." },
    poin: [
      // DISKRIMINATIF: janji kecil yang orang lain lupa pernah dibuat
      { id: "Kamu ingat janji kecil yang orang lain sudah lupa pernah dibuat, dan tetap menepatinya.",
        en: "You remember small promises others have forgotten were made, and keep them anyway." },
      { id: "Kamu ingin tahu batas wewenangmu sejak awal, bukan mencari tahu sambil jalan.",
        en: "You want to know the limits of your authority from the start, not discover them along the way." },
      { id: "Perubahan mendadak mengganggumu bukan karena barunya, melainkan karena yang lama belum tuntas.",
        en: "A sudden change bothers you not because it is new but because the previous thing is unfinished." },
      { id: "Kamu memeriksa ulang sesuatu yang sudah benar, hanya untuk memastikan.",
        en: "You recheck something already correct, just to be sure." }
    ],
    tutup: { id: "Ciri ini tidak berarti kamu kaku. Ia sama terlihatnya pada seniman yang menepati tenggat, pelatih yang datang lebih awal, atau perawat yang tidak melewatkan satu pun catatan.",
             en: "These marks do not mean you are rigid. They show up just as clearly in an artist who meets deadlines, a coach who arrives early, or a nurse who never skips a note." }
  },

  cara_kerja: {
    inti: { id: "Kamu mengerjakan berurutan, dan tidak nyaman melompat sebelum yang sebelumnya beres.",
            en: "You work in sequence, and are uneasy skipping ahead before the previous part is settled." },
    paragraf: [
      { id: "Cara ini membuat hasilmu bisa diandalkan tanpa perlu diperiksa ulang orang lain, dan membuat orang berani menyerahkan hal penting kepadamu. Ongkosnya, kamu butuh waktu lebih lama untuk memulai sesuatu yang belum jelas bentuknya.",
        en: "This makes your output dependable without anyone needing to recheck it, and makes people willing to hand you what matters. The cost is that you need longer to start something whose shape is not yet clear." },
      // DISKRIMINATIF: menyerap pekerjaan orang lain diam-diam demi hasil tetap rapi
      { id: "Kamu juga cenderung menyerap pekerjaan yang bukan bagianmu, diam-diam, supaya hasil akhirnya tetap rapi. Kamu jarang menyebutkannya, dan karena itu bebanmu sering tidak terlihat oleh siapa pun termasuk atasanmu.",
        en: "You also tend to absorb work that is not yours, quietly, so the final result stays clean. You rarely mention it, and so your load often stays invisible to everyone, your manager included." }
    ]
  },

  dalam_tim: {
    inti: { id: "Di tim, kamulah yang mengingatkan bahwa yang kemarin belum selesai.",
            en: "In a team, you are the one reminding everyone that yesterday's thing is unfinished." },
    membawa: [
      { id: "Kepastian bahwa apa yang dijanjikan tim benar-benar sampai.",
        en: "Certainty that what the team promised actually arrives." },
      { id: "Ingatan atas hal yang sudah pernah dicoba dan kenapa dulu gagal.",
        en: "Memory of what has been tried before and why it failed then." },
      { id: "Standar yang tidak turun saat tenggat mendekat.",
        en: "A standard that does not drop as the deadline closes in." }
    ],
    butuh: [
      { id: "Prioritas yang tidak berganti sebelum yang sekarang tuntas.",
        en: "Priorities that do not change before the current one is done." },
      { id: "Kejelasan sampai mana tanggung jawabmu, dan mulai dari mana tanggung jawab orang lain.",
        en: "Clarity on where your responsibility ends and someone else's begins." },
      { id: "Orang yang menanyakan bebanmu, karena kamu jarang mengangkatnya sendiri.",
        en: "Someone who asks about your load, because you rarely raise it yourself." }
    ]
  },

  salah_paham: {
    inti: { id: "Orang sering mengira kamu menolak perubahan.",
            en: "People often assume you resist change." },
    poin: [
      // DISKRIMINATIF: bukan menolak perubahan, tapi menolak perubahan tanpa alasan yang dijelaskan
      { id: "Yang sebenarnya kamu tolak biasanya bukan perubahannya, melainkan perubahan yang alasannya tidak dijelaskan dan akibatnya belum dipikirkan.",
        en: "What you actually resist is usually not the change but a change whose reason went unexplained and whose consequences went unconsidered." },
      { id: "Ketelitianmu dibaca sebagai lambat, padahal kamu sedang mencegah pekerjaan diulang dari awal.",
        en: "Your thoroughness reads as slowness, when you are preventing the work from being redone from scratch." },
      { id: "Kesediaanmu selalu membantu membuat orang lupa bahwa kamu juga punya batas.",
        en: "Your constant willingness to help makes people forget you have a limit too." },
      { id: "Diammu di rapat dianggap tidak punya pendapat, padahal kamu sedang menunggu bukti yang cukup sebelum bicara.",
        en: "Your silence in a meeting is taken as having no view, when you are waiting for enough evidence before speaking." }
    ]
  },

  kalau_tertekan: {
    inti: { id: "Kalau tekanannya berkepanjangan, kamu bekerja lebih keras pada hal yang salah.",
            en: "When the pressure runs long, you work harder on the wrong thing." },
    paragraf: [
      { id: "Ketika keadaan terasa di luar kendali, yang kamu pegang adalah bagian yang masih bisa dirapikan, meskipun itu bukan bagian yang paling menentukan. Kamu menambah jam, bukan mengurangi cakupan, dan biasanya tidak memberi tahu siapa pun.",
        en: "When things feel out of control, you hold on to the part that can still be tidied, even when that is not the part that matters most. You add hours rather than cut scope, and usually tell no one." }
    ],
    sorot: { id: "Kelelahanmu jarang terlihat sebagai kelelahan. Ia muncul sebagai kejengkelan pada hal kecil yang biasanya tidak kamu permasalahkan.",
             en: "Your exhaustion rarely looks like exhaustion. It shows up as irritation at small things you normally let pass." }
  },

  tumbuh_lewat: {
    inti: { id: "Perkembangan terbesarmu datang dari melepaskan, bukan dari menambah.",
            en: "Your biggest development comes from letting go, not from adding." },
    poin: [
      { id: "Menolak satu permintaan mendadak, dan melihat bahwa tidak ada yang runtuh.",
        en: "Declining one last-minute request, and seeing that nothing collapses." },
      { id: "Menyebutkan bantuan yang kamu berikan, supaya bebanmu jadi terlihat.",
        en: "Naming the help you gave, so your load becomes visible." },
      { id: "Menyampaikan keberatan saat baru enam puluh persen yakin.",
        en: "Raising an objection when you are only sixty percent sure." },
      { id: "Membiarkan satu hal dikerjakan orang lain dengan caranya sendiri, dan tidak memperbaikinya diam-diam.",
        en: "Letting one thing be done someone else's way, and not quietly fixing it afterwards." }
    ]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   GUNA · Artisan (SP) — ISTP · ISFP · ESTP · ESFP
   ═══════════════════════════════════════════════════════════════════════ */
"Guna": {
  keirsey: "SP",
  tagline: { id: "Bergerak dari keadaan di depan mata, bukan dari rencana",
             en: "Moving from what is in front of you, not from the plan" },

  tanda_gerak: {
    inti: { id: "Kamu mengerti sesuatu setelah mencobanya, bukan sebelum.",
            en: "You understand something after trying it, not before." },
    poin: [
      // DISKRIMINATIF: bergerak duluan saat yang lain masih berdiskusi
      { id: "Saat ada masalah mendadak, kamu sudah bergerak sementara yang lain masih membahas siapa yang harus menangani.",
        en: "When something goes wrong suddenly, you are already moving while others are still discussing who should handle it." },
      { id: "Rencana yang terlalu rinci justru membuatmu kehilangan minat sebelum mulai.",
        en: "A plan that is too detailed makes you lose interest before you begin." },
      { id: "Kamu membaca situasi lewat tanda-tanda kecil yang tidak semua orang tangkap.",
        en: "You read a situation through small signals not everyone picks up." },
      { id: "Kamu tahan lama pada pekerjaan yang berubah-ubah, dan cepat habis pada pekerjaan yang sama tiap hari.",
        en: "You last a long time in work that keeps changing, and burn out fast in work that is identical each day." }
    ],
    tutup: { id: "Ciri ini tidak berarti kamu tidak bisa diandalkan. Ia sama terlihatnya pada dokter gawat darurat, pemain musik, teknisi lapangan, maupun guru yang kelasnya tidak pernah sama.",
             en: "These marks do not mean you cannot be relied on. They show up just as clearly in an emergency doctor, a musician, a field technician, or a teacher whose class is never the same twice." }
  },

  cara_kerja: {
    inti: { id: "Kamu menyelesaikan masalah dengan menyentuhnya, bukan dengan memetakannya.",
            en: "You solve a problem by touching it, not by mapping it." },
    paragraf: [
      { id: "Kamu mulai dari bagian yang paling jelas, mengerjakannya, lalu keadaan yang berubah itu sendiri yang menunjukkan langkah berikutnya. Cara ini jauh lebih cepat daripada merencanakan, selama masalahnya memang nyata dan ada di depan mata.",
        en: "You start with the clearest part, do it, and the changed situation itself shows the next step. This is far faster than planning, as long as the problem is real and in front of you." },
      // DISKRIMINATIF: kekuatan dan kelemahan dari sumber yang sama
      { id: "Kelemahannya datang dari sumber yang sama: pekerjaan yang akibatnya baru terasa berbulan-bulan kemudian sulit menahan perhatianmu, karena tidak ada umpan balik yang bisa kamu rasakan hari ini.",
        en: "The weakness comes from the same source: work whose consequences only surface months later struggles to hold your attention, because there is no feedback you can feel today." }
    ]
  },

  dalam_tim: {
    inti: { id: "Kalimat yang paling sering keluar darimu adalah \u201cbiar saya coba dulu\u201d, dan biasanya berhasil.",
            en: "The line that comes out of you most often is \u201clet me try it\u201d, and it usually works." },
    membawa: [
      { id: "Kecepatan saat keadaan tidak sesuai rencana dan tidak ada prosedurnya.",
        en: "Speed when things go off-plan and no procedure covers it." },
      { id: "Ketenangan di situasi yang membuat orang lain panik.",
        en: "Calm in situations that make other people panic." },
      { id: "Kesediaan mencoba, sehingga tim tidak terjebak terlalu lama di pembahasan.",
        en: "A willingness to try, so the team does not get stuck too long in discussion." }
    ],
    butuh: [
      { id: "Tujuan yang jelas, tapi cara yang boleh kamu tentukan sendiri.",
        en: "A clear goal, with the method left to you." },
      { id: "Umpan balik yang cepat, karena hasil yang baru terlihat setahun lagi tidak terasa nyata bagimu.",
        en: "Fast feedback, because a result visible only a year later does not feel real to you." },
      { id: "Partner yang menjaga hal-hal jangka panjang tetap tercatat.",
        en: "A partner who keeps the long-term items on the record." }
    ]
  },

  salah_paham: {
    inti: { id: "Orang sering mengira kamu tidak serius.",
            en: "People often assume you are not serious." },
    poin: [
      // DISKRIMINATIF: keahlian datang dari jam terbang, bukan dari catatan
      { id: "Yang sebenarnya terjadi biasanya kamu sudah tahu caranya dari jam terbang, sehingga tidak terlihat sedang berusaha.",
        en: "What is usually happening is that you already know how from hours logged, so it does not look like effort." },
      { id: "Ketidaksukaanmu pada rapat dibaca sebagai tidak peduli, padahal kamu sedang menunggu kesempatan mengerjakannya.",
        en: "Your dislike of meetings reads as indifference, when you are waiting for the chance to actually do it." },
      { id: "Kemampuanmu berimprovisasi dianggap kebetulan, padahal itu hasil ribuan jam menghadapi situasi yang tidak sama.",
        en: "Your improvisation is taken as luck, when it comes from thousands of hours facing situations that were never the same." },
      { id: "Kamu dinilai sulit diatur, padahal yang kamu tolak biasanya cuma caranya, bukan tujuannya.",
        en: "You are judged as hard to manage, when what you resist is usually the method, not the goal." }
    ]
  },

  kalau_tertekan: {
    inti: { id: "Saat tekanannya tidak juga reda, dorongan pertamamu adalah mencari perubahan, bukan menyelesaikan yang ada.",
            en: "When the pressure will not lift, your first pull is to seek a change rather than resolve what is there." },
    paragraf: [
      { id: "Pindah tempat, pindah peran, atau mengambil hal baru terasa seperti jalan keluar yang masuk akal, dan seringkali memang menolong. Yang perlu diwaspadai adalah kalau polanya berulang tanpa pernah terasa cukup, karena berarti yang kamu cari bukan tempat baru melainkan sesuatu yang belum kamu temukan di mana pun.",
        en: "Moving location, moving role, or picking up something new feels like a sensible way out, and often genuinely helps. What to watch is the pattern repeating without ever feeling enough, because then what you are looking for is not a new place but something you have not yet found anywhere." }
    ],
    sorot: { id: "Kamu jarang terlihat tertekan, dan itu justru masalahnya: orang di sekitarmu baru tahu setelah kamu sudah memutuskan pergi.",
             en: "You rarely look under strain, and that is the problem: people around you find out only after you have already decided to go." }
  },

  tumbuh_lewat: {
    inti: { id: "Yang paling mengembangkanmu justru bertahan, bukan mencoba hal baru.",
            en: "What develops you most is staying, not trying something new." },
    poin: [
      { id: "Menuntaskan satu hal yang membosankan sampai akhir, sebagai latihan.",
        en: "Finishing one boring thing all the way through, as practice." },
      { id: "Mencatat apa yang kamu kerjakan, supaya keahlianmu bisa dibuktikan, bukan hanya dirasakan.",
        en: "Recording what you did, so your skill can be shown rather than only felt." },
      { id: "Memilih satu keterampilan dan mendalaminya bertahun-tahun, bukan menambah keterampilan baru.",
        en: "Choosing one skill and going deep for years, instead of adding another." },
      { id: "Menyampaikan lebih awal kalau kamu sudah mulai jenuh, sebelum keputusannya sudah bulat.",
        en: "Saying earlier that you are starting to tire of it, before the decision is already made." }
    ]
  }
}

};

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_WATAK_CONTENT;
