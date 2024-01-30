const router = require("express").Router();
const Hotel = require("../models/Hotel");


//CREATE HOTEL
router.post("/", async(req, res) =>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json();
    }
});

module.exports = router;

//UPDATE HOTEL
router.post("/", async(req, res) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json();
    }
});
