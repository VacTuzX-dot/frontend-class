/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    // โหลด Bootstrap JS เฉพาะ client-side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const slides = [
    {
      src: "/images/slide1.jpg",
      alt: "Slide 1",
    },
    {
      src: "/images/slide2.png",
      alt: "Slide 2",
    },
    {
      src: "/images/slide3.png",
      alt: "Slide 3",
    },
  ];

  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
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
              <div className="carousel-image-container">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="d-block w-100 carousel-image"
                />
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
          <i className="fa-solid fa-arrow-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
          aria-label="Next slide"
        >
          <i className="fa-solid fa-arrow-right"></i>
          <span className="visually-hidden">Next</span>
        </button>

        <style jsx>{`
          .carousel-image-container {
            position: relative;
            width: 100%;
            height: 80vh; /* ความสูงหลัก */
            overflow: hidden;
            background: #000;
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover; /* ครอปรูปให้พอดี ไม่บีบไม่ยืด */
            object-position: center; /* จัดตำแหน่งรูปกึ่งกลาง */
          }

          /* Responsive Design */
          @media (max-width: 992px) {
            .carousel-image-container {
              height: 60vh;
            }
          }

          @media (max-width: 768px) {
            .carousel-image-container {
              height: 50vh;
            }
          }

          @media (max-width: 576px) {
            .carousel-image-container {
              height: 40vh;
            }
          }

          /* ปรับแต่ง Controls */
          .carousel-control-prev,
          .carousel-control-next {
            width: 5%;
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }

          .carousel-control-prev:hover,
          .carousel-control-next:hover {
            opacity: 1;
          }

          .carousel-control-prev i,
          .carousel-control-next i {
            font-size: 1.5rem;
            color: white;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .carousel-control-prev:hover i,
          .carousel-control-next:hover i {
            background-color: rgba(0, 0, 0, 0.8);
            transform: scale(1.1);
          }

          /* ปรับแต่ง Indicators */
          .carousel-indicators {
            bottom: 20px;
          }

          .carousel-indicators button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin: 0 5px;
            background-color: rgba(255, 255, 255, 0.6);
            border: 2px solid rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
          }

          .carousel-indicators button.active {
            background-color: rgba(222, 0, 0, 1);
            transform: scale(1.2);
          }

          /* Smooth Transitions */
          .carousel-item {
            transition: transform 0.6s ease-in-out;
          }
        `}</style>
      </div>
    </>
  );
}
