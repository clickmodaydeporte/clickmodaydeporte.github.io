import Image from "next/image";
import React from "react";

interface PopupMinicartProductProps {
  image: string;
  product: string;
  price: number;
}

const PopupMinicartProduct: React.FC<PopupMinicartProductProps> = ({
  image,
  product,
  price,
}) => {
  return (
    <li>
      <div className="cart-img">
        <a href="">
          <Image src={image} alt="" />
        </a>
      </div>
      <div className="cart-content">
        <h3>
          <a href="">{product}</a>
        </h3>
        <div className="cart-price">
          <span className="new">$ {price}</span>
          <span>
            <del>${price}</del>
          </span>
        </div>
      </div>
      <div className="del-icon">
        <a href="">
          <i className="far fa-trash-alt"></i>
        </a>
      </div>
    </li>
  );
};

export default PopupMinicartProduct;
