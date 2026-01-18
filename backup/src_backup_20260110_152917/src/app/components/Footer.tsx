export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="text-lg tracking-tighter font-semibold text-zinc-950 uppercase mb-6 block">Provisions</a>
            <p className="text-sm text-zinc-500 mb-6 max-w-xs leading-relaxed">
              ไกด์อิสระสำหรับร้านอาหารและเครื่องดื่มที่ดีที่สุดในเมือง อัปเดตทุกสัปดาห์โดยทีมบรรณาธิการ
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-zinc-900 mb-4 text-sm">สำรวจ</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ร้านใหม่</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ย่าน</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Top 100</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ร้านราคาประหยัด</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-zinc-900 mb-4 text-sm">เกี่ยวกับ</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">พันธกิจของเรา</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">พบทีมบรรณาธิการ</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ร่วมงานกับเรา</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ติดต่อ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-zinc-900 mb-4 text-sm">สำหรับร้านอาหาร</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">ส่งร้านอาหาร</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">โฆษณา</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">© 2024 Provisions Guide. สงวนลิขสิทธิ์</p>
          <div className="flex gap-6 text-xs text-zinc-400">
            <a href="#" className="hover:text-zinc-600 transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">นโยบายบรรณาธิการ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
