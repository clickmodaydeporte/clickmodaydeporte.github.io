import { faHomeAlt, faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-area box-90">
      <div className="container-fluid">
        <div className="theme-soft-bg fix pt-100 pb-50">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Special Features</h2>
                <p>Get special services from our shop.</p>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="single-seatures width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span>Free Delivery</span>
              <h3>Free Delivery</h3>
            </div>
            <div className="single-seatures width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faSackDollar} />
              </div>
              <span>Payment</span>
              <h3>Feedbacks</h3>
            </div>
            <div className="single-seatures width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faHomeAlt} />
              </div>
              <span>10 Days</span>
              <h3>For Free Return</h3>
            </div>
            <div className="single-seatures width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faHomeAlt} />
              </div>
              <span>Payment</span>
              <h3>Secure System</h3>
            </div>
            <div className="single-seatures width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faHomeAlt} />
              </div>
              <span>24/7</span>
              <h3>Online Supports</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
