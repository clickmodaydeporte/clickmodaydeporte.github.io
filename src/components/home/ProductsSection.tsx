import React from "react";
import { Product } from "../../interfaces";
import ProductCard from "../ProductCard";

const ProductsSection: React.FC<Product[]> = (newProducts) => {
  const products = Object.values(newProducts);

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
          <div id="products_container" className="row">
            {products.map((product) => {
              return (
                <div className="product-card_container col-lg-3 col-md-5">
                  <ProductCard key={product.art} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
