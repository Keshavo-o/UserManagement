const jwt = require("jsonwebtoken");
const key = process.env.JWT_SECRET;

function handleCheck(req, res) {
    const token = req.cookies.user;

    if (!token) {
        return res.json({
            success: false,
            message: "Please login first"
        });
    }

    try {
        const decoded = jwt.verify(token, key);
        //does not return false if the token is invalid. It throws an exception (JsonWebTokenError or TokenExpiredError).

        return res.json({
            success: true,
            user: decoded // optional
        });

    } catch (err) {
        return res.json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}

module.exports = handleCheck;