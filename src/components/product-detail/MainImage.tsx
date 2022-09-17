import React from "react";

const MainImage: React.FC = () => {
  return (
    <div className="product-details-img mb-10">
      <div className="tab-content" id="myTabContentpro">
        <div className="tab-pane fade show active" id="home" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-banner-1.jpg" alt="" />
          </div>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-1.jpg" alt="" />
          </div>
        </div>
        <div className="tab-pane fade" id="profile1" role="tabpanel">
          <div className="product-large-img">
            <img src="/images/click-slider-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
