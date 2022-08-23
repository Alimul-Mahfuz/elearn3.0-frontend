import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import AxiosConfig from "../components/AxiosConfig";
export default function StdregForm() {
  const nav = useNavigate();
  const bgm={
    backgroundImage:"url:"
  }
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [edulevel, setEdulevel] = useState("SSC");
  const [password, setPassword] = useState("");
  const [cnfpass, setCnfpass] = useState("");
  const [firstnameErr, setFirstnameErr] = useState("");
  const [lastnameErr, setLastnameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [edulevelErr, setEduleveErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [cnfpassErr, setCnfpassErr] = useState("");
  const [submitError,setSubmitErr]=useState(false);
  const handelreg = (e) => {
    e.preventDefault();
    if (firstname.length === 0) {
      setFirstnameErr("First name cannot be empty");
      setSubmitErr(true);
    }
    if(firstname.length!==0){
      setFirstnameErr("");
      setSubmitErr(false);
    }
    if (lastname.length === 0) {
      setLastnameErr("Last name cannot be empty");
      setSubmitErr(true);
    }
    if(lastname.length!==0){
      setLastnameErr("");
      setSubmitErr(false);
    }
    if (email.length === 0) {
      setEmailErr("Email cannot be empty");
      setSubmitErr(true);
    }
    if(email.length!==0){
      setEmailErr("");
      setSubmitErr(false);
    }
    if (phone.length === 0) {
      setPhoneErr("Phone cannot be empty");
      setSubmitErr(true)
    }
    if (phone.length !== 0) {
      setPhoneErr("");
      setSubmitErr(false)
    }
    if (address.length === 0) {
      setAddressErr("Address cannot be empty");
      setSubmitErr(true)
    }
    if (address.length !== 0) {
      setAddressErr("");
      setSubmitErr(false)
    }
    if (dob.length === 0) {
      setDobErr("Date of birth cannot be empty");
      setSubmitErr(true)
    }
    if (dob.length !== 0) {
      setDobErr("");
      setSubmitErr(false)
    }
    if(edulevel.length === 0){
      setEduleveErr("Please select your education level");
      setSubmitErr(true);
    }
    if(edulevel.length !== 0){
      setEduleveErr("");
      setSubmitErr(false);
    }
    if(password.length === 0){
      setPasswordErr("Password cannot be empty");
      setSubmitErr(true)
    }
    if(password.length !== 0){
      setPasswordErr("");
      setSubmitErr(false)
    }
    if(cnfpassErr.length === 0){
      setCnfpassErr("This field cannot be empty");
      setSubmitErr(true)
    }
    if(cnfpassErr.length > 0){
      setCnfpassErr("");
      setSubmitErr(false)
    }
    console.log(edulevel)
    if(!submitError){
      var data = {
        firstname:firstname,
        lastname:lastname,
        dob:dob,
        phone:phone,
        address:address,
        edulevel:edulevel,
        password:password,
        email:email,
        cnfpass:cnfpass
      };
      AxiosConfig.post("/registration/student/", data).then(
        (rsp) => {
          if (rsp.status==200) {
            localStorage.setItem("_authToken", rsp.data.token);
            localStorage.setItem("_userid", rsp.data.accid);
            localStorage.setItem("_stdid", rsp.data.stdid);
            localStorage.setItem("_stdname", rsp.data.stdname);
            nav("/student/dashboard");
          }
          if (rsp.status == 403) {
            nav("/");
          }
        },
        (er) => {
          if (er.response.status == 422) {
            //for data validation
            // setErr(er.response.data);

          } else {
            // setMsg("Server Error Occured");
            // <Error msg={msg}/>
            // console.log(msg);
          }
        }
      );
    }

  };
  return (
    <div >
      {console.log(dob)}
      <div className="form-register" style={{marginTop:"80px"}}>
        <form onSubmit={handelreg}>
          <h2 style={{ padding: "1px,0px" }}>Student Registration</h2>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              name=""
              id=""
              placeholder="First name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              name=""
              id=""
              placeholder="Last name"
            />
            <br />
          </div>
          <div>

              {firstnameErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" }}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {firstnameErr}
                </span>
              )}
              {firstnameErr.length == 0 && ""}


              {lastnameErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" , marginLeft:"76px"}}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {lastnameErr}
                </span>
              )}
              {lastnameErr.length == 0 && ""}

          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              style={{
                width: "100%",
              }}
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id=""
              placeholder="Email"
            />
            <br />
          </div>
          <div>
            {emailErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt", display:"block"}}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {emailErr}
                </span>
            )}
            {emailErr.length == 0 && ""}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name=""
              id=""
              placeholder="Phone"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              name=""
              id=""
              placeholder="Address"
            />
            <br />
          </div>
          <div>

            {phoneErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" }}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {phoneErr}
                </span>
            )}
            {phoneErr.length == 0 && ""}


            {addressErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" , marginLeft:"100px"}}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {addressErr}
                </span>
            )}
            {addressErr.length == 0 && ""}

          </div>
          <div
            // style={{
            //   display: "flex",
            // }}
          >
            <label htmlFor="">Date of birth</label>
            <br/>
            <input
                style={{width:"490px"}}
              type="date"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              name="dob"
              id=""
              placeholder="Date of Birth"
            />
          </div>
          <div>
            {dobErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" }}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {dobErr}
                </span>
            )}
            {dobErr.length == 0 && ""}
         </div>
          <div
            // style={{
            //   display: "flex",
            // }}
          >
            <span style={{padding:"2px, 0px"}}> Please select your education level:</span>
            <select
                style={{width:"490px"}}
              className="edubox"
              onChange={(e) => setEdulevel(e.target.value)}
              name="edulevel"
              placeholder="Education"
              value={edulevel}
            >
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="BSC">BSC</option>
            </select>
            {edulevelErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" }}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {edulevelErr}
                </span>
            )}
            {edulevelErr.length == 0 && ""}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name=""
              id=""
              placeholder="Password"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setCnfpass(e.target.value)}
              value={cnfpass}
              name=""
              id=""
              placeholder="Confirm Password"
            />
            <br />

          </div>
          <div>

            {passwordErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" }}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {passwordErr}
                </span>
            )}
            {passwordErr.length == 0 && ""}


            {cnfpassErr.length > 0 && (
                <span style={{ color: "red", fontSize: "10pt" , marginLeft:"100px"}}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  {cnfpassErr}
                </span>
            )}
            {cnfpassErr.length === 0 && ""}

          </div>
          <button type={"submit"}>Sing up</button>
          <Link to='/login'>
            <p style={{display:"inline",marginLeft:"5px"}}>Already have an accountt? Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
