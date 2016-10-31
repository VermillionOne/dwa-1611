// Call in data
const urlData = require('../models/url');

module.exports = {

    showUrls: (req, res) => {
        // Get all URLs

        const urls = '';


        res.render('pages/urls', { urls: urls });
    },

    // Show a single url
    showSingle: (req, res) => {

        // Dummy data for now
        const url = { name: 'Test 1', description: 'Lorem ipsum dolor sit amet', body: 'link.r/123abc' };

        res.render('pages/single', { url: url });

    }

};
