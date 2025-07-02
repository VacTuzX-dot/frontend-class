/* eslint-disable @next/next/no-img-element */
import React from "react";
import { animate } from "animejs";

export default function Card() {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2e/d2/d9/2ed2d9f6-537e-69b7-0347-1fdd881a2c97/197342224826_cover.jpg/1200x1200bf-60.jpg",
      buttonText: "Go somewhere",
    },
    {
      id: 2,
      title: "Card Title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2e/d2/d9/2ed2d9f6-537e-69b7-0347-1fdd881a2c97/197342224826_cover.jpg/1200x1200bf-60.jpg",
      buttonText: "Learn more",
    },
    {
      id: 3,
      title: "Card Title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2e/d2/d9/2ed2d9f6-537e-69b7-0347-1fdd881a2c97/197342224826_cover.jpg/1200x1200bf-60.jpg",
      buttonText: "Read more",
    },
  ];

  return (
    <>
      {/* Bootstrap CSS CDN - ใส่ใน _app.js หรือ layout */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div className="container mt-5">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text flex-grow-1">{card.text}</p>
                  <a href="#" className="btn btn-primary mt-auto">
                    {card.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
