import React from 'react'
import Logo from '../Layout/Logo'
import Departments from '../Components/Departments'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import axios from 'axios'

const Gate = () => {
  const [dropdown, setdropdown] = useState(true)
  const [dropdown2, setdropdown2] = useState(true)
  const [dropdown3, setdropdown3] = useState(true)
  const [dropdown4, setdropdown4] = useState(true)

  const [Update, setUpdate] = useState([])
  const latest = Update[Update.length - 1];
  const [graph, setgraph] = useState([]);
  const latestgraph = graph[graph.length - 1];

  useEffect(() => {
    const process = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/api/gate')
        setUpdate(response.data)

        const graph = await axios.get(import.meta.env.VITE_API_URL + '/api/graph');
        setgraph(graph.data);
      } catch (error) {
        console.error(error);
      }
    }
    process();
  }, [])


  return (
    <div>
      <Logo />
      <section className='Dropdown-effect'>
        <div>

          <button onMouseEnter={() => { setdropdown(!dropdown); setdropdown2(true); setdropdown3(true); setdropdown4(true) }}
            onMouseLeave={() => { setdropdown(dropdown); setdropdown2(true); setdropdown3(true); setdropdown4(true) }}
          >
            Hospital History
            {
              dropdown ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink to={'/vision'}>Vision & Mission</NavLink>
              </li>
              <li>
                <NavLink to={'/infrastructure'}>Infrastructure</NavLink>
              </li>
              <li>
                <NavLink>Certification & Awards</NavLink>
              </li>
              <li>
                <NavLink>Management team</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 2 */}
        <div>
          <button onClick={() => { setdropdown2(!dropdown2); setdropdown(true); setdropdown3(true); setdropdown4(true) }}>
            Departments
            {
              dropdown2 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown2 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink>Cardiology</NavLink>
              </li>
              <li>
                <NavLink>Orthopedics</NavLink>
              </li>
              <li>
                <NavLink>Neurology</NavLink>
              </li>
              <li>
                <NavLink>Pediatrics</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 3333333 */}
        <div>
          <button onClick={() => { setdropdown3(!dropdown3); setdropdown(true); setdropdown2(true); setdropdown4(true) }}>
            Services
            {
              dropdown3 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown3 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink>Emergency</NavLink>
              </li>
              <li>
                <NavLink>ICU</NavLink>
              </li>
              <li>
                <NavLink>Lab Tests</NavLink>
              </li>
              <li>
                <NavLink to={'/pharmacy'}>Pharmacy</NavLink>
              </li>
              <li>
                <NavLink>Ambulance</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 4444444444 */}
        <div>
          <button onClick={() => { setdropdown4(!dropdown4); setdropdown(true); setdropdown2(true); setdropdown3(true) }}>
            Contact
            {
              dropdown4 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown4 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink to={"/googlemap"}>Google Map</NavLink>
              </li>
              <li>
                <NavLink>Emergency Number</NavLink>
              </li>
              <li>
                <NavLink>Information center</NavLink>
              </li>

            </ul>
          }
        </div>

      </section>
      <section className="g2-fclass">
        <h3>
          HOSPITAL
        </h3>
      </section>

      <section className='gray-chart'>
        <h3>
          Allied Hospital
        </h3>
        <div className="gray-chart-patients">
          <h5>Dated : {format(new Date(), 'eeee, MMMM do')}</h5>
          <table>
            <tbody>
              <tr>
                <td>Number of covid 19 patientsin 24 hours</td>
                <td>{latestgraph?.Covid19 || "00"}</td>
              </tr><tr>
                <td>Number of Dengue patients in 24 hours</td>
                <td>{latestgraph?.Dengue || "00"}</td>
              </tr>
              <tr>
                <td>Number of Malaria patients in 24 hours</td>
                <td>{latestgraph?.Malaria || "00"}</td>
              </tr>
              <tr>
                <td>Number of Typhoid patients in 24 hours</td>
                <td>{latestgraph?.Typhoid || "00"}</td>
              </tr>
              <tr>
                <td>Number of Hepatitis patients in 24 hours</td>
                <td>{latestgraph?.Hepatitis || "00"}</td>
              </tr>
              <tr>
                <td>Number of Influenza patients in 24 hours</td>
                <td>{latestgraph?.Influenza || "00"}</td>
              </tr>
              <tr>
                <td>Number of Pneumonia patients in 24 hours</td>
                <td>{latestgraph?.Phnemonia || "00"}</td>
              </tr>
              <tr>
                <td>Number of Chickenpox patients in 24 hours</td>
                <td>{latestgraph?.Chikenpox || "00"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="details">
        <div className="box-dr">
          <h4><i className="fa-solid fa-user-doctor"></i>Doctors</h4>
          <h5>{latest?.Doctors || "00"}</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-user-nurse"></i>Staff Nurses</h4>
          <h5>{latest?.Nurses || "00"}</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-briefcase-medical"></i>Paramedics</h4>
          <h5>{latest?.Paramedics || "00"}</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-staff-snake"></i>Others</h4>
          <h5>{latest?.Others || "00"}</h5>
        </div>
      </section>

      <Departments />

      <section>
        <h4 className="title">
          <i className="fa-solid fa-hospital"></i>
          Infrastructure
        </h4>
        <div className="infra">
          <div className='infra-hosp'>
            <img src="/infrastructure.jpg" alt="" />
            <p>Our hospital is equipped with modern infrastructure designed to provide high-quality healthcare in a safe and comfortable environment. We feature advanced medical equipment, fully equipped operation theaters, and well-maintained patient wards to ensure efficient treatment and care. Our facility includes state-of-the-art diagnostic labs, imaging services, and emergency units that operate 24/7 to handle critical situations promptly.

              The hospital is built with a patient-centric approach, offering clean and spacious rooms, intensive care units (ICU), and specialized departments to meet diverse medical needs. We also ensure uninterrupted power supply, proper sanitation systems, and a secure environment to maintain the highest standards of hygiene and safety. Our infrastructure supports both patients and healthcare professionals, enabling effective treatment and a smooth healthcare experience.</p>
          </div>
        </div>
      </section>
      {/* banner */}
      <div style={{ padding: "0 40px", maxWidth: "1280px", margin: "0 auto 80px" }}>

        <div className="appt-banner">

          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Quick Appointment
            </div>

            <div className="appt-title">
              Book Your Visit<br />in 60 Seconds
            </div>

            <div className="appt-sub">
              Select your department, choose a doctor, and confirm your preferred slot — all online.
            </div>
          </div>

          <div className="appt-form">
            <select className="appt-input">
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Ophthalmology</option>
              <option>General Medicine</option>
            </select>

            <input className="appt-input" type="text" placeholder="Your Name" />
            <input className="appt-input" type="tel" placeholder="Phone Number" />

            <button className="appt-btn">
              Confirm Appointment ✓
            </button>
          </div>

        </div>

      </div>
      {/* why us */}
      <section className="why-us">
        <div className="why-inner">
          <div>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Healthcare Built on <br /> Trust & Innovation</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>Allied Hospital combines decades of clinical excellence with modern technology to deliver outcomes that truly matter.</p>
            <div className="why-features">
              <div className="why-item">
                <div className="why-icon">🕐</div>
                <div>
                  <div className="why-label">24/7 Emergency Care</div>
                  <div className="why-desc">Round-the-clock emergency services with rapid response teams and fully equipped trauma units.</div>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">🔬</div>
                <div>
                  <div className="why-label">Advanced Technology</div>
                  <div className="why-desc">State-of-the-art diagnostic and surgical equipment ensuring precision and better outcomes.</div>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">🤝</div>
                <div>
                  <div className="why-label">Patient-Centered Approach</div>
                  <div className="why-desc">Every care plan is tailored to the individual, with full transparency and compassionate support.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-metrics">
            <div className="metric-card">
              <div className="metric-big">40k<span style={{ fontSize: "28px", color: "rgba(255,255,255,0.7)" }}>+</span></div>
              <div className="metric-big-label">Patients treated with<br />exceptional care every year</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">250<span>+</span></div>
              <div className="metric-label">Specialist Doctors</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">38<span>+</span></div>
              <div className="metric-label">Years of Service</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">98<span>%</span></div>
              <div className="metric-label">Patient Satisfaction</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">15<span>+</span></div>
              <div className="metric-label">Departments</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Gate
