module.exports = (express) => {
    const router = express.Router(),
    mainController = require('../controllers/main.controller');

    // Define home or index page
    router.get('/', mainController.showHome);

    router.use('/api/', require('./api/url')(express))

    return router;
}
