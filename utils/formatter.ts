
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const numberToTerbilang = (n: number): string => {
  if (n === 0) return "Nol Rupiah";
  
  const units = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  
  const say = (n: number): string => {
    let temp = "";
    if (n < 12) {
      temp = " " + units[n];
    } else if (n < 20) {
      temp = say(n - 10) + " Belas";
    } else if (n < 100) {
      temp = say(Math.floor(n / 10)) + " Puluh" + say(n % 10);
    } else if (n < 200) {
      temp = " Seratus" + say(n - 100);
    } else if (n < 1000) {
      temp = say(Math.floor(n / 100)) + " Ratus" + say(n % 100);
    } else if (n < 2000) {
      temp = " Seribu" + say(n - 1000);
    } else if (n < 1000000) {
      temp = say(Math.floor(n / 1000)) + " Ribu" + say(n % 1000);
    } else if (n < 1000000000) {
      temp = say(Math.floor(n / 1000000)) + " Juta" + say(n % 1000000);
    } else if (n < 1000000000000) {
      temp = say(Math.floor(n / 1000000000)) + " Miliar" + say(n % 1000000000);
    }
    return temp;
  };

  const result = say(n).trim() + " Rupiah";
  return result.replace(/\s+/g, ' ');
};
