import React from "react";

const ProductsSection: React.FC = () => {
  return (
    <section className="product-area box-90 pt-70 pb-40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <div className="area-title mb-50">
              <h2>Brand New Products</h2>
              <p>Browse the huge variety of our products</p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div className="product-tab mb-40">
              <ul
                className="nav product-nav  justify-content-xl-end"
                id="myTab"
                role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true">
                    table lamp
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false">
                    furniture
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false">
                    chair
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab1"
                    data-toggle="tab"
                    href="#contact1"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false">
                    Clock
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="product-tab-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="product-slider owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(-1327px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                          width: "4868px",
                        }}>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro19.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro20.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro20.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro13.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro14.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">30%</span>
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro19.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro20.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro20.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro13.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro14.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">30%</span>
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "412.5px", marginRight: "30px" }}>
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <div className="owl-prev">
                        <i className="fas fa-arrow-left"></i>
                      </div>
                      <div className="owl-next">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  <div className="product-slider owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                        }}>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro19.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro20.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro20.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro13.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro14.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">30%</span>
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <div className="owl-prev">
                        <i className="fas fa-arrow-left"></i>
                      </div>
                      <div className="owl-next">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab">
                  <div className="product-slider owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                        }}>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro13.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro14.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">30%</span>
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro19.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro20.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro20.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="owl-nav">
                      <div className="owl-prev">
                        <i className="fas fa-arrow-left"></i>
                      </div>
                      <div className="owl-next">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact1"
                  role="tabpanel"
                  aria-labelledby="contact-tab1">
                  <div className="product-slider owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                        }}>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro17.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro18.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro18.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="sale">60%</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro13.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro14.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro14.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">30%</span>
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro19.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro20.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro20.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro19.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="pro-item">
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro15.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro16.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                                <div className="sale-tag">
                                  <span className="new">new</span>
                                  <span className="sale">sale</span>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrapper mb-50">
                              <div className="product-img mb-25">
                                <a href="product-details.html">
                                  <img src="img/product/pro16.jpg" alt="" />
                                  <img
                                    className="secondary-img"
                                    src="img/product/pro17.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="product-action text-center">
                                  <a href="#" title="Shoppingb Cart">
                                    <i className="flaticon-shopping-cart"></i>
                                  </a>
                                  <a href="#" title="Quick View">
                                    <i className="flaticon-eye"></i>
                                  </a>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare">
                                    <i className="flaticon-compare"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="pro-cat mb-10">
                                  <a href="shop.html">decor, </a>
                                  <a href="shop.html">furniture</a>
                                </div>
                                <h4>
                                  <a href="product-details.html">
                                    Minimal Troma Furniture
                                  </a>
                                </h4>
                                <div className="product-meta">
                                  <div className="pro-price">
                                    <span>$119.00 USD</span>
                                    <span className="old-price">
                                      $230.00 USD
                                    </span>
                                  </div>
                                </div>
                                <div className="product-wishlist">
                                  <a href="#">
                                    <i
                                      className="far fa-heart"
                                      title="Wishlist"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <div className="owl-prev">
                        <i className="fas fa-arrow-left"></i>
                      </div>
                      <div className="owl-next">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
