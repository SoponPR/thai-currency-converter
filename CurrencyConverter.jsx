import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, RefreshCw } from 'lucide-react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('THB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');

  // อัตราแลกเปลี่ยนจำลอง (ในการใช้งานจริงควรดึงจาก API)
  const [exchangeRates] = useState({
    THB: {
      USD: 0.028,
      EUR: 0.025,
      GBP: 0.022,
      JPY: 4.15,
      CNY: 0.20,
      KRW: 37.5,
      SGD: 0.038,
      MYR: 0.13,
      AUD: 0.042,
      CAD: 0.038
    },
    USD: {
      THB: 35.5,
      EUR: 0.91,
      GBP: 0.79,
      JPY: 149.8,
      CNY: 7.24,
      KRW: 1342,
      SGD: 1.35,
      MYR: 4.68,
      AUD: 1.51,
      CAD: 1.36
    }
  });

  const currencies = [
    { code: 'THB', name: 'บาทไทย', flag: '🇹🇭' },
    { code: 'USD', name: 'ดอลลาร์สหรัฐ', flag: '🇺🇸' },
    { code: 'EUR', name: 'ยูโร', flag: '🇪🇺' },
    { code: 'GBP', name: 'ปอนด์อังกฤษ', flag: '🇬🇧' },
    { code: 'JPY', name: 'เยนญี่ปุ่น', flag: '🇯🇵' },
    { code: 'CNY', name: 'หยวนจีน', flag: '🇨🇳' },
    { code: 'KRW', name: 'วอนเกาหลี', flag: '🇰🇷' },
    { code: 'SGD', name: 'ดอลลาร์สิงคโปร์', flag: '🇸🇬' },
    { code: 'MYR', name: 'ริงกิตมาเลเซีย', flag: '🇲🇾' },
    { code: 'AUD', name: 'ดอลลาร์ออสเตรเลีย', flag: '🇦🇺' },
    { code: 'CAD', name: 'ดอลลาร์แคนาดา', flag: '🇨🇦' }
  ];

  const convertCurrency = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setResult('');
      return;
    }

    setLoading(true);
    
    // จำลองการโหลด API
    setTimeout(() => {
      const numAmount = parseFloat(amount);
      let rate = 1;

      if (fromCurrency === toCurrency) {
        rate = 1;
      } else if (fromCurrency === 'THB') {
        rate = exchangeRates.THB[toCurrency] || 1;
      } else if (toCurrency === 'THB') {
        rate = exchangeRates.USD.THB / exchangeRates.THB[fromCurrency] || 1;
      } else {
        // แปลงผ่านบาทไทยเป็นตัวกลาง
        const toTHB = exchangeRates.USD.THB / exchangeRates.THB[fromCurrency] || 1;
        rate = toTHB * (exchangeRates.THB[toCurrency] || 1);
      }

      const convertedAmount = numAmount * rate;
      setResult(convertedAmount.toLocaleString('th-TH', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      }));
      setLastUpdate(new Date().toLocaleString('th-TH'));
      setLoading(false);
    }, 500);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount('');
    setResult('');
  };

  useEffect(() => {
    if (amount) {
      convertCurrency();
    } else {
      setResult('');
    }
  }, [amount, fromCurrency, toCurrency]);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">ระบบแปลงเงินสกุลบาทไทย</h1>
              <p className="text-blue-100">แปลงสกุลเงินต่างๆ กับบาทไทย</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Currency Converter */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* From Currency */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">จาก</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="ใส่จำนวนเงิน"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center md:flex-col">
              <button
                onClick={swapCurrencies}
                className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
              >
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            {/* To Currency */}
            <div className="space-y-4 md:col-start-2">
              <label className="block text-sm font-medium text-gray-700">เป็น</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>

              <div className="relative">
                <input
                  type="text"
                  value={result}
                  readOnly
                  placeholder="ผลการแปลง"
                  className="w-full p-4 text-lg bg-gray-50 border border-gray-300 rounded-lg"
                />
                {loading && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Result Display */}
          {result && !loading && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-green-800 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">ผลการแปลง</span>
              </div>
              <div className="text-2xl font-bold text-green-900 mb-1">
                {formatNumber(amount)} {fromCurrency} = {result} {toCurrency}
              </div>
              {lastUpdate && (
                <div className="text-sm text-green-600">
                  อัปเดตล่าสุด: {lastUpdate}
                </div>
              )}
            </div>
          )}

          {/* Popular Conversions */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              อัตราแลกเปลี่ยนยอดนิยม (1 บาทไทย)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(exchangeRates.THB).slice(0, 8).map(([currency, rate]) => {
                const currencyInfo = currencies.find(c => c.code === currency);
                return (
                  <div key={currency} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">
                      {currencyInfo?.flag} {currency}
                    </div>
                    <div className="font-bold text-gray-900">
                      {rate.toFixed(4)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="mt-6">
            <h4 className="text-md font-medium text-gray-700 mb-3">จำนวนเงินที่ใช้บ่อย</h4>
            <div className="flex flex-wrap gap-2">
              {['100', '500', '1000', '5000', '10000', '50000'].map(quickAmount => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(quickAmount)}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  {formatNumber(quickAmount)}
                </button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-xs text-gray-500 text-center">
            * อัตราแลกเปลี่ยนเป็นข้อมูลจำลอง สำหรับการใช้งานจริงควรตรวจสอบอัตราแลกเปลี่ยนล่าสุด
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;