
export interface BudgetMapping {
  kegiatan: string;
  subKegiatan: string;
  kodeRekening: string;
  uraian: string;
}

export const BUDGET_MAPPINGS: BudgetMapping[] = [
  // PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH - Komunikasi
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", kodeRekening: "5.1.02.02.01.0060", uraian: "Belanja Jasa Komunikasi, Sumber Daya Air dan Listrik-Air Nopel" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", kodeRekening: "5.1.02.02.01.0061", uraian: "Belanja Jasa Komunikasi, Sumber Daya Air dan Listrik-Listrik Nopel" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik", kodeRekening: "5.1.02.02.01.0063", uraian: "Belanja Jasa Komunikasi, Sumber Daya Air dan Listrik-Internet Nopel" },
  
  // PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH - Pelayanan Umum
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.01.01.0035", uraian: "Belanja Souvenir/Cinderamata Hari Jadi/Expo dll" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.01.01.0052", uraian: "Belanja Penyediaan Makan dan Minuman" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.01.01.0054", uraian: "Belanja Makanan dan Minuman Harian Pegawai" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0025", uraian: "Belanja Dekorasi/Penyempurnaan Stand Pameran" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0028", uraian: "Front Desk Inspektorat Daerah" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0030", uraian: "Honorarium Pegawai Tidak Tetap-Petugas Kebersihan" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0031", uraian: "Honorarium Pegawai Tidak Tetap-Penjaga Malam/Wakar" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0033", uraian: "Belanja Jasa Tenaga Supir" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.01.01.0063", uraian: "Belanja Pakaian Dinas Harian (PDH)" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.01.0080", uraian: "Honorarium Pejabat Pelaksana Teknis Kegiatan (PPTK)" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.02.04.0117", uraian: "Sewa Stand Pameran Hari Jadi" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pelayanan Umum Kantor", kodeRekening: "5.1.02.05.01.0001", uraian: "Belanja Hadiah Doorprize Kegiatan Hari Jadi/Pameran Expo dll" },

  // PEMELIHARAAN BARANG MILIK DAERAH
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", kodeRekening: "5.1.02.01.01.0004", uraian: "Belanja Bahan Bakar Pertamax" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", kodeRekening: "5.1.02.03.02.0036", uraian: "Belanja Perawatan Kendaraan Bermotor Roda 4" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan", kodeRekening: "5.1.02.03.02.0038", uraian: "Belanja Perawatan Kendaraan Bermotor Roda 2" },

  // PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH - Surat Menyurat
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Surat Menyurat", kodeRekening: "5.1.02.01.01.0027", uraian: "Belanja Alat/Bahan untuk Kegiatan Kantor-Benda Pos-Belanja Materai" },
  { kegiatan: "PENYEDIAAN JASA PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Penyediaan Jasa Surat Menyurat", kodeRekening: "5.1.02.02.01.0064", uraian: "Belanja Pengiriman Paket/Surat" },

  // ADMINISTRASI UMUM - Instalasi Listrik
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor", kodeRekening: "5.1.02.01.01.0031", uraian: "Belanja Komponen Listrik/Penerangan Bangunan Kantor" },
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor", kodeRekening: "5.1.02.03.03.0001", uraian: "Instalasi Jaringan Listrik Gedung/Bangunan Kantor" },

  // PEMELIHARAAN BARANG MILIK DAERAH - Gedung
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.01.01.0012", uraian: "Belanja Bahan Lainnya" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.01.01.0030", uraian: "Belanja Alat/Bahan Perabot Kantor" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.02.01.0051", uraian: "Belanja Jasa Angkutan Sampah" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.03.02.0121", uraian: "Pemeliharaan Alat Pendingin" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.03.02.0405", uraian: "Pemeliharaan Komputer-Komputer Unit-Personal Computer" },
  { kegiatan: "PEMELIHARAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAHAN DAERAH", subKegiatan: "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya", kodeRekening: "5.1.02.03.02.0411", uraian: "Jasa Service, Suku Cadang, dan Kelengkapan Unit Lainnya-Printer" },

  // ADMINISTRASI KEPEGAWAIAN
  { kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", kodeRekening: "5.1.02.02.01.0003", uraian: "Honorarium Narasumber/Pembawa Acara Kegiatan Sosialisasi/Rekonsiliasi dll" },
  { kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", kodeRekening: "5.1.02.02.01.0080", uraian: "Belanja Honorarium Penanggungjawaban Pengelola Keuangan" },
  { kegiatan: "ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH", subKegiatan: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi", kodeRekening: "5.1.02.04.01.0001", uraian: "Belanja Perjalanan Dinas Biasa" },

  // ADMINISTRASI UMUM - Bahan Bacaan
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan", kodeRekening: "5.1.02.02.01.0055", uraian: "Belanja Jasa Iklan/Reklame, Film, dan Pemotretan" },
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan", kodeRekening: "5.1.02.02.01.0062", uraian: "Pembelian/langganan jurnal/surat kabar majalah" },

  // ADMINISTRASI UMUM - Barang Cetakan
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Barang Cetakan dan Penggandaan", kodeRekening: "5.1.02.01.01.0026", uraian: "Belanja Barang Cetakan/Spanduk" },
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyediaan Barang Cetakan dan Penggandaan", kodeRekening: "5.1.02.01.01.0030", uraian: "Bahan Cetak Umbul-umbul/Bendera" },

  // ADMINISTRASI KEUANGAN
  { kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", kodeRekening: "5.1.01.01.01.0001", uraian: "Gaji dan Tunjangan PNS" },
  { kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", kodeRekening: "5.1.01.01.01.0002", uraian: "Gaji dan Tunjangan PPPK" },
  { kegiatan: "ADMINISTRASI KEUANGAN PERANGKAT DAERAH", subKegiatan: "Penyediaan Gaji dan Tunjangan ASN", kodeRekening: "5.1.01.01.03.0001", uraian: "Belanja Tunjangan Jabatan PNS" },

  // ADMINISTRASI UMUM - Rapat Koordinasi
  { kegiatan: "ADMINISTRASI UMUM PERANGKAT DAERAH", subKegiatan: "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD", kodeRekening: "5.1.02.04.01.0001", uraian: "Perajalan Dinas Luar Kota Dalam Provinsi" },

  // PERENCANAAN, PENGANGGARAN - Dokumen Perencanaan
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0026", uraian: "Belanja Dokumen Perencanaan dan Keuangan" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0052", uraian: "Snack Rapat Perencanaan-makanan dan minuman Rapat Perencanaan" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0024", uraian: "Belanja Alat Tulis Kantor" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0025", uraian: "Belanja Kertas dan Cover" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0029", uraian: "Belanja Perlengkapan Komputer/Printer/Tinta dll" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.1.02.01.01.0035", uraian: "Belanja Karangan Bunga/Ucapan Selamat" },
  { kegiatan: "PERENCANAAN, PENGANGGARAN, DAN EVALUASI KINERJA PERANGKAT DAERAH", subKegiatan: "Penyusunan Dokumen Perencanaan Perangkat Daerah", kodeRekening: "5.2.02.10.01.0003", uraian: "Belanja Laptop" },
];
