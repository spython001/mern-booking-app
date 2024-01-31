const Hotel = require('../models/Hotel');


//CREATE NEW HOTEL
const createHotel = async(res,req,next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};


module.exports = createHotel;