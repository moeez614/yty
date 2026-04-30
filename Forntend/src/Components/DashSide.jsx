import React from 'react'
import { Link } from 'react-router-dom'
import {
    Area,
    AreaChart,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const DashSide = () => {
    const data = [
        { name: "Jan", Active_Caregivers: 120, Appointment: 159, Pending: 11, Alert: 1 },
        { name: "Feb", Active_Caregivers: 190, Appointment: 109, Pending: 21, Alert: 5 },
        { name: "Mar", Active_Caregivers: 300, Appointment: 19, Pending: 32, Alert: 0 },
        { name: "Apr", Active_Caregivers: 250, Appointment: 89, Pending: 14, Alert: 3 },
    ];
    return (
        <div className='setting-dash-2'>
            <section className="admin-dashboard2">
                <div className='dash2-bar'>
                    <h3>Dashboard</h3>
                    <div>
                        <Link>
                            <span><i class="fa-solid fa-bell"></i></span>
                            Notification
                        </Link>
                        <Link to={"appointment"} className='btn-atm'>
                            <span>
                                <i class="fa-solid fa-plus"></i>
                            </span>
                            New appointment
                        </Link>

                    </div>
                </div>
                <h6>
                    Real-time overview of your caregiving operations.
                </h6>
                <div className="boxes">
                    <div className="Active">
                        <h4>
                            <i class="fa-solid fa-circle-user"></i>
                            Active Caregivers
                        </h4>
                        <h3>48</h3>
                        <h5>+3 from yesterday</h5>
                        <Link>
                            <h5>
                                View
                            </h5>
                            <i className="fa-solid fa-angles-right f"></i>
                        </Link>
                    </div>
                    {/* ab kia ho ga kaliaaa */}
                    <div className="Active appoint">
                        <h4>
                            <i class="fa-solid fa-circle-check"></i>
                            Appointments today
                        </h4>
                        <h3>187</h3>
                        <h5>23 completed</h5>
                        <Link>
                            <h5>
                                View
                            </h5>
                            <i className="fa-solid fa-angles-right f"></i>
                        </Link>
                    </div>
                    {/* pending reports */}
                    <div className="Active pending">
                        <h4>
                            <i class="fa-solid fa-clock"></i>
                            Pending records
                        </h4>
                        <h3>12</h3>
                        <h5>5 need review</h5>
                        <Link>
                            <h5>
                                View
                            </h5>
                            <i className="fa-solid fa-angles-right f"></i>
                        </Link>
                    </div>
                    {/* Alert */}
                    <div className="Active alert">
                        <h4>
                            <i class="fa-solid fa-kit-medical"></i>
                            Alert
                        </h4>
                        <h3>4</h3>
                        <h5>2 critical</h5>
                        <Link>
                            <h5>
                                View
                            </h5>
                            <i className="fa-solid fa-angles-right f"></i>
                        </Link>
                    </div>
                </div>

                {/* Graphical overview of dashboard */}
                <ResponsiveContainer width="95%" height={300}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="0 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="Active_Caregivers" stroke="green" fill="rgba(154, 241, 190, 1)" />
                        <Area type="monotone" dataKey="Appointment" stroke="navy" fill="rgba(0, 0, 255, 0.5)" />
                        <Area type="monotone" dataKey="Pending" stroke="orange" fill="rgba(255, 165, 0, 0.5)" />
                        <Area type="monotone" dataKey="Alert" stroke="red" fill="rgba(255, 0, 0, 0.5)" />
                    </AreaChart>
                </ResponsiveContainer>

            </section>
        </div>
    )
}

export default DashSide
