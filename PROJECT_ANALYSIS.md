# การวิเคราะห์โครงการเว็บไซต์ (Provisions)

เอกสารนี้รวบรวมรายละเอียดล่าสุดจากการวิเคราะห์โครงสร้างโค้ดและองค์ประกอบของเว็บไซต์ "Provisions" ซึ่งได้รับการปรับปรุงครั้งใหญ่ (Major Overhaul) เพื่อยกระดับสู่ความพรีเมียมและประสบการณ์ผู้ใช้ (UX) ที่เหนือกว่า

## 1. ภาพรวมโครงการ (Project Overview)
เว็บไซต์ "Provisions" ถูกพัฒนาให้เป็น **Curated Service & Restaurant Guide** สำหรับพื้นที่ **วงศ์สว่าง (Wong Sawang)** เน้นสุนทรียภาพ (Aesthetics) และการโต้ตอบที่ลื่นไหล (Fluid Interaction) เป็นศูนย์รวมข้อมูลร้านค้าและบริการแบบ One-stop Service สำหรับผู้อยู่อาศัยและนักศึกษาในพื้นที่

## 2. Tech Stack
- **Runtime & PM**: **Bun** (Migrated from Node/npm)
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP (GreenSock) + ScrollTrigger
- **3D Graphics**: React Three Fiber + Three.js (WebGL)
- **Smooth Scroll**: Lenis
- **Interactive**: Magnetic Effects & Physics-based Animations

## 3. โครงสร้างไฟล์สำคัญ (Key File Structure)
- `src/app/page.tsx`: หน้า Homepage (Hero, Collections, Methodology, Featured Restaurants, Footer)
- `src/app/restaurants/page.tsx`: หน้ารวมร้านอาหาร
- `src/app/services/page.tsx`: หน้ารวมร้านบริการ (Services)
- `src/app/about/page.tsx`: หน้าเกี่ยวกับเรา
- `src/app/layout.tsx`: Root Layout พร้อม SmoothScroll, Grain Effect และ FloatingButton
- `src/app/components/`:
  - `Navbar.tsx`: เมนูนำทางแบบลอยตัว (Floating Island)
  - `FloatingButton.tsx`: ปุ่ม Music Player ลอยตัว (Play/Pause, Minimalist Glassmorphism)
  - `AmbientLight.tsx`: 3D WebGL Ambient Lighting (Orange Brand Theme)
  - `AmbientLightLite.tsx`: CSS-based Light สำหรับหน้าย่อย
  - `RestaurantCard.tsx`: การ์ดแสดงข้อมูลร้านค้า (ใช้ร่วมกันทั้งร้านอาหารและบริการ)
  - `CollectionSection.tsx` & `MethodologySection.tsx`: ส่วนประกอบหน้า Home
- `src/data/`:
  - `restaurants.ts`: ข้อมูลร้านอาหาร (16 ร้าน)
  - `services.ts`: ข้อมูลร้านบริการตามรายงานยุทธศาสตร์ (ทำผม, ซักรีด, ร้านยา, ทันตกรรม ฯลฯ)

## 4. UI/UX Features & Highlights

### 4.1 Homepage Structure
1. **Hero Section**: Kinetic Typography + 3D Logo Carousel Background
2. **Methodology & Collections**: ส่วนคัดสรรพิเศษและ Collections
3. **Featured Restaurants**: ร้านแนะนำ (Editor's Pick)
4. **Interactive Stats & Quote**: สร้างความน่าเชื่อถือ

### 4.2 Interactive Elements
- **Floating Music Player**: ปุ่มลอยตัวมุมขวาบน เล่นเพลง Background Music (`SaveTik.io...mp3`) พร้อม Animation คลื่นเสียงและ Play/Pause state
- **Floating Navbar**: เมนูนำทางแบบ Glassmorphism ลอยตัวอยู่ด้านบน
- **Magnetic Buttons**: ปุ่มมีแรงดึงดูดเมาส์ (Magnetic Effect)
- **Ambient Light**: พื้นหลังแสงสีส้มเคลื่อนไหวได้ (WebGL & CSS)

### 4.3 Content Strategy (Strategic Report Integration)
- **Real Business Data**: ข้อมูลร้านค้าในซอยวงศ์สว่าง 11 ถูกอัพเดตตามรายงานการวิเคราะห์ยุทธศาสตร์จริง (เช่น TK Hairtwo, Pit Barber, Greathousepharma)
- **Service Categories**: ครอบคลุมไลฟ์สไตล์ (ตัดผม, เล็บ, ซักรีด, ซ่อมไอที, ยา, ทันตกรรม)

## 5. การเปลี่ยนแปลงล่าสุด (Changelog)

### Version 2.2 (19 มกราคม 2026) - *Latest Update*
- [x] **Floating Music Player**: เพิ่มปุ่มเล่นเพลง Background ลอยตัวมุมขวาบน (Play/Pause, Minimal design)
- [x] **Services Page**: เปิดตัวหน้า `/services` รวมร้านบริการในพื้นที่วงศ์สว่าง
- [x] **Data Update**: อัพเดตข้อมูลร้านบริการตาม Strategic Report (Real businesses)
- [x] **UI Polish**: ปรับดีไซน์ Floating Button เป็น Glassmorphism, ย้ายตำแหน่งไปขวาบน
- [x] **Local Images**: รองรับการใช้งานรูปภาพจาก Local (`/images/services/...`)

### Version 2.1
- [x] **New Sections**: Methodology & Collections Section
- [x] **Performance**: AmbientLightLite for subpages
- [x] **Navbar Clean**: เอาปุ่ม "รายชื่อ 2026" ออก

### Version 2.0
- [x] **Major Redesign**: Orange Brand Theme, 3D WebGL Background, Lenis Scroll

## 6. ข้อเสนอแนะถัดไป (Next Steps)
1.  **SEO Optimization**: ปรับ Title/Meta tags ให้รองรับภาษาไทยและ Keywords ท้องถิ่น
2.  **Interactive Map**: แผนที่ระบุพิกัดร้านค้าจริงในซอย
3.  **Search Functionality**: ระบบค้นหาร้านทั้งหมด
4.  **Backend Integration**: เชื่อมต่อข้อมูลจริงจาก Supabase (ถ้าต้องการ Dynamic Update)

## 7. Performance Notes
- **Audio Handling**: ใช้ HTML5 Audio API ใน React `useEffect` สำหรับจัดการ Background Music
- **Image Optimization**: ใช้ WebP และ Next.js Image Component ลดขนาดไฟล์รูป
