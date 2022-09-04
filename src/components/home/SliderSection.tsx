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
        autoPlay
      >
        <div className="item">
          <img
            src="/images/click-banner-3.jpg"
            // src="https://via.placeholder.com/1600x800"
            className="img-responsive"
            alt=""
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
                    className=""
                    style={{ animationDelay: "0.2s" }}>
                    Click Moda y Deporte
                  </span>
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className=""
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
            src="/images/click-banner-4.jpg"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="/images/click-banner-1.jpg"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="/images/click-banner-2.jpg"
            className="img-responsive"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
