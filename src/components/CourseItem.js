import React from "react";
import { Link } from "react-router-dom";
export default function CourseItem(props) {
    let stdid=localStorage.getItem("_stdid")
  return (
    <div style={{minHeight:"200px"}}>
      <div
        style={{
          // border: "2px solid black",
          margin: "15px",
          padding: "5px",
          maxWidth: "300px",
          minWidth: "300px",
          // minHeight: "200px",
          // backgroundImage: "linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)"
          backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)"
        }}
      >
        <div style={{height:"200px", minWidth:"200px",padding:"10px", color:"white"}}>
        <h4>{props.name}</h4>
        <p>{props.category}</p>
        {/* <p>Offered by: {props.tname}</p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{props.price}</p>
        </div>

          <div style={{float:"right"}}>
            <Link to={`/student/payment/${stdid}/${props.crsid}`}>
            <button
              style={{
                padding: "8px 25px",
                borderRadius: "5px",
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
