
import React from 'react';
import { ReceiptData } from '../types';
import { formatCurrency, toProperCase } from '../utils/formatter';

interface ReceiptPreviewProps {
  data: ReceiptData;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ data }) => {
  return (
    <div 
      className="print-container bg-white p-10 shadow-2xl mx-auto w-full max-w-[210mm] min-h-[297mm] text-[15px] leading-snug text-black"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Header Info */}
      <div className="flex justify-between mb-1 gap-4">
        <div className="flex-grow">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-36 align-top whitespace-nowrap">Tahun Anggaran</td>
                <td className="w-4 align-top">:</td>
                <td className="align-top">{data.tahunAnggaran || '2025'}</td>
              </tr>
              <tr>
                <td className="align-top whitespace-nowrap">Kegiatan</td>
                <td className="align-top">:</td>
                <td className="align-top">
                  <div className="text-left break-words">
                    {toProperCase(data.kegiatan) || '...'}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="align-top whitespace-nowrap">Sub Kegiatan</td>
                <td className="align-top">:</td>
                <td className="align-top">
                  <div className="text-left break-words">
                    {toProperCase(data.subKegiatan) || '...'}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="align-top whitespace-nowrap">Kode Rekening</td>
                <td className="align-top">:</td>
                <td className="align-top">{data.kodeRekening || '...'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-fit min-w-[180px]">
          <table className="w-full text-right">
            <tbody>
              <tr>
                <td className="w-24 align-top text-left whitespace-nowrap">BK.Umum</td>
                <td className="w-4 align-top text-center">:</td>
                <td className="align-top text-left">{data.bkUmum || '......................'}</td>
              </tr>
              <tr>
                <td className="align-top text-left whitespace-nowrap">Tanggal</td>
                <td className="w-4 align-top text-center">:</td>
                <td className="align-top text-left">{data.tanggal || '......................'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center font-bold text-xl underline mb-2 uppercase">KWITANSI</div>

      <div className="space-y-1 mb-3">
        <div className="flex items-center">
          <div className="w-48 shrink-0">Sudah Terima Dari</div>
          <div className="mr-2">:</div>
          <div className="grow font-bold whitespace-nowrap overflow-hidden text-ellipsis border-b border-transparent">
            {data.sudahTerimaDari || '...'}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-48 shrink-0">Terbilang</div>
          <div className="mr-2">:</div>
          <div className="grow italic font-bold text-base bg-gray-50 p-1.5 rounded border border-gray-200 leading-tight text-justify">
            {toProperCase(data.uangSebanyak) || '...'}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-48 shrink-0">Untuk Pembayaran</div>
          <div className="mr-2">:</div>
          <div className="grow whitespace-pre-wrap text-justify">{data.untukPembayaran || '...'}</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="w-1/2 flex justify-start">
          <div className="border-2 border-black p-3 inline-block font-bold italic">
            <div className="flex gap-4 items-center">
              <span className="text-lg">Nominal Rp.</span>
              <span className="text-2xl">{formatCurrency(data.jumlahUang)}</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center text-base">
          {data.lokasi || 'Tanjung'}, {data.tanjungDate || '2025'}
        </div>
      </div>

      {/* Signature Grid */}
      <div className="grid grid-cols-2 gap-y-2">
        {/* Row 1 */}
        <div className="text-center px-4">
          <p>Mengetahui,</p>
          <p className="font-bold">PPTK</p>
          <div className="h-14"></div>
          <p className="font-bold underline">{data.pptk.nama || '...'}</p>
          <p className="text-sm">NIP. {data.pptk.nip || '...'}</p>
        </div>

        <div className="text-center px-4">
          <p>&nbsp;</p>
          <p className="font-bold">Tanda Terima Uang</p>
          <div className="h-14"></div>
          <p className="font-bold underline">{data.penerima.nama || '...'}</p>
          <p className="text-sm">NIP. {data.penerima.nip || '...'}</p>
        </div>

        {/* Row 2 */}
        <div className="text-center px-4">
          <p>Setuju dibayar :</p>
          <p className="font-bold uppercase">{data.penggunaAnggaran.jabatan || 'PENGGUNA ANGGARAN'}</p>
          <div className="h-14"></div>
          <p className="font-bold underline">{data.penggunaAnggaran.nama || '...'}</p>
          <p className="text-sm">NIP. {data.penggunaAnggaran.nip || '...'}</p>
        </div>

        <div className="text-center px-4">
          <p>Lunas dibayar :</p>
          <p className="font-bold uppercase">Bendahara Pengeluaran,</p>
          <div className="h-14"></div>
          <p className="font-bold underline">{data.bendahara.nama || '...'}</p>
          <p className="text-sm">NIP. {data.bendahara.nip || '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
