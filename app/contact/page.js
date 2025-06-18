export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-light text-gray-900 tracking-wide">
            ติดต่อเรา
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 font-light">เราพร้อมรับฟังจากคุณ</p>

          <div className="space-y-4 text-sm">
            <div className="space-y-1">
              <p className="text-gray-400 uppercase tracking-wider text-xs">
                อีเมล
              </p>
              <p className="text-gray-700">hello@example.com</p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 uppercase tracking-wider text-xs">
                โทรศัพท์
              </p>
              <p className="text-gray-700">+66 2 000 0000</p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 uppercase tracking-wider text-xs">
                ที่อยู่
              </p>
              <p className="text-gray-700 leading-relaxed">
                123 ถนนสุขุมวิท
                <br />
                กรุงเทพมหานคร 10110
              </p>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-xs text-gray-400">
              เราจะตอบกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
