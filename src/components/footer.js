import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>
                      <a href="login/login.html">Book a Ticket</a>
                    </li>
                    <li>
                      <a href="./rent a bus/rent a bus.html">Rent a Bus</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-3">
                  <h2 class="footer-heading mb-4">Follow Us</h2>

                  <span class="icon-facebook" />

                  <span class="icon-twitter" />

                  <span class="icon-instagram" />

                  <span class="icon-linkedin" />
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h2 class="footer-heading mb-4">Mail Us Today!</h2>
              <form action="#" method="post">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control border-secondary text-white bg-transparent"
                  />
                  placeholder="Enter Email" aria-label="Enter Email"
                  aria-describedby="button-addon2">
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary text-white"
                      type="button"
                      id="button-addon2"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <div class="border-top pt-5">
                <p>
                  &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  TransHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
