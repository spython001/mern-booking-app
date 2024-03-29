const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { verifyToken, verifyUser, verifyIsAdmin } = require("../utils/verifyToken");



/*//token
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user, you are logged in")
});

//user
router.get("/checkuser/:id", verifyUser, (req,res,next) => {
    res.send("hello user, you are logged in and can delete your account")
})

//admin
router.get("/checkadmin/:id", verifyIsAdmin, (req,res,next) => {
    res.send("hello admin, you are logged in and can delete all accounts")
})*/


//UPDATE USER
router.put("/:id", verifyUser, async (req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });

            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }else { 
        res.status(403).json("You can only update your account");
    }
});
//DELETE USER
router.delete("/:id", verifyUser, async(req,res,next) => {
    try{
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json('User has been deleted')
    }catch(err){
        next(err);
    }
});

//GET 'A' USER
router.get("/:id", verifyUser, async(req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

//GET ALL userS
router.get("/", verifyIsAdmin, async(req, res, next) =>{

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});



module.exports = router;