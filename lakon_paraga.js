/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — LAPIS PARAGA  (LENGKAP, 24 dari 24)
   Gabungan dari enam berkas per Kelompok. Isinya disalin apa adanya.

   Field per Paraga:
     en            nama arketipe bahasa Inggris
     kekuatan      3 butir, mengisi bagian gratis "Kekuatan Utamamu"
     pertemuan     apa yang muncul dari perpotongan Kelompok dan Watak
     peran_khas    bentuk peran yang cenderung ditempati, di industri apa pun
     titik_rawan   { peran, pola }
     pengembangan  6 langkah, tiap butir { judul, kenapa }
     arah_karir    5 profesi

   DISIPLIN YANG DIPEGANG SAAT MENULIS
   Lapis ini HANYA memuat apa yang muncul dari perpotongan. Kalau sebuah
   kalimat benar untuk keempat Paraga dalam satu Kelompok, ia milik lapis
   Kelompok. Kalau benar untuk keenam Paraga dengan Watak sama, ia milik
   lapis Watak. Tanpa aturan ini pembaca akan merasa membaca hal yang sama
   tiga kali.

   HASIL UJI PEMBEDAAN
     Di dalam tiap Kelompok, kemiripan antar 4 Watak : 12–26%
     Antar Kelompok dengan Watak sama                 : rata-rata 19–26%
     Ambang yang dipakai                              : 45%

   TIDAK ADA SATU PUN PEMBANDINGAN ANTAR TIPE.
   Naskah lama memuat "paling langka", "paling dicari", "tidak glamor",
   dan "baru terlihat saat tidak ada". Semuanya dibuang.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_PARAGA_CONTENT = {



/* ═══════════════════════════════════════════════════════════════════════
   YASA REKA — The Visionary Maker
   Minat mengerjakan yang nyata × cara bergerak dari makna
   ═══════════════════════════════════════════════════════════════════════ */
"Yasa|Reka": {
  en: "The Visionary Maker",

  kekuatan: [
    { id: "Menerjemahkan gagasan besar jadi sesuatu yang bisa dipegang, tanpa kehilangan maksud aslinya.",
      en: "Turning a large idea into something that can be held, without losing what it was for." },
    { id: "Melihat lebih awal kalau sebuah rancangan akan dipakai dengan cara yang tidak diinginkan pembuatnya.",
      en: "Seeing early when a design will be used in a way its maker never intended." },
    { id: "Bertahan lama pada pekerjaan teknis yang kamu percayai, jauh melewati titik orang lain menyerah.",
      en: "Staying with technical work you believe in, well past the point where others give up." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak cukup bertanya apakah ini bisa dibuat. Kamu bertanya apakah ini layak dibuat.",
            en: "Asking whether this can be built is not enough for you. You ask whether it should be." },
    paragraf: [
      // DISKRIMINATIF: menolak solusi efisien yang terasa salah; tidak benar utk Yasa Logika/Jaga/Guna
      { id: "Keterampilan tangan bertemu dengan syarat bahwa hasilnya harus berarti bagi seseorang. Akibatnya kamu bisa menolak solusi yang paling efisien kalau menurutmu hasilnya akan dipakai dengan cara yang salah, dan itu keputusan yang sulit dijelaskan kepada orang yang menilai pekerjaan dari waktu dan biaya.",
        en: "Hand skill meets a requirement that the result must matter to someone. So you can refuse the most efficient solution when you believe the result will be used the wrong way, and that is a hard decision to explain to anyone judging work by time and cost." },
      { id: "Pembuat lain berhenti ketika benda itu berfungsi. Kamu berhenti ketika benda itu berfungsi dan terasa benar bagi orang yang akan memakainya, dan jarak antara dua titik itu sering tidak terlihat oleh siapa pun selain kamu.",
        en: "Other makers stop when the thing works. You stop when it works and feels right for whoever will use it, and the distance between those two points is often invisible to everyone but you." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menjembatani orang yang merancang dan orang yang membangun.",
            en: "You tend to occupy the position that bridges those who design and those who build." },
    poin: [
      { id: "Orang yang menerjemahkan gagasan besar jadi sesuatu yang benar-benar bisa dikerjakan.",
        en: "The one who turns a large idea into something that can actually be built." },
      { id: "Penjaga agar hal yang dibangun tidak kehilangan tujuannya di tengah proses teknis.",
        en: "The one who keeps what is being built from losing its purpose mid-process." },
      { id: "Orang yang mengangkat pertanyaan tentang pemakainya, saat tim sudah sibuk dengan spesifikasi.",
        en: "The one who raises the question about the user while the team is deep in specifications." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya konstruksi atau manufaktur. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only construction or manufacturing. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Produksi bervolume tinggi yang menuntut kecepatan dan keseragaman akan menghabiskanmu, bukan karena berat, melainkan karena tidak ada satu pun keputusan yang boleh kamu ambil sendiri. Kamu bisa bertahan lama di sana, dan itu bagian yang berbahayanya.",
          en: "High-volume production demanding speed and uniformity will drain you, not because it is heavy but because there is not one decision you are allowed to make. You can last a long time there, and that is the dangerous part." },
        // DISKRIMINATIF: pekerjaan teknis bergengsi tanpa kontak dengan pemakainya
        { id: "Yang paling menipu adalah posisi teknis bergengsi yang tidak pernah bertemu orang yang memakai hasilnya. Semua ukuran keberhasilanmu terpenuhi, dan kamu tetap merasa sedang mengerjakan sesuatu yang entah untuk siapa.",
          en: "The most deceptive is a prestigious technical post that never meets the people who use its output. Every measure of your success is met, and you still feel you are making something for no one in particular." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menyempurnakan bagian yang tidak akan diperhatikan siapa pun
        { id: "Kamu menyempurnakan bagian yang tidak akan diperhatikan siapa pun, karena kamu tahu bagian itu ada. Ini bukan kesempurnaan yang dituntut orang lain, melainkan yang kamu tuntut dari diri sendiri, dan ongkosnya jatuh padamu: waktu yang habis, tenggat yang lewat, dan rasa bersalah yang tidak sebanding dengan bedanya.",
          en: "You perfect the part nobody will notice, because you know it is there. This is not perfectionism demanded by others but by yourself, and the cost lands on you: time gone, deadlines missed, and guilt out of proportion to the difference it made." },
        { id: "Pola kedua: kamu menolak brief yang tidak kamu yakini dengan cara mengerjakannya setengah hati, bukan dengan menyampaikan keberatannya. Hasilnya tetap keluar, tapi kamu menyimpan itu, dan lama-lama kamu berjarak dari pekerjaan yang sebenarnya masih bisa diperbaiki.",
          en: "A second pattern: you refuse a brief you do not believe in by doing it half-heartedly rather than voicing the objection. The output still comes, but you keep it, and over time you drift from work that could still have been fixed." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tetapkan batas waktu untuk bagian yang tidak terlihat",
               en: "Set a time limit on the part nobody sees" },
      kenapa:{ id: "Kamu tidak akan berhenti sendiri, karena kamu tahu bagian itu ada. Batas dari luar lebih menolong daripada niat.",
               en: "You will not stop on your own, because you know it is there. An external limit helps more than intent does." } },
    { judul: { id: "Temui satu orang yang memakai hasil kerjamu",
               en: "Meet one person who uses what you made" },
      kenapa:{ id: "Makna yang kamu cari sering ada di sana, dan tidak akan datang lewat spesifikasi.",
               en: "The meaning you are looking for is usually there, and it will not arrive through a specification." } },
    { judul: { id: "Sampaikan keberatanmu sebelum mulai mengerjakan",
               en: "Say your objection before you start building" },
      kenapa:{ id: "Keberatan yang disimpan berubah jadi hasil setengah hati, dan itu terbaca sebagai kemampuan, bukan sebagai keberatan.",
               en: "An objection kept turns into half-hearted output, and that reads as ability, not as objection." } },
    { judul: { id: "Selesaikan satu proyek yang tidak kamu cintai, sampai tuntas",
               en: "Finish one project you do not love, all the way" },
      kenapa:{ id: "Kemampuan menuntaskan tanpa dorongan makna adalah yang memisahkan pembuat yang bertahan dari yang tidak.",
               en: "Finishing without meaning to carry you is what separates makers who last from those who do not." } },
    { judul: { id: "Tunjukkan hasil setengah jadi lebih awal",
               en: "Show unfinished work earlier" },
      kenapa:{ id: "Kamu terbiasa menyimpan sampai layak dilihat, dan itu menghabiskan berminggu-minggu ke arah yang belum tentu benar.",
               en: "You tend to hold work back until it deserves an audience, and that spends weeks in a direction not yet confirmed." } },
    { judul: { id: "Tuliskan alasan di balik pilihan teknismu",
               en: "Write down the reason behind your technical choice" },
      kenapa:{ id: "Kamu tahu kenapa satu cara lebih benar, tapi kalau tidak tertulis, yang menang di rapat adalah yang lebih murah.",
               en: "You know why one way is better, but if it is not written down, the cheaper option wins the meeting." } }
  ],

  arah_karir: {
    id: ["Arsitek / perancang produk", "Perancang produk berkelanjutan", "Perancang pengalaman pengguna",
         "Pengrajin & praktisi keahlian khusus", "Pengembang teknologi tepat guna"],
    en: ["Architect / product designer", "Sustainable product designer", "User experience designer",
         "Craftsperson & specialist practitioner", "Appropriate-technology developer"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   YASA LOGIKA — The Systems Engineer
   Minat mengerjakan yang nyata × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Yasa|Logika": {
  en: "The Systems Engineer",

  kekuatan: [
    { id: "Merancang cara kerja yang bisa diulang orang lain tanpa kehadiranmu.",
      en: "Designing a method others can repeat without you present." },
    { id: "Menemukan titik bocor di proses yang sudah lama dianggap beres.",
      en: "Finding the leak in a process long considered settled." },
    { id: "Memperkirakan bagian mana yang akan patah lebih dulu saat bebannya bertambah.",
      en: "Predicting which part gives way first when the load increases." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak hanya membangun bendanya. Kamu membangun cara membuatnya lagi.",
            en: "You do not only build the thing. You build the way to make it again." },
    paragraf: [
      // DISKRIMINATIF: hasil kerja sesungguhnya adalah metodenya; tidak benar utk Yasa Jaga/Guna/Reka
      { id: "Keterampilan tangan bertemu dengan dorongan merancang. Akibatnya, hasil kerjamu yang sebenarnya sering bukan benda yang jadi, melainkan cara kerja yang kamu tinggalkan: alat bantu yang kamu buat sendiri, urutan yang kamu perbaiki, ukuran yang kamu tetapkan supaya orang berikutnya tidak perlu menebak.",
        en: "Hand skill meets an urge to design. So your real output is often not the finished object but the method you leave behind: the jig you built yourself, the sequence you improved, the tolerance you set so the next person need not guess." },
      { id: "Kamu sulit mengerjakan sesuatu dua kali dengan cara yang sama tanpa memperbaikinya, meskipun cara lamanya masih berjalan. Bagi sebagian orang itu terlihat seperti tidak bisa diam. Bagimu cara yang belum optimal terasa seperti hutang yang belum dibayar.",
        en: "You struggle to do the same thing twice the same way without improving it, even when the old way still works. To some that looks like restlessness. To you an unoptimised method feels like an unpaid debt." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menentukan bagaimana sesuatu dikerjakan, bukan hanya mengerjakannya.",
            en: "You tend to occupy the position that decides how something is done, not only doing it." },
    poin: [
      { id: "Orang yang merancang alur kerja supaya hasilnya bisa diulang tanpa bergantung pada siapa yang mengerjakan.",
        en: "The one who designs the workflow so results repeat regardless of who does the work." },
      { id: "Penemu titik bocor yang tidak terlihat orang lain, di proses yang sudah dianggap beres.",
        en: "The one who finds the leak nobody sees, in a process already considered settled." },
      { id: "Orang yang bertanya bagaimana ini bertahan kalau bebannya sepuluh kali lipat.",
        en: "The one who asks how this holds at ten times the load." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan teknis yang seluruh metodenya sudah dikunci dan tugasmu hanya menjalankan akan membosankanmu dalam hitungan bulan, meskipun materinya rumit. Kerumitan tidak menahanmu; yang menahanmu adalah ruang untuk mengubah.",
          en: "Technical work whose method is fully locked, where your job is only to execute, will bore you within months even if the material is complex. Complexity does not hold you; room to change things does." },
        // DISKRIMINATIF: peran penasihat tanpa wewenang mengubah
        { id: "Yang paling menipu adalah peran penasihat teknis yang boleh menganalisis tapi tidak boleh mengubah. Kamu akan menghasilkan rekomendasi yang bagus, melihatnya tidak dijalankan, dan berhenti peduli lebih cepat daripada yang kamu kira.",
          en: "The most deceptive is a technical advisory role allowed to analyse but not to change. You will produce good recommendations, watch them go unused, and stop caring faster than you expect." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: memperbaiki yang tidak diminta, lalu jadi satu-satunya yang paham
        { id: "Kamu memperbaiki hal yang tidak diminta karena melihat celahnya, lalu sistem yang lebih baik itu jadi sistem yang hanya kamu pahami. Ongkosnya jatuh padamu: kamu terikat pada sesuatu yang sebenarnya sudah selesai, dan sulit pindah tanpa meninggalkan kekacauan.",
          en: "You fix what nobody asked you to fix because you saw the gap, and the better system becomes a system only you understand. The cost lands on you: you are tied to something already finished, and cannot move on without leaving a mess." },
        { id: "Pola kedua: minatmu habis di titik masalahnya terpecahkan, bukan di titik pekerjaannya selesai. Bagian akhir yang tinggal dirapikan terasa seperti mengetik ulang jawaban yang sudah kamu tahu, dan itu bagian yang paling sering menentukan apakah hasilmu benar-benar dipakai orang.",
          en: "A second pattern: your interest runs out where the problem is solved, not where the work is done. The last stretch feels like retyping an answer you already have, and it is the stretch that most often decides whether your work gets used at all." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tulis dokumentasi sebelum pindah ke masalah berikutnya",
               en: "Write the documentation before moving to the next problem" },
      kenapa:{ id: "Sistem yang hanya kamu pahami mengikatmu di tempat, bukan menaikkanmu.",
               en: "A system only you understand ties you down rather than lifting you." } },
    { judul: { id: "Tuntaskan satu hal sampai dipakai orang lain",
               en: "Take one thing all the way to being used by someone else" },
      kenapa:{ id: "Pekerjaan yang berhenti di titik terpecahkan tidak pernah jadi bukti apa pun.",
               en: "Work that stops at solved never becomes evidence of anything." } },
    { judul: { id: "Tanyakan dulu apakah masalahnya memang perlu dipecahkan",
               en: "Ask first whether the problem needs solving at all" },
      kenapa:{ id: "Sebagian celah yang kamu lihat memang nyata, tapi memperbaikinya lebih mahal daripada membiarkannya.",
               en: "Some gaps you see are real, but fixing them costs more than leaving them." } },
    { judul: { id: "Jelaskan rancanganmu kepada orang yang tidak sebidang",
               en: "Explain your design to someone outside your field" },
      kenapa:{ id: "Rancangan yang tidak bisa dijelaskan tidak akan disetujui, sebagus apa pun.",
               en: "A design that cannot be explained will not be approved, however good it is." } },
    { judul: { id: "Serahkan satu perbaikan kepada orang lain",
               en: "Hand one improvement over to someone else" },
      kenapa:{ id: "Kamu akan melihat mana bagian rancanganmu yang sebenarnya belum jelas.",
               en: "You will find out which part of your design was never actually clear." } },
    { judul: { id: "Tanyakan bagaimana perasaan tim atas perubahan yang kamu buat",
               en: "Ask how the team feels about the change you made" },
      kenapa:{ id: "Perbaikan yang benar secara teknis tetap bisa gagal kalau orangnya tidak dibawa serta.",
               en: "A technically correct improvement still fails when the people were not brought along." } }
  ],

  arah_karir: {
    id: ["Insinyur sistem / proses", "Arsitek perangkat lunak", "Insinyur manufaktur",
         "Manajer teknik", "Perancang infrastruktur"],
    en: ["Systems / process engineer", "Software architect", "Manufacturing engineer",
         "Engineering manager", "Infrastructure designer"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   YASA JAGA — The Master Craftsperson
   Minat mengerjakan yang nyata × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Yasa|Jaga": {
  en: "The Master Craftsperson",

  kekuatan: [
    { id: "Menjaga mutu tetap sama justru saat semua orang sedang terburu-buru.",
      en: "Holding quality steady exactly when everyone else is rushing." },
    { id: "Menghasilkan pekerjaan yang tidak perlu diperiksa ulang oleh orang lain.",
      en: "Producing work nobody needs to recheck." },
    { id: "Mengingat cara yang pernah gagal, sehingga tim tidak mengulangi jalan buntu yang sama.",
      en: "Remembering what failed before, so the team does not walk the same dead end twice." }
  ],

  pertemuan: {
    inti: { id: "Bagimu mutu bukan pilihan yang diambil tiap kali, melainkan cara kerja yang sudah tidak ditawar lagi.",
            en: "To you quality is not a choice made each time, but a way of working no longer up for negotiation." },
    paragraf: [
      // DISKRIMINATIF: standar sudah berdiri sebelum tekanan datang; tidak benar utk Yasa Guna/Reka/Logika
      { id: "Keterampilan tangan bertemu dengan rasa tanggung jawab. Akibatnya standarmu sudah berdiri sebelum tekanan datang, sehingga saat tenggat mendekat kamu tidak perlu memutuskan apakah akan berkompromi. Keputusan itu sudah diambil jauh sebelumnya, dan itu yang membuat hasilmu bisa diramalkan.",
        en: "Hand skill meets a sense of duty. So your standard is already in place before the pressure arrives, and when a deadline closes in you do not have to decide whether to compromise. That decision was made long before, and it is what makes your output predictable." },
      { id: "Orang lain menyebutnya konsisten. Dari dalam rasanya berbeda: menurunkan mutu terasa seperti mengingkari sesuatu, bukan seperti mengambil jalan pintas yang wajar.",
        en: "Others call it consistency. From the inside it feels different: lowering the standard feels like breaking something, not like taking a reasonable shortcut." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menjadi patokan mutu bagi orang lain.",
            en: "You tend to occupy the position that becomes the quality reference for everyone else." },
    poin: [
      { id: "Orang yang hasilnya dipakai sebagai pembanding saat orang lain ragu sudah cukup baik atau belum.",
        en: "The one whose work is used as the comparison when others are unsure something is good enough." },
      { id: "Penjaga agar mutu tidak turun justru di saat semua orang sedang terburu-buru.",
        en: "The one who keeps quality from slipping exactly when everyone is rushing." },
      { id: "Orang yang mengingatkan bahwa yang kemarin belum tuntas sebelum yang baru dimulai.",
        en: "The one who says yesterday's work is unfinished before the new thing starts." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tempat yang mutunya memang tidak dituntut akan menempatkanmu pada posisi yang aneh: kamu tetap bekerja dengan standarmu, tidak ada yang meminta, dan tidak ada yang menghargai. Lama-lama kamu bukan lelah karena bebannya, melainkan karena merasa sendirian memegang sesuatu.",
          en: "A place where quality genuinely is not required puts you in an odd position: you keep working to your standard, nobody asks for it, and nobody values it. Eventually you tire not from the load but from holding something alone." },
        // DISKRIMINATIF: promosi menjauh dari pekerjaan tangan
        { id: "Yang paling menipu adalah promosi ke posisi yang menjauhkanmu dari pekerjaannya sendiri. Kamu akan menerimanya karena terdengar seperti pengakuan, lalu bertahun-tahun merindukan hal yang dulu membuatmu merasa berguna, tanpa bisa mengatakannya kepada siapa pun.",
          en: "The most deceptive is a promotion that moves you away from the work itself. You will accept it because it sounds like recognition, then spend years missing what once made you feel useful, without being able to say so to anyone." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: memperbaiki diam-diam pekerjaan orang lain
        { id: "Kamu memperbaiki diam-diam pekerjaan orang lain yang tidak memenuhi standarmu, tanpa memberi tahu mereka. Hasil akhirnya rapi, dan itu yang membuat pola ini bertahan lama. Ongkosnya jatuh padamu: orang itu tidak pernah belajar, bebanmu bertambah tiap tahun, dan tidak ada yang tahu ada yang perlu diperbaiki.",
          en: "You quietly fix other people's work that falls short of your standard, without telling them. The final result is clean, and that is why the pattern survives so long. The cost lands on you: they never learn, your load grows each year, and nobody knows anything needs fixing." },
        { id: "Pola kedua: kamu menahan keberatan sampai punya bukti lengkap. Kamu hampir selalu benar saat akhirnya bicara, tapi terlalu sering setelah keputusannya sudah diambil, dan setelah beberapa kali kamu berhenti bicara sama sekali.",
          en: "A second pattern: you hold an objection until your evidence is complete. You are almost always right when you finally speak, but too often after the decision is made, and after a few rounds you stop speaking at all." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Kembalikan satu pekerjaan yang tidak memenuhi standar, jangan perbaiki sendiri",
               en: "Return one substandard piece instead of fixing it yourself" },
      kenapa:{ id: "Selama kamu memperbaikinya diam-diam, tidak ada yang belajar dan bebanmu tidak akan pernah terlihat.",
               en: "As long as you fix it quietly, nobody learns and your load never becomes visible." } },
    { judul: { id: "Sampaikan keberatan saat baru enam puluh persen yakin",
               en: "Raise an objection when you are only sixty percent sure" },
      kenapa:{ id: "Yang kamu tunggu adalah bukti lengkap. Yang dibutuhkan tim adalah peringatan lebih awal.",
               en: "What you are waiting for is complete evidence. What the team needs is an earlier warning." } },
    { judul: { id: "Sebutkan bantuan yang kamu berikan, sekali seminggu",
               en: "Name the help you gave, once a week" },
      kenapa:{ id: "Pekerjaan yang kamu serap diam-diam tidak terlihat oleh orang yang seharusnya memperbaikinya.",
               en: "The work you absorb quietly is invisible to the person who ought to fix it." } },
    { judul: { id: "Ajari satu orang standarmu, bukan hanya menerapkannya",
               en: "Teach one person your standard, not only apply it" },
      kenapa:{ id: "Standar yang tidak diajarkan mati bersama perannya, dan itu kerugian buatmu juga.",
               en: "A standard never taught dies with the role, and that is a loss for you too." } },
    { judul: { id: "Terima satu hasil yang cukup baik tanpa memperbaikinya",
               en: "Accept one good-enough result without touching it" },
      kenapa:{ id: "Tidak semua yang di bawah standarmu berarti tidak layak. Membedakan keduanya menghemat banyak tenagamu.",
               en: "Not everything below your standard is unacceptable. Telling them apart saves you a great deal." } },
    { judul: { id: "Cari tahu ke mana keahlianmu bisa dibawa, sebelum ditawari",
               en: "Find out where your skill could go, before you are offered anything" },
      kenapa:{ id: "Kalau tidak, kamu akan menerima promosi pertama yang datang, termasuk yang menjauhkanmu dari pekerjaannya.",
               en: "Otherwise you will take the first promotion offered, including the one that removes you from the work." } }
  ],

  arah_karir: {
    id: ["Manajer mutu / QA", "Manajer lokasi atau pabrik", "Insinyur pemeliharaan",
         "Instruktur vokasi & pelatihan teknis", "Pengawas keselamatan kerja"],
    en: ["Quality / QA manager", "Site or plant manager", "Maintenance engineer",
         "Vocational instructor & technical trainer", "Occupational safety supervisor"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   YASA GUNA — The Field Expert
   Minat mengerjakan yang nyata × cara bergerak dari keadaan di depan mata
   ═══════════════════════════════════════════════════════════════════════ */
"Yasa|Guna": {
  en: "The Field Expert",

  kekuatan: [
    { id: "Mengenali sumber masalah dari bunyi, getaran, atau rasa, sebelum alat ukur menunjukkannya.",
      en: "Recognising the source of a fault from sound, vibration, or feel, before an instrument shows it." },
    { id: "Bertindak tepat saat keadaannya tidak cocok dengan prosedur mana pun.",
      en: "Acting correctly when the situation fits no procedure at all." },
    { id: "Tetap tenang dan berguna di situasi yang membuat orang lain panik.",
      en: "Staying calm and useful in situations that make other people panic." }
  ],

  pertemuan: {
    inti: { id: "Kamu mengenali masalahnya lewat tangan sebelum bisa menjelaskannya lewat kata.",
            en: "You recognise the problem through your hands before you can put it into words." },
    paragraf: [
      // DISKRIMINATIF: diagnosis lewat rasa, bukan lewat prosedur; tidak benar utk Yasa Jaga/Logika/Reka
      { id: "Keterampilan tangan bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu sering tahu ada yang tidak beres dari bunyi, getaran, atau rasa, jauh sebelum alat ukur menunjukkannya. Ini bukan tebakan; ini ribuan jam yang mengendap jadi insting, dan sulit dijelaskan kepada orang yang belum pernah memegangnya.",
        en: "Hand skill meets a way of moving that reads the situation directly. So you often know something is off from a sound, a vibration, or a feel, long before an instrument shows it. This is not guesswork; it is thousands of hours settled into instinct, and hard to explain to anyone who has never held the thing." },
      { id: "Karena itu kamu tidak butuh prosedur lengkap untuk mulai bertindak, dan sering sudah setengah jalan menyelesaikan sementara yang lain masih mencari dokumennya. Itu kekuatan terbesarmu, dan sekaligus sumber sebagian besar masalahmu dengan orang yang bekerja lewat aturan.",
        en: "So you do not need a full procedure to start acting, and are often half done while others are still looking for the document. That is your greatest strength, and also the source of most of your friction with people who work through rules." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang dipanggil pertama saat ada yang tidak beres.",
            en: "You tend to occupy the position called first when something goes wrong." },
    poin: [
      { id: "Orang yang mendiagnosis dan memperbaiki di tempat, tanpa harus mengangkatnya ke rapat.",
        en: "The one who diagnoses and fixes on the spot, without escalating it to a meeting." },
      { id: "Penenang situasi yang membuat orang lain panik.",
        en: "The one who steadies a situation that makes everyone else panic." },
      { id: "Penghubung antara apa yang tertulis di prosedur dan apa yang benar-benar terjadi di lapangan.",
        en: "The link between what the procedure says and what actually happens on the ground." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan di belakang meja yang menjauhkanmu dari tempat kejadian akan terasa seperti dikurung, meskipun materinya masih teknis. Yang hilang bukan pekerjaannya, melainkan umpan balik langsung yang selama ini jadi cara kamu tahu bahwa kamu berguna.",
          en: "Desk work that keeps you away from where things happen will feel like confinement, even if the material is still technical. What is lost is not the work but the immediate feedback that has been how you know you are useful." },
        // DISKRIMINATIF: promosi ke koordinasi yang menghapus umpan balik harian
        { id: "Yang paling menipu adalah promosi jadi koordinator yang mengatur orang lain mengerjakan hal yang dulu kamu kerjakan sendiri. Gajinya naik, dan keahlian yang kamu bangun bertahun-tahun mulai tumpul tanpa ada yang menyadarinya, termasuk kamu, sampai sudah agak terlambat.",
          en: "The most deceptive is promotion to coordinator, directing others to do what you used to do yourself. The pay rises, and the skill you built over years starts to dull without anyone noticing, including you, until it is somewhat late." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: keahlian tidak pernah tercatat, jadi tidak bisa dibuktikan
        { id: "Kamu jarang mencatat apa yang sudah kamu kerjakan, karena mencatat terasa lambat dibanding mengerjakan. Akibatnya keahlianmu hanya terasa, tidak terbukti. Saat ada kesempatan naik atau pindah, tidak ada yang bisa kamu tunjukkan selain kesaksian orang yang kebetulan pernah bekerja denganmu.",
          en: "You rarely record what you have done, because recording feels slow next to doing. So your skill is felt rather than evidenced. When a chance to move or rise appears, there is nothing to show but the word of whoever happened to work with you." },
        { id: "Pola kedua: kamu menyelesaikan masalah lebih cepat daripada memperbaiki penyebabnya. Masalah yang sama datang lagi, kamu menyelesaikannya lagi, dan lama-lama kamu jadi satu-satunya orang yang bisa menanganinya. Itu terdengar aman, dan justru itu yang menahanmu di tempat.",
          en: "A second pattern: you fix the problem faster than you fix its cause. The same problem returns, you fix it again, and eventually you are the only one who can handle it. That sounds safe, and it is exactly what keeps you where you are." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Catat apa yang kamu kerjakan, satu baris per hari",
               en: "Record what you did, one line a day" },
      kenapa:{ id: "Keahlianmu sekarang hanya terasa. Satu baris sehari mengubahnya jadi bukti dalam setahun.",
               en: "Your skill is currently only felt. One line a day turns it into evidence within a year." } },
    { judul: { id: "Perbaiki penyebabnya sekali sebulan, bukan gejalanya",
               en: "Fix the cause once a month, not the symptom" },
      kenapa:{ id: "Masalah yang kamu selesaikan hari ini akan kembali. Yang penyebabnya kamu perbaiki tidak.",
               en: "The problem you solve today will come back. The one whose cause you fix will not." } },
    { judul: { id: "Jelaskan sekali bagaimana kamu tahu ada yang tidak beres",
               en: "Explain once how you knew something was wrong" },
      kenapa:{ id: "Instingmu nyata, tapi selama tidak bisa dijelaskan, ia dianggap kebetulan oleh orang yang menilai.",
               en: "Your instinct is real, but while it cannot be explained it is treated as luck by whoever assesses you." } },
    { judul: { id: "Ajari satu orang menangani hal yang biasa kamu tangani",
               en: "Teach one person to handle what you always handle" },
      kenapa:{ id: "Jadi satu-satunya yang bisa terdengar aman, tapi itu yang menahanmu di posisi yang sama.",
               en: "Being the only one who can do it sounds safe, but it holds you in the same position." } },
    { judul: { id: "Tanyakan alasan sebuah prosedur sebelum melewatinya",
               en: "Ask the reason for a procedure before stepping around it" },
      kenapa:{ id: "Instingmu soal mana yang bisa dilewati biasanya benar. Yang sesekali salah biayanya besar.",
               en: "Your instinct for what can be skipped is usually right. The occasional miss is expensive." } },
    { judul: { id: "Pilih satu keahlian dan dalami bertahun-tahun",
               en: "Choose one skill and go deep for years" },
      kenapa:{ id: "Menambah keahlian baru terasa lebih menyenangkan, tapi kedalaman yang membuatmu tidak tergantikan.",
               en: "Adding a new skill feels better, but depth is what makes you hard to replace." } }
  ],

  arah_karir: {
    id: ["Teknisi senior / mekanik spesialis", "Insinyur lapangan", "Paramedis & tenaga tanggap darurat",
         "Supervisor lapangan konstruksi", "Operator & teknisi alat berat"],
    en: ["Senior technician / specialist mechanic", "Field engineer", "Paramedic & emergency responder",
         "Construction site supervisor", "Heavy equipment operator & technician"]
  }
},



/* ═══════════════════════════════════════════════════════════════════════
   NALAR REKA — The Meaning-Seeker
   Minat menelusuri × cara bergerak dari makna
   ═══════════════════════════════════════════════════════════════════════ */
"Nalar|Reka": {
  en: "The Meaning-Seeker",

  kekuatan: [
    { id: "Menemukan arti sebuah temuan bagi orang yang hidupnya kena dampaknya.",
      en: "Finding what a result means for the people whose lives it touches." },
    { id: "Menggali alasan sebenarnya di balik jawaban yang diberikan orang.",
      en: "Digging out the real reason behind the answer people gave." },
    { id: "Menjelaskan hal yang rumit tanpa membuat pendengarnya merasa bodoh.",
      en: "Explaining something complex without making the listener feel stupid." }
  ],

  pertemuan: {
    inti: { id: "Pertanyaanmu selalu berakhir pada orang, bahkan ketika berangkat dari angka.",
            en: "Your questions always end at people, even when they start from numbers." },
    paragraf: [
      // DISKRIMINATIF: meninggalkan temuan yang rapi tapi tidak berimplikasi pada siapa pun
      { id: "Rasa ingin tahu bertemu dengan syarat bahwa temuan itu harus berarti. Akibatnya kamu bisa meninggalkan penelitian yang metodologinya rapi kalau hasilnya tidak berimplikasi pada siapa pun, dan itu keputusan yang sulit dibela di lingkungan yang menilai kerja dari jumlah publikasi atau laporan.",
        en: "Curiosity meets a requirement that the finding must matter. So you can abandon methodologically clean research when the result has no implication for anyone, and that is a hard call to defend where work is judged by volume of publication or reports." },
      { id: "Peneliti lain berhenti saat datanya sudah menjawab pertanyaannya. Kamu berhenti saat sudah tahu apa artinya bagi orang yang hidupnya kena dampaknya, dan bagian kedua itu sering tidak diminta siapa pun.",
        en: "Other researchers stop when the data answers the question. You stop when you know what it means for the people whose lives it touches, and that second part is often asked for by no one." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menerjemahkan temuan jadi keputusan yang berpihak pada manusia.",
            en: "You tend to occupy the position that turns findings into decisions that side with people." },
    poin: [
      { id: "Orang yang mengingatkan bahwa di balik tiap angka ada orang, saat tim sudah berbicara dalam metrik.",
        en: "The one reminding everyone there is a person behind each number, when the team speaks only in metrics." },
      { id: "Penerjemah antara orang yang punya data dan orang yang harus mengambil keputusan.",
        en: "The translator between those who hold the data and those who must decide." },
      { id: "Penggali alasan sebenarnya di balik jawaban yang diberikan orang.",
        en: "The one who digs for the real reason behind the answer people gave." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Riset yang dijalankan untuk memenuhi target laporan akan menghabiskanmu lebih cepat daripada riset yang sulit. Kamu tetap akan mengerjakannya dengan benar, dan itu justru yang membuat tidak ada yang menyadari bahwa kamu sedang habis.",
          en: "Research run to satisfy a reporting target will drain you faster than research that is difficult. You will still do it properly, and that is exactly why nobody notices you are running out." },
        // DISKRIMINATIF: temuan tidak pernah sampai ke pengambil keputusan
        { id: "Yang paling menipu adalah posisi analis di organisasi yang temuannya tidak pernah sampai ke pengambil keputusan. Pekerjaannya menarik, datanya bagus, dan setelah dua tahun kamu akan sadar tidak ada satu pun yang berubah karena kerjamu.",
          en: "The most deceptive is an analyst post in an organisation whose findings never reach the decision-makers. The work is interesting, the data is good, and after two years you will realise nothing changed because of it." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menunda kesimpulan karena takut menyederhanakan orang
        { id: "Kamu menunda menyimpulkan karena takut kesimpulanmu akan menyederhanakan orang yang kamu teliti. Kehati-hatian itu benar, tapi ongkosnya jatuh padamu: keputusan tetap diambil, hanya saja tanpa masukanmu, dan yang mengambilnya biasanya punya kehati-hatian yang jauh lebih sedikit.",
          en: "You delay concluding because you fear your conclusion will flatten the people you studied. That caution is right, but the cost lands on you: the decision gets made anyway, just without your input, and usually by someone with far less caution." },
        { id: "Pola kedua: kamu sulit menyampaikan temuan yang akan merugikan orang yang sudah kamu kenal dalam prosesnya. Kamu akan memperhalusnya, dan pelan-pelan laporanmu jadi kurang berguna justru bagi orang yang ingin kamu lindungi.",
          en: "A second pattern: you struggle to report a finding that will hurt someone you got to know during the process. You soften it, and gradually your reports become less useful to the very people you meant to protect." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tetapkan tanggal menyimpulkan sebelum mulai meneliti",
               en: "Set the date you will conclude before you start" },
      kenapa:{ id: "Kamu tidak akan berhenti sendiri, karena selalu ada satu lapis lagi yang belum dipahami.",
               en: "You will not stop on your own, because there is always one more layer not yet understood." } },
    { judul: { id: "Sampaikan temuan yang tidak nyaman apa adanya, sekali",
               en: "Deliver one uncomfortable finding as it is" },
      kenapa:{ id: "Temuan yang diperhalus berhenti melindungi siapa pun, termasuk orang yang kamu jaga.",
               en: "A softened finding stops protecting anyone, including the person you were shielding." } },
    { judul: { id: "Tulis satu halaman ringkas untuk pengambil keputusan",
               en: "Write one summary page for the decision-maker" },
      kenapa:{ id: "Riset yang tidak bisa dibaca dalam lima menit jarang mengubah apa pun.",
               en: "Research that cannot be read in five minutes rarely changes anything." } },
    { judul: { id: "Pisahkan mana yang belum cukup data dan mana yang kamu ragu menyampaikannya",
               en: "Separate what lacks data from what you hesitate to say" },
      kenapa:{ id: "Keduanya terasa sama dari dalam, dan hanya satu yang memang alasan ilmiah.",
               en: "The two feel identical from the inside, and only one is a scientific reason." } },
    { judul: { id: "Ajukan angka, bukan hanya narasi",
               en: "Bring the number, not only the narrative" },
      kenapa:{ id: "Cerita membuat orang mengerti, angka membuat mereka bertindak. Kamu kuat di yang pertama.",
               en: "A story makes people understand; a number makes them act. You are strong at the first." } },
    { judul: { id: "Minta satu orang membantah temuanmu sebelum diserahkan",
               en: "Ask one person to attack your finding before you submit it" },
      kenapa:{ id: "Kamu memeriksa metodologi dengan ketat, tapi jarang memeriksa apakah kamu memihak.",
               en: "You check the methodology rigorously, but rarely check whether you took a side." } }
  ],

  arah_karir: {
    id: ["Peneliti pengguna (UX research)", "Analis kebijakan publik", "Peneliti sosial & evaluator program",
         "Jurnalis data & komunikator sains", "Peneliti kesehatan masyarakat"],
    en: ["User (UX) researcher", "Public policy analyst", "Social researcher & programme evaluator",
         "Data journalist & science communicator", "Public health researcher"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   NALAR LOGIKA — The Pure Analyst
   Minat menelusuri × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Nalar|Logika": {
  en: "The Pure Analyst",

  kekuatan: [
    { id: "Membangun cara menguji yang tahan terhadap dugaanmu sendiri.",
      en: "Building a test that holds up against your own hunch." },
    { id: "Menemukan kesalahan berpikir yang membuat seluruh keputusan berdiri di tempat yang salah.",
      en: "Finding the reasoning error that put an entire decision on the wrong footing." },
    { id: "Menahan kesimpulan sampai buktinya benar-benar cukup, meski semua orang sudah ingin melanjutkan.",
      en: "Holding back a conclusion until the evidence is genuinely enough, even when everyone wants to move on." }
  ],

  pertemuan: {
    inti: { id: "Yang paling kamu curigai adalah jawaban yang paling kamu sukai.",
            en: "What you distrust most is the answer you like most." },
    paragraf: [
      // DISKRIMINATIF: menguji dugaan sendiri paling keras; tidak benar utk Nalar Reka/Jaga/Guna
      { id: "Rasa ingin tahu bertemu dengan dorongan merancang, dan hasilnya bukan sekadar menyelidiki, melainkan membangun cara menyelidiki yang tahan terhadap dirimu sendiri. Kamu tahu kesimpulan yang menyenangkan adalah yang paling mudah lolos, jadi kamu memasang pengujian paling ketat justru di sana.",
        en: "Curiosity meets an urge to design, and the result is not merely investigating but building a method of investigation that holds up against yourself. You know the pleasing conclusion is the one most likely to slip through, so you put the hardest test exactly there." },
      { id: "Karena itu kamu jarang tergesa mengumumkan temuan, dan sering terlihat lebih ragu daripada orang yang datanya jauh lebih tipis. Yang terlihat sebagai keraguan sebenarnya adalah standar yang belum terpenuhi.",
        en: "So you rarely rush to announce a finding, and often look less certain than someone with far thinner data. What reads as hesitation is a standard not yet met." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menentukan apakah sebuah kesimpulan boleh dipakai.",
            en: "You tend to occupy the position that decides whether a conclusion may be used." },
    poin: [
      { id: "Orang yang berkata data ini belum cukup, ketika semua orang sudah ingin melanjutkan.",
        en: "The one who says this data is not enough, when everyone else is ready to move on." },
      { id: "Perancang cara mengukur, bukan hanya pembaca hasil ukurannya.",
        en: "The one who designs the measurement, not only reads its output." },
      { id: "Penemu kesalahan berpikir yang membuat seluruh keputusan berdiri di tempat yang salah.",
        en: "The one who finds the reasoning error that put the whole decision on the wrong footing." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tempat yang menginginkan angka untuk membenarkan keputusan yang sudah diambil akan menempatkanmu pada posisi yang tidak mungkin. Kamu akan diminta membuktikan, bukan menyelidiki, dan menolaknya berulang kali lebih melelahkan daripada pekerjaan analisisnya sendiri.",
          en: "A place that wants numbers to justify a decision already made puts you in an impossible position. You will be asked to prove rather than investigate, and refusing repeatedly is more tiring than the analysis itself." },
        // DISKRIMINATIF: analisis yang berhenti di laporan tahunan
        { id: "Yang paling menipu adalah posisi analis senior yang hasilnya berakhir di laporan tahunan. Kerjanya rapi, gajinya baik, dan tidak ada satu pun keputusan yang berubah karenanya. Kamu biasanya baru menyadarinya di tahun ketiga.",
          en: "The most deceptive is a senior analyst post whose output ends in an annual report. The work is clean, the pay is good, and not one decision changes because of it. You usually notice in the third year." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: kepastian yang tidak akan pernah tercapai jadi alasan menunda
        { id: "Kamu menunggu tingkat kepastian yang, kalau jujur, tidak akan pernah tercapai dengan data yang ada. Menunggu terasa lebih bertanggung jawab daripada menyimpulkan, padahal keputusan tetap diambil orang lain dalam waktu itu. Ongkosnya jatuh padamu: kamu benar, dan tidak berpengaruh.",
          en: "You wait for a level of certainty that, honestly, the available data will never reach. Waiting feels more responsible than concluding, while the decision gets made by someone else in the meantime. The cost lands on you: you are right, and irrelevant." },
        { id: "Pola kedua: kamu menyampaikan temuan dengan seluruh syarat dan pengecualiannya sekaligus, karena semuanya memang benar. Pendengarmu menangkap keraguan, bukan ketelitian, lalu memakai analisis lain yang lebih percaya diri meski lebih lemah.",
          en: "A second pattern: you present a finding with all its caveats at once, because all of them are true. Your audience hears doubt rather than rigour, then uses a more confident but weaker analysis instead." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Sampaikan kesimpulan lebih dulu, syaratnya belakangan",
               en: "Give the conclusion first, the caveats after" },
      kenapa:{ id: "Urutan menentukan apa yang didengar orang. Syarat di depan terdengar sebagai keraguan.",
               en: "Order decides what people hear. Caveats first sound like doubt." } },
    { judul: { id: "Tetapkan ambang keyakinan sebelum menganalisis",
               en: "Set your confidence threshold before you analyse" },
      kenapa:{ id: "Kalau ambangnya ditentukan setelah melihat data, ia akan terus bergerak menjauh.",
               en: "If the threshold is set after seeing the data, it will keep moving away from you." } },
    { judul: { id: "Tuntaskan satu analisis sampai dipakai orang",
               en: "Take one analysis all the way to being used" },
      kenapa:{ id: "Minatmu habis di titik masalahnya terpecahkan, dan di situlah nilainya justru belum dimulai.",
               en: "Your interest ends where the problem is solved, and that is where its value has not yet begun." } },
    { judul: { id: "Jelaskan temuanmu ke orang yang tidak sebidang, tanpa menyederhanakannya jadi salah",
               en: "Explain your finding to a non-specialist without simplifying it into something wrong" },
      kenapa:{ id: "Ini keterampilan tersendiri, dan ketiadaannya yang paling sering menahan analis yang kuat.",
               en: "This is a separate skill, and its absence is what most often holds strong analysts back." } },
    { judul: { id: "Sebutkan sekali apa yang membuatmu bisa saja keliru",
               en: "State once what could make you wrong" },
      kenapa:{ id: "Kamu sudah memikirkannya. Mengatakannya justru menaikkan kepercayaan, bukan menurunkannya.",
               en: "You have already thought it. Saying it raises trust rather than lowering it." } },
    { judul: { id: "Tanyakan bagaimana perasaan orang atas kesimpulanmu",
               en: "Ask how people feel about your conclusion" },
      kenapa:{ id: "Kesimpulan yang benar tetap gagal dipakai kalau orangnya merasa dipermalukan olehnya.",
               en: "A correct conclusion still fails to get used when people feel shamed by it." } }
  ],

  arah_karir: {
    id: ["Ilmuwan data / analis kuantitatif", "Ekonom & analis riset", "Analis risiko",
         "Peneliti klinis", "Insinyur pembelajaran mesin"],
    en: ["Data scientist / quantitative analyst", "Economist & research analyst", "Risk analyst",
         "Clinical researcher", "Machine learning engineer"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   NALAR JAGA — The Methodical Investigator
   Minat menelusuri × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Nalar|Jaga": {
  en: "The Methodical Investigator",

  kekuatan: [
    { id: "Menghasilkan pekerjaan yang bisa dilanjutkan orang lain bertahun-tahun kemudian.",
      en: "Producing work someone else can pick up years later." },
    { id: "Menjaga data tetap bersih sebelum ada yang menganalisisnya.",
      en: "Keeping the data clean before anyone analyses it." },
    { id: "Mencatat jalan buntu, bukan hanya jalan yang berhasil.",
      en: "Recording the dead ends, not only the routes that worked." }
  ],

  pertemuan: {
    inti: { id: "Bagimu prosesnya adalah bagian dari temuannya, bukan jalan menuju temuan.",
            en: "To you the process is part of the finding, not the road to it." },
    paragraf: [
      // DISKRIMINATIF: hasil yang benar lewat proses yang cacat tetap dianggap tidak sah
      { id: "Rasa ingin tahu bertemu dengan rasa tanggung jawab. Akibatnya, hasil yang kebetulan benar lewat proses yang cacat tetap kamu anggap tidak sah, dan kamu akan mengulangnya. Bagi orang lain itu terlihat berlebihan, karena jawabannya toh sama.",
        en: "Curiosity meets a sense of duty. So a result that happens to be right through a flawed process is still invalid to you, and you will redo it. To others that looks excessive, since the answer is the same anyway." },
      { id: "Kamu juga mencatat apa yang tidak berhasil, bukan hanya yang berhasil, karena orang berikutnya perlu tahu jalan buntu itu sudah pernah ditempuh. Sedikit orang melakukannya, dan itu yang membuat pekerjaanmu bisa dilanjutkan orang lain bertahun-tahun kemudian.",
        en: "You also record what did not work, not only what did, because the next person needs to know that dead end has been walked. Few people do this, and it is what lets your work be continued by someone years later." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menjamin bahwa temuan organisasi bisa dipercaya.",
            en: "You tend to occupy the position that guarantees the organisation's findings can be trusted." },
    poin: [
      { id: "Orang yang memastikan datanya bersih sebelum ada yang menganalisisnya.",
        en: "The one who ensures the data is clean before anyone analyses it." },
      { id: "Penjaga agar prosedur tidak dipotong justru saat tenggatnya mendekat.",
        en: "The one who keeps a protocol from being cut exactly when the deadline nears." },
      { id: "Orang yang ingat percobaan serupa pernah dilakukan, dan kenapa dulu gagal.",
        en: "The one who remembers a similar attempt was made, and why it failed then." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tempat yang menuntut hasil cepat dengan metodologi yang dikompromikan akan menempatkanmu dalam konflik nilai yang tidak pernah selesai. Kamu akan tetap bekerja dengan benar, sendirian, dan kelelahannya datang dari menahan itu tiap hari, bukan dari pekerjaannya.",
          en: "A place demanding fast results on compromised methodology puts you in a values conflict that never resolves. You will keep working properly, alone, and the exhaustion comes from holding that daily rather than from the work." },
        // DISKRIMINATIF: promosi ke peran yang menafsirkan hal yang belum jelas
        { id: "Yang paling menipu adalah promosi ke peran strategis yang tugasnya menafsirkan hal yang belum jelas. Terdengar seperti kemajuan, dan sesungguhnya memindahkanmu dari hal yang paling kamu kuasai ke hal yang paling membuatmu tidak tenang.",
          en: "The most deceptive is promotion into a strategic role whose work is interpreting what is not yet clear. It sounds like progress, and in fact moves you from what you are best at to what most unsettles you." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menolak melaporkan sebelum sempurna, lalu tidak pernah melaporkan
        { id: "Kamu menahan laporan sampai seluruhnya rapi, dan karena selalu ada yang belum rapi, sebagian pekerjaanmu tidak pernah dilaporkan sama sekali. Ongkosnya jatuh padamu: kerja bertahun-tahun yang tidak terlihat, dan penilaian yang tidak sesuai dengan apa yang sebenarnya kamu kerjakan.",
          en: "You hold a report back until everything is in order, and because something always is not, part of your work never gets reported at all. The cost lands on you: years of work unseen, and an assessment that does not match what you actually did." },
        { id: "Pola kedua: kamu menjawab masalah baru dengan menambah prosedur, padahal sebagian masalah muncul justru karena prosedurnya sudah tidak cocok. Prosedur yang menumpuk membuat pekerjaan makin berat bagi semua orang, termasuk bagimu.",
          en: "A second pattern: you answer a new problem by adding procedure, when some problems arise precisely because the procedure no longer fits. Accumulated procedure makes the work heavier for everyone, you included." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Laporkan hasil sementara, jangan tunggu rapi",
               en: "Report interim results; do not wait for tidy" },
      kenapa:{ id: "Yang tidak dilaporkan dianggap tidak dikerjakan, dan itu penilaian yang tidak adil bagimu.",
               en: "What is not reported is treated as not done, and that assessment is unfair to you." } },
    { judul: { id: "Buang satu prosedur sebelum menambah yang baru",
               en: "Remove one procedure before adding another" },
      kenapa:{ id: "Prosedur yang menumpuk pada akhirnya melindungi berkas, bukan pekerjaannya.",
               en: "Accumulated procedure ends up protecting the file rather than the work." } },
    { judul: { id: "Sampaikan keberatan saat baru enam puluh persen yakin",
               en: "Raise an objection when you are only sixty percent sure" },
      kenapa:{ id: "Kamu hampir selalu benar saat akhirnya bicara, tapi biasanya setelah keputusannya diambil.",
               en: "You are almost always right when you finally speak, but usually after the decision is made." } },
    { judul: { id: "Kerjakan satu hal yang datanya memang tidak akan lengkap",
               en: "Take on one thing whose data will never be complete" },
      kenapa:{ id: "Sebagian besar keputusan penting diambil dalam keadaan itu. Latihannya perlu disengaja.",
               en: "Most important decisions are made in exactly that state. The practice has to be deliberate." } },
    { judul: { id: "Ajari satu orang metodemu, bukan hanya memeriksanya",
               en: "Teach one person your method, not only check theirs" },
      kenapa:{ id: "Memeriksa membuatmu jadi penghambat. Mengajari membuat standarmu bertahan tanpa kamu.",
               en: "Checking makes you the bottleneck. Teaching makes your standard survive without you." } },
    { judul: { id: "Sebutkan bebanmu sebelum ada yang bertanya",
               en: "Name your load before anyone asks" },
      kenapa:{ id: "Kamu menyerap pekerjaan tambahan diam-diam, dan tidak ada yang tahu perlu ada yang diubah.",
               en: "You absorb extra work quietly, and nobody knows anything needs changing." } }
  ],

  arah_karir: {
    id: ["Koordinator riset klinis", "Analis pengendalian mutu", "Spesialis kepatuhan & audit",
         "Ilmuwan laboratorium", "Pengelola data penelitian"],
    en: ["Clinical research coordinator", "Quality control analyst", "Compliance & audit specialist",
         "Laboratory scientist", "Research data manager"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   NALAR GUNA — The Applied Problem-Solver
   Minat menelusuri × cara bergerak dari keadaan di depan mata
   ═══════════════════════════════════════════════════════════════════════ */
"Nalar|Guna": {
  en: "The Applied Problem-Solver",

  kekuatan: [
    { id: "Berpindah dari diagnosis ke tindakan dalam hitungan hari, bukan bulan.",
      en: "Moving from diagnosis to action in days rather than months." },
    { id: "Memecah kebuntuan saat tim terlalu lama berputar di pembahasan.",
      en: "Breaking the deadlock when a team circles too long in discussion." },
    { id: "Menemukan perbaikan yang cukup baik dan bisa dikerjakan besok pagi.",
      en: "Finding a fix good enough to start on tomorrow morning." }
  ],

  pertemuan: {
    inti: { id: "Kamu berhenti menyelidiki di titik yang sudah cukup untuk bertindak, bukan di titik semuanya jelas.",
            en: "You stop investigating at the point where it is enough to act, not where everything is clear." },
    paragraf: [
      // DISKRIMINATIF: berhenti di "cukup untuk bergerak"; kebalikan Nalar Logika & Jaga
      { id: "Rasa ingin tahu bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu punya rem yang tidak dimiliki kebanyakan orang yang suka menyelidiki: begitu tahu cukup untuk memperbaiki keadaan, kamu berhenti mencari dan mulai mengerjakan.",
        en: "Curiosity meets a way of moving that reads the situation directly. So you have a brake most investigative people lack: the moment you know enough to improve things, you stop looking and start doing." },
      { id: "Ini membuatmu jauh lebih cepat daripada rekan-rekanmu, dan sesekali membuatmu melewatkan sebab yang lebih dalam. Kamu biasanya baru tahu bedanya ketika masalah yang sama datang untuk ketiga kalinya.",
        en: "This makes you much faster than your peers, and occasionally makes you miss the deeper cause. You usually learn the difference when the same problem arrives a third time." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang mengubah temuan jadi tindakan, dalam hitungan hari bukan bulan.",
            en: "You tend to occupy the position that turns findings into action in days rather than months." },
    poin: [
      { id: "Orang yang mendiagnosis masalah bisnis atau produk dan langsung mengusulkan yang bisa dikerjakan.",
        en: "The one who diagnoses a business or product problem and proposes something actionable right away." },
      { id: "Pemecah kebuntuan saat tim terlalu lama berputar di pembahasan.",
        en: "The one who breaks the deadlock when a team circles too long in discussion." },
      { id: "Penghubung antara data dan orang yang harus mengerjakan sesuatu besok pagi.",
        en: "The link between the data and whoever has to do something tomorrow morning." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Riset murni yang hasilnya tidak berujung pada tindakan akan membuatmu gelisah dalam hitungan bulan, meskipun materinya menarik. Yang hilang bukan tantangannya, melainkan kesempatan melihat sesuatu berubah karena temuanmu.",
          en: "Pure research that never leads to action will make you restless within months, however interesting the material. What is missing is not the challenge but the chance to see something change because of your finding." },
        // DISKRIMINATIF: peran yang seluruhnya rapat dan presentasi
        { id: "Yang paling menipu adalah peran strategis yang seluruh harinya berisi rapat dan presentasi. Kamu akan pandai menjalaninya, dan tetap pulang dengan perasaan tidak mengerjakan apa pun.",
          en: "The most deceptive is a strategic role whose entire day is meetings and presentations. You will be good at it, and still go home feeling you did nothing." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: berhenti terlalu awal lalu masalahnya kembali
        { id: "Rem yang membuatmu cepat juga membuatmu berhenti terlalu awal. Kamu memperbaiki gejalanya, masalahnya kembali, dan kamu memperbaikinya lagi. Ongkosnya jatuh padamu: waktumu habis di masalah yang sama, dan reputasimu jadi orang yang menambal, bukan orang yang menyelesaikan.",
          en: "The brake that makes you fast also makes you stop too early. You fix the symptom, the problem returns, and you fix it again. The cost lands on you: your time goes to the same problem, and you become known as the one who patches rather than the one who solves." },
        { id: "Pola kedua: kamu jarang mendokumentasikan cara kamu sampai ke kesimpulan, karena bagimu yang penting hasilnya. Akibatnya rekomendasimu sulit dipertahankan saat ada yang menanyakannya enam bulan kemudian, dan kamu sendiri kadang sudah lupa alasannya.",
          en: "A second pattern: you rarely document how you reached a conclusion, because to you the result is what matters. So your recommendation is hard to defend when someone asks six months later, and by then you have sometimes forgotten the reason yourself." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tanyakan sekali lagi kenapa, sebelum mulai memperbaiki",
               en: "Ask why one more time before you start fixing" },
      kenapa:{ id: "Satu lapis lebih dalam biasanya cukup memisahkan gejala dari penyebabnya.",
               en: "One layer deeper is usually enough to separate the symptom from the cause." } },
    { judul: { id: "Catat tiga baris alasan di balik tiap rekomendasi",
               en: "Record three lines of reasoning behind each recommendation" },
      kenapa:{ id: "Enam bulan lagi kamu akan diminta membelanya, dan kamu sendiri sudah lupa.",
               en: "In six months you will be asked to defend it, and you will have forgotten too." } },
    { judul: { id: "Kerjakan satu hal yang hasilnya baru terlihat tiga bulan lagi",
               en: "Take on one thing whose result only shows in three months" },
      kenapa:{ id: "Kemampuan bertahan pada umpan balik lambat adalah pintu ke peran yang lebih besar.",
               en: "Staying with slow feedback is the door to larger roles." } },
    { judul: { id: "Hitung berapa kali masalah yang sama sudah kamu tangani",
               en: "Count how many times you have handled the same problem" },
      kenapa:{ id: "Angka itu yang akan meyakinkanmu bahwa menambal lebih mahal daripada memperbaiki.",
               en: "That number is what will convince you patching costs more than fixing." } },
    { judul: { id: "Ajari satu orang cara diagnosismu",
               en: "Teach one person how you diagnose" },
      kenapa:{ id: "Kecepatanmu berasal dari pola yang bisa diajarkan, bukan dari bakat yang tidak bisa dibagi.",
               en: "Your speed comes from patterns that can be taught, not from a gift that cannot be shared." } },
    { judul: { id: "Sampaikan lebih awal kalau kamu mulai jenuh",
               en: "Say early when you are starting to tire of it" },
      kenapa:{ id: "Kamu jarang terlihat tertekan, jadi orang baru tahu setelah kamu memutuskan pergi.",
               en: "You rarely look under strain, so people find out only after you have decided to go." } }
  ],

  arah_karir: {
    id: ["Analis bisnis / produk", "Manajer produk", "Konsultan manajemen",
         "Analis peningkatan mutu layanan kesehatan", "Analis pertumbuhan & performa"],
    en: ["Business / product analyst", "Product manager", "Management consultant",
         "Healthcare quality improvement analyst", "Growth & performance analyst"]
  }
},



"Karya|Reka": {
  en: "The Visionary Storyteller",

  kekuatan: [
    { id: "Membuat orang merasakan sesuatu, bukan sekadar memahaminya.",
      en: "Making people feel something rather than merely understand it." },
    { id: "Menjaga agar karya tim tidak kehilangan alasannya di tengah jalan.",
      en: "Keeping the team's work from losing its reason along the way." },
    { id: "Mengenali perbedaan antara cukup bagus dan benar-benar pas.",
      en: "Telling the difference between good enough and actually right." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak bisa mengerjakan karya yang tidak kamu percayai, dan itu bukan soal disiplin.",
            en: "You cannot work on something you do not believe in, and that is not about discipline." },
    paragraf: [
      // Yang muncul dari PERTEMUAN: minat mencipta + syarat makna
      { id: "Minat mencipta bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya, kamu punya dua saringan yang harus lolos sekaligus sebelum sebuah pekerjaan terasa layak: bentuknya harus bisa kamu tentukan, dan tujuannya harus bisa kamu bela.",
        en: "An interest in making meets a requirement that the thing must matter. So two filters must both clear before a piece of work feels worth doing: you must be able to shape it, and you must be able to defend what it is for." },
      { id: "Kreator lain bisa mengerjakan brief apa pun dengan baik. Kamu bisa juga, tapi hasilnya akan terasa berbeda bagi dirimu sendiri, dan biasanya kamu yang paling tahu bedanya sebelum ada yang menyebutkan.",
        en: "Other makers can execute any brief well. So can you, but the result will feel different to you, and you are usually the first to know the difference before anyone names it." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menentukan arah dan nada, bukan yang mengeksekusi arahan.",
            en: "You tend to occupy the position that sets direction and tone, rather than executing a brief." },
    poin: [
      { id: "Orang yang memutuskan sebuah pesan mau terasa seperti apa, bukan hanya berbunyi apa.",
        en: "The one who decides how a message should feel, not only what it should say." },
      { id: "Penerjemah antara orang yang punya visi dan orang yang harus mewujudkannya.",
        en: "The translator between the person with the vision and the people who must build it." },
      { id: "Penjaga agar hal yang dikerjakan tim tidak kehilangan alasannya di tengah jalan.",
        en: "The one who keeps what the team is making from losing its reason along the way." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya di dunia kreatif. Lihat bagian Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only creative ones. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        // DISKRIMINATIF: revisi tanpa arah lebih melelahkan daripada beban kerja
        { id: "Pekerjaan kreatif bervolume tinggi dengan revisi yang arahnya berganti-ganti akan menghabiskanmu lebih cepat daripada pekerjaan berat yang jelas tujuannya. Yang melelahkan bukan jumlahnya, melainkan harus berulang kali membangun ulang alasannya sendiri.",
          en: "High-volume creative work with revisions that keep changing direction will drain you faster than heavy work with a clear purpose. What tires you is not the volume but having to rebuild the reason for it again and again." },
        { id: "Yang paling menipu adalah posisi kreatif bergengsi di organisasi yang keputusan akhirnya selalu diambil orang lain. Gelarnya bagus, portofolionya bagus, dan kamu akan merasa kosong tanpa bisa menjelaskan kenapa.",
          en: "The most deceptive is a prestigious creative post in an organisation where the final call always sits elsewhere. The title is good, the portfolio is good, and you will feel empty without being able to say why." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menunda memulai sampai gambarannya jelas, lalu dibaca sebagai malas
        { id: "Kamu menunda memulai sampai gambarannya cukup jelas di kepala, dan waktu itu bisa jauh lebih lama daripada yang kamu akui. Dari luar ini terbaca sebagai menunda, padahal kamu sedang bekerja. Ongkosnya bukan pada penilaian orang, melainkan pada dirimu: makin lama menunggu, makin besar yang kamu tuntut dari hasilnya, dan makin sulit memulainya.",
          en: "You put off starting until the picture is clear enough in your head, and that can take far longer than you admit. From outside it reads as stalling, when you are in fact working. The cost is not other people's judgement but your own: the longer you wait, the more you demand of the result, and the harder it becomes to begin." },
        { id: "Pola kedua: kamu menolak brief yang tidak kamu percayai dengan cara diam, bukan dengan menyampaikannya. Pekerjaannya tetap selesai, tapi kamu menyimpan keberatan itu, dan setelah beberapa kali kamu mulai menarik diri dari pekerjaan yang sebenarnya masih bisa diperbaiki lewat satu percakapan.",
          en: "A second pattern: you refuse a brief you do not believe in by going quiet rather than saying so. The work still gets done, but you keep the objection, and after a few rounds you start withdrawing from work that one conversation could still have fixed." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Mulai dari versi kasar, sebelum gambarannya jelas",
               en: "Start from a rough version, before the picture is clear" },
      kenapa:{ id: "Gambaran itu sering justru muncul dari mengerjakan, bukan sebelum. Menunggunya lebih dulu berarti menunggu sesuatu yang datangnya belakangan.",
               en: "That picture often arrives from making, not before it. Waiting for it first means waiting for something that comes later." } },

    { judul: { id: "Sampaikan keberatanmu pada brief di hari yang sama",
               en: "Say your objection to a brief on the same day" },
      kenapa:{ id: "Keberatan yang disimpan berubah jadi jarak. Yang disampaikan masih bisa jadi percakapan.",
               en: "An objection kept turns into distance. One that is voiced can still become a conversation." } },

    { judul: { id: "Pisahkan mana yang soal nilai dan mana yang soal selera",
               en: "Separate what is about values from what is about taste" },
      kenapa:{ id: "Tidak semua yang terasa salah bagimu memang salah. Sebagian hanya bukan caramu, dan itu perbedaan yang mahal kalau tertukar.",
               en: "Not everything that feels wrong to you is wrong. Some of it is simply not your way, and confusing the two is expensive." } },

    { judul: { id: "Selesaikan satu proyek yang tidak kamu cintai, sampai tuntas",
               en: "Finish one project you do not love, all the way" },
      kenapa:{ id: "Kemampuan menuntaskan tanpa dorongan makna adalah yang memisahkan kreator yang bertahan dari yang tidak.",
               en: "Being able to finish without meaning to carry you is what separates makers who last from those who do not." } },

    { judul: { id: "Tunjukkan pekerjaan setengah jadi kepada satu orang",
               en: "Show unfinished work to one person" },
      kenapa:{ id: "Kamu terbiasa menyimpan karya sampai layak dilihat. Umpan balik lebih awal menghemat berminggu-minggu ke arah yang salah.",
               en: "You tend to hold work back until it deserves an audience. Earlier feedback saves weeks pointed the wrong way." } },

    { judul: { id: "Tuliskan alasan di balik keputusan kreatifmu",
               en: "Write down the reason behind your creative decision" },
      kenapa:{ id: "Kamu tahu bedanya antara pas dan belum, tapi sering kesulitan menjelaskannya. Yang tidak bisa dijelaskan sulit dipertahankan di ruang rapat.",
               en: "You know the difference between right and not-yet, but often struggle to explain it. What cannot be explained is hard to defend in a meeting." } }
  ],

  arah_karir: {
    id: ["Pengarah kreatif / brand", "Perancang narasi & konten", "Pembuat film / dokumenter",
         "Pendidik seni & desain", "Penggerak program budaya"],
    en: ["Creative / brand director", "Narrative & content designer", "Filmmaker / documentarian",
         "Arts & design educator", "Cultural programme lead"]
  }
},

/* ═══════════════════════════════════════════════════════════════════════
   KARYA LOGIKA — The Creative Architect
   Minat mencipta × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Karya|Logika": {
  en: "The Creative Architect",

  kekuatan: [
    { id: "Menjelaskan kenapa sebuah pilihan kreatif bekerja, bukan hanya merasakannya.",
      en: "Explaining why a creative choice works, not only sensing that it does." },
    { id: "Membangun aturan main yang membuat tim lain bisa menghasilkan karya yang konsisten.",
      en: "Building the rules that let another team produce consistent work." },
    { id: "Melihat lebih awal kalau sebuah keputusan visual akan menyulitkan di seratus tempat berikutnya.",
      en: "Seeing early when one visual decision will cause trouble in a hundred places to come." }
  ],

  pertemuan: {
    inti: { id: "Kamu bisa membuktikan seleramu, dan itu yang membedakanmu di ruang rapat.",
            en: "You can make a case for your taste, and that is what sets you apart in a meeting." },
    paragraf: [
      // DISKRIMINATIF: alasan yang bisa diuji; tidak benar utk Karya Reka/Jaga/Guna
      { id: "Minat mencipta bertemu dengan dorongan merancang. Akibatnya kamu jarang berhenti di \u201crasanya lebih bagus begini\u201d. Kamu tahu kenapa, bisa menyebutkan alasannya, dan bisa menunjukkan apa yang terjadi kalau dipilih yang sebaliknya. Sedikit orang kreatif punya itu, dan itulah yang membuat pendapatmu bertahan di ruangan yang penuh angka.",
        en: "An interest in making meets an urge to design. So you rarely stop at \u201cit just feels better this way\u201d. You know why, can name the reason, and can show what happens if the opposite is chosen. Few creative people have that, and it is what makes your view survive a room full of numbers." },
      { id: "Yang paling kamu nikmati bukan satu karya yang bagus, melainkan sistem yang membuat karya bagus bisa muncul berulang tanpa kamu kerjakan sendiri. Karena itu minatmu sering habis tepat setelah kerangkanya berdiri, dan pekerjaan mengisinya terasa seperti pekerjaan orang lain.",
        en: "What you enjoy most is not one good piece but a system that lets good pieces appear again without you making them. So your interest often runs out right after the framework stands, and filling it in feels like someone else's job." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menetapkan standar kreatif, bukan yang menghasilkan karyanya satu per satu.",
            en: "You tend to occupy the position that sets the creative standard, rather than producing each piece." },
    poin: [
      { id: "Perancang aturan main yang menjaga konsistensi tanpa mematikan keleluasaan.",
        en: "The one who designs rules that hold consistency without killing latitude." },
      { id: "Penerjemah antara tim kreatif dan tim teknis, karena kamu bisa bicara dua bahasa.",
        en: "The translator between creative and technical teams, because you speak both languages." },
      { id: "Orang yang bertanya bagaimana keputusan hari ini akan bertahan di seribu tempat berikutnya.",
        en: "The one who asks how today's decision holds across the next thousand places." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya di dunia kreatif. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only creative ones. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan kreatif bervolume tinggi yang menuntut karya jadi tiap hari akan membuatmu bekerja jauh di bawah kemampuanmu. Kamu sanggup menjalaninya dan hasilnya akan rapi, tapi kemampuan merancangmu tidak akan pernah terpakai, dan tidak ada yang menyadarinya karena keluarannya tetap bagus.",
          en: "High-volume creative work demanding finished pieces daily will keep you well below your capacity. You can do it and the output will be clean, but your design ability will never be used, and nobody notices because the work still looks good." },
        // DISKRIMINATIF: peran yang boleh merancang tapi tidak boleh menerapkan
        { id: "Yang paling menipu adalah peran yang boleh merancang sistem tapi tidak punya wewenang menerapkannya. Kamu akan menghasilkan kerangka yang bagus, melihatnya diabaikan pelan-pelan, dan berhenti peduli lebih cepat daripada yang kamu kira.",
          en: "The most deceptive is a role allowed to design the system but with no authority to enforce it. You will produce a good framework, watch it quietly ignored, and stop caring faster than you expect." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: merancang sistem sebelum ada karyanya
        { id: "Kamu membangun kerangkanya sebelum ada cukup karya untuk membuktikan kerangkanya benar. Rancangan yang lahir dari teori terlihat rapi dan sering patah di pemakaian pertama. Ongkosnya jatuh padamu: kamu dianggap orang yang mempersulit, padahal maksudmu justru mempermudah.",
          en: "You build the framework before there is enough work to prove the framework right. A design born from theory looks tidy and often breaks on first use. The cost lands on you: you are seen as the one who complicates things, when your intent was to simplify." },
        { id: "Pola kedua: minatmu habis begitu masalahnya terpecahkan, jadi bagian akhir yang tinggal dirapikan sering kamu tinggalkan atau kamu serahkan setengah jadi. Justru bagian itu yang menentukan apakah rancanganmu dipakai atau ditinggalkan.",
          en: "A second pattern: your interest runs out once the problem is solved, so the final tidying is often left or handed over half-finished. That is exactly the part deciding whether your design gets used or abandoned." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Buat sepuluh karyanya dulu, baru rancang sistemnya",
               en: "Make ten pieces first, then design the system" },
      kenapa:{ id: "Kerangka yang lahir dari karya nyata bertahan. Yang lahir dari teori patah di pemakaian pertama.",
               en: "A framework born from real work survives. One born from theory breaks on first use." } },
    { judul: { id: "Tuntaskan satu rancangan sampai benar-benar dipakai tim",
               en: "Take one design all the way to being used by the team" },
      kenapa:{ id: "Rancangan yang berhenti di titik terpecahkan tidak pernah jadi bukti apa pun tentang kemampuanmu.",
               en: "A design that stops at solved never becomes evidence of anything about you." } },
    { judul: { id: "Tanyakan bagaimana rasanya memakai aturan yang kamu buat",
               en: "Ask what it feels like to work under the rules you made" },
      kenapa:{ id: "Sistem yang benar secara logika tetap gagal kalau memakainya terasa menyiksa.",
               en: "A logically correct system still fails when using it feels punishing." } },
    { judul: { id: "Sisakan satu bagian yang sengaja tidak diatur",
               en: "Leave one part deliberately unregulated" },
      kenapa:{ id: "Ruang yang tidak diatur adalah tempat orang lain menemukan hal yang tidak kamu perkirakan.",
               en: "The unregulated space is where others find what you did not anticipate." } },
    { judul: { id: "Serahkan satu keputusan visual kepada orang lain, dan jangan dikoreksi",
               en: "Hand one visual decision to someone else, and leave it alone" },
      kenapa:{ id: "Kamu akan tahu bagian mana dari standarmu yang sebenarnya belum pernah dijelaskan.",
               en: "You will find out which part of your standard was never actually explained." } },
    { judul: { id: "Kerjakan satu karya tanpa kerangka apa pun",
               en: "Make one piece with no framework at all" },
      kenapa:{ id: "Selera yang tidak pernah dipakai tanpa alasan lama-lama berhenti tumbuh.",
               en: "A taste never exercised without justification eventually stops developing." } }
  ],

  arah_karir: {
    id: ["Kepala desain / design system lead", "Perancang produk digital (UX)",
         "Pengarah kreatif berbasis strategi", "Creative technologist", "Manajer merek"],
    en: ["Head of design / design system lead", "Digital product (UX) designer",
         "Strategy-led creative director", "Creative technologist", "Brand manager"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARYA JAGA — The Master of Craft
   Minat mencipta × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Karya|Jaga": {
  en: "The Master of Craft",

  kekuatan: [
    { id: "Menghasilkan karya dengan mutu yang sama, hari baik maupun hari buruk.",
      en: "Producing work of the same quality on a good day and a bad one." },
    { id: "Memenuhi tenggat kreatif tanpa menurunkan standar.",
      en: "Meeting a creative deadline without lowering the standard." },
    { id: "Menguasai satu teknik sampai ke tingkat yang membuat orang lain datang bertanya.",
      en: "Mastering one technique to the point where others come to ask you." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak menunggu inspirasi, karena kamu sudah tahu inspirasi datang setelah mulai, bukan sebelum.",
            en: "You do not wait for inspiration, because you know it arrives after starting, not before." },
    paragraf: [
      // DISKRIMINATIF: datang tepat waktu ke pekerjaan kreatif; kebalikan Karya Guna/Reka
      { id: "Minat mencipta bertemu dengan rasa tanggung jawab. Akibatnya kamu memperlakukan pekerjaan kreatif seperti latihan seorang atlet: datang di jam yang sama, duduk, dan mulai, terlepas dari sedang ingin atau tidak. Sebagian besar kreator tidak sanggup melakukan ini, dan itulah kenapa hasilmu bisa diramalkan sementara hasil mereka tidak.",
        en: "An interest in making meets a sense of duty. So you treat creative work like an athlete's training: arrive at the same hour, sit down, and begin, whether or not you feel like it. Most makers cannot do this, and it is why your output can be predicted while theirs cannot." },
      { id: "Tenggat bagimu bukan ancaman melainkan bentuk. Ruang yang tidak berbatas justru membuatmu sulit memulai, dan itu kebalikan dari yang dialami kebanyakan orang di bidang yang sama denganmu.",
        en: "A deadline to you is not a threat but a shape. Unbounded space is what makes it hard for you to begin, and that is the opposite of most people in your field." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang jadi patokan mutu saat karya harus benar-benar keluar.",
            en: "You tend to occupy the position that becomes the quality reference when work must actually ship." },
    poin: [
      { id: "Orang yang dipanggil saat proyeknya penting dan tidak boleh meleset.",
        en: "The one called when a project matters and cannot miss." },
      { id: "Penjaga agar mutu tidak turun justru di minggu terakhir sebelum tayang.",
        en: "The one who keeps quality from slipping in the last week before launch." },
      { id: "Orang yang bisa menunjukkan bedanya cukup bagus dan benar-benar bagus, lalu mengerjakan yang kedua.",
        en: "The one who can show the gap between good enough and actually good, then do the second." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Proyek yang arah kreatifnya berganti terus tanpa alasan yang bisa dimengerti akan menghabiskanmu jauh lebih cepat daripada beban kerja yang berat. Yang melelahkan bukan mengerjakannya berulang, melainkan tidak pernah sampai ke titik selesai.",
          en: "A project whose creative direction keeps changing for reasons you cannot follow will drain you far faster than a heavy workload. What tires you is not the redoing but never reaching finished." },
        // DISKRIMINATIF: peran konseptual yang tidak pernah menyentuh pengerjaannya
        { id: "Yang paling menipu adalah promosi ke peran konseptual yang tidak pernah lagi menyentuh pengerjaannya. Terdengar seperti kenaikan, dan sesungguhnya memindahkanmu dari sumber kepuasanmu, yaitu melihat sesuatu selesai dengan mutu yang kamu tentukan sendiri.",
          en: "The most deceptive is promotion into a conceptual role that never touches the making again. It sounds like a step up, and in fact moves you away from your source of satisfaction: seeing something finished to a standard you set." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menyempurnakan teknik di karya yang arahnya sudah salah
        { id: "Kamu menyempurnakan teknik pada karya yang arahnya sebenarnya sudah salah sejak awal, karena mengerjakan terasa lebih nyaman daripada mempertanyakan. Ongkosnya jatuh padamu: berminggu-minggu kerja yang rapi pada sesuatu yang memang tidak akan dipakai.",
          en: "You perfect the technique on work whose direction was wrong from the start, because making feels more comfortable than questioning. The cost lands on you: weeks of clean work on something that was never going to be used." },
        { id: "Pola kedua: kamu menahan karya sampai memenuhi standarmu, dan karena standarmu tinggi, sebagian karyamu tidak pernah keluar sama sekali. Yang tidak dilihat orang tidak bisa menjadi bukti apa pun tentang kemampuanmu.",
          en: "A second pattern: you hold work back until it meets your standard, and because your standard is high, some of your work never leaves at all. What nobody sees cannot become evidence of anything about you." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tanyakan arah sebelum menyempurnakan teknik",
               en: "Ask about direction before perfecting technique" },
      kenapa:{ id: "Teknik yang rapi pada arah yang salah adalah bentuk kerja keras yang paling mahal.",
               en: "Clean technique in the wrong direction is the most expensive form of hard work." } },
    { judul: { id: "Keluarkan satu karya yang belum memenuhi standarmu",
               en: "Release one piece that has not met your standard" },
      kenapa:{ id: "Karya yang tidak pernah dilihat tidak bisa jadi bukti apa pun tentang kemampuanmu.",
               en: "Work nobody sees cannot become evidence of anything about you." } },
    { judul: { id: "Sampaikan keberatan pada brief di hari yang sama",
               en: "Say your objection to a brief on the same day" },
      kenapa:{ id: "Kamu terbiasa menyelesaikan dulu lalu menyimpan keberatannya, dan itu menumpuk.",
               en: "You tend to finish first and keep the objection, and that accumulates." } },
    { judul: { id: "Coba satu teknik baru tiap kuartal, dengan sengaja",
               en: "Try one new technique each quarter, deliberately" },
      kenapa:{ id: "Kedalamanmu adalah kekuatan, tapi kedalaman tanpa penyegaran lama-lama jadi kebiasaan.",
               en: "Your depth is a strength, but depth without renewal eventually becomes mere habit." } },
    { judul: { id: "Ajari satu orang standarmu, bukan hanya menerapkannya",
               en: "Teach one person your standard, not only apply it" },
      kenapa:{ id: "Standar yang tidak diajarkan berhenti bersamamu, dan itu kerugian buatmu juga.",
               en: "A standard never taught stops with you, and that is a loss for you too." } },
    { judul: { id: "Kerjakan satu proyek tanpa tenggat, sebagai latihan",
               en: "Take on one project with no deadline, as practice" },
      kenapa:{ id: "Tenggat memberimu bentuk, tapi bergantung padanya membuatmu sulit memulai hal yang benar-benar milikmu.",
               en: "Deadlines give you shape, but depending on them makes it hard to start what is truly yours." } }
  ],

  arah_karir: {
    id: ["Desainer grafis senior / art director", "Editor & produser konten visual",
         "Animator & motion designer", "Fotografer / sinematografer", "Manajer produksi kreatif"],
    en: ["Senior graphic designer / art director", "Editor & visual content producer",
         "Animator & motion designer", "Photographer / cinematographer", "Creative production manager"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARYA GUNA — The Spontaneous Creator
   Minat mencipta × cara bergerak dari keadaan di depan mata
   ═══════════════════════════════════════════════════════════════════════ */
"Karya|Guna": {
  en: "The Spontaneous Creator",

  kekuatan: [
    { id: "Menangkap momen yang tidak akan datang dua kali.",
      en: "Catching a moment that will not come twice." },
    { id: "Mengubah arah di tengah jalan saat membaca bahwa yang direncanakan tidak akan bekerja.",
      en: "Changing course midway when you read that the plan will not work." },
    { id: "Membuat sesuatu terasa hidup, bukan hanya rapi.",
      en: "Making something feel alive rather than merely tidy." }
  ],

  pertemuan: {
    inti: { id: "Karya terbaikmu lahir dari keadaan, dan karena itu tidak bisa kamu ulang.",
            en: "Your best work is born from the situation, and so you cannot repeat it." },
    paragraf: [
      // DISKRIMINATIF: bahan bakunya adalah momen; tidak benar utk Karya Jaga/Logika/Reka
      { id: "Minat mencipta bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya bahan bakumu bukan hanya alat dan gagasan, melainkan juga momen: siapa yang hadir, bagaimana suasananya, apa yang baru saja terjadi. Karya yang lahir begitu punya kualitas yang sulit ditiru kreator yang lebih terencana.",
        en: "An interest in making meets a way of moving that reads the situation directly. So your raw material is not only tools and ideas but the moment: who is present, what the room feels like, what just happened. Work born that way has a quality more planned makers struggle to imitate." },
      { id: "Ongkosnya datang dari sumber yang sama. Ketika diminta mengulang sesuatu yang dulu berhasil, kamu sering tidak bisa, karena yang membuatnya berhasil bukan tekniknya melainkan keadaan yang sudah lewat. Ini sering dibaca sebagai tidak konsisten, padahal justru itu cara kerjanya.",
        en: "The cost comes from the same source. Asked to repeat something that once worked, you often cannot, because what made it work was not the technique but a situation now gone. This reads as inconsistency, when it is in fact how the work works." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang berkarya di depan orang, bukan di belakang meja.",
            en: "You tend to occupy the position that creates in front of people, not behind a desk." },
    poin: [
      { id: "Orang yang membuat ruangan hidup saat presentasi atau acara.",
        en: "The one who makes a room come alive during a presentation or an event." },
      { id: "Pembaca tren yang bergerak sebelum momentumnya lewat.",
        en: "The one who reads a trend and moves before the momentum passes." },
      { id: "Penyelamat saat rencana kreatif berantakan dan harus ada yang jadi hari itu juga.",
        en: "The one who saves it when the creative plan collapses and something must exist today." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Proyek kreatif berjangka panjang dengan revisi berlapis akan menghabiskanmu, bukan karena sulit, melainkan karena tidak ada umpan balik yang bisa kamu rasakan hari ini. Kamu sanggup menjalaninya, dan biasanya berhenti tepat sebelum selesai.",
          en: "A long-running creative project with layered revisions will drain you, not because it is hard but because there is no feedback you can feel today. You can do it, and usually stop just before the end." },
        // DISKRIMINATIF: peran yang menuntut mengulang keberhasilan sebelumnya
        { id: "Yang paling menipu adalah peran yang meminta kamu mengulang keberhasilan sebelumnya berkali-kali. Kelihatannya menghargai karyamu, dan sesungguhnya meminta hal yang tidak mungkin, karena yang berhasil dulu adalah momennya, bukan rumusnya.",
          en: "The most deceptive is a role asking you to repeat a past success again and again. It looks like appreciation, and in fact asks the impossible, because what worked was the moment, not a formula." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: tidak menyimpan proses, jadi keahlian tidak bisa dibuktikan
        { id: "Kamu jarang menyimpan proses, karena bagimu yang penting hasilnya dan momennya sudah lewat. Akibatnya kemampuanmu hanya terasa oleh orang yang kebetulan hadir. Saat ada kesempatan besar, tidak ada yang bisa kamu tunjukkan, dan kamu kalah dari orang yang karyanya lebih rapi tercatat meski tidak lebih baik.",
          en: "You rarely keep the process, because to you the result is what matters and the moment has passed. So your ability is felt only by whoever happened to be there. When a large opportunity comes, there is nothing to show, and you lose to someone whose work is better recorded though not better." },
        { id: "Pola kedua: kamu berhenti tepat sebelum bagian akhir yang membosankan, dan bagian itu yang menentukan apakah karyamu sampai ke orang. Karya yang tidak selesai tidak bisa dinilai bagus maupun buruk.",
          en: "A second pattern: you stop just before the boring final stretch, and that stretch decides whether your work reaches anyone. Unfinished work can be judged neither good nor bad." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Rekam prosesnya, bukan hanya hasilnya",
               en: "Record the process, not only the result" },
      kenapa:{ id: "Kemampuanmu sekarang hanya terasa oleh yang kebetulan hadir. Rekaman mengubahnya jadi bukti.",
               en: "Your ability is currently felt only by whoever was there. A record turns it into evidence." } },
    { judul: { id: "Selesaikan bagian akhir yang membosankan, satu kali saja",
               en: "Finish the boring final stretch, just once" },
      kenapa:{ id: "Bagian itu yang menentukan apakah karyamu sampai ke orang atau berhenti di ruanganmu.",
               en: "That stretch decides whether your work reaches anyone or stops in your room." } },
    { judul: { id: "Kumpulkan tiga karyamu jadi satu portofolio",
               en: "Gather three of your works into one portfolio" },
      kenapa:{ id: "Karyamu tersebar di banyak tempat dan momen, jadi tidak ada yang melihat keseluruhannya.",
               en: "Your work is scattered across places and moments, so nobody sees the whole." } },
    { judul: { id: "Sebutkan sekali bagaimana kamu tahu momennya tepat",
               en: "Explain once how you knew the moment was right" },
      kenapa:{ id: "Instingmu nyata, tapi selama tidak bisa dijelaskan, ia dianggap kebetulan oleh orang yang menilai.",
               en: "Your instinct is real, but while it cannot be explained it is treated as luck by whoever assesses you." } },
    { judul: { id: "Terima satu proyek berjangka panjang, dan tuntaskan",
               en: "Take one long-running project, and finish it" },
      kenapa:{ id: "Kemampuan bertahan pada umpan balik lambat adalah pintu ke pekerjaan yang lebih besar.",
               en: "Staying with slow feedback is the door to larger work." } },
    { judul: { id: "Sampaikan lebih awal kalau kamu mulai jenuh",
               en: "Say early when you are starting to tire of it" },
      kenapa:{ id: "Kamu jarang terlihat tertekan, jadi orang baru tahu setelah kamu memutuskan pergi.",
               en: "You rarely look under strain, so people find out only after you have decided to go." } }
  ],

  arah_karir: {
    id: ["Pembuat konten & pengelola media sosial", "Spesialis aktivasi merek & acara",
         "Videografer / fotografer lapangan", "Pembawa acara & fasilitator", "Pengarah kreatif kampanye"],
    en: ["Content creator & social media manager", "Brand activation & event specialist",
         "Field videographer / photographer", "Host & facilitator", "Campaign creative director"]
  }
},



/* ═══════════════════════════════════════════════════════════════════════
   BAKTI REKA — The Human Developer
   Minat menumbuhkan orang × cara bergerak dari makna
   ═══════════════════════════════════════════════════════════════════════ */
"Bakti|Reka": {
  en: "The Human Developer",

  kekuatan: [
    { id: "Melihat apa yang sebenarnya menahan seseorang, bukan apa yang ia keluhkan.",
      en: "Seeing what is actually holding someone back, rather than what they complain about." },
    { id: "Menemani proses yang panjang tanpa memaksa orangnya bergerak lebih cepat.",
      en: "Staying through a long process without pushing the person to move faster." },
    { id: "Membuat orang merasa aman mengakui hal yang belum bisa ia akui di tempat lain.",
      en: "Making people feel safe admitting what they cannot admit anywhere else." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak bisa berhenti di jam kerja, karena yang kamu dampingi bukan berkas.",
            en: "You cannot stop at closing time, because what you carry is not a file." },
    paragraf: [
      // DISKRIMINATIF: membawa pulang; tidak benar utk Bakti Logika/Jaga/Guna
      { id: "Minat menumbuhkan orang bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya kamu tidak bisa memperlakukan pendampingan sebagai tugas yang selesai saat sesinya berakhir. Kamu memikirkan orangnya di perjalanan pulang, dan itu bukan kelemahan profesional melainkan cara kerjamu yang sesungguhnya.",
        en: "An interest in growing people meets a requirement that it must matter. So you cannot treat accompaniment as a task that ends when the session does. You think about the person on the way home, and that is not a professional weakness but how your work actually functions." },
      { id: "Karena itu kamu bekerja lebih baik pada sedikit orang secara mendalam daripada pada banyak orang secara merata. Menambah jumlah tidak menambah dampakmu; ia justru menghapus hal yang membuat pendampinganmu bekerja.",
        en: "So you work better with a few people deeply than with many people evenly. Adding numbers does not add to your impact; it removes the thing that made your accompaniment work." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang didatangi orang bukan karena jabatanmu, melainkan karena mereka merasa didengar.",
            en: "You tend to occupy the position people come to not for your title but because they feel heard." },
    poin: [
      { id: "Orang yang menyuarakan apa yang dirasakan tim tapi belum ada yang berani sebut.",
        en: "The one who voices what the team feels but nobody has dared to say." },
      { id: "Perancang proses belajar yang menyentuh akar, bukan hanya menyampaikan materi.",
        en: "The one who designs learning that reaches the root, not only delivers material." },
      { id: "Penghubung antara kebutuhan organisasi dan kepentingan orang yang bekerja di dalamnya.",
        en: "The link between what the organisation needs and what its people need." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya pendidikan atau kesehatan. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only education or health. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan melayani bervolume tinggi dengan waktu pendek per orang akan menghabiskanmu jauh lebih cepat daripada pekerjaan berat yang mendalam. Yang melelahkan bukan jumlah orangnya, melainkan harus berulang kali berhenti tepat sebelum sesuatu mulai berubah.",
          en: "High-volume service work with little time per person will drain you far faster than deep, heavy work. What tires you is not the number of people but repeatedly stopping just before something starts to shift." },
        // DISKRIMINATIF: promosi ke manajerial yang menjauhkan dari orangnya
        { id: "Yang paling menipu adalah promosi ke posisi manajerial yang mengurus program, bukan orang. Kamu akan menerimanya karena terdengar seperti dampak yang lebih luas, lalu menyadari bahwa yang kamu urus sekarang adalah jadwal dan anggaran, dan orangnya sudah tidak kamu kenal namanya.",
          en: "The most deceptive is promotion into a managerial post that runs programmes rather than people. You will take it because it sounds like wider impact, then realise what you now handle is schedules and budgets, and you no longer know anyone's name." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menahan penilaian jujur demi menjaga hubungan
        { id: "Kamu menahan penilaian yang jujur karena takut merusak hubungan yang sudah terbangun. Niatnya melindungi, akibatnya orang itu tidak pernah tahu hal yang paling perlu ia tahu. Ongkosnya jatuh padamu juga: kamu memikul pengetahuan itu sendirian, dan lama-lama pendampinganmu terasa tidak jujur bagi dirimu sendiri.",
          en: "You hold back an honest assessment for fear of damaging a relationship you built. The intent is protective; the effect is that the person never learns the one thing they most needed to. The cost lands on you too: you carry that knowledge alone, and eventually your accompaniment starts to feel dishonest to you." },
        { id: "Pola kedua: kamu sulit menutup pendampingan yang sudah selesai, karena berhenti terasa seperti meninggalkan. Akibatnya kapasitasmu terus terpakai oleh orang yang sebenarnya sudah bisa berjalan sendiri, dan orang berikutnya tidak kebagian.",
          en: "A second pattern: you struggle to close an accompaniment that is finished, because stopping feels like abandoning. So your capacity stays occupied by people who can already walk on their own, and the next person never gets a turn." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Sampaikan satu penilaian jujur yang selama ini kamu tahan",
               en: "Give one honest assessment you have been holding back" },
      kenapa:{ id: "Yang kamu tahan demi menjaga hubungan justru membuat hubungan itu berdiri di atas hal yang tidak dikatakan.",
               en: "What you withhold to protect a relationship leaves that relationship standing on something unsaid." } },
    { judul: { id: "Tetapkan kapan sebuah pendampingan dianggap selesai",
               en: "Decide in advance when an accompaniment counts as finished" },
      kenapa:{ id: "Tanpa titik akhir, kapasitasmu habis oleh orang yang sudah bisa berjalan sendiri.",
               en: "Without an endpoint, your capacity is consumed by people who can already walk alone." } },
    { judul: { id: "Catat perubahan yang terjadi pada orang yang kamu dampingi",
               en: "Record the change that happened in the people you accompanied" },
      kenapa:{ id: "Dampakmu nyata tapi tidak terlihat di laporan mana pun, dan itu merugikanmu saat dinilai.",
               en: "Your impact is real but appears in no report, and that costs you when you are assessed." } },
    { judul: { id: "Berhenti memikirkan pekerjaan pada satu hari dalam seminggu",
               en: "Stop thinking about work one day a week" },
      kenapa:{ id: "Kamu membawa pulang orang-orangnya, dan tanpa batas yang disengaja itu tidak akan berhenti sendiri.",
               en: "You take people home with you, and without a deliberate limit that will not stop on its own." } },
    { judul: { id: "Pisahkan mana yang butuh didengar dan mana yang butuh diarahkan",
               en: "Separate who needs to be heard from who needs direction" },
      kenapa:{ id: "Mendengar adalah kekuatanmu, dan sebagian orang justru terjebak lebih lama karenanya.",
               en: "Listening is your strength, and some people stay stuck longer because of it." } },
    { judul: { id: "Minta pendampingan untuk dirimu sendiri",
               en: "Get accompaniment for yourself" },
      kenapa:{ id: "Kamu jadi tempat orang menaruh beban, dan tidak ada yang menanyakan ke mana bebanmu pergi.",
               en: "You become where people put their burdens, and nobody asks where yours goes." } }
  ],

  arah_karir: {
    id: ["Konselor & psikolog pendamping", "Coach kepemimpinan & pengembangan diri",
         "Perancang program pembelajaran", "Pengembang organisasi (OD)", "Pendamping komunitas"],
    en: ["Counsellor & supporting psychologist", "Leadership & development coach",
         "Learning programme designer", "Organisational development practitioner", "Community facilitator"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   BAKTI LOGIKA — The System of People
   Minat menumbuhkan orang × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Bakti|Logika": {
  en: "The System of People",

  kekuatan: [
    { id: "Menemukan sebab di balik masalah orang yang selama ini dianggap masalah pribadi.",
      en: "Finding the cause behind a people problem everyone treated as personal." },
    { id: "Merancang cara kerja yang membuat orang berkembang tanpa perlu kamu hadir.",
      en: "Designing a way of working that grows people without you being present." },
    { id: "Mengambil keputusan yang adil meski tidak menyenangkan siapa pun di ruangan.",
      en: "Making a fair decision even when it pleases no one in the room." }
  ],

  pertemuan: {
    inti: { id: "Kamu peduli pada orang, dan cara kamu menunjukkannya jarang terlihat seperti kepedulian.",
            en: "You care about people, and the way you show it rarely looks like caring." },
    paragraf: [
      // DISKRIMINATIF: kepedulian yang berbentuk sistem; sering dibaca sebagai dingin
      { id: "Minat menumbuhkan orang bertemu dengan dorongan merancang. Akibatnya kepedulianmu berbentuk aturan yang adil, jalur karir yang jelas, dan beban kerja yang masuk akal, bukan pelukan atau percakapan panjang. Orang yang mengukur kepedulian dari kehangatan sering menyimpulkan kamu tidak peduli, padahal kamu sedang mengurus hal yang akan mereka rasakan bertahun-tahun.",
        en: "An interest in growing people meets an urge to design. So your care takes the form of fair rules, clear paths, and sensible workloads, rather than hugs or long conversations. People who measure care by warmth often conclude you do not care, when you are handling what they will feel for years." },
      { id: "Kamu juga sanggup mengambil keputusan yang merugikan beberapa orang demi lebih banyak orang, dan tetap tidur nyenyak kalau hitungannya benar. Sedikit orang di bidang ini sanggup melakukan itu, dan itu sekaligus yang membuatmu paling sering disalahpahami.",
        en: "You can also make a decision that costs a few people for the sake of many, and still sleep if the arithmetic holds. Few people in this field can do that, and it is also what gets you most misread." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menentukan aturan main, bukan yang menemani satu per satu.",
            en: "You tend to occupy the position that sets the rules, not the one that accompanies people individually." },
    poin: [
      { id: "Perancang jalur karir dan penilaian yang bisa dipertahankan alasannya.",
        en: "The one who designs career paths and assessments whose reasoning can be defended." },
      { id: "Orang yang bisa menjawab kenapa banyak orang keluar, dengan data bukan dugaan.",
        en: "The one who can answer why so many people leave, with data rather than guesses." },
      { id: "Penerjemah antara kebutuhan bisnis dan keputusan yang menyangkut orang.",
        en: "The translator between business needs and decisions about people." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan mengurus orang yang seluruhnya administratif, tanpa wewenang mengubah aturannya, akan membuatmu bekerja jauh di bawah kemampuanmu. Kamu akan menjalankan aturan yang kamu sendiri tahu tidak adil, dan itu jenis kelelahan yang tidak terlihat sebagai kelelahan.",
          en: "People work that is entirely administrative, with no authority to change the rules, will keep you well below your capacity. You will enforce rules you yourself know are unfair, and that is a kind of exhaustion that does not look like exhaustion." },
        // DISKRIMINATIF: peran yang menuntut kehangatan sebagai ukuran
        { id: "Yang paling menipu adalah peran yang keberhasilannya diukur dari seberapa disukai kamu oleh orang-orangnya. Kamu bisa mencapainya, dan untuk mencapainya kamu harus berhenti mengatakan hal yang perlu dikatakan.",
          en: "The most deceptive is a role whose success is measured by how well liked you are. You can achieve it, and to achieve it you must stop saying the things that need saying." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menjelaskan hitungan tapi tidak menjelaskan kepedulian
        { id: "Kamu menjelaskan hitungan di balik keputusanmu, tapi jarang menjelaskan kepedulian yang mendasarinya, karena bagimu itu sudah jelas. Bagi orang yang terkena keputusan itu, tidak. Ongkosnya jatuh padamu: kamu dianggap dingin, dan kepercayaan yang hilang membuat keputusan berikutnya lebih sulit dijalankan meski lebih benar.",
          en: "You explain the arithmetic behind your decision but rarely the care underneath it, because to you that is obvious. To the person affected, it is not. The cost lands on you: you are read as cold, and the trust lost makes the next decision harder to carry out even when it is more right." },
        { id: "Pola kedua: kamu menilai orang dari kompetensi yang sudah terlihat, sehingga orang yang sedang berkembang tersingkir sebelum sempat berkembang. Sistem yang kamu rancang jadi efisien dan sekaligus tertutup bagi orang yang datang dari titik yang lebih rendah.",
          en: "A second pattern: you judge people on competence already visible, so those still developing are cut before they can develop. The system you design becomes efficient and, at the same time, closed to anyone starting further back." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Jelaskan kepedulian di balik keputusanmu, bukan hanya hitungannya",
               en: "Explain the care behind your decision, not only the arithmetic" },
      kenapa:{ id: "Yang bagimu sudah jelas justru bagian yang paling perlu dikatakan oleh orang yang terkena keputusannya.",
               en: "What is obvious to you is exactly what the affected person most needs said." } },
    { judul: { id: "Pilih satu orang yang belum siap, dan kembangkan dia setahun",
               en: "Pick one person who is not ready, and develop them for a year" },
      kenapa:{ id: "Naluri seleksimu tajam untuk yang sudah jadi. Membaca potensi sebelum terlihat belum kamu latih.",
               en: "Your instinct for the finished article is sharp. Reading potential before it shows is untrained." } },
    { judul: { id: "Tanyakan bagaimana rasanya hidup di dalam sistem yang kamu buat",
               en: "Ask what it feels like to live inside the system you built" },
      kenapa:{ id: "Sistem yang adil di atas kertas tetap gagal kalau menjalaninya terasa merendahkan.",
               en: "A system fair on paper still fails when living inside it feels diminishing." } },
    { judul: { id: "Temui lima orang yang terkena kebijakanmu, tanpa agenda",
               en: "Meet five people affected by your policy, with no agenda" },
      kenapa:{ id: "Datamu benar, dan tetap tidak memuat hal yang hanya muncul dalam percakapan.",
               en: "Your data is right, and still does not contain what only surfaces in conversation." } },
    { judul: { id: "Buang satu aturan yang sudah tidak diperlukan",
               en: "Remove one rule that is no longer needed" },
      kenapa:{ id: "Kamu lebih cepat menambah aturan daripada mencabutnya, dan tumpukannya jadi beban orang.",
               en: "You add rules faster than you retire them, and the pile becomes a burden on people." } },
    { judul: { id: "Sebutkan sekali apa yang membuat keputusanmu bisa saja keliru",
               en: "State once what could make your decision wrong" },
      kenapa:{ id: "Kamu sudah memikirkannya. Mengatakannya menaikkan kepercayaan, bukan menurunkannya.",
               en: "You have already thought it. Saying it raises trust rather than lowering it." } }
  ],

  arah_karir: {
    id: ["Kepala SDM / HR business partner", "Analis people analytics",
         "Konsultan pengembangan organisasi", "Pengelola manajemen talenta", "Perancang sistem pendidikan"],
    en: ["Head of people / HR business partner", "People analytics analyst",
         "Organisational development consultant", "Talent management lead", "Education system designer"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   BAKTI JAGA — The Reliable Guardian
   Minat menumbuhkan orang × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Bakti|Jaga": {
  en: "The Reliable Guardian",

  kekuatan: [
    { id: "Menepati hal kecil yang orang lain sudah lupa pernah dijanjikan kepada mereka.",
      en: "Keeping the small things others have forgotten were promised to them." },
    { id: "Memberi layanan dengan mutu yang sama, siapa pun yang datang dan sesibuk apa pun harinya.",
      en: "Giving the same quality of service whoever arrives and however busy the day." },
    { id: "Memastikan tidak ada orang yang jatuh di antara celah sistem.",
      en: "Making sure nobody falls through the gaps in the system." }
  ],

  pertemuan: {
    inti: { id: "Kepedulianmu berbentuk kehadiran yang bisa diramalkan, bukan kehangatan yang meluap.",
            en: "Your care takes the form of presence people can predict, not warmth that overflows." },
    paragraf: [
      // DISKRIMINATIF: kepastian sebagai bentuk kasih; tidak benar utk Bakti Reka/Guna/Logika
      { id: "Minat menumbuhkan orang bertemu dengan rasa tanggung jawab. Akibatnya yang kamu berikan bukan kejutan yang menyenangkan, melainkan kepastian: kamu ada di tempat yang sama, pada jam yang sama, dengan mutu yang sama. Bagi orang yang hidupnya tidak menentu, itu jenis kasih yang paling jarang mereka terima.",
        en: "An interest in growing people meets a sense of duty. So what you give is not a pleasant surprise but certainty: you are in the same place, at the same hour, with the same quality. For someone whose life is unsteady, that is the rarest kind of care they receive." },
      { id: "Kamu jarang mengucapkan hal yang menyentuh, dan orang tetap merasa dipegang. Yang mereka ingat bukan kata-katamu, melainkan bahwa kamu tidak pernah tidak datang.",
        en: "You rarely say anything moving, and people still feel held. What they remember is not your words but that you never failed to show up." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang membuat janji organisasi benar-benar sampai ke orangnya.",
            en: "You tend to occupy the position that makes an organisation's promise actually reach the person." },
    poin: [
      { id: "Orang yang memastikan tidak ada keluhan yang ditutup sebelum benar-benar selesai.",
        en: "The one who ensures no complaint is closed before it is genuinely resolved." },
      { id: "Penjaga mutu layanan justru saat semua orang sedang kewalahan.",
        en: "The one who holds service quality exactly when everyone is overwhelmed." },
      { id: "Orang yang mengenal riwayat tiap kasus, sehingga tidak ada yang harus bercerita dua kali.",
        en: "The one who knows each case's history, so nobody has to tell their story twice." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Organisasi yang mengejar efisiensi biaya di atas mutu layanan akan menempatkanmu dalam konflik nilai yang tidak pernah selesai. Kamu akan tetap memberi mutu yang sama dengan sumber daya yang terus dikurangi, sendirian, dan tidak ada yang menyadari sampai kamu habis.",
          en: "An organisation chasing cost efficiency over service quality puts you in a values conflict that never resolves. You will keep delivering the same quality on shrinking resources, alone, and nobody notices until you are spent." },
        // DISKRIMINATIF: promosi ke peran perubahan cepat
        { id: "Yang paling menipu adalah promosi ke peran yang tugasnya mengubah cara kerja dengan cepat. Terdengar seperti pengakuan, dan sesungguhnya memindahkanmu ke pekerjaan yang tiap harinya membatalkan hal yang baru kamu tegakkan.",
          en: "The most deceptive is promotion into a role whose job is changing how things work, fast. It sounds like recognition, and in fact moves you into work that each day undoes what you just set in place." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menyerap beban diam-diam sampai tidak terlihat
        { id: "Kamu menyerap pekerjaan yang bukan bagianmu supaya tidak ada yang terlantar, dan tidak memberi tahu siapa pun. Hasilnya tetap rapi, dan itu yang membuat pola ini bertahan bertahun-tahun. Ongkosnya jatuh padamu: bebanmu tidak terlihat oleh orang yang seharusnya menambah tenaga, dan kelelahanmu dianggap masalah pribadi.",
          en: "You absorb work that is not yours so nobody is left stranded, and tell no one. The result stays clean, and that is why the pattern survives for years. The cost lands on you: your load is invisible to whoever should be adding help, and your exhaustion is treated as a personal matter." },
        { id: "Pola kedua: kamu sulit mengatakan tidak pada permintaan mendadak, karena menolak terasa seperti mengabaikan. Akibatnya rencanamu selalu berantakan oleh urusan orang lain, dan hal yang sebenarnya paling penting terus tergeser.",
          en: "A second pattern: you struggle to say no to a sudden request, because refusing feels like neglect. So your plan is always broken open by other people's business, and what actually matters most keeps sliding." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Sebutkan bantuan yang kamu berikan, sekali seminggu",
               en: "Name the help you gave, once a week" },
      kenapa:{ id: "Pekerjaan yang kamu serap diam-diam tidak terlihat oleh orang yang seharusnya menambah tenaga.",
               en: "The work you absorb quietly is invisible to whoever should be adding help." } },
    { judul: { id: "Tolak satu permintaan mendadak bulan ini",
               en: "Decline one last-minute request this month" },
      kenapa:{ id: "Kesediaanmu adalah alasan orang mengandalkanmu, dan juga alasan bebanmu tidak pernah terlihat.",
               en: "Your willingness is why people rely on you, and also why your load never shows." } },
    { judul: { id: "Sampaikan keberatan saat baru enam puluh persen yakin",
               en: "Raise an objection when you are only sixty percent sure" },
      kenapa:{ id: "Kamu hampir selalu benar saat akhirnya bicara, tapi biasanya setelah keputusannya diambil.",
               en: "You are almost always right when you finally speak, but usually after the decision is made." } },
    { judul: { id: "Ajari satu orang cara kerjamu, jangan hanya menutupi kekurangannya",
               en: "Teach one person your method instead of covering their gap" },
      kenapa:{ id: "Selama kamu menambal, mereka tidak belajar dan bebanmu bertambah tiap tahun.",
               en: "As long as you patch, they do not learn and your load grows each year." } },
    { judul: { id: "Tanyakan pada dirimu apakah ini benar-benar tidak bisa ditunda",
               en: "Ask yourself whether this genuinely cannot wait" },
      kenapa:{ id: "Sebagian besar yang terasa mendesak bagimu ternyata mendesak bagi orang lain, bukan bagi keadaannya.",
               en: "Most of what feels urgent to you turns out to be urgent for someone else, not for the situation." } },
    { judul: { id: "Ambil cuti penuh tanpa membawa telepon kerja",
               en: "Take full leave without carrying the work phone" },
      kenapa:{ id: "Kalau tidak dipaksa, kamu tidak akan berhenti, dan tidak ada yang akan memintamu berhenti.",
               en: "Unless it is forced, you will not stop, and nobody will ask you to." } }
  ],

  arah_karir: {
    id: ["Perawat & koordinator layanan kesehatan", "Manajer layanan pelanggan",
         "Pekerja sosial & case manager", "Administrator sekolah atau rumah sakit", "Koordinator program sosial"],
    en: ["Nurse & healthcare coordinator", "Customer service manager",
         "Social worker & case manager", "School or hospital administrator", "Social programme coordinator"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   BAKTI GUNA — The Hands-On Helper
   Minat menumbuhkan orang × cara bergerak dari keadaan di depan mata
   ═══════════════════════════════════════════════════════════════════════ */
"Bakti|Guna": {
  en: "The Hands-On Helper",

  kekuatan: [
    { id: "Bertindak saat orang butuh bantuan, sebelum ada yang memutuskan siapa yang harus menangani.",
      en: "Acting when someone needs help, before anyone has decided who should handle it." },
    { id: "Membangun kepercayaan lewat hal yang kamu lakukan, bukan lewat hal yang kamu katakan.",
      en: "Building trust through what you do rather than what you say." },
    { id: "Tetap hadir penuh di situasi yang membuat orang lain mundur.",
      en: "Staying fully present in situations that make other people step back." }
  ],

  pertemuan: {
    inti: { id: "Kamu sudah membantu sebelum sempat memikirkan apakah itu bagianmu.",
            en: "You have already helped before you considered whether it was your job." },
    paragraf: [
      // DISKRIMINATIF: bergerak duluan; kebalikan Bakti Jaga (prosedur) & Logika (sistem)
      { id: "Minat menumbuhkan orang bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu jarang menunggu izin, jarang menunggu jadwal, dan jarang menunggu orang yang lebih berwenang. Kamu melihat orangnya butuh, dan kamu bergerak. Itu membuatmu sangat berguna di saat genting, dan sering bermasalah dengan orang yang bekerja lewat prosedur.",
        en: "An interest in growing people meets a way of moving that reads the situation directly. So you rarely wait for permission, a schedule, or someone more senior. You see the person needs it, and you move. That makes you valuable in a crisis, and often puts you at odds with people who work through procedure." },
      { id: "Karena itu kepercayaan yang kamu bangun datang dari hal yang terlihat, bukan dari kata-kata. Orang percaya padamu karena pernah melihatmu melakukan sesuatu untuk mereka, bukan karena kamu menjelaskan bahwa kamu peduli.",
        en: "So the trust you build comes from what people saw, not from words. They trust you because they once watched you do something for them, not because you explained that you cared." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi di garis depan, tempat bantuan diberikan langsung.",
            en: "You tend to occupy the front line, where help is given directly." },
    poin: [
      { id: "Orang pertama yang dilihat seseorang saat sedang paling membutuhkan.",
        en: "The first face someone sees when they most need help." },
      { id: "Penenang di situasi yang membuat orang lain panik.",
        en: "The one who steadies a situation that makes others panic." },
      { id: "Penghubung antara apa yang tertulis di program dan apa yang benar-benar dibutuhkan orang.",
        en: "The link between what the programme says and what people actually need." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan mengurus orang yang seluruhnya lewat berkas dan rapat akan terasa seperti dikurung, meskipun tujuannya tetap membantu. Yang hilang bukan pekerjaannya, melainkan melihat langsung bahwa apa yang kamu lakukan berguna.",
          en: "People work conducted entirely through files and meetings will feel like confinement, even though the purpose is still to help. What is lost is not the work but seeing directly that what you did was useful." },
        // DISKRIMINATIF: promosi ke koordinasi yang menghapus kontak langsung
        { id: "Yang paling menipu adalah promosi jadi koordinator yang mengatur orang lain membantu. Gajinya naik, dan hal yang selama ini mengisi tenagamu, yaitu hadir langsung saat seseorang membutuhkan, hilang tanpa ada yang menyadarinya, termasuk kamu, sampai agak terlambat.",
          en: "The most deceptive is promotion to coordinator, directing others to help. The pay rises, and the thing that filled you, being present when someone needed it, disappears without anyone noticing, you included, until it is somewhat late." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: membantu sampai orangnya tidak belajar berdiri sendiri
        { id: "Kamu membantu lebih cepat daripada orangnya sempat mencoba sendiri, karena melihat orang kesulitan terasa tidak tertahankan. Akibatnya sebagian orang yang kamu dampingi jadi bergantung, dan itu kebalikan dari yang kamu inginkan. Ongkosnya jatuh padamu juga: beban yang seharusnya berkurang malah bertambah tiap tahun.",
          en: "You help faster than the person can try for themselves, because watching someone struggle feels unbearable. So some of those you support become dependent, the opposite of what you wanted. The cost lands on you too: a load that should shrink instead grows each year." },
        { id: "Pola kedua: kamu jarang mencatat apa yang sudah kamu lakukan, karena mencatat terasa lambat dibanding menolong. Saat ada kesempatan naik, tidak ada yang bisa kamu tunjukkan, dan kamu kalah dari orang yang bekerja lebih sedikit tapi mendokumentasikannya lebih rapi.",
          en: "A second pattern: you rarely record what you did, because recording feels slow next to helping. When a chance to move up comes, there is nothing to show, and you lose to someone who did less but documented it better." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tunggu sepuluh detik sebelum membantu",
               en: "Wait ten seconds before helping" },
      kenapa:{ id: "Sebagian orang menyelesaikannya sendiri dalam sepuluh detik itu, dan itu yang membuat mereka tumbuh.",
               en: "Some people solve it themselves in those ten seconds, and that is what grows them." } },
    { judul: { id: "Catat apa yang kamu kerjakan, satu baris per hari",
               en: "Record what you did, one line a day" },
      kenapa:{ id: "Dampakmu nyata tapi tidak tercatat di mana pun, dan itu merugikanmu saat dinilai.",
               en: "Your impact is real but recorded nowhere, and that costs you when you are assessed." } },
    { judul: { id: "Ajari satu orang menangani hal yang biasa kamu tangani",
               en: "Teach one person to handle what you always handle" },
      kenapa:{ id: "Jadi satu-satunya yang bisa terdengar aman, tapi itu yang menahanmu di posisi yang sama.",
               en: "Being the only one who can do it sounds safe, but it holds you in the same position." } },
    { judul: { id: "Tanyakan alasan sebuah prosedur sebelum melewatinya",
               en: "Ask the reason for a procedure before stepping around it" },
      kenapa:{ id: "Instingmu soal mana yang bisa dilewati biasanya benar. Yang sesekali salah biayanya besar bagi orang yang kamu bantu.",
               en: "Your instinct for what can be skipped is usually right. The occasional miss is costly for the person you were helping." } },
    { judul: { id: "Kerjakan satu program yang hasilnya baru terlihat tiga bulan lagi",
               en: "Take on one programme whose result only shows in three months" },
      kenapa:{ id: "Sebagian perubahan pada orang memang butuh waktu, dan itu jenis kerja yang belum kamu latih.",
               en: "Some changes in people simply take time, and that is a kind of work you have not trained." } },
    { judul: { id: "Sampaikan lebih awal kalau kamu mulai kehabisan tenaga",
               en: "Say early when you are running out" },
      kenapa:{ id: "Kamu jarang terlihat lelah, jadi orang baru tahu setelah kamu berhenti sama sekali.",
               en: "You rarely look tired, so people find out only after you have stopped entirely." } }
  ],

  arah_karir: {
    id: ["Paramedis & perawat lapangan", "Pendamping komunitas & petugas lapangan",
         "Pendamping remaja & pekerja sosial muda", "Frontliner layanan pelanggan", "Fisioterapis & terapis okupasi"],
    en: ["Paramedic & field nurse", "Community outreach & field officer",
         "Youth worker & junior social worker", "Customer service frontliner", "Physiotherapist & occupational therapist"]
  }
},



/* ═══════════════════════════════════════════════════════════════════════
   KARSA REKA — The Vision-Led Entrepreneur
   Minat menggerakkan × cara bergerak dari makna
   ═══════════════════════════════════════════════════════════════════════ */
"Karsa|Reka": {
  en: "The Vision-Led Entrepreneur",

  kekuatan: [
    { id: "Membuat orang ingin ikut sebelum ada yang bisa dijanjikan kepada mereka.",
      en: "Making people want to join before there is anything you can promise them." },
    { id: "Melihat peluang di tempat yang belum dianggap peluang oleh siapa pun.",
      en: "Seeing an opening where nobody yet considers there is one." },
    { id: "Menjaga sebuah usaha tetap ingat kenapa ia dimulai, saat tekanannya sudah berat.",
      en: "Keeping a venture remembering why it began, when the pressure is heavy." }
  ],

  pertemuan: {
    inti: { id: "Kamu tidak bisa menjual sesuatu yang tidak kamu percayai, dan orang bisa merasakannya.",
            en: "You cannot sell what you do not believe in, and people can tell." },
    paragraf: [
      // DISKRIMINATIF: daya bujuk runtuh saat tidak percaya; tidak benar utk Karsa Logika/Jaga/Guna
      { id: "Dorongan menggerakkan bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya daya bujukmu bukan teknik yang bisa kamu nyalakan kapan saja. Ia bekerja luar biasa saat kamu percaya, dan hampir hilang sama sekali saat kamu tidak. Orang yang pernah melihatmu di kedua keadaan itu akan mengira kamu dua orang yang berbeda.",
        en: "A drive to move things meets a requirement that it must matter. So your persuasiveness is not a technique you can switch on. It works remarkably when you believe, and nearly vanishes when you do not. Anyone who has seen you in both states will think they met two different people." },
      { id: "Karena itu yang kamu bangun cenderung mengumpulkan orang yang datang bukan karena bayarannya. Itu kekuatan besar di awal, dan jadi kerentanan saat usahanya tumbuh dan mulai membutuhkan orang yang bekerja karena pekerjaannya, bukan karena ceritanya.",
        en: "So what you build tends to gather people who came for something other than the pay. That is a great strength early on, and becomes a vulnerability as it grows and starts needing people who work for the work, not for the story." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang memulai sesuatu, bukan yang merawatnya setelah berjalan.",
            en: "You tend to occupy the position that starts something, not the one that maintains it afterwards." },
    poin: [
      { id: "Orang yang menyalakan sesuatu dari nol, saat belum ada bukti bahwa itu akan bekerja.",
        en: "The one who lights something from nothing, before there is proof it will work." },
      { id: "Penarik orang dan sumber daya lewat cerita, bukan lewat angka.",
        en: "The one who draws people and resources through a story rather than a number." },
      { id: "Penjaga alasan sebuah usaha, saat semua orang sudah sibuk dengan caranya.",
        en: "The one who guards why a venture exists, when everyone is busy with how." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya di dunia usaha rintisan. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only in start-ups. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tahap ketika sebuah usaha sudah berjalan dan yang dibutuhkan adalah merapikan, bukan memulai, akan menghabiskanmu meskipun usahanya usahamu sendiri. Kamu akan tetap mengerjakannya, dan pelan-pelan berhenti hadir sepenuhnya tanpa ada yang tahu kapan itu mulai.",
          en: "The stage where a venture is running and what it needs is tidying rather than starting will drain you, even when the venture is your own. You will keep at it, and slowly stop being fully present without anyone knowing when that began." },
        // DISKRIMINATIF: peran yang menuntut menjual sesuatu yang tidak diyakini
        { id: "Yang paling menipu adalah posisi komersial bergengsi untuk produk yang tidak kamu yakini. Kemampuanmu tetap terlihat di atas kertas, dan kamu akan merasa sedang berbohong tiap hari tanpa bisa menjelaskan kepada siapa pun kenapa pekerjaan sebaik itu terasa salah.",
          en: "The most deceptive is a prestigious commercial post for a product you do not believe in. Your ability still shows on paper, and you will feel you are lying daily without being able to explain to anyone why such a good job feels wrong." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: memulai yang baru sebelum yang lama berdiri
        { id: "Kamu memulai hal baru sebelum yang lama benar-benar berdiri, karena tahap awal jauh lebih menghidupkan daripada tahap merawat. Ongkosnya jatuh padamu: setelah beberapa tahun kamu punya banyak hal yang pernah kamu mulai dan sedikit yang benar-benar jadi, dan itu mulai memengaruhi bagaimana kamu menilai dirimu sendiri.",
          en: "You start something new before the previous thing genuinely stands, because the beginning is far more alive than the maintaining. The cost lands on you: after a few years you have many things you once started and few that came to anything, and that begins to affect how you judge yourself." },
        { id: "Pola kedua: kamu mengajak orang ikut dengan gambaran yang jujur bagimu tapi lebih besar daripada yang sudah pasti. Kamu tidak berbohong, dan mereka tetap merasa dijanjikan sesuatu. Saat kenyataannya lebih kecil, yang rusak bukan hanya kepercayaan mereka, melainkan keyakinanmu sendiri untuk mengajak lagi.",
          en: "A second pattern: you invite people in with a picture that is honest to you but larger than what is certain. You are not lying, and they still feel promised something. When reality turns out smaller, what breaks is not only their trust but your own willingness to invite anyone again." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Selesaikan satu hal sampai berjalan tanpa kamu",
               en: "Take one thing all the way to running without you" },
      kenapa:{ id: "Tahap merawat adalah bagian yang belum pernah kamu latih, dan itu yang memisahkan usaha yang bertahan.",
               en: "Maintaining is the part you have never trained, and it is what separates ventures that last." } },
    { judul: { id: "Pisahkan mana yang sudah pasti dan mana yang baru kamu harapkan",
               en: "Separate what is certain from what you are hoping for" },
      kenapa:{ id: "Keduanya terdengar sama saat kamu bersemangat, dan orang mendengarnya sebagai janji.",
               en: "The two sound identical when you are excited, and people hear them as a promise." } },
    { judul: { id: "Cari satu partner yang kuat di operasional, bukan yang mirip denganmu",
               en: "Find one partner strong in operations, not one like you" },
      kenapa:{ id: "Tim yang seluruhnya bersemangat akan memulai banyak hal dan menuntaskan sedikit.",
               en: "A team that is all enthusiasm will start much and finish little." } },
    { judul: { id: "Tulis apa yang membuatmu berhenti percaya pada sesuatu",
               en: "Write down what makes you stop believing in something" },
      kenapa:{ id: "Kamu akan mengenali polanya lebih awal, sebelum orang lain terlanjur ikut.",
               en: "You will recognise the pattern earlier, before others have already joined." } },
    { judul: { id: "Kerjakan enam bulan pada satu hal yang membosankan",
               en: "Spend six months on one boring thing" },
      kenapa:{ id: "Kemampuan bertahan setelah kegembiraan awal habis adalah keterampilan tersendiri.",
               en: "Staying after the initial excitement runs out is a skill of its own." } },
    { judul: { id: "Sampaikan lebih awal kalau kamu mulai kehilangan keyakinan",
               en: "Say early when you are starting to lose belief" },
      kenapa:{ id: "Kamu bertahan lama sambil terlihat baik-baik saja, lalu pergi mendadak bagi orang lain.",
               en: "You hold on for a long time looking fine, then leave in a way that feels sudden to everyone else." } }
  ],

  arah_karir: {
    id: ["Pendiri usaha & wirausaha sosial", "Kepala pemasaran & pembangun merek",
         "Direktur program yayasan atau LSM", "Pembicara & penggerak gagasan", "Kepala inovasi"],
    en: ["Founder & social entrepreneur", "Head of marketing & brand builder",
         "Foundation or NGO programme director", "Speaker & movement builder", "Head of innovation"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARSA LOGIKA — The Strategic Operator
   Minat menggerakkan × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Karsa|Logika": {
  en: "The Strategic Operator",

  kekuatan: [
    { id: "Mengubah ambisi besar jadi urutan langkah yang jelas siapa mengerjakan apa.",
      en: "Turning a large ambition into a sequence where it is clear who does what." },
    { id: "Mengambil keputusan sulit dengan kepala dingin saat tekanannya tinggi.",
      en: "Making a hard call with a cool head when the pressure is high." },
    { id: "Melihat lebih awal bagian mana dari rencana yang akan patah lebih dulu.",
      en: "Seeing early which part of the plan will give way first." }
  ],

  pertemuan: {
    inti: { id: "Bagimu rencana belum selesai sebelum jelas siapa mengerjakan apa dan bagaimana diukurnya.",
            en: "To you a plan is unfinished until it is clear who does what and how it is measured." },
    paragraf: [
      // DISKRIMINATIF: dua tingkat sekaligus; tidak benar utk Karsa Reka/Jaga/Guna
      { id: "Dorongan menggerakkan bertemu dengan dorongan merancang. Akibatnya kamu bekerja di dua tingkat sekaligus: menetapkan ke mana sesuatu harus pergi, dan membangun mekanisme yang membuatnya sampai. Bagimu keduanya satu pekerjaan, dan kamu sering heran kenapa orang lain memperlakukannya sebagai dua hal terpisah.",
        en: "A drive to move things meets an urge to design. So you work on two levels at once: setting where something must go, and building the mechanism that gets it there. To you those are one job, and you are often puzzled that others treat them as two." },
      { id: "Kamu juga nyaman memutuskan sebelum semua datanya lengkap, asal risikonya sudah dihitung. Yang membuat orang mengikutimu biasanya bukan kehangatan, melainkan keyakinan bahwa kamu sudah memikirkan langkah kedua dan ketiga.",
        en: "You are also comfortable deciding before the data is complete, provided the risk has been counted. What makes people follow you is usually not warmth but the confidence that you have already thought through the second and third moves." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang bertanggung jawab atas arah dan hasil sekaligus.",
            en: "You tend to occupy the position answerable for both direction and result." },
    poin: [
      { id: "Orang yang menerjemahkan ambisi jadi rencana yang bisa benar-benar dijalankan.",
        en: "The one who turns ambition into a plan that can actually be run." },
      { id: "Orang yang dimintai pendapat lebih dulu saat keputusan besar harus diambil cepat.",
        en: "The one asked first when a large decision must be made quickly." },
      { id: "Perancang cara mengukur, sehingga tim tahu sedang menang atau kalah.",
        en: "The one who designs the measurement, so the team knows if it is winning." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Jabatan tinggi dengan wewenang yang tidak sepadan akan membuatmu frustrasi lebih cepat daripada peran kecil dengan wewenang penuh. Posisi yang tugasnya menjaga keadaan tetap seperti sekarang juga sulit kamu jalani lama: gelarnya bagus, dan tidak ada yang bisa dibangun.",
          en: "A senior title with mismatched authority will frustrate you faster than a small role with full authority. A position whose job is keeping things as they are is also hard to sustain: the title is good, and there is nothing to build." },
        // DISKRIMINATIF: peran penasihat tanpa tanggung jawab atas hasil
        { id: "Yang paling menipu adalah peran penasihat bergaji besar tanpa tanggung jawab atas hasilnya. Di atas kertas terlihat ideal, dan biasanya terasa kosong dalam hitungan bulan, karena yang kamu cari sebenarnya bukan pengaruh melainkan akibat.",
          en: "The most deceptive is a well-paid advisory role with no responsibility for outcomes. On paper it looks ideal, and it usually feels hollow within months, because what you want is not influence but consequence." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: membaca ketidaksetujuan sebagai kelambanan
        { id: "Kamu bergerak lebih cepat daripada kesiapan orang di sekitarmu. Kamu sudah sampai di kesimpulan sementara timmu masih di tengah jalan, lalu membaca ketidaksetujuan sebagai kelambanan, bukan sebagai informasi. Ongkosnya baru muncul dua atau tiga tahun kemudian, dalam bentuk tim yang berhenti membawa masalah kepadamu, dan kamu jadi orang terakhir yang tahu kalau ada yang salah.",
          en: "You move faster than the readiness of people around you. You have reached the conclusion while your team is still mid-way, then read disagreement as slowness rather than as information. The cost surfaces two or three years later, as a team that stops bringing you problems, and you become the last to know when something is wrong." },
        { id: "Pola kedua: kamu menilai orang terutama dari kompetensi yang sudah terlihat, sehingga orang yang sedang berkembang tersingkir sebelum sempat berkembang. Hasil jangka pendeknya tetap bagus, dan itu yang membuat pola ini sulit dikenali dari dalam.",
          en: "A second pattern: you judge people mainly on competence already visible, so those still developing are cut before they can develop. Short-term results stay good, which is what makes the pattern hard to see from the inside." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tunda kesimpulanmu sampai orang terakhir bicara",
               en: "Hold your conclusion until the last person has spoken" },
      kenapa:{ id: "Kesimpulanmu sering benar, dan justru itu masalahnya: tim berhenti berpikir karena tahu kamu sudah sampai duluan.",
               en: "Your conclusions are often right, and that is the problem: the team stops thinking because they know you got there first." } },
    { judul: { id: "Sampaikan alasannya, bukan hanya keputusannya",
               en: "Give the reasoning, not just the decision" },
      kenapa:{ id: "Orang menjalankan keputusanmu, tapi tidak bisa mengulanginya saat kamu tidak ada.",
               en: "People execute your decision but cannot repeat it when you are away." } },
    { judul: { id: "Pilih satu orang yang belum siap, dan kembangkan dia setahun",
               en: "Pick one person who is not ready, and develop them for a year" },
      kenapa:{ id: "Naluri seleksimu tajam untuk yang sudah jadi. Membaca potensi sebelum terlihat belum kamu latih.",
               en: "Your instinct for the finished article is sharp. Reading potential before it shows is untrained." } },
    { judul: { id: "Tanyakan apa yang saya lewatkan, sebelum menutup rapat",
               en: "Ask what am I missing before closing the meeting" },
      kenapa:{ id: "Ini satu-satunya cara mengetahui hal yang tidak berani disampaikan orang kepadamu.",
               en: "This is the only reliable way to surface what people do not dare bring you." } },
    { judul: { id: "Beri jeda satu hari untuk keputusan yang menyangkut orang",
               en: "Take a day on decisions that involve people" },
      kenapa:{ id: "Kecepatanmu adalah keunggulan pada keputusan sistem, dan kerugian pada keputusan manusia.",
               en: "Your speed is an advantage on systems decisions and a liability on human ones." } },
    { judul: { id: "Kenali tanda tenagamu habis sebelum orang lain menyebutnya",
               en: "Notice your own depletion before someone else names it" },
      kenapa:{ id: "Kamu bertahan lama di keadaan yang menguras, dan biasanya baru berhenti setelah ada yang rusak.",
               en: "You endure draining conditions for a long time, and usually stop only after something breaks." } }
  ],

  arah_karir: {
    id: ["Direktur utama & manajer umum", "Konsultan strategi",
         "Analis investasi & pengelola dana", "Kepala strategi perusahaan", "Perancang kebijakan"],
    en: ["Chief executive & general manager", "Strategy consultant",
         "Investment analyst & fund manager", "Chief strategy officer", "Policy architect"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARSA JAGA — The Institution Builder
   Minat menggerakkan × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Karsa|Jaga": {
  en: "The Institution Builder",

  kekuatan: [
    { id: "Membangun sesuatu yang tetap berdiri setelah kamu tidak lagi mengurusnya.",
      en: "Building something that still stands after you stop tending it." },
    { id: "Membuat ekspektasi begitu jelas sampai tidak ada tenaga yang terbuang untuk menebak.",
      en: "Making expectations so clear that no energy is spent guessing." },
    { id: "Menjaga arah organisasi tetap sama saat orang-orangnya berganti.",
      en: "Holding an organisation's direction steady as its people change." }
  ],

  pertemuan: {
    inti: { id: "Ukuran keberhasilanmu adalah apakah sesuatu masih berjalan setelah kamu pergi.",
            en: "Your measure of success is whether it still runs after you leave." },
    paragraf: [
      // DISKRIMINATIF: membangun untuk ditinggalkan; kebalikan Karsa Reka & Guna
      { id: "Dorongan menggerakkan bertemu dengan rasa tanggung jawab. Akibatnya kamu membangun bukan untuk dipegang, melainkan untuk diwariskan. Kamu menulis prosedurnya, melatih penggantimu, dan sengaja membuat dirimu tidak lagi diperlukan, sesuatu yang jarang dilakukan orang yang punya dorongan memimpin sekuat kamu.",
        en: "A drive to move things meets a sense of duty. So you build not to hold but to hand over. You write the procedure, train your replacement, and deliberately make yourself unnecessary, which is rare in someone with a drive to lead as strong as yours." },
      { id: "Karena itu kamu jarang terlihat sebagai pemimpin yang menyala. Yang orang lihat adalah tempat yang berjalan tertib, dan mereka sering tidak menghubungkannya denganmu sampai kamu tidak ada.",
        en: "So you rarely look like a lit-up leader. What people see is a place that runs in order, and they often do not connect it to you until you are gone." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang membuat sebuah organisasi bisa bertahan lewat pergantian orang.",
            en: "You tend to occupy the position that lets an organisation survive changes of personnel." },
    poin: [
      { id: "Perancang tata kelola yang membuat keputusan tidak bergantung pada satu orang.",
        en: "The one who designs governance so decisions do not rest on one person." },
      { id: "Penyeimbang bagi pemimpin yang visioner tapi kurang sistematis.",
        en: "The counterweight to a leader who is visionary but unsystematic." },
      { id: "Orang yang menyiapkan penggantinya jauh sebelum ada yang memintanya.",
        en: "The one who prepares a successor long before anyone asks." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tempat yang arah dan prioritasnya berganti tiap kuartal akan membuatmu bekerja jauh di bawah kemampuanmu, karena yang kamu bangun tidak pernah sempat berdiri sebelum dibongkar lagi. Kamu akan tetap membangun, dan kelelahannya datang dari melihat hal yang sama diulang, bukan dari bebannya.",
          en: "A place whose direction changes each quarter will keep you well below capacity, because what you build never stands before it is dismantled. You will keep building, and the exhaustion comes from watching the same thing repeat rather than from the load." },
        // DISKRIMINATIF: dipuji sebagai stabil lalu tidak pernah diberi mandat mengubah
        { id: "Yang paling menipu adalah organisasi yang memujimu sebagai penjaga stabilitas dan karena itu tidak pernah memberimu mandat mengubah apa pun. Pujian itu terdengar seperti pengakuan, dan sesungguhnya mengunci kamu pada peran memelihara sesuatu yang kamu sendiri tahu sudah perlu dibangun ulang.",
          en: "The most deceptive is an organisation that praises you as the guardian of stability and therefore never gives you a mandate to change anything. The praise sounds like recognition, and in fact locks you into maintaining something you yourself know needs rebuilding." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menunda perubahan sampai buktinya menumpuk
        { id: "Kamu menunda perubahan sampai buktinya benar-benar menumpuk, karena mengubah terlalu cepat terasa tidak bertanggung jawab. Kehati-hatian itu benar, dan ongkosnya jatuh padamu: saat akhirnya kamu bergerak, biayanya sudah jauh lebih besar daripada kalau dikerjakan dua tahun sebelumnya, dan sebagian orang sudah pergi.",
          en: "You delay change until the evidence has genuinely piled up, because moving too fast feels irresponsible. That caution is right, and the cost lands on you: by the time you move, it costs far more than it would have two years earlier, and some people have already left." },
        { id: "Pola kedua: kamu menyamakan tertib dengan sehat. Organisasi yang tenang dan rapi bisa saja sedang kehilangan orang-orang terbaiknya diam-diam, dan tanda-tandanya justru tidak muncul di hal-hal yang biasa kamu pantau.",
          en: "A second pattern: you equate orderly with healthy. A calm, tidy organisation can be quietly losing its best people, and the signs do not appear in the things you normally monitor." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Ubah satu hal sebelum buktinya lengkap",
               en: "Change one thing before the evidence is complete" },
      kenapa:{ id: "Kamu hampir selalu benar saat akhirnya bergerak, dan hampir selalu terlambat.",
               en: "You are almost always right when you finally move, and almost always late." } },
    { judul: { id: "Tanyakan langsung pada orang yang paling mungkin pergi",
               en: "Ask directly the person most likely to leave" },
      kenapa:{ id: "Tanda organisasi sedang kehilangan orang tidak muncul di hal yang biasa kamu pantau.",
               en: "The signs of an organisation losing people do not show in what you normally monitor." } },
    { judul: { id: "Buang satu aturan sebelum menambah yang baru",
               en: "Remove one rule before adding another" },
      kenapa:{ id: "Aturan yang menumpuk akhirnya melindungi prosesnya, bukan tujuannya.",
               en: "Accumulated rules end up protecting the process rather than the purpose." } },
    { judul: { id: "Serahkan satu keputusan penuh kepada orang lain",
               en: "Hand one decision over completely" },
      kenapa:{ id: "Kamu menyiapkan penggantimu dengan baik, dan jarang benar-benar melepaskan.",
               en: "You prepare successors well, and rarely actually let go." } },
    { judul: { id: "Sebutkan sekali apa yang kamu bangun, dan bahwa itu kamu",
               en: "Say once what you built, and that it was you" },
      kenapa:{ id: "Kerjamu tidak terlihat sampai kamu tidak ada, dan itu merugikanmu saat dinilai.",
               en: "Your work is invisible until you are gone, and that costs you when you are assessed." } },
    { judul: { id: "Kerjakan satu hal yang belum jelas bentuknya",
               en: "Take on one thing whose shape is not yet clear" },
      kenapa:{ id: "Kemampuan bergerak sebelum semuanya pasti adalah keterampilan yang belum kamu latih.",
               en: "Moving before everything is settled is a skill you have not trained." } }
  ],

  arah_karir: {
    id: ["Direktur operasional", "Kepala cabang & manajer wilayah",
         "Administrator lembaga pemerintahan", "Pemimpin lembaga pendidikan", "Direktur program lembaga sosial"],
    en: ["Operations director", "Branch & regional manager",
         "Government institution administrator", "Education institution leader", "Social institution programme director"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARSA GUNA — The Relationship Driver
   Minat menggerakkan × cara bergerak dari keadaan di depan mata
   ═══════════════════════════════════════════════════════════════════════ */
"Karsa|Guna": {
  en: "The Relationship Driver",

  kekuatan: [
    { id: "Membaca apa yang sebenarnya diinginkan lawan bicara, dari hal yang tidak ia katakan.",
      en: "Reading what the other side actually wants, from what they did not say." },
    { id: "Membuka pintu yang tertutup bagi orang lain, lewat orang yang kamu kenal.",
      en: "Opening doors closed to others, through people you know." },
    { id: "Mengubah arah pembicaraan di tempat saat membaca bahwa pendekatannya tidak jalan.",
      en: "Changing the approach mid-conversation when you read that it is not landing." }
  ],

  pertemuan: {
    inti: { id: "Kesepakatan terbaikmu sudah selesai sebelum pertemuan resminya dimulai.",
            en: "Your best deals were settled before the formal meeting began." },
    paragraf: [
      // DISKRIMINATIF: jaringan sebagai hasil, bukan alat; kebalikan Karsa Logika & Jaga
      { id: "Dorongan menggerakkan bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya alat kerjamu bukan presentasi atau angka, melainkan orang yang sudah percaya padamu sebelum ada yang perlu dibicarakan. Jaringanmu bukan daftar kontak; ia adalah kumpulan orang yang pernah kamu bantu tanpa berpikir akan dapat apa.",
        en: "A drive to move things meets a way of moving that reads the situation directly. So your instrument is not a deck or a number but people who trusted you before there was anything to discuss. Your network is not a contact list; it is people you once helped without calculating what you would get." },
      { id: "Karena itu kemampuanmu sulit dipindahkan ke orang lain dan sulit dibuktikan di atas kertas. Orang yang menilaimu dari proses sering menyimpulkan kamu beruntung, sampai mereka mencoba menggantikanmu.",
        en: "So your ability is hard to transfer and hard to evidence on paper. People who judge you by process often conclude you are lucky, until they try to replace you." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang membuka peluang, bukan yang mengelolanya setelah terbuka.",
            en: "You tend to occupy the position that opens opportunities, not the one that manages them afterwards." },
    poin: [
      { id: "Orang yang bisa mempertemukan dua pihak yang seharusnya bertemu sejak dulu.",
        en: "The one who can bring together two parties who should have met long ago." },
      { id: "Pembuka jalan saat sebuah kesepakatan macet karena alasan yang tidak tertulis.",
        en: "The one who unsticks a deal blocked for reasons nobody wrote down." },
      { id: "Penjaga hubungan dengan pihak yang paling menentukan, bertahun-tahun.",
        en: "The one who holds the relationships that matter most, across years." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Pekerjaan di belakang meja yang mengisolasi kamu dari orang akan menghilangkan alat kerjamu, bukan hanya kesenanganmu. Kamu akan tetap menyelesaikan tugasnya, dan hasilnya biasa saja, karena hal yang membuatmu luar biasa tidak terpakai sama sekali.",
          en: "Desk work that isolates you from people removes your instrument, not only your enjoyment. You will still finish the tasks, and the results will be ordinary, because what makes you exceptional goes entirely unused." },
        // DISKRIMINATIF: promosi ke pengelolaan yang menjauhkan dari hubungan langsung
        { id: "Yang paling menipu adalah promosi jadi pengelola tim penjualan, yang tugasnya memantau angka orang lain. Terdengar seperti kemajuan, dan sesungguhnya memindahkanmu dari hubungan langsung ke laporan, dan jaringan yang kamu bangun bertahun-tahun mulai renggang tanpa kamu sadari.",
          en: "The most deceptive is promotion to managing a sales team, monitoring other people's numbers. It sounds like progress, and in fact moves you from direct relationships to reports, and the network you built over years quietly loosens." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: semuanya bergantung pada kehadiranmu sendiri
        { id: "Kamu menyelesaikan sesuatu lewat kehadiranmu sendiri, dan karena itu berhasil, kamu tidak pernah membangun cara yang bisa dijalankan tanpamu. Ongkosnya jatuh padamu: kamu tidak bisa cuti, tidak bisa sakit, dan tidak bisa naik ke peran yang lebih besar karena tidak ada yang bisa menggantikan.",
          en: "You get things done through your own presence, and because it works you never build a way that runs without you. The cost lands on you: you cannot take leave, cannot be ill, and cannot move to a larger role because nobody can replace you." },
        { id: "Pola kedua: kamu jarang mencatat apa yang sudah disepakati, karena kesepakatan bagimu terjadi di antara orang, bukan di atas kertas. Saat ada perbedaan ingatan enam bulan kemudian, tidak ada yang bisa kamu tunjuk, dan yang rugi biasanya kamu.",
          en: "A second pattern: you rarely record what was agreed, because to you agreement happens between people, not on paper. When memories differ six months later, there is nothing to point at, and the loss is usually yours." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Catat apa yang disepakati, di hari yang sama",
               en: "Record what was agreed, the same day" },
      kenapa:{ id: "Kesepakatan yang hidup hanya di ingatan dua orang akan berbeda dalam enam bulan.",
               en: "An agreement living only in two memories will differ within six months." } },
    { judul: { id: "Ajak satu orang ikut ke pertemuan pentingmu",
               en: "Bring one person along to your important meetings" },
      kenapa:{ id: "Selama semuanya lewat kamu, kamu tidak bisa cuti dan tidak bisa naik.",
               en: "As long as everything runs through you, you cannot take leave and cannot move up." } },
    { judul: { id: "Jelaskan sekali bagaimana kamu tahu kapan harus berhenti mendesak",
               en: "Explain once how you know when to stop pushing" },
      kenapa:{ id: "Instingmu nyata, tapi selama tidak bisa dijelaskan, ia dianggap keberuntungan.",
               en: "Your instinct is real, but while it cannot be explained it is treated as luck." } },
    { judul: { id: "Kerjakan satu kesepakatan yang hasilnya baru terlihat setahun lagi",
               en: "Take on one deal whose result only shows in a year" },
      kenapa:{ id: "Kemampuan bertahan pada umpan balik lambat adalah pintu ke kesepakatan yang lebih besar.",
               en: "Staying with slow feedback is the door to larger deals." } },
    { judul: { id: "Tanyakan pada dirimu apa yang kamu janjikan tanpa sadar",
               en: "Ask yourself what you promised without meaning to" },
      kenapa:{ id: "Kehangatanmu sering terdengar sebagai kesanggupan, dan itu menumpuk tanpa kamu hitung.",
               en: "Your warmth often sounds like a commitment, and those accumulate uncounted." } },
    { judul: { id: "Sampaikan lebih awal kalau kamu mulai jenuh",
               en: "Say early when you are starting to tire of it" },
      kenapa:{ id: "Kamu jarang terlihat tertekan, jadi orang baru tahu setelah kamu memutuskan pergi.",
               en: "You rarely look under strain, so people find out only after you have decided to go." } }
  ],

  arah_karir: {
    id: ["Direktur penjualan & pengembangan usaha", "Manajer kemitraan",
         "Agen properti & broker", "Manajer talenta & agen", "Hubungan pemerintah & pemangku kepentingan"],
    en: ["Sales & business development director", "Partnership manager",
         "Real estate agent & broker", "Talent manager & agent", "Government & stakeholder relations"]
  }
},



"Tata|Guna": {
  en: "The Pragmatic Executor",

  kekuatan: [
    { id: "Tetap rapi di keadaan yang jauh dari ideal.",
      en: "Staying orderly in conditions far from ideal." },
    { id: "Menemukan jalan tercepat menembus proses yang berbelit.",
      en: "Finding the fastest route through a tangled process." },
    { id: "Jadi orang pertama yang bisa diandalkan saat operasional bermasalah.",
      en: "Being the first person to rely on when operations go wrong." }
  ],

  pertemuan: {
    inti: { id: "Kamu menghargai keteraturan, tapi memperlakukannya sebagai alat, bukan sebagai tujuan.",
            en: "You value order, but treat it as a tool rather than as the point." },
    paragraf: [
      // Yang muncul dari PERTEMUAN: minat menata + cara bergerak taktis
      { id: "Minat pada hal yang tertata bertemu dengan cara bergerak yang membaca keadaan di depan mata. Hasilnya kombinasi yang jarang: kamu tahu aturannya, tahu mana yang tidak boleh dilanggar, dan tahu mana yang bisa dilewati hari ini supaya urusannya selesai.",
        en: "An interest in things being in order meets a way of moving that reads the situation in front of you. The result is an uncommon combination: you know the rules, know which cannot be broken, and know which can be stepped around today so the thing gets done." },
      { id: "Orang lain yang menyukai keteraturan biasanya butuh keadaan yang tenang untuk bekerja rapi. Kamu tetap rapi di keadaan yang tidak ideal, dan itu justru terlihat paling jelas saat rencananya berantakan.",
        en: "Others who like order usually need calm conditions to work cleanly. You stay clean in conditions that are not ideal, and that shows most clearly when the plan falls apart." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang membuat roda tetap berputar saat keadaannya tidak sesuai rencana.",
            en: "You tend to occupy the position that keeps things turning when conditions do not match the plan." },
    poin: [
      { id: "Orang pertama yang dihubungi saat ada yang tidak beres di operasional.",
        en: "The first person called when something goes wrong operationally." },
      { id: "Penyambung antara yang merencanakan dan yang mengerjakan di lapangan.",
        en: "The link between those who plan and those doing the work on the ground." },
      { id: "Orang yang menemukan jalan tercepat menyelesaikan proses yang berbelit.",
        en: "The one who finds the shortest route through a tangled process." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat bagian Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        // DISKRIMINATIF: prosedur kaku tanpa ruang penilaian melumpuhkan justru karena kamu bisa menjalankannya
        { id: "Pekerjaan administratif yang seluruh langkahnya sudah dikunci dan tidak ada ruang penilaian sendiri akan membuatmu bekerja jauh di bawah kemampuanmu. Kamu sanggup menjalankannya, dan itu justru masalahnya: tidak ada yang akan menyadari bahwa kemampuanmu tidak terpakai.",
          en: "Administrative work whose every step is locked, with no room for your own judgement, will keep you well below your capacity. You are capable of doing it, and that is the problem: nobody will notice your ability is going unused." },
        { id: "Yang paling menipu adalah promosi ke peran perencanaan jangka panjang. Kelihatannya kenaikan, tapi ia memindahkanmu ke pekerjaan yang hasilnya baru terasa berbulan-bulan kemudian, dan itu jenis pekerjaan yang paling sulit menahan perhatianmu.",
          en: "The most deceptive is promotion into long-range planning. It looks like a step up, but it moves you into work whose results surface only months later, and that is the kind hardest for you to stay with." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menyelesaikan sendiri lebih cepat daripada memperbaiki sistemnya
        { id: "Kamu menyelesaikan masalah lebih cepat daripada memperbaiki penyebabnya, karena menyelesaikan terasa lebih memuaskan dan hasilnya terlihat hari itu juga. Ongkosnya menumpuk pada dirimu sendiri: masalah yang sama datang lagi, dan lama-lama kamu jadi satu-satunya orang yang bisa menanganinya.",
          en: "You fix the problem faster than you fix its cause, because fixing feels more satisfying and the result shows the same day. The cost accumulates on you: the same problem returns, and eventually you are the only person who can handle it." },
        { id: "Pola kedua: kamu jarang mencatat apa yang sudah kamu kerjakan, karena mencatat terasa lambat dibanding mengerjakan. Akibatnya keahlianmu hanya terasa, tidak terbukti, dan saat ada kesempatan naik, tidak ada yang bisa kamu tunjukkan selain kesaksian orang.",
          en: "A second pattern: you rarely record what you have done, because recording feels slow next to doing. So your skill is felt rather than evidenced, and when an opening comes there is nothing to show for it but other people's word." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Perbaiki penyebabnya satu kali sebulan, bukan gejalanya",
               en: "Fix the cause once a month, not the symptom" },
      kenapa:{ id: "Masalah yang kamu selesaikan hari ini akan kembali. Yang penyebabnya kamu perbaiki tidak.",
               en: "The problem you solve today will come back. The one whose cause you fix will not." } },

    { judul: { id: "Catat apa yang kamu kerjakan, satu baris per hari",
               en: "Record what you did, one line a day" },
      kenapa:{ id: "Keahlianmu sekarang hanya terasa, belum terbukti. Satu baris sehari sudah cukup mengubah itu dalam setahun.",
               en: "Your skill is currently felt, not evidenced. One line a day is enough to change that within a year." } },

    { judul: { id: "Ajari satu orang menangani hal yang biasa kamu tangani",
               en: "Teach one person to handle what you always handle" },
      kenapa:{ id: "Jadi satu-satunya orang yang bisa terdengar aman, tapi itu yang menahanmu di tempat.",
               en: "Being the only one who can do it sounds safe, but it is what keeps you where you are." } },

    { judul: { id: "Kerjakan satu hal yang hasilnya baru terlihat tiga bulan lagi",
               en: "Take on one thing whose result only shows in three months" },
      kenapa:{ id: "Kemampuan bertahan pada pekerjaan berumpan-balik lambat adalah pintu ke peran yang lebih besar.",
               en: "Being able to stay with slow-feedback work is the door to larger roles." } },

    { judul: { id: "Tanyakan alasan sebuah prosedur sebelum melewatinya",
               en: "Ask the reason for a procedure before stepping around it" },
      kenapa:{ id: "Instingmu soal mana yang bisa dilewati biasanya benar. Yang sesekali salah biayanya besar.",
               en: "Your instinct for what can be skipped is usually right. The occasional miss is expensive." } },

    { judul: { id: "Sampaikan lebih awal kalau kamu mulai jenuh",
               en: "Say early when you are starting to tire of it" },
      kenapa:{ id: "Kamu jarang terlihat tertekan, jadi orang baru tahu setelah kamu sudah memutuskan pergi.",
               en: "You rarely look under strain, so people find out only after you have decided to go." } }
  ],

  arah_karir: {
    id: ["Koordinator proyek / PMO", "Manajer operasional", "Koordinator logistik & rantai pasok",
         "Asisten eksekutif", "Analis proses bisnis"],
    en: ["Project coordinator / PMO", "Operations manager", "Logistics & supply chain coordinator",
         "Executive assistant", "Business process analyst"]
  }
},

/* ═══════════════════════════════════════════════════════════════════════
   TATA REKA — The Purpose-Driven Organizer
   Minat menata × cara bergerak dari makna
   ═══════════════════════════════════════════════════════════════════════ */
"Tata|Reka": {
  en: "The Purpose-Driven Organizer",

  kekuatan: [
    { id: "Membuat nilai yang selalu dibicarakan benar-benar terlihat di prosedur sehari-hari.",
      en: "Making the values everyone talks about actually visible in daily procedure." },
    { id: "Menata sesuatu yang berantakan tanpa mematikan hal yang membuatnya hidup.",
      en: "Ordering something chaotic without killing what made it alive." },
    { id: "Menerjemahkan gagasan besar seseorang jadi rencana yang bisa dijalankan orang lain.",
      en: "Turning someone's large idea into a plan other people can run." }
  ],

  pertemuan: {
    inti: { id: "Kamu menata bukan karena suka rapi, melainkan supaya yang penting tidak pernah terlewat.",
            en: "You bring order not because you like tidiness, but so what matters never gets missed." },
    paragraf: [
      // DISKRIMINATIF: sistem sebagai alat menjaga nilai; tidak benar utk Tata Jaga/Logika/Guna
      { id: "Minat menata bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya kamu tidak bisa membangun sistem yang tujuannya hanya mengendalikan orang. Kamu akan menyeretnya kembali ke pertanyaan untuk siapa ini, dan itu membuatmu terlihat lambat oleh orang yang cuma ingin aturannya cepat jadi.",
        en: "An interest in ordering meets a requirement that it must matter. So you cannot build a system whose only purpose is to control people. You will drag it back to the question of who this is for, and that makes you look slow to anyone who just wants the rule written." },
      { id: "Karena itu sistem yang kamu buat cenderung lebih dipakai orang daripada sistem yang lebih efisien tapi terasa merendahkan. Kamu memikirkan bagaimana rasanya menjalani aturanmu, dan sedikit perancang sistem yang melakukan itu.",
        en: "So the systems you build tend to get used more than more efficient ones that feel diminishing. You think about what it is like to live under your rules, and few system designers do." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang menyambungkan visi pimpinan dengan cara kerja harian.",
            en: "You tend to occupy the position joining a leader's vision to daily practice." },
    poin: [
      { id: "Orang yang membuat organisasi penuh semangat bisa benar-benar berjalan.",
        en: "The one who makes a passionate organisation actually function." },
      { id: "Penjaga agar nilai yang diumumkan di rapat besar tidak hilang di prosedur.",
        en: "The one who keeps the values announced at a town hall from vanishing in procedure." },
      { id: "Perancang dokumentasi yang benar-benar dibaca orang, bukan sekadar diarsipkan.",
        en: "The one who builds documentation people actually read, not merely file." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun, tidak hanya lembaga sosial. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry, not only in social institutions. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Birokrasi yang aturannya ada tanpa tujuan yang bisa dijelaskan akan menghabiskanmu, bukan karena banyaknya melainkan karena kamu tidak bisa berhenti bertanya untuk apa. Kamu akan tetap menjalankannya dengan rapi, dan itu jenis kelelahan yang tidak terlihat sebagai kelelahan.",
          en: "A bureaucracy whose rules exist without an explainable purpose will drain you, not from volume but because you cannot stop asking what for. You will still run it cleanly, and that is a kind of exhaustion that does not look like exhaustion." },
        // DISKRIMINATIF: peran yang membangun sistem untuk mengawasi orang
        { id: "Yang paling menipu adalah peran merancang sistem pengawasan yang dibungkus sebagai peningkatan mutu. Pekerjaannya menarik dan keahlianmu terpakai penuh, dan kamu akan menyadari terlambat bahwa yang kamu bangun membuat orang lebih takut, bukan lebih baik.",
          en: "The most deceptive is designing a monitoring system framed as quality improvement. The work is interesting and your skill is fully used, and you will realise late that what you built made people more afraid rather than better." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menolak sistem yang berguna karena tidak sempurna nilainya
        { id: "Kamu menahan sistem yang sebenarnya sudah berguna karena belum sepenuhnya sesuai dengan nilai yang kamu pegang. Selama kamu menyempurnakannya, orang tetap bekerja tanpa panduan apa pun. Ongkosnya jatuh padamu: kamu dianggap terlalu idealis, dan usulanmu berikutnya didengar dengan lebih sedikit kesabaran.",
          en: "You hold back a system that is already useful because it does not yet fully match the values you hold. While you perfect it, people keep working with no guidance at all. The cost lands on you: you are seen as too idealistic, and your next proposal is heard with less patience." },
        { id: "Pola kedua: kamu menyerap pekerjaan menata yang bukan bagianmu, karena melihat sesuatu berantakan terasa tidak tertahankan. Kapasitasmu habis di hal yang tidak dinilai, dan pekerjaan yang seharusnya jadi kekuatanmu justru tergeser.",
          en: "A second pattern: you absorb organising work that is not yours, because watching disorder feels unbearable. Your capacity goes to what is not assessed, and the work that should be your strength gets squeezed out." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Luncurkan sistem yang baru delapan puluh persen jadi",
               en: "Launch the system at eighty percent" },
      kenapa:{ id: "Selama kamu menyempurnakan, orang bekerja tanpa panduan apa pun, dan itu lebih buruk.",
               en: "While you perfect it, people work with no guidance at all, and that is worse." } },
    { judul: { id: "Tanyakan bagaimana rasanya menjalani aturan yang kamu buat",
               en: "Ask what it feels like to live under the rules you made" },
      kenapa:{ id: "Ini kekuatanmu, dan justru sering kamu lewatkan pada sistem yang kamu buat sendiri.",
               en: "This is your strength, and you often skip it on the systems you build yourself." } },
    { judul: { id: "Tolak satu pekerjaan menata yang bukan bagianmu",
               en: "Decline one organising task that is not yours" },
      kenapa:{ id: "Kapasitasmu habis di hal yang tidak dinilai, dan itu tidak terlihat oleh siapa pun.",
               en: "Your capacity goes to what is not assessed, and nobody sees it." } },
    { judul: { id: "Pisahkan mana yang soal nilai dan mana yang cuma soal selera",
               en: "Separate what is about values from what is about taste" },
      kenapa:{ id: "Tidak semua yang terasa salah bagimu memang salah, dan tertukarnya keduanya mahal.",
               en: "Not everything that feels wrong to you is wrong, and confusing the two is expensive." } },
    { judul: { id: "Buang satu prosedur sebelum menambah yang baru",
               en: "Remove one procedure before adding another" },
      kenapa:{ id: "Kamu menambah lebih cepat daripada mencabut, dan tumpukannya jadi beban orang.",
               en: "You add faster than you retire, and the pile becomes a burden on people." } },
    { judul: { id: "Catat dampak sistem yang kamu buat, bukan hanya sistemnya",
               en: "Record the impact of what you built, not only what you built" },
      kenapa:{ id: "Kerjamu terlihat sebagai dokumen, padahal yang berubah adalah cara orang bekerja.",
               en: "Your work looks like a document, when what changed is how people work." } }
  ],

  arah_karir: {
    id: ["Kepala staf & kepala operasional lembaga", "Manajer program lembaga sosial",
         "Pengelola pengetahuan & dokumentasi", "Manajer komunikasi internal", "Perancang proses organisasi bermisi"],
    en: ["Chief of staff & institutional head of operations", "Social institution programme manager",
         "Knowledge & documentation manager", "Internal communications manager", "Process designer for mission-led organisations"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   TATA LOGIKA — The Systems Innovator
   Minat menata × cara bergerak dari rancangan
   ═══════════════════════════════════════════════════════════════════════ */
"Tata|Logika": {
  en: "The Systems Innovator",

  kekuatan: [
    { id: "Menemukan di mana tenaga dan biaya bocor, di tempat yang sudah lama dianggap wajar.",
      en: "Finding where effort and money leak, in places long considered normal." },
    { id: "Merancang ulang proses yang berbelit jadi lebih sederhana tanpa kehilangan pengamannya.",
      en: "Redesigning a tangled process into something simpler without losing its safeguards." },
    { id: "Menjelaskan kenapa sesuatu harus diubah dengan alasan yang sulit dibantah.",
      en: "Explaining why something must change with reasoning that is hard to argue with." }
  ],

  pertemuan: {
    inti: { id: "Melihat sistem yang tidak masuk akal dan membiarkannya terasa hampir mustahil bagimu.",
            en: "Seeing a system that makes no sense and leaving it alone feels nearly impossible to you." },
    paragraf: [
      // DISKRIMINATIF: menata dengan cara membongkar; kebalikan Tata Jaga
      { id: "Minat menata bertemu dengan dorongan merancang. Akibatnya caramu menata bukan menjaga yang ada supaya tetap rapi, melainkan membongkarnya dan menyusunnya ulang supaya lebih masuk akal. Ini membuatmu berbeda dari kebanyakan orang yang menyukai keteraturan, dan sering membuatmu berbenturan dengan mereka.",
        en: "An interest in ordering meets an urge to design. So your way of ordering is not keeping what exists tidy but taking it apart and rebuilding it to make more sense. This makes you different from most people who like order, and often puts you at odds with them." },
      { id: "Kamu juga terganggu oleh ketidakefisienan yang bukan urusanmu, dan sering memperbaikinya tanpa diminta. Itu sumber sebagian besar nilai yang kamu berikan, dan sekaligus sumber sebagian besar gesekanmu.",
        en: "You are also bothered by inefficiency that is none of your business, and often fix it unasked. That is the source of most of the value you add, and of most of your friction." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang dipanggil ketika cara lama sudah tidak bekerja.",
            en: "You tend to occupy the position called in when the old way has stopped working." },
    poin: [
      { id: "Orang yang bisa masuk ke tempat yang sudah selalu begini dan melihat di mana bocornya.",
        en: "The one who can enter a place where it has always been this way and see where it leaks." },
      { id: "Perancang ulang proses yang benar-benar dipakai, bukan berhenti di rekomendasi.",
        en: "The one who redesigns a process into actual use, not stopping at recommendation." },
      { id: "Penerjemah antara alasan teknis sebuah perubahan dan orang yang harus menjalaninya.",
        en: "The translator between the technical reason for a change and the people who must live it." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Menjaga sistem yang sudah kamu tahu rusak, tanpa wewenang memperbaikinya, adalah keadaan yang paling cepat menghabiskanmu. Kamu akan tetap menjalankannya dengan benar, sambil melihat setiap hari hal yang bisa diperbaiki dalam seminggu.",
          en: "Maintaining a system you already know is broken, with no authority to fix it, is what drains you fastest. You will keep running it correctly, while watching daily something that could be fixed in a week." },
        // DISKRIMINATIF: peran menganalisis tanpa wewenang mengubah
        { id: "Yang paling menipu adalah peran yang boleh menganalisis tapi tidak boleh mengubah. Kamu akan menghasilkan rekomendasi yang bagus, melihatnya diabaikan, dan berhenti peduli lebih cepat daripada yang kamu kira. Yang kamu cari bukan didengar, melainkan melihatnya berjalan.",
          en: "The most deceptive is a role allowed to analyse but not to change. You will produce good recommendations, watch them ignored, and stop caring faster than you expect. What you want is not to be heard but to see it run." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: mengubah sistem tanpa membawa orangnya
        { id: "Kamu merancang perubahan yang benar secara logika lalu menganggap orang akan mengikutinya karena masuk akal. Sebagian besar penolakan yang kamu temui bukan soal logikanya, melainkan soal orang yang merasa cara kerjanya selama ini dinyatakan salah. Ongkosnya jatuh padamu: rancangan yang benar mati di penerapan, dan kamu menyimpulkan organisasinya yang bermasalah.",
          en: "You design a change that is logically right, then assume people will follow because it makes sense. Most of the resistance you meet is not about the logic but about people hearing that how they worked was wrong. The cost lands on you: a correct design dies in implementation, and you conclude the organisation is the problem." },
        { id: "Pola kedua: kamu memperbaiki hal yang tidak diminta karena melihat celahnya, lalu sistem yang lebih baik itu jadi sistem yang hanya kamu pahami. Kamu terikat pada sesuatu yang sudah selesai, dan sulit pindah tanpa meninggalkan kekacauan.",
          en: "A second pattern: you fix what nobody asked because you saw the gap, and the better system becomes one only you understand. You are tied to something already finished, and cannot move on without leaving a mess." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Tanyakan dulu kenapa aturannya dibuat begitu",
               en: "Ask first why the rule was made that way" },
      kenapa:{ id: "Sebagian yang terlihat tidak masuk akal ternyata menutup masalah yang tidak kamu lihat.",
               en: "Some of what looks senseless turns out to cover a problem you cannot see." } },
    { judul: { id: "Ajak satu orang yang akan menjalaninya ikut merancang",
               en: "Bring one person who will live with it into the design" },
      kenapa:{ id: "Rancangan yang benar tetap mati di penerapan kalau orangnya tidak dibawa serta.",
               en: "A correct design still dies in implementation when the people were not brought along." } },
    { judul: { id: "Tulis dokumentasi sebelum pindah ke masalah berikutnya",
               en: "Write the documentation before moving to the next problem" },
      kenapa:{ id: "Sistem yang hanya kamu pahami mengikatmu di tempat, bukan menaikkanmu.",
               en: "A system only you understand ties you down rather than lifting you." } },
    { judul: { id: "Biarkan satu hal yang tidak optimal tetap berjalan",
               en: "Let one suboptimal thing keep running" },
      kenapa:{ id: "Sebagian celah memang nyata, dan memperbaikinya lebih mahal daripada membiarkannya.",
               en: "Some gaps are real, and fixing them costs more than leaving them." } },
    { judul: { id: "Sampaikan perubahan sebagai penambahan, bukan koreksi",
               en: "Frame a change as an addition, not a correction" },
      kenapa:{ id: "Penolakan yang kamu temui hampir selalu soal orang merasa dinyatakan salah.",
               en: "The resistance you meet is almost always about people hearing they were wrong." } },
    { judul: { id: "Tuntaskan satu perbaikan sampai berjalan tanpa kamu",
               en: "Take one improvement all the way to running without you" },
      kenapa:{ id: "Minatmu habis di titik masalahnya terpecahkan, dan di situlah nilainya belum dimulai.",
               en: "Your interest ends where the problem is solved, and that is where its value has not begun." } }
  ],

  arah_karir: {
    id: ["Konsultan proses & transformasi", "Kepala transformasi digital",
         "Manajer proses bisnis", "Direktur keuangan pada tahap pertumbuhan", "Perancang sistem operasi perusahaan"],
    en: ["Process & transformation consultant", "Head of digital transformation",
         "Business process manager", "Growth-stage finance director", "Enterprise operating system designer"]
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   TATA JAGA — The Reliable Foundation
   Minat menata × cara bergerak dari tanggung jawab
   ═══════════════════════════════════════════════════════════════════════ */
"Tata|Jaga": {
  en: "The Reliable Foundation",

  kekuatan: [
    { id: "Menghasilkan angka dan dokumen yang bisa dipakai orang lain tanpa perlu dicek ulang.",
      en: "Producing figures and documents others can use without rechecking." },
    { id: "Menemukan satu kesalahan kecil di antara ribuan baris yang tampak benar.",
      en: "Finding the one small error among thousands of lines that look correct." },
    { id: "Menjaga sesuatu berjalan sama setiap hari, tanpa perlu diingatkan.",
      en: "Keeping something running the same every day, without needing reminders." }
  ],

  pertemuan: {
    inti: { id: "Kamu membangun kepastian, dan keputusan orang lain berdiri di atasnya.",
            en: "You build certainty, and other people's decisions stand on it." },
    paragraf: [
      // DISKRIMINATIF: ketelitian sebagai tanggung jawab, bukan kehati-hatian
      { id: "Minat menata bertemu dengan rasa tanggung jawab. Akibatnya ketelitian bagimu bukan sifat hati-hati melainkan bentuk tanggung jawab: kamu tahu ada orang yang akan mengambil keputusan berdasarkan angka yang kamu rapikan, dan mereka tidak akan memeriksanya lagi. Itu sebabnya kamu memeriksa ulang sesuatu yang sudah benar.",
        en: "An interest in ordering meets a sense of duty. So precision to you is not caution but responsibility: you know someone will decide based on the figures you tidied, and they will not check again. That is why you recheck what is already correct." },
      { id: "Kamu juga membangun cara kerja yang bisa diikuti orang lain, bukan hanya olehmu. Hasilnya, tempat yang kamu urus tetap berjalan sama saat kamu cuti, dan sedikit orang yang berhasil membuat itu terjadi.",
        en: "You also build a way of working others can follow, not only you. So the place you look after runs the same when you are on leave, and few people manage to make that happen." }
    ]
  },

  peran_khas: {
    inti: { id: "Kamu cenderung menempati posisi yang jadi titik kepercayaan organisasi untuk hal yang tidak boleh salah.",
            en: "You tend to occupy the position an organisation trusts for what must not go wrong." },
    poin: [
      { id: "Orang yang angkanya dipakai orang lain tanpa dipertanyakan.",
        en: "The one whose figures others use without questioning." },
      { id: "Penjaga agar organisasi tidak tergelincir ke kesalahan prosedural atau regulasi.",
        en: "The one who keeps an organisation from slipping into procedural or regulatory error." },
      { id: "Perancang dokumentasi yang membuat pekerjaan bisa dilanjutkan siapa pun.",
        en: "The one whose documentation lets anyone continue the work." }
    ],
    tutup: { id: "Bentuk peran ini ada di industri mana pun. Lihat Matriks Industri untuk contoh penerapannya.",
             en: "This shape of role exists in any industry. See the Industry Matrix for how it applies." }
  },

  titik_rawan: {
    peran: {
      judul: { id: "Peran yang terlihat cocok tapi tidak", en: "Roles that look right but are not" },
      paragraf: [
        { id: "Tempat yang prioritasnya berganti tiap minggu akan membuatmu bekerja jauh di bawah kemampuanmu, karena ketelitianmu butuh sasaran yang diam cukup lama untuk dituntaskan. Kamu akan tetap berusaha merapikan sebisamu, dan tidak pernah sampai ke titik selesai.",
          en: "A place whose priorities change weekly will keep you well below capacity, because your precision needs a target that stays still long enough to finish. You will keep tidying what you can, and never reach done." },
        // DISKRIMINATIF: promosi ke peran menafsirkan yang belum jelas
        { id: "Yang paling menipu adalah promosi ke peran strategis yang tugasnya menafsirkan hal yang belum jelas. Terdengar seperti kemajuan, dan sesungguhnya memindahkanmu dari hal yang paling kamu kuasai ke hal yang paling membuatmu tidak tenang. Banyak orang dengan profil ini menerimanya, lalu bertahun-tahun merasa ada yang tidak pas tanpa bisa menyebut apa.",
          en: "The most deceptive is promotion into a strategic role whose work is interpreting what is not yet clear. It sounds like progress, and in fact moves you from what you are best at to what most unsettles you. Many with this profile accept it, then spend years feeling something is off without being able to name it." }
      ]
    },
    pola: {
      judul: { id: "Kebiasaan yang menghambatmu", en: "The habit that holds you back" },
      paragraf: [
        // DISKRIMINATIF: menahan keberatan sampai buktinya lengkap
        { id: "Kamu menahan keberatan sampai punya bukti yang lengkap. Kamu hampir selalu benar saat akhirnya bicara, dan hampir selalu setelah keputusannya diambil. Setelah beberapa kali begitu, kamu berhenti bicara sama sekali, dan organisasi kehilangan peringatan paling awal yang sebenarnya sudah ada di kepalamu berbulan-bulan.",
          en: "You hold an objection until your evidence is complete. You are almost always right when you finally speak, and almost always after the decision is made. After a few rounds you stop speaking at all, and the organisation loses the earliest warning it had, which was in your head for months." },
        { id: "Pola kedua: kamu menjawab masalah baru dengan menambah prosedur, padahal sebagian masalah muncul justru karena prosedurnya sudah tidak cocok. Prosedur yang menumpuk membuat pekerjaan makin berat bagi semua orang, termasuk bagimu, dan kamu yang paling merasakannya karena kamu yang paling patuh.",
          en: "A second pattern: you answer a new problem by adding procedure, when some problems arise precisely because the procedure no longer fits. Accumulated procedure makes the work heavier for everyone, you included, and you feel it most because you comply most." }
      ]
    }
  },

  pengembangan: [
    { judul: { id: "Sampaikan keberatan saat baru enam puluh persen yakin",
               en: "Raise an objection when you are only sixty percent sure" },
      kenapa:{ id: "Yang kamu tunggu adalah bukti lengkap. Yang dibutuhkan organisasi adalah peringatan lebih awal.",
               en: "What you wait for is complete evidence. What the organisation needs is an earlier warning." } },
    { judul: { id: "Buang satu prosedur sebelum menambah yang baru",
               en: "Remove one procedure before adding another" },
      kenapa:{ id: "Tumpukan prosedur paling membebani orang yang paling patuh, yaitu kamu.",
               en: "Accumulated procedure weighs most on the person who complies most, which is you." } },
    { judul: { id: "Kerjakan satu hal yang datanya memang tidak akan lengkap",
               en: "Take on one thing whose data will never be complete" },
      kenapa:{ id: "Sebagian besar keputusan penting diambil dalam keadaan itu, dan latihannya perlu disengaja.",
               en: "Most important decisions are made in exactly that state, and the practice must be deliberate." } },
    { judul: { id: "Sebutkan bebanmu sebelum ada yang bertanya",
               en: "Name your load before anyone asks" },
      kenapa:{ id: "Kamu menyerap pekerjaan tambahan diam-diam, dan tidak ada yang tahu perlu ada yang diubah.",
               en: "You absorb extra work quietly, and nobody knows anything needs changing." } },
    { judul: { id: "Cari tahu ke mana keahlianmu bisa dibawa, sebelum ditawari",
               en: "Find out where your skill could go, before you are offered anything" },
      kenapa:{ id: "Kalau tidak, kamu akan menerima promosi pertama yang datang, termasuk yang tidak cocok.",
               en: "Otherwise you will take the first promotion offered, including the wrong one." } },
    { judul: { id: "Biarkan satu hal dikerjakan orang lain dengan caranya sendiri",
               en: "Let one thing be done someone else's way" },
      kenapa:{ id: "Memperbaikinya diam-diam membuat mereka tidak belajar dan bebanmu bertambah tiap tahun.",
               en: "Quietly fixing it means they never learn and your load grows each year." } }
  ],

  arah_karir: {
    id: ["Pengendali keuangan & akuntan senior", "Auditor internal & petugas kepatuhan",
         "Aktuaris & analis risiko", "Administrator basis data", "Manajer operasional keuangan"],
    en: ["Financial controller & senior accountant", "Internal auditor & compliance officer",
         "Actuary & risk analyst", "Database administrator", "Finance operations manager"]
  }
}

};

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_PARAGA_CONTENT;
