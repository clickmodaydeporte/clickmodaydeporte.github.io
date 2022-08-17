import { NextPage } from "next";
import React from "react";

const Products: NextPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb-area-start --> */}
      <section
        className="breadcrumb-area"
        data-background="img/bg/page-title.png"
        style={{ backgroundImage: "url('img/bg/page-title.png')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Our Shop</h1>
                <ul className="breadcrumb-menu">
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index.html">
                      home
                    </a>
                  </li>
                  <li>
                    <span>shop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb-area-end --> */}

      {/* <!-- shop-area start --> */}
      <section className="shop-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* <!-- tab filter --> */}
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="product-showing mb-40">
                    <p>Showing 1–22 of 32 results</p>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div className="shop-tab f-right">
                    <ul className="nav text-center" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="http://themepure.net/template/vue/vue/shop-filter.html#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true">
                          <i className="fas fa-list-ul"></i>{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="http://themepure.net/template/vue/vue/shop-filter.html#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false">
                          <i className="fas fa-th-large"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-filter-btn mb-40 f-right">
                    <button id="filter-btn">Filter +</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="filter-widget mb-40">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="shop-widget">
                          <h3 className="shop-title">Sort By</h3>
                          <ul className="shop-link">
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                Default sorting
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                {" "}
                                Sort by popularity
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                {" "}
                                Sort by average rating
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                {" "}
                                Sort by newness
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                {" "}
                                Sort by price: low to high
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                {" "}
                                Sort by price: high to low
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-3">
                        <div className="shop-widget">
                          <h3 className="shop-title">Size</h3>
                          <ul className="shop-link">
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> SM
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> LG
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> MD
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> XS
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> XL
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> XXL
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-3">
                        <div className="shop-widget">
                          <h3 className="shop-title">Tags</h3>
                          <ul className="shop-link">
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> Minimal
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> T-Shirts
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> Pants
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> Jeants
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> Winter
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <i className="far fa-square"></i> Latest
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="shop-widget">
                          <h3 className="shop-title">color</h3>
                          <ul className="shop-link">
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="vista"></span> Vista Blue
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="blue"></span> Blue
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="green"></span> Green
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="orange"></span> Orange
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="navy"></span> Navy
                              </a>
                            </li>
                            <li>
                              <a href="http://themepure.net/template/vue/vue/shop.html">
                                <span className="pinkish"></span> Pinkish
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-5">
                        <div className="shop-widget">
                          <div className="shop-sidebar-banner">
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              <img
                                src="./Vue - Clean Minimal eCommerce HTML Template_files/shop-banner.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- tab content --> */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro13.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro14.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro15.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro16.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro1.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro29.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro28.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro3.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro6.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro19.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro23.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro33.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro32.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-wrapper mb-50">
                        <div className="product-img mb-25">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro9.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action text-center">
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Shoppingb Cart">
                              <i className="flaticon-shopping-cart"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
                              title="Quick View">
                              <i className="flaticon-eye"></i>
                            </a>
                            <a
                              href="http://themepure.net/template/vue/vue/shop-filter.html#"
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
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              decor,{" "}
                            </a>
                            <a href="http://themepure.net/template/vue/vue/shop.html">
                              furniture
                            </a>
                          </div>
                          <h4>
                            <a href="http://themepure.net/template/vue/vue/product-details.html">
                              Minimal Troma Furniture
                            </a>
                          </h4>
                          <div className="product-meta">
                            <div className="pro-price">
                              <span>$119.00 USD</span>
                              <span className="old-price">$230.00 USD</span>
                            </div>
                          </div>
                          <div className="product-wishlist">
                            <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                              <i className="far fa-heart" title="Wishlist"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro13.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro14.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro11.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro15.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro16.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro6.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro18.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro19.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4">
                      <div className="product-wrapper mb-30">
                        <div className="product-img">
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            <img
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro5.jpg"
                              alt=""
                            />
                            <img
                              className="secondary-img"
                              src="./Vue - Clean Minimal eCommerce HTML Template_files/pro6.jpg"
                              alt=""
                            />
                          </a>
                          <div className="sale-tag">
                            <span className="new">new</span>
                            <span className="sale">sale</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="product-content pro-list-content pr-0 mb-50">
                        <div className="pro-cat mb-10">
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            decor,{" "}
                          </a>
                          <a href="http://themepure.net/template/vue/vue/shop.html">
                            furniture
                          </a>
                        </div>
                        <h4>
                          <a href="http://themepure.net/template/vue/vue/product-details.html">
                            Minimal Troma Furniture
                          </a>
                        </h4>
                        <div className="product-meta mb-10">
                          <div className="pro-price">
                            <span>$119.00 USD</span>
                            <span className="old-price">$230.00 USD</span>
                          </div>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className="product-action">
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Shoppingb Cart">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Quick View">
                            <i className="flaticon-eye"></i>
                          </a>
                          <a
                            href="http://themepure.net/template/vue/vue/shop-filter.html#"
                            title="Wishlist">
                            <i className="flaticon-like"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basic-pagination basic-pagination-2 text-center mt-20 mb-0">
                <ul>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      <i className="fas fa-angle-double-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      01
                    </a>
                  </li>
                  <li className="active">
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      02
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      03
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/shop-filter.html#">
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- shop-area end --> */}
    </main>
  );
};

export default Products;
