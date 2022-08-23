import React from "react";
import { Link } from "react-router-dom";
export default function EnrollCourseItem(props) {
  return (
    <div>
      <div
        style={{
          // border: "2px solid black",
          margin: "15px",
          minWidth: "300px",
          minHeight: "100px",
          padding: "15px",
          maxWidth: "300px",
          minWidth: "350px",
          minHeight: "150px",
          borderRadius:"10px",
          background: "linear-gradient(120deg, #007F81 50%, #06283D 100%)"
        }}
      >
        <div style={{minHeight:"150px", color:"white"}}>
        <h4>{props.name}</h4>
        <p>{props.duration}</p>
        <p style={{fontWeight:"bold",color:"gold"}}>#00{props.enid}</p>
        <p style={{textTransform: "uppercase"}}>{props.tname}</p>
        {/* <p>Courseid..{props.csid}</p> */}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
          <Link to={`/course/dashboard/${props.enid}/${props.csid}`}>
          <div><button style={
                        {
                            padding:"10px 25px",
                            borderRadius:"5px",
                            border:"none",
                            backgroundColor:"#E59D23",
                            color:"#06283D",
                            fontSize:"12pt",
                            
        
                        }
                    }>View</button></div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
