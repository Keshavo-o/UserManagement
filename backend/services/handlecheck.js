function handleCheck(req,res)
{
    const user = req.cookies.user;
    // console.log(user)
    if(user == "Keshav")
    {
        // console.log("yes")
        return res.json({
            success : true
        })
    }
    else{
        return res.json({
            success: false,
            message: "Please login first"
        })
    }
}
module.exports = handleCheck