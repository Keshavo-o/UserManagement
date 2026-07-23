const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",((req,res) =>{
    res.send("hii from backend");
});

app.listen(3000,()=>{
    console.log("server started at 3000 port number")
});