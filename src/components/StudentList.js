import React from "react";
import { useState, useEffect } from "react";
import AxiosConfig from "./AxiosConfig";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/applystyles.css";
import TeacherNavbar from "./TeacherNavbar";

const StudentList = () => {
  const nav = useNavigate();
  const { csdd } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    let tid = localStorage.getItem("_tid");
    var csid = csdd.valueOf();
    AxiosConfig.get(`/course/student/list/${csid}`).then(
      (rsp) => {
        // console.log(rsp.data);
        setStudent(rsp.data);
      },
      (er) => {}
    );
  }, []);
  return (
    <div>
      <TeacherNavbar/>
      <br />
      <br />
      <br />
      <center>
        <h1>Student List</h1>
        <table border="5">
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          {student.map((t) => {
            return (
              <tr key={t.student_id}>
                <td>{t.name}</td>
                <td>{t.email}</td>
                <td>{t.phone}</td>
                <td>{t.address}</td>
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
};

export default StudentList;
