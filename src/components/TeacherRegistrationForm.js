import React, { useState } from "react";
import "../assets/./css/tstyles.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const TeacherRegistrationForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setCon_password] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();
  const [degree, setDegree] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    var data = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      dob: dob,
      address: address,
      password: password,
      con_password: con_password
    };
    axios.post("http://localhost:8000/api/teacher/create",data).then(
      (rsp) => {
        setMsg(rsp.data.msg);
        nav("/login");
      },
      (er) => {
        setErr(er.response.data);
      }
    )
  };

  return (
    <div className="form">
      <form onSubmit={handleForm}>
        <br/>
        <br/>
          <h1 text align="center">Create Account</h1>
        
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              size="30"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.fname ? err.fname[0] : ""}</span>
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              size="30"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.lname ? err.lname[0] : ""}</span>
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              size="30"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.email ? err.email[0] : ""}</span>
          </div>
          <div className="phone">
            <label className="form__label" for="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form__input"
              placeholder="+880"
              size="30"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.phone ? err.phone[0] : ""}</span>
          </div>
          <div className="dob">
            <label className="form__label" for="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="phone"
              className="form__input"
              size="30"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.dob ? err.dob[0] : ""}</span>
          </div>
          <div className="address">
            <label className="form__label" for="address">
              Address
            </label>
            <input
              className="form__input"
              type="text"
              id="address"
              placeholder="House No, Road No, City-Zip"
              size="30"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.address ? err.address[0] : ""}</span>
          </div>

          {/* <div class="degree">
                        <label className="form__label">Degree</label>
                        <select value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}className="form__input">
                            <option selected>Choose...</option>
                            <option>Ph.D</option>
                            <option>MSc</option>
                            <option>BSc</option>
                            <option>MBA</option>
                            <option>BBA</option>
                        </select>
                        <span className="errstyle">{err.degree ? err.degree[0] : ""}</span>
                    </div> */}

        

          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              size="30"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.password ? err.password[0] : ""}</span>
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              size="30"
              value={con_password}
              onChange={(e) => {
                setCon_password(e.target.value);
              }}
            />
            {/* <br/> */}
            <span className="errstyle">{err.con_password ? err.con_password[0] : ""}</span>
          </div>
        </div>
        
          <div className="btnsignup">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          </div>

          
        
      </form>
    </div>
  );
};
export default TeacherRegistrationForm;