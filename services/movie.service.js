// Here we write our business project
const Movie = require('../models/movie.model');

// this function helps in writting custom logic
const getMovieById = async(id)=>{
    const movie = await Movie.findById(id);
    
    if(!movie){
        return{
            err:'No Movie Found for the corresponding id provided',
            code: 500
        }
        console.log("undefined");
    };

    console.log("Movie found", movie.id);
    return movie;
}

module.exports = {
    getMovieById
}