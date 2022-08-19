import React from "react";
import LogoDesktop from "./components/LogoDesktop";
import MainMenu from "./components/MainMenu";
import PopupMinicart from "./components/PopupMinicart";

const MainHeader: React.FC = () => {
  return (
    <header id="prueba" className="transparent-header">
      <div className="header-area box-90">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <LogoDesktop logo="/images/Click-logo.png"/>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <MainMenu />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="d-shop-cart">
                    <a href="">
                      <i className="flaticon-shopping-cart"></i>
                      <span className="cart-count">3</span>
                    </a>
                    <PopupMinicart />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;