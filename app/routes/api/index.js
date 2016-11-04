const express = require('express'),
    router = express.Router();
/**
 * API Pre-versioning
 */
router.use('/api/', require('./url')(express));

/**
 * API Version 1
 */
router.use('/api/v1/', require('./v1/url')(express));

// Export router
module.exports = router;
