/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }]*/

// Create a new express router
const express = require('express');
const mainController = require('../controllers/main.controller');
const urlController = require('../controllers/url.controller');

// define constants
const router = express.Router();

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
