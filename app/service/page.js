export default function ServicePage() {
  const services = [
    {
      title: "ออกแบบ",
      description: "สร้างสรรค์ดิจิทัลเอกซ์พีเรียนซ์ที่สวยงามและใช้งานง่าย",
    },
    {
      title: "พัฒนา",
      description: "พัฒนาเว็บไซต์และแอปพลิเคชันที่ทันสมัยและมีประสิทธิภาพ",
    },
    {
      title: "ปรึกษา",
      description: "ให้คำแนะนำเชิงกลยุทธ์สำหรับการเติบโตทางดิจิทัล",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-light text-gray-900 tracking-wide">
            บริการของเรา
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <p className="text-lg font-light text-gray-600 max-w-xl mx-auto">
          เราให้บริการที่ครอบคลุมทุกขั้นตอนของการสร้างประสบการณ์ดิจิทัล
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4 group">
              <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-light text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <p className="text-xs text-gray-400">พร้อมเริ่มโปรเจกต์ใหม่กับเรา</p>
        </div>
      </div>
    </div>
  );
}
