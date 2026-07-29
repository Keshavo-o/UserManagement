const users = require("../models/userModel.js")
async function getUser(req,res)
{
    const id = req.query.id;
    // console.log("fetching details of: ",id)
    const my_user = await users.findById(id)
    // console.log(my_user)
    res.json({
        success:true,
        user:my_user
    })
}
module.exports = getUser