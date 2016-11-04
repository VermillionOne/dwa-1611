// Create a new express router
const express = require('express'),
    router = express.Router(),
    mainController = require('../controllers/main.controller'),
    urlController = require('../controllers/url.controller');

// Define routes
// Main routes
router.get('/', mainController.showHome);

// URL routes

/**
 * Pre-versioning API
 */
router.get('/urls', urlController.showUrls);

// Export router
module.exports = router;
