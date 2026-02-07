const movieController = require('../controllers/movie.controller');

const routes = (app)=>{
    // routes function takes express app object as parameter
    app.post('/mba/api/v1/movies', movieController.createMovie);
}

module.exports = routes;