import React from "react";
import EnrollCourseItem from "./EnrollCourseItem";

export default function EnrolledCourseList(props) {
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
        {props.data.map((st) => (
          <EnrollCourseItem
            name={st.coursename}
            duration={st.description}
            tname={st.tname}
            enid={st.enrid}
            csid={st.csid}

          />
        ))}
      </div>
    </div>
  );
}
