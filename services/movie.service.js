// Here we write our business project
const Movie = require('../models/movie.model');

const createMovie = async(data)=>{
    try{
    const movie = await Movie.create(data);
    return movie;
    }catch(error){
        if(error.name=='ValidationError'){
            let err = {}; // response object
            Object.keys(error.errors).forEach((key)=>{
                err[key] = error.errors[key].message;
            })
            console.log(err);
            return {err: err, code: 422};
        }else{
            throw error;
        }
    }
}

const deleteMovie = async(id)=>{
    const response = await Movie.findByIdAndDelete(id);
    return response;
}

// this function helps in writting custom logic
const getMovieById = async(id)=>{
    const movie = await Movie.findById(id);
    
    if(!movie){
        return{
            err:'No Movie Found for the corresponding id provided',
            code: 404
        }
    };

    return movie;
}

const updateMovie = async(id, data)=>{
    try{
        const movie = await Movie.findByIdAndUpdate(id, data, {new:true, runValidators: true});
    // inplace of {new:true} we can also use {returnOriginal:false}
    // both of them returns doc is the document after update was applied
    return movie;
    }catch(error){
        if(error.name == 'ValidationError'){
            let err = {};
            Object.keys(error.errors).forEach((key)=>{
                err[key] = error.errors[key].message;
            });
            console.log(err);
            return {err: err, code:422};
        }else{
            throw error;
        }
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovieById,
    updateMovie
}