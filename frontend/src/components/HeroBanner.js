import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <>
      {/* <!-- Hero Banner Section  --> */}

      <div className="banner d-flex flex-wrap">
        {/* <!-- Banner text Left side --> */}
        <div className="hero-banner-text">
          <div className="banner-heading" data-aos="fade-right">
            <span className="hot mx-5">Hot &amp; Spicy</span>
            <br />
            <span className="pizza-heading">Pizza</span>
            <br />
            <span className="off mx-5">50% OFF</span>
          </div>

          {/* <!-- Banner button of learn more  --> */}
          <a
            type="button"
            href="/menu"
            className="btn-hero-banner aos-init"
            data-aos="fade-up"
            data-aos-offset="30"
          >
            Order Now
          </a>
        </div>

        {/* <!-- Banner picture Right side  --> */}
        <div className="hero-picture" data-aos="fade-left">
          <img src="/images/pizza1.png" className="" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
