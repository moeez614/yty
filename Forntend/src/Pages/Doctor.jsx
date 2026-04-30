import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const Doctor = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + '/api/login', {
                email,
                password
            });
            localStorage.setItem("token", res.data.token);

            const token = res.data.token
            await axios.get(import.meta.env.VITE_API_URL + "/api/protected", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            if(res.data.token){
                navigate("/okay")
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='login-doctor'>
            <section className='dr-login-design'>
                <h3>
                    <i class="fa-solid fa-user-doctor"></i>
                    Doctor Portal
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
                    <p>Don't have an account? <Link to={'register'}>Register</Link></p>
                </form>

            </section>
        </div>
    )
}

export default Doctor
