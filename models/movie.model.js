const mongoose = require('mongoose');

// Define the schema of the movie reource to be stored in the db
const movieSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    casts:{
        type:[String],
        required:true
    },
    trailerUrl:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true,
        default:"English"
    },
    releaseDate:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    relaeaseDate:{
        type:String,
        required:true,
        default:"RELEASED"
    },
},{timeStamps:true});

const Movie=mongoose.model('Movie', movieSchema); // Creates a new model

module.exports=Movie; // default export of Movie ,  Returning the Model