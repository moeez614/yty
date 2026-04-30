import React from 'react'
import Frame from '../assets/Frame.png'
import {NavLink} from 'react-router-dom'

const Medicalreport = () => {
    return (
        <div className='bg-white'>
            <section className='recentreports'>
                <h3>Recent Medical Records</h3>
                <main>
                    <div className="mot-ka">
                        <img src={Frame} alt="" width={20} />
                        <h5 style={{color:'black', fontWeight:'500'}}>Admit Patient <br />
                            <span>Disease . Updated now</span>
                        </h5>
                    </div>
                    <div>
                        <NavLink className={"view-portal"}>View</NavLink>
                        <NavLink className={"export-portal"}>Export</NavLink>
                    </div>
                </main>
                <main>
                    <div className="mot-ka">
                        <img src={Frame} alt="" width={20} />
                        <h5>Admit Patient <br />
                            <span>Disease . Updated now</span>
                        </h5>
                    </div>
                    <div>
                        <NavLink className={"view-portal"}>View</NavLink>
                        <NavLink className={"export-portal"}>Export</NavLink>
                    </div>
                </main>
                <main>
                    <div className="mot-ka">
                        <img src={Frame} alt="" width={20} />
                        <h5>Admit Patient <br />
                            <span>Disease . Updated now</span>
                        </h5>
                    </div>
                    <div>
                        <NavLink className={"view-portal"}>View</NavLink>
                        <NavLink className={"export-portal"}>Export</NavLink>
                    </div>
                </main>

            </section>
        </div>
    )
}

export default Medicalreport
