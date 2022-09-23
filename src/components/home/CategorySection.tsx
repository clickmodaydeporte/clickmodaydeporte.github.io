import Link from "next/link";
import React from "react";

const CategorySection = () => {
  return (
    <section className="banner-area category-area pt-100 pb-65">
      <div className="">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Link href="/product-list/ropa-casual">
              <a>
                <div className="banner mb-30 casual-category">
                  <div className="category-title">
                    <h3>Casual</h3>
                  </div>
                  <img
                    src="/images/categories/casual.jpg"
                    alt="Categoría casual de la tienda Click"
                  />
                </div>
              </a>
            </Link>
            <Link href="/product-list/accesorios">
              <a>
                <div className="banner mb-30 accessories-category">
                  <div className="category-title">
                    <h3>Accesorios</h3>
                  </div>
                  <img
                    src="/images/categories/accessories.png"
                    alt="Categoría accesorios de la tienda Click"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="row">
              <div className="col-lg-12">
                <Link href="/product-list/ropa-deportiva">
                  <a>
                    <div className="banner mb-30 sport-category">
                      <div className="category-title">
                        <h3>Deporte</h3>
                      </div>
                      <img
                        src="/images/categories/sport.jpg"
                        alt="Categoría deporte de la tienda Click"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <Link href="/product-list/otros">
              <a>
                <div className="banner mb-30 other-category">
                  <div className="category-title">
                    <h3>Otros</h3>
                  </div>
                  <img
                    src="/images/categories/other-category.jpg"
                    alt="Categoría otros de la tienda Click"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
