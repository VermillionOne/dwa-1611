module.exports = (express) => {
    const router = express.Router();

    router.post('/hello', (req, res) => {
        console.log('route hit');
        res.json({
            healthy: true,
        })
    });
    return router;
}
