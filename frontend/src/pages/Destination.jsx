import React from 'react'

function Destination() {
  return (
    <div>

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 style={{ color: "#FFD600" }} className="section-title bg-white text-center px-3">
            Destination
          </h6>
          <h1 className="mb-5">Destinations Populaires</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                  style={{height:"50vh",width:"100%"}}
                    className="img-fluid"
                    src="assets/img/nature.jpg"
                    alt=""
                  />
                   <div className="bg-danger text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div style={{ backgroundColor: "#009624", color: "#ffffff" }} className="fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Switchzerland
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                   <div className="bg-danger text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div style={{ backgroundColor: "#009624", color: "#ffffff" }} className="fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-danger text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div style={{ backgroundColor: "#009624", color: "#ffffff" }} className="fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Australia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/japan.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-danger text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div style={{ backgroundColor: "#009624", color: "#ffffff" }} className="fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Japan
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}
    </div>
  )
}

export default Destination
