const express = require("express");

const {
  signupUser,
  loginUser,
  //   updateUser,
  allUser,
  //   singleUser,
  //   deleteUser,
  //   createUser,
} = require("../controllers/userController");

const requireAuth = require("../middlewares/requireAuth");

// express router
const router = express();

// signup user
router.post("/signup", signupUser);

// login user
router.post("/login", loginUser);

// all users
router.get("/users", requireAuth, allUser);

// single user
router.get("/user/:id", requireAuth, singleUser);

// create user
router.post("/createuser", requireAuth, createUser);

// update user
router.patch("/updatedUser/:id", requireAuth, updateUser);

// delete user
router.delete("/deleteUser/:id", requireAuth, deleteUser);

// export router
module.exports = router;
