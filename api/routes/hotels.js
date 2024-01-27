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