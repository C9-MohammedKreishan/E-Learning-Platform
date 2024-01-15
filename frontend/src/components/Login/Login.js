import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { userContext } from "../../App";

const Login = () => {
  
  const { setToggle, role ,setRole} = useContext(userContext);
  const { setToken } = useContext(userContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [result, setUserResult] = useState("");
  const redirect = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="w-50">
        <MDBContainer className="p-3 my-5 d-flex flex-column">
          Email address
          <MDBInput
            wrapperClass="mb-4"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          Password
          <MDBInput
            wrapperClass="mb-4"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn
            className="mb-4"
            onClick={() => {
              axios
                .post("http://localhost:5000/users/login", {
                  email: userEmail,
                  password: userPassword,
                })
                .then((res) => {
                  setUserResult(res.data.message);
                  console.log(res.data.role);
                  console.log(res.data.role.role);

                  setToggle(false);
                  setToken(res.data.token);
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("userId", res.data.userId);


                  console.log(res.data.token);

                  if (res.data.role.role === "INSTRUCTOR"){
                    
                    setRole(res.data.userId)
                    redirect("/users/admin")
                  }else{
                    redirect("/users/dashboard");

                  }
                })
                .catch((err) => {
                  console.log(err);
                  setUserResult(err.response.data.message);
                });
            }}
          >
            Sign in
          </MDBBtn>
          <div className="text-center">
            <p>
              Not a member? <a href="/users/register">Register</a>
            </p>
            <p>or sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </div>

      <div className="w-50">
        {/* Add your photo component or image here */}
        {/* For example, you can use the img tag */}
        <img style={{width:""}}
          src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=1380&t=st=1705161766~exp=1705162366~hmac=ee4e14d21a2da552af09ce697a781f1407895c88cd261a2af24467d472b5fd4c"
          alt="Your Photo"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Login;
