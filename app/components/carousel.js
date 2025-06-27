"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    // โหลด Bootstrap JS เฉพาะ client-side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const slides = [
    {
      src: "/images/slide1.jpg",
      alt: "Slide 1",
      title: "Example headline.",
      text: "Some representative placeholder content for the first slide of the carousel.",
      button: { label: "Sign up today", href: "#" },
      position: "text-start",
    },
    {
      src: "/images/slide2.png",
      alt: "Slide 2",
      title: "Another example headline.",
      text: "Some representative placeholder content for the second slide of the carousel.",
      button: { label: "Learn more", href: "#" },
      position: "",
    },
    {
      src: "/images/slide3.png",
      alt: "Slide 3",
      title: "One more for good measure.",
      text: "Some representative placeholder content for the third slide of this carousel.",
      button: { label: "Browse gallery", href: "#" },
      position: "text-end",
    },
  ];

  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {/* Container สำหรับรูปภาพที่มีความสูงคงที่ */}
            <div
              className="position-relative w-100"
              style={{ minHeight: "80vh" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="d-block"
                style={{
                  objectFit: "cover", // ครอปรูปให้พอดีกับขนาดที่กำหนด
                  objectPosition: "center", // จัดตำแหน่งรูปกึ่งกลาง
                }}
                priority={index === 0}
                sizes="100vw"
              />
            </div>

            {/* Caption overlay */}
            <div className="container">
              <div
                className={`carousel-caption ${slide.position} d-none d-md-block`}
              >
                <h1 className="display-5 fw-bold text-white mb-3">
                  {slide.title}
                </h1>
                <p className="fs-5 text-white-50 mb-4">{slide.text}</p>
                <p className="mb-0">
                  <a
                    className="btn btn-lg btn-primary px-4 py-2"
                    href={slide.button.href}
                    role="button"
                  >
                    {slide.button.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
        aria-label="Previous slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
        aria-label="Next slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-inner .position-relative {
            height: 300px !important;
          }
        }

        @media (max-width: 576px) {
          .carousel-inner .position-relative {
            height: 250px !important;
          }
        }

        .carousel-caption {
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
          padding: 2rem;
          border-radius: 0.5rem;
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 5%;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          width: 2rem;
          height: 2rem;
        }
      `}</style>
    </div>
  );
}
