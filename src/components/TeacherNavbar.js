import React from 'react';
import '../assets/css/style.css';
import '../assets/css/bootstrap.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <h3><a style={{
              textDecoration:"none",
              color:"#dff6ff"
            }} href="/">E-Learning</a></h3>
            <nav className='nav'>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="/all/course">Courses</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Opportunity</a></li>

                    <li><a href="/login">Log Out</a></li>
                    <li><a href="/teacher/create">Teacher Registration</a></li>
                    <li ><a href="/apply"><button
                    style={{
                      backgroundColor: "#1363DF",
                      padding:"5px",
                      color:"white",
                      borderRadius:"10px",
    
                    }}
                    >Apply Now</button></a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
