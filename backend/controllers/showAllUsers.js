const user = require("../models/userModel.js")
async function showAll(req,res)
{
    try{
    // console.log("request for showing all users recieved at the server")
    const users = await user.find()
    res.send({
        success: true,
        message: "showed all users",
        users: users
    })}
    catch{

    }
}
module.exports = showAll