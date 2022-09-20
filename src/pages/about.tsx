import { NextPage } from "next";
import React from "react";
import PagesBanner from "../components/PagesBanner";

const About: NextPage = () => {
  return (
    <main>
      <PagesBanner title="Sobre Nosotras" breadcrumb="sobre nosotras" />
      <section className="about-area pb-200">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="overview text-center mt-90">
                <p>
                  Click moda y deporte es un emprendimiento de mujeres
                  positivas, que apuestan al estilo y comodidad que toda persona
                  exigente necesita para satisfacer sus expectativas en calidad
                  y precios accesibles. Estás a un click de darte el mimo para
                  hacerte feliz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
