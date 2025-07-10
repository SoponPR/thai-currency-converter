# การติดตั้งและใช้งาน

## วิธีเปิดใช้งานแบบง่าย (ไม่ต้องติดตั้งอะไรเพิ่ม)

1. **เปิดไฟล์ index.html ในเบราว์เซอร์**
   - Double-click ที่ไฟล์ `index.html`
   - หรือลากไฟล์ `index.html` ไปวางในเบราว์เซอร์
   - หรือคลิกขวาที่ไฟล์ แล้วเลือก "Open with" > "Browser"

2. **ระบบจะทำงานทันที** โดยไม่ต้องติดตั้งอะไรเพิ่มเติม

## วิธีติดตั้งแบบ Development Environment

### ขั้นตอนที่ 1: สร้างโปรเจกต์ React ใหม่

```bash
npx create-react-app thai-currency-converter
cd thai-currency-converter
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### ขั้นตอนที่ 3: Config Tailwind CSS

แทนที่เนื้อหาใน `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### ขั้นตอนที่ 4: แทนที่ไฟล์ CSS

แทนที่เนื้อหาใน `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Sarabun', sans-serif;
}
```

### ขั้นตอนที่ 5: แทนที่ไฟล์ App.js

```jsx
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
}

export default App;
```

### ขั้นตอนที่ 6: คัดลอกไฟล์ Component

คัดลอกเนื้อหาจากไฟล์ `CurrencyConverter.jsx` ไปใส่ในไฟล์ `src/CurrencyConverter.js`

### ขั้นตอนที่ 7: เริ่มต้น Development Server

```bash
npm start
```

## โครงสร้างไฟล์

```
thai-currency-converter/
├── CurrencyConverter.jsx    # React component หลัก
├── index.html              # HTML สำหรับ standalone usage
├── styles.css              # Custom CSS styles
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Package dependencies
└── README.md              # คู่มือการใช้งาน
```

## Features ที่สร้างเสร็จแล้ว

✅ แปลงสกุลเงิน 11 สกุลเงินหลัก  
✅ Real-time conversion  
✅ ปุ่มสลับสกุลเงิน  
✅ แสดงอัตราแลกเปลี่ยนยอดนิยม  
✅ ปุ่มจำนวนเงินที่ใช้บ่อย  
✅ Responsive design  
✅ Thai language support  
✅ Loading animation  
✅ Beautiful UI with Tailwind CSS  

## การปรับแต่งเพิ่มเติม

### เชื่อมต่อกับ Real API

สำหรับการใช้งานจริง แนะนำให้แทนที่ข้อมูล `exchangeRates` ด้วยการเรียก API จริง:

```javascript
const fetchExchangeRates = async () => {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/THB');
    const data = await response.json();
    setExchangeRates(data.rates);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
};
```

### เพิ่มสกุลเงินใหม่

เพิ่มในอาร์เรย์ `currencies`:

```javascript
{ code: 'NEW', name: 'สกุลเงินใหม่', flag: '🏳️' }
```

### ปรับแต่ง Styling

แก้ไขใน `styles.css` หรือเปลี่ยนคลาส Tailwind ใน component

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## เบราว์เซอร์ที่แนะนำ

สำหรับการใช้งานที่ดีที่สุด แนะนำให้ใช้:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## Known Issues

- อัตราแลกเปลี่ยนเป็นข้อมูลจำลอง
- ไม่มีการเก็บประวัติการแปลง
- ไม่รองรับ offline mode

สำหรับ production ควรเพิ่ม:
- Real API integration
- Error handling
- Unit tests
- Progressive Web App features