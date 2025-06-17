import React, { useState } from "react";

const MainAbout = () => {
  const images = [
    "/src/assets/images/portfolio_right.jpg",
    "/src/assets/images/portfolio_right_2.jpg",
    "/src/assets/images/portfolio_right_3.jpg" // 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const nextImage = () => {
    setHasError(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setHasError(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="about container">
      <div className="about-left box-shadow">
        <h2>About me</h2>
        <p>
          Я могу создавать различного рода сайты на заказ, игры. Единственное что требуется от клиента, 
          это его пожелание в стилях для сайта, и сюжет, если это игра. Также стоимость будет варьироваться от 
          объема работы. С играми проще. Цена будет зависеть от количества работы и идейности.
        </p>
      </div>

      <div className="about-right box-shadow">
        <div style={{ position: "relative", height: "100%" }}>
          {hasError ? (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "rgb(229, 139, 14)",
              fontSize: "20px",
              textAlign: "center"
            }}>
              Извините, не было картинок
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt=""
              onError={() => setHasError(true)}
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "0",
              right: "0",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <button onClick={prevImage}>←</button>
            <button onClick={nextImage}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;


