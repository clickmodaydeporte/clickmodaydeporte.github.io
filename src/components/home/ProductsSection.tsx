import React from "react";
import ProductCard from "../ProductCard";

const ProductsSection: React.FC = () => {
  return (
    <section className="product-area pt-70 pb-40">
      <div className="container-fluid">
        <div className="">
          <div className="col-lg-12">
            <div className="area-title new-products">
              <h2>Nuevos Ingresos!</h2>
              <p>Estos son son algunos de nuestros productos.</p>
            </div>
          </div>
        </div>
        <div className="">
          <div id="products_container" className="">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
