"use client";
import { useState, useEffect } from "react";
import Carousel from "./components/carousel";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "สร้างสรรค์ประสบการณ์ดิจิทัล",
    "ออกแบบเว็บไซต์ที่น่าประทับใจ",
    "พัฒนาแอปพลิเคชันที่ทันสมัย",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(textInterval);
    };
  }, [heroTexts.length]);

  return (
    <>
      <div className="min-vh-100 bg-dark position-relative overflow-hidden">
        {/* Background Effects */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 110, 253, 0.1) 0%, transparent 50%)`,
            transition: "background 0.3s ease",
          }}
        />

        {/* Floating Particles */}
        <div className="position-absolute w-100 h-100 opacity-25">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="position-absolute bg-primary rounded-circle"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 3 + 2
                }s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div
          className="position-relative min-vh-100 d-flex align-items-center justify-content-center px-3"
          style={{ zIndex: 10 }}
        >
          <div className="container text-center">
            {/* Carousel */}
            <div
              className={`mb-5 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <Carousel />
            </div>

            {/* Hero Section */}
            <div
              className={`mb-5 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              {/* Name */}
              <div className="mb-4">
                <h1 className="display-1 fw-light text-primary mb-2 animate-glow">
                  Taweesak
                </h1>
                <h2 className="display-4 fw-light text-white-50">Numma</h2>
              </div>

              {/* Divider */}
              <div className="d-flex align-items-center justify-content-center gap-3 py-4">
                <div className="divider-line bg-primary"></div>
                <div className="divider-dot bg-primary rounded-circle animate-pulse"></div>
                <div className="divider-line bg-primary"></div>
              </div>

              {/* Rotating Text */}
              <div
                className="my-4 position-relative"
                style={{ minHeight: "60px" }}
              >
                <p className="fs-3 text-white-50 mb-0 animate-text-change">
                  {heroTexts[currentText]}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg position-relative overflow-hidden cta-button">
                  <span className="position-relative z-1">
                    เริ่มต้นโปรเจกต์
                  </span>
                  <div className="btn-shine"></div>
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div
              className={`row g-4 mt-5 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { number: "50+", label: "โปรเจกต์สำเร็จ", icon: "🚀" },
                { number: "3+", label: "ปีประสบการณ์", icon: "⭐" },
                { number: "100%", label: "ความประทับใจ", icon: "💎" },
              ].map((stat, index) => (
                <div key={index} className="col-12 col-md-4">
                  <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm h-100 stat-card">
                    <div className="card-body p-4">
                      <div className="fs-1 mb-2">{stat.icon}</div>
                      <div
                        className="fs-2 text-primary fw-bold mb-2 counter"
                        data-target={stat.number}
                      >
                        {stat.number}
                      </div>
                      <div className="text-white-50 fs-6">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(13, 110, 253, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(13, 110, 253, 0.8);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50%,
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-text-change {
          transition: all 0.5s ease-in-out;
        }

        .divider-line {
          width: 64px;
          height: 2px;
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .divider-dot {
          width: 16px;
          height: 16px;
          transition: all 0.3s ease;
        }

        .stat-card {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.1) !important;
        }

        .cta-button {
          transition: all 0.3s ease;
          border: none;
          background: linear-gradient(135deg, #0d6efd, #6610f2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(13, 110, 253, 0.4);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shine 3s infinite;
        }

        .scroll-indicator {
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          border-color: #0d6efd;
        }

        .scroll-dot {
          animation: float 2s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .display-1 {
            font-size: 3rem;
          }

          .display-4 {
            font-size: 2rem;
          }

          .fs-3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .btn-lg {
            padding: 0.75rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
