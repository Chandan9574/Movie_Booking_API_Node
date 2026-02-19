// const Theatre = require('../models/theatre.model');
const theatreServices = require('../services/theatre.service');
const {successResponseBody, errorResponseBody} = require('../utils/responseBody');

const create = async(req, res)=>{
    try{
        const response = await theatreServices.createTheatre(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Successfully created the theatre";
        return res.status(201).json(successResponseBody);
    }catch(error){
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    create
}