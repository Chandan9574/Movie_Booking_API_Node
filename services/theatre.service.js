const Theatre = require('../models/theatre.model');

// creation of theatre
const createTheatre = async(data)=>{
    try{
    const response = await Theatre.create(data);
    return response;
    }catch(error){
        if(error.name=="ValidationError"){
            let err={}; // response object
            Object.keys(error.errors).forEach((key)=>{
                err[key] = error.errors[key].message;
            });
            return {err: err, code: 422};
        }
        console.log(err);
        throw err;arr
    }
}

module.exports = {
    createTheatre
}