/* ═══════════════════════════════════════════════════════════════════════════
   LAKON™ — DAFTAR ISTILAH TAMPILAN
   Satu tempat untuk semua judul bagian di laporan.

   ═══════════════════════════════════════════════════════════════════════
   PRINSIP PENAMAAN
   ═══════════════════════════════════════════════════════════════════════

   1. ISTILAH KHAS LAKON DIPERTAHANKAN, TAPI SELALU BERPASANGAN DENGAN
      PENJELASAN BIASA.
      Kelompok, Watak, dan Paraga adalah milik Lakon dan tidak boleh
      diterjemahkan jadi istilah generik. Tapi peserta yang baru pertama
      membaca tidak boleh tersesat. Maka tiap istilah selalu tampil
      berpasangan:  "Kelompok Karya · Bidang yang Menarikmu"
      Setelah dua atau tiga kemunculan, penjelasannya boleh disembunyikan.

   2. JUDUL BAGIAN MEMAKAI ORANG KEDUA.
      Isi laporan orang kedua, jadi judulnya juga. "Caramu Belajar",
      bukan "Gaya Belajar". Judul orang ketiga membuat laporan terasa
      seperti berkas tentang seseorang, bukan surat untuk pembacanya.

   3. TIDAK MEMAKAI ISTILAH TEKNIS PSIKOMETRIK DI HALAMAN PESERTA.
      Tidak ada "skor normatif", "indeks diferensiasi", "clarity index",
      "konsistensi Holland". Semua itu tetap ada di data dan di dasbor
      analis, tapi peserta membaca bahasa manusia.

   4. TIDAK MEMAKAI KATA YANG MENGHAKIMI.
      "Kelemahan" jadi "Kebiasaan yang Menghambat". "Risiko" jadi "Peran
      yang Terlihat Cocok tapi Tidak". Yang dinamai adalah polanya, bukan
      orangnya.

   5. JUDUL SEPASANG UNTUK ISI YANG SEPASANG.
      `tanda_situasi` (Kelompok) dan `tanda_gerak` (Watak) punya fungsi
      yang sama: alat baca portabel berisi ciri yang bisa dikenali sendiri
      oleh peserta, tanpa menyebut bidang atau pekerjaan. Karena sepasang,
      judulnya juga sepasang:
        "Situasi yang Kamu Cari"  ↔  "Yang Terlihat pada Caramu"
      Judul lama "Tanda Cara Bergerakmu" dibuang karena bertabrakan dengan
      penjelas lapis Watak yang juga berbunyi "Cara Kamu Bergerak".

   6. JUDUL BOLEH LEBIH PANJANG DARIPADA SATU KATA.
      Judul satu kata terdengar seperti daftar isi. Judul yang berupa
      frasa sudah mulai menjelaskan sebelum paragrafnya dibaca.
═══════════════════════════════════════════════════════════════════════════ */

var LAKON_LABEL = {

  /* ── NAMA LAPIS ─────────────────────────────────────────────
     Dipakai sebagai judul besar tiap bagian di laporan.        */
  lapis: {
    kelompok: {
      istilah:   { id: "Kelompok",  en: "Kelompok" },
      penjelas:  { id: "Bidang yang Menarikmu", en: "The Field That Draws You" },
      pengantar: { id: "Bagian ini tentang apa yang kamu nikmati, bukan apa yang kamu kuasai. Keduanya sering berbeda, dan yang menentukan betah tidaknya kamu di sebuah pekerjaan biasanya yang pertama.",
                   en: "This part is about what you enjoy, not what you are good at. The two often differ, and what decides whether you last in a job is usually the first." }
    },
    watak: {
      istilah:   { id: "Watak", en: "Watak" },
      penjelas:  { id: "Cara Kamu Bergerak", en: "How You Operate" },
      pengantar: { id: "Bagian ini tentang caramu mendekati pekerjaan, bukan bidangnya. Ia berlaku di mana pun kamu berada, dan tidak berubah saat kamu pindah bidang.",
                   en: "This part is about how you approach work, not the field. It applies wherever you are, and does not change when you change fields." }
    },
    paraga: {
      istilah:   { id: "Paraga", en: "Paraga" },
      penjelas:  { id: "Titik Temu Keduanya", en: "Where the Two Meet" },
      pengantar: { id: "Bagian ini hanya berisi apa yang muncul dari pertemuan bidang dan cara bergerakmu. Tidak akan mengulang dua bagian sebelumnya.",
                   en: "This part contains only what emerges where your field and your way of moving meet. It will not repeat the two parts before it." }
    },
    nuansa: {
      istilah:   { id: "Nuansa", en: "Nuance" },
      penjelas:  { id: "Bidang Keduamu", en: "Your Second Field" },
      pengantar: { id: "Minat keduamu tidak mengubah Paraga, tapi memperhalus arah karir dan peran yang cocok untukmu.",
                   en: "Your second interest does not change your Paraga, but it refines the directions and roles that suit you." }
    }
  },

  /* ── BAGIAN LAPIS KELOMPOK ──────────────────────────────── */
  kelompok: {
    tanda_situasi:  { id: "Situasi yang Kamu Cari",        en: "The Situations You Look For" },
    menikmati:      { id: "Yang Kamu Nikmati",             en: "What You Enjoy" },
    suasana:        { id: "Di Mana Kamu Betah",            en: "Where You Are at Home" },
    mengisi_energi: { id: "Yang Mengisi Energimu",         en: "What Refills You" },
    saat_belajar:   { id: "Caramu Belajar",                en: "How You Learn" },
    harga_diam:     { id: "Saat di Luar Bidangmu",           en: "When You Are Outside Your Field" }
  },

  /* Sub-judul di dalam bagian */
  sub: {
    betah:    { id: "Menumbuhkan",        en: "Grows you" },
    layu:     { id: "Melayukan",          en: "Wilts you" },
    membawa:  { id: "Yang Kamu Bawa",     en: "What you bring" },
    butuh:    { id: "Yang Kamu Butuhkan", en: "What you need" },
    terjadi:  { id: "Apa yang Perlahan Terjadi", en: "What slowly happens" },
    menolong: { id: "Apa yang Menolong",  en: "What helps" }
  },

  /* ── BAGIAN LAPIS WATAK ─────────────────────────────────── */
  watak: {
    tanda_gerak:    { id: "Yang Terlihat pada Caramu", en: "What Shows in How You Move" },
    cara_kerja:     { id: "Caramu Mendekati Pekerjaan", en: "How You Approach Work" },
    dalam_tim:      { id: "Kamu di Dalam Tim",          en: "You Within a Team" },
    salah_paham:    { id: "Yang Sering Disalahpahami",  en: "What People Get Wrong" },
    kalau_tertekan: { id: "Saat Kamu Tertekan",         en: "When You Are Under Pressure" },
    tumbuh_lewat:   { id: "Yang Mengembangkanmu",       en: "What Develops You" }
  },

  /* ── BAGIAN LAPIS PARAGA ────────────────────────────────── */
  paraga: {
    pertemuan:    { id: "Pertemuan Identitasmu",      en: "Where Your Two Sides Meet" },
    kekuatan:     { id: "Kekuatan Utamamu",           en: "Your Core Strengths" },
    peran_khas:   { id: "Peran Khasmu",               en: "The Role You Tend To Hold" },
    titik_peran:  { id: "Peran yang Terlihat Cocok tapi Tidak",
                    en: "Roles That Look Right but Are Not" },
    titik_pola:   { id: "Kebiasaan yang Menghambatmu", en: "The Habit That Holds You Back" },
    pengembangan: { id: "Langkah Pengembanganmu",      en: "Your Steps to Develop" },
    arah_karir:   { id: "Arah Karir",                  en: "Career Directions" },
    arah_studi:   { id: "Arah Studi",                  en: "Study Directions" }
  },

  /* ── BAGIAN LAIN DI LAPORAN ─────────────────────────────── */
  lain: {
    grafik:    { id: "Profil Minatmu",         en: "Your Interest Profile" },
    dimensi:   { id: "Empat Sumbu Caramu Bergerak", en: "Four Axes of How You Move" },
    industri:  { id: "Satu Industri, Enam Pintu Masuk", en: "One Industry, Six Ways In" },
    peran_tbl: { id: "Contoh Peran dalam Organisasi", en: "Example Roles in an Organisation" },
    langkah:   { id: "Tiga Langkah Berikutnya", en: "Three Next Steps" },
    dual:      { id: "Watak-mu Ada di Antara Dua", en: "Your Watak Sits Between Two" }
  },

  /* ── ZONA KEJELASAN DIMENSI ─────────────────────────────────
     "Samar" TIDAK PERNAH ditampilkan ke peserta. Alat yang memberi
     label "samar" pada 45% penggunanya sedang mengaku gagal, dan
     posisi tengah adalah temuan, bukan kegagalan pengukuran.      */
  zona: {
    Samar:   { id: "Seimbang", en: "Balanced" },
    Ringan:  { id: "Condong",  en: "Leaning"  },
    Moderat: { id: "Jelas",    en: "Clear"    },
    Kuat:    { id: "Kuat",     en: "Strong"   }
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = LAKON_LABEL;
