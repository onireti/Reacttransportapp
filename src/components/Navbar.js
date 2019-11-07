import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div>
      <header className="site-navbar py-3" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-11 col-xl-2">
              <h1 className="mb-0">TransHub</h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li className="active">Home</li>
                  <li>Book a Ticket</li>
                  <li>Rent a Bus</li>
                  <li>Contact Us</li>

                  <li>Login</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
