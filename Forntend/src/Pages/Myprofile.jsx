import React from 'react'
import PatientDash from '../Components/PatientDash'
import { useState, useEffect } from 'react'
import Frame from "../assets/Frame.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

const Myprofile = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    const [files, setfile] = useState(null)
    const [usern, setUserName] = useState("")
    const [guardian, setguardian] = useState("")
    const [email, setemail] = useState("")
    const [cnic, setcnic] = useState("")
    const [dob, setdob] = useState("")
    const [address, setadress] = useState("")
    const [phone, setphone] = useState("")
    const [ephone, setephone] = useState("")
    const [gender, setgender] = useState("")
    const [blood, setblood] = useState("")
    const [text, settext] = useState("")
    const [loading, setLoading] = useState(true)

    const [status, setstatus] = useState('')
    const { id } = useParams()

    const token = localStorage.getItem("token");

    const formsubmit = async (e, id) => {
        e.preventDefault();

        try {
            const formdata = new FormData();
            formdata.append("image", files);
            formdata.append("usern", usern);
            formdata.append("guardian", guardian);
            formdata.append("email", email);
            formdata.append("cnic", cnic);
            formdata.append("dob", dob);
            formdata.append("address", address);
            formdata.append("phone", phone);
            formdata.append("ephone", ephone);
            formdata.append("gender", gender);
            formdata.append("blood", blood);
            formdata.append("text", text);
            if (id) {
                await axios.put(import.meta.env.VITE_API_URL + `/api/crool/${id}`,
                    formdata,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
            } else {
                console.log("create")
                await axios.post(import.meta.env.VITE_API_URL + '/api/crool',
                    formdata,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
            }

        }
        catch (error) {
            console.log(error)
            setstatus("Patient profile failed")
        }

    }

    const [patient, setPatient] = useState([])

    useEffect(() => {
        const chalni = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL + '/api/crools',
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                const data = res.data[0]
                setPatient([data])
                setUserName(data?.usern)
                setguardian(data?.guardian)
                setemail(data?.email)
                setcnic(data?.cnic)
                setdob(data?.dob)
                setadress(data?.address)
                setphone(data?.phone)
                setephone(data?.ephone)
                setgender(data?.gender)
                setblood(data?.blood)
                settext(data?.text)
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

    const handlechange = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setUrl(reader.result);
        }

    }, [file])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <PatientDash />
            <section className='edit-profile'>
                <form onSubmit={(e) => formsubmit(e, patient[0]?._id)}>
                    <section className='mya'>
                        <h4>Edit Profile</h4>
                        <div>
                            <button type='Submit'>Save Changes</button>
                            <NavLink to={'/patient_profile'}>Cancel</NavLink>
                        </div>
                    </section>
                    <hr />

                    <article>
                        <label className='camera'>
                            <input type="file" placeholder='Profile picture' hidden
                                onChange={
                                    (e) => {
                                        handlechange(e)
                                        setfile(e.target.files[0])
                                    }
                                }
                            />
                            {
                                url ?
                                    <div>
                                        <h5>Profile Photo</h5>
                                        <div className="camera-a">
                                            <img src={url} alt={Frame}
                                                onError={
                                                    (e) => {
                                                        e.target.src = Frame
                                                    }
                                                }
                                            />
                                            <h6>Change Photo</h6>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <h5>Profile Photo</h5>
                                        <div className='camera-a'>
                                            {
                                                patient &&
                                                (
                                                    <img src={`data:${patient[0]?.imge?.contentType};base64,${btoa(
                                                        new Uint8Array(patient[0]?.imge?.data?.data || []).reduce((data, byte) => data + String.fromCharCode(byte), '')
                                                    )}`}
                                                        alt={`${Frame}`}
                                                        onError={
                                                            (e) => {
                                                                e.target.src = Frame
                                                            }
                                                        }
                                                    />
                                                )
                                            }
                                            <h6>Upload Photo</h6>
                                        </div>
                                    </div>
                            }

                        </label><br />

                        <div className='allign'>
                            <label htmlFor=""><i class="fa-regular fa-user"></i>Full Name</label>
                            <input type="text" placeholder='Name'
                                onChange={(e) => setUserName(e.target.value)}
                                defaultValue={usern}
                            /> <br />
                            <label htmlFor=""><i class="fa-solid fa-people-group"></i>Guardian</label>
                            <input type="text" placeholder='Guardian'
                                onChange={(e) => setguardian(e.target.value)}
                                defaultValue={guardian}
                            /><br />
                            <label htmlFor=""><i class="fa-solid fa-at"></i>Email</label>
                            <input type="email" placeholder='Email'
                                onChange={(e) => setemail(e.target.value)}
                                defaultValue={email}
                            /> <br />
                            <label htmlFor=""><i class="fa-regular fa-id-badge"></i>CNIC</label>
                            <input type="text" placeholder='12345-1234567-8'
                                onChange={(e) => setcnic(e.target.value)}
                                pattern='[0-9]{5}-[0-9]{7}-[0-9]{1}'
                                maxLength={15}
                                defaultValue={cnic}
                            /><br />
                            <label htmlFor=""><i class="fa-regular fa-calendar"></i>DOB</label>
                            <input type="date" placeholder='Date of Birth'
                                onChange={(e) => setdob(e.target.value)}
                                defaultValue={dob}
                            /> <br />
                        </div>
                        <div className='allign'>
                            <label htmlFor=""><i class="fa-solid fa-location-arrow"></i>Address</label>
                            <input type="text" placeholder='Address'
                                onChange={(e) => setadress(e.target.value)}
                                defaultValue={address}
                            /> <br />
                            <label htmlFor=""><i class="fa-solid fa-phone"></i>Phone Number</label>
                            <input type="tel" placeholder='+92XXX-XXXXXXX'
                                onChange={(e) => setphone(e.target.value)}
                                defaultValue={phone}
                            /> <br />
                            <label htmlFor=""><i class="fa-solid fa-phone"></i>Emergency Contact</label>
                            <input type="tel" placeholder='Emergency Contact'
                                onChange={(e) => setephone(e.target.value)}
                                defaultValue={ephone}
                            /> <br />

                            <div className='label'>
                                <label htmlFor=""><i class="fa-solid fa-person-half-dress"></i>Gender</label> <br />
                                <select name="" id="" onChange={(e) => setgender(e.target.value)} defaultValue={gender}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className='label'>
                                <label htmlFor=""><i class="fa-solid fa-droplet"></i>Blood Group</label> <br />
                                <select name="Blood" id="Blood" onChange={(e) => setblood(e.target.value)} defaultValue={blood}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A−</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B−</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB−</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O−</option>
                                </select>
                            </div>
                        </div>
                        <div className='allign textarea'>
                            <textarea placeholder='Medical History (Optional)'
                                onChange={(e) => settext(e.target.value)}
                                defaultValue={text}
                            ></textarea>
                            <button type='Submit'>Save Changes</button>
                        </div>
                    </article>

                </form>
            </section>
            {
                status && <h6 className='status'>
                    {status}
                </h6>
            }
        </div>
    )
}

export default Myprofile
