import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Logo = () => {
  const [bar, setbar] = useState(true)
  return (
    <>
      <section className="line1">
        <li><NavLink><i class="fa-brands fa-instagram"></i>Instagram</NavLink></li>
        <li><NavLink><i class="fa-brands fa-facebook-f"></i>Facebook</NavLink></li>
        <li><NavLink><i class="fa-brands fa-x-twitter"></i>Twitter</NavLink></li>
      </section>
      <section className='line2'>
        <img src="/black-logo.png" alt="" />
        {bar ? <i class="fa-solid fa-bars" onClick={() => { setbar(!bar) }}></i> : <i class="fa-solid fa-xmark" onClick={() => { setbar(!bar) }}></i>}
        {
          !bar ?
            <nav className='bar-list'>
              <ul>
              <i class="fa-solid fa-xmark dk-side" onClick={() => { setbar(!bar) }}></i>
                <li><Link to={"/h"}><i class="fa-solid fa-chart-area"></i>Dashboard</Link></li>
                <li><Link to={"/admin"}><i class="fa-brands fa-black-tie"></i>Admin</Link></li>
                <li><Link to={"/doctor_portal"}><i class="fa-solid fa-user-doctor"></i>Doctor Portal</Link></li>
                <li><Link to={"/patientlogin"}><i class="fa-solid fa-head-side-mask"></i>Patient Portal</Link></li>
              </ul>
            </nav> : null
        }
      </section>
    </>
  )
}

export default Logo
