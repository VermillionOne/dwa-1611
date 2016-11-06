// Call in data
const request = require('request');

module.exports = {

  showUrls: (req, res) => {
    // Get all URLs

    function getUrlData(/* data*/) {
      // console.log(data);
      // urls = data;
    }

    request('api/urls', getUrlData);

    const urls = '';

    res.render('pages/urls', { urls });
  },

  // Show a single url
  showSingle: (req, res) => {
    // Dummy data for now
    const url = { name: 'Test 1', description: 'Lorem ipsum dolor sit amet', body: 'link.r/123abc' };

    res.render('pages/single', { url });
  },
};
