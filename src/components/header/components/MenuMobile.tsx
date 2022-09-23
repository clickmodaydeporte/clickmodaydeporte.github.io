import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MenuMobile: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubmenuProducts, setOpenSubmenuProducts] =
    useState<boolean>(false);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    handleOpenMenu();
  }, [pathname]);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenSubmenuProducts = () => {
    setOpenSubmenuProducts(!openSubmenuProducts);
  };

  return (
    <div className="mobile-menu mean_container">
      <div className="mean-bar">
        <a onClick={() => handleOpenMenu()} className="meanmenu-reveal">
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
              <Link href="/product-list/all-products">
                <a>Productos</a>
              </Link>
              <ul
                className={`'submenu' ${
                  openSubmenuProducts ? "" : "display-none"
                }`}>
                <li>
                  <Link href="/product-list/ropa-casual">
                    <a>Ropa casual</a>
                  </Link>
                </li>
                <li>
                  <Link href="/product-list/ropa-deportiva">
                    <a>Ropa deportiva</a>
                  </Link>
                </li>
                <li>
                  <Link href="/product-list/accesorios">
                    <a>Accesorios</a>
                  </Link>
                </li>
                <li>
                  <Link href="/product-list/otros">
                    <a>Otros</a>
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
              <Link href="/about">
                <a>Sobbre Nosotras</a>
              </Link>
            </li>
            <li>
              <Link href="/frequent-questions">
                <a>Preguntas Frecuentes</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
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
