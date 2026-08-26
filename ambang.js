/* =====================================================================
   AMBANG SYARAT PERLU — dibaca oleh monitoring.html
   -------------------------------------------------------------------
   Berkas ini memisahkan ANGKA ambang dari kode tampilan, mengikuti pola
   config.js. Mengubah nilai di sini tidak perlu menyentuh HTML.

   STATUS: nilai di bawah adalah NILAI SEMENTARA dan BELUM DIVERIFIKASI
   terhadap instrumen LAM Teknik yang berlaku untuk jalur pengajuan
   prodi. Selama `terverifikasi: false`, halaman monitoring menampilkan
   spanduk peringatan. Setelah setiap ambang dicocokkan ke butir
   instrumen, isi `butir`, `sumber`, dan ubah `terverifikasi` ke true.

   Setiap butir:
     id            kunci yang dikenali monitoring.html (JANGAN diubah)
     label         nama tampilan
     butir         nomor butir instrumen, mis. "LKPS 3.a.1" — isi setelah dicek
     ambang        angka batas
     satuan        '%' | 'orang' | 'bulan'
     arah          'min' = capaian harus >= ambang
                   'max' = capaian harus <= ambang
     sumber        rujukan dokumen + halaman
     catatan       keterangan cara hitung atau keterbatasan data
     terverifikasi true hanya setelah dicek ke instrumen resmi

   Butir dengan `manual: true` tidak dapat dihitung dari data.json;
   isi `capaian` secara manual di sini (angka atau null bila belum ada)
   dan sebutkan buktinya di `catatan`.
   ===================================================================== */

window.AMBANG = {

  // Identitas instrumen yang dijadikan rujukan. Kosong = belum ditetapkan.
  instrumen: {
    nama: '',            // mis. 'Instrumen Akreditasi 2025 Perpanjangan — LAM Teknik'
    versi: '',
    jalur: '',           // 'perpanjangan' | 'unggul_internasional' | 'reguler'
    diperbarui: '',      // tanggal terakhir ambang dicek
  },

  butir: [
    {
      id: 'dtps_jumlah',
      label: 'Jumlah DTPS',
      butir: '',
      ambang: 5, satuan: 'orang', arah: 'min',
      sumber: 'SN-DIKTI (minimum dosen tetap per prodi) — belum dicek ke LAM Teknik',
      catatan: 'Dihitung dari dosen aktif di lembar Excel.',
      terverifikasi: false,
    },
    {
      id: 'dtps_doktor',
      label: 'DTPS berpendidikan doktor',
      butir: '',
      ambang: 50, satuan: '%', arah: 'min',
      sumber: 'Nilai sementara mengikuti rumusan BAN-PT 2019 — belum dicek ke LAM Teknik',
      catatan: 'Kolom pendidikan = S3 di lembar dosen.',
      terverifikasi: false,
    },
    {
      id: 'dtps_lk_gb',
      label: 'DTPS berjabatan Lektor Kepala / Guru Besar',
      butir: '',
      ambang: 70, satuan: '%', arah: 'min',
      sumber: 'Nilai sementara mengikuti rumusan BAN-PT 2019 — belum dicek ke LAM Teknik',
      catatan: 'Kolom jabatan = lektor_kepala atau guru_besar di lembar dosen.',
      terverifikasi: false,
    },
    {
      id: 'waktu_tunggu',
      label: 'Rata-rata waktu tunggu lulusan',
      butir: '',
      ambang: 6, satuan: 'bulan', arah: 'max',
      sumber: 'Nilai sementara — belum dicek ke LAM Teknik',
      catatan: 'Rata-rata tertimbang (bobot = jumlah terlacak) dari lembar tracer_lulusan. ' +
               'Instrumen biasanya menetapkan rentang tahun lulus tertentu (mis. TS-4 s.d. TS-2); ' +
               'sesuaikan setelah instrumen dibaca.',
      terverifikasi: false,
    },
    {
      id: 'sesuai_bidang',
      label: 'Lulusan bekerja sesuai bidang',
      butir: '',
      ambang: 80, satuan: '%', arah: 'min',
      sumber: 'Nilai sementara — belum dicek ke LAM Teknik',
      catatan: 'Jumlah bekerja sesuai bidang dibagi jumlah terlacak, seluruh baris tracer.',
      terverifikasi: false,
    },
    {
      id: 'karya_utama_internasional',
      label: 'DTPS dengan karya utama internasional',
      butir: '',
      ambang: 50, satuan: '%', arah: 'min',
      sumber: 'Nilai sementara — belum dicek ke LAM Teknik',
      catatan: 'Penulis pertama/korespondensi pada publikasi bereputasi, atau paten. ' +
               'Penyaring kata kunci bereputasi/scopus/wos di bangun.py belum diaudit.',
      terverifikasi: false,
    },

    // ---- Butir yang tidak dapat dihitung dari data.json ----------------
    {
      id: 'penjaminan_mutu', manual: true,
      label: 'Siklus PPEPP penjaminan mutu berjalan',
      butir: '', ambang: 1, satuan: 'ya/tidak', arah: 'min',
      capaian: null,
      sumber: 'Belum dicek ke LAM Teknik',
      catatan: 'Isi 1 bila terpenuhi dan sebutkan dokumen buktinya di sini.',
      terverifikasi: false,
    },
    {
      id: 'kurikulum', manual: true,
      label: 'Evaluasi dan pemutakhiran kurikulum',
      butir: '', ambang: 1, satuan: 'ya/tidak', arah: 'min',
      capaian: null,
      sumber: 'Belum dicek ke LAM Teknik',
      catatan: 'Isi 1 bila terpenuhi dan sebutkan dokumen buktinya di sini.',
      terverifikasi: false,
    },
  ],
};
