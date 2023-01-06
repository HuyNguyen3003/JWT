const router = require("express").Router()
const authController = require("../controller/authController")
const middlewareController = require("../controller/middlewareController")



router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.post("/logout", middlewareController.checkToken, authController.LogoutUser)





module.exports = router;
