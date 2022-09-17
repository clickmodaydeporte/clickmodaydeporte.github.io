import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="product-wrapper mb-50">
      <div className="product-img mb-25">
        <a href="">
          <img src="/images/products/pro15.jpg" />
          <img className="secondary-img" src="/images/products/pro16.jpg" />
        </a>
        <div className="sale-tag">
          <span className="new">new</span>
          <span className="sale">sale</span>
        </div>
      </div>
      <div className="product-content">
        <div className="pro-cat mb-10">
          <a href="">decor</a>
          <a href="">furniture</a>
        </div>
        <h4>
          <a href="">Minimal TromaFurniture</a>
        </h4>
        <div className="product-meta">
          <div className="pro-price">
            <span>$19 USD</span>
            <span className="old-price">$29 USD</span>
          </div>
        </div>
        <div className="product-whishlist">btn</div>
      </div>
    </div>
  );
};

export default ProductCard;
