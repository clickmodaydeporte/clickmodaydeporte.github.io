import { NextPage } from "next";
import React from "react";
import PagesBanner from "../../components/PagesBanner";
import ProductCard from "../../components/ProductCard";

const ProductList: NextPage = () => {
  return (
    <main>
      <PagesBanner urlImage="/images/pages-banner.jpg" title="Nuestros Productos" breadcrumb="Productos" />

      {/* <!-- shop-area start --> */}
      <section className="shop-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* <!-- tab content --> */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <ProductCard />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <ProductCard />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <ProductCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- shop-area end --> */}
    </main>
  );
};

export default ProductList;
