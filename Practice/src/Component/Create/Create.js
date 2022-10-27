import React from "react";
import PhoneInput from "react-phone-input-2";
import { NavLink } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Axios from "axios";
import "./create.css";
import { useState } from "react";
function Create() {
  const [phoneNumber, setNumber] = useState(91);
  const [valid, setValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function submit() {
    Axios.post("http://localhost:8080/create", {phoneNumber,name,email,});
    // {phoneNumber,name,email,}
  }

  return (
    <div className="create ">
      <h4>Create an account </h4>
      <input
        value={name}
        style={{ display: "block" }}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Name"
      />
      <input
        value={email}
        style={{ display: "block" }}
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="Email Id"
      />
      <input
        classname="phone"
        type="number"
        value={phoneNumber}
        // phoneNumber={phonNumber}
        onChange={(event) => {
          if (event.target.value.length != 12) {
            console.log("please enter correect nunber");
            setValid(false);
          } else {
            console.log(phoneNumber.length);
            setValid(true);
          }

          setNumber(event.target.value);
        }}
      />

      {valid ? (
        <form action="../create" method="post">
          <button type="submit" onClick={submit}>
            {" "}
            Sign Up{" "}
          </button>
        </form>
      ) : (
        <button> Sign Up </button>
      )}
      <NavLink to="/">Back to login</NavLink>
    </div>
  );
}

export default Create;
