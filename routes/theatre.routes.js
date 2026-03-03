const theatreController = require('../controllers/theatre.controller');
const theatreMiddleware = require('../middlewares/theatre.middlewares');

const routes = (app)=>{
    // create
    app.post(
        '/mba/api/v1/theatres',
        theatreMiddleware.validateTheatreCreateRequest,
        theatreController.create
    );

    // delete
    app.delete(
        '/mba/api/v1/theatres/:id',
        theatreController.destroy 
    );

    // fetch
    app.get(
        '/mba/api/v1/theatres/:id',
        theatreController.getTheatre
    );
}

module.exports = routes;