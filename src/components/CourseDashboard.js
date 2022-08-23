import React from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import AxiosConfig from "../components/AxiosConfig";
import AboutCourse from "./student/AboutCourse";
import Courseinfo from "./student/Courseinfo";
import { useNavigate } from "react-router-dom";
export default function CourseDashboard(props) {
    const {csid,enrid}=useParams();
    const [crsinfo,setCrsinfo]=useState({})
    const [validrsp,setValidrsp]=useState(false)
    const [csname,setCsname]=useState("")
    const [duration,setDuration]=useState("")
    const [tname,setTname]=useState("")
    const [category,setCategory]=useState("")
    const [desc,setDescription]=useState("")
    const nav = useNavigate();
    console.log(csid);
    console.log(enrid);
    useEffect(()=>{
        const csrsinfo='/course/info'.concat('/').concat(csid.valueOf())
        AxiosConfig.get(csrsinfo)
            .then((rsp)=>{
                if(rsp.status==200){
                    setCrsinfo(rsp.data[0])
                    console.log(rsp.data[0])
                    setValidrsp(true)
                    setCsname(rsp.data[0].name)
                    setDuration(rsp.data[0].duration)
                    setTname(rsp.data[0].teacher.name)
                    setCategory(rsp.data[0].category)
                    setDescription(rsp.data[0].description)
                    var csid=rsp.data[0].course_id

                }
                else{
                    setValidrsp(false)
                }

            },(err)=>{

            })
    },[]);
    const dropcourse=()=>{
      const csrsdrop='/drop/course'.concat('/').concat(enrid.valueOf())
        AxiosConfig.delete(csrsdrop)
            .then((rsp)=>{
                if(rsp.status==200){
                  console.log(rsp)
                  nav("/student/dashboard");
                }
                else{
                    // setValidrsp(false)
                }

            },(err)=>{

            })

    }
  return (
    <div style={{ marginTop: "40px",minHeight:"600px",padding:"10px 0px" }}>
        {/* (validrsp ? <Courseinfo data={crsinfo}/>:<div>Course data cannot be laod</div>) */}
        <div
        style={{
          border: "none",
          width: "100%",
          padding:"10px, 0px",
          minHeight: "300px",
          background: "rgb(131,58,180)",
          backgroundImage: "linear-gradient(90deg, #30cfd0 0%, #330867 100%)"
        }}
      >
        {console.log(crsinfo)}
        <div style={{ padding: "40px",color:"white" }}>
          <h2>{csname}</h2>
          <p>Offered By: {tname}</p>
          <p>Category: {category}</p>
          <p>Duration: {duration}</p>
          {console.log(crsinfo.name)}
          <span
            style={{
              float: "right",
            }}
          >
            <button onClick={dropcourse}
              style={{
                padding: "10px 35px",
                outline: "none",
                backgroundColor: "red",
                borderRadius: "5px",
                color: "black",
                fontWeight:"bold"
              }}
            >
              Drop
            </button>
          </span>
        </div>
      </div>
      <div style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      }}>
      <div
        style={{
          marginTop: "0px",
          width: "100%",
          padding: "0px, 0px",
          marginLeft:"30px",
          // backgroundColor:"#9EADBD"
        }}
      >
        <button
          style={{
            padding: "5px, 15px",
            color: "black",
            // backgroundColor: "#1363df",
            outline: "none",
            border:"none"
          }}
        >
          About
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "black",
            // backgroundColor: "#1363df",
            marginLeft: "5px",
            border:"none"
          }}
        >
          Discussion
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "black",
            // backgroundColor: "#1363df",
            marginLeft: "5px",
            border:"none"
          }}
        >
          About your teacher
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "black",
            // backgroundColor: "#1363df",
            marginLeft: "5px",
            border:"none"
          }}
        >
          Student List
        </button>
      </div>
      </div>

      <div>
        <AboutCourse desc={desc}></AboutCourse>
      </div>
    </div>
  );
}
