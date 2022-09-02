import React from "react";
import { Carousel } from "react-responsive-carousel";

const SliderSection: React.FC = () => {
  return (
    <section className="slider-area pos-relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        transitionTime={1000}
        infiniteLoop
        autoPlay>
        <div className="item">
          <img
            src="/images/click-banner-1.jpg"
            // src="https://via.placeholder.com/1600x800"
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
    </section>
  );
};

export default SliderSection;
