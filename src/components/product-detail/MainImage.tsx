import React from "react";
import { IMG_URL } from "../../utils/consts";
import { ProductDetailImages } from "../../interfaces";

interface props extends ProductDetailImages {
  activeImage: string;
}

const MainImage: React.FC<props> = ({
  activeImage,
  imageID1,
  imageID2,
  imageID3,
  imageID4,
  imageID5,
  altImage1,
  altImage2,
  altImage3,
  altImage4,
  altImage5,
}) => {
  return (
    <div className="product-details-img mb-10">
      <div className="tab-content" id="product-detail-images">
        <div
          className={`tab-pane fade ${
            activeImage === "product-image1" ? "show active" : ""
          }`}
          role="tabpanel">
          <div className="product-large-img">
            <img src={IMG_URL + imageID1} alt={altImage1} />
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeImage === "product-image2" ? "show active" : ""
          }`}
          id="profile"
          role="tabpanel">
          <div className="product-large-img">
            <img src={IMG_URL + imageID2} alt={altImage2} />
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeImage === "product-image3" ? "show active" : ""
          }`}
          id="profile1"
          role="tabpanel">
          <div className="product-large-img">
            <img src={IMG_URL + imageID3} alt={altImage3} />
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeImage === "product-image4" ? "show active" : ""
          }`}
          id="profile1"
          role="tabpanel">
          <div className="product-large-img">
            <img src={IMG_URL + imageID4} alt={altImage4} />
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeImage === "product-image5" ? "show active" : ""
          }`}
          id="profile1"
          role="tabpanel">
          <div className="product-large-img">
            <img src={IMG_URL + imageID5} alt={altImage5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
