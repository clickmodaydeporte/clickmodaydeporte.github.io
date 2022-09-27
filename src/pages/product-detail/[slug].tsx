import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IMG_URL } from "../../appConf";
import MainImage from "../../components/product-detail/MainImage";
import { Product } from "../../interfaces";
import { getProducts } from "../../services/ProductService";
import { productDetailFilter } from "../../utils/utils";

const ProductDetail: NextPage = () => {
  const [productDetail, setProductDetail] = useState<Product>();
  const [activeImage, setActiveImage] = useState<string>("product-image1");
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    getProducts().then((response) => {
      const prodDetail = productDetailFilter(response, slug)
      setProductDetail(prodDetail);
    });
  }, [slug]);

  return (
    <main>
      <section className="shop-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <MainImage
                activeImage={activeImage}
                imageID1={productDetail?.imageID1}
                imageID2={productDetail?.imageID2}
                imageID3={productDetail?.imageID3}
                imageID4={productDetail?.imageID4}
                imageID5={productDetail?.imageID5}
                altImage1={productDetail?.altImage1!}
                altImage2={productDetail?.altImage2!}
                altImage3={productDetail?.altImage3!}
                altImage4={productDetail?.altImage4!}
                altImage5={productDetail?.altImage5!}
              />
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="images-list" role="tablist">
                  <li
                    className="nav-item"
                    onClick={() => setActiveImage("product-image1")}>
                    <div
                      className="nav-link active"
                      id="product-image1"
                      data-toggle="tab"
                      role="tab"
                      aria-selected="true">
                      <img src={IMG_URL + productDetail?.imageID1} alt="" />
                    </div>
                  </li>
                  {productDetail?.imageID2 !== "#N/A" && (
                    <li
                      className="nav-item"
                      onClick={() => setActiveImage("product-image2")}>
                      <div
                        className="nav-link"
                        id="product-image2"
                        data-toggle="tab"
                        role="tab"
                        aria-selected="false">
                        <img src={IMG_URL + productDetail?.imageID2} alt="" />
                      </div>
                    </li>
                  )}
                  {productDetail?.imageID3 !== "#N/A" && (
                    <li
                      className="nav-item"
                      onClick={() => setActiveImage("product-image3")}>
                      <div
                        className="nav-link"
                        id="product-image3"
                        data-toggle="tab"
                        role="tab"
                        aria-selected="false">
                        <img src={IMG_URL + productDetail?.imageID3} alt="" />
                      </div>
                    </li>
                  )}
                  {productDetail?.imageID4 !== "#N/A" && (
                    <li
                      className="nav-item"
                      onClick={() => setActiveImage("product-image4")}>
                      <div
                        className="nav-link"
                        id="product-image4"
                        data-toggle="tab"
                        role="tab"
                        aria-selected="false">
                        <img src={IMG_URL + productDetail?.imageID4} alt="" />
                      </div>
                    </li>
                  )}
                  {productDetail?.imageID5 !== "#N/A" && (
                    <li
                      className="nav-item"
                      onClick={() => setActiveImage("product-image5")}>
                      <div
                        className="nav-link"
                        id="product-image5"
                        data-toggle="tab"
                        role="tab"
                        aria-selected="false">
                        <img src={IMG_URL + productDetail?.imageID5} alt="" />
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="product-details mb-30 pl-30">
                <div className="details-cat mb-20">
                  <a href="">{productDetail?.category}</a>
                </div>
                <h2 className="pro-details-title mb-15">
                  {productDetail?.name}
                </h2>
                <div className="details-price mb-20">
                  <span>{productDetail?.price}</span>
                </div>
                <div className="product-variant">
                  <div className="product-info-list variant-item">
                    <ul>
                      <li className="article-number_container">
                        <span>Nro ART:</span>{" "}
                        <div className="nro-art">{productDetail?.art}</div>
                      </li>
                      <li className="product-stock_container">
                        <span>Stock:</span>
                        <span className="in-stock">
                          {productDetail?.stock
                            ? "Entrega Inmediata"
                            : "Pedido por Catalogo"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="payment-methods_container">
                    <p>Medios de pago: efectivo, MercadoPago o Transferencia bancaria.</p>
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
