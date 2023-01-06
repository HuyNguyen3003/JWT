const router = require("express").Router()
const userController = require("../controller/userController")
const middlewareController = require("../controller/middlewareController")






router.get("/", middlewareController.checkToken, userController.getAllUser)
router.delete("/:id", middlewareController.checkTokenAndadmin, userController.deleterUser)






module.exports = router;
