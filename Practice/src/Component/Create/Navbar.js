import React from 'react'
import { NavLink } from "react-router-dom";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
hello
<ul>
          <li>
            {" "}
            <NavLink to="/">  Home</NavLink>
          </li>
        
          <li>
            <NavLink to="/analytics"> Analytics</NavLink>
          </li>
          <li>  <NavLink to="/comp1" >Comp1</NavLink> </li>
          <li>  <NavLink to="/comp2" >Comp2</NavLink> </li>
        </ul>

    </div>
  )
}
