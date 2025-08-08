import React from 'react'
import About from "./About"
import Services from "./Services"
import Destination from './Destination'
import Packages from './Packages'
import Booking from "./Booking"

export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
  <div className="container py-4">
    <div className="row justify-content-center">
      <div className="col-lg-10 text-center">
        <h1
          className="text-white mb-3 animated slideInDown"
          style={{ fontSize: "2rem", fontWeight: "600" }}
        >
          Enjoy Your Vacation With Us
        </h1>
        <p
          className="text-white animated slideInDown"
          style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}
        >
          Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
          lorem sit
        </p>
      </div>
    </div>
  </div>
</div>

    <About/>
    <Services/>
    <Destination/>
    <Packages/>
    <Booking/>
 
    </div>
  )
}
