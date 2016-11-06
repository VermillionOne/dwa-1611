/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Controller" }]
  new-cap: ["error", { "capIsNewExceptions": ["Router"] }]*/

// Grab our dependencies
const url = require('../../../models/url');
const urlsController = require('../../../controllers/url.controller');

module.exports = (express) => {
  const router = express.Router();

  // Create a new url database entry
  router.post('/urls', (req, res) => {
    const request = req;
    const response = res;
    url.create(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Render the urls page while retriveing the url data
  router.get('/urls', (req, res) => {
    const response = res;
    url.findAll((err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Read a single entry
  router.get('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.find(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Update a url database entry
  router.post('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.update(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Delete a single entry
  router.delete('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.destroy(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  return router;
};
