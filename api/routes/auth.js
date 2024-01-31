const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const createError = require("../utils/error");



router.post("/register", async(req,res,next) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
});

//LOGIN
router.post("/login", async(req,res,next) =>{
    try{
        //user validation
    const user = await User.findOne({ username: req.body.username });
    if(!user) return next(createError(404, "User not found"));

    //password validation
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"));

    const {password, isAdmin, ...otherDetails} = user._doc;
    res.status(200).json({...otherDetails});
    }catch(err){
        next(err);
    }
    
})



module.exports = router;