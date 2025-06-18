export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-light text-gray-900 tracking-wide">
            เกี่ยวกับเรา
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg font-light">
            ยินดีต้อนรับสู่พื้นที่ที่เราสร้างสรรค์ขึ้นด้วยใจ
          </p>

          <p className="text-base max-w-xl mx-auto">
            เราเชื่อในความเรียบง่ายที่มีความหมาย การออกแบบที่ใส่ใจในรายละเอียด
            และประสบการณ์ที่สร้างความประทับใจอย่างแท้จริง
          </p>

          <p className="text-sm text-gray-400 mt-8">
            สร้างขึ้นด้วยความตั้งใจ • ออกแบบด้วยความรัก
          </p>
        </div>
      </div>
    </div>
  );
}
