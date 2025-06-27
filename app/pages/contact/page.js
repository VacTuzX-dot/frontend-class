export default function ContactPage() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div style={{ maxWidth: 360, width: "100%" }}>
        <h1
          className="text-white text-center mb-3"
          style={{ fontWeight: 400, fontSize: 28 }}
        >
          ติดต่อเรา
        </h1>
        <div className="text-center mb-4">
          <span className="text-secondary" style={{ fontSize: 15 }}>
            เราพร้อมรับฟังจากคุณ
          </span>
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <span className="text-muted small">อีเมล</span>
            <div className="text-white">hello@example.com</div>
          </div>
          <div className="mb-2">
            <span className="text-muted small">โทรศัพท์</span>
            <div className="text-white">+66 2 000 0000</div>
          </div>
          <div>
            <span className="text-muted small">ที่อยู่</span>
            <div className="text-white" style={{ lineHeight: 1.6 }}>
              123 ถนนสุขุมวิท
              <br />
              กรุงเทพมหานคร 10110
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-muted small">เราจะตอบกลับภายใน 24 ชั่วโมง</span>
        </div>
      </div>
    </div>
  );
}
