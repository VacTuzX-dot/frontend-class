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
    <div className="min-vh-100 bg-dark d-flex align-items-center justify-content-center p-4">
      <div className="container text-center py-5">
        <div className="mb-4">
          <h1 className="display-5 fw-light text-white">บริการของเรา</h1>
          <div
            className="mx-auto my-3"
            style={{ width: "64px", height: "2px", background: "#dee2e6" }}
          ></div>
        </div>

        <p
          className="lead fw-light text-secondary mx-auto mb-5"
          style={{ maxWidth: "600px" }}
        >
          เราให้บริการที่ครอบคลุมทุกขั้นตอนของการสร้างประสบการณ์ดิจิทัล
        </p>

        <div className="row g-4 pt-3">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 h-100 shadow-sm hover-shadow">
                <div className="card-body d-flex flex-column align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#adb5bd",
                    }}
                  >
                    <div
                      className="rounded-circle"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#d0f0c0",
                      }}
                    ></div>
                  </div>
                  <h3 className="h5 fw-light text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted small mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-5">
          <p className="text-muted small">พร้อมเริ่มโปรเจกต์ใหม่กับเรา</p>
        </div>
      </div>
    </div>
  );
}
