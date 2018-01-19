module.exports = function (Models) {
    return {
        getFragen: getFragen
    };

    function getFragen(req, res) {
        var query = JSON.parse(req.query.query);

        if (query) {
            Models.fragen
                .find()
                .lean()
                .exec(function (err, fragen) {
                    res.json({status: !err, message: err || '', fragen: fragen});
                })
        }
        else {
            res.json({status: false, message: 'Parameter "query" wurde nicht korrekt übergeben'});
        }
    }
}