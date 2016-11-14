/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }]*/

// Grab our dependencies
const express = require('express');

// define constants
const router = express.Router();

/**
 * API Version 1
 */
router.use('/api/v1/', require('./v1/url')(express));

// Export router
module.exports = router;
