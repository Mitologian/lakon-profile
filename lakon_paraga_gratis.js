/* ========================================================================
   LAKON™ — LAPIS PARAGA — BAGIAN GRATIS

   BERKAS INI DIMUAT index.html (halaman peserta).
   Isinya HANYA bagian yang memang ditampilkan gratis.

   KENAPA DIPECAH
   Sebelumnya bagian gratis dan berbayar ada di berkas yang sama, dan
   index.html memuat berkas itu seluruhnya. Artinya siapa pun bisa membuka
   namasitus.pages.dev/lakon_paraga.js langsung di browser dan membaca
   seluruh isi berbayar, tanpa perlu Ctrl+P maupun Inspect Element.

   Blur maupun tidak-merender-di-DOM keduanya TIDAK CUKUP: selama berkasnya
   dikirim ke browser, isinya bisa diambil.

   Sekarang isi berbayar ada di berkas terpisah yang HANYA dimuat
   analyst.html. PDF berbayar dibuat dari dasbor analis lalu dikirim ke
   pembeli.

   Field `cuilan` adalah satu kalimat yang SENGAJA ditampilkan sebagai
   penggoda di daftar isi laporan lengkap. Ia ada di sini karena memang
   dimaksudkan terbaca, bukan karena kelolosan.
======================================================================== */

var LAKON_PARAGA_CONTENT = {
  "Yasa|Reka": {
    "en": "The Visionary Maker",
    "kekuatan": [
      {
        "id": "Menerjemahkan gagasan besar jadi sesuatu yang bisa dipegang, tanpa kehilangan maksud aslinya.",
        "en": "Turning a large idea into something that can be held, without losing what it was for."
      },
      {
        "id": "Melihat lebih awal kalau sebuah rancangan akan dipakai dengan cara yang tidak diinginkan pembuatnya.",
        "en": "Seeing early when a design will be used in a way its maker never intended."
      },
      {
        "id": "Bertahan lama pada pekerjaan teknis yang kamu percayai, jauh melewati titik orang lain menyerah.",
        "en": "Staying with technical work you believe in, well past the point where others give up."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak cukup bertanya apakah ini bisa dibuat. Kamu bertanya apakah ini layak dibuat.",
        "en": "Asking whether this can be built is not enough for you. You ask whether it should be."
      },
      "paragraf": [
        {
          "id": "Keterampilan tangan bertemu dengan syarat bahwa hasilnya harus berarti bagi seseorang. Akibatnya kamu bisa menolak solusi yang paling efisien kalau menurutmu hasilnya akan dipakai dengan cara yang salah, dan itu keputusan yang sulit dijelaskan kepada orang yang menilai pekerjaan dari waktu dan biaya.",
          "en": "Hand skill meets a requirement that the result must matter to someone. So you can refuse the most efficient solution when you believe the result will be used the wrong way, and that is a hard decision to explain to anyone judging work by time and cost."
        },
        {
          "id": "Pembuat lain berhenti ketika benda itu berfungsi. Kamu berhenti ketika benda itu berfungsi dan terasa benar bagi orang yang akan memakainya, dan jarak antara dua titik itu sering tidak terlihat oleh siapa pun selain kamu.",
          "en": "Other makers stop when the thing works. You stop when it works and feels right for whoever will use it, and the distance between those two points is often invisible to everyone but you."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menyempurnakan bagian yang tidak akan diperhatikan siapa pun, karena kamu tahu bagian itu ada.",
      "en": "You perfect the part nobody will notice, because you know it is there."
    }
  },
  "Yasa|Logika": {
    "en": "The Systems Engineer",
    "kekuatan": [
      {
        "id": "Merancang cara kerja yang bisa diulang orang lain tanpa kehadiranmu.",
        "en": "Designing a method others can repeat without you present."
      },
      {
        "id": "Menemukan titik bocor di proses yang sudah lama dianggap beres.",
        "en": "Finding the leak in a process long considered settled."
      },
      {
        "id": "Memperkirakan bagian mana yang akan patah lebih dulu saat bebannya bertambah.",
        "en": "Predicting which part gives way first when the load increases."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak hanya membangun bendanya. Kamu membangun cara membuatnya lagi.",
        "en": "You do not only build the thing. You build the way to make it again."
      },
      "paragraf": [
        {
          "id": "Keterampilan tangan bertemu dengan dorongan merancang. Akibatnya, hasil kerjamu yang sebenarnya sering bukan benda yang jadi, melainkan cara kerja yang kamu tinggalkan: alat bantu yang kamu buat sendiri, urutan yang kamu perbaiki, ukuran yang kamu tetapkan supaya orang berikutnya tidak perlu menebak.",
          "en": "Hand skill meets an urge to design. So your real output is often not the finished object but the method you leave behind: the jig you built yourself, the sequence you improved, the tolerance you set so the next person need not guess."
        },
        {
          "id": "Kamu sulit mengerjakan sesuatu dua kali dengan cara yang sama tanpa memperbaikinya, meskipun cara lamanya masih berjalan. Bagi sebagian orang itu terlihat seperti tidak bisa diam. Bagimu cara yang belum optimal terasa seperti hutang yang belum dibayar.",
          "en": "You struggle to do the same thing twice the same way without improving it, even when the old way still works. To some that looks like restlessness. To you an unoptimised method feels like an unpaid debt."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu memperbaiki hal yang tidak diminta karena melihat celahnya, lalu sistem yang lebih baik itu jadi sistem yang hanya kamu pahami.",
      "en": "You fix what nobody asked you to fix because you saw the gap, and the better system becomes a system only you understand."
    }
  },
  "Yasa|Jaga": {
    "en": "The Master Craftsperson",
    "kekuatan": [
      {
        "id": "Menjaga mutu tetap sama justru saat semua orang sedang terburu-buru.",
        "en": "Holding quality steady exactly when everyone else is rushing."
      },
      {
        "id": "Menghasilkan pekerjaan yang tidak perlu diperiksa ulang oleh orang lain.",
        "en": "Producing work nobody needs to recheck."
      },
      {
        "id": "Mengingat cara yang pernah gagal, sehingga tim tidak mengulangi jalan buntu yang sama.",
        "en": "Remembering what failed before, so the team does not walk the same dead end twice."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Bagimu mutu bukan pilihan yang diambil tiap kali, melainkan cara kerja yang sudah tidak ditawar lagi.",
        "en": "To you quality is not a choice made each time, but a way of working no longer up for negotiation."
      },
      "paragraf": [
        {
          "id": "Keterampilan tangan bertemu dengan rasa tanggung jawab. Akibatnya standarmu sudah berdiri sebelum tekanan datang, sehingga saat tenggat mendekat kamu tidak perlu memutuskan apakah akan berkompromi. Keputusan itu sudah diambil jauh sebelumnya, dan itu yang membuat hasilmu bisa diramalkan.",
          "en": "Hand skill meets a sense of duty. So your standard is already in place before the pressure arrives, and when a deadline closes in you do not have to decide whether to compromise. That decision was made long before, and it is what makes your output predictable."
        },
        {
          "id": "Orang lain menyebutnya konsisten. Dari dalam rasanya berbeda: menurunkan mutu terasa seperti mengingkari sesuatu, bukan seperti mengambil jalan pintas yang wajar.",
          "en": "Others call it consistency. From the inside it feels different: lowering the standard feels like breaking something, not like taking a reasonable shortcut."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu memperbaiki diam-diam pekerjaan orang lain yang tidak memenuhi standarmu, tanpa memberi tahu mereka.",
      "en": "You quietly fix other people's work that falls short of your standard, without telling them."
    }
  },
  "Yasa|Guna": {
    "en": "The Field Expert",
    "kekuatan": [
      {
        "id": "Mengenali sumber masalah dari bunyi, getaran, atau rasa, sebelum alat ukur menunjukkannya.",
        "en": "Recognising the source of a fault from sound, vibration, or feel, before an instrument shows it."
      },
      {
        "id": "Bertindak tepat saat keadaannya tidak cocok dengan prosedur mana pun.",
        "en": "Acting correctly when the situation fits no procedure at all."
      },
      {
        "id": "Tetap tenang dan berguna di situasi yang membuat orang lain panik.",
        "en": "Staying calm and useful in situations that make other people panic."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu mengenali masalahnya lewat tangan sebelum bisa menjelaskannya lewat kata.",
        "en": "You recognise the problem through your hands before you can put it into words."
      },
      "paragraf": [
        {
          "id": "Keterampilan tangan bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu sering tahu ada yang tidak beres dari bunyi, getaran, atau rasa, jauh sebelum alat ukur menunjukkannya. Ini bukan tebakan; ini ribuan jam yang mengendap jadi insting, dan sulit dijelaskan kepada orang yang belum pernah memegangnya.",
          "en": "Hand skill meets a way of moving that reads the situation directly. So you often know something is off from a sound, a vibration, or a feel, long before an instrument shows it. This is not guesswork; it is thousands of hours settled into instinct, and hard to explain to anyone who has never held the thing."
        },
        {
          "id": "Karena itu kamu tidak butuh prosedur lengkap untuk mulai bertindak, dan sering sudah setengah jalan menyelesaikan sementara yang lain masih mencari dokumennya. Itu kekuatan terbesarmu, dan sekaligus sumber sebagian besar masalahmu dengan orang yang bekerja lewat aturan.",
          "en": "So you do not need a full procedure to start acting, and are often half done while others are still looking for the document. That is your greatest strength, and also the source of most of your friction with people who work through rules."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu jarang mencatat apa yang sudah kamu kerjakan, karena mencatat terasa lambat dibanding mengerjakan.",
      "en": "You rarely record what you have done, because recording feels slow next to doing."
    }
  },
  "Nalar|Reka": {
    "en": "The Meaning-Seeker",
    "kekuatan": [
      {
        "id": "Menemukan arti sebuah temuan bagi orang yang hidupnya kena dampaknya.",
        "en": "Finding what a result means for the people whose lives it touches."
      },
      {
        "id": "Menggali alasan sebenarnya di balik jawaban yang diberikan orang.",
        "en": "Digging out the real reason behind the answer people gave."
      },
      {
        "id": "Menjelaskan hal yang rumit tanpa membuat pendengarnya merasa bodoh.",
        "en": "Explaining something complex without making the listener feel stupid."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Pertanyaanmu selalu berakhir pada orang, bahkan ketika berangkat dari angka.",
        "en": "Your questions always end at people, even when they start from numbers."
      },
      "paragraf": [
        {
          "id": "Rasa ingin tahu bertemu dengan syarat bahwa temuan itu harus berarti. Akibatnya kamu bisa meninggalkan penelitian yang metodologinya rapi kalau hasilnya tidak berimplikasi pada siapa pun, dan itu keputusan yang sulit dibela di lingkungan yang menilai kerja dari jumlah publikasi atau laporan.",
          "en": "Curiosity meets a requirement that the finding must matter. So you can abandon methodologically clean research when the result has no implication for anyone, and that is a hard call to defend where work is judged by volume of publication or reports."
        },
        {
          "id": "Peneliti lain berhenti saat datanya sudah menjawab pertanyaannya. Kamu berhenti saat sudah tahu apa artinya bagi orang yang hidupnya kena dampaknya, dan bagian kedua itu sering tidak diminta siapa pun.",
          "en": "Other researchers stop when the data answers the question. You stop when you know what it means for the people whose lives it touches, and that second part is often asked for by no one."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menunda menyimpulkan karena takut kesimpulanmu akan menyederhanakan orang yang kamu teliti.",
      "en": "You delay concluding because you fear your conclusion will flatten the people you studied."
    }
  },
  "Nalar|Logika": {
    "en": "The Pure Analyst",
    "kekuatan": [
      {
        "id": "Membangun cara menguji yang tahan terhadap dugaanmu sendiri.",
        "en": "Building a test that holds up against your own hunch."
      },
      {
        "id": "Menemukan kesalahan berpikir yang membuat seluruh keputusan berdiri di tempat yang salah.",
        "en": "Finding the reasoning error that put an entire decision on the wrong footing."
      },
      {
        "id": "Menahan kesimpulan sampai buktinya benar-benar cukup, meski semua orang sudah ingin melanjutkan.",
        "en": "Holding back a conclusion until the evidence is genuinely enough, even when everyone wants to move on."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Yang paling kamu curigai adalah jawaban yang paling kamu sukai.",
        "en": "What you distrust most is the answer you like most."
      },
      "paragraf": [
        {
          "id": "Rasa ingin tahu bertemu dengan dorongan merancang, dan hasilnya bukan sekadar menyelidiki, melainkan membangun cara menyelidiki yang tahan terhadap dirimu sendiri. Kamu tahu kesimpulan yang menyenangkan adalah yang paling mudah lolos, jadi kamu memasang pengujian paling ketat justru di sana.",
          "en": "Curiosity meets an urge to design, and the result is not merely investigating but building a method of investigation that holds up against yourself. You know the pleasing conclusion is the one most likely to slip through, so you put the hardest test exactly there."
        },
        {
          "id": "Karena itu kamu jarang tergesa mengumumkan temuan, dan sering terlihat lebih ragu daripada orang yang datanya jauh lebih tipis. Yang terlihat sebagai keraguan sebenarnya adalah standar yang belum terpenuhi.",
          "en": "So you rarely rush to announce a finding, and often look less certain than someone with far thinner data. What reads as hesitation is a standard not yet met."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menunggu tingkat kepastian yang, kalau jujur, tidak akan pernah tercapai dengan data yang ada.",
      "en": "You wait for a level of certainty that, honestly, the available data will never reach."
    }
  },
  "Nalar|Jaga": {
    "en": "The Methodical Investigator",
    "kekuatan": [
      {
        "id": "Menghasilkan pekerjaan yang bisa dilanjutkan orang lain bertahun-tahun kemudian.",
        "en": "Producing work someone else can pick up years later."
      },
      {
        "id": "Menjaga data tetap bersih sebelum ada yang menganalisisnya.",
        "en": "Keeping the data clean before anyone analyses it."
      },
      {
        "id": "Mencatat jalan buntu, bukan hanya jalan yang berhasil.",
        "en": "Recording the dead ends, not only the routes that worked."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Bagimu prosesnya adalah bagian dari temuannya, bukan jalan menuju temuan.",
        "en": "To you the process is part of the finding, not the road to it."
      },
      "paragraf": [
        {
          "id": "Rasa ingin tahu bertemu dengan rasa tanggung jawab. Akibatnya, hasil yang kebetulan benar lewat proses yang cacat tetap kamu anggap tidak sah, dan kamu akan mengulangnya. Bagi orang lain itu terlihat berlebihan, karena jawabannya toh sama.",
          "en": "Curiosity meets a sense of duty. So a result that happens to be right through a flawed process is still invalid to you, and you will redo it. To others that looks excessive, since the answer is the same anyway."
        },
        {
          "id": "Kamu juga mencatat apa yang tidak berhasil, bukan hanya yang berhasil, karena orang berikutnya perlu tahu jalan buntu itu sudah pernah ditempuh. Sedikit orang melakukannya, dan itu yang membuat pekerjaanmu bisa dilanjutkan orang lain bertahun-tahun kemudian.",
          "en": "You also record what did not work, not only what did, because the next person needs to know that dead end has been walked. Few people do this, and it is what lets your work be continued by someone years later."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menahan laporan sampai seluruhnya rapi, dan karena selalu ada yang belum rapi, sebagian pekerjaanmu tidak pernah dilaporkan sama sekali.",
      "en": "You hold a report back until everything is in order, and because something always is not, part of your work never gets reported at all."
    }
  },
  "Nalar|Guna": {
    "en": "The Applied Problem-Solver",
    "kekuatan": [
      {
        "id": "Berpindah dari diagnosis ke tindakan dalam hitungan hari, bukan bulan.",
        "en": "Moving from diagnosis to action in days rather than months."
      },
      {
        "id": "Memecah kebuntuan saat tim terlalu lama berputar di pembahasan.",
        "en": "Breaking the deadlock when a team circles too long in discussion."
      },
      {
        "id": "Menemukan perbaikan yang cukup baik dan bisa dikerjakan besok pagi.",
        "en": "Finding a fix good enough to start on tomorrow morning."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu berhenti menyelidiki di titik yang sudah cukup untuk bertindak, bukan di titik semuanya jelas.",
        "en": "You stop investigating at the point where it is enough to act, not where everything is clear."
      },
      "paragraf": [
        {
          "id": "Rasa ingin tahu bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu punya rem yang tidak dimiliki kebanyakan orang yang suka menyelidiki: begitu tahu cukup untuk memperbaiki keadaan, kamu berhenti mencari dan mulai mengerjakan.",
          "en": "Curiosity meets a way of moving that reads the situation directly. So you have a brake most investigative people lack: the moment you know enough to improve things, you stop looking and start doing."
        },
        {
          "id": "Ini membuatmu jauh lebih cepat daripada rekan-rekanmu, dan sesekali membuatmu melewatkan sebab yang lebih dalam. Kamu biasanya baru tahu bedanya ketika masalah yang sama datang untuk ketiga kalinya.",
          "en": "This makes you much faster than your peers, and occasionally makes you miss the deeper cause. You usually learn the difference when the same problem arrives a third time."
        }
      ]
    },
    "cuilan": {
      "id": "Rem yang membuatmu cepat juga membuatmu berhenti terlalu awal.",
      "en": "The brake that makes you fast also makes you stop too early."
    }
  },
  "Karya|Reka": {
    "en": "The Story Shaper",
    "kekuatan": [
      {
        "id": "Membuat orang merasakan sesuatu, bukan sekadar memahaminya.",
        "en": "Making people feel something rather than merely understand it."
      },
      {
        "id": "Menjaga agar karya tim tidak kehilangan alasannya di tengah jalan.",
        "en": "Keeping the team's work from losing its reason along the way."
      },
      {
        "id": "Mengenali perbedaan antara cukup bagus dan benar-benar pas.",
        "en": "Telling the difference between good enough and actually right."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak bisa mengerjakan karya yang tidak kamu percayai, dan itu bukan soal disiplin.",
        "en": "You cannot work on something you do not believe in, and that is not about discipline."
      },
      "paragraf": [
        {
          "id": "Minat mencipta bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya, kamu punya dua saringan yang harus lolos sekaligus sebelum sebuah pekerjaan terasa layak: bentuknya harus bisa kamu tentukan, dan tujuannya harus bisa kamu bela.",
          "en": "An interest in making meets a requirement that the thing must matter. So two filters must both clear before a piece of work feels worth doing: you must be able to shape it, and you must be able to defend what it is for."
        },
        {
          "id": "Kreator lain bisa mengerjakan brief apa pun dengan baik. Kamu bisa juga, tapi hasilnya akan terasa berbeda bagi dirimu sendiri, dan biasanya kamu yang paling tahu bedanya sebelum ada yang menyebutkan.",
          "en": "Other makers can execute any brief well. So can you, but the result will feel different to you, and you are usually the first to know the difference before anyone names it."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menunda memulai sampai gambarannya cukup jelas di kepala, dan waktu itu bisa jauh lebih lama daripada yang kamu akui.",
      "en": "You put off starting until the picture is clear enough in your head, and that can take far longer than you admit."
    }
  },
  "Karya|Logika": {
    "en": "The Creative Architect",
    "kekuatan": [
      {
        "id": "Menjelaskan kenapa sebuah pilihan kreatif bekerja, bukan hanya merasakannya.",
        "en": "Explaining why a creative choice works, not only sensing that it does."
      },
      {
        "id": "Membangun aturan main yang membuat tim lain bisa menghasilkan karya yang konsisten.",
        "en": "Building the rules that let another team produce consistent work."
      },
      {
        "id": "Melihat lebih awal kalau sebuah keputusan visual akan menyulitkan di seratus tempat berikutnya.",
        "en": "Seeing early when one visual decision will cause trouble in a hundred places to come."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu bisa membuktikan seleramu, dan itu yang membedakanmu di ruang rapat.",
        "en": "You can make a case for your taste, and that is what sets you apart in a meeting."
      },
      "paragraf": [
        {
          "id": "Minat mencipta bertemu dengan dorongan merancang. Akibatnya kamu jarang berhenti di “rasanya lebih bagus begini”. Kamu tahu kenapa, bisa menyebutkan alasannya, dan bisa menunjukkan apa yang terjadi kalau dipilih yang sebaliknya. Sedikit orang kreatif punya itu, dan itulah yang membuat pendapatmu bertahan di ruangan yang penuh angka.",
          "en": "An interest in making meets an urge to design. So you rarely stop at “it just feels better this way”. You know why, can name the reason, and can show what happens if the opposite is chosen. Few creative people have that, and it is what makes your view survive a room full of numbers."
        },
        {
          "id": "Yang paling kamu nikmati bukan satu karya yang bagus, melainkan sistem yang membuat karya bagus bisa muncul berulang tanpa kamu kerjakan sendiri. Karena itu minatmu sering habis tepat setelah kerangkanya berdiri, dan pekerjaan mengisinya terasa seperti pekerjaan orang lain.",
          "en": "What you enjoy most is not one good piece but a system that lets good pieces appear again without you making them. So your interest often runs out right after the framework stands, and filling it in feels like someone else's job."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu membangun kerangkanya sebelum ada cukup karya untuk membuktikan kerangkanya benar.",
      "en": "You build the framework before there is enough work to prove the framework right."
    }
  },
  "Karya|Jaga": {
    "en": "The Steady Craftsman",
    "kekuatan": [
      {
        "id": "Menghasilkan karya dengan mutu yang sama, hari baik maupun hari buruk.",
        "en": "Producing work of the same quality on a good day and a bad one."
      },
      {
        "id": "Memenuhi tenggat kreatif tanpa menurunkan standar.",
        "en": "Meeting a creative deadline without lowering the standard."
      },
      {
        "id": "Menguasai satu teknik sampai ke tingkat yang membuat orang lain datang bertanya.",
        "en": "Mastering one technique to the point where others come to ask you."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak menunggu inspirasi, karena kamu sudah tahu inspirasi datang setelah mulai, bukan sebelum.",
        "en": "You do not wait for inspiration, because you know it arrives after starting, not before."
      },
      "paragraf": [
        {
          "id": "Minat mencipta bertemu dengan rasa tanggung jawab. Akibatnya kamu memperlakukan pekerjaan kreatif seperti latihan seorang atlet: datang di jam yang sama, duduk, dan mulai, terlepas dari sedang ingin atau tidak. Sebagian besar kreator tidak sanggup melakukan ini, dan itulah kenapa hasilmu bisa diramalkan sementara hasil mereka tidak.",
          "en": "An interest in making meets a sense of duty. So you treat creative work like an athlete's training: arrive at the same hour, sit down, and begin, whether or not you feel like it. Most makers cannot do this, and it is why your output can be predicted while theirs cannot."
        },
        {
          "id": "Tenggat bagimu bukan ancaman melainkan bentuk. Ruang yang tidak berbatas justru membuatmu sulit memulai, dan itu kebalikan dari yang dialami kebanyakan orang di bidang yang sama denganmu.",
          "en": "A deadline to you is not a threat but a shape. Unbounded space is what makes it hard for you to begin, and that is the opposite of most people in your field."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menyempurnakan teknik pada karya yang arahnya sebenarnya sudah salah sejak awal, karena mengerjakan terasa lebih nyaman daripada mempertanyakan.",
      "en": "You perfect the technique on work whose direction was wrong from the start, because making feels more comfortable than questioning."
    }
  },
  "Karya|Guna": {
    "en": "The Spontaneous Creator",
    "kekuatan": [
      {
        "id": "Menangkap momen yang tidak akan datang dua kali.",
        "en": "Catching a moment that will not come twice."
      },
      {
        "id": "Mengubah arah di tengah jalan saat membaca bahwa yang direncanakan tidak akan bekerja.",
        "en": "Changing course midway when you read that the plan will not work."
      },
      {
        "id": "Membuat sesuatu terasa hidup, bukan hanya rapi.",
        "en": "Making something feel alive rather than merely tidy."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Karya terbaikmu lahir dari keadaan, dan karena itu tidak bisa kamu ulang.",
        "en": "Your best work is born from the situation, and so you cannot repeat it."
      },
      "paragraf": [
        {
          "id": "Minat mencipta bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya bahan bakumu bukan hanya alat dan gagasan, melainkan juga momen: siapa yang hadir, bagaimana suasananya, apa yang baru saja terjadi. Karya yang lahir begitu punya kualitas yang sulit ditiru kreator yang lebih terencana.",
          "en": "An interest in making meets a way of moving that reads the situation directly. So your raw material is not only tools and ideas but the moment: who is present, what the room feels like, what just happened. Work born that way has a quality more planned makers struggle to imitate."
        },
        {
          "id": "Ongkosnya datang dari sumber yang sama. Ketika diminta mengulang sesuatu yang dulu berhasil, kamu sering tidak bisa, karena yang membuatnya berhasil bukan tekniknya melainkan keadaan yang sudah lewat. Ini sering dibaca sebagai tidak konsisten, padahal justru itu cara kerjanya.",
          "en": "The cost comes from the same source. Asked to repeat something that once worked, you often cannot, because what made it work was not the technique but a situation now gone. This reads as inconsistency, when it is in fact how the work works."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu jarang menyimpan proses, karena bagimu yang penting hasilnya dan momennya sudah lewat.",
      "en": "You rarely keep the process, because to you the result is what matters and the moment has passed."
    }
  },
  "Bakti|Reka": {
    "en": "The Human Developer",
    "kekuatan": [
      {
        "id": "Melihat apa yang sebenarnya menahan seseorang, bukan apa yang ia keluhkan.",
        "en": "Seeing what is actually holding someone back, rather than what they complain about."
      },
      {
        "id": "Menemani proses yang panjang tanpa memaksa orangnya bergerak lebih cepat.",
        "en": "Staying through a long process without pushing the person to move faster."
      },
      {
        "id": "Membuat orang merasa aman mengakui hal yang belum bisa ia akui di tempat lain.",
        "en": "Making people feel safe admitting what they cannot admit anywhere else."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak bisa berhenti di jam kerja, karena yang kamu dampingi bukan berkas.",
        "en": "You cannot stop at closing time, because what you carry is not a file."
      },
      "paragraf": [
        {
          "id": "Minat menumbuhkan orang bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya kamu tidak bisa memperlakukan pendampingan sebagai tugas yang selesai saat sesinya berakhir. Kamu memikirkan orangnya di perjalanan pulang, dan itu bukan kelemahan profesional melainkan cara kerjamu yang sesungguhnya.",
          "en": "An interest in growing people meets a requirement that it must matter. So you cannot treat accompaniment as a task that ends when the session does. You think about the person on the way home, and that is not a professional weakness but how your work actually functions."
        },
        {
          "id": "Karena itu kamu bekerja lebih baik pada sedikit orang secara mendalam daripada pada banyak orang secara merata. Menambah jumlah tidak menambah dampakmu; ia justru menghapus hal yang membuat pendampinganmu bekerja.",
          "en": "So you work better with a few people deeply than with many people evenly. Adding numbers does not add to your impact; it removes the thing that made your accompaniment work."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menahan penilaian yang jujur karena takut merusak hubungan yang sudah terbangun.",
      "en": "You hold back an honest assessment for fear of damaging a relationship you built."
    }
  },
  "Bakti|Logika": {
    "en": "The System of People",
    "kekuatan": [
      {
        "id": "Menemukan sebab di balik masalah orang yang selama ini dianggap masalah pribadi.",
        "en": "Finding the cause behind a people problem everyone treated as personal."
      },
      {
        "id": "Merancang cara kerja yang membuat orang berkembang tanpa perlu kamu hadir.",
        "en": "Designing a way of working that grows people without you being present."
      },
      {
        "id": "Mengambil keputusan yang adil meski tidak menyenangkan siapa pun di ruangan.",
        "en": "Making a fair decision even when it pleases no one in the room."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu peduli pada orang, dan cara kamu menunjukkannya jarang terlihat seperti kepedulian.",
        "en": "You care about people, and the way you show it rarely looks like caring."
      },
      "paragraf": [
        {
          "id": "Minat menumbuhkan orang bertemu dengan dorongan merancang. Akibatnya kepedulianmu berbentuk aturan yang adil, jalur karir yang jelas, dan beban kerja yang masuk akal, bukan pelukan atau percakapan panjang. Orang yang mengukur kepedulian dari kehangatan sering menyimpulkan kamu tidak peduli, padahal kamu sedang mengurus hal yang akan mereka rasakan bertahun-tahun.",
          "en": "An interest in growing people meets an urge to design. So your care takes the form of fair rules, clear paths, and sensible workloads, rather than hugs or long conversations. People who measure care by warmth often conclude you do not care, when you are handling what they will feel for years."
        },
        {
          "id": "Kamu juga sanggup mengambil keputusan yang merugikan beberapa orang demi lebih banyak orang, dan tetap tidur nyenyak kalau hitungannya benar. Sedikit orang di bidang ini sanggup melakukan itu, dan itu sekaligus yang membuatmu paling sering disalahpahami.",
          "en": "You can also make a decision that costs a few people for the sake of many, and still sleep if the arithmetic holds. Few people in this field can do that, and it is also what gets you most misread."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menjelaskan hitungan di balik keputusanmu, tapi jarang menjelaskan kepedulian yang mendasarinya, karena bagimu itu sudah jelas.",
      "en": "You explain the arithmetic behind your decision but rarely the care underneath it, because to you that is obvious."
    }
  },
  "Bakti|Jaga": {
    "en": "The Reliable Guardian",
    "kekuatan": [
      {
        "id": "Menepati hal kecil yang orang lain sudah lupa pernah dijanjikan kepada mereka.",
        "en": "Keeping the small things others have forgotten were promised to them."
      },
      {
        "id": "Memberi layanan dengan mutu yang sama, siapa pun yang datang dan sesibuk apa pun harinya.",
        "en": "Giving the same quality of service whoever arrives and however busy the day."
      },
      {
        "id": "Memastikan tidak ada orang yang jatuh di antara celah sistem.",
        "en": "Making sure nobody falls through the gaps in the system."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kepedulianmu berbentuk kehadiran yang bisa diramalkan, bukan kehangatan yang meluap.",
        "en": "Your care takes the form of presence people can predict, not warmth that overflows."
      },
      "paragraf": [
        {
          "id": "Minat menumbuhkan orang bertemu dengan rasa tanggung jawab. Akibatnya yang kamu berikan bukan kejutan yang menyenangkan, melainkan kepastian: kamu ada di tempat yang sama, pada jam yang sama, dengan mutu yang sama. Bagi orang yang hidupnya tidak menentu, itu jenis kasih yang paling jarang mereka terima.",
          "en": "An interest in growing people meets a sense of duty. So what you give is not a pleasant surprise but certainty: you are in the same place, at the same hour, with the same quality. For someone whose life is unsteady, that is the rarest kind of care they receive."
        },
        {
          "id": "Kamu jarang mengucapkan hal yang menyentuh, dan orang tetap merasa dipegang. Yang mereka ingat bukan kata-katamu, melainkan bahwa kamu tidak pernah tidak datang.",
          "en": "You rarely say anything moving, and people still feel held. What they remember is not your words but that you never failed to show up."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menyerap pekerjaan yang bukan bagianmu supaya tidak ada yang terlantar, dan tidak memberi tahu siapa pun.",
      "en": "You absorb work that is not yours so nobody is left stranded, and tell no one."
    }
  },
  "Bakti|Guna": {
    "en": "The Hands-On Helper",
    "kekuatan": [
      {
        "id": "Bertindak saat orang butuh bantuan, sebelum ada yang memutuskan siapa yang harus menangani.",
        "en": "Acting when someone needs help, before anyone has decided who should handle it."
      },
      {
        "id": "Membangun kepercayaan lewat hal yang kamu lakukan, bukan lewat hal yang kamu katakan.",
        "en": "Building trust through what you do rather than what you say."
      },
      {
        "id": "Tetap hadir penuh di situasi yang membuat orang lain mundur.",
        "en": "Staying fully present in situations that make other people step back."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu sudah membantu sebelum sempat memikirkan apakah itu bagianmu.",
        "en": "You have already helped before you considered whether it was your job."
      },
      "paragraf": [
        {
          "id": "Minat menumbuhkan orang bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya kamu jarang menunggu izin, jarang menunggu jadwal, dan jarang menunggu orang yang lebih berwenang. Kamu melihat orangnya butuh, dan kamu bergerak. Itu membuatmu sangat berguna di saat genting, dan sering bermasalah dengan orang yang bekerja lewat prosedur.",
          "en": "An interest in growing people meets a way of moving that reads the situation directly. So you rarely wait for permission, a schedule, or someone more senior. You see the person needs it, and you move. That makes you valuable in a crisis, and often puts you at odds with people who work through procedure."
        },
        {
          "id": "Karena itu kepercayaan yang kamu bangun datang dari hal yang terlihat, bukan dari kata-kata. Orang percaya padamu karena pernah melihatmu melakukan sesuatu untuk mereka, bukan karena kamu menjelaskan bahwa kamu peduli.",
          "en": "So the trust you build comes from what people saw, not from words. They trust you because they once watched you do something for them, not because you explained that you cared."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu membantu lebih cepat daripada orangnya sempat mencoba sendiri, karena melihat orang kesulitan terasa tidak tertahankan.",
      "en": "You help faster than the person can try for themselves, because watching someone struggle feels unbearable."
    }
  },
  "Karsa|Reka": {
    "en": "The Vision-Led Entrepreneur",
    "kekuatan": [
      {
        "id": "Membuat orang ingin ikut sebelum ada yang bisa dijanjikan kepada mereka.",
        "en": "Making people want to join before there is anything you can promise them."
      },
      {
        "id": "Melihat peluang di tempat yang belum dianggap peluang oleh siapa pun.",
        "en": "Seeing an opening where nobody yet considers there is one."
      },
      {
        "id": "Menjaga sebuah usaha tetap ingat kenapa ia dimulai, saat tekanannya sudah berat.",
        "en": "Keeping a venture remembering why it began, when the pressure is heavy."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu tidak bisa menjual sesuatu yang tidak kamu percayai, dan orang bisa merasakannya.",
        "en": "You cannot sell what you do not believe in, and people can tell."
      },
      "paragraf": [
        {
          "id": "Dorongan menggerakkan bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya daya bujukmu bukan teknik yang bisa kamu nyalakan kapan saja. Ia bekerja luar biasa saat kamu percaya, dan hampir hilang sama sekali saat kamu tidak. Orang yang pernah melihatmu di kedua keadaan itu akan mengira kamu dua orang yang berbeda.",
          "en": "A drive to move things meets a requirement that it must matter. So your persuasiveness is not a technique you can switch on. It works remarkably when you believe, and nearly vanishes when you do not. Anyone who has seen you in both states will think they met two different people."
        },
        {
          "id": "Karena itu yang kamu bangun cenderung mengumpulkan orang yang datang bukan karena bayarannya. Itu kekuatan besar di awal, dan jadi kerentanan saat usahanya tumbuh dan mulai membutuhkan orang yang bekerja karena pekerjaannya, bukan karena ceritanya.",
          "en": "So what you build tends to gather people who came for something other than the pay. That is a great strength early on, and becomes a vulnerability as it grows and starts needing people who work for the work, not for the story."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu memulai hal baru sebelum yang lama benar-benar berdiri, karena tahap awal jauh lebih menghidupkan daripada tahap merawat.",
      "en": "You start something new before the previous thing genuinely stands, because the beginning is far more alive than the maintaining."
    }
  },
  "Karsa|Logika": {
    "en": "The Strategic Operator",
    "kekuatan": [
      {
        "id": "Mengubah ambisi besar jadi urutan langkah yang jelas siapa mengerjakan apa.",
        "en": "Turning a large ambition into a sequence where it is clear who does what."
      },
      {
        "id": "Mengambil keputusan sulit dengan kepala dingin saat tekanannya tinggi.",
        "en": "Making a hard call with a cool head when the pressure is high."
      },
      {
        "id": "Melihat lebih awal bagian mana dari rencana yang akan patah lebih dulu.",
        "en": "Seeing early which part of the plan will give way first."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Bagimu rencana belum selesai sebelum jelas siapa mengerjakan apa dan bagaimana diukurnya.",
        "en": "To you a plan is unfinished until it is clear who does what and how it is measured."
      },
      "paragraf": [
        {
          "id": "Dorongan menggerakkan bertemu dengan dorongan merancang. Akibatnya kamu bekerja di dua tingkat sekaligus: menetapkan ke mana sesuatu harus pergi, dan membangun mekanisme yang membuatnya sampai. Bagimu keduanya satu pekerjaan, dan kamu sering heran kenapa orang lain memperlakukannya sebagai dua hal terpisah.",
          "en": "A drive to move things meets an urge to design. So you work on two levels at once: setting where something must go, and building the mechanism that gets it there. To you those are one job, and you are often puzzled that others treat them as two."
        },
        {
          "id": "Kamu juga nyaman memutuskan sebelum semua datanya lengkap, asal risikonya sudah dihitung. Yang membuat orang mengikutimu biasanya bukan kehangatan, melainkan keyakinan bahwa kamu sudah memikirkan langkah kedua dan ketiga.",
          "en": "You are also comfortable deciding before the data is complete, provided the risk has been counted. What makes people follow you is usually not warmth but the confidence that you have already thought through the second and third moves."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu bergerak lebih cepat daripada kesiapan orang di sekitarmu.",
      "en": "You move faster than the readiness of people around you."
    }
  },
  "Karsa|Jaga": {
    "en": "The Institution Builder",
    "kekuatan": [
      {
        "id": "Membangun sesuatu yang tetap berdiri setelah kamu tidak lagi mengurusnya.",
        "en": "Building something that still stands after you stop tending it."
      },
      {
        "id": "Membuat ekspektasi begitu jelas sampai tidak ada tenaga yang terbuang untuk menebak.",
        "en": "Making expectations so clear that no energy is spent guessing."
      },
      {
        "id": "Menjaga arah organisasi tetap sama saat orang-orangnya berganti.",
        "en": "Holding an organisation's direction steady as its people change."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Ukuran keberhasilanmu adalah apakah sesuatu masih berjalan setelah kamu pergi.",
        "en": "Your measure of success is whether it still runs after you leave."
      },
      "paragraf": [
        {
          "id": "Dorongan menggerakkan bertemu dengan rasa tanggung jawab. Akibatnya kamu membangun bukan untuk dipegang, melainkan untuk diwariskan. Kamu menulis prosedurnya, melatih penggantimu, dan sengaja membuat dirimu tidak lagi diperlukan, sesuatu yang jarang dilakukan orang yang punya dorongan memimpin sekuat kamu.",
          "en": "A drive to move things meets a sense of duty. So you build not to hold but to hand over. You write the procedure, train your replacement, and deliberately make yourself unnecessary, which is rare in someone with a drive to lead as strong as yours."
        },
        {
          "id": "Karena itu kamu jarang terlihat sebagai pemimpin yang menyala. Yang orang lihat adalah tempat yang berjalan tertib, dan mereka sering tidak menghubungkannya denganmu sampai kamu tidak ada.",
          "en": "So you rarely look like a lit-up leader. What people see is a place that runs in order, and they often do not connect it to you until you are gone."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menunda perubahan sampai buktinya benar-benar menumpuk, karena mengubah terlalu cepat terasa tidak bertanggung jawab.",
      "en": "You delay change until the evidence has genuinely piled up, because moving too fast feels irresponsible."
    }
  },
  "Karsa|Guna": {
    "en": "The Relationship Driver",
    "kekuatan": [
      {
        "id": "Membaca apa yang sebenarnya diinginkan lawan bicara, dari hal yang tidak ia katakan.",
        "en": "Reading what the other side actually wants, from what they did not say."
      },
      {
        "id": "Membuka pintu yang tertutup bagi orang lain, lewat orang yang kamu kenal.",
        "en": "Opening doors closed to others, through people you know."
      },
      {
        "id": "Mengubah arah pembicaraan di tempat saat membaca bahwa pendekatannya tidak jalan.",
        "en": "Changing the approach mid-conversation when you read that it is not landing."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kesepakatan terbaikmu sudah selesai sebelum pertemuan resminya dimulai.",
        "en": "Your best deals were settled before the formal meeting began."
      },
      "paragraf": [
        {
          "id": "Dorongan menggerakkan bertemu dengan cara bergerak yang membaca keadaan langsung. Akibatnya alat kerjamu bukan presentasi atau angka, melainkan orang yang sudah percaya padamu sebelum ada yang perlu dibicarakan. Jaringanmu bukan daftar kontak; ia adalah kumpulan orang yang pernah kamu bantu tanpa berpikir akan dapat apa.",
          "en": "A drive to move things meets a way of moving that reads the situation directly. So your instrument is not a deck or a number but people who trusted you before there was anything to discuss. Your network is not a contact list; it is people you once helped without calculating what you would get."
        },
        {
          "id": "Karena itu kemampuanmu sulit dipindahkan ke orang lain dan sulit dibuktikan di atas kertas. Orang yang menilaimu dari proses sering menyimpulkan kamu beruntung, sampai mereka mencoba menggantikanmu.",
          "en": "So your ability is hard to transfer and hard to evidence on paper. People who judge you by process often conclude you are lucky, until they try to replace you."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menyelesaikan sesuatu lewat kehadiranmu sendiri, dan karena itu berhasil, kamu tidak pernah membangun cara yang bisa dijalankan tanpamu.",
      "en": "You get things done through your own presence, and because it works you never build a way that runs without you."
    }
  },
  "Tata|Guna": {
    "en": "The Pragmatic Executor",
    "kekuatan": [
      {
        "id": "Tetap rapi di keadaan yang jauh dari ideal.",
        "en": "Staying orderly in conditions far from ideal."
      },
      {
        "id": "Menemukan jalan tercepat menembus proses yang berbelit.",
        "en": "Finding the fastest route through a tangled process."
      },
      {
        "id": "Jadi orang pertama yang bisa diandalkan saat operasional bermasalah.",
        "en": "Being the first person to rely on when operations go wrong."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu menghargai keteraturan, tapi memperlakukannya sebagai alat, bukan sebagai tujuan.",
        "en": "You value order, but treat it as a tool rather than as the point."
      },
      "paragraf": [
        {
          "id": "Minat pada hal yang tertata bertemu dengan cara bergerak yang membaca keadaan di depan mata. Hasilnya kombinasi yang jarang: kamu tahu aturannya, tahu mana yang tidak boleh dilanggar, dan tahu mana yang bisa dilewati hari ini supaya urusannya selesai.",
          "en": "An interest in things being in order meets a way of moving that reads the situation in front of you. The result is an uncommon combination: you know the rules, know which cannot be broken, and know which can be stepped around today so the thing gets done."
        },
        {
          "id": "Orang lain yang menyukai keteraturan biasanya butuh keadaan yang tenang untuk bekerja rapi. Kamu tetap rapi di keadaan yang tidak ideal, dan itu justru terlihat paling jelas saat rencananya berantakan.",
          "en": "Others who like order usually need calm conditions to work cleanly. You stay clean in conditions that are not ideal, and that shows most clearly when the plan falls apart."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menyelesaikan masalah lebih cepat daripada memperbaiki penyebabnya, karena menyelesaikan terasa lebih memuaskan dan hasilnya terlihat hari itu juga.",
      "en": "You fix the problem faster than you fix its cause, because fixing feels more satisfying and the result shows the same day."
    }
  },
  "Tata|Reka": {
    "en": "The Purpose-Driven Organizer",
    "kekuatan": [
      {
        "id": "Membuat nilai yang selalu dibicarakan benar-benar terlihat di prosedur sehari-hari.",
        "en": "Making the values everyone talks about actually visible in daily procedure."
      },
      {
        "id": "Menata sesuatu yang berantakan tanpa mematikan hal yang membuatnya hidup.",
        "en": "Ordering something chaotic without killing what made it alive."
      },
      {
        "id": "Menerjemahkan gagasan besar seseorang jadi rencana yang bisa dijalankan orang lain.",
        "en": "Turning someone's large idea into a plan other people can run."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu menata bukan karena suka rapi, melainkan supaya yang penting tidak pernah terlewat.",
        "en": "You bring order not because you like tidiness, but so what matters never gets missed."
      },
      "paragraf": [
        {
          "id": "Minat menata bertemu dengan syarat bahwa hal itu harus berarti. Akibatnya kamu tidak bisa membangun sistem yang tujuannya hanya mengendalikan orang. Kamu akan menyeretnya kembali ke pertanyaan untuk siapa ini, dan itu membuatmu terlihat lambat oleh orang yang cuma ingin aturannya cepat jadi.",
          "en": "An interest in ordering meets a requirement that it must matter. So you cannot build a system whose only purpose is to control people. You will drag it back to the question of who this is for, and that makes you look slow to anyone who just wants the rule written."
        },
        {
          "id": "Karena itu sistem yang kamu buat cenderung lebih dipakai orang daripada sistem yang lebih efisien tapi terasa merendahkan. Kamu memikirkan bagaimana rasanya menjalani aturanmu, dan sedikit perancang sistem yang melakukan itu.",
          "en": "So the systems you build tend to get used more than more efficient ones that feel diminishing. You think about what it is like to live under your rules, and few system designers do."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menahan sistem yang sebenarnya sudah berguna karena belum sepenuhnya sesuai dengan nilai yang kamu pegang.",
      "en": "You hold back a system that is already useful because it does not yet fully match the values you hold."
    }
  },
  "Tata|Logika": {
    "en": "The Process Rebuilder",
    "kekuatan": [
      {
        "id": "Menemukan di mana tenaga dan biaya bocor, di tempat yang sudah lama dianggap wajar.",
        "en": "Finding where effort and money leak, in places long considered normal."
      },
      {
        "id": "Merancang ulang proses yang berbelit jadi lebih sederhana tanpa kehilangan pengamannya.",
        "en": "Redesigning a tangled process into something simpler without losing its safeguards."
      },
      {
        "id": "Menjelaskan kenapa sesuatu harus diubah dengan alasan yang sulit dibantah.",
        "en": "Explaining why something must change with reasoning that is hard to argue with."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Melihat sistem yang tidak masuk akal dan membiarkannya terasa hampir mustahil bagimu.",
        "en": "Seeing a system that makes no sense and leaving it alone feels nearly impossible to you."
      },
      "paragraf": [
        {
          "id": "Minat menata bertemu dengan dorongan merancang. Akibatnya caramu menata bukan menjaga yang ada supaya tetap rapi, melainkan membongkarnya dan menyusunnya ulang supaya lebih masuk akal. Ini membuatmu berbeda dari kebanyakan orang yang menyukai keteraturan, dan sering membuatmu berbenturan dengan mereka.",
          "en": "An interest in ordering meets an urge to design. So your way of ordering is not keeping what exists tidy but taking it apart and rebuilding it to make more sense. This makes you different from most people who like order, and often puts you at odds with them."
        },
        {
          "id": "Kamu juga terganggu oleh ketidakefisienan yang bukan urusanmu, dan sering memperbaikinya tanpa diminta. Itu sumber sebagian besar nilai yang kamu berikan, dan sekaligus sumber sebagian besar gesekanmu.",
          "en": "You are also bothered by inefficiency that is none of your business, and often fix it unasked. That is the source of most of the value you add, and of most of your friction."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu merancang perubahan yang benar secara logika lalu menganggap orang akan mengikutinya karena masuk akal.",
      "en": "You design a change that is logically right, then assume people will follow because it makes sense."
    }
  },
  "Tata|Jaga": {
    "en": "The Keeper of Record",
    "kekuatan": [
      {
        "id": "Menghasilkan angka dan dokumen yang bisa dipakai orang lain tanpa perlu dicek ulang.",
        "en": "Producing figures and documents others can use without rechecking."
      },
      {
        "id": "Menemukan satu kesalahan kecil di antara ribuan baris yang tampak benar.",
        "en": "Finding the one small error among thousands of lines that look correct."
      },
      {
        "id": "Menjaga sesuatu berjalan sama setiap hari, tanpa perlu diingatkan.",
        "en": "Keeping something running the same every day, without needing reminders."
      }
    ],
    "pertemuan": {
      "inti": {
        "id": "Kamu membangun kepastian, dan keputusan orang lain berdiri di atasnya.",
        "en": "You build certainty, and other people's decisions stand on it."
      },
      "paragraf": [
        {
          "id": "Minat menata bertemu dengan rasa tanggung jawab. Akibatnya ketelitian bagimu bukan sifat hati-hati melainkan bentuk tanggung jawab: kamu tahu ada orang yang akan mengambil keputusan berdasarkan angka yang kamu rapikan, dan mereka tidak akan memeriksanya lagi. Itu sebabnya kamu memeriksa ulang sesuatu yang sudah benar.",
          "en": "An interest in ordering meets a sense of duty. So precision to you is not caution but responsibility: you know someone will decide based on the figures you tidied, and they will not check again. That is why you recheck what is already correct."
        },
        {
          "id": "Kamu juga membangun cara kerja yang bisa diikuti orang lain, bukan hanya olehmu. Hasilnya, tempat yang kamu urus tetap berjalan sama saat kamu cuti, dan sedikit orang yang berhasil membuat itu terjadi.",
          "en": "You also build a way of working others can follow, not only you. So the place you look after runs the same when you are on leave, and few people manage to make that happen."
        }
      ]
    },
    "cuilan": {
      "id": "Kamu menahan keberatan sampai punya bukti yang lengkap.",
      "en": "You hold an objection until your evidence is complete."
    }
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_PARAGA_CONTENT;
