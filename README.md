# ระบบแปลงเงินสกุลบาทไทย (Thai Currency Converter)

โปรเจกต์นี้เป็นระบบแปลงเงินสกุลเงินต่างๆ โดยเน้นการแปลงกับบาทไทยเป็นหลัก พัฒนาด้วย React และ Tailwind CSS

## 🌟 ฟีเจอร์หลัก

### 🔄 การแปลงสกุลเงิน
- รองรับ 11 สกุลเงินหลัก (THB, USD, EUR, GBP, JPY, CNY, KRW, SGD, MYR, AUD, CAD)
- แปลงแบบ Real-time เมื่อพิมพ์ตัวเลข
- ปุ่มสลับสกุลเงินอย่างรวดเร็ว

### 💰 ส่วนประกอบที่มี
- ช่องกรอกจำนวนเงิน
- Dropdown เลือกสกุลเงิน (มีธงชาติประกอบ)
- แสดงผลการแปลงแบบ Realtime
- ปุ่มจำนวนเงินที่ใช้บ่อย (100, 500, 1,000 ฯลฯ)

### 📊 ข้อมูลเสริม
- แสดงอัตราแลกเปลี่ยนยอดนิยม
- ระบุเวลาอัปเดตล่าสุด
- Animation ระหว่างการโหลด

## 🛠️ เทคโนโลยีที่ใช้

- **React** - Frontend framework
- **Tailwind CSS** - สำหรับ styling
- **Lucide React** - สำหรับ icons
- **JavaScript/JSX** - ภาษาโปรแกรม

## 📋 ความต้องการของระบบ

- Node.js 16.0+ หรือใหม่กว่า
- npm 7.0+ หรือ yarn
- เว็บเบราว์เซอร์ที่รองรับ ES6+

## 🚀 วิธีการติดตั้งและใช้งาน

### วิธีที่ 1: ติดตั้งผ่าน npm (แนะนำ)

#### ขั้นตอนที่ 1: Clone โปรเจกต์
```bash
git clone https://github.com/your-username/thai-currency-converter.git
cd thai-currency-converter
```

#### ขั้นตอนที่ 2: ติดตั้ง Dependencies
```bash
npm install
```

#### ขั้นตอนที่ 3: รันโปรเจกต์
```bash
npm start
```

### วิธีที่ 2: ติดตั้งผ่าน Conda

#### ขั้นตอนที่ 1: สร้าง Conda Environment
```bash
# สร้าง environment ใหม่สำหรับ Node.js
conda create -n thai-currency-converter nodejs=18 npm -c conda-forge

# เปิดใช้งาน environment
conda activate thai-currency-converter
```

#### ขั้นตอนที่ 2: ติดตั้ง Dependencies เพิ่มเติม
```bash
# ติดตั้ง yarn (ถ้าต้องการ)
conda install yarn -c conda-forge

# ติดตั้ง React และ dependencies อื่นๆ
npm install react react-dom react-scripts
npm install lucide-react
```

#### ขั้นตอนที่ 3: ติดตั้ง Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### ขั้นตอนที่ 4: Clone หรือ Download โปรเจกต์
```bash
git clone https://github.com/your-username/thai-currency-converter.git
cd thai-currency-converter
```

#### ขั้นตอนที่ 5: ติดตั้ง Dependencies ที่เหลือ
```bash
npm install
```

#### ขั้นตอนที่ 6: รันโปรเจกต์
```bash
npm start
```

### วิธีที่ 3: ใช้งานผ่าน HTML โดยตรง (สำหรับการทดสอบ)

#### ขั้นตอนที่ 1: เปิดไฟล์ HTML
```bash
# เปิดไฟล์ index.html ในเว็บเบราว์เซอร์
open index.html
# หรือใน Windows
start index.html
```

ไฟล์ `index.html` ได้รวม CDN ไว้แล้ว สามารถใช้งานได้ทันที

## 🐍 การใช้งานกับ Python/Anaconda

หากคุณใช้ Anaconda หรือ Miniconda อยู่แล้ว:

### ขั้นตอนที่ 1: ตรวจสอบ Conda
```bash
conda --version
```

### ขั้นตอนที่ 2: สร้าง Environment พิเศษ
```bash
# สร้าง environment พร้อม Node.js
conda create -n currency-converter python=3.9 nodejs=18 npm -c conda-forge

# เปิดใช้งาน
conda activate currency-converter
```

### ขั้นตอนที่ 3: ติดตั้งและรันโปรเจกต์
```bash
# ติดตั้ง dependencies
npm install

# รันโปรเจกต์
npm start
```

### ขั้นตอนที่ 4: ปิดการใช้งาน (เมื่อเสร็จสิ้น)
```bash
conda deactivate
```

## 🔧 การตั้งค่า Tailwind CSS

### สร้างไฟล์ `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./*.{js,jsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sarabun': ['Sarabun', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

### เพิ่ม Tailwind CSS ใน CSS
สร้างไฟล์ `src/index.css` หรือเพิ่มใน `styles.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Sarabun', sans-serif;
}
```

## 📱 การใช้งาน

1. **เลือกสกุลเงินต้นทาง** - เลือกจาก dropdown "จาก"
2. **เลือกสกุลเงินปลายทาง** - เลือกจาก dropdown "เป็น"
3. **ใส่จำนวนเงิน** - พิมพ์ตัวเลขในช่องกรอก
4. **ดูผลลัพธ์** - ระบบจะแสดงผลการแปลงอัตโนมัติ
5. **ใช้ปุ่มสลับ** - คลิกปุ่ม refresh เพื่อสลับสกุลเงิน
6. **ปุ่มจำนวนด่วน** - คลิกปุ่มตัวเลขเพื่อใส่จำนวนเงินอย่างรวดเร็ว

## 💱 สกุลเงินที่รองรับ

| สกุลเงิน | ชื่อเต็ม | ธงชาติ |
|---------|----------|--------|
| THB | บาทไทย | 🇹🇭 |
| USD | ดอลลาร์สหรัฐ | 🇺🇸 |
| EUR | ยูโร | 🇪🇺 |
| GBP | ปอนด์อังกฤษ | 🇬🇧 |
| JPY | เยนญี่ปุ่น | 🇯🇵 |
| CNY | หยวนจีน | 🇨🇳 |
| KRW | วอนเกาหลี | 🇰🇷 |
| SGD | ดอลลาร์สิงคโปร์ | 🇸🇬 |
| MYR | ริงกิตมาเลเซีย | 🇲🇾 |
| AUD | ดอลลาร์ออสเตรเลีย | 🇦🇺 |
| CAD | ดอลลาร์แคนาดา | 🇨🇦 |

## 🎯 Scripts ที่ใช้ได้

```bash
# เริ่มต้นการพัฒนา
npm start

# สร้างไฟล์ production
npm run build

# รันการทดสอบ
npm test

# ดู configuration (advanced)
npm run eject
```

## 🔍 การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

#### 1. npm install ไม่ทำงาน
```bash
# ลบ node_modules และ package-lock.json
rm -rf node_modules package-lock.json

# ติดตั้งใหม่
npm install
```

#### 2. Tailwind CSS ไม่ทำงาน
```bash
# ตรวจสอบ config
npx tailwindcss --help

# Rebuild CSS
npm run build
```

#### 3. Port 3000 ถูกใช้งาน
```bash
# ใช้ port อื่น
PORT=3001 npm start
```

#### 4. ปัญหากับ Conda Environment
```bash
# ลิสต์ environments
conda env list

# ลบ environment
conda env remove -n thai-currency-converter

# สร้างใหม่
conda create -n thai-currency-converter nodejs=18 npm -c conda-forge
```

## 🚨 หมายเหตุสำคัญ

### ⚠️ เรื่องอัตราแลกเปลี่ยน
**อัตราแลกเปลี่ยนในระบบนี้เป็นข้อมูลจำลอง** 

สำหรับการใช้งานจริงในระบบ Production ควร:
1. เชื่อมต่อกับ API อัตราแลกเปลี่ยนจริง
2. อัปเดตอัตราแลกเปลี่ยนตามเวลาจริง
3. เพิ่มระบบ Error handling
4. เพิ่ม Unit testing

### 🔌 API ที่แนะนำสำหรับการใช้งานจริง

- [ExchangeRate-API](https://exchangerate-api.com/) - ฟรี 1,500 requests/เดือน
- [Fixer.io](https://fixer.io/) - ฟรี 1,000 requests/เดือน
- [CurrencyAPI](https://currencyapi.com/) - ฟรี 300 requests/เดือน
- [OpenExchangeRates](https://openexchangerates.org/) - ฟรี 1,000 requests/เดือน

## 🛠️ การปรับแต่งเพิ่มเติม

### เพิ่มสกุลเงินใหม่

แก้ไขในไฟล์ `CurrencyConverter.jsx`:

```javascript
const currencies = [
  { code: 'NEW', name: 'สกุลเงินใหม่', flag: '🏳️' },
  // ... สกุลเงินอื่นๆ
];

// เพิ่มอัตราแลกเปลี่ยน
const [exchangeRates] = useState({
  THB: {
    NEW: 0.123, // อัตราแลกเปลี่ยนใหม่
    // ... อัตราอื่นๆ
  }
});
```

### เปลี่ยนธีมสี

แก้ไขใน `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#your-color',
      'secondary': '#your-secondary-color',
    }
  },
}
```

### เพิ่มฟอนต์ไทย

```css
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Prompt', 'Sarabun', sans-serif;
}
```

## 📄 โครงสร้างไฟล์

```
thai-currency-converter/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── CurrencyConverter.jsx
│   ├── styles/
│   │   └── index.css
│   └── App.js
├── package.json
├── tailwind.config.js
├── README.md
└── .gitignore
```

## 🤝 การมีส่วนร่วม

หากต้องการช่วยพัฒนาโปรเจกต์:

1. Fork repository
2. สร้าง branch ใหม่ (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add amazing feature'`)
4. Push ไป branch (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

## 📝 License

MIT License - สามารถนำไปใช้และแก้ไขได้อย่างอิสระ

## 👨‍💻 ผู้พัฒนา

- **Your Name** - [GitHub](https://github.com/your-username)
- **Email** - your.email@example.com

## 🙏 ขอบคุณ

- [React](https://reactjs.org/) - สำหรับ UI framework
- [Tailwind CSS](https://tailwindcss.com/) - สำหรับ styling
- [Lucide React](https://lucide.dev/) - สำหรับ icons
- [Google Fonts](https://fonts.google.com/) - สำหรับฟอนต์ไทย

---

🎉 **ขอให้สนุกกับการใช้งาน Thai Currency Converter!**

หากมีปัญหาหรือข้อสงสัย สามารถสร้าง Issue ในส่วน GitHub Issues ได้เลย