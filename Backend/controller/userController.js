const User = require("../models/user")


const userController = {

    getAllUser: async (req, res) => {
        try {

            const user = await User.find();
            res.status(200).json(user)

        } catch (e) {
            res.status(500).json(e)
        }
    },
    deleterUser: async (req, res) => {
        try {

            const user = await User.findById(req.params.id);
            res.status(200).json("delete successfully")

        } catch (e) {
            res.status(500).json(e)
        }
    }



}


module.exports = userController