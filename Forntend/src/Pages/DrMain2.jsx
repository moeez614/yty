import React from 'react'
import { NavLink } from 'react-router-dom'
import Frame from '../assets/Frame.png'

const DrMain2 = () => {
    return (
        <div className='bg-white'>
            <section className="search">
                <form>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search by name or condition...' />
                    </div>
                    <NavLink>+Add Patient</NavLink>
                </form>
            </section>
            <div className="table-wrapper">

                <table className='table-dr-portal'>
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Age</th>
                            <th>Condition</th>
                            <th>Blood Group</th>
                            <th>Status</th>
                            <th>Next Visit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="mot-ka">
                                <img src={Frame} alt="" width={20} />
                                <h5 style={{ color: "black", fontWeight: '500' }}>Admit Patient <br />
                                    <span>+92 123 456 789</span>
                                </h5>
                            </div></td>
                            <td style={{ color: 'grey' }}>34</td>
                            <td>Diabetes</td>
                            <td>A+</td>
                            <td>
                                <h6 className='patient-stats-dr-portal chal'>Urgent</h6>
                            </td>
                            <td>
                                <h4 className="date-new">
                                    May 1
                                </h4>
                            </td>
                            <td className='cursor'>
                                <NavLink>View<i className="fa-solid fa-angles-right"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="mot-ka">
                                <img src={Frame} alt="" width={20} />
                                <h5 style={{ color: "black", fontWeight: '500' }}>Admit Patient <br />
                                    <span>+92 123 456 789</span>
                                </h5>
                            </div></td>
                            <td style={{ color: 'grey' }}>34</td>
                            <td>Diabetes</td>
                            <td>A+</td>
                            <td>
                                <h6 className='patient-stats-dr-portal chal'>Urgent</h6>
                            </td>
                            <td>
                                <h4 className="date-new">
                                    May 1
                                </h4>
                            </td>
                            <td className='cursor'>
                                <NavLink>View<i className="fa-solid fa-angles-right"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="mot-ka">
                                <img src={Frame} alt="" width={20} />
                                <h5 style={{ color: "black", fontWeight: '500' }}>Admit Patient <br />
                                    <span>+92 123 456 789</span>
                                </h5>
                            </div></td>
                            <td style={{ color: 'grey' }}>34</td>
                            <td>Diabetes</td>
                            <td>A+</td>
                            <td>
                                <h6 className='patient-stats-dr-portal chal'>Urgent</h6>
                            </td>
                            <td>
                                <h4 className="date-new">
                                    May 1
                                </h4>
                            </td>
                            <td className='cursor'>
                                <NavLink>View<i className="fa-solid fa-angles-right"></i></NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DrMain2
