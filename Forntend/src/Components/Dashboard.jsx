import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import whitelogo from '../assets/white-logo.png'

const Dashboard = () => {

  const [dropdown, setdropdown] = useState(true)
  const [dropdown1, setdropdown1] = useState(true)
  const [dropdown2, setdropdown2] = useState(true)
  const [dropdown3, setdropdown3] = useState(true)
  const [dropdown4, setdropdown4] = useState(true)


  return (
    <div>
      <section className='admin-dashboardone'>
        <div className="new-img-logo" style={{backgroundImage: `url(${whitelogo})`}}></div>
        <NavLink to={'/admin'} className='class-name'>Admin Dashboard</NavLink>
        <ul>
          <NavLink onClick={()=>{setdropdown(!dropdown) ; setdropdown1(true); setdropdown2(true); setdropdown3(true); setdropdown4(true)}}>
            <li>
             CMS
             {dropdown ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </li>
          </NavLink>
          {
            !dropdown &&
            <div className='hashtag'>
              <NavLink to={"Patients"}>
                <li><i class="fa-solid fa-file"></i> Patients & Visitors</li>
              </NavLink>
              <NavLink to={'staff'}>
                <li><i class="fa-solid fa-staff-snake"></i> Staff Info</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-bullhorn"></i> Announcements</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-brands fa-adversal"></i> Ads</li>
              </NavLink>
            </div>
          }
{/* 11111111111111111111111111111111111111 */}
          <NavLink onClick={()=>{setdropdown1(!dropdown1) ; setdropdown2(true); setdropdown3(true); setdropdown4(true);setdropdown(true)}}>
            <li>
              Staff Management
             {dropdown1 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </li>
          </NavLink>
          {
            !dropdown1 &&
            <div className='hashtag'>
              <NavLink>
                <li><i class="fa-solid fa-staff-snake"></i>Staff</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-user-doctor"></i> Assign Doctors</li>
              </NavLink>
            </div>
          }
          {/* 2222222222222222222222222222222222222 */}
          <NavLink onClick={()=>{setdropdown2(!dropdown2) ; setdropdown3(true); setdropdown4(true) ; setdropdown(true); setdropdown1(true)}}>
            <li>
              Department Management
             {dropdown2 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </li>
          </NavLink>
          {
            !dropdown2 &&
            <div className='hashtag'>
              <NavLink>
              <li><i class="fa-regular fa-building"></i>Add new Department</li>
              </NavLink>
            </div>
          }
          {/* 3333333333333333333333333333333333333 */}
          <NavLink onClick={()=>{setdropdown3(!dropdown3) ; setdropdown4(true); setdropdown(true); setdropdown1(true); setdropdown2(true)}}>
            <li>
              Billing & Finance
             {dropdown3 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </li>
          </NavLink>
          {
            !dropdown3 &&
            <div className='hashtag'>
              <NavLink>
                <li><i class="fa-solid fa-building-columns"></i> Insurance Support</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-money-check"></i> Generate Invoices</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-book-bookmark"></i> Payment Records</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-hand-holding-heart"></i> Charity</li>
              </NavLink>
            </div>
          }
          {/* 4444444444444444444444444444444444444 */}
          <NavLink onClick={()=>{setdropdown4(!dropdown4); setdropdown1(true); setdropdown2(true); setdropdown3(true);  setdropdown(true)}}>
            <li>
              Others
             {dropdown4 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </li>
          </NavLink>
          {
            !dropdown4 &&
            <div className='hashtag'>
              <NavLink>
                <li><i class="fa-solid fa-file"></i> Patients & Visitors</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-staff-snake"></i> Staff Info</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-solid fa-bullhorn"></i> Announcements</li>
              </NavLink>
              <NavLink>
                <li><i class="fa-brands fa-adversal"></i> Ads</li>
              </NavLink>
            </div>
          }
        </ul>

      </section>
    </div>
  )
}

export default Dashboard
