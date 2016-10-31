const express = require('express'),
    router = express.Router(),
    mainController = require('../controllers/main.controller');

router.use('/api/', require('./api/url')(express))

// Export router
module.exports = router;
