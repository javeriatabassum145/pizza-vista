import React from 'react'
import './Branches.css'

const Branches = () => {
  return (
    <>
    <div class="feature-div p-5 mb-3">
    <div class="container">
        <div class="col-12 pt-4">
            <header class="section-header">
                <h2 class="text-light">CONTACT US</h2>
               
                </header>
            </div>
        </div>
</div>
<section id="contact" className="contact">

  <div className="container">

    <div className="row gy-4">
      <div className="col-lg-12">
        <div className="row gy-4">
          <div className="col-lg-6 px-5">
            <div className="info-box" data-aos="zoom-in">
              <i className="text-orange fa fa-map-marker"></i>
              <h3>Address</h3>
              <p>Building ABC, Sector 14 - A, Street 2, Nazimabad, Karachi
                  <br/>
                Flat Phase III, Street 9, Sector 15 - B, Bufferzone, Karachi
              </p>
            </div>
          </div>

          <div className="col-lg-6 px-5">
            <div className="info-box" data-aos="zoom-in">
            <i className="text-orange fa fa-phone"></i>

              <h3>Call Us</h3>
              <p>+92 123 456 789<br/>+92 101 121 141</p>
            </div>
          </div>

          <div className="col-lg-6 px-5">
            <div className="info-box" data-aos="zoom-in">
            <i className="text-orange fa fa-envelope"></i>

              <h3>Email Us</h3>
              <p>info@pizzavista.com<br/>contact@pizzavista.com</p>
            </div>
          </div>

          <div className="col-lg-6 px-5">
            <div className="info-box" data-aos="zoom-in">
            <i className="text-orange fa fa-clock-o"></i>

              <h3>Open Hours</h3>
              <p>Monday - Friday<br/>2:00PM - 02:00AM</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
    </>
  )
}

export default Branches