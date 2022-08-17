import React from "react";

const SliderSection: React.FC = () => {
  return (
    <section className="slider-area pos-relative">
      <div className="slider-active slick-initialized slick-slider">
        <button
          type="button"
          className="slick-prev slick-arrow"
          style={{ display: "block" }}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: "5715px" }}>
            <div
              className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center slick-slide slick-current slick-active"
              data-background="img/slider/slide2-1.jpg"
              data-slick-index="0"
              style={{
                backgroundImage: "url('img/slider/slide2-1.jpg')",
                width: "1905px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: 999,
                opacity: 1,
              }}
              aria-hidden="false"
              tabIndex={0}>
              <div className="shape-title bounce-animate">
                <h2>2019</h2>
              </div>
              <div className="shape-icon bounce-animate">
                <img
                  src="./Vue - Clean Minimal eCommerce HTML Template_files/shape-icon.png"
                  alt=""
                />
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="slide-content pt-80">
                      <span
                        data-animation="fadeInRight"
                        data-delay=".2s"
                        className=""
                        style={{ animationDelay: "0.2s" }}>
                        Women Collection
                      </span>
                      <h1
                        data-animation="fadeInUp"
                        data-delay=".5s"
                        className=""
                        style={{ animationDelay: "0.5s" }}>
                        New Arrivals
                      </h1>
                      <div
                        className="slider-price mb-25"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                        style={{ animationDelay: "0.7s" }}>
                        <span>$56.00</span>
                        <span className="old-price">$98.00</span>
                      </div>
                      <div className="slide-btn">
                        <a
                          className="btn theme-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInLeft"
                          data-delay=".9s"
                          tabIndex={0}
                          style={{ animationDelay: "0.9s" }}>
                          shop now
                        </a>
                        <a
                          className="btn white-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInRight"
                          data-delay="1.1s"
                          tabIndex={0}
                          style={{ animationDelay: "1.1s" }}>
                          category
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center slick-slide"
              data-background="img/slider/slide2-2.jpg"
              data-slick-index="1"
              style={{
                backgroundImage: 'url("img/slider/slide2-2.jpg")',
                width: "1905px",
                position: "relative",
                left: "-1905px",
                top: "0px",
                zIndex: "998",
                opacity: "0",
              }}
              aria-hidden="true"
              tabIndex={-1}>
              <div className="shape-title bounce-animate">
                <h2 className="home-2-shape">2019</h2>
              </div>
              <div className="shape-icon bounce-animate">
                <img
                  src="./Vue - Clean Minimal eCommerce HTML Template_files/shape-icon.png"
                  alt=""
                />
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="slide-content pt-80">
                      <span data-animation="fadeInRight" data-delay=".2s">
                        Women Collection
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".5s">
                        Women Product
                      </h1>
                      <div
                        className="slider-price mb-25"
                        data-animation="fadeInUp"
                        data-delay=".7s">
                        <span>$56.00</span>
                        <span className="old-price">$98.00</span>
                      </div>
                      <div className="slide-btn">
                        <a
                          className="btn theme-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInLeft"
                          data-delay=".9s"
                          tabIndex={-1}>
                          shop now
                        </a>
                        <a
                          className="btn white-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInRight"
                          data-delay="1.1s"
                          tabIndex={-1}>
                          category
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center slick-slide"
              data-background="img/slider/slide2-3.jpg"
              data-slick-index="2"
              style={{
                backgroundImage: 'url("img/slider/slide2-3.jpg")',
                width: "1905px",
                position: "relative",
                left: "-3810px",
                top: "0px",
                zIndex: "998",
                opacity: "0",
              }}
              aria-hidden="true"
              tabIndex={-1}>
              <div className="shape-title bounce-animate">
                <h2 className="home-2-shape">2019</h2>
              </div>
              <div className="shape-icon bounce-animate">
                <img
                  src="./Vue - Clean Minimal eCommerce HTML Template_files/shape-icon.png"
                  alt=""
                />
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="slide-content pt-80">
                      <span data-animation="fadeInRight" data-delay=".2s">
                        Women Collection
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".5s">
                        Trend Collection
                      </h1>
                      <div
                        className="slider-price mb-25"
                        data-animation="fadeInUp"
                        data-delay=".7s">
                        <span>$56.00</span>
                        <span className="old-price">$98.00</span>
                      </div>
                      <div className="slide-btn">
                        <a
                          className="btn theme-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInLeft"
                          data-delay=".9s"
                          tabIndex={-1}>
                          shop now
                        </a>
                        <a
                          className="btn white-btn"
                          href="http://themepure.net/template/vue/vue/shop.html"
                          data-animation="fadeInRight"
                          data-delay="1.1s"
                          tabIndex={-1}>
                          category
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="slick-next slick-arrow"
          style={{ display: "block" }}>
          {" "}
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default SliderSection;