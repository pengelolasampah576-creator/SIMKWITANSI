
import React from 'react';
import { ReceiptData } from '../types';
import { numberToTerbilang } from '../utils/formatter';

interface ReceiptFormProps {
  data: ReceiptData;
  onChange: (data: ReceiptData) => void;
}

const ReceiptForm: React.FC<ReceiptFormProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
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
      let newValue: any = value;
      if (name === 'jumlahUang') {
        newValue = parseFloat(value) || 0;
        // Auto update terbilang
        onChange({
          ...data,
          jumlahUang: newValue,
          uangSebanyak: numberToTerbilang(newValue)
        });
        return;
      }
      onChange({ ...data, [name]: newValue });
    }
  };

  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm";
  const labelClass = "block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider";

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tahun Anggaran</label>
          <input type="text" name="tahunAnggaran" value={data.tahunAnggaran} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Kode Rekening</label>
          <input type="text" name="kodeRekening" value={data.kodeRekening} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Kegiatan</label>
        <textarea name="kegiatan" value={data.kegiatan} onChange={handleChange} className={inputClass} rows={2} />
      </div>

      <div>
        <label className={labelClass}>Sub Kegiatan</label>
        <textarea name="subKegiatan" value={data.subKegiatan} onChange={handleChange} className={inputClass} rows={2} />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Detail Pembayaran</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Sudah Terima Dari</label>
            <input type="text" name="sudahTerimaDari" value={data.sudahTerimaDari} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Jumlah Uang (Rp)</label>
            <input type="number" name="jumlahUang" value={data.jumlahUang} onChange={handleChange} className={`${inputClass} font-bold text-lg text-blue-700`} />
          </div>
          <div>
            <label className={labelClass}>Terbilang</label>
            <textarea name="uangSebanyak" value={data.uangSebanyak} onChange={handleChange} className={`${inputClass} italic bg-gray-50`} rows={2} readOnly />
          </div>
          <div>
            <label className={labelClass}>Untuk Pembayaran</label>
            <textarea name="untukPembayaran" value={data.untukPembayaran} onChange={handleChange} className={inputClass} rows={3} />
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Pejabat & Penanda Tangan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-bold text-blue-600 border-b pb-1">PPTK</p>
            <input placeholder="Nama PPTK" name="pptk.nama" value={data.pptk.nama} onChange={handleChange} className={inputClass} />
            <input placeholder="NIP PPTK" name="pptk.nip" value={data.pptk.nip} onChange={handleChange} className={inputClass} />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-blue-600 border-b pb-1">Penerima</p>
            <input placeholder="Nama Penerima" name="penerima.nama" value={data.penerima.nama} onChange={handleChange} className={inputClass} />
            <input placeholder="NIP Penerima" name="penerima.nip" value={data.penerima.nip} onChange={handleChange} className={inputClass} />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-blue-600 border-b pb-1">Pengguna Anggaran</p>
            <input placeholder="Jabatan" name="penggunaAnggaran.jabatan" value={data.penggunaAnggaran.jabatan} onChange={handleChange} className={inputClass} />
            <input placeholder="Nama Pengguna Anggaran" name="penggunaAnggaran.nama" value={data.penggunaAnggaran.nama} onChange={handleChange} className={inputClass} />
            <input placeholder="NIP Pengguna Anggaran" name="penggunaAnggaran.nip" value={data.penggunaAnggaran.nip} onChange={handleChange} className={inputClass} />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-blue-600 border-b pb-1">Bendahara</p>
            <input placeholder="Nama Bendahara" name="bendahara.nama" value={data.bendahara.nama} onChange={handleChange} className={inputClass} />
            <input placeholder="NIP Bendahara" name="bendahara.nip" value={data.bendahara.nip} onChange={handleChange} className={inputClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptForm;
