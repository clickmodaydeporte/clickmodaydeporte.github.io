import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faHeadset,
  faHomeAlt,
  faLocationDot,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-area box-90">
      <div className="container-fluid">
        <div className="theme-soft-bg fix pt-70 pb-50">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Servicios</h2>
                <p>Estos son los servicios que te ofrecemos.</p>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="single-features width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text_container">
                <h3>Entregas</h3>
                <span>Coordinamos puntos de entrega.</span>
              </div>
            </div>
            <div className="single-features width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faSmile} />
              </div>
              <div className="text_container">
                <h3>Seguridad</h3>
                <span>Compra sencillo, rápido y seguro.</span>
              </div>
            </div>
            <div className="single-features width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faSackDollar} />
              </div>
              <div className="text_container">
                <h3>Métodos de pago</h3>
                <span>Transferencia, efectivo o mercado pago.</span>
              </div>
            </div>
            <div className="single-features width-20 mb-50 text-center">
              <div className="flaticon-good">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className="text_container">
                <h3>Soporte</h3>
                <span>Respondemos todas tus dudas.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
