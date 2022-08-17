import { NextPage } from "next";
import React from "react";

const Contact: NextPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb-area-start --> */}
      <section
        className="breadcrumb-area"
        data-background="img/bg/page-title.png"
        style={{ backgroundImage: "url('img/bg/page-title.png')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Contact Us</h1>
                <ul className="breadcrumb-menu">
                  <li>
                    <a href="http://themepure.net/template/vue/vue/index.html">
                      home
                    </a>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb-area-end --> */}

      {/* <!-- contact-area start --> */}
      <section
        className="contact-area pt-120 pb-90"
        data-background="assets/img/bg/bg-map.png"
        style={{ backgroundImage: "url('assets/img/bg/bg-map.png')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-envelope"></i>
                <h3>Mail Here</h3>
                <p>Admin@BasicTheme.com</p>
                <p>Info@Themepur.com</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Visit Here</h3>
                <p>
                  27 Division St, New York, NY 10002, Jaklina, United Kingpung
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-phone"></i>
                <h3>Call Here</h3>
                <p>+8 (123) 985 789</p>
                <p>+787 878897 87</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-area end --> */}

      {/* <!-- contact-form-area start --> */}
      <section className="contact-form-area grey-bg pt-100 pb-100">
        <div className="container">
          <div className="form-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="section-title mb-55">
                  <p>
                    <span></span> Anything On your Mind
                  </p>
                  <h1>Estimate Your Idea</h1>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 d-none d-xl-block">
                <div className="section-link mb-80 text-right">
                  <a
                    className="btn theme-btn"
                    href="http://themepure.net/template/vue/vue/contact.html#">
                    <i className="fas fa-phone"></i> make call
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form
                id="contact-form"
                action="http://themepure.net/template/vue/vue/contact.html#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box email-icon mb-30">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box phone-icon mb-30">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box subject-icon mb-30">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-30">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Your Message"></textarea>
                    </div>
                    <div className="contact-btn text-center">
                      <button className="btn theme-btn" type="submit">
                        get action
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="ajax-response text-center"></p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-form-area end --> */}
    </main>
  );
};

export default Contact;
