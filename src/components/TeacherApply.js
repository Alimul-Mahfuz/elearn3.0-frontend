import React from 'react'
import "../assets/css/applystyles.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

const TeacherApply = () => {
 const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const[mfile,setFile] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const upload=(event)=>{
    event.preventDefault();
    var data = {
      fullname: fullname,
      email: email};
    
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
        <h1 text align="center">Apply for Job</h1>
      <div className="form-body">
      <form onSubmit={upload}>
        <div className="username">
          <label className="form__label" for="fullName">
            Full Name
          </label>
          <input
            className="form__input"
            type="text"
            id="fullName"
            placeholder="Full Name" size="40" value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
           <br/>
            <span className="errstyle">{err.fullname ? err.fullname[0] : ""}</span>
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email
          </label>
          <input
            className="form__input"
            type="text"
            id="email"
            placeholder="Email" size="40" value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
         <br/>
            <span className="errstyle">{err.email ? err.email[0] : ""}</span>
        </div>

        
        <div className="cv">
          <label className="form__label" for="cv">
            Upload CV
          </label>
          <input
            className="form__input"
            type="file"
            id="cv"
            placeholder="Upload CV"  onChange={(e)=>{setFile(e.target.files[0])}}
          />
          <br/>
            <span className="errstyle">{err.mfile ? err.mfile[0] : ""}</span>
        </div>

        <br/>
        
        <div className='btnsignup'>
        <Button variant="primary" type="submit">
            Apply
          </Button>
        </div>
          
          </form>
      </div>
      
    </div>
  );
}

export default TeacherApply;