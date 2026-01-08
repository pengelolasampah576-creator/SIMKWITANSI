
import React from 'react';
import { ReceiptData } from '../types';
import { formatCurrency, toProperCase } from '../utils/formatter';

interface ReceiptPreviewProps {
  data: ReceiptData;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ data }) => {
  return (
    <div 
      className="print-container bg-white p-12 shadow-2xl mx-auto w-full max-w-[210mm] min-h-[297mm] text-[12px] leading-relaxed text-black"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Header Info */}
      <div className="flex justify-between mb-2">
        <div className="w-1/2">
          <table className="w-full">
            <tbody>
              <tr><td className="w-32">Tahun Anggaran</td><td className="w-4">:</td><td>{data.tahunAnggaran || '2025'}</td></tr>
              <tr><td>Kegiatan</td><td>:</td><td>{toProperCase(data.kegiatan) || '...'}</td></tr>
              <tr><td>Sub Kegiatan</td><td>:</td><td>{toProperCase(data.subKegiatan) || '...'}</td></tr>
              <tr><td>Kode Rekening</td><td>:</td><td>{data.kodeRekening || '...'}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/3">
          <table className="w-full">
            <tbody>
              <tr><td className="w-20">BK.Umum</td><td className="w-4">:</td><td>{data.bkUmum || '......................'}</td></tr>
              <tr className="h-6"></tr>
              <tr><td>Tanggal</td><td>:</td><td>{data.tanggal || '......................'}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center font-bold text-lg underline mb-6 uppercase">KWITANSI</div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <div className="w-40 shrink-0">Sudah Terima Dari</div>
          <div className="mr-2">:</div>
          <div className="border-b border-dotted border-black grow font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {toProperCase(data.sudahTerimaDari) || '...'}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-40 shrink-0">Uang sebanyak</div>
          <div className="mr-2">:</div>
          <div className="grow italic font-bold text-sm bg-gray-50 p-2 rounded border border-gray-200 leading-snug">
            {toProperCase(data.uangSebanyak) || '...'}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-40 shrink-0">Untuk Pembayaran</div>
          <div className="mr-2">:</div>
          <div className="grow whitespace-pre-wrap">{data.untukPembayaran || '...'}</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-10">
        <div className="border-2 border-black p-4 inline-block font-bold text-lg">
          <div className="flex gap-4">
            <span>Nominal Rp.</span>
            <span className="text-xl">{formatCurrency(data.jumlahUang)}</span>
          </div>
        </div>
        <div className="text-right whitespace-pre">
          Tanjung,                          {data.tanjungDate || '2025'}
        </div>
      </div>

      {/* Signature Grid */}
      <div className="grid grid-cols-2 gap-y-12">
        {/* Row 1 */}
        <div className="text-center px-4">
          <p>Mengetahui,</p>
          <p className="font-bold">PPTK</p>
          <div className="h-24"></div>
          <p className="font-bold underline uppercase">{data.pptk.nama || '...'}</p>
          <p>NIP. {data.pptk.nip || '...'}</p>
        </div>

        <div className="text-center px-4">
          <p>&nbsp;</p>
          <p className="font-bold">Tanda Terima Uang</p>
          <div className="h-24"></div>
          <p className="font-bold underline uppercase">{data.penerima.nama || '...'}</p>
          <p>NIP. {data.penerima.nip || '...'}</p>
        </div>

        {/* Row 2 */}
        <div className="text-center px-4">
          <p>Setuju dibayar :</p>
          <p className="font-bold uppercase">{data.penggunaAnggaran.jabatan || 'PENGGUNA ANGGARAN'}</p>
          <div className="h-24"></div>
          <p className="font-bold underline uppercase">{data.penggunaAnggaran.nama || '...'}</p>
          <p>NIP. {data.penggunaAnggaran.nip || '...'}</p>
        </div>

        <div className="text-center px-4">
          <p>Lunas dibayar :</p>
          <p className="font-bold uppercase">Bendahara Pengeluaran,</p>
          <div className="h-24"></div>
          <p className="font-bold underline uppercase">{data.bendahara.nama || '...'}</p>
          <p>NIP. {data.bendahara.nip || '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
