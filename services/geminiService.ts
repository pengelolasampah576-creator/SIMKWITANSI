
import { GoogleGenAI, Type } from "@google/genai";
import { ReceiptData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const extractReceiptData = async (base64Image: string): Promise<Partial<ReceiptData>> => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are an Indonesian government administrative assistant specializing in OCR. 
    Your task is to extract all relevant fields from a "KWITANSI" image. 
    Fields include: Tahun Anggaran, Kegiatan, Sub Kegiatan, Kode Rekening, Sudah Terima Dari, 
    Uang Sebanyak (words), Untuk Pembayaran, Terbilang Rp (numbers), Date, and the Names/NIPs of all signatories.
    Return the data in a clean JSON format matching the requested schema.
    Translate labels to their appropriate technical keys.
  `;

  const prompt = "Extract the content of this Kwitansi document into structured JSON.";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image.split(",")[1] || base64Image,
              },
            },
          ],
        },
      ],
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tahunAnggaran: { type: Type.STRING },
            kegiatan: { type: Type.STRING },
            subKegiatan: { type: Type.STRING },
            kodeRekening: { type: Type.STRING },
            sudahTerimaDari: { type: Type.STRING },
            uangSebanyak: { type: Type.STRING },
            untukPembayaran: { type: Type.STRING },
            jumlahUang: { type: Type.NUMBER },
            tanjungDate: { type: Type.STRING },
            lokasi: { type: Type.STRING },
            pptk: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING },
                nip: { type: Type.STRING },
              }
            },
            penerima: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING },
                nip: { type: Type.STRING },
              }
            },
            penggunaAnggaran: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING },
                nip: { type: Type.STRING },
                jabatan: { type: Type.STRING },
              }
            },
            bendahara: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING },
                nip: { type: Type.STRING },
              }
            }
          }
        },
      },
    });

    const jsonStr = response.text;
    if (!jsonStr) throw new Error("Empty response from AI");
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Error extracting data:", error);
    throw error;
  }
};
