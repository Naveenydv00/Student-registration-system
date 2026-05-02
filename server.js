require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json({
    limit:"50mb"
}));

app.use(express.urlencoded({
    extended:true,
    limit:"50mb"
}));

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((err)=>{

    console.log(err);

});

/* ROUTES */

app.use("/api", studentRoutes);

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(`Server Running On Port ${PORT}`);

});