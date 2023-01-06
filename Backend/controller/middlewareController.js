const jwt = require("jsonwebtoken")



const middlewareController = {

    checkToken: async (req, res, next) => {
        try {

            const token = req.headers.token
            if (token) {
                const accessToken = token.split(" ")[1]
                jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                    if (err) {
                        return res.status(403).json("Token is not valid")
                    }
                    req.user = user
                    next()
                })
            } else {
                res.status(401).json(" You're not authenticated")
            }

        } catch (e) {
            res.status(500).json(e)
        }

    },
    checkTokenAndadmin: async (req, res, next) => {
        try {
            middlewareController.checkToken(req, res, () => {
                if (req.user.id == req.params.id || req.user.admin) {
                    next()
                } else {
                    res.status(403).json("You're not detete user other")
                }
            })


        } catch (e) {
            res.status(500).json(e)
        }

    }
}


module.exports = middlewareController