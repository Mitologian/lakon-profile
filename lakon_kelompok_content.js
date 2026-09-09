/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — LAPIS KELOMPOK  (LENGKAP)
   LENGKAP — 6 dari 6 Kelompok
   Yasa · Nalar · Karya · Bakti · Karsa · Tata

   Isi disimpan sebagai STRUKTUR, bukan blok teks, supaya tata letak bisa
   memainkannya tanpa memotong naskah belakangan.

     inti      satu kalimat pembuka, dirender bercetak tebal
     poin      daftar butir yang setara
     paragraf  larik paragraf pendek
     betah     hal yang menumbuhkan
     layu      hal yang melayukan
     sorot     satu kalimat yang dirender menonjol
     tutup     kalimat penutup

   ═══ ATURAN PENULISAN ═══
   1. Maksimal 90 kata per paragraf.
   2. Maksimal 3 paragraf berurutan tanpa poin atau sorot di antaranya.
   3. Kalimat `inti` harus tetap bermakna kalau dibaca terpisah.
   4. `poin` hanya untuk butir yang benar-benar setara.
   5. Ritme diselang. Halaman yang seluruhnya poin sama melelahkannya
      dengan halaman yang seluruhnya paragraf.
   6. Orang kedua: "kamu" dan "you".

   ═══ ATURAN 4B, ANTI COLD READING ═══
   7. Tiap blok wajib memuat minimal satu pernyataan DISKRIMINATIF, yaitu
      pernyataan yang akan SALAH untuk minimal tiga Kelompok lain.
      Ditandai komentar // DISKRIMINATIF di bawah.
   8. Sebutkan juga apa yang TIDAK dinikmati. Zodiak tidak pernah begitu,
      karena menyebut yang tidak cocok berarti menerima risiko dibantah.
   9. Dilarang memakai rumus kalimat yang sama di lebih dari dua Kelompok.
  10. Detail konkret mengalahkan sifat abstrak. Bukan "kamu teliti",
      melainkan "kamu ingat janji kecil yang orang lain sudah lupa".
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_KELOMPOK_CONTENT = {


/* ═══════════════════════════════════════════════════════════════════════
   YASA · Realistic (R)
   ═══════════════════════════════════════════════════════════════════════ */
"Yasa": {
  riasec: "R",
  tagline: { id: "Mengerjakan yang nyata, dengan tangan dan keahlian",
             en: "Working on the real, with hands and skill" },

  tanda_situasi: {
    inti: { id: "Kamu menyukai situasi yang hasilnya bisa dipegang di akhir hari.",
            en: "You are drawn to situations whose result can be held at the end of the day." },
    poin: [
      // DISKRIMINATIF: salah untuk Karya (subjektif), Bakti (hasil di orang), Karsa (hasil jangka panjang)
      { id: "Benar dan salahnya bisa dibuktikan langsung, bukan diperdebatkan.",
        en: "Right and wrong can be shown on the spot, not argued about." },
      { id: "Ada keterampilan yang harus dilatih, sehingga yang baru dan yang sudah lama jelas bedanya.",
        en: "There is a skill built by practice, so a beginner and an old hand are plainly different." },
      { id: "Kamu bergerak, bukan duduk seharian di satu titik.",
        en: "You move, rather than sitting all day in one spot." },
      { id: "Kalau ada yang rusak, kamu boleh langsung memperbaikinya tanpa menunggu persetujuan berlapis.",
        en: "When something breaks, you may fix it without waiting through layers of approval." }
    ],
    tutup: { id: "Ciri ini bisa muncul di mana saja. Kalau kamu mengenalinya di kegiatan yang tidak ada di daftar mana pun, itu tetap sah, dan biasanya justru lebih akurat daripada bidang yang kamu pilih karena disarankan orang.",
             en: "These marks can show up anywhere. If you recognise them in an activity that appears on no list, that still counts, and it is usually more accurate than a field you chose because someone recommended it." }
  },

  menikmati: {
    inti: { id: "Kamu menikmati pekerjaan yang perkembangannya kelihatan.",
            en: "You enjoy work whose progress is visible." },
    paragraf: [
      { id: "Ada kepuasan pada sesuatu yang tadi pagi belum ada dan sore ini sudah berdiri, atau pada mesin yang tadi mati dan sekarang hidup.",
        en: "There is satisfaction in something that did not exist this morning and stands by evening, or a machine that was dead and now runs." },
      // DISKRIMINATIF: pengulangan sebagai kenikmatan; salah untuk Karya, Nalar, Karsa
      { id: "Bagi orang lain pekerjaanmu mungkin terlihat berulang. Bagimu tiap pengulangan adalah pengasahan, dan ada rasa tenang yang khas saat mengerjakan sesuatu yang tubuhmu sudah hafal.",
        en: "To others your work may look repetitive. To you each repetition is sharpening, and there is a particular calm in doing something your body already knows." }
    ]
  },

  suasana: {
    inti: { id: "Kamu betah di tempat yang bisa langsung dikerjakan tanpa banyak persiapan administratif.",
            en: "You are at home where work can start without much administrative preparation." },
    betah: [
      { id: "Ruang yang alatnya lengkap dan tertata.", en: "A space with complete, well-kept tools." },
      { id: "Tempat yang boleh kotor karena memang sedang dipakai bekerja.",
        en: "A place allowed to get dirty because it is genuinely in use." },
      { id: "Orang yang bicaranya secukupnya dan lebih banyak menunjukkan.",
        en: "People who talk enough and show more." }
    ],
    layu: [
      // DISKRIMINATIF: bukan beratnya yang melelahkan; salah untuk hampir semua Kelompok lain
      { id: "Rapat panjang tentang pekerjaan yang belum dimulai.",
        en: "Long meetings about work not yet begun." },
      { id: "Persetujuan berlapis untuk hal yang sebenarnya selesai dalam dua puluh menit.",
        en: "Layered approvals for something that would take twenty minutes." },
      { id: "Hari yang penuh tapi tidak ada satu pun yang bisa ditunjuk sebagai hasil.",
        en: "A full day with nothing you can point at as a result." }
    ]
  },

  mengisi_energi: {
    inti: { id: "Orang datang bertanya karena kamu yang paling tahu soal itu, dan itu mengisi ulang tenagamu.",
            en: "People come to ask because you know that thing best, and it refills you." },
    poin: [
      { id: "Menyelesaikan sesuatu sampai benar-benar tuntas.", en: "Finishing something all the way." },
      { id: "Menemukan cara yang lebih baik lewat mencoba langsung, bukan lewat membaca.",
        en: "Finding a better method by trying it, not by reading about it." },
      { id: "Melihat alat atau tempat kembali berfungsi seperti seharusnya.",
        en: "Seeing a tool or a place work as it should again." }
    ],
    // DISKRIMINATIF: pekerjaan tangan sebagai pemulih tenaga, bukan pengisi waktu
    tutup: { id: "Kamu juga terisi oleh pekerjaan tangan di luar jam kerja: memperbaiki barang di rumah, merawat kendaraan, mengurus tanaman. Bagi sebagian orang itu kegiatan mengisi waktu. Bagimu itu cara mengembalikan tenaga.",
             en: "You are also filled by handwork outside working hours: fixing things at home, maintaining a vehicle, tending plants. To some that is a way to pass time. To you it is how energy comes back." }
  },

  saat_belajar: {
    inti: { id: "Kamu belajar lewat memegang, bukan lewat mendengar.",
            en: "You learn by handling, not by listening." },
    paragraf: [
      { id: "Penjelasan panjang di depan kelas cepat kabur, tapi sekali kamu mengerjakan sendiri, kamu jarang lupa. Rumus masuk kalau ada benda atau kasus nyata yang bisa dipasangkan dengannya. Politeknik, praktikum, magang, dan pelatihan bersertifikat biasanya jauh lebih cocok daripada kuliah yang seluruhnya ceramah.",
        en: "A long explanation at the front of a room blurs quickly, but once you have done it yourself you rarely forget. A formula lands when there is a real object or case to pair it with. Polytechnics, labs, apprenticeships, and certified training usually suit far better than a course that is all lectures." }
    ],
    sorot: { id: "Sekolah yang seluruh penilaiannya lewat ujian tulis bisa membuat kemampuanmu tidak terbaca bertahun-tahun, tanpa ada yang menyadari bahwa masalahnya di bentuk penilaian, bukan di kepalamu.",
             en: "Schooling assessed entirely by written exams can leave your ability unread for years, without anyone realising the problem is the form of assessment, not your mind." }
  },

  harga_diam: {
    inti: { id: "Yang perlahan terjadi adalah rasa tidak pernah benar-benar selesai.",
            en: "What slowly happens is a sense of never quite finishing." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan lama di pekerjaan yang seluruhnya di depan layar dan di dalam rapat. Kamu akan tetap teliti dan tetap bisa diandalkan.",
          en: "You may last a long time in work that is entirely screens and meetings. You will stay careful and stay reliable." },
        { id: "Tapi hari-harimu penuh tanpa ada yang bisa ditunjuk sebagai hasil. Lalu kepercayaan dirimu ikut menipis, karena keahlian yang dulu membuatmu merasa berguna tidak lagi terpakai dan pelan-pelan tumpul.",
          en: "But your days are full with nothing to point at as a result. Then your confidence thins too, because the skill that once made you feel useful goes unused and gradually dulls." },
        { id: "Ini sering muncul bukan sebagai keluhan tentang pekerjaan, melainkan sebagai perasaan bahwa dirimu biasa-biasa saja, padahal yang berubah cuma tempatnya.",
          en: "This often appears not as a complaint about the job but as a feeling of being ordinary, when all that changed was the setting." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Yang menolong bukan menunggu sampai pekerjaannya berubah. Ambil satu pekerjaan tangan dan kerjakan rutin, sekecil apa pun, bukan sebagai hobi pengisi waktu.",
          en: "What helps is not waiting for the job to change. Take one piece of handwork and keep it in regular practice, however small, not as a hobby to fill time." }
      ],
      sorot: { id: "Supaya bagian dirimu yang mengukur kemampuan lewat hasil nyata tetap punya tempat berpijak.",
               en: "So the part of you that measures ability by real results still has somewhere to stand." }
    }
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   NALAR · Investigative (I)
   ═══════════════════════════════════════════════════════════════════════ */
"Nalar": {
  riasec: "I",
  tagline: { id: "Menelusuri sampai paham, bukan sampai cukup",
             en: "Following it until it makes sense, not until it is enough" },

  tanda_situasi: {
    inti: { id: "Yang menarikmu adalah situasi yang menyisakan pertanyaan.",
            en: "What pulls you in are situations that leave a question open." },
    poin: [
      { id: "Jawabannya belum ada di mana pun, jadi harus ditelusuri, bukan dicari di buku.",
        en: "The answer is not yet anywhere, so it must be traced, not looked up." },
      // DISKRIMINATIF: gagal yang tetap berguna; salah untuk Tata, Jaga-minded, Karsa
      { id: "Boleh salah dulu, karena percobaan yang gagal tetap menghasilkan sesuatu yang berguna.",
        en: "Being wrong first is allowed, because a failed attempt still yields something useful." },
      { id: "Ketepatan lebih dihargai daripada kecepatan, jadi kamu tidak dipaksa menyimpulkan sebelum yakin.",
        en: "Accuracy counts more than speed, so you are not pushed to conclude before you are sure." },
      { id: "Orang mau mendengar kalau kamu bilang dugaan sebelumnya keliru.",
        en: "People will listen when you say the earlier assumption was wrong." }
    ],
    tutup: { id: "Ciri ini bisa muncul di mana saja, termasuk di hal-hal yang tidak terlihat ilmiah sama sekali. Rasa penasaran yang tidak bisa kamu tinggalkan adalah petunjuk yang lebih dapat dipercaya daripada nilai mata pelajaran mana pun.",
             en: "These marks can show up anywhere, including in things that look nothing like science. A curiosity you cannot put down is a more trustworthy signal than any subject grade." }
  },

  menikmati: {
    inti: { id: "Jawaban yang benar tapi tidak jelas alasannya justru mengganggumu.",
            en: "A correct answer with no clear reason actually bothers you." },
    paragraf: [
      { id: "Kepuasan terbesarmu bukan pada menjawab, melainkan pada memahami sebabnya. Kamu menikmati membongkar sesuatu sampai ke bagian terkecil, membandingkan dua hal yang mirip untuk menemukan bedanya, dan menguji dugaanmu sendiri sampai tersisa yang bertahan.",
        en: "Your deepest satisfaction is not in answering but in understanding why. You enjoy taking things apart to the smallest piece, comparing two similar things to find the difference, and testing your own hunches until only what holds is left." },
      // DISKRIMINATIF: rela lama di satu hal kecil; salah untuk Karsa, Guna-minded, Yasa
      { id: "Kamu juga tidak keberatan menghabiskan waktu lama pada satu hal kecil, kalau hal kecil itu yang menentukan seluruh sisanya.",
        en: "You also do not mind spending a long time on one small thing, when that small thing decides everything else." }
    ]
  },

  suasana: {
    inti: { id: "Tempat yang cocok buatmu adalah yang tenang cukup lama untuk berpikir sampai selesai.",
            en: "The place that suits you is one quiet long enough to think a thing through." },
    betah: [
      { id: "Akses ke bahan yang bisa dipercaya.", en: "Access to sources you can trust." },
      { id: "Orang yang bisa diajak berdebat tanpa hubungan jadi rusak.",
        en: "People you can argue with without damaging the relationship." },
      { id: "Waktu yang cukup untuk memeriksa ulang sebelum menyerahkan.",
        en: "Enough time to check again before handing something over." }
    ],
    layu: [
      // DISKRIMINATIF: gangguan kecil lebih melelahkan daripada beban berat
      { id: "Gangguan kecil yang sering, yang justru lebih melelahkan daripada pekerjaan berat.",
        en: "Frequent small interruptions, which tire you more than heavy work does." },
      { id: "Tuntutan menyimpulkan cepat dengan data seadanya.",
        en: "Being pushed to conclude quickly on thin data." },
      { id: "Tempat yang lebih menghargai cerita yang enak didengar daripada temuan yang akurat.",
        en: "A place that prefers a pleasing story over an accurate finding." }
    ]
  },

  mengisi_energi: {
    inti: { id: "Berbicara dengan orang yang lebih tahu darimu tentang sesuatu terasa mengisi, bukan mengecilkan.",
            en: "Talking with someone who knows more than you feels filling, not diminishing." },
    poin: [
      { id: "Menemukan pola yang belum disadari orang lain.",
        en: "Finding a pattern no one else has noticed." },
      { id: "Dugaanmu terbukti setelah diuji dengan benar.",
        en: "A hunch confirmed after being properly tested." },
      { id: "Membaca atau menonton hal yang sama sekali tidak berhubungan dengan pekerjaanmu.",
        en: "Reading or watching something entirely unrelated to your work." }
    ],
    tutup: { id: "Waktu yang kamu habiskan mendalami hal yang tampaknya tidak berguna jarang benar-benar terbuang. Sering justru dari situ sambungan yang tidak terduga muncul.",
             en: "Time spent going deep on something apparently useless is rarely wasted. Unexpected connections often come from exactly there." }
  },

  saat_belajar: {
    inti: { id: "Beri kamu pertanyaan lebih dulu, bukan jawaban, dan kamu akan mengejarnya sendiri.",
            en: "Give you the question first rather than the answer, and you will chase it yourself." },
    paragraf: [
      { id: "Materi yang disampaikan sebagai urutan yang harus dihafal terasa membosankan, sementara materi yang dibuka dengan teka-teki akan kamu kejar sampai malam. Ujian yang menuntut hafalan cepat kurang menggambarkan kemampuanmu dibanding tugas yang meminta kamu menjelaskan alasan.",
        en: "Material delivered as a sequence to memorise feels dull, while material that opens with a puzzle will keep you up at night. Exams rewarding fast recall describe your ability less well than tasks that ask you to explain why." }
    ],
    // DISKRIMINATIF: lambat di awal lalu jauh di depan; pola khas I
    sorot: { id: "Kamu sering terlihat lambat di awal karena tidak mau melanjutkan sebelum bagian sebelumnya benar-benar jelas, lalu tiba-tiba jauh di depan setelah dasarnya kokoh.",
             en: "You often look slow at the start because you will not move on until the previous part is genuinely clear, then suddenly run far ahead once the base is solid." }
  },

  harga_diam: {
    inti: { id: "Rasa ingin tahumu berhenti dipakai, lalu berhenti muncul.",
            en: "Your curiosity stops being used, then stops appearing." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan lama di pekerjaan yang tidak pernah menanyakan apa pun kepadamu, hanya meminta hal yang sudah diketahui dikerjakan berulang. Kamu akan tetap rapi dan tetap tepat waktu.",
          en: "You may last a long time in work that never asks you anything, only requires known things done repeatedly. You will stay tidy and stay punctual." },
        { id: "Pertanyaan-pertanyaan yang dulu datang sendiri makin jarang, dan suatu saat kamu sadar sudah lama tidak penasaran pada apa pun.",
          en: "Questions that once arrived on their own come less often, and at some point you notice you have not been curious about anything in a long while." },
        { id: "Ini biasanya tidak terasa sebagai kehilangan besar, melainkan sebagai hari-hari yang lewat tanpa ada yang menarik perhatian.",
          en: "This rarely registers as a large loss; it registers as days passing with nothing catching your attention." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Satu hal yang tetap kamu dalami di luar pekerjaan sudah cukup menahan itu, apa pun hal itu, sesederhana apa pun.",
          en: "One thing you keep going deep on outside work is enough to hold that off, whatever it is, however simple." }
      ],
      sorot: { id: "Yang perlu dijaga hidup bukan keahlianmu, melainkan kebiasaan bertanya kenapa.",
               en: "What needs to stay alive is not the expertise but the habit of asking why." }
    }
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARYA · Artistic (A)
   ═══════════════════════════════════════════════════════════════════════ */
"Karya": {
  riasec: "A",
  tagline: { id: "Mencipta, memberi bentuk, memberi makna",
             en: "Making, giving form, giving meaning" },

  tanda_situasi: {
    inti: { id: "Kamu paling hidup di situasi yang bentuknya belum ditentukan.",
            en: "You come most alive in situations whose shape is not yet decided." },
    poin: [
      { id: "Ada ruang menafsirkan, bukan sekadar menjalankan yang sudah diputuskan orang lain.",
        en: "There is room to interpret, not merely to carry out what someone else settled." },
      { id: "Hasilnya akan dilihat, dibaca, atau dirasakan seseorang, sehingga pilihan kecilmu punya akibat.",
        en: "The result will be seen, read, or felt by someone, so your small choices have consequences." },
      { id: "Boleh dicoba beberapa kali, karena versi pertama memang jarang benar.",
        en: "Several attempts are allowed, because a first version is rarely right." },
      // DISKRIMINATIF: pertanyaan "sudah pas atau belum" sebagai kriteria sah
      { id: "Pertanyaan \u201cini sudah terasa pas atau belum\u201d dianggap sah, bukan cuma \u201cini sudah selesai atau belum\u201d.",
        en: "The question \u201cdoes this feel right yet\u201d counts, not only \u201cis this finished yet\u201d." }
    ],
    tutup: { id: "Ciri ini tidak hanya ada di dunia seni. Ia muncul di mana pun ada sesuatu yang harus disusun, disampaikan, atau dirancang, termasuk di tempat yang orang lain anggap sama sekali tidak kreatif.",
             en: "These marks are not confined to the arts. They appear wherever something must be arranged, communicated, or designed, including in places others consider entirely uncreative." }
  },

  menikmati: {
    inti: { id: "Kepuasanmu datang dari mengerjakannya, bukan dari selesainya.",
            en: "Your satisfaction comes from doing it, not from finishing it." },
    paragraf: [
      { id: "Ada kepuasan tersendiri di menit-menit ketika sebuah gagasan mulai punya wujud: kalimat yang akhirnya jatuh di tempatnya, warna yang akhirnya cocok, potongan yang akhirnya nyambung.",
        en: "There is a particular satisfaction in the minutes when an idea begins to take shape: the sentence that finally lands, the colour that finally sits, the piece that finally connects." },
      // DISKRIMINATIF: mengulang belasan kali tanpa merasa buang waktu, demi "terasa benar"
      { id: "Itu sebabnya kamu sanggup mengulang satu bagian belasan kali tanpa merasa buang waktu. Yang kamu cari bukan sempurna, melainkan terasa benar, dan kamu biasanya tahu bedanya bahkan ketika sulit menjelaskannya kepada orang lain.",
        en: "That is why you can redo one section a dozen times without feeling it was wasted. What you want is not perfect but right, and you usually know the difference even when you cannot explain it to anyone." }
    ]
  },

  suasana: {
    inti: { id: "Kamu butuh tempat yang memberi ruang menafsirkan, bukan sekadar menjalankan.",
            en: "You need a place with room to interpret, not merely to execute." },
    betah: [
      { id: "Ruang kerja yang boleh sedikit berantakan, karena berantakan adalah bentuk pekerjaan yang sedang berjalan.",
        en: "A workspace allowed to be a little messy, because mess is what work in progress looks like." },
      { id: "Orang yang bisa diajak memikirkan sesuatu bersama.",
        en: "People you can think something through with." },
      { id: "Jam-jam ketika tidak ada yang mengetuk.", en: "Hours when nobody knocks." }
    ],
    layu: [
      { id: "Pengawasan yang terlalu rapat.", en: "Supervision kept too close." },
      { id: "Arahan yang berubah tanpa alasan yang bisa dimengerti.",
        en: "Direction that changes for reasons you cannot follow." },
      { id: "Tempat yang menganggap percobaan gagal sebagai kesalahan.",
        en: "A place that treats a failed attempt as a mistake." }
    ]
  },

  mengisi_energi: {
    // DISKRIMINATIF: satu orang tersentuh > sepuluh pujian sopan
    inti: { id: "Reaksi satu orang yang tersentuh biasanya lebih berarti daripada pujian sepuluh orang yang sopan.",
            en: "One person visibly moved usually means more than ten polite compliments." },
    poin: [
      { id: "Memulai sesuatu yang bentuknya belum jelas.",
        en: "Starting something whose shape is not yet clear." },
      { id: "Menemukan cara menyampaikan hal yang sulit disampaikan.",
        en: "Finding a way to say what is hard to say." },
      { id: "Melihat karyamu benar-benar mengenai seseorang.",
        en: "Seeing your work genuinely land on someone." }
    ],
    tutup: { id: "Kamu juga terisi oleh hal-hal yang tampak tidak produktif: berkeliling tanpa tujuan, memperhatikan bagaimana orang lain menyusun sesuatu, mengumpulkan potongan yang belum tahu akan dipakai untuk apa. Itu bukan menunda pekerjaan, itu bagian dari pekerjaanmu.",
             en: "You are also filled by things that look unproductive: wandering without a destination, noticing how other people put things together, collecting fragments with no known use yet. That is not putting work off, it is part of the work." }
  },

  saat_belajar: {
    inti: { id: "Kamu belajar paling cepat lewat mengerjakan, bukan lewat menghafal urutan.",
            en: "You learn fastest by making, not by memorising a sequence." },
    paragraf: [
      { id: "Teori masuk kalau ada karyamu sendiri yang bisa dijadikan tempat menempelkan teori itu. Kuliah yang isinya hanya ceramah dan ujian pilihan ganda akan terasa jauh, sementara mata kuliah dengan tugas studio, proyek, atau kritik karya akan terasa seperti akhirnya belajar sungguhan.",
        en: "Theory takes hold when there is work of your own to attach it to. A course that is only lectures and multiple-choice exams will feel distant, while a subject with studio work, projects, or critique will feel like finally learning for real." }
    ],
    sorot: { id: "Kalau kamu terlihat malas di sekolah, sering bukan karena tidak mampu, melainkan karena belum ketemu bentuk tugas yang membuat kepalamu menyala.",
             en: "If you look lazy at school, it is often not incapacity but not yet having met the kind of task that switches your head on." }
  },

  harga_diam: {
    inti: { id: "Yang perlahan terjadi bukan penurunan kinerja, melainkan sesuatu yang lebih sunyi.",
            en: "What slowly happens is not a drop in performance but something quieter." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan bertahun-tahun di pekerjaan yang tidak menuntut apa pun selain menjalankan. Kamu bisa rapi, bisa disiplin, bisa dinilai baik.",
          en: "You may well last years in work that asks nothing but execution. You can be tidy, disciplined, well reviewed." },
        { id: "Lalu kamu berhenti punya pendapat tentang bagaimana sesuatu seharusnya terlihat atau terdengar. Kebiasaan memperhatikan hal-hal kecil memudar, dan suatu hari kamu sadar sudah lama tidak membuat apa pun.",
          en: "Then you stop having a view on how something ought to look or sound. The habit of noticing small things fades, and one day you realise you have not made anything in a long while." },
        { id: "Ini biasanya tidak muncul sebagai keluhan tentang pekerjaan, melainkan sebagai perasaan tumpul yang sulit dijelaskan kepada orang yang menanyakannya.",
          en: "This rarely appears as a complaint about the job; it appears as a dullness that is hard to explain to whoever asks." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Kalau jalanmu memang harus lewat pekerjaan yang tidak ada ruang menciptanya, yang menolong bukan bersabar, melainkan menjaga satu ruang kecil di luar pekerjaan yang tetap milikmu sendiri.",
          en: "If your path really must run through work with no room to make anything, what helps is not patience but keeping one small space outside the job that stays your own." }
      ],
      sorot: { id: "Yang perlu dijaga hidup bukan karyanya, melainkan kebiasaan memperhatikan.",
               en: "What needs to stay alive is not the output but the habit of noticing." }
    }
  }
},



/* ═══════════════════════════════════════════════════════════════════════
   BAKTI · Social (S)
   ═══════════════════════════════════════════════════════════════════════ */
"Bakti": {
  riasec: "S",
  tagline: { id: "Menemani orang sampai keadaannya berubah",
             en: "Staying with people until something shifts" },

  tanda_situasi: {
    inti: { id: "Situasi yang cocok buatmu selalu ada orangnya, dan keadaan orang itu bisa berubah karena kamu ada di sana.",
            en: "The situations that suit you always have people in them, and a person's state can change because you are there." },
    poin: [
      // DISKRIMINATIF: hubungan berlanjut sebagai syarat; salah untuk Yasa, Nalar, Tata
      { id: "Hubungannya berlanjut, bukan sekali bertemu lalu selesai, karena perubahan yang berarti butuh waktu.",
        en: "The relationship continues rather than ending after one meeting, because meaningful change takes time." },
      { id: "Ada ruang mendengar dulu sebelum bertindak.",
        en: "There is room to listen before acting." },
      { id: "Hasilnya terlihat di orangnya, bukan di laporan.",
        en: "The result shows in the person, not in a report." },
      { id: "Kesabaran dianggap bagian dari pekerjaan, bukan kelambanan.",
        en: "Patience counts as part of the work, not as slowness." }
    ],
    tutup: { id: "Ciri ini muncul jauh lebih luas daripada profesi yang biasa disebut membantu orang. Ia ada di mana pun seseorang menjadi lebih mampu, lebih tenang, atau lebih berani karena kehadiran orang lain.",
             en: "These marks appear far more widely than the professions usually called helping. They exist wherever someone becomes more capable, calmer, or braver because another person was there." }
  },

  menikmati: {
    // DISKRIMINATIF: perubahan kecil pada orang lain > pencapaian besar sendiri
    inti: { id: "Perubahan kecil pada orang lain terasa lebih memuaskan daripada pencapaian besar yang kamu kerjakan sendirian.",
            en: "A small change in another person satisfies you more than a large achievement made alone." },
    paragraf: [
      { id: "Kamu menikmati saat seseorang yang tadinya ragu mulai berani mencoba. Bukan saat ia berhasil, melainkan saat ia mulai.",
        en: "You enjoy the moment someone hesitant starts daring to try. Not when they succeed, but when they begin." },
      // DISKRIMINATIF: menikmati bagian yang orang lain anggap melelahkan
      { id: "Kamu juga menikmati bagian pekerjaan yang orang lain anggap melelahkan: mendengarkan cerita yang sama untuk ketiga kalinya, menjelaskan ulang dengan cara yang berbeda, menunggu seseorang sampai siap. Bagimu itu bukan kesabaran yang dipaksakan, melainkan bagian yang paling berarti.",
        en: "You also enjoy the parts others find tiring: hearing the same story a third time, explaining again a different way, waiting until someone is ready. To you that is not forced patience but the part that means most." }
    ]
  },

  suasana: {
    inti: { id: "Kamu betah kalau orang di sekitarmu diperlakukan sebagai orang, bukan sebagai jumlah.",
            en: "You settle where the people around you are treated as people, not as numbers." },
    betah: [
      { id: "Waktu yang cukup per orang, karena terburu-buru membuat pekerjaanmu kehilangan intinya.",
        en: "Enough time per person, because rushing strips your work of its point." },
      { id: "Tim yang anggotanya saling menanyakan kabar.",
        en: "A team whose members ask after each other." },
      { id: "Kebebasan menindaklanjuti seseorang setelah urusan resminya selesai.",
        en: "Freedom to follow up with someone after the formal matter is closed." }
    ],
    layu: [
      // DISKRIMINATIF: bukan jumlah orang, tapi waktu yang tidak cukup untuk siapa pun
      { id: "Diminta melayani banyak orang dengan waktu yang tidak cukup untuk siapa pun.",
        en: "Being asked to serve many people with time enough for none." },
      { id: "Tempat yang menganggap perhatian pada orang sebagai membuang waktu.",
        en: "A place that treats attention to people as time wasted." },
      { id: "Aturan yang memaksamu menutup urusan sebelum orangnya benar-benar tertangani.",
        en: "Rules that force you to close a case before the person is actually handled." }
    ]
  },

  mengisi_energi: {
    inti: { id: "Seseorang kembali bertahun-tahun kemudian dan bercerita bahwa hal yang dulu kamu sampaikan ternyata berguna.",
            en: "Someone comes back years later and says the thing you once said turned out to help." },
    poin: [
      { id: "Percakapan yang jujur, bukan yang sopan.",
        en: "A conversation that is honest rather than polite." },
      { id: "Kelompok yang terasa aman untuk mengakui hal yang belum bisa.",
        en: "A group where it feels safe to admit what you cannot do yet." },
      { id: "Saat kamu tahu kehadiranmu membuat bedanya.",
        en: "The moment you know your presence made the difference." }
    ],
    // DISKRIMINATIF: mengurus hal kecil untuk orang lain sebagai pengisi, bukan beban
    tutup: { id: "Kamu juga terisi dengan cara yang tidak disangka orang: mengurus hal-hal kecil untuk orang lain, mengantar, menyiapkan, mengingat hal yang orang lain lupa. Itu tidak terasa seperti beban bagimu, justru sebaliknya.",
             en: "You are also filled in ways people do not expect: doing small things for others, giving someone a lift, preparing something, remembering what others forgot. That does not feel like a burden to you, quite the opposite." }
  },

  saat_belajar: {
    inti: { id: "Kamu belajar lebih baik bersama orang lain daripada sendirian.",
            en: "You learn better with others than alone." },
    paragraf: [
      { id: "Bahan yang dibaca sendiri sering baru benar-benar masuk setelah didiskusikan atau diajarkan ke orang lain. Teori yang dijelaskan lewat contoh orang nyata akan kamu ingat jauh lebih lama daripada teori yang berdiri sendiri.",
        en: "Material read alone often only lands after being discussed or taught to someone. Theory explained through real people stays with you far longer than theory standing alone." }
    ],
    // DISKRIMINATIF: performa bergantung pada apakah gurunya mengenalmu
    sorot: { id: "Kamu cenderung berkembang pesat di kelas yang gurunya mengenal namamu, dan bisa tertinggal di kelas besar yang kamu merasa hanya jadi salah satu dari sekian ratus.",
             en: "You tend to flourish in a class where the teacher knows your name, and can fall behind in a large one where you feel like one of several hundred." }
  },

  harga_diam: {
    inti: { id: "Kamu mulai merasa pekerjaanmu tidak ada gunanya bagi siapa pun, meskipun secara laporan semuanya beres.",
            en: "You start feeling your work is of no use to anyone, even though on paper everything is in order." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan lama di pekerjaan yang tidak ada manusianya, hanya berkas dan sistem. Kamu akan tetap teliti, bahkan sering lebih teliti daripada yang dituntut.",
          en: "You may last a long time in work with no people in it, only files and systems. You will stay careful, often more careful than required." },
        // DISKRIMINATIF: rasa bersalah karena tidak bisa menjelaskan kekosongannya
        { id: "Lalu muncul rasa bersalah yang aneh, karena kamu tahu banyak orang ingin ada di posisimu dan kamu tidak bisa menjelaskan kenapa dirimu kosong.",
          en: "Then an odd guilt arrives, because you know many people would want your position and you cannot explain why you feel empty." },
        { id: "Sebagian orang mengisi kekosongan itu dengan mengurusi urusan rekan kerja sampai kelelahan, tanpa sadar sedang mencari bagian dirinya yang tidak terpakai.",
          en: "Some people fill that emptiness by taking on colleagues' problems until exhausted, without realising they are looking for the unused part of themselves." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Cari satu tempat di luar pekerjaan yang di situ kamu benar-benar dibutuhkan orang, dan pertahankan tempat itu.",
          en: "Find one place outside work where you are genuinely needed, and hold on to it." }
      ],
      sorot: { id: "Yang perlu dijaga hidup bukan peranmu, melainkan pengalaman melihat seseorang berubah karena kamu ada.",
               en: "What needs to stay alive is not the role but the experience of seeing someone change because you were there." }
    }
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   KARSA · Enterprising (E)
   ═══════════════════════════════════════════════════════════════════════ */
"Karsa": {
  riasec: "E",
  tagline: { id: "Menggerakkan yang belum bergerak",
             en: "Getting moving what has not moved" },

  tanda_situasi: {
    inti: { id: "Kamu tertarik pada situasi yang ada taruhannya.",
            en: "You are drawn to situations with something at stake." },
    poin: [
      // DISKRIMINATIF: menang dan kalah sama-sama terasa; salah untuk Tata, Nalar, Bakti
      { id: "Hasilnya bergantung pada keputusanmu, sehingga menang dan kalah sama-sama terasa.",
        en: "The outcome depends on your decision, so both winning and losing register." },
      { id: "Kamu harus meyakinkan orang, bukan sekadar memberi tahu.",
        en: "You have to convince people, not merely inform them." },
      { id: "Belum ada bentuknya, sehingga kamu ikut menentukan bagaimana jadinya.",
        en: "It has no fixed shape yet, so you help decide how it turns out." },
      { id: "Bergerak cepat, karena menunggu terlalu lama terasa seperti kehilangan peluang.",
        en: "It moves quickly, because waiting too long feels like losing the opening." }
    ],
    tutup: { id: "Ciri ini muncul di mana pun ada sesuatu yang perlu dimulai, dinegosiasikan, atau digerakkan. Bukan hanya di dunia bisnis: di kepanitiaan, di kegiatan warga, bahkan di urusan keluarga.",
             en: "These marks appear wherever something needs starting, negotiating, or setting in motion. Not only in business: in committees, in community work, even in family matters." }
  },

  menikmati: {
    inti: { id: "Kamu menikmati momen ketika sesuatu akhirnya jadi.",
            en: "You enjoy the moment something finally happens." },
    paragraf: [
      { id: "Kesepakatan yang tercapai, orang yang akhirnya bersedia ikut, kegiatan yang tadinya cuma ide lalu benar-benar berjalan. Kamu juga menikmati proses membaca orang: mencari tahu apa yang sebenarnya mereka inginkan, lalu menemukan cara agar semua pihak merasa dapat sesuatu.",
        en: "An agreement reached, a person who at last agrees to join, an activity that was only an idea and is now running. You also enjoy reading people: working out what they actually want, then finding a way for everyone to feel they gained something." },
      // DISKRIMINATIF: tekanan membuat lebih hidup, bukan lebih cemas
      { id: "Ada kesenangan tersendiri bagimu pada tekanan yang wajar. Tenggat yang nyata dan taruhan yang nyata justru membuatmu lebih hidup, bukan lebih cemas.",
        en: "Reasonable pressure gives you a particular pleasure. A real deadline and a real stake make you more alive, not more anxious." }
    ]
  },

  suasana: {
    inti: { id: "Kamu perlu tempat yang keputusannya bisa diambil tanpa menunggu berminggu-minggu.",
            en: "You need a place where decisions can be made without waiting weeks." },
    betah: [
      { id: "Wewenang yang sepadan dengan tanggung jawabmu.",
        en: "Authority that matches your responsibility." },
      { id: "Hasil yang diukur dan diakui, karena ukuran bagimu adalah bentuk kejelasan.",
        en: "Results measured and acknowledged, because measurement to you is a form of clarity." },
      { id: "Orang yang bisa kamu ajak memutuskan di tempat, bukan yang harus bertanya ke atas dulu.",
        en: "People who can decide with you on the spot, rather than having to ask upward first." }
    ],
    layu: [
      // DISKRIMINATIF: bertanggung jawab atas sesuatu yang tidak boleh diatur
      { id: "Diminta bertanggung jawab atas sesuatu yang tidak boleh kamu atur.",
        en: "Being asked to answer for something you are not allowed to steer." },
      { id: "Tempat yang semua hal sudah diputuskan di atas dan tugasmu hanya menjalankan.",
        en: "A place where everything is decided above and your job is only to carry it out." },
      { id: "Proses persetujuan yang membuat peluang lewat sebelum sempat diambil.",
        en: "An approval process that lets the opening pass before it can be taken." }
    ]
  },

  mengisi_energi: {
    // DISKRIMINATIF: pulang dari acara ramai justru dengan ide dan kontak
    inti: { id: "Sebagian orang pulang dari acara ramai dengan lelah. Kamu sering pulang dengan tiga ide baru dan dua nomor telepon.",
            en: "Some people come home from a crowded event tired. You often come home with three new ideas and two phone numbers." },
    poin: [
      { id: "Bertemu orang yang belum pernah kamu kenal.",
        en: "Meeting someone you have never met." },
      { id: "Melihat peluang yang belum diambil siapa pun.",
        en: "Seeing an opening nobody has taken." },
      { id: "Sesuatu yang kamu mulai ternyata jalan tanpa perlu kamu dorong terus.",
        en: "Something you started running without you having to keep pushing." }
    ],
    tutup: { id: "Kamu juga terisi oleh percakapan yang punya arah, terutama yang berakhir dengan sesuatu yang akan dikerjakan. Obrolan panjang tanpa keputusan justru menguras.",
             en: "You are also filled by conversations with a direction, especially ones that end with something to be done. A long talk with no decision drains you instead." }
  },

  saat_belajar: {
    inti: { id: "Kamu menyerap apa pun dengan cepat asal tahu untuk apa.",
            en: "You absorb anything quickly as long as you know what it is for." },
    paragraf: [
      { id: "Materi yang jelas kegunaannya akan kamu serap dengan cepat, sementara materi yang terasa hanya untuk ujian sulit menahan perhatianmu. Kamu sering belajar sambil mengerjakan sesuatu yang nyata: mengurus acara, berjualan, memimpin kegiatan, dan dari situ kamu menyerap lebih banyak daripada dari membaca.",
        en: "Material with obvious use you absorb quickly, while material that feels exam-only struggles to hold you. You often learn while running something real: an event, a small business, leading an activity, and take in more from that than from reading." }
    ],
    // DISKRIMINATIF: nilai akademik tidak menggambarkan, karena yang dikuasai tidak diujikan
    sorot: { id: "Nilai akademikmu kadang tidak menggambarkan kemampuanmu, karena yang paling kamu kuasai sering justru hal yang tidak diujikan.",
             en: "Your grades sometimes describe your ability poorly, because what you are strongest at is often not what gets examined." }
  },

  harga_diam: {
    inti: { id: "Energi yang tidak menemukan penyaluran lama-lama berubah jadi tidak sabar pada hal-hal kecil.",
            en: "Energy with no outlet eventually turns into impatience over small things." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan lama di pekerjaan yang seluruhnya sudah ditentukan orang lain. Kamu akan tetap menyelesaikan tugasmu, sering lebih cepat daripada yang diminta.",
          en: "You may last a long time in work entirely decided by others. You will still finish your tasks, often faster than asked." },
        { id: "Yang perlahan terjadi adalah kegelisahan yang tidak jelas sebabnya, dan orang di sekitarmu mulai merasa kamu sulit.",
          en: "What slowly happens is a restlessness with no obvious cause, and people around you start finding you difficult." },
        // DISKRIMINATIF: pindah kerja berulang sebagai gejala, bukan solusi
        { id: "Sebagian orang menyalurkannya lewat berpindah-pindah pekerjaan tanpa pernah merasa cukup, padahal yang kurang bukan tempatnya melainkan tidak adanya sesuatu yang benar-benar jadi tanggung jawabnya.",
          en: "Some people channel it into moving jobs repeatedly without ever feeling it is enough, when what is missing is not the place but having nothing that is genuinely theirs to answer for." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Pegang satu hal yang hasilnya benar-benar tanggung jawabmu sendiri, sekecil apa pun, di dalam atau di luar pekerjaan.",
          en: "Hold one thing whose outcome is genuinely yours to answer for, however small, inside or outside work." }
      ],
      sorot: { id: "Yang perlu dijaga hidup bukan jabatanmu, melainkan pengalaman memulai sesuatu dan menanggung akibatnya.",
               en: "What needs to stay alive is not the title but the experience of starting something and carrying what follows." }
    }
  }
},


/* ═══════════════════════════════════════════════════════════════════════
   TATA · Conventional (C)
   ═══════════════════════════════════════════════════════════════════════ */
"Tata": {
  riasec: "C",
  tagline: { id: "Menata sampai semuanya bisa dipercaya",
             en: "Ordering things until they can be trusted" },

  tanda_situasi: {
    inti: { id: "Kamu tenang di situasi yang ada aturan mainnya, sehingga jelas apa yang dianggap benar.",
            en: "You settle in situations that have rules of play, so what counts as correct is clear." },
    poin: [
      // DISKRIMINATIF: kelegaan saat yang berantakan tersusun; salah untuk Karya, Karsa, Guna-minded
      { id: "Ada yang bisa dirapikan, karena ada kelegaan tersendiri saat sesuatu yang berantakan akhirnya tersusun.",
        en: "There is something to tidy, because it is a relief when something disordered finally sits in order." },
      { id: "Hasilnya bisa diperiksa, sehingga kamu tahu pasti sudah beres atau belum.",
        en: "The result can be checked, so you know for certain whether it is done." },
      { id: "Cukup tenang untuk dikerjakan sampai tuntas, tanpa prioritas yang berganti di tengah jalan.",
        en: "It is calm enough to finish, without priorities changing midway." },
      { id: "Orang bisa mengandalkanmu, karena dipercaya terasa lebih berarti daripada dipuji.",
        en: "People can rely on you, because being trusted means more than being praised." }
    ],
    tutup: { id: "Ciri ini muncul di mana pun ada sesuatu yang harus berjalan tanpa kesalahan, dan itu jauh lebih luas daripada pekerjaan yang biasa disebut administratif.",
             en: "These marks appear wherever something must run without error, and that is far wider than the work usually called administrative." }
  },

  menikmati: {
    inti: { id: "Kamu menikmati saat sesuatu akhirnya cocok.",
            en: "You enjoy the moment things finally reconcile." },
    paragraf: [
      { id: "Angka yang bertemu, daftar yang tercentang penuh, berkas yang akhirnya bisa ditemukan dalam hitungan detik. Kamu juga menikmati membangun cara kerja yang bisa diikuti orang lain, karena artinya hasilnya tidak lagi bergantung pada dirimu sendiri.",
        en: "Figures that meet, a list fully ticked, a file that can at last be found in seconds. You also enjoy building a way of working others can follow, because it means the result no longer depends on you alone." },
      // DISKRIMINATIF: hari tanpa kejutan sebagai kepuasan, bukan kebosanan
      { id: "Ada kepuasan yang khas bagimu pada hari yang berjalan tanpa kejutan, dan kamu tidak menganggap itu membosankan. Bagimu itu tanda semuanya bekerja seperti seharusnya.",
        en: "A day that passes without surprises gives you a particular satisfaction, and you do not find it dull. To you it is the sign that everything is working as it should." }
    ]
  },

  suasana: {
    inti: { id: "Ekspektasi yang jelas dan tidak berubah tiap minggu adalah syarat buatmu.",
            en: "Expectations that are clear and do not shift weekly are a condition for you." },
    betah: [
      { id: "Tahu persis apa yang dinilai dan seperti apa hasil yang dianggap selesai.",
        en: "Knowing exactly what is assessed and what counts as finished." },
      { id: "Orang yang menepati kesepakatan, termasuk kesepakatan kecil.",
        en: "People who keep agreements, including small ones." },
      { id: "Wilayah kerja yang batasnya jelas, sehingga kamu bisa menuntaskannya sepenuhnya.",
        en: "A patch of work with clear edges, so you can finish it completely." }
    ],
    layu: [
      // DISKRIMINATIF: setengah selesai lebih berat daripada belum mulai
      { id: "Prioritas yang berpindah sebelum yang sebelumnya sempat diselesaikan, karena setengah selesai terasa lebih berat daripada belum mulai.",
        en: "Priorities shifting before the previous one could be completed, because half-finished weighs more on you than not started." },
      { id: "Janji yang dianggap lentur.", en: "Promises treated as flexible." },
      { id: "Diminta memutuskan cepat pada hal yang datanya belum lengkap.",
        en: "Being asked to decide quickly on something whose data is incomplete." }
    ]
  },

  mengisi_energi: {
    inti: { id: "Orang berkata bahwa suatu urusan aman karena ada kamu, dan itu mengisi ulang tenagamu.",
            en: "Someone says a matter is safe because you are on it, and that refills you." },
    poin: [
      { id: "Menyelesaikan sesuatu yang sudah lama menggantung.",
        en: "Finishing something that has been hanging for a long time." },
      { id: "Menemukan sumber kesalahan yang selama ini tidak ketahuan.",
        en: "Finding the source of an error nobody had traced." },
      { id: "Melihat sistem yang kamu susun tetap jalan saat kamu tidak ada.",
        en: "Seeing a system you built keep running while you are away." }
    ],
    // DISKRIMINATIF: merapikan sebagai pemulih, bukan penghindaran
    tutup: { id: "Kamu juga terisi oleh kegiatan yang bagi orang lain terlihat sepele: merapikan ruang, menyusun ulang berkas, membuat daftar untuk minggu depan. Itu bukan menghindari pekerjaan yang sebenarnya, melainkan cara kamu mengembalikan rasa terkendali.",
             en: "You are also filled by activities others find trivial: tidying a space, reorganising files, making next week's list. That is not avoiding the real work; it is how you restore a sense of things being in hand." }
  },

  saat_belajar: {
    inti: { id: "Kamu perlu tahu strukturnya lebih dulu sebelum bisa belajar dengan tenang.",
            en: "You need the structure first before you can learn calmly." },
    paragraf: [
      { id: "Apa yang akan dipelajari, sampai mana, dan bagaimana dinilai. Materi yang disampaikan berurutan akan kamu kuasai dengan rapi, sementara kelas yang melompat-lompat membuatmu kehilangan pegangan meskipun isinya kamu mampu. Kamu cenderung menyiapkan diri jauh sebelum ujian dan tidak nyaman belajar mendadak.",
        en: "What will be covered, how far, and how it is assessed. Material delivered in sequence you master cleanly, while a class that jumps around leaves you without a handhold even when the content is within reach. You tend to prepare well ahead of exams and are uncomfortable cramming." }
    ],
    // DISKRIMINATIF: kuat di ketekunan berbulan-bulan, bukan di tugas semalam
    sorot: { id: "Kekuatanmu sering baru terlihat pada mata kuliah yang menuntut ketekunan berbulan-bulan, bukan pada tugas yang selesai dalam semalam.",
             en: "Your strength often shows only in subjects that demand months of persistence, not in tasks finished overnight." }
  },

  harga_diam: {
    inti: { id: "Kecemasan yang terus menyala pelan: selalu ada yang terlewat, dan kamu tidak pernah benar-benar bisa berhenti memikirkan pekerjaan.",
            en: "An anxiety that burns low but never goes out: something is always missed, and you can never quite stop thinking about work." },
    terjadi: {
      judul: { id: "Apa yang perlahan terjadi", en: "What slowly happens" },
      paragraf: [
        { id: "Kamu mungkin sanggup bertahan lama di tempat yang serba berubah dan tidak ada yang pasti. Kamu akan tetap berusaha merapikan sebisamu.",
          en: "You may last a long time somewhere in constant flux where nothing is settled. You will keep trying to tidy what you can." },
        // DISKRIMINATIF: meragukan diri padahal keadaannya yang bermasalah
        { id: "Karena hasil kerjamu tidak pernah sempat rapi, kamu mulai meragukan kemampuanmu sendiri, padahal yang bermasalah adalah keadaannya, bukan dirimu.",
          en: "Because your output never gets a chance to be in order, you start doubting your own ability, when what is wrong is the conditions and not you." },
        { id: "Sebagian orang akhirnya bekerja jauh lebih lama daripada yang dibayar, bukan karena ambisius, melainkan karena tidak bisa tenang meninggalkan sesuatu yang belum beres.",
          en: "Some people end up working far longer than they are paid for, not out of ambition but because they cannot rest leaving something unfinished." }
      ]
    },
    menolong: {
      judul: { id: "Apa yang menolong", en: "What helps" },
      paragraf: [
        { id: "Satu wilayah kecil yang benar-benar kamu kendalikan dan boleh kamu rapikan sepenuhnya sudah cukup menahan itu.",
          en: "One small territory genuinely under your control, that you are allowed to order completely, is enough to hold that off." }
      ],
      sorot: { id: "Yang perlu dijaga hidup bukan sistemnya, melainkan pengalaman melihat sesuatu selesai dengan benar.",
               en: "What needs to stay alive is not the system but the experience of seeing something finished properly." }
    }
  }
}
};

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_KELOMPOK_CONTENT;
