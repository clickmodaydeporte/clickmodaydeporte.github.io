import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PagesBanner from "../../components/PagesBanner";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../interfaces";
import { getProducts } from "../../services/ProductService";
import { categoryFilter } from "../../utils/utils";

const ProductList: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    getProducts().then((response) => {
      const categoryFiltered = categoryFilter(response, category);
      setProducts(categoryFiltered);
    });
  }, [category]);

  return (
    <main>
      <PagesBanner
        urlImage="/images/pages-banner.jpg"
        title="Nuestros Productos"
        breadcrumb="Productos"
      />

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
                    {products?.map((product) => {
                      return (
                        <div key={product.art} className="col-lg-4 col-md-6">
                          <ProductCard product={product} />
                        </div>
                      );
                    })}
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
