import Image from "next/image";
import React from "react";

const BannerSection: React.FC = () => {
  return (
    <section className="banner-area pt-30 box-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <a href="">
                <Image
                  src="/images/click-banner-2.jpg"
                  // src="https://via.placeholder.com/528x279"
                  alt=""
                />
              </a>
              <div className="banner-trend">
                <span>Trendy Item</span>
                <h2>
                  <a href="">
                    New Year Trend Coming 2019
                  </a>
                </h2>
                <div className="discover-link">
                  <a href="">
                    discover
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <a href="">
                <Image
                  src="/images/click-banner-1.jpg"
                  alt=""
                />
              </a>
              <div className="banner-look">
                <span>Get the look</span>
                <h2>Festive Looks</h2>
                <Image
                  src="./Vue - Clean Minimal eCommerce HTML Template_files/look.png"
                  alt=""
                />
                <p>Your delivery of outfit ideas, updated daily</p>
                <a
                  href=""
                  className="btn theme-btn">
                  discover
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
