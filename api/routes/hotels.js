const router = require("express").Router();
const createHotel = require("../controllers/hotel");
const Hotel = require("../models/Hotel");
const createError  = require("../utils/error");


//CREATE HOTEL
router.post("/", createHotel);

//UPDATE HOTEL
router.put("/:id", async(req, res) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json();
    }
});

//DELETE HOTEL
router.delete("/:id", async(req, res) =>{
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel has been deleted');
    } catch (err) {
        res.status(500).json();
    }
});

//GET 'A' HOTEL
router.get("/:id", async(req, res) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json();
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

