import React from "react";
import { PagesBannerProps } from "../interfaces";

const PagesBanner: React.FC<PagesBannerProps> = ({
  urlImage,
  title,
  breadcrumb,
}) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${urlImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center">
              <h1>{title}</h1>
              <ul className="breadcrumb-menu">
                <li>
                  <span>{breadcrumb}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesBanner;
