import React from 'react'
import EnrolledCourseList from "./EnrolledCourseList";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import AxiosConfig from "../components/AxiosConfig";
// import Weather from './student/Weather';
export default function StudentDashboard(props) {
    const [courses,setCourses] = useState([]);
    const [username,setUserName] = useState("")
    useEffect(()=>{
        let stdid=localStorage.getItem('_stdid');
        AxiosConfig.get(`/student/enroll/list/${stdid}`)
            .then((rsp)=>{
                setCourses(rsp.data);
                // console.log(rsp);
            },(err)=>{

            })
    },[]);
  return (
    <div style={{
      marginTop:"100px",
      minHeight:"700px"
    }}>
      <div style={{
        paddingBottom:"20px",
        marginLeft:"60px",
        fontSize:"14pt",
        fontStyle:"bold",
        fontWeight:"bold"
      }}>Welcome, {localStorage.getItem('_stdname')}</div>
      {/* <Weather></Weather> */}
      <EnrolledCourseList data={courses}></EnrolledCourseList>
    </div>
  )
}
