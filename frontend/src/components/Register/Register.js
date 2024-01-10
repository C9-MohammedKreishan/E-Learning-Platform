import React, { useState, useContext } from "react";
import axios from "axios"


export default function () {
  const [userLastName, setUserFirstName] = useState("");
  const [userFirstName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [result, setUserResult] = useState("")
  
  return (                     
    <div> 
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setUserFirstName (e.target.value);
        }}
      />
      <br/>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setUserLastName  (e.target.value)
        }}
      />
      <br/>
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setUserAge  (e.target.value)
        }}
      />
      <br/>
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => {
          setUserCountry (e.target.value)
        }}
      />
      <br/>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setUserEmail  (e.target.value)
        }}
      />
      <br/>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setUserPassword ( e.target.value);
        }}
      />
      <br/>
      <p>{result}</p>
      <br/>

      <button id="Register_btn" onClick={()=>{axios.post("http://localhost:5000/users/register",{firstName:userFirstName ,lastName:userLastName,email:userEmail,password:userPassword,age:userAge,country:userCountry})
    .then((res)=>{
      console.log(res.data.message)
      setUserResult (res.data.message)
    })
    .catch(err=> setUserResult (err.response.data.message))}}>Register</button>
    </div>
  );
}
