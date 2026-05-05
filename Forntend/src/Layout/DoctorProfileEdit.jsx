import React from 'react'
import { GoogleLogin , googleLogout} from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DoctorProfileEdit = () => {
  const navigate = useNavigate();
  const handlelogin = async (credentialResponse) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google/callback`,
        {
          token: credentialResponse.credential,
        }
      );

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
    catch (err) {
      console.log(err);
    }
  }

  const handlelogout = () => {
    googleLogout();
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Google Login</h2>
      <GoogleLogin
        onSuccess={handlelogin}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default DoctorProfileEdit
