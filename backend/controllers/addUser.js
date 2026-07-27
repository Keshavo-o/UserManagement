const user = require("../models/userModel.js")
async function AddUser(req,res)
{
    try{
        const{ username,email,age,role } = req.body;
        if(username == "" || email=="" || age=="" || role=="")
        {
           return res.json({
                success:false,
                message:"Fields cant be empty"
            })
        }
    // console.log("add user request recieved at server",req.body)
    const newUser = new user(req.body)
    await newUser.save();
    res.json({
        success: true,
        message: "successfully added user"
    })
}
catch{
    console.error(error);

    res.json({
        success: false,
        message: "Failed to add user",
    });
}
}
module.exports = AddUser