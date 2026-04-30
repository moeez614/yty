import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const Patientlogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const login = async()=>{
        try{
            const res = await axios.post(import.meta.env.VITE_API_URL + '/api/patlogin',{
                email,
                password
            });
            localStorage.setItem("token", res.data.token);
            await axios.get(import.meta.env.VITE_API_URL + '/api/pprotected', {
                headers: {
                    Authorization: `Bearer ${res.data.token}`
                }
            })
            navigate("/patient_profile")
            
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className='login-doctor'>
            <section className='dr-login-design'>
                <h3>
                    <i class="fa-solid fa-user-doctor"></i>
                    Patient Portal
                </h3>
                <form onSubmit={() => login()}>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="email" placeholder='Email' required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder='Password' required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='Submit'>Login</button>
                    <p>Don't have an account? <Link to={'patientregistration'}>Register</Link></p>
                </form>

            </section>
        </div>
    )
}

export default Patientlogin
