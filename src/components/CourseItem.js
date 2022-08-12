import React from "react";
import { Link } from "react-router-dom";
export default function CourseItem(props) {
    let stdid=localStorage.getItem("_stdid")
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          margin: "15px",
          padding: "5px",
          maxWidth: "300px",
          minWidth: "300px",
          minHeight: "200px",
        }}
      >
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>Offered by...</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{props.price}</p>
          <div>
            <Link to={`/student/payment/${stdid}/${props.crsid}`}>
            <button
              style={{
                padding: "2px 15px 2px 15px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#64B6AC",
              }}
            >
              Enroll
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
