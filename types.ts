
export interface ReceiptData {
  id: string;
  tahunAnggaran: string;
  kegiatan: string;
  subKegiatan: string;
  kodeRekening: string;
  bkUmum: string;
  tanggal: string;
  sudahTerimaDari: string;
  uangSebanyak: string; // Terbilang (Words)
  untukPembayaran: string;
  jumlahUang: number; // Numeric
  tanjungDate: string;
  lokasi: string;
  pptk: {
    nama: string;
    nip: string;
  };
  penerima: {
    nama: string;
    nip: string;
  };
  penggunaAnggaran: {
    nama: string;
    nip: string;
    jabatan: string;
  };
  bendahara: {
    nama: string;
    nip: string;
  };
}

export interface ApiResponse {
  extractedData: Partial<ReceiptData>;
  confidence: number;
}
