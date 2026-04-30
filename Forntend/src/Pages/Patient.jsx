import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import PatientDash from '../Components/PatientDash'
import axios from 'axios'
import Loader from '../Components/Loader'
const Patient = () => {
    const [patient, setPatient] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const chalni = async () => {
            try {
                const rew = await axios.get(import.meta.env.VITE_API_URL + '/api/crools',
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                setPatient([rew.data[0]])
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        chalni()
    }, [])
    const logout = async () => {
        try {
            localStorage.removeItem("token")
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <PatientDash />
            {/* <img src="/patientcare.webp" alt="" className='patient-care-image' /> */}
            <section className='patient-dash'>
                <div className='correction'>
                    <div className="patient-apt">
                        <h3>
                            <i class="fa-solid fa-circle-check"></i>
                            Appointments
                        </h3>
                        <div className='milkyway'>

                            <h5>No appointments yet</h5>
                            <h5>Book your first appointment to get started</h5>
                            <Link to={"appointment"}>Book Appointment</Link>
                        </div>
                    </div>
                    {/* for profile */}
                    <section className="mection">

                        <div className='patient-profile'>
                            <div className='img-frame'>
                                <h4>
                                    <div>

                                        <i class="fa-solid fa-id-badge"></i>
                                        {
                                            patient[0]?.usern
                                        }
                                    </div>
                                    <h6 className='h6'>Uid : {patient[0]?.cnic}</h6>
                                </h4>
                                {
                                    patient &&
                                    (
                                        <img src={`data:${patient[0]?.imge?.contentType};base64,${btoa(
                                            new Uint8Array(patient[0]?.imge?.data?.data || []).reduce((data, byte) => data + String.fromCharCode(byte), '')
                                        )}`}
                                            // alt={url}
                                        />
                                    )
                                }
                            </div>
                            <section className="detail-p">
                                <div>
                                    <div>

                                        <h5>DOB :</h5>
                                        <h6>{patient[0]?.dob}</h6>
                                    </div>
                                    <div>
                                        <h6>
                                            <i class="fa-solid fa-droplet khoon"></i>
                                            {patient[0]?.blood}
                                        </h6>
                                    </div>
                                </div>

                                <div>
                                    <h6>
                                        <i class="fa-solid fa-location-dot loc"></i>
                                        {patient[0]?.address}
                                    </h6>
                                    <h6>
                                        <i class="fa-solid fa-people-group"></i>
                                        {patient[0]?.guardian}
                                    </h6>

                                </div>
                                <div>
                                    <h6><i class="fa-solid fa-phone tali"></i>{patient[0]?.phone}</h6>
                                    <h6><i class="fa-solid fa-phone tali"></i>{patient[0]?.ephone}</h6>
                                </div>
                                <div>
                                    <h6><i class="fa-solid fa-person-half-dress"></i>
                                        {patient[0]?.gender}</h6>
                                    <h6>
                                        <i class="fa-solid fa-address-card navy"></i>
                                        {patient[0]?.email}
                                    </h6>
                                </div>
                                <div className="edit-p-info">
                                    <Link to={"myprofile"}>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        <h5>Edit</h5>
                                    </Link>
                                    <button onClick={logout}>
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        <h5>Logout</h5>
                                    </button>
                                </div>

                            </section>
                        </div>
                        {/* for reports amd medical records */}
                        {/* for reports amd medical records */}
                        {/* for reports amd medical records */}

                        <div className="myreports">
                            <Link>
                                <i class="fa-solid fa-file"></i>
                                Medical Reports
                            </Link>
                            <Link>
                                <i class="fa-solid fa-receipt"></i>
                                Prescriptions
                            </Link>

                        </div>
                    </section>

                </div>
                {/* developer moeez ali , do you like it🙄 */}

            </section>
        </>
    )
}

export default Patient
