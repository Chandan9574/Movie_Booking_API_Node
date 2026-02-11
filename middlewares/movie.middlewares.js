const validateMovieCreateRequest = (req, res, next) => {
    // for now, just allow the request
    next();
};

module.exports = {
    validateMovieCreateRequest
};
