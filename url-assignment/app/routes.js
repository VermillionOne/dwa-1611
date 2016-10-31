// Create a new express router
const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    urlsController = require('./controllers/urls.controller');

// Define routes
// Main routes
router.get('/', mainController.showHome);

// URL routes
router.get('/urls', urlsController.showUrls);

// Export router
module.exports = router;