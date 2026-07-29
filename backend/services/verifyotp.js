const admins = require("../models/adminModel.js")
const jwt = require("jsonwebtoken");
const key = process.env.JWT_SECRET;

async function verifyotp(req,res)
{
    const fetched = req.query.otp
    const user = req.query.user
    // console.log("verifying your OTP , recieved: ",fetched," for ",user)
    const admin = await admins.findOne({
        username: user
    })
    if(!admin)
    {
        return res.json({
            success:false,
            message: "Admin user not found , contact support team"
        })
    }
    const otp = admin.Otp;
    if(otp === fetched)
    {
        const token = jwt.sign(
            {
                user: user
            },
            key,
            {
                expiresIn: "1d"
            }
        )
        // console.log(token)
        res.cookie("user",token,{
            httpOnly: true//cookies cant be accessed/edited by browsers
        })
        return res.json({
            success:true,
            message:'Otp verified successfully'
        })
    }
    return res.json({
        success:false,
        message: "Otp doesnt match , try logging in again"
    })
    // console.log(otp)
}
module.exports = verifyotp