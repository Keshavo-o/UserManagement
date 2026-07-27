function handlelogin(req,res)
{
    // console.log("hii");
    // console.log(req.body);
    const name = req.body.username;
    const pwd = req.body.password;
    if(name == "Keshav" && pwd == "Keshav@123"){
        // console.log("success")
        res.cookie("user",name)
        return res.json({
        "success" : true
    })
}
    // console.log("failure")
    return res.json({
        "success" : false,
        "message": "Check user credentials and try again"
    })

}
module.exports = handlelogin;