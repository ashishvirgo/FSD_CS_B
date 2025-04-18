const express=require("express");
const usercontroller=require('../controller/userController');
const router=express.Router();
router.get("/users",usercontroller.getAllUsers);
router.get("/user/:email",usercontroller.getUser);
router.post("/adduser",usercontroller.createUser);
router.put("/edituser/:email",usercontroller.editUser);
router.delete("/deleteuser",usercontroller.deleteUser);

module.exports=router;