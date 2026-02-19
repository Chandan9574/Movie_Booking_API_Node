const Theatre = require('../models/theatre.model');

// creation of theatre
const createTheatre = async(data)=>{
    try{
    const response = await Theatre.create(data);
    return response;
    }catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = {
    createTheatre
}