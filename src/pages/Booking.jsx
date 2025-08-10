import React from 'react'

function Booking() {
  return (
    <div>

      {/* Process Start */}
      {/*<div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4">Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4">Pay Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4">Fly Today</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    */}
    {/* Process Start */}
    {/* Booking Start */}
    <div className="container-l wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="booking d-flex flex-column flex-md-row gap-4 p-4 p-md-5 rounded-4 shadow">

      {/* LEFT SIDE */}
      <div className="grid-left-side w-100 d-flex flex-column gap-3">
        <h1 className="text-primary">Booking online</h1>

        <div className="d-flex flex-column">
          <p className="mb-1 booking-label">Destination</p>
          <input className="booking-input ps-3 pe-4 py-2" placeholder="Saisir une destination" />
        </div>

        <div className="d-flex gap-3 flex-column flex-md-row">
          <div className="d-flex flex-column w-100">
            <p className="mb-1 booking-label">Date du départ</p>
            <input type="date" className="py-2 ps-3 pe-4 booking-input" />
          </div>
          <div className="d-flex flex-column w-100">
            <p className="mb-1 booking-label">Date du retour</p>
            <input type="date" className="py-2 ps-3 pe-4 booking-input" />
          </div>
        </div>

        <div className="d-flex flex-column">
          <p className="mb-1 booking-label">Budget de voyage</p>
          <input className="booking-input ps-3 pe-4 py-2" placeholder="Ex: 200€ - 1000€" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid-right-side w-100 d-flex flex-column gap-3">
        <h2 className="text-primary d-md-none">Détails personnels</h2>

        <div className="d-flex gap-3 flex-column flex-md-row">
          <div className="d-flex flex-column w-100">
            <p className="mb-1 booking-label">Nombre d'adultes</p>
            <input className="py-2 ps-3 pe-4 booking-input" />
          </div>
          <div className="d-flex flex-column w-100">
            <p className="mb-1 booking-label">Nombre d’enfants</p>
            <input className="py-2 ps-3 pe-4 booking-input" />
          </div>
        </div>

        <div className="d-flex flex-column">
          <p className="mb-1 booking-label">Numéro de téléphone</p>
          <input className="booking-input ps-3 pe-4 py-2" placeholder="Ex: +213 555 123 456" />
        </div>

        <div className="d-flex flex-column">
          <p className="mb-1 booking-label">Adresse Email</p>
          <input className="booking-input ps-3 pe-4 py-2" placeholder="Ex: email@example.com" />
        </div>

        <div className="d-flex justify-content-start">
          <button className="btn btn-booking-form py-2 px-4">Envoyer</button>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Booking Start */}
    </div>
  )
}

export default Booking
