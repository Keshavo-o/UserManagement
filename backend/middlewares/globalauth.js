function authentication(req,res,next)
{
    // console.log(req);
    // console.log("hii from auth/backend")
    // const random = Math.floor(Math.random() * 10) + 1;
    // console.log(random)
    // if(random%2 == 0)
    //     return res.json({success:false})
    next();
}

module.exports = authentication;