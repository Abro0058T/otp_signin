import React from 'react'
import Navbar from './Create/Navbar'
import { NavLink } from 'react-router-dom'
export default function Comp1() {
  return (
    <div className='create '>
        <h4>Enter the OTP to sign in  </h4>
        <input style={{display:"block"}}type="number" name='otp' placeholder='OTP'/>
        {/* <input style={{display:"block"}}type="text" placeholder='Email Id'/> */}
   

<form action="../otp" method='post' >
<button  type='submit'> Sign Up </button>
</form>

<NavLink to="/">Back to login</NavLink>
    </div>
  )
}
