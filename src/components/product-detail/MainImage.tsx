import React from "react";

interface props {
  activeImage: string
}

const MainImage: React.FC<props> = ({activeImage}) => {
  return (
    <div className="product-details-img mb-10">
      <div className="tab-content" id="myTabContentpro">
        <div className={`tab-pane fade ${activeImage === "product-image1" ? "show active" : ""}`} role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-banner-1.jpg" alt="" />
          </div>
        </div>
        <div className={`tab-pane fade ${activeImage === "product-image2" ? "show active" : ""}`} id="profile" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-1.jpg" alt="" />
          </div>
        </div>
        <div className={`tab-pane fade ${activeImage === "product-image3" ? "show active" : ""}`} id="profile1" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-2.jpg" alt="" />
          </div>
        </div>
        <div className={`tab-pane fade ${activeImage === "product-image4" ? "show active" : ""}`} id="profile1" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-2.jpg" alt="" />
          </div>
        </div>
        <div className={`tab-pane fade ${activeImage === "product-image5" ? "show active" : ""}`} id="profile1" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
