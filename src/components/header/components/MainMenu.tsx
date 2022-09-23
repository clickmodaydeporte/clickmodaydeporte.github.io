import Link from "next/link";
import React from "react";

const MainMenu: React.FC = () => {
  return (
    <div className="main-menu">
      <nav id="menu">
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mega-menu">
            <Link href="/product-list">
              <a>Productos</a>
            </Link>
            <ul className="submenu ">
              <li>
                <span>Nuestros Productos</span>
                <ul className="submenu  level-1">
                  <li>
                    <Link href="">
                      <a>Ropa casual</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Ropa deportiva</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Accesorios</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Otros</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre Nosotras</a>
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
  );
};

export default MainMenu;
