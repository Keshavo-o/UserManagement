const express = require("express");
const router = express.Router();
const addUser = require("../controllers/addUser.js")
const showAll = require("../controllers/showAllUsers.js")
const deleteUser = require("../controllers/deleteUser.js")
const getUser = require("../controllers/getUser.js")
const editUser = require("../controllers/editUser.js")

// Routes
router.get("/",showAll)
router.get("/singleuser",getUser)
router.post("/add",addUser)
router.get("/delete",deleteUser)
router.put("/edit",editUser)

module.exports = router;