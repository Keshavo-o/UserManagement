require("dotenv").config();
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const handlecheck = require("./services/handlecheck.js")
const handlelogin = require("./services/handlelogin.js")
const handlelogout = require("./services/handlelogout.js")
const verifyotp = require("./services/verifyotp.js")
const userRoutes = require("./routes/userRoute.js")
const app = express()



app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res) =>{
    res.send("hii from backend");
});

// app.get("/api",authentication,(req,res)=>{
//     console.log("request recieved from server")
//     res.json({
//         "success": true
//     })
// });

app.get("/api/check",handlecheck)
app.post("/api/login",handlelogin)
app.get("/api/logout",handlelogout)
app.get("/api/otp",verifyotp)



app.use("/api/user",userRoutes)//as userRoutes is an Express router

mongoose.connect("mongodb://localhost:27017/UserManager")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("error occured: ",err))

app.listen(3000,()=>{
    console.log("server started at 3000 port number")
});