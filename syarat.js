/* =====================================================================
   SYARAT PERLU PERINGKAT UNGGUL -> nomor butir matriks APS-AV 2025
   ---------------------------------------------------------------------
   `ambang.js` memakai penomoran dokumen "Syarat perlu peringkat LAM
   Teknik" (butir 1-15), yang BERBEDA dari penomoran matriks penilaian
   (butir 1-60). Berkas ini memetakan keduanya supaya kartu di halaman
   skor bisa ditandai.

   Setiap entri wajib menyebut `pasti`. Yang `pasti: false` ditandai di
   layar sebagai perlu diperiksa, bukan disembunyikan dan bukan pula
   ditampilkan seolah sudah dipastikan.

   YANG TIDAK DIPETAKAN — jangan ditebak, tambahkan setelah dipastikan:
     - Syarat butir 9, 10, 11: belum pernah dibaca; `ambang.js` sendiri
       menandainya dengan `butir_lengkap: false`.
     - Syarat butir 6, 8, 12: dinyatakan tidak berlaku untuk Sarjana.

   PENTING: berkas ini TIDAK menghitung lulus atau tidaknya syarat.
   Perhitungan itu sudah ada di monitoring.html dan menyalinnya ke sini
   akan melahirkan dua sumber yang bisa menyimpang. Kartu di halaman skor
   hanya MENANDAI bahwa butir itu termasuk syarat perlu, lalu menunjuk ke
   halaman monitoring untuk angka capaiannya.
   ===================================================================== */

export const SYARAT = {
  // ---- pemetaan yang jelas: indikatornya identik kata per kata --------
  '19': { id: 'basic_sciences', syarat: 3, pasti: true,
          bunyi: 'Mata kuliah basic sciences dan matematika \u2265 25 sks' },
  '27': { id: 'dtps_doktor', syarat: 4, pasti: true,
          bunyi: 'DTPS berpendidikan doktor \u2265 30% (Unggul 3 th) / 40% (5 th)' },
  '28': { id: 'dtps_lektor_keatas', syarat: 5, pasti: true,
          bunyi: 'DTPS berjabatan Lektor ke atas \u2265 40% (3 th) / 50% (5 th)' },
  '35': { id: 'karya_utama_internasional', syarat: 7, pasti: true,
          bunyi: 'DTPS dengan karya utama internasional \u2265 25% (3 th) / 50% (5 th)' },
  '49': { id: 'waktu_tunggu', syarat: 13, pasti: true,
          bunyi: 'Waktu tunggu lulusan \u2264 6 bulan' },
  '50': { id: 'sesuai_bidang', syarat: 14, pasti: true,
          bunyi: 'Kesesuaian bidang kerja lulusan \u2265 50%' },

  // ---- pemetaan yang BELUM dipastikan ---------------------------------
  // Ketiganya berbunyi "rerata skor" atas sebuah tabel matriks, bukan atas
  // satu butir. Kalau tabelnya mencakup beberapa butir, syaratnya dinilai
  // dari rerata butir-butir itu dan penandaan di bawah terlalu sempit.
  '4':  { id: 'tata_pamong', syarat: 1, pasti: false,
          bunyi: 'Rerata skor Tabel 4.1 Matriks Penilaian Sistem Tata Pamong '
               + '\u2265 3,00 (3 th) / 3,50 (5 th)',
          ragu: 'Perlu dipastikan apakah Tabel 4.1 mencakup butir 4 saja '
              + 'atau juga butir 5.' },
  '12': { id: 'kurikulum', syarat: 2, pasti: false,
          bunyi: 'Rerata skor Tabel 4.2 Matriks Penilaian Kurikulum '
               + '\u2265 3,00 (3 th) / 3,50 (5 th)',
          ragu: 'Perlu dipastikan butir mana saja yang masuk Tabel 4.2 — '
              + 'kemungkinan butir 12 sampai 16, bukan butir 12 saja.' },
  '53': { id: 'penjaminan_mutu', syarat: 15, pasti: false,
          bunyi: 'Rerata skor Tabel 4.3 Matriks Penilaian Penjaminan Mutu '
               + '\u2265 3,00 (3 th) / 3,50 (5 th)',
          ragu: 'Perlu dipastikan butir mana saja yang masuk Tabel 4.3 — '
              + 'kemungkinan butir 53 sampai 57, bukan butir 53 saja.' },
};

export const syaratButir = no => SYARAT[String(no)] || null;

// Jumlah butir yang pemetaannya masih perlu dipastikan; ditampilkan sekali
// di ringkasan supaya tidak hilang dari perhatian.
export const SYARAT_RAGU =
  Object.entries(SYARAT).filter(([, v]) => !v.pasti).map(([k]) => k);
