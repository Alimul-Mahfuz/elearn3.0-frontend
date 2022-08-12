import React from 'react'
import AxiosConfig from "../components/AxiosConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function StudentPayment() {
    const inputstyle={
        width:"400px",

    };
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [cardno,setCardno]=useState("");
    const [cvc,setCvc]=useState("");
    const nav = useNavigate();
    const paymenthandeler=(e)=>{
        e.preventDefault()
        var data = { cardno: cardno, cvc: cvc }
        AxiosConfig.post('/student/enroll/payment/{sid}/{csid}', data).then(
            (rsp) => {
              if (rsp.data.id != 0 && rsp.data.type==3) {
                nav("/student/dashboard");
              }
              if (rsp.status == 403) {
                nav("/");
              }
            },
            (er) => {
              if (er.response.status == 422) {
                //for data validation
                // setErr(er.response.data);
    
              } else {
                // setMsg("Server Error Occured");
                // <Error msg={msg}/>
                // console.log(msg);
              }
            }
          );
    }
  return (
    <div style={{
        display:"flex",
        marginTop:"80px",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"300px",
        padding:"20px"
    }}>
        <h3 style={{
            align:"center"
        }}>We Accept</h3>
        <img style={{
            display:"block",
            marginTop:"20px",
            width:"20%",
            alignSelf:"center"
        }} src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png" alt="payment" />
        <form style={{
            padding:"15px",
            width:"400px",
            alignSelf:"center"

        }} action="" onSubmit={paymenthandeler} method="post">
            <div>
            <label style={{align:"center"}} htmlFor="">Card No</label><br />
            <input onChange={(e) => setCardno(e.target.value)}
              value={cardno} style={inputstyle} type="text" placeholder='XXX-XXX'/>
            <br />
            <label style={{align:"center"}} htmlFor="">CVC</label><br />
            <input onChange={(e) => setCvc(e.target.value)}
              value={cvc} style={inputstyle} type="text" placeholder=''/>
            <br />
            {/* <input type="text" /> */}
            <button style={{
                marginTop:"10px",
                padding:"7px",
                width:"400px",
                backgroundColor:"#06283d",
                color:"#dff6ff"

            }} type='submit'>Confirm Payment</button>
            </div>
        </form>
    </div>
  )
}
