import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import React from "react";
import PagesBanner from "../components/PagesBanner";

const Contact: NextPage = () => {
  return (
    <main>
      <PagesBanner urlImage="/images/pages-banner.jpg" title="¿Cómo contactarnos?" breadcrumb="Contacto" />

      <section
        className="contact-area pt-120 pb-90"
        data-background="assets/img/bg/bg-map.png"
        style={{ backgroundImage: "url('assets/img/bg/bg-map.png')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <h3>Instagram</h3>
                <p>
                  <a
                    className="anchor"
                    href="https://www.instagram.com/clickmodaydeporte"
                    target="_blank" rel="noreferrer">
                    @clickmodaydeporte
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <div className="icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <h3>WhatsApp</h3>
                <p>
                  <a
                    className="anchor"
                    href="https://api.whatsapp.com/send?phone=5491170337845"
                    target="_blank" rel="noreferrer">
                    +549 11 7033 7845
                  </a>
                </p>
                <p>
                  <a
                    className="anchor"
                    href="https://api.whatsapp.com/send?phone=5491130422946"
                    target="_blank" rel="noreferrer">
                    +549 11 3042 2946
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <h3>Facebook</h3>
                <p>
                  <a
                    className="anchor"
                    href="https://www.facebook.com/ClickModayDeporte"
                    target="_blank" rel="noreferrer">
                    Click Moda y Deporte
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
