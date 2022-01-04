const router = require("express").Router();
const userController = require ("../controllers/userController");


// Matches with "/api/expenses"

router
.route("/")
// .get(userController.findAll)
.post(userController.create);


// // Matches with "/api/expenses/:id"
// router
// .route("/:id")
// .get(userController.findById)
// .put(userController.update)
// .delete(userController.remove);

// // Matches with "/api/expenses/user/:id"
// router
// .route("/user/:id")
// .get(userController.findByUserId);

module.exports = router