import React from "react";
import TeacherCourse from "./TeacherCourse";

export default function Course(props) {
    return (
        <div style={{ padding: "20px" }}>
          <h5
            style={{
              marginTop: "10px",
              marginLeft: "40px",
              paddingTop: "15px",
            }}
          >
            Enrolled Courses
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "25px",
              // backgroundColor:"purple"
            }}
          >
            {props.data.map((t) => (
              <TeacherCourse
                tname={t.name}
                tduration={t.description}  
              />
            ))}
          </div>
        </div>
      );
    }
    