import React from "react";
import TeacherCourse from "./TeacherCourse";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosConfig from "../components/AxiosConfig";
import axios from "axios";
import "../assets/css/applystyles.css";
import TeacherNavbar from "./TeacherNavbar";
import Button from "react-bootstrap/Button";
// import Weather from './student/Weather';
export default function TeacherDashboard(props) {
  const [tcourses, setTcourses] = useState([]);
  const [username, setUserName] = useState("");
  useEffect(() => {
    let tid = localStorage.getItem("_tid");
    // console.log(tid);
    AxiosConfig.get(`/teacher/showall/course/${tid}`).then(
      (rsp) => {
        //console.log(rsp.data);
        setTcourses(rsp.data);
        //console.log(rsp.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <div>
      <center>
      <TeacherNavbar />
      <br />
      <br />
      <br />

      <h1 style={{ color: "red" }}>
        {localStorage.getItem("_tname")} Dashboard
      </h1>
      <h1>Course List</h1>
      <table border="5">
        <tr>
          <th>Course Name</th>
          <th>Description</th>
          <th></th>
        </tr>
        {tcourses.map((t) => {
          return (
            <tr>
              <td>{t.name}</td>
              <td>{t.description}</td>
              <td>
                <div>
                  <Link to={`/showstudent`}>
                    <div>
                      <button
                        style={{
                          padding: "10px 25px",
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#E59D23",
                          color: "#06283D",
                          fontSize: "12pt",
                        }}
                      >
                        View
                      </button>
                    </div>
                  </Link>
                </div>
              </td>
              {/* <td>
                      <button type="button-green">
                        <Go url={`/updateCourse/${t.student_id}`} title="Edit"></Go>
                      </button>
                    </td> */}
            </tr>
          );
        })}
      </table>
      </center>
    </div>
  );
}
