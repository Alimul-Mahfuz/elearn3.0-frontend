import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Weather() {
    const [currweather,setCurrweather]=useState("")
    const [cond,setCond]=useState("")
    const [feelsLike,setFeelslike]=useState("")
    axios.get("http://api.weatherstack.com/current?access_key=809213868359583d4879cc7324d96797&query=Dhaka").then(
        (rsp) => {
            console.log(rsp)
            setCurrweather(rsp.data.current.temperature)
            setCond(rsp.data.current.weather_descriptions[0])
            setFeelslike(rsp.data.current.feelslike)
        },
        (er) => {

        }
      );
  return (
    <div>
        {/* <p>Current Tempareture: {currweather} &deg; C</p>
        <p>{cond}</p>
        <p>Feels Like:{feelsLike}</p> */}
    </div>
  )
}
