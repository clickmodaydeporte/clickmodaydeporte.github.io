import React, { useEffect, useState } from "react";
import LogoDesktop from "./components/LogoDesktop";
import MainMenu from "./components/MainMenu";
import MenuMobile from "./components/MenuMobile";
import PopupMinicart from "./components/PopupMinicart";

const MainHeader: React.FC = () => {
  const [OnTop, setOnTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 3) {
      setOnTop(true);
    } else setOnTop(false);
  };

  return (
    <header
      className={`${
        OnTop ? "transparent-header" : "transparent-header sticky-header"
      }`}>
      <div className="header-area box-90">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <LogoDesktop logo="/images/Click-logo.png" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-10 col-10 d-none d-xl-block header-menu_wrapper">
              <MainMenu />
            </div>
            <div className="col-xl-1 col-lg-4 col-md-4 col-3 col-sm-7 pl-0">
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
              <MenuMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
