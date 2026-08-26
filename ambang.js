/* =====================================================================
   AMBANG SYARAT PERLU PERINGKAT — dibaca oleh monitoring.html
   -------------------------------------------------------------------
   Angka di bawah disalin dari tabel syarat perlu peringkat LAM Teknik,
   KOLOM "Sarjana / PJJ Sarjana". Jangan pakai berkas ini untuk jenjang
   lain: ambang Magister dan Doktor berbeda, dan beberapa butir tidak
   berlaku untuk Sarjana.

   Instrumen membedakan dua sasaran:
     u3 = Terakreditasi Unggul, masa berlaku 3 tahun   (tanda ** )
     u5 = Terakreditasi Unggul, masa berlaku 5 tahun   (tanda ***)
   Tiap butir karena itu punya dua ambang. Semua butir harus terpenuhi;
   satu butir gagal menggugurkan sasaran peringkat tersebut.

   -------------------------------------------------------------------
   BUTIR YANG BELUM DIMASUKKAN
   Tangkapan layar yang tersedia memuat butir 1–8, 12–15. Butir 9, 10,
   dan 11 belum pernah dibaca, sehingga daftar ini BELUM LENGKAP.
   Selama `butir_lengkap: false`, halaman monitoring menampilkan
   peringatan. Tambahkan butir 9–11 lalu ubah ke true.

   BUTIR YANG TIDAK BERLAKU UNTUK SARJANA (bertanda x di instrumen,
   sengaja tidak dicantumkan):
     6  Rasio dosen tetap PSPPI terhadap dosen industri
     8  Publikasi DTPS (rasio publikasi internasional : jumlah DTPS)
     12 Pagelaran / publikasi ilmiah mahasiswa

   -------------------------------------------------------------------
   Setiap butir:
     no        nomor butir pada instrumen
     id        kunci yang dikenali monitoring.html (JANGAN diubah)
     label     nama tampilan
     ambang    {u3, u5} — angka batas untuk tiap sasaran
     satuan    '%' | 'bulan' | 'sks' | 'skor'
     arah      'min' = capaian harus >= ambang
               'max' = capaian harus <= ambang
     jendela   pembatas tahun sesuai bunyi instrumen (lihat tiap butir)
     manual    true bila tidak dapat dihitung dari data.json; isi
               `capaian` dengan angka, atau biarkan null bila belum ada
   ===================================================================== */

window.AMBANG = {

  instrumen: {
    nama: 'Syarat perlu peringkat — LAM Teknik',
    jenjang: 'Sarjana / PJJ Sarjana',
    versi: '',              // isi nomor versi/tahun instrumen bila sudah pasti
    diperbarui: '2026-08-26',
    butir_lengkap: false,   // true setelah butir 9, 10, 11 ditambahkan
  },

  sasaran: [
    { id: 'u3', label: 'Unggul · 3 tahun', tanda: '**'  },
    { id: 'u5', label: 'Unggul · 5 tahun', tanda: '***' },
  ],

  butir: [

    // ---- Butir bermatriks: skor dari tabel penilaian, diisi tangan ----
    {
      no: 1, id: 'tata_pamong', manual: true,
      label: 'Sistem tata pamong',
      ambang: { u3: 3.00, u5: 3.50 }, satuan: 'skor', arah: 'min',
      capaian: null,
      sumber: 'Rerata skor, Tabel 4.1 Matriks Penilaian Sistem Tata Pamong',
      catatan: 'Kelengkapan struktur dan kebijakan operasional, Good University ' +
               'Governance, komitmen dan kemampuan manajerial pimpinan UPPS. ' +
               'Isi rerata skor hasil penilaian matriks.',
    },
    {
      no: 2, id: 'kurikulum', manual: true,
      label: 'Kurikulum',
      ambang: { u3: 3.00, u5: 3.50 }, satuan: 'skor', arah: 'min',
      capaian: null,
      sumber: 'Rerata skor, Tabel 4.2 Matriks Penilaian Kurikulum',
      catatan: 'Keterlibatan pemangku kepentingan dalam evaluasi dan pemutakhiran, ' +
               'profil lulusan, penurunan CPL, proses pembelajaran, tinjauan rutin. ' +
               'Isi rerata skor hasil penilaian matriks.',
    },
    {
      no: 15, id: 'penjaminan_mutu', manual: true,
      label: 'Penjaminan mutu',
      ambang: { u3: 3.00, u5: 3.50 }, satuan: 'skor', arah: 'min',
      capaian: null,
      sumber: 'Rerata skor, Tabel 4.3 Matriks Penilaian Penjaminan Mutu',
      catatan: 'Unit penjaminan mutu, perangkat SPMI, IKT, keterlaksanaan AMI, ' +
               'evaluasi capaian kinerja, kepuasan pemangku kepentingan. ' +
               'Isi rerata skor hasil penilaian matriks.',
    },

    // ---- Butir kurikulum yang berupa jumlah SKS ----------------------
    {
      no: 3, id: 'basic_sciences', manual: true,
      label: 'Mata kuliah basic sciences dan matematika',
      ambang: { u3: 25, u5: 25 }, satuan: 'sks', arah: 'min',
      capaian: null,
      sumber: 'Butir 3, kolom Sarjana',
      catatan: 'Jumlah SKS mata kuliah basic sciences dan matematika yang ' +
               'disediakan program studi. Ambang sama untuk kedua sasaran. ' +
               'Isi dari struktur kurikulum yang berlaku.',
    },

    // ---- Butir yang dihitung dari data.json --------------------------
    {
      no: 4, id: 'dtps_doktor',
      label: 'DTPS berpendidikan doktor',
      ambang: { u3: 30, u5: 40 }, satuan: '%', arah: 'min',
      sumber: 'Butir 4, kolom Sarjana',
      catatan: 'Persentase DTPS berpendidikan tertinggi Doktor/Doktor Terapan. ' +
               'Dihitung dari kolom pendidikan = S3 di lembar dosen.',
    },
    {
      no: 5, id: 'dtps_lektor_keatas',
      label: 'DTPS berjabatan Lektor ke atas',
      ambang: { u3: 40, u5: 50 }, satuan: '%', arah: 'min',
      sumber: 'Butir 5, kolom Sarjana',
      catatan: 'Persentase DTPS berjabatan Guru Besar, Lektor Kepala, atau Lektor. ' +
               'Dihitung dari kolom jabatan di lembar dosen.',
    },
    {
      no: 7, id: 'karya_utama_internasional',
      label: 'Kinerja DTPS — karya utama internasional',
      ambang: { u3: 25, u5: 50 }, satuan: '%', arah: 'min',
      jendela: { tahun_terakhir: 3 },
      sumber: 'Butir 7, kolom Sarjana',
      catatan: 'Persentase DTPS dengan karya ilmiah sebagai penulis pertama ' +
               'dan/atau korespondensi di jurnal internasional bereputasi, atau ' +
               'prosiding internasional ber-ISSN/ISBN terindeks Scopus/IEEE ' +
               'Xplore/SPIE, atau paten — dalam tiga tahun terakhir.',
    },
    {
      no: 13, id: 'waktu_tunggu',
      label: 'Waktu tunggu lulusan',
      ambang: { u3: 6, u5: 6 }, satuan: 'bulan', arah: 'max',
      jendela: { tahun_terakhir: 2 },
      sumber: 'Butir 13, kolom Sarjana',
      catatan: 'Waktu tunggu mendapatkan pekerjaan/berkarya pertama, dalam dua ' +
               'tahun terakhir. Ambang sama untuk kedua sasaran. Dihitung sebagai ' +
               'rata-rata tertimbang oleh jumlah terlacak.',
    },
    {
      no: 14, id: 'sesuai_bidang',
      label: 'Kesesuaian bidang kerja lulusan',
      ambang: { u3: 50, u5: 50 }, satuan: '%', arah: 'min',
      jendela: { tahun_terakhir: 2 },
      sumber: 'Butir 14, kolom Sarjana',
      catatan: 'Kesesuaian bidang kerja lulusan saat mendapatkan pekerjaan ' +
               'pertama. Ambang sama untuk kedua sasaran. Jendela tahun ' +
               'disamakan dengan butir 13; sesuaikan bila instrumen berbeda.',
    },
  ],
};
