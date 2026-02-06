const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);

const mongoose=require('mongoose');


// env.config();
const app = express(); // express application object

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
    console.log("Hitting/home");
    return res.json({
        success: true
    });
}); // takes 2 parameter route and callback(which takes two object request and response)

app.listen(process.env.PORT, async () => {
    // this callback gets executed, once we successfully start the server on the given port
    console.log(`Server started on port ${process.env.PORT}`);

    try{
    await mongoose.connect(process.env.MONGO_URI); // connects to the mongo server
    console.log("Successfully connected to mongo");
    }catch(err){
        console.log("Not able to connect mongo",err);
    }
    // console.log("Successfully connect to mongoose");
});