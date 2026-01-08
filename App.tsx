
import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReceiptForm from './components/ReceiptForm';
import ReceiptPreview from './components/ReceiptPreview';
import { ReceiptData } from './types';
import { extractReceiptData } from './services/geminiService';
import { numberToTerbilang, formatCurrency } from './utils/formatter';

const INITIAL_RECEIPT: ReceiptData = {
  id: '',
  tahunAnggaran: '2025',
  kegiatan: '',
  subKegiatan: '',
  kodeRekening: '',
  bkUmum: '',
  tanggal: new Date().toLocaleDateString('id-ID'),
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
  const [data, setData] = useState<ReceiptData>({ ...INITIAL_RECEIPT, id: Date.now().toString() });
  const [history, setHistory] = useState<ReceiptData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'preview' | 'history'>('form');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('sigita_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to load history");
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sigita_history', JSON.stringify(history));
  }, [history]);

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

  const saveToHistory = () => {
    const exists = history.find(h => h.id === data.id);
    if (exists) {
      setHistory(history.map(h => h.id === data.id ? data : h));
    } else {
      setHistory([data, ...history]);
    }
    alert("Data berhasil dibackup ke riwayat lokal SIGITA!");
  };

  const deleteFromHistory = (id: string) => {
    if (confirm("Hapus data ini dari riwayat?")) {
      setHistory(history.filter(h => h.id !== id));
    }
  };

  const loadFromHistory = (item: ReceiptData) => {
    setData(item);
    setActiveTab('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exportToExcel = (items: ReceiptData[], fileName: string) => {
    const headers = [
      "ID", "Tahun", "Kode Rekening", "Kegiatan", "Sub Kegiatan", 
      "Terima Dari", "Jumlah Uang", "Terbilang", "Untuk Pembayaran", 
      "Tanggal", "PPTK", "Penerima", "Bendahara", "Pengguna Anggaran"
    ];

    const rows = items.map(item => [
      item.id,
      item.tahunAnggaran,
      item.kodeRekening,
      `"${item.kegiatan}"`,
      `"${item.subKegiatan}"`,
      `"${item.sudahTerimaDari}"`,
      item.jumlahUang,
      `"${item.uangSebanyak}"`,
      `"${item.untukPembayaran}"`,
      item.tanggal,
      `"${item.pptk.nama}"`,
      `"${item.penerima.nama}"`,
      `"${item.bendahara.nama}"`,
      `"${item.penggunaAnggaran.nama}"`
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(e => e.join(","))
    ].join("\n");

    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    if (confirm("Reset form kwitansi ini?")) {
      setData({ ...INITIAL_RECEIPT, id: Date.now().toString() });
      setError(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="no-print bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-inner">
              <i className="fa-solid fa-file-invoice-dollar text-indigo-700 text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter">SIGITA</h1>
              <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest leading-none">Sistem Integrasi Kwitansi Digital Tabalong</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
            
            <button onClick={() => fileInputRef.current?.click()} disabled={loading} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-3 py-2 rounded-lg transition text-sm disabled:opacity-50">
              <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-upload'}`}></i>
              OCR
            </button>

            <button onClick={saveToHistory} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg transition text-sm">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              Simpan
            </button>

            <button onClick={() => exportToExcel([data], `SIGITA_${data.kodeRekening || Date.now()}`)} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg transition text-sm">
              <i className="fa-solid fa-file-excel"></i>
              Excel
            </button>

            <button onClick={handlePrint} className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-3 py-2 rounded-lg transition text-sm">
              <i className="fa-solid fa-print"></i>
              Cetak/PDF
            </button>

            <button onClick={handleReset} className="bg-red-600/20 hover:bg-red-600 px-3 py-2 rounded-lg transition text-red-100">
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

        <div className="no-print flex mb-8 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 max-w-fit mx-auto">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'form' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i>
            Input Data
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fa-solid fa-eye mr-2"></i>
            Preview
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'history' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fa-solid fa-database mr-2"></i>
            Riwayat SIGITA ({history.length})
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          {activeTab === 'form' && (
            <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ReceiptForm data={data} onChange={setData} />
            </div>
          )}
          
          {activeTab === 'preview' && (
            <div className="w-full flex justify-center animate-in zoom-in-95 duration-500">
              <ReceiptPreview data={data} />
            </div>
          )}

          {activeTab === 'history' && (
            <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
                  <h3 className="font-bold text-indigo-900">Database Riwayat SIGITA</h3>
                  <button 
                    onClick={() => exportToExcel(history, `Rekap_SIGITA_${new Date().toLocaleDateString()}`)}
                    className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition font-bold flex items-center gap-2"
                  >
                    <i className="fa-solid fa-download"></i> Unduh Rekap Excel
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[10px] uppercase font-black text-gray-500">
                      <tr>
                        <th className="px-6 py-3">Tanggal</th>
                        <th className="px-6 py-3">Kode Rekening</th>
                        <th className="px-6 py-3">Uraian / Pembayaran</th>
                        <th className="px-6 py-3 text-right">Nominal</th>
                        <th className="px-6 py-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {history.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-gray-400 italic">Belum ada riwayat kwitansi di database SIGITA</td>
                        </tr>
                      ) : (
                        history.map((item) => (
                          <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors">
                            <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">{item.tanggal}</td>
                            <td className="px-6 py-4 font-bold text-indigo-600">{item.kodeRekening}</td>
                            <td className="px-6 py-4">
                              <div className="font-medium text-gray-800 line-clamp-1">{item.untukPembayaran}</div>
                              <div className="text-[10px] text-gray-400 line-clamp-1">{item.subKegiatan}</div>
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-gray-900">Rp {formatCurrency(item.jumlahUang)}</td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center gap-2">
                                <button onClick={() => loadFromHistory(item)} className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition" title="Edit/Muat">
                                  <i className="fa-solid fa-edit"></i>
                                </button>
                                <button onClick={() => exportToExcel([item], `SIGITA_${item.id}`)} className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition" title="Export Excel">
                                  <i className="fa-solid fa-file-excel"></i>
                                </button>
                                <button onClick={() => deleteFromHistory(item.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition" title="Hapus">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print py-6 text-center text-gray-400 text-xs border-t bg-white">
        <p>© 2024-2025 SIGITA - Sistem Integrasi Kwitansi Digital Tabalong</p>
        <p className="mt-1 font-medium text-indigo-300">Inspektorat Daerah Kabupaten Tabalong • Backup Lokal Aktif</p>
      </footer>
    </div>
  );
};

export default App;
