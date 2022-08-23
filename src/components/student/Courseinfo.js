import React from "react";

export default function Courseinfo({ data }) {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          width: "100%",
          minHeight: "300px",
          background: "rgb(131,58,180)",
          background:
            "linear-gradient(144deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h2>{data.name}</h2>
          <p>Offered By: {data.teacher.name}</p>
          <p>Category: {data.description}</p>
          <p>Duration: {data.duration}</p>
          <span
            style={{
              float: "right",
            }}
          >
            <button
              style={{
                padding: "10px 25px",
                outline: "none",
                backgroundColor: "#a3328d",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Drop
            </button>
          </span>
        </div>
      </div>
      <div
        style={{
          minHeight: "100px",
          marginTop: "10px",
          width: "100%",
          padding: "5px, 0px",
        }}
      >
        <button
          style={{
            padding: "5px, 15px",
            color: "whitesmoke",
            backgroundColor: "#1363df",
            outline: "none",
          }}
        >
          About
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "whitesmoke",
            backgroundColor: "#1363df",
            marginLeft: "5px",
          }}
        >
          Discussion
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "whitesmoke",
            backgroundColor: "#1363df",
            marginLeft: "5px",
          }}
        >
          About your teacher
        </button>
        <button
          style={{
            padding: "5px, 15px",
            color: "whitesmoke",
            backgroundColor: "#1363df",
            marginLeft: "5px",
          }}
        >
          Student List
        </button>
      </div>
    </div>
  );
}
