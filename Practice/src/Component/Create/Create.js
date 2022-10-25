import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { NavLink } from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import './create.css'
import {useState} from 'react'
function Create() {
  const [phoneNumber, setNumber] = useState(91);
  const [valid ,setValid]=useState(false)
  return (
    <div className='create '>
        <h4>Create an account </h4>
        <input style={{display:"block"}}type="text" placeholder='Name'/>
        <input style={{display:"block"}}type="text" placeholder='Email Id'/>
        <input
        classname="phone"
        type="number"
        value={phoneNumber}
        // phoneNumber={phonNumber}
        onChange={(event) => {
            if (event.target.value.length != 12) {
                console.log("please enter correect nunber");
                setValid(false)
          
              } else {
                console.log(phoneNumber.length);
                setValid(true)
              }
            
          setNumber(event.target.value);
        }}
      
      />
<div className='terms'>
    <input type="checkbox" />
    I agree Terms and conditions & privacy policy
</div>
{valid?
  <NavLink to="/comp1">

<button > Sign Up </button>
</NavLink>
:

<button > Sign Up </button>

}

<NavLink to="/">Back to login</NavLink>
    </div>
  )
}

export default Create