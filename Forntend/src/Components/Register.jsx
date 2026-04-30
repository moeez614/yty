import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [usern, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const handlesubmit = async () => {
    try {
      if (password !== ConfirmPassword) {
        alert("Passwords do not match")
        return
      }
      await axios.post(`http://localhost:5000/api/register`, {
        usern,
        email,
        password
      })
      .then(res => console.log(res.data))

      alert("Signup successfully!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='registration-dr'>
      <section className='dr-reg-design'>
        <h3>
          <i class="fa-solid fa-user-doctor"></i>
          Doctor Registration
        </h3>
        <form onSubmit={() => handlesubmit()}>
          <div>
            <i class="fa-regular fa-user"></i>
            <input type="text" placeholder='User Name' required 
            onChange={(e)=> setUserName(e.target.value)}
            />
          </div>
          <div>
            <i class="fa-solid fa-at"></i>
            <input type="text" placeholder='Email' required 
            onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder='Password' required 
            onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder='Confirm Password' required 
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          </div>

          <button type='Submit'>Sign Up & Login</button>
        </form>

      </section>
    </div>
  )
}

export default Register
