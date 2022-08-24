import React from 'react'
import {useState,useEffect} from 'react';
import AxiosConfig from './AxiosConfig';
import {Link} from 'react-router-dom';
import "../assets/css/applystyles.css";

const TstudentList = () => {
    const[teacher,setTeacher] = useState([]);
    useEffect(()=>{
        AxiosConfig.get("/showteacher").then((rsp)=>{
        setTeacher(rsp.data);
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
          <th>Teacher Id</th>
          <th>Teacher Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>DOB</th>
          {/* <th>Gender</th> */}
          <th>Address</th>
        </tr>
        {teacher.map((t) => {
          return (
            <tr key={t.t_id}>
              <td>{t.t_id}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.phone}</td>
              <td>{t.dob}</td>
              {/* <td>{t.gender}</td> */}
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

export default TstudentList