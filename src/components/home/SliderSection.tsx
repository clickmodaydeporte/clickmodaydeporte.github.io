import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const SliderSection: React.FC = () => {
  return (
    <div className="slider-area pos-relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={6000}
        transitionTime={1000}
        infiniteLoop
        // autoPlay
      >
        <div className="item">
          <img
            src="/images/click-slider-3.jpg"
            // src="https://via.placeholder.com/1600x800"
            className="img-responsive"
            alt="imagen de portada de la tienda Click moda y deporte"
          />
          <div className="shape-title">
            <h2>2022</h2>
          </div>
          <div className="container-fluid slide-text_wrapper">
            <div className="row">
              <div className="col-xl-7">
                <div className="slide-content pt-120">
                  <span
                    data-animation="fadeInRight"
                    data-delay=".2s"
                    className="cover"
                    style={{ animationDelay: "0.2s" }}>
                    Click Moda y Deporte
                  </span>
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="cover"
                    style={{ animationDelay: "0.5s" }}>
                    Creá tu propio estilo
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            src="/images/click-slider-4.jpg"
            className="img-responsive"
            alt="segunda imagen de portada de click Moda y Deporte"
          />
          <div className="container-fluid slide-text_wrapper">
            <div className="row">
              <div className="col-xl-9 second-item">
                <div className="slide-content pt-200">
                  <span
                    data-animation="fadeInRight"
                    data-delay=".2s"
                    className="slide-2"
                    style={{ animationDelay: "0.2s" }}>
                    Click Moda y Deporte
                  </span>
                  <h2
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="slide-2"
                    style={{ animationDelay: "0.5s" }}>
                    Estilo es usar lo que te hace sentir bien
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            src="/images/click-slider-2.jpg"
            className="img-responsive"
            alt=""
          />
          <div className="container-fluid slide-text_wrapper">
            <div className="row">
              <div className="col-xl-9 third-item">
                <div className="slide-content pt-200">
                  <span
                    data-animation="fadeInRight"
                    data-delay=".2s"
                    className="slide-3"
                    style={{ animationDelay: "0.2s" }}>
                    Click Moda y Deporte
                  </span>
                  <h2
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="slide-3"
                    style={{ animationDelay: "0.5s" }}>
                    Comodidad en tu entrenamiento.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            src="/images/click-slider-1.jpg"
            className="img-responsive"
            alt=""
          />
          <div className="container-fluid slide-text_wrapper">
            <div className="row">
              <div className="col-xl-9 fourth-item">
                <div className="slide-content pt-200">
                  <h2
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="slide-4"
                    style={{ animationDelay: "0.5s" }}>
                    Click Moda y Deporte
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
