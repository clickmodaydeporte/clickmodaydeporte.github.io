import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainImage from "../../components/product-detail/MainImage";
import { Product } from "../../interfaces";
import { getProducts } from "../../services/ProductService";

const ProductDetail: NextPage = () => {
  const [productDetail, setProductDetail] = useState<Product>();
  const [activeImage, setActiveImage] = useState<string>("product-image1");
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    getProducts().then((response) => {
      const prodDetail = response.filter((res) => res.slug === slug);
      setProductDetail(prodDetail[0]);
    });
  }, []);

  return (
    <main>
      <section className="shop-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4">
              <MainImage activeImage={activeImage} />
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image1")}>
                    <div
                      className="nav-link active"
                      id="product-image1"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="true">
                      <img src="/images/click-banner-1.jpg" alt="" />
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image2")}>
                    <div
                      className="nav-link"
                      id="product-image2"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="false">
                      <img src="/images/click-slider-1.jpg" alt="" />
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image3")}>
                    <div
                      className="nav-link"
                      id="product-image3"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="false">
                      <img src="/images/click-slider-2.jpg" alt="" />
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image4")}>
                    <div
                      className="nav-link"
                      id="product-image4"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="false">
                      <img src="/images/click-slider-2.jpg" alt="" />
                    </div>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image5")}>
                    <div
                      className="nav-link"
                      id="product-image5"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="false">
                      <img src="/images/click-slider-2.jpg" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="product-details mb-30 pl-30">
                <div className="details-cat mb-20">
                  <a href="">decor,</a>
                  <a href="">furniture</a>
                </div>
                <h2 className="pro-details-title mb-15">
                  Limonda Women Winter Cloth
                </h2>
                <div className="details-price mb-20">
                  <span>$119.00</span>
                </div>
                <div className="product-variant">
                  <div className="product-info-list variant-item">
                    <ul>
                      <li>
                        <span>Colores:</span> Rojo, negro y fucsia
                      </li>
                      <li>
                        <span>ART:</span> d12
                      </li>
                      <li>
                        <span>Stock:</span>{" "}
                        <span className="in-stock">Por pedido</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    Metodos de pago, 10% de descuento pagando en efectivo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
