require('dotenv').config()

const express = require("express");
const app = express();
const bodyparser=require('body-parser')

const cors=require("cors")
const path=require("path")
const cookieParser=require("cookie-parser")
const crypto=require('crypto')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}));
const accountSid=process.env.ACCOUNT_SID
const authToken=process.env.AUTH_TOKEN
// const smskey=process.env.SMS_SECRET_KEY

let twilioNum=process.env.TWILIO_PHONE_NUMBER

const client=require('twilio')(accountSid,authToken)
app.post("/post",(req,res)=>{
    console.log("working")
    console.log(req.body.phoneNumber)
    const  phone =req.body.phoneNumber;
    console.log(phone)
    // const num="+919045707930"
    console.log("connected")
    const otp=Math.floor(10000+Math.random()*90000);
    res.redirect("./Comp1")
    client.messages
.create({body: otp, from: '+14246227474', to: `+${phone}`})
.then(message =>{ 
   });
})
app.post("/otp",(req,res)=>{
    console.log("Got otp")
})
app.post("/create",())
// app.post("/post",(req,res)=>{
//     console.log(req.body.phoneNumber)
//     // res.send("hello world !")
    
// //  res.redirect(307,"http://localhost:3000")
//  return
// })
app.post("/phonenumber",(req,res)=>{
    const number=req.body.phnumber
    if(number.length!=10)
    {
        console.log("invalid number")
         return res.redirect("http://localhost:8080/")

    }
    else{
         return res.redirect(307,"http://localhost:8080/sendOTP")
    }
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));