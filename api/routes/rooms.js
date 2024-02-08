const router = require("express").Router();
const Room = require("../models/Room");
const createError  = require("../utils/error");
const { verifyToken, verifyUser, verifyIsAdmin } = require("../utils/verifyToken");


//CREATE ROOM
router.post("/", verifyIsAdmin, async(req, res, next) =>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Room.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id },
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
});

//UPDATE ROOM
router.put("/:id", verifyIsAdmin, async(req, res, next) =>{
    try {
        const updatedroom = await Room.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedroom);
    } catch (err) {
        next(err);
    }
});

//DELETE ROOM
router.delete("/:id", verifyIsAdmin, async(req, res) =>{
    try {
        const deletedroom = await Room.findByIdAndDelete(req.params.id);
        res.status(200).json('room has been deleted');
    } catch (err) {
        next(err);
    }
});

//GET 'A' ROOM
router.get("/:id", async(req, res) =>{
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
});

//GET ALL ROOMS
router.get("/", async(req, res, next) =>{

    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
});




module.exports = router;