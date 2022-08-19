import React from "react";
import PopupMinicartProduct from "../../PopupMinicartProduct";

const PopupMinicart: React.FC = () => {
  return (
    <ul className="minicart">
      <PopupMinicartProduct
        image="http://themepure.net/template/vue/vue/img/product/pro1.jpg"
        product="Black &amp; White Shoes"
        price={239.9}
      />
      <PopupMinicartProduct
        image="http://themepure.net/template/vue/vue/img/product/pro1.jpg"
        product="Black &amp; White Shoes"
        price={239.9}
      />
      <PopupMinicartProduct
        image="http://themepure.net/template/vue/vue/img/product/pro1.jpg"
        product="Black &amp; White Shoes"
        price={239.9}
      />
      <li>
        <div className="total-price">
          <span className="f-left">Total:</span>
          <span className="f-right">$300.0</span>
        </div>
      </li>
      <li>
        <div className="checkout-link">
          <a href="http://themepure.net/template/vue/vue/cart.html">Comprar</a>
        </div>
      </li>
    </ul>
  );
};

export default PopupMinicart;
