const express = require("express");
const router = express.Router();

// Routes
router.get("/",(req,res)=>{
    console.log("hii")
    res.json({
        success: true
    })
})

module.exports = router;