import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
export default function LogNavbar() {
    const nav = useNavigate();
    const logout=()=>{
        localStorage.setItem("_authToken", "");
        localStorage.setItem("_userid", "");
        localStorage.setItem("_stdid", "");
        localStorage.setItem("_stdname", "");
        localStorage.setItem("_islogged", false);
        nav("/");
    }
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <h3><a style={{
              textDecoration:"none",
              color:"#dff6ff"
            }} href="/student/dashboard">E-Learning</a></h3>
            <nav className='nav'>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="/all/course">Courses</a></li>
                    <li><a href="#">Contacts</a></li>
                    
                    <li onClick={logout}><a href="#">Logout</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"18pt",position:"relative",top:"5px"}} /></a></li>

                    
                </ul>
            </nav>
        </div>
    </div>
  )
}
