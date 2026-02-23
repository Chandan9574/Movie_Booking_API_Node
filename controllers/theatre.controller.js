// const Theatre = require('../models/theatre.model');
const theatreServices = require('../services/theatre.service');
const {successResponseBody, errorResponseBody} = require('../utils/responseBody');

const create = async(req, res)=>{
    try{
        const response = await theatreServices.createTheatre(req.body);
        if(response.err){
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Validation failed on few parameters of the request body";
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        successResponseBody.message = "Successfully created the theatre";
        return res.status(201).json(successResponseBody);
    }catch(error){
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const destroy = async(req, res)=>{
    try{
        const response = await theatreServices.deleteTheatre(req.params.id);
        if(response.err){
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data=response;
        successResponseBody.message="Successfully deleted the given theatre";
        return res.status(200).json(successResponseBody);
    }catch(error){
        errorResponseBody.err=error;
        return res.status(500).json(errorResponseBody);
    }
};

module.exports = {
    create,
    destroy
}