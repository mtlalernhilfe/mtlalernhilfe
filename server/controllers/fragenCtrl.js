module.exports = function (db) {
    return {
        getFragen: getFragen
    };

    function getFragen(req, res) {
        var query = JSON.parse(req.query.query);

        if (query) {
            var fragen = db.get("fragen")
                .filter()
                .value();

            if (fragen) res.json({status: true, fragen: fragen});
            else res.json({status: false, message: "Keine Fragen gefunden"});
        }
        else {
            res.json({status: false, message: 'Parameter "query" wurde nicht korrekt übergeben'});
        }
    }
}