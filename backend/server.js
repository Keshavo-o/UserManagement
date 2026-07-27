const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const handlecheck = require("./services/handlecheck.js")
const handlelogin = require("./services/handlelogin.js")
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

app.use("/api/user",userRoutes)//as userRoutes is an Express router


app.listen(3000,()=>{
    console.log("server started at 3000 port number")
});