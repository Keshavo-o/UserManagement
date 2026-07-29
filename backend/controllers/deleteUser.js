const user = require("../models/userModel.js")
async function deleteUser(req,res)
{
    try{
    const _id = req.query._id;
    // console.log("deleting user with id: ",_id)
    await user.findByIdAndDelete(_id)
    res.json({
        success:true,
        message:"user deleted succesflly"
    })
    }
    catch{
        res.json({
            success:false,
            message: "couldnt delete the user"
        })
    }

}
module.exports = deleteUser