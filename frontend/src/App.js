import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useContext, createContext } from "react";
import Navbar from "./components/Navbar/index";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddCourse from "./components/Courses/Courses";
import Allcourses from "./components/Allcourses/Allcourses";
export const userContext = createContext();

function App() {
  const [toggle, setToggle] = useState(true);

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  return (
    <userContext.Provider value={{ toggle, setToggle, token, setToken }}>
      <div className="App">
        <h1>E Learning</h1>
        <Navbar />
        <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/dashboard" element={<Dashboard />} />
          <Route path="/users/allcourses" element={<Allcourses />} />
          <Route path="/a" element={<AddCourse />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
