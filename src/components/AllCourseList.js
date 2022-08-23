//View all the courses available in this platform
import React from "react";
import { useState, useEffect } from "react";
import AxiosConfig from "../components/AxiosConfig";
import CourseItem from "./CourseItem";
export default function AllCourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    AxiosConfig.get("/course/all/").then(
      (rsp) => {
        setCourses(rsp.data);
        console.log(courses);
      },
      (err) => {}
    );
  }, []);
  return (
    <div style={{ padding: "20px" }}>
        
      <h5
        style={{
          marginTop: "50px",
          marginLeft: "40px",
          paddingTop: "15px",
        }}
      >
        Currently Offering
      </h5>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "25px",
          // backgroundColor:"purple"
        }}
      >
        {courses.map((st) => (
          <CourseItem
            name={st.name}
            category={st.category}
            // tname={st.tname}
            price={st.price}
            crsid={st.course_id}
          />
        ))}
      </div>
    </div>
  );
}
