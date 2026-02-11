const Movie=require('../models/movie.model');
const movieService = require('../services/movie.service');
const {successResponseBody, errorResponseBody} = require('../utils/responsebody');

/**
 * controller function to create a new movie
 * @param {*} req {name, discription, ....}
 * @returns movie created 
 */


const createMovie = async (req,res)=>{
    try{
        const movie = await movieService.createMovie(req.body);
        successResponseBody.data = movie;
        successResponseBody.message = "Successfully created the movie";
        return res.status(201).json(successResponseBody); //201 (Created): Specifically for POST requests where you save data to the database.
    }catch(err){
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
};

const deleteMovie = async (req,res)=>{
    try{
        const response = await movieService.deleteMovie(req.params.id);

        successResponseBody.data = response;
        successResponseBody.message = "Successfully deleted the movie";
        return res.status(200).json(successResponseBody);  //200->Ok or everyting work perfectly mostly for GET
    }catch(err){
        console.log(err);
        return res.status(500).json(errorResponseBody);  //500->internal server error
    }
};

const getMovie = async(req,res)=>{
    try{
        const response=await movieService.getMovieById(req.params.id);
        if(response.err){
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);

    }catch(err){
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie
}