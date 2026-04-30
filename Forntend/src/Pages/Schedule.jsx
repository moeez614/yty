import React from 'react'
import { format } from 'date-fns'
import {NavLink} from 'react-router-dom'
const Schedule = () => {
    const date = format(new Date(), 'eeee, MMMM dd')
    return (
        <div className='bg-white left-right'>
            <section className="left-schedule">
                <h3>{date}</h3>
                <article>
                    <div className='basyar'>
                        <h5>8:25</h5>
                        <div className="design">
                            <p className='design1'></p>
                            <p className="design2"></p>
                        </div>
                    </div>
                    <div className='hoki'>
                        <h5 style={{ color: 'black', fontWeight: '500' }}>Admit Patient <br />
                            <span>Follow up . 30 min</span>
                        </h5>
                        <h6 className='urgent'>URGENT</h6>
                    </div>
                </article>
            </section>
            <section className="right-schedule">
                <section className="right-1">
                    <h5 style={{marginBottom:'10px'}}>Summary</h5>
                    <div className='tours'>
                        <div>
                            <h6>Total today</h6>
                            <h5>6</h5>
                        </div>
                        <div>
                            <h6>Completed</h6>
                            <h5>0</h5>
                        </div>
                        <div>
                            <h6>Pending</h6>
                            <h5>0</h5>
                        </div>
                        <div>
                            <h6>Urgent</h6>
                            <h5>2</h5>
                        </div>

                    </div>
                </section>
                <section className="right-2">
                    <h5>Next Patient</h5>
                    <h6>
                        Admit Patient &nbsp;
                        <span>Follow up . 30 min</span>
                    </h6>
                    <NavLink to={"/report"}>Start Visit</NavLink>
                </section>
            </section>
        </div>
    )
}

export default Schedule
