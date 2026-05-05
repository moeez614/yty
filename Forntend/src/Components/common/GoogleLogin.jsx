import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../../Components/Loader'
const GoogleLogin = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [profile, setprofile] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(!token || token === "undefined" || token === "null"){
    return token ? navigate("/h") : navigate("/h")
    }
    const getProfile = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL + `/api/talash`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        console.log(res.data)
        setprofile(res.data)
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    }
    if (token) {
      getProfile()
    }
  }, [token])
  if (loading) {
    return <Loader />
  }
  return (
    <div className='teth'>
      <h3>Google Login</h3>
      <img src={profile?.picture} alt="photo" width={40} height={40} loading='lazy' title={profile?.email}/>
    </div>
  )
}

export default GoogleLogin
