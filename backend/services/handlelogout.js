function handlelogout(req,res)
{
    res.clearCookie("user")
    return res.json({
        success: true,
        message: "successfully logged out"
    })
}
module.exports = handlelogout