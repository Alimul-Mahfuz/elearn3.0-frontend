import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import AxiosConfig from "./AxiosConfig";
import "../assets/css/applystyles.css";
import TeacherNavbar from "./TeacherNavbar";
export default function TeacherProfile(props) {
  const [tinfo, setTinfo] = useState([]);
  useEffect(() => {
    let tid = localStorage.getItem("_tid");
    // console.log(tid);
    AxiosConfig.get(`/teacher/myprofile/${tid}`).then(
      (rsp) => {
        //console.log(rsp.data);
        setTinfo(rsp.data);
        //console.log(rsp.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <div>
      <TeacherNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1 style={{ color: "red" }}>My Profile</h1>
      </center>
      <br />
      {tinfo.map((t) => {
        return (
          <center>
            <br />
            <div class="col-md-6 container">
              <ul class="list-group col-md-8 ">
                <li class="list-group-item">Name: {t.name}</li>
                <li class="list-group-item">Email: {t.email}</li>
                <li class="list-group-item">Phone: {t.phone}</li>
                <li class="list-group-item">Date of Birth: {t.dob}</li>
                <li class="list-group-item">Address: {t.address}</li>
              </ul>
            </div>
            
            <button className="button">Edit</button>
          </center>
        );
      })}
    </div>
  );
}
