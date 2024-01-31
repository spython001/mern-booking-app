const router = require("express").Router();
const Hotel = require("../models/Hotel");
const createError  = require("../utils/error");


//CREATE HOTEL
router.post("/", async(req, res, next) =>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
});

//UPDATE HOTEL
router.put("/:id", async(req, res, next) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
});

//DELETE HOTEL
router.delete("/:id", async(req, res) =>{
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel has been deleted');
    } catch (err) {
        next(err);
    }
});

//GET 'A' HOTEL
router.get("/:id", async(req, res) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
});

//GET ALL HOTELS
router.get("/", async(req, res, next) =>{

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

