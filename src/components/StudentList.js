import React from 'react'
import {useState,useEffect} from 'react';
import AxiosConfig from './AxiosConfig';
import {Link} from 'react-router-dom';
import "../assets/css/applystyles.css";

const StudentList = () => {
    const[student,setStudent] = useState([]);
    useEffect(()=>{
        AxiosConfig.get("/showstudent").then((rsp)=>{
        setStudent(rsp.data);
        },(er)=>{

        })

    },[]);
  return (
<div>
  <br/>
  <br/><br/>
  <h1>Teacher List</h1>
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
    </div>
  )
}

export default StudentList