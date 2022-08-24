import React from "react";
import AxiosConfig from "../components/AxiosConfig";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Errors";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passerr, setPassErr] = useState("");
  const [emailerr, setEmailErr] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const handellogin = (e) => {
    function ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    }
    e.preventDefault();
    if (email.length !== 0) {
      if (ValidateEmail(email)) {
        setEmailErr(null);
      } else {
        setPassErr("Invalid!");
      }
    }
    if (email.length == 0) {
      setEmailErr("Email cannot be empty!");
    }
    if (password.length == 0) {
      setPassErr("Password cannot be empty!");
    }
    if (email.length > 0) {
      setEmailErr("");
    }
    if (password.length > 0) {
      setPassErr("");
    }
    if (passerr.length == 0 && emailerr.length == 0) {
      var data = { email: email, password: password };
      AxiosConfig.post("/login", data).then(
        (rsp) => {
          if (rsp.data.id != 0 && rsp.data.type==3) {
            localStorage.setItem("_authToken", rsp.data.token);
            localStorage.setItem("_userid", rsp.data.accid);
            localStorage.setItem("_stdid", rsp.data.stdid);
            localStorage.setItem("_stdname", rsp.data.stdname);
            localStorage.setItem("_islogged", true);
            nav("/student/dashboard");
          }
          if (rsp.data.id != 0 && rsp.data.type==2) {
            localStorage.setItem("_authToken", rsp.data.token);
            localStorage.setItem("_userid", rsp.data.accid);
            localStorage.setItem("_tid", rsp.data.tid);
            localStorage.setItem("_tname", rsp.data.tname);
            localStorage.setItem("_islogged", true);
            nav("/teacher/dashboard");
          }
          if (rsp.status == 403) {
            nav("/");
          }
        },
        (er) => {
          if (er.response.status == 422) {
            //for data validation
            setErr(er.response.data);

          } else {
            setMsg("Server Error Occured");
            <Error msg={msg}/>
            console.log(msg);
          }
        }
      );
    }
  };
  return (
    <div>
      <div className="form-login">
        <form onSubmit={handellogin}>
          <h2 style={{ color: "black" }}>Login</h2>
          <span className="inputSpan">
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id=""
              placeholder="Email"
            />
            {emailerr.length > 0 && (
              <span style={{ color: "red", fontSize: "10pt" }}>
                <FontAwesomeIcon icon={faCircleExclamation} />
                {emailerr}
              </span>
            )}
            {emailerr.length == 0 && ""}
          </span>

          <span className="inputSpan">
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id=""
              value={password}
              placeholder="Password"
            />
            {passerr.length > 0 && (
              <span style={{ color: "red", fontSize: "10pt" }}>
                <FontAwesomeIcon icon={faCircleExclamation} />
                {passerr}
              </span>
            )}
          </span>
          <span style={{display:"inline"}}>
            <button type="submit">Login</button>
            <Link to='/student/register'>
            <p style={{display:"inline",marginLeft:"5px"}}>Don't have an account?</p>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
