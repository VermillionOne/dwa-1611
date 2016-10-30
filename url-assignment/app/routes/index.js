module.exports = (express) => {
    const router = express.Router();

    router.post('/status', (req, res) => {
        console.log('route hit', req.body);
        res.json({
            healthy: true,
        })
    });

    //Routes
    router.use('/api/', require('./api/url')(express));

    return router;
}
