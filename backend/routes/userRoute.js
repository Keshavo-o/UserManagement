const express = require("express");
const router = express.Router();
const addUser = require("../controllers/addUser.js")
const showAll = require("../controllers/showAllUsers.js")

// Routes
router.get("/",showAll)
router.post("/add",addUser)

module.exports = router;