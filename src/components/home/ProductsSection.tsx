import React from "react";
import ProductCard from "./components/ProductCard";

const ProductsSection: React.FC = () => {
  return (
    <section className="product-area pt-70 pb-40">
      <div className="container-fluid">
        <div className="">
          <div className="col-xl-5 col-lg-12">
            <div className="area-title mb-50">
              <h2>Brand New Products</h2>
              <p>Browse the huge variety of our products</p>
            </div>
          </div>
        </div>
        <div className="">
          <div id="products-container" className="">
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
