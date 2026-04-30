import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    if(!token || token === "undefined" || token === "null"){
        return token ? children : <Navigate to="/doctor_portal" />
    }
    return children
}

export default PrivateRoute
