import React from 'react'
import { Link } from 'react-router-dom'
const PatientDash = () => {
    return (
        <>
            <section>
                <div className="logo">
                    <div className='jogi'>
                        <img src="/white-logo.png" alt="" width={"70px"} />
                        <h3>Patient Profile</h3>
                    </div>
                    <Link>Profile</Link>
                </div>

                <div className="card-p-appointment">

                </div>
            </section>
        </>
    )
}

export default PatientDash
