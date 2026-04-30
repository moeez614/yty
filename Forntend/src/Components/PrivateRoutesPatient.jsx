import React from 'react'

const PrivateRoutesPatient = ({children}) => {
  const token = localStorage.getItem('token')
  if(!token || token === "undefined" || token === "null"){
    return token ? children : <Navigate to="/patientlogin" />
  }
  return children

}

export default PrivateRoutesPatient
