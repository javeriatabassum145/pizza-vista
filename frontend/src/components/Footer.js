import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

<footer class="nb-footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-12" data-aos="fade-right">
      {/* <!-- Social Icons  --> */}
      <div class="col-sm-12">
        <div class="about">
          <div class="social-media text-center" data-aos="zoom-in">

            {/* <!-- Facebook  --> */}
            <a href="https://www.facebook.com" target="_blank"><img src="/images/facebook.png" alt=""/></a>

            {/* <!-- Twitter  --> */}
            <a href="https://www.twitter.com" target="_blank"><img src="/images/twitter.png" alt=""/></a>

            {/* <!-- Linkedin  --> */}
            <a href="https://www.linkedin.com" target="_blank"><img src="/images/linkedin.png" alt=""/></a>

            {/* <!-- Github  --> */}
            <a href="https://www.github.com" target="_blank"><img src="/images/github.png" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  <section class="copyright">
        <div class="col-lg-12 text-center">
          <p>Copyright © 2021. All Rights Reserved.</p>
    </div>
  </section>
</footer>
</>
  )
}

export default Footer