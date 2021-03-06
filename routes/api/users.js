const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
      .post(userController.createUser)
      // .get(userController.updateUserByEmail);

router.route("/:email")
      .get(userController.findUserByEmail)

router.route("/submitLogin")
      .post(userController.login)


module.exports = router;
