const jwt = require("jsonwebtoken");
const createError = require('./error');

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.JWT_PAS, (err, user)=>{
        if(err) return next(createError(403, "invalid token"));
        req.user = user;
        next()
    });
};

//user verification
const verifyUser = (req,res,next) => {
    verifyToken(req,res,next, ()=>{

        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            return next(createError(403, "You are not authorized"));
        }
    });
};

//isAdmin verification
const verifyIsAdmin = (req,res,next) => {
    verifyToken(req,res,next, ()=>{

        if(req.user.isAdmin){
            next();
        } else{
            return next(createError(403, "You are not authorized"));
        }
    });
};




module.exports = {
    verifyToken,
    verifyUser,
    verifyIsAdmin,
};
