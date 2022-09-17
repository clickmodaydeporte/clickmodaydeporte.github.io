import { NextPage } from "next";
import React from "react";
import PagesBanner from "../components/PagesBanner";

const About: NextPage = () => {
  return (
    <main>
      <PagesBanner title="Sobre Nosotros" breadcrumb="sobre nosotros" />
      <section className="about-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section-title mb-25">
                <p>
                  <span></span> Community
                </p>
                <h1>Get Every Updates</h1>
              </div>
              <div className="about-community mb-30">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali
                  qua. Ut enim ad minim veniam, quis nostrud exercit ation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor veniam.
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-community-text mb-30">
                <p>
                  Vue is an Ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
                <p>
                  Korem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="overview text-center mt-90">
                <p>
                  Vue helps artists, musicians, filmmakers, designers, and other
                  creators find the resources ideas a reality. To date, tens of
                  thousands of creative projects big and small have come to life
                  with the support of the vue special community.
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
