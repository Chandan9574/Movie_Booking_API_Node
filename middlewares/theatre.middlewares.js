const { errorResponseBody } = require('../utils/responseBody');
const validateTheatreCreateRequest = async (req, res, next) => {

    // validate the presence of name
    if (!req.body.name) {
        errorResponseBody.message = "The name of the theatre is not present in the request";
        return res.status(400).json(errorResponseBody);
    }

    // validation of the presence of pincode
    if (!req.body.pincode) {
        errorResponseBody.message = "The pincode of theatre is not present in the request";
        return res.status(400).json(errorResponseBody);
    }

    // validation of the presence of city
    if (!req.body.city) {
        errorResponseBody.message = "The city of theatre is not present in the request";
        return res.status(400).json(errorResponseBody);
    }

    next(); // everything is fine, move to the next middleware
}

module.exports = {
    validateTheatreCreateRequest
}