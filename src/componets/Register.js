import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate();
 const [input, setInput]= useState({
    name: "",
    email: "",
    password: "",
 });
const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login")
}
 





  return (
    <div className='input-hed'>
        <h1>Register Now</h1>

        <form onSubmit={handleSubmit}>
         
            <div className='Input-Box'>
            <input 
            name='name'
            value={input.name}
            onChange={(e)=>
                setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })}
             type="text" placeholder='Enter Name' />
            </div>
            
            <div className='Input-Box' >
            <input 
             name='email'
             value={input.email}
             onChange={(e)=>
                 setInput({
                     ...input,
                     [e.target.name]: e.target.value,
                 })}
             type="email" placeholder='Enter Email' />
            </div>
      
                <div className='Input-Box'>
            <input 
            name='password'
            value={input.password}
            onChange={(e)=>
                setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })}
                  type="password" placeholder='Enter Password' />

                </div>

                <div className='btn'>
            <button type='Submit'>Register</button>
                    </div>           
        </form>
    </div>
  )
}

export default Register