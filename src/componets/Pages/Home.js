import React from 'react'
import {  useNavigate } from 'react-router-dom';
const Home = () => {
      const navigate = useNavigate();
    const userName =JSON.parse(localStorage.getItem("user"));

    const handleLogout =()=>{
        localStorage.removeItem("Logged");
        navigate("/login");
    }




  return (
    <div className='Home-Page'>
        <h2>Welcome To Home Page </h2>
        <p> -- {userName.name} --</p>
         <button onClick={handleLogout} type='button'>Logout</button>

    </div>
  )
}

export default Home;