import Link from "next/link";
import React from "react";
import { IMG_URL } from "../appConf";
import { ProductCard } from "../interfaces";

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  return (
    <Link href={`/${product.slug}`}>
      <a className="product-card-anchor">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="">
              <img src={IMG_URL + product.imageID1} />
              <img className="secondary-img" src={IMG_URL + product.imageID2} />
            </a>
            <div className="sale-tag">
              <span className="art">ART {product.art}</span>
            </div>
          </div>
          <div className="product-content">
            <div className="pro-cat mb-10">
              <a href="">{product.category}</a>
            </div>
            <h4>
              <a href="">{product.name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
