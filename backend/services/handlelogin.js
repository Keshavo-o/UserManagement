const jwt = require("jsonwebtoken");
const admins = require("../models/adminModel"); // adjust path
const key = process.env.JWT_SECRET;
const nodemailer = require("nodemailer")




const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,        // your gmail address
        pass: process.env.EMAIL_PASS    // gmail app password
    }
});


async function sendOTP(email, otp) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Your OTP Verification Code",
            html: `
                <h2>OTP Verification</h2>
                <p>Your OTP is:</p>
                <h1>${otp}</h1>
                <p>This OTP will expire in 5 minutes.</p>
            `
        });

        console.log("Mail sent:", info.messageId);
        return true;

    } catch (error) {
        console.log("Mail error:", error);
        return false;
    }
}


async function handlelogin(req, res) {
    try {
        // console.log("hii");
        // console.log(req.body);

        const name = req.body.username;
        const pwd = req.body.password;

        const admin = await admins.findOne({
            username: name
        });

        if (!admin) {
            return res.json({
                success: false,
                message: "User doesn't exist"
            });
        }

        if (admin.password !== pwd) {
            return res.json({
                success: false,
                message: "Incorrect password"
            });
        }

        // console.log("success")
        // console.log(key)
        // const token = jwt.sign(
        //     {
        //         user: name
        //     },
        //     key,
        //     {
        //         expiresIn: "1d"
        //     }
        // )
        // console.log(token)
        // res.cookie("user",token,{
        //     httpOnly: true//cookies cant be accessed/edited by browsers
        // })

        const otp = Math.floor(100000 + Math.random() * 900000);
        console.log("Otp generated for Login: ", otp);

        // Save OTP in database
        admin.Otp = otp.toString();
        await admin.save();

        const Sabtheekhai = await sendOTP(admin.email,otp)
        if(!Sabtheekhai)
        {
            return res.json({
                success:false,
                message: "error sending otp , contact support"
            })
        }
        return res.json({
            success: true,
            message: "OTP generated successfully"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = handlelogin;