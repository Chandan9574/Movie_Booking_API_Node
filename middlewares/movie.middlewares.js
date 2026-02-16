// we are making this middleware so that 
// This allows the client-side to play its role (showing a nice error message) while the server plays its role (protecting the database).


const badRequestResponse={
    success: false,
    err: {},
    data: {},
    message: "Malformed Request | Bad request"
}


const validateMovieCreateRequest = async (req, res, next) => {
    // validate the movie nam
    if(!req.body.name){
        badRequestResponse.err = "The name of the movie is not present in the request";
        return res.status(400).json(badRequestResponse); // 400->Bad Request means the client is not sending the request as required properly
    }

    // validate the movie description
    if(!req.body.description){
        badRequestResponse.err = "The description of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the movie casts (casts does not exist, not an array, array is empty)
    if(!req.body.casts || !(req.body.casts instanceof Array) || req.body.casts.length<=0){
        badRequestResponse.err = "The description of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the movie trailer URL
    if(!req.body.trailerUrl){
        badRequestResponse.err = "The trailer URL of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the release date of the movie
    if(!req.body.releaseDate){
        badRequestResponse.err = "The release Date of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // vaidate director of the movie
    if(!req.body.director){
        badRequestResponse.err = "The director of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    next(); // call next middleware: this condition hits only if all the required condition is correct
}

module.exports = {
    validateMovieCreateRequest
}
