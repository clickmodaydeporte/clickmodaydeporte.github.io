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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
