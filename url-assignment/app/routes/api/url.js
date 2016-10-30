module.exports = (express) => {
    const router = express.Router();

    router.get('/url', (req, res) => {
        console.log('route hit', req.body);
        res.json({
            users: true,
            url: linkString(),
        })
    });

    function linkString() {
        return 'testing';
    }

    return router;
}
