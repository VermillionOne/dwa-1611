const url = require('../../../models/url');

module.exports = (express) => {
    const router = express.Router(),
        urlsController = require('../../../controllers/url.controller');
    // Create a new url database entry
    router.post('/urls', (req, res) => {
        url.create(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });

    // Render the urls page while retriveing the url data
    router.get('/urls', (req, res) => {
        url.findAll( (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });

    // Read a single entry
    router.get('/urls/:id', (req, res) => {
        req.body.id = req.params.id;
        url.find(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });

    // Update a url database entry
    router.post('/urls/:id', (req, res) => {
        req.body.id = req.params.id;
        url.update(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });

    // Delete a single entry
    router.delete('/urls/:id', (req, res) => {
        req.body.id = req.params.id;
        url.destroy(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });

    return router;
}
