const user = require("../models/userModel.js")
async function showAll(req,res)
{
    try{
    // console.log("request for showing all users recieved at the server")
    const page = req.query.page;
    // console.log(page)
    const skip = (page-1)*10
        // console.log(skip)
        const totalobj = await user.aggregate([
            {
                $count: "total_users"
            }
        ])
        const max_pages = Math.ceil(parseInt(totalobj[0].total_users)/10);
        // console.log(max_pages)

    const users = await user.find()
    .skip(skip)
    .limit(10)
    res.json({
        success: true,
        message: "showed all users",
        users: users,   
        maxpages: max_pages
    })}
    catch{
        res.json({
            success:false,
            message: "an error occured"
        })
    }
}
module.exports = showAll