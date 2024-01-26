const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const cors = require("cors");

app.use(cors());

dotenv.config();


//alternative way of connecting to mongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }catch(error){
        throw error;
    }
};


//MY FIRST WAY OF CONNECTING TO mongoDB -
/*mongoose.connect(process.env.MONGO_URL, {
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {console.error(err);});
*/



//MIDDLEWARES
app.use(express.json());


//routes in middlewares
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute)



mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
});




app.listen(3000, ()=>{
    connect();
    console.log("Backend server is running");
});
