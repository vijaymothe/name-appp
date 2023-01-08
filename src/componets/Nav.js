import React from "react";
import { Link } from "react-router-dom";


const Nav=()=>{
    return (
        <div className="navber">
           <ul className="nav-ul">
            <li> <Link to="/" >Home</Link></li>
            <li><Link to="/register" >SignUp</Link></li>
            <li><Link to="/login" >Login</Link></li>
           </ul>
        </div>
    )
}

export default Nav