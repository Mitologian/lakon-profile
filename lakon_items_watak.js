/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ CAREER PROFILE — BANK ITEM WATAK  v3
   48 item · 12 per dimensi · format 5 titik · keying seimbang 6/6

   Dipakai oleh lakon_scoring.js melalui bank.watak

   KONTRAK DATA
     id       : id unik item
     dim      : 'arus' | 'pandang' | 'timbang' | 'irama'
     reverse  : true bila pernyataan mengarah ke KUTUB B
     id_s/en_s: bunyi pernyataan

   KUTUB
     arus     A=E (Luar)          B=I (Dalam)
     pandang  A=N (Luas)          B=S (Nyata)
     timbang  A=T (Logika)        B=F (Rasa)
     irama    A=J (Pasti)         B=P (Bebas)

   CARA PENSKORAN
     Peserta menyatakan tingkat kesetujuan terhadap pernyataan:
       Sangat Setuju +2 | Setuju +1 | Netral 0 | Tidak Setuju -1 | Sangat Tidak Setuju -2
     Mesin membalik nilai bila reverse:true, lalu menjumlahkan per dimensi.

   CATATAN REVISI DARI VERSI LAMA
     - Dibuang: m6 (pesan vs telepon; terkontaminasi usia & kebiasaan digital)
     - Dibuang: m17 (cari solusi vs dengarkan; bercampur orientasi aksi SP)
     - Dibuang: m22 & m30 (nyaris duplikat satu sama lain)
     - Arus dinaikkan dari 6 ke 12 item, setara dimensi lain
     - Tidak ada pasangan item cermin, agar alfa tidak naik semu
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_SKALA_WATAK = {
  id: [
    { v:  2, label: "Sangat Setuju" },
    { v:  1, label: "Setuju" },
    { v:  0, label: "Netral" },
    { v: -1, label: "Tidak Setuju" },
    { v: -2, label: "Sangat Tidak Setuju" }
  ],
  en: [
    { v:  2, label: "Strongly Agree" },
    { v:  1, label: "Agree" },
    { v:  0, label: "Neutral" },
    { v: -1, label: "Disagree" },
    { v: -2, label: "Strongly Disagree" }
  ]
};

var LAKON_ITEMS_WATAK = [

  /* ───────────────────────── ARUS · E / I ─────────────────────────
     Ke mana energi mengalir. Tidak menentukan Watak, tapi menentukan
     nuansa dan cara peserta menjalani peran.                          */

  { id:"w_ar_01", dim:"arus", reverse:false,
    id_s:"Setelah seharian bertemu banyak orang, energi saya justru terasa lebih penuh.",
    en_s:"After a full day of meeting many people, my energy actually feels fuller." },

  { id:"w_ar_02", dim:"arus", reverse:true,
    id_s:"Saya butuh waktu sendirian untuk memulihkan energi setelah banyak berinteraksi.",
    en_s:"I need time alone to recover my energy after a lot of interaction." },

  { id:"w_ar_03", dim:"arus", reverse:false,
    id_s:"Di acara yang ramai, saya biasanya termasuk yang paling aktif mengajak orang bicara.",
    en_s:"At busy events, I'm usually among the most active in starting conversations." },

  { id:"w_ar_04", dim:"arus", reverse:true,
    id_s:"Saya lebih fokus bekerja di tempat yang sepi daripada di tempat yang ramai.",
    en_s:"I focus better working somewhere quiet than somewhere busy." },

  { id:"w_ar_05", dim:"arus", reverse:false,
    id_s:"Saya mudah akrab dengan orang yang baru saya kenal.",
    en_s:"I warm up quickly to people I've just met." },

  { id:"w_ar_06", dim:"arus", reverse:true,
    id_s:"Orang perlu waktu cukup lama untuk benar-benar mengenal saya.",
    en_s:"People need quite a long time to really get to know me." },

  { id:"w_ar_07", dim:"arus", reverse:false,
    id_s:"Saya lebih cepat menemukan ide saat mengobrol dengan orang lain daripada saat memikirkannya sendiri.",
    en_s:"I find ideas faster while talking with others than while thinking alone." },

  { id:"w_ar_08", dim:"arus", reverse:true,
    id_s:"Saya lebih menikmati percakapan mendalam dengan sedikit orang daripada obrolan ringan dengan banyak orang.",
    en_s:"I enjoy deep conversations with a few people more than light chat with many." },

  { id:"w_ar_09", dim:"arus", reverse:false,
    id_s:"Saya cenderung langsung menyuarakan pendapat begitu terpikir.",
    en_s:"I tend to voice an opinion as soon as it occurs to me." },

  { id:"w_ar_10", dim:"arus", reverse:true,
    id_s:"Saya biasanya memikirkan sesuatu matang-matang di dalam kepala sebelum membicarakannya.",
    en_s:"I usually think something through in my head before talking about it." },

  { id:"w_ar_11", dim:"arus", reverse:false,
    id_s:"Kalau ada waktu luang, saya lebih sering mencari teman untuk melakukan sesuatu bersama.",
    en_s:"When I have free time, I more often look for company to do something with." },

  { id:"w_ar_12", dim:"arus", reverse:true,
    id_s:"Akhir pekan yang tenang di rumah terasa lebih menyegarkan daripada acara bersama banyak orang.",
    en_s:"A quiet weekend at home feels more refreshing than an event with a crowd." },


  /* ──────────────────────── PANDANG · N / S ────────────────────────
     Bagaimana informasi diserap. Salah satu dari dua penentu Watak.   */

  { id:"w_pa_01", dim:"pandang", reverse:false,
    id_s:"Saya lebih tertarik pada pola dan makna di balik sesuatu daripada pada rinciannya.",
    en_s:"I'm more drawn to the pattern and meaning behind things than to their details." },

  { id:"w_pa_02", dim:"pandang", reverse:true,
    id_s:"Saya lebih mempercayai apa yang bisa diamati langsung daripada dugaan atau tafsiran.",
    en_s:"I trust what can be directly observed more than guesses or interpretations." },

  { id:"w_pa_03", dim:"pandang", reverse:false,
    id_s:"Saya sering memikirkan berbagai kemungkinan yang bisa terjadi di masa depan.",
    en_s:"I often think about the range of possibilities that could unfold ahead." },

  { id:"w_pa_04", dim:"pandang", reverse:true,
    id_s:"Saya memperhatikan detail kecil yang sering luput dari orang lain.",
    en_s:"I notice small details that others often miss." },

  { id:"w_pa_05", dim:"pandang", reverse:false,
    id_s:"Saya lebih mudah menjelaskan sesuatu lewat perumpamaan daripada lewat rincian yang tepat.",
    en_s:"I explain things more easily through analogy than through precise specifics." },

  { id:"w_pa_06", dim:"pandang", reverse:true,
    id_s:"Saya lebih suka mengerjakan sesuatu dengan cara yang sudah terbukti berhasil.",
    en_s:"I prefer doing things the way that has already been proven to work." },

  { id:"w_pa_07", dim:"pandang", reverse:false,
    id_s:"Saya senang membahas gagasan yang masih abstrak dan belum jelas bentuknya.",
    en_s:"I enjoy discussing ideas that are still abstract and not yet fully formed." },

  { id:"w_pa_08", dim:"pandang", reverse:true,
    id_s:"Arahan yang rinci membuat saya bekerja lebih tenang daripada arahan yang umum.",
    en_s:"Detailed instructions let me work more calmly than general guidance does." },

  { id:"w_pa_09", dim:"pandang", reverse:false,
    id_s:"Saat mendengar rencana baru, hal pertama yang saya bayangkan adalah bisa berkembang jadi apa nanti.",
    en_s:"When I hear a new plan, the first thing I picture is what it could grow into." },

  { id:"w_pa_10", dim:"pandang", reverse:true,
    id_s:"Saya lebih tertarik pada apa yang nyata sekarang daripada pada apa yang mungkin terjadi nanti.",
    en_s:"I'm more interested in what is real now than in what might happen later." },

  { id:"w_pa_11", dim:"pandang", reverse:false,
    id_s:"Saya lebih mengingat kesan keseluruhan dari suatu peristiwa daripada urutan kejadiannya.",
    en_s:"I remember the overall impression of an event more than the sequence of what happened." },

  { id:"w_pa_12", dim:"pandang", reverse:true,
    id_s:"Saya biasanya mengingat fakta dan angka dengan cukup akurat.",
    en_s:"I usually remember facts and figures fairly accurately." },


  /* ──────────────────────── TIMBANG · T / F ────────────────────────
     Bagaimana keputusan ditimbang. Penentu Watak untuk jalur N
     (Reka vs Logika).                                                 */

  { id:"w_ti_01", dim:"timbang", reverse:false,
    id_s:"Dalam keputusan penting, saya lebih mengandalkan analisis daripada perasaan.",
    en_s:"For important decisions, I rely on analysis more than on feeling." },

  { id:"w_ti_02", dim:"timbang", reverse:true,
    id_s:"Sebelum menyampaikan sesuatu, saya memikirkan dulu bagaimana perasaan orang yang mendengarnya.",
    en_s:"Before saying something, I first consider how the listener will feel." },

  { id:"w_ti_03", dim:"timbang", reverse:false,
    id_s:"Saya bisa mengesampingkan rasa tidak enak demi keputusan yang lebih tepat.",
    en_s:"I can set aside discomfort for the sake of a more correct decision." },

  { id:"w_ti_04", dim:"timbang", reverse:true,
    id_s:"Keputusan yang baik menurut saya adalah yang mempertimbangkan dampaknya pada orang-orang yang terlibat.",
    en_s:"To me, a good decision is one that weighs its impact on the people involved." },

  { id:"w_ti_05", dim:"timbang", reverse:false,
    id_s:"Saat menilai sesuatu, saya berusaha melepaskan diri dari keterlibatan pribadi.",
    en_s:"When judging something, I try to detach myself from personal involvement." },

  { id:"w_ti_06", dim:"timbang", reverse:true,
    id_s:"Suasana hubungan yang baik dalam tim sama pentingnya dengan hasil kerjanya.",
    en_s:"Good relationships within a team matter as much as the work output." },

  { id:"w_ti_07", dim:"timbang", reverse:false,
    id_s:"Saya lebih menghargai kejujuran yang lugas daripada penyampaian yang halus.",
    en_s:"I value blunt honesty more than a gently worded delivery." },

  { id:"w_ti_08", dim:"timbang", reverse:true,
    id_s:"Saya mudah ikut merasakan apa yang sedang dialami orang lain.",
    en_s:"I easily feel along with what another person is going through." },

  { id:"w_ti_09", dim:"timbang", reverse:false,
    id_s:"Kalau ada perselisihan di tim, saya lebih dulu menyelesaikan masalahnya daripada menenangkan perasaan orang.",
    en_s:"When a team disagrees, I address the problem before settling anyone's feelings." },

  { id:"w_ti_10", dim:"timbang", reverse:true,
    id_s:"Saya sulit mengambil keputusan yang saya tahu akan menyakiti seseorang, meski keputusan itu masuk akal.",
    en_s:"I struggle to make a decision I know will hurt someone, even when it makes sense." },

  { id:"w_ti_11", dim:"timbang", reverse:false,
    id_s:"Alasan yang logis lebih meyakinkan saya daripada pengalaman pribadi seseorang.",
    en_s:"A logical argument convinces me more than someone's personal experience." },

  { id:"w_ti_12", dim:"timbang", reverse:true,
    id_s:"Nilai yang saya yakini lebih menentukan pilihan saya daripada perhitungan untung rugi.",
    en_s:"The values I hold shape my choices more than a calculation of costs and benefits." },


  /* ───────────────────────── IRAMA · J / P ─────────────────────────
     Bagaimana hari dijalani. Penentu Watak untuk jalur S
     (Jaga vs Guna).                                                   */

  { id:"w_ir_01", dim:"irama", reverse:false,
    id_s:"Saya merasa lebih tenang kalau rencana sudah pasti dan tidak banyak berubah.",
    en_s:"I feel calmer when plans are settled and don't shift much." },

  { id:"w_ir_02", dim:"irama", reverse:true,
    id_s:"Saya cenderung menunda keputusan supaya pilihan tetap terbuka.",
    en_s:"I tend to delay decisions so that options stay open." },

  { id:"w_ir_03", dim:"irama", reverse:false,
    id_s:"Saya puas ketika daftar tugas saya selesai dan tercentang semua.",
    en_s:"I feel satisfied when my task list is finished and fully checked off." },

  { id:"w_ir_04", dim:"irama", reverse:true,
    id_s:"Rencana yang terlalu rapi justru membuat saya merasa terkurung.",
    en_s:"An overly tidy plan actually makes me feel boxed in." },

  { id:"w_ir_05", dim:"irama", reverse:false,
    id_s:"Saya biasanya menyelesaikan pekerjaan jauh sebelum tenggat waktu.",
    en_s:"I usually finish work well before the deadline." },

  { id:"w_ir_06", dim:"irama", reverse:true,
    id_s:"Aturan dan jadwal bagi saya lebih merupakan panduan daripada ketentuan yang harus dipatuhi.",
    en_s:"To me, rules and schedules are guidance more than requirements to obey." },

  { id:"w_ir_07", dim:"irama", reverse:false,
    id_s:"Saya suka sudah tahu lebih awal apa yang akan saya lakukan akhir pekan nanti.",
    en_s:"I like knowing in advance what I'll be doing on the coming weekend." },

  { id:"w_ir_08", dim:"irama", reverse:true,
    id_s:"Saya nyaman menjalani hari tanpa jadwal yang pasti.",
    en_s:"I'm comfortable going through a day without a fixed schedule." },

  { id:"w_ir_09", dim:"irama", reverse:false,
    id_s:"Saya lebih nyaman mengambil keputusan lebih cepat daripada menundanya.",
    en_s:"I'm more comfortable deciding sooner than putting a decision off." },

  { id:"w_ir_10", dim:"irama", reverse:true,
    id_s:"Saya sering mengubah cara kerja di tengah jalan kalau menemukan yang lebih baik.",
    en_s:"I often change my approach midway when I find a better one." },

  { id:"w_ir_11", dim:"irama", reverse:false,
    id_s:"Saya menjaga barang dan berkas saya tetap tertata pada tempatnya.",
    en_s:"I keep my belongings and files arranged in their places." },

  { id:"w_ir_12", dim:"irama", reverse:true,
    id_s:"Saya lebih menikmati proses mengerjakan sesuatu daripada saat menyelesaikannya.",
    en_s:"I enjoy the process of working on something more than the moment of finishing it." }

];


/* ═══════════════════════════════════════════════════════════════════
   URUTAN TAMPIL
   Item TIDAK ditampilkan berkelompok per dimensi. Blok yang seragam
   memudahkan peserta menebak apa yang diukur, dan memicu straight-lining.
   Fungsi ini menyelang-nyeling dimensi dan menyebar arah keying.
   ═══════════════════════════════════════════════════════════════════ */
function lakonUrutkanItemWatak(items) {
  var byDim = { arus: [], pandang: [], timbang: [], irama: [] }, i;
  for (i = 0; i < items.length; i++) byDim[items[i].dim].push(items[i]);

  var order = ["pandang", "arus", "timbang", "irama"], out = [], round = 0;
  while (out.length < items.length) {
    for (i = 0; i < order.length; i++) {
      var pool = byDim[order[i]];
      if (pool[round]) out.push(pool[round]);
    }
    round++;
  }
  return out;
}


/* ═══════════════════════════════════════════════════════════════════
   PEMERIKSAAN MANDIRI
   Jalankan setiap kali bank item disunting. Menolak diam-diam adalah
   cara termudah kehilangan keseimbangan keying.
   ═══════════════════════════════════════════════════════════════════ */
function lakonPeriksaBankWatak(items) {
  var stat = {}, ids = {}, masalah = [], i, it;

  for (i = 0; i < items.length; i++) {
    it = items[i];
    if (ids[it.id]) masalah.push("id ganda: " + it.id);
    ids[it.id] = true;
    if (!stat[it.dim]) stat[it.dim] = { total: 0, poleA: 0, poleB: 0 };
    stat[it.dim].total++;
    if (it.reverse) stat[it.dim].poleB++; else stat[it.dim].poleA++;
    if (!it.id_s || !it.en_s) masalah.push("teks kosong: " + it.id);
  }

  for (var d in stat) {
    if (!stat.hasOwnProperty(d)) continue;
    if (stat[d].total !== 12) masalah.push(d + " punya " + stat[d].total + " item, seharusnya 12");
    if (stat[d].poleA !== stat[d].poleB)
      masalah.push(d + " keying timpang: " + stat[d].poleA + " vs " + stat[d].poleB);
  }

  return { total: items.length, perDimensi: stat, masalah: masalah, lolos: masalah.length === 0 };
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LAKON_ITEMS_WATAK: LAKON_ITEMS_WATAK,
    LAKON_SKALA_WATAK: LAKON_SKALA_WATAK,
    lakonUrutkanItemWatak: lakonUrutkanItemWatak,
    lakonPeriksaBankWatak: lakonPeriksaBankWatak
  };
}
