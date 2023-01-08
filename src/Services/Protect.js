import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protect = () => {

    const auth = localStorage.getItem("Logged");
  return auth ? <Outlet/> : <Navigate to={"/login"} />
    
  
}

export default Protect