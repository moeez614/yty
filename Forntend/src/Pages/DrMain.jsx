import React from 'react'
import patient from '../assets/patient.png'
import { NavLink } from 'react-router-dom'
import Frame from '../assets/Frame.png'

const DrMain = () => {
    return (
        <div className='bg-white'>
            <section className="dr-boxes">
                <article className='blu'>
                    <div>
                        <h6>Total Patients</h6>
                        <h3>22</h3>
                        <h6>+4 this month</h6>
                    </div>
                    <i className="fa-regular fa-user"></i>
                </article>
                <article className='purple'>
                    <div>
                        <h6>Today's Visit</h6>
                        <h3>6</h3>
                        <h6>2 Urgent</h6>
                    </div>
                    <i class="fa-solid fa-file-medical"></i>
                </article>
                <article className='red'>
                    <div>
                        <h6>Critical Cases</h6>
                        <h3>2</h3>
                        <h6>Needs attention</h6>
                    </div>
                    <i class="fa-solid fa-heart-pulse"></i>
                </article>
                <article className='green'>
                    <div>
                        <h6>Recovery Rate</h6>
                        <h3>96%</h3>
                        <h6>+2% this month</h6>
                    </div>
                    <i class="fa-solid fa-shield"></i>
                </article>
                {/* next patient details like flan flan */}
                <section className='thala-ala'>
                    <div className='left-ai'>
                        <div className='h-ai'>
                            <h4>Today's appointments</h4>
                            <NavLink>See all<i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                        <div className='data-dr-portal-patient'>
                            <section className='data-dr-portal1'>
                                <h5>
                                    8:30 AM
                                    <br />
                                    <span>
                                        30 min
                                    </span>
                                </h5>
                                <div className="first-time"></div>
                                <div className="pat-name">
                                    <h5>
                                        Moeez Ali
                                        <br />
                                        <span>Follow-up</span>
                                    </h5>
                                </div>
                            </section>
                            <h6 className='patient-stats-dr-portal'>Urgent</h6>
                        </div>
                    </div>
                    {/* right */}
                    <div className="right-ai">
                        <h4>Requires attention</h4>
                        <div style={{padding:"10px 0px" , borderBottom:"1px solid gainsboro"}}>
                            <section className='kalya'>
                                <div className="mot-ka">
                                    <img src={Frame} alt="" width={20} />
                                    <h5>Admit Patient <br />
                                        <span>Disease</span>
                                    </h5>
                                </div>
                                <div className="moti-rang"></div>
                            </section>
                            <div className='kia-kara'>
                                <h3>Next visit : <span>27 April</span></h3>
                                <h6 className='patient-stats-dr-portal2'>Critical</h6>
                            </div>
                        </div>
                        <div className="drop-dr-portal">
                            <h6>Latest Vitals - Moeez ALi</h6>
                            <section className="patient-diagnosis">
                                <div>
                                    <h5>
                                        Heart Rate
                                        <br />
                                        <span>
                                            80 bpm
                                        </span>
                                    </h5>
                                    <h5>
                                        Blood Pressure
                                        <br />
                                        <span>
                                            120/80 mmHg
                                        </span>
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        Oxygen Saturation
                                        <br />
                                        <span>
                                            98 %
                                        </span>
                                    </h5>
                                    <h5>
                                        Glucose
                                        <br />
                                        <span>
                                            96 mg/dl
                                        </span>
                                    </h5>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default DrMain
