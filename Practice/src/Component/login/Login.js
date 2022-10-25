import React from "react";
import "./login.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Axios from 'axios'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Login() {
  const [phoneNumber, setNumber] = useState(91);
  const [valid ,setValid]=useState(false)
  console.log(phoneNumber)
  function submit(){
    Axios.post("http://localhost:8080/post",{phoneNumber})
  }
//   console.log(event.target.phoneNumber);
  return (
    <div className="login_box">
      <h3>Login</h3>
      <p>Please login to view your profile</p>
      <input
      name="number"
        classname="phone"
        type="number"
        value={phoneNumber}
        // phoneNumber={phonNumber}
        onChange={(event) => {
            if (event.target.value.length!=12) {
                console.log("please enter correect nunber");
                setValid(false)
          
              } else {
                console.log(phoneNumber.length);
                setValid(true)
              }
            
          setNumber(event.target.value);
        }}
      
      />

{valid?

      <form action="../post" method="post" className="form">
        <NavLink to="/create">Don't have an account </NavLink>
        <button type="submit" onClick={submit}>
          click
        </button>
      </form>
            : 
            <form className="form">
            <NavLink to="/create">Don't have an account </NavLink>
            <button > click </button></form>
}
    </div>
  );
}

export default Login;
