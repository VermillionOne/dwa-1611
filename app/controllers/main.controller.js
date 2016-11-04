module.exports = {

    /**
     * [description]
     * @param  Request - req
     * @param  Response - res
     * @return Needs to be setup to return appropriate data; currently no returned data.
     */
    showHome: (req, res) => {
        res.render('pages/home');

        console.log(res.render);
    }

};
