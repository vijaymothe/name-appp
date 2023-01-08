import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
     const [input, setInput]= useState({
        email: "",
        password: "",
     });
     const handleLogin=(e)=>{
        e.preventDefault();
       const loggeduser = JSON.parse(localStorage.getItem("user"));
       if(input.email === loggeduser.email && input.password === loggeduser.password)
       {
        localStorage.setItem("Logged", true);
        Navigate("/")
       }else
       {
        alert("Wrong Email Or Password")
       }
        
    }




    return (
        <div className='input-hed'>
            <h1>Login</h1>

                    <form onSubmit={handleLogin}>
            <div className='Input-Box' >
                <input
                    name='email'
                    value={input.email}
                    onChange={(e) =>
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
                    onChange={(e) =>
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

export default Login