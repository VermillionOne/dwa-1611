module.exports = {

    showUrls: (req, res) => {
        // Get all URLs
        const urls = [
            // Dummy Data for now
            { name: 'Test 1', description: 'Lorem ipsum dolor sit amet', body: 'link.r/123abc' },
            { name: 'Test 1', description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', body: 'link.r/735ghy' },
            { name: 'Test 1', description: 'consectetur adipisicing elit', body: 'sunt in culpa qui officia deserunt mollit anim id est laborum.', body: 'link.r/285bht' },
            { name: 'Test 1', description: 'Excepteur sint occaecat cupidatat non proident.', body: 'link.r/123abc' },
            { name: 'Test 1', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', body: 'link.r/234tyu' },
            { name: 'Test 1', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', body: 'link.r/987tgb' }
        ]
        res.render('pages/urls', { urls: urls });
    },

    // Show a single url
    showSingle: (req, res) => {

        // Dummy data for now
        const url = { name: 'Test 1', description: 'Lorem ipsum dolor sit amet', body: 'link.r/123abc' };

        res.render('pages/single', { url: url });

    }

};
