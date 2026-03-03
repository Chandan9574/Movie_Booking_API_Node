const Theatre = require('../models/theatre.model');

// creation of theatre
const createTheatre = async (data) => {
    try {
        const response = await Theatre.create(data);
        return response;
    } catch (error) {
        if (error.name == "ValidationError") {
            let err = {}; // response object
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            });
            return { err: err, code: 422 };
        }
        console.log(err);
        throw err; arr
    }
}

const deleteTheatre = async (id) => {
    try {
        const response = await Theatre.findByIdAndDelete(id);
        if (!response) {
            return {
                err: "No Record of a theatre found for the given id",
                code: 404
            }
        }
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * 
 * @param id -> it is the unique_id based on which we will fetch a theatre 
 */
const getTheatre = async(id)=>{
    try{
        const response = await Theatre.findById(id);
        if(!response){
            // no record found for the given id
            return{
                err: "No theatre found for the given id",
                code: 404
            }
        }
        return response;
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {
    createTheatre,
    deleteTheatre,
    getTheatre
}