import React from 'react'
import doctor from '../assets/doctor.png'
import Frame from '../assets/Frame.png'
import { NavLink, useNavigate } from 'react-router-dom'
import folder from '../assets/folder.png'
import patient from '../assets/patient.png'
import schedule from '../assets/schedule.png'
import { format } from 'date-fns'
const DrDashboard = () => {
    const date = format(new Date(), 'eeee, MMMM dd')
    const navigate = useNavigate()
    const logout = async () => {
        try {
            localStorage.removeItem("token")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bhaisa'>
            <section className='dr-dashboard'>
                <div className='logo-flex-p'>
                    <img src={doctor} width={30} />
                    <h5>
                        Allied Hospital
                        <br />
                        <span>Doctor Portal</span>
                    </h5>
                </div>
                <nav className='dr-nav'>
                    <ul>
                        <NavLink to={"/okay"}>
                            <i class="fa-regular fa-chart-bar"></i>
                            Dashboard
                        </NavLink>
                        <NavLink to={"today_patient"}><i class="fa-solid fa-head-side-mask"></i>Pateints</NavLink>
                        <NavLink to={"schedule"}><i class="fa-regular fa-calendar"></i>Schedule</NavLink>
                        <NavLink to={"medical_report"}><i class="fa-solid fa-file-medical"></i>Records</NavLink>
                    </ul>
                </nav>
                <div className="bottom-dr2">
                    <div className='bottom-dr'>
                        <img src={Frame} alt="" className='frame' />
                        <div>
                            <h4>Dr. Name</h4>
                            <h5>Department</h5>
                        </div>
                    </div>
                    <NavLink to={"settings"}><i className="fa-solid fa-gear"></i>Setting</NavLink>
                    <button onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
                </div>
            </section>
            {/* <div className="new-bar">
                <section>
                    <h3>Good Morning , Dr. Name</h3>
                    <h5>{date} . 6 appointments today</h5>
                </section>
                <section style={{paddingLeft:'20'}}>
                    <NavLink><i className="fa-regular fa-bell"></i></NavLink>
                    <NavLink><i className="fa-solid fa-gear setkar"></i></NavLink>
                </section>
            </div> */}
        </div>
    )
}

export default DrDashboard
