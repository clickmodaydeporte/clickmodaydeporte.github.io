import Link from "next/link";
import React from "react";

const MainMenu: React.FC = () => {
  return (
    <div className="main-menu">
      <nav id="menu" style={{ display: "block" }}>
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="mega-menu">
            <a href="">Productos</a>
            <ul className="submenu ">
              <li>
                <a href="">
                  Ropa femenina
                </a>
                <ul className="submenu  level-1">
                  <li>
                    <a href="">
                      Calzas cortas
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Remeras manga larga
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Calzas
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Remeras
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  Ropa masculina
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">
                      Remeras
                    </a>
                  </li>
                  <li>
                    <a href="">
                     Buzos
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Camperas
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  Products Types
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">
                      Simple Product
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Variable Product
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Product Upcoming
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Thumb Top Product
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Product Sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="">
              Preguntas Frecuentes
            </a>
          </li>
          <li>
            <a href="">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
