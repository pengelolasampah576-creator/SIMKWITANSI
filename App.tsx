
import React, { useState, useCallback, useRef } from 'react';
import ReceiptForm from './components/ReceiptForm';
import ReceiptPreview from './components/ReceiptPreview';
import { ReceiptData } from './types';
import { extractReceiptData } from './services/geminiService';
import { numberToTerbilang } from './utils/formatter';

const INITIAL_RECEIPT: ReceiptData = {
  id: Date.now().toString(),
  tahunAnggaran: '2025',
  kegiatan: '',
  subKegiatan: '',
  kodeRekening: '',
  bkUmum: '',
  tanggal: '',
  sudahTerimaDari: 'Bendahara Pengeluaran Inspektorat Daerah Kabupaten Tabalong',
  uangSebanyak: '',
  untukPembayaran: '',
  jumlahUang: 0,
  tanjungDate: new Date().getFullYear().toString(),
  lokasi: 'Tanjung',
  pptk: { nama: '', nip: '' },
  penerima: { nama: '', nip: '' },
  penggunaAnggaran: { nama: '', nip: '', jabatan: 'PENGGUNA ANGGARAN' },
  bendahara: { nama: '', nip: '' }
};

const App: React.FC = () => {
  const [data, setData] = useState<ReceiptData>(INITIAL_RECEIPT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64 = reader.result as string;
        const extracted = await extractReceiptData(base64);
        
        setData(prev => ({
          ...prev,
          ...extracted,
          pptk: { ...prev.pptk, ...extracted.pptk },
          penerima: { ...prev.penerima, ...extracted.penerima },
          penggunaAnggaran: { ...prev.penggunaAnggaran, ...extracted.penggunaAnggaran },
          bendahara: { ...prev.bendahara, ...extracted.bendahara },
          // Recalculate terbilang if amount was extracted
          uangSebanyak: extracted.jumlahUang ? numberToTerbilang(extracted.jumlahUang) : prev.uangSebanyak
        }));
        
        setActiveTab('form');
      } catch (err) {
        setError("Gagal mengekstrak data dari gambar. Silakan coba lagi atau isi secara manual.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePrint = () => {
    setActiveTab('preview');
    setTimeout(() => window.print(), 100);
  };

  const handleReset = () => {
    if (confirm("Reset semua data kwitansi?")) {
      setData(INITIAL_RECEIPT);
      setError(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="no-print bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <i className="fa-solid fa-file-invoice-dollar text-indigo-700 text-2xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">SimKwitansi</h1>
              <p className="text-xs text-indigo-200">Sistem Manajemen Kwitansi Pemerintah</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition font-medium text-sm disabled:opacity-50"
            >
              <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-upload'}`}></i>
              {loading ? 'Mengekstrak...' : 'Upload & OCR'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition font-medium text-sm"
            >
              <i className="fa-solid fa-print"></i>
              Cetak
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600 px-3 py-2 rounded-lg transition font-medium text-sm text-red-100"
            >
              <i className="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {error && (
          <div className="no-print mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 rounded-r-lg shadow-sm">
            <i className="fa-solid fa-circle-exclamation"></i>
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="no-print flex mb-6 bg-white p-1 rounded-xl shadow-sm border border-gray-100 max-w-fit mx-auto">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'form' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i>
            Input Data
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fa-solid fa-eye mr-2"></i>
            Preview Kwitansi
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {activeTab === 'form' ? (
            <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-300">
              <ReceiptForm data={data} onChange={setData} />
            </div>
          ) : (
            <div className="w-full flex justify-center animate-in zoom-in-95 duration-300">
              <ReceiptPreview data={data} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print py-6 text-center text-gray-400 text-xs border-t bg-white">
        <p>© 2024 SimKwitansi - Dioptimalkan untuk Inspektorat Daerah Kabupaten Tabalong</p>
      </footer>
    </div>
  );
};

export default App;
