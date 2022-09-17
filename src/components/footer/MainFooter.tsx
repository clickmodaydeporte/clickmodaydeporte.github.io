import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainFooter: React.FC = () => {
  return (
    <footer>
      <div className="footer-area box-90 pt-100 pb-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-5 col-md-6 ">
              <div className="footer-widget mb-40">
                <div className="footer-logo">
                  <a href="/">
                    <img src="/images/Click-logo.png" alt="" />
                  </a>
                </div>
                <div className="footer-time d-flex mt-30">
                  <div className="time-icon">
                    <img
                      src="./Vue - Clean Minimal eCommerce HTML Template_files/time.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-widget mb-40">
                <h3>Click</h3>
                <ul className="footer-link">
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index-2.html#">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index-2.html#">
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index-2.html#">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index-2.html#">
                      Preguntas Frecuentes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
              <div className="footer-widget pl-50 mb-40">
                <h3>Redes</h3>
                <ul className="footer-link">
                  <li>
                    <div className="icon_container">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <a href="https://www.facebook.com/ClickModayDeporte">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <div className="icon_container">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <a href="https://www.instagram.com/clickmodaydeporte">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area box-105">
        <div className="container-fluid">
          <div className="copyright-border pt-30 pb-30">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-7">
                <div className="copyright text-center text-md-left">
                  <p>
                    Copyright © 2022 by{" "}
                    <a href="https://naniitevez.github.io/">Nicole Tevez</a>.
                    All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5">
                <div className="footer-icon text-center text-md-right ">
                  <a href="https://www.facebook.com/ClickModayDeporte">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://www.instagram.com/clickmodaydeporte">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
