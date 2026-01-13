
export interface BudgetMapping {
  kegiatan: string;
  subKegiatan: string;
  kodeRekening: string;
  uraian: string;
}

export const BUDGET_MAPPINGS: BudgetMapping[] = [
  // Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", 
    kodeRekening: "5.1.02.02.01.0060", 
    uraian: "Belanja Tagihan Air-Nopel" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", 
    kodeRekening: "5.1.02.02.01.0061", 
    uraian: "Belanja Tagihan Listrik-Nopel" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", 
    kodeRekening: "5.1.02.02.01.0063", 
    uraian: "Belanja Kawat/Faksimili/Internet/TV Berlangganan-Nopel" 
  },

  // Penyediaan Jasa Pelayanan Umum Kantor
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.01.01.0035", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Suvenir/Cendera Mata-Belanja Souvenir/Cinderamata Hari Jadi/Expo dll" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.01.01.0052", 
    uraian: "Belanja Makanan dan Minuman Rapat" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.01.01.0054", 
    uraian: "Belanja Penambah Daya Tahan Tubuh" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0025", 
    uraian: "Belanja Jasa Tenaga Kesenian dan Kebudayaan-Dekorasi/Penyempurnaan Stand Pameran" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0028", 
    uraian: "Belanja Jasa Tenaga Pelayanan Umum-Tenaga Pramubakti" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0030", 
    uraian: "Belanja Jasa Tenaga Kebersihan" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0031", 
    uraian: "Belanja Jasa Tenaga Keamanan" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0033", 
    uraian: "Belanja Jasa Tenaga Supir" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.01.01.0063", 
    uraian: "Belanja Pakaian Dinas Harian (PDH)" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.01.0080", 
    uraian: "Belanja Honorarium Penanggung Jawaban Pengelola Keuangan(PPTK)" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.02.04.0117", 
    uraian: "Belanja Sewa Alat Kantor Lainnya-Sewa Stand Pameran Hari Jadi" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", 
    kodeRekening: "5.1.02.05.01.0001", 
    uraian: "Belanja Hadiah yang Bersifat Perlombaan-Belanja Hadiah Doorprize Kegiatan Hari Jadi/Pameran Expo dll" 
  },

  // Penyediaan Jasa Pemeliharaan Kendaraan
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", 
    kodeRekening: "5.1.02.01.01.0004", 
    uraian: "Belanja Bahan-Bahan Bakar dan Pelumas" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", 
    kodeRekening: "5.1.02.03.02.0036", 
    uraian: "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Bermotor Penumpang-R4" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", 
    kodeRekening: "5.1.02.03.02.0038", 
    uraian: "Belanja Pemeliharaan Alat Angkutan-Alat Angkutan Darat Bermotor-Kendaraan Bermotor Beroda Dua-R2" 
  },

  // Penyediaan Jasa Surat Menyurat
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Surat Menyurat", 
    kodeRekening: "5.1.02.01.01.0027", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Benda Pos-Belanja Materai" 
  },
  { 
    kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Penyediaan Jasa Surat Menyurat", 
    kodeRekening: "5.1.02.02.01.0064", 
    uraian: "Belanja Paket/Pengiriman" 
  },

  // Penyediaan Komponen Instalasi Listrik
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor", 
    kodeRekening: "5.1.02.01.01.0031", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Listrik" 
  },
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor", 
    kodeRekening: "5.1.02.03.03.0001", 
    uraian: "Belanja Pemeliharaan Bangunan Gedung-Bangunan Gedung Tempat Kerja-Bangunan Gedung Kantor" 
  },

  // Pemeliharaan/Rehabilitasi Gedung Kantor
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.01.01.0012", 
    uraian: "Belanja Bahan-Bahan Lainnya" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.01.01.0030", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Perabot Kantor" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.02.01.0051", 
    uraian: "Belanja Jasa Pengolahan Sampah" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.03.02.0121", 
    uraian: "Belanja Pemeliharaan Alat Kantor dan Rumah Tangga-Alat Rumah Tangga-Alat Pendingin" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.03.02.0405", 
    uraian: "Belanja Pemeliharaan Komputer-Komputer Unit-Personal Computer" 
  },
  { 
    kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", 
    subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", 
    kodeRekening: "5.1.02.03.02.0411", 
    uraian: "Belanja Pemeliharaan Komputer-Peralatan Komputer-Peralatan Komputer Lainnya" 
  },

  // Pendidikan dan Pelatihan Pegawai
  { 
    kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", 
    subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", 
    kodeRekening: "5.1.02.02.01.0003", 
    uraian: "Honorarium Narasumber atau Pembahas, Moderator, Pembawa Acara, dan Panitia" 
  },
  { 
    kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", 
    subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", 
    kodeRekening: "5.1.02.02.01.0080", 
    uraian: "Belanja Honorarium Penanggung Jawaban Pengelola Keuangan" 
  },
  { 
    kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", 
    subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", 
    kodeRekening: "5.1.02.04.01.0001", 
    uraian: "Belanja Perjalanan Dinas Biasa" 
  },

  // Penyediaan Bahan Bacaan
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan", 
    kodeRekening: "5.1.02.02.01.0055", 
    uraian: "Belanja Jasa Iklan/Reklame, Film, dan Pemotretan" 
  },
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan", 
    kodeRekening: "5.1.02.02.01.0062", 
    uraian: "Belanja Langganan Jurnal/Surat Kabar/Majalah" 
  },

  // Penyediaan Barang Cetakan dan Penggandaan
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Barang Cetakan dan Penggandaan", 
    kodeRekening: "5.1.02.01.01.0026", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Bahan Cetak-Spanduk" 
  },
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Barang Cetakan dan Penggandaan", 
    kodeRekening: "5.1.02.01.01.0030", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Perabot Kantor-Bendera" 
  },

  // Penyediaan Gaji dan Tunjangan ASN
  { 
    kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", 
    kodeRekening: "5.1.01.01.01.0001", 
    uraian: "Belanja Gaji Pokok PNS" 
  },
  { 
    kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", 
    kodeRekening: "5.1.01.01.01.0002", 
    uraian: "Belanja Gaji Pokok PPPK" 
  },
  { 
    kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", 
    subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", 
    kodeRekening: "5.1.01.01.03.0001", 
    uraian: "Belanja Tunjangan Jabatan PNS" 
  },

  // Penyelenggaraan Rapat Koordinasi
  { 
    kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", 
    subKegiatan: "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD", 
    kodeRekening: "5.1.02.04.01.0001", 
    uraian: "Belanja Perjalanan Dinas Biasa" 
  },

  // Penyusunan Dokumen Perencanaan (Bagian 1)
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0026", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Bahan Cetak-Perencanaan" 
  },
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0052", 
    uraian: "Snack Rapat Perencanaan-makanan dan minuman Rapat Perencanaan" 
  },

  // Penyusunan Dokumen Perencanaan (Bagian 2)
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0024", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor" 
  },
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0025", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Kertas dan Cover" 
  },
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0029", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer" 
  },
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.1.02.01.01.0035", 
    uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor- Suvenir/Cendera Mata" 
  },
  { 
    kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", 
    subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", 
    kodeRekening: "5.2.02.10.01.0003", 
    uraian: "Belanja Modal Komputer Unit Lainnya-Belanja Pengadaan Laptop" 
  },
];
