import React from 'react'

export default function Footer() {
  return (
    <div>
    <div
      className="container-fluid  bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            <a className="btn btn-link" href="/">
              About Us
            </a>
            <a className="btn btn-link" href="/">
              Contact Us
            </a>
            <div className="d-flex gap-3 pt-2">
              <a className="btn btn-outline-light btn-social "  href="/">
                <i className="fab fa-instagram " />
              </a>
              <a className="btn btn-outline-light btn-social " href="/">
                <i className="fab fa-facebook-f " />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Adress
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              Phone Number
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              EmailAdress@example.com
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control w-100 py-2 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn email-newsLetter-btn py-2 px-4 position-absolute top-0 end-0 me-6"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="coyright-text col-md-6 text-center w-[100%]">
              ©{" "}
              <a className="border-bottom" href="#">
                Copyright
              </a>
              , All Right Reserved.
              Designed By{" "}
              <a className="border-bottom" href="https://github.com/ParasSalunke">
                Paras Salunke
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    </div>
  )
}
