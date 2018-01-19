module.exports = function (Models) {
    return {
        getAntworten: getAntworten
    };

    function getAntworten(req, res) {
        var query = JSON.parse(req.query.query);

        if (query) {
            Models.antworten
                .find(query)
                .lean()
                .exec(function (err, antworten) {
                    res.json({status: !err, message: err || '', antworten: antworten});
                })
        }
        else {
            res.json({status: false, message: 'Parameter "query" wurde nicht korrekt übergeben'});
        }
    }
}