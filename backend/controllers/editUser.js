const users = require("../models/userModel.js");

async function editUser(req, res) {
    try {
        const _id = req.query.id;

        console.log("Inside edit function:", _id);

        const user = req.body;
        console.log(user);

        const updatedUser = await users.findByIdAndUpdate(
            _id,
            {
                username: user.username,
                email: user.email,
                age: user.age,
                role: user.role,
            },
            {
                new: true,           // Return the updated document
                runValidators: true, // Run schema validations
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = editUser;