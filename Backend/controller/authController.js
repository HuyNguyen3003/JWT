const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const authController = {

    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)


            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            })


            //save to db
            const user = await newUser.save();
            res.status(200).json(user)

        } catch (e) {
            res.status(500).json(e)
        }

    },
    // 
    loginUser: async (req, res) => {
        try {

            const user = await User.findOne({
                username: req.body.username
            });
            if (!user) {
                return res.status(404).json("Wrong username")
            }

            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (!passwordMatch) {
                return res.status(404).json("Wrong password")
            }
            if (user && passwordMatch) {
                const accessToken = jwt.sign({
                    id: user.id,
                    admin: user.admin
                },
                    process.env.JWT_ACCESS_KEY,
                    { expiresIn: "1d" }
                )
                const { password, ...others } = user._doc
                res.status(200).json({ ...others, accessToken })

            }

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }

    },
    LogoutUser: async (req, res) => {
        try {



        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}


module.exports = authController