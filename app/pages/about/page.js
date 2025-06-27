export default function AboutPage() {
  return (
    <div className="min-vh-100 bg-dark d-flex align-items-center justify-content-center p-4">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-light text-white">เกี่ยวกับเรา</h1>
          <div
            className="mx-auto my-3"
            style={{ width: "64px", height: "1px", background: "#495057" }}
          ></div>
        </div>
        <div className="text-secondary text-center">
          <p className="fs-4 fw-light mb-4 text-white">
            ยินดีต้อนรับสู่พื้นที่ที่เราสร้างสรรค์ขึ้นด้วยใจ
          </p>

          <p
            className="fs-5 mx-auto mb-4 text-white"
            style={{ maxWidth: "480px" }}
          >
            เราเชื่อในความเรียบง่ายที่มีความหมาย การออกแบบที่ใส่ใจในรายละเอียด
            และประสบการณ์ที่สร้างความประทับใจอย่างแท้จริง
          </p>

          <p className="fs-6 text-muted mt-5 text-white">
            สร้างขึ้นด้วยความตั้งใจ • ออกแบบด้วยความรัก
          </p>
        </div>
      </div>
    </div>
  );
}
