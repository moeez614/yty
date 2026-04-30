import React from 'react'
import PatientDash from '../Components/PatientDash'
import Footer from '../Components/Footer'
import doctor from '../assets/doctor.png'
import check from '../assets/check.png'
import calendar from '../assets/calendar.png'
import hospital from '../assets/hospital-building.png'

const Appointment = () => {
  return (
    <div>
      <PatientDash />
      <section className="appointment-page">
        <div className="bg-frame">
          <div className='portable'>
            <h5>APPOINTMENT</h5>
            <h4>Book Your Appointment With Our <span>Specialists</span></h4>
            <h6>We are here to help you live a healthy life</h6>
            <h6>Book an appointment with our experianced doctors</h6>
          </div>
          <section className='color-svg'>
            <div>
              <img src={calendar} />
              <h6>Easy Booking</h6>
            </div>
            <div>
              <img src={doctor} />
              <h6>Expert Doctors</h6>
            </div>
            <div>
              <img src={check} />
              <h6>Quality Care</h6>
            </div>
          </section>
        </div>
        {/* after image lalalllalalallalalallalalalal */}
        <section className='next-plz'>
          <h3>How it works</h3>
          <div className='next'>
            <div className="box-app">
              <img src={hospital} alt="" />
              <h5>
                1. Choose Department
                <br />
                <span>
                  Select the department <br /> you want to visit.
                </span>
              </h5>
            </div>
            <i className='fa-solid fa-arrow-right'></i>
            <div className="box-app">
              <img src={doctor} alt="" />
              <h5>
                2. Select Doctor
                <br />
                <span>
                  Choose from our <br /> expert doctors.
                </span>
              </h5>
            </div>
            <i className='fa-solid fa-arrow-right'></i>
            <div className="box-app">
              <img src={calendar} alt="" />
              <h5>
                3. Pick Date & Time
                <br />
                <span>
                  Select a convenient <br /> Date & Time.
                </span>
              </h5>
            </div>
            <i className='fa-solid fa-arrow-right'></i>
            <div className="box-app">
              <img src={check} alt="" />
              <h5>
                4. Confirm Booking
                <br />
                <span>
                  Confirm your appointment <br /> and you're all set.
                </span>
              </h5>
            </div>
          </div>
        </section>


        <Footer />
      </section>
    </div>
  )
}

export default Appointment
