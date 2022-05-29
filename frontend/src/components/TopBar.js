import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import "./TopBar.css";
import { useDispatch,useSelector } from "react-redux";
import {Link} from "react-router-dom";

const TopBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer)
  return (
    <>
      {/* <!-- Navbar  --> */}

      {/* <!-- Navbar will be fixed so used fixed-top to make navbar fixed  --> */}
      <nav
        className="navbar fixed-top navbar-expand-lg color-orange"
      >
        {/* <!-- Navbar logo  --> */}
        <Link className="navbar-logo ml-2" to="/">
          <img src="/images/logo1.png" className="mx-5" alt="logo" />
        </Link>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {/* <!-- Navbar links  --> */}

          {/* <!-- used ml-auto to arrange all navbar links on the other side  --> */}
          <ul className="navbar-nav ml-auto mr-5">
            {/* <!-- Home  --> */}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>

            {/* <!-- Menu --> */}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu">
                Menu
              </Link>
            </li>

            {/* <!-- Contact  --> */}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact Us
              </Link>
            </li>
            

            {/* <!-- Cart  -->  */}
            <li className="nav-item">
              <Link className="nav-link cart-hover text-orange bg-white rounded px-3" to="/cart">
              <i class="fa fa-shopping-cart mx-2" style={{fontSize:'24px'}}></i>
                Cart : {cartState.cartItems.length}
              </Link>
            </li> 
<br />
                        {/* <!-- Login  -->  */}
                        <li className="nav-item">
              <Link className="nav-link cart-hover text-orange bg-white rounded px-3" to="/login">
                  Login/Signup
              </Link>
            </li> 
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
