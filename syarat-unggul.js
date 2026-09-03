/* =====================================================================
   SYARAT PERLU PERINGKAT UNGGUL — dipetakan ke nomor butir MATRIKS
   ---------------------------------------------------------------------
   Instrumen syarat perlu peringkat punya penomoran SENDIRI (1–15) yang
   TIDAK sama dengan nomor butir matriks penilaian. `ambang.js` memakai
   penomoran syarat perlu; berkas ini menerjemahkannya ke nomor matriks
   yang dipakai halaman skor.

   Ambang dinyatakan dalam satuan aslinya (%, sks, bulan), sedangkan
   kartu skor menampilkan angka 0–4. Karena itu tiap entri juga memuat
   SKOR MINIMUM setara, diturunkan dari rumus matriks butir itu sendiri.
   Rumusnya naik monoton terhadap capaian, jadi "skor ≥ skorMin" setara
   dengan "capaian ≥ ambang". Penurunannya ditulis di tiap entri supaya
   bisa diperiksa ulang dengan tangan.

   u3 = Unggul masa berlaku 3 tahun · u5 = Unggul masa berlaku 5 tahun

   BELUM DIPETAKAN — sengaja tidak ditebak:
     syarat 1  Sistem tata pamong    -> rerata Tabel 4.1, bukan satu butir
     syarat 2  Kurikulum             -> rerata Tabel 4.2, bukan satu butir
     syarat 15 Penjaminan mutu       -> rerata Tabel 4.3, bukan satu butir
     syarat 9, 10, 11                -> belum pernah dibaca (lihat ambang.js)
   Keempatnya tidak diberi tanda di kartu mana pun. Memberi tanda pada
   butir yang salah lebih buruk daripada tidak memberi tanda sama sekali.
   ===================================================================== */

export const SYARAT_UNGGUL = {
  // syarat 3 — sks basic sciences dan matematika
  '19': {
    syarat: 3, label: 'Basic sciences dan matematika',
    u3: 25, u5: 25, satuan: 'sks', arah: 'min',
    skorMin: { u3: 4, u5: 4 },
    turunan: '≥ 25 sks → skor 4 pada matriks butir 19, jadi ambang setara skor 4,00',
  },
  // syarat 4 — DTPS berpendidikan doktor
  '27': {
    syarat: 4, label: 'DTPS berpendidikan doktor',
    u3: 30, u5: 40, satuan: '%', arah: 'min',
    skorMin: { u3: 3.2, u5: 3.6 },
    turunan: 'skor = 2 + (4 × PDS3) · PDS3 30% → 3,20 · 40% → 3,60',
  },
  // syarat 5 — DTPS berjabatan Lektor ke atas
  '28': {
    syarat: 5, label: 'DTPS berjabatan Lektor ke atas',
    u3: 40, u5: 50, satuan: '%', arah: 'min',
    skorMin: { u3: 2 + (20 * 0.40) / 7, u5: 2 + (20 * 0.50) / 7 },
    turunan: 'skor = 2 + (20 × PGBLKL)/7 · 40% → 3,14 · 50% → 3,43',
  },
  // syarat 7 — DTPS dengan karya utama internasional, 3 tahun terakhir
  '35': {
    syarat: 7, label: 'DTPS dengan karya utama internasional',
    u3: 25, u5: 50, satuan: '%', arah: 'min',
    skorMin: { u3: 2.5, u5: 4 },
    turunan: 'skor = 1 + (6 × PKDTPS) · 25% → 2,50 · 50% → 4,00',
  },
  // syarat 13 — waktu tunggu lulusan, 2 tahun terakhir
  '49': {
    syarat: 13, label: 'Waktu tunggu lulusan',
    u3: 6, u5: 6, satuan: 'bulan', arah: 'max',
    skorMin: { u3: 3.4, u5: 3.4 },
    turunan: 'skor = (23 − WT)/5 · WT 6 bulan → 3,40 · ambang ini BATAS ATAS, '
           + 'jadi waktu tunggu lebih pendek memberi skor lebih tinggi',
  },
  // syarat 14 — kesesuaian bidang kerja lulusan
  '50': {
    syarat: 14, label: 'Kesesuaian bidang kerja lulusan',
    u3: 50, u5: 50, satuan: '%', arah: 'min',
    skorMin: { u3: (20 * 0.50) / 3, u5: (20 * 0.50) / 3 },
    turunan: 'skor = (20 × KBK)/3 · 50% → 3,33',
  },
};

export const syaratButir = no => SYARAT_UNGGUL[String(no)] || null;

/** Status satu butir terhadap kedua sasaran. skor null = belum terhitung. */
export function statusSyarat(no, skor){
  const s = syaratButir(no);
  if (!s) return null;
  if (skor == null) return { ...s, u3ok: null, u5ok: null, tahu: false };
  // Perbandingan memakai toleransi kecil supaya pembulatan dua desimal di
  // layar tidak membuat butir yang tepat di ambang tampak gagal.
  const cukup = m => skor >= m - 0.005;
  return { ...s, u3ok: cukup(s.skorMin.u3), u5ok: cukup(s.skorMin.u5), tahu: true };
}

export const JUMLAH_SYARAT_TERPETAKAN = Object.keys(SYARAT_UNGGUL).length;
