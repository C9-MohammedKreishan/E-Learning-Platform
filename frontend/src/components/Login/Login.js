import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
export default function () {
  const { setToggle } = useContext(userContext);
  const { setToken } = useContext(userContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [result, setUserResult] = useState("");
  const redirect = useNavigate();
  return (
    <div>
      <p>Please Login</p>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <br />

      <button
        id="Login_btn"
        onClick={() => {
          axios
            .post("http://localhost:5000/users/login", {
              email: userEmail,
              password: userPassword,
            })
            .then((res) => {
              setUserResult(res.data.message);
              setToggle(false);
              setToken(res.data.token);
              localStorage.setItem("token", res.data.token);

              console.log(res.data.token);
              redirect("/users/dashboard");

            
            })
            .catch((err) => {
              console.log(err);
              setUserResult(err.response.data.message);
            });
        }}
      >
        Login
      </button>
      <br />
      <p>{result}</p>
    </div>
  );
}
