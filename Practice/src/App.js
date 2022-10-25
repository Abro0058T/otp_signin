import logo from "./logo.svg";
import { NavLink } from "react-router-dom";
// import "./App.css";
import { Routes, Route, Link, Switch } from "react-router-dom";
import Login from "./Component/login/Login";
import Create from "./Component/Create/Create";
import Navbar  from "./Component/Create/Navbar";
import Comp1 from "./Component/Comp1";
import Comp2 from "./Component/Comp2";
import { useState } from "react";
// import Ananlytics from "./components/Ananlytics";

function App() {

  return (
    <>
    {/* <div className="page">
    <Sidebar />
    </div> */}
{/*  */}
{/* <Navbar/> */}


    <Routes>
      <Route path="/" element={<Login />}></Route>{" "}
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/comp1" element={<Comp1 />}></Route>
      <Route path="/comp2" element={<Comp2 />}></Route>
    </Routes>
    
    </>
  );
}

export default App;
