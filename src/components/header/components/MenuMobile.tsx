import Link from "next/link";
import React, { useState } from "react";

const MenuMobile: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubmenuProducts, setOpenSubmenuProducts] =
    useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenSubmenuProducts = () => {
    setOpenSubmenuProducts(!openSubmenuProducts);
  };

  return (
    <div className="mobile-menu mean_container">
      <div className="mean-bar">
        <a
          onClick={() => handleOpenMenu()}
          href="#nav"
          className="meanmenu-reveal">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="mean-nav">
          <ul className={openMenu ? "" : "display-none"}>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Productos</a>
              </Link>
              <ul
                className={`'submenu' ${
                  openSubmenuProducts ? "" : "display-none"
                }`}>
                <li>
                  <Link href="/">
                    <a>Ropa femenina</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Ropa masculina</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Products Types</a>
                  </Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                onClick={() => handleOpenSubmenuProducts()}>
                +
              </a>
            </li>
            <li>
              <Link href="/">
                <a>Sobbre Nosotras</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Preguntas Frecuentes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contacto</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
