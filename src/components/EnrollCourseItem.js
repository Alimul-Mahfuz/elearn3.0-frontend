import React from 'react'

export default function EnrollCourseItem(props) {
  return (
    <div>
            <div style={{
                border:"2px solid black",
                margin:"15px",
                minWidth:"300px",
                minHeight:"100px",
                padding:"5px",
                maxWidth:"300px",
                minWidth:"300px",
                minHeight:"200px",
            }}>
                <h4>{props.name}</h4>
                <p>{props.duration}</p>
                <p>Offered by...{props.tname}</p>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                }}>
                    <div><button style={
                        {
                            padding:"2px 15px 2px 15px",
                            borderRadius:"10px",
                            border:"none",
                            backgroundColor:"#64B6AC"
        
                        }
                    }>View</button></div>
                </div>
            </div>
        </div>
  )
}
