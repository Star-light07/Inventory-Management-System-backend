const express  = require("express");
const { registerUser, loginUser, logOutUser, getUser, loginStatus, updateUser, changePassword, forgotpassword, resetPassword } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/logout", logOutUser);
router.get("/getuser",protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser",protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword",forgotpassword);
router.put("/resetpassword/:resetToken", resetPassword);


module.exports = router