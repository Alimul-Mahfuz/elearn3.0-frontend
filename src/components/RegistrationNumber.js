import React from 'react'
import "../assets/css/applystyles.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";
import '../assets/css/style.css';
import '../assets/css/bootstrap.css';


const TeacherApply = () => {
 const [rn, setRn] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const upload=(event)=>{
    event.preventDefault();
    var data = {
      rn: rn};
    
      axios.post("http://localhost:8000/api/teacher/create",data).then(
      (rsp) => {
        setMsg(rsp.data.msg);
      },
      (er) => {
        setErr(er.response.data);
      }
    )
  }
  return (
    <div className="form" style={{height: "340px"}}>
        <h1 text align="center">Create Teacher Account</h1>
      <div className="form-body">
      <form onSubmit={upload}>
        <div className="username">
          <label className="form__label" for="rn">
            Registration Number
          </label>
          <input
            className="form__input"
            type="text"
            id="rn"
            placeholder="Registraion Number" size="40" value={rn}
            onChange={(e) => {
              setRn(e.target.value);
            }}
          />
           <br/>
            <span className="errstyle">{err.rn ? err.rn[0] : ""}</span>
        </div>

        
        
        
          
          </form>
      </div>
      <div className='btnsignup'>
        <a href="/teacher/create"><button
                    style={{
                      backgroundColor: "#1363DF",
                      padding:"5px",
                      color:"white",
                      borderRadius:"10px",
                    }}
                    >Next</button></a>
        </div>
      
    </div>
  );
}

export default TeacherApply;