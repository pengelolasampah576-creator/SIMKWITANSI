
import React, { useState, useEffect, useRef } from 'react';
import { ReceiptData } from '../types';
import { numberToTerbilang, formatCurrency, formatIndonesianDate } from '../utils/formatter';
import { BUDGET_MAPPINGS, BudgetMapping } from '../data/mappings';
import { EMPLOYEES, Employee } from '../data/employees';

interface ReceiptFormProps {
  data: ReceiptData;
  onChange: (data: ReceiptData) => void;
}

// --- SUB-KOMPONEN DI LUAR UNTUK MENCEGAH RE-MOUNT ---

const BudgetSuggestionList = ({ 
  suggestions, 
  onSelect 
}: { 
  suggestions: BudgetMapping[], 
  onSelect: (m: BudgetMapping) => void 
}) => {
  if (suggestions.length === 0) return null;
  
  return (
    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-72 overflow-y-auto border-t-4 border-t-indigo-600">
      <div className="px-3 py-2 bg-indigo-50 text-[10px] text-indigo-700 font-bold uppercase sticky top-0 border-b border-indigo-100 flex justify-between items-center">
        <span>{suggestions.length} Pilihan Anggaran</span>
        <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[8px] animate-pulse">PENCARIAN AKTIF</span>
      </div>
      {suggestions.map((s, idx) => (
        <div 
          key={idx} 
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(s);
          }}
          className="px-4 py-3 hover:bg-indigo-50 cursor-pointer border-b last:border-0 transition-colors group"
        >
          <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded font-mono group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              {s.kodeRekening}
            </span>
          </div>
          <div className="text-sm text-gray-800 font-bold leading-tight mb-1 group-hover:text-indigo-900">{s.uraian}</div>
          <div className="space-y-0.5">
            <div className="text-[10px] text-gray-500 uppercase flex items-center gap-1.5">
              <i className="fa-solid fa-folder-open text-indigo-400 text-[9px]"></i> {s.kegiatan}
            </div>
            <div className="text-[10px] text-gray-400 uppercase italic flex items-center gap-1.5 pl-3">
              <i className="fa-solid fa-arrow-turn-up rotate-90 text-gray-300 text-[8px]"></i> {s.subKegiatan}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SignatureInput = ({ 
  label, 
  parentKey, 
  placeholder, 
  data, 
  handleChange, 
  empSuggestions, 
  onSelectEmployee 
}: { 
  label: string, 
  parentKey: string, 
  placeholder: string, 
  data: ReceiptData, 
  handleChange: (e: any) => void,
  empSuggestions: { field: string, list: Employee[] },
  onSelectEmployee: (fieldName: string, emp: Employee) => void
}) => {
  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-200";
  const signatureData = (data[parentKey as keyof ReceiptData] as any);
  
  return (
    <div className="relative">
      <p className={`text-xs font-black mb-2 uppercase tracking-widest border-b pb-1 ${
        parentKey === 'pptk' ? 'text-indigo-800 border-indigo-200' : 
        parentKey === 'penerima' ? 'text-green-800 border-green-200' :
        parentKey === 'penggunaAnggaran' ? 'text-slate-800 border-slate-300' : 'text-blue-800 border-blue-200'
      }`}>{label}</p>
      
      <div className="space-y-3 relative">
        {parentKey === 'penggunaAnggaran' && (
           <input 
            placeholder="Jabatan" 
            name="penggunaAnggaran.jabatan" 
            value={data.penggunaAnggaran.jabatan} 
            onChange={handleChange} 
            className={inputClass} 
          />
        )}
        
        <div className="relative">
          <input 
            placeholder={`Ketik nama ${placeholder}...`} 
            name={`${parentKey}.nama`} 
            value={signatureData.nama} 
            onChange={handleChange} 
            autoComplete="off"
            className={`${inputClass} font-medium`} 
          />
          {empSuggestions.field === `${parentKey}.nama` && empSuggestions.list.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-48 overflow-y-auto border-t-4 border-t-indigo-500">
              <div className="px-3 py-1 bg-gray-50 text-[10px] text-gray-400 font-bold uppercase">Saran Pegawai</div>
              {empSuggestions.list.map((emp, idx) => (
                <div 
                  key={idx} 
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onSelectEmployee(`${parentKey}.nama`, emp);
                  }}
                  className="px-4 py-2 hover:bg-indigo-50 cursor-pointer border-b last:border-0 transition-colors group"
                >
                  <div className="text-sm font-bold text-gray-800 group-hover:text-indigo-700">{emp.nama}</div>
                  <div className="text-[10px] text-gray-500 font-mono">NIP. {emp.nip}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <label className="absolute left-3 -top-2 px-1 bg-white text-[9px] font-bold text-gray-400 uppercase">NIP (Otomatis)</label>
          <input 
            placeholder={`NIP akan muncul otomatis`} 
            name={`${parentKey}.nip`} 
            value={signatureData.nip} 
            onChange={handleChange} 
            className={`${inputClass} font-mono text-xs bg-gray-50/30 text-indigo-600 font-bold`} 
          />
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---

const ReceiptForm: React.FC<ReceiptFormProps> = ({ data, onChange }) => {
  const [suggestions, setSuggestions] = useState<BudgetMapping[]>([]);
  const [activeSuggestionField, setActiveSuggestionField] = useState<string | null>(null);
  const [lastAutoFill, setLastAutoFill] = useState<string | null>(null);
  
  const [empSuggestions, setEmpSuggestions] = useState<{ field: string, list: Employee[] }>({ field: '', list: [] });
  
  const budgetContainerRef = useRef<HTMLDivElement>(null);
  const empRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (budgetContainerRef.current && !budgetContainerRef.current.contains(event.target as Node)) {
        setActiveSuggestionField(null);
      }
      if (empRef.current && !empRef.current.contains(event.target as Node)) {
        setEmpSuggestions({ field: '', list: [] });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectSuggestion = (mapping: BudgetMapping) => {
    onChange({
      ...data,
      kodeRekening: mapping.kodeRekening,
      kegiatan: mapping.kegiatan,
      subKegiatan: mapping.subKegiatan,
      untukPembayaran: `Pembayaran ${mapping.uraian}`
    });
    setActiveSuggestionField(null);
    setSuggestions([]);
    setLastAutoFill(mapping.kodeRekening);
    setTimeout(() => setLastAutoFill(null), 1500);
  };

  const selectEmployee = (fieldName: string, emp: Employee) => {
    const [parent] = fieldName.split('.');
    onChange({
      ...data,
      [parent]: {
        ...(data[parent as keyof ReceiptData] as any),
        nama: emp.nama,
        nip: emp.nip
      }
    });
    setEmpSuggestions({ field: '', list: [] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // 1. Budget Fields Handling
    if (name === 'kodeRekening' || name === 'kegiatan' || name === 'subKegiatan') {
      const words = value.toLowerCase().split(' ').filter(w => w.length > 0);
      
      if (words.length > 0) {
        const filtered = BUDGET_MAPPINGS.filter(m => {
          const searchContent = `${m.kodeRekening} ${m.uraian} ${m.kegiatan} ${m.subKegiatan}`.toLowerCase();
          return words.every(word => searchContent.includes(word));
        });
        
        setSuggestions(filtered);
        setActiveSuggestionField(name);

        if (filtered.length === 1) {
          const match = filtered[0];
          if (name === 'kodeRekening' && value === match.kodeRekening && match.kodeRekening !== data.kodeRekening) {
            selectSuggestion(match);
            return;
          }
        }
      } else {
        setSuggestions([]);
        setActiveSuggestionField(null);
      }
    }

    // 2. Signatory Fields Handling
    const signatoryFields = ['pptk.nama', 'penerima.nama', 'penggunaAnggaran.nama', 'bendahara.nama'];
    if (signatoryFields.includes(name)) {
      const [parent] = name.split('.');
      const words = value.toLowerCase().split(' ').filter(w => w.length > 0);
      
      if (words.length > 0) {
        const filtered = EMPLOYEES.filter(emp => {
          const nameLower = emp.nama.toLowerCase();
          return words.every(word => nameLower.includes(word));
        });
        
        setEmpSuggestions({ field: name, list: filtered });

        // Auto-fill NIP only if EXACT full name is typed
        const exactMatch = filtered.find(emp => emp.nama.toLowerCase() === value.toLowerCase());
        if (exactMatch) {
          onChange({
            ...data,
            [parent]: {
              ...(data[parent as keyof ReceiptData] as any),
              nama: value, // Tetap gunakan value user untuk casing, atau exactMatch.nama untuk auto-correct
              nip: exactMatch.nip
            }
          });
          return;
        }
      } else {
        setEmpSuggestions({ field: '', list: [] });
      }
    }

    // 3. Currency
    if (name === 'jumlahUang') {
      const numericValue = value.replace(/\D/g, '');
      const parsedValue = numericValue === '' ? 0 : parseFloat(numericValue);
      onChange({
        ...data,
        jumlahUang: parsedValue,
        uangSebanyak: numberToTerbilang(parsedValue)
      });
      return;
    }

    // 4. General Nested & Default
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      onChange({
        ...data,
        [parent]: {
          ...(data[parent as keyof ReceiptData] as any),
          [child]: value
        }
      });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-200";
  const labelClass = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider";
  const sectionTitle = "text-sm font-bold text-indigo-900 mb-4 flex items-center gap-2 border-b border-indigo-50 pb-2";

  return (
    <div className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      
      {/* SECTION ANGGARAN */}
      <div className="space-y-4" ref={budgetContainerRef}>
        <div className={sectionTitle}>
          <i className="fa-solid fa-bolt-lightning text-yellow-500"></i>
          Pencarian Anggaran & Pengisian Otomatis
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className={labelClass}>Kode Rekening</label>
            <div className="relative">
              <input 
                type="text" 
                name="kodeRekening" 
                autoComplete="off"
                placeholder="Misal: 5.1.02..."
                value={data.kodeRekening} 
                onChange={handleChange} 
                className={`${inputClass} pr-10 font-mono font-bold transition-all duration-300 ${lastAutoFill ? 'border-green-500 ring-2 ring-green-100 bg-green-50' : 'text-indigo-700'}`} 
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">
                <i className={`fa-solid ${lastAutoFill ? 'fa-check-circle text-green-500' : 'fa-magnifying-glass'}`}></i>
              </div>
            </div>
            {activeSuggestionField === 'kodeRekening' && (
              <BudgetSuggestionList suggestions={suggestions} onSelect={selectSuggestion} />
            )}
          </div>
          <div>
            <label className={labelClass}>Tahun Anggaran</label>
            <input type="text" name="tahunAnggaran" value={data.tahunAnggaran} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>BK Umum</label>
            <input 
              type="text" 
              name="bkUmum" 
              placeholder="Nomor BK Umum"
              value={data.bkUmum} 
              onChange={handleChange} 
              className={inputClass} 
            />
          </div>
          <div>
            <label className={labelClass}>Tanggal (Header)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                name="tanggal" 
                placeholder="Contoh: 12 Januari 2025"
                value={data.tanggal} 
                onChange={handleChange} 
                className={inputClass} 
              />
              <input 
                type="date" 
                className="w-10 h-9 p-0 border border-gray-300 rounded-md cursor-pointer flex-shrink-0"
                onChange={(e) => {
                  if (e.target.value) {
                    onChange({ ...data, tanggal: formatIndonesianDate(e.target.value) });
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <label className={labelClass}>Kegiatan</label>
            <textarea 
              name="kegiatan" 
              value={data.kegiatan} 
              onChange={handleChange} 
              autoComplete="off"
              className={`${inputClass} font-medium transition-colors duration-300 ${lastAutoFill ? 'bg-green-50 border-green-200' : 'bg-gray-50/30'}`} 
              rows={2} 
              placeholder="Ketik kata kunci kegiatan..."
            />
            {activeSuggestionField === 'kegiatan' && (
              <BudgetSuggestionList suggestions={suggestions} onSelect={selectSuggestion} />
            )}
          </div>
          <div className="relative">
            <label className={labelClass}>Sub Kegiatan</label>
            <textarea 
              name="subKegiatan" 
              value={data.subKegiatan} 
              onChange={handleChange} 
              autoComplete="off"
              className={`${inputClass} font-medium transition-colors duration-300 ${lastAutoFill ? 'bg-green-50 border-green-200' : 'bg-gray-50/30'}`} 
              rows={2} 
              placeholder="Ketik kata kunci sub kegiatan..."
            />
            {activeSuggestionField === 'subKegiatan' && (
              <BudgetSuggestionList suggestions={suggestions} onSelect={selectSuggestion} />
            )}
          </div>
        </div>
      </div>

      {/* SECTION DETAIL PEMBAYARAN */}
      <div className="pt-4">
        <div className={sectionTitle}>
          <i className="fa-solid fa-money-bill-wave text-indigo-500"></i>
          Detail Pembayaran
        </div>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Sudah Terima Dari</label>
            <input type="text" name="sudahTerimaDari" value={data.sudahTerimaDari} onChange={handleChange} className={inputClass} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="md:col-span-1">
              <label className={labelClass}>Nominal (RP)</label>
              <input 
                type="text" 
                name="jumlahUang" 
                value={data.jumlahUang === 0 ? '' : formatCurrency(data.jumlahUang)} 
                onChange={handleChange} 
                placeholder="0"
                className={`${inputClass} font-bold text-lg text-indigo-700`} 
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Terbilang</label>
              <textarea name="uangSebanyak" value={data.uangSebanyak} onChange={handleChange} className={`${inputClass} italic bg-gray-50 text-gray-600`} rows={2} readOnly />
            </div>
          </div>
          <div>
            <label className={labelClass}>Untuk Pembayaran</label>
            <textarea name="untukPembayaran" value={data.untukPembayaran} onChange={handleChange} className={`${inputClass} transition-colors duration-300 ${lastAutoFill ? 'bg-green-50 border-green-200' : ''}`} rows={3} />
          </div>
        </div>
      </div>

      {/* SECTION TEMPAT & TANGGAL TANDA TANGAN */}
      <div className="pt-4">
        <div className={sectionTitle}>
          <i className="fa-solid fa-location-dot text-red-500"></i>
          Tempat & Tanggal (Bawah)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Kota / Lokasi</label>
            <input 
              type="text" 
              name="lokasi" 
              placeholder="Contoh: Tanjung"
              value={data.lokasi} 
              onChange={handleChange} 
              className={inputClass} 
            />
          </div>
          <div>
            <label className={labelClass}>Tanggal Tanda Tangan</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                name="tanjungDate" 
                placeholder="Contoh: 15 Mei 2026"
                value={data.tanjungDate} 
                onChange={handleChange} 
                className={inputClass} 
              />
              <input 
                type="date" 
                className="w-10 h-9 p-0 border border-gray-300 rounded-md cursor-pointer flex-shrink-0"
                onChange={(e) => {
                  if (e.target.value) {
                    onChange({ ...data, tanjungDate: formatIndonesianDate(e.target.value) });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TANDA TANGAN */}
      <div className="pt-4" ref={empRef}>
        <div className={sectionTitle}>
          <i className="fa-solid fa-signature text-indigo-500"></i>
          Pejabat & Penanda Tangan (Pencarian Nama)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50/30 p-4 rounded-xl border border-indigo-100">
            <SignatureInput 
              label="PPTK" 
              parentKey="pptk" 
              placeholder="Nama PPTK" 
              data={data} 
              handleChange={handleChange} 
              empSuggestions={empSuggestions} 
              onSelectEmployee={selectEmployee} 
            />
          </div>
          <div className="bg-green-50/30 p-4 rounded-xl border border-green-100">
            <SignatureInput 
              label="Tanda Terima Uang" 
              parentKey="penerima" 
              placeholder="Nama Penerima" 
              data={data} 
              handleChange={handleChange} 
              empSuggestions={empSuggestions} 
              onSelectEmployee={selectEmployee} 
            />
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <SignatureInput 
              label="Pengguna Anggaran" 
              parentKey="penggunaAnggaran" 
              placeholder="Nama Pejabat" 
              data={data} 
              handleChange={handleChange} 
              empSuggestions={empSuggestions} 
              onSelectEmployee={selectEmployee} 
            />
          </div>
          <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100">
            <SignatureInput 
              label="Bendahara" 
              parentKey="bendahara" 
              placeholder="Nama Bendahara" 
              data={data} 
              handleChange={handleChange} 
              empSuggestions={empSuggestions} 
              onSelectEmployee={selectEmployee} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptForm;