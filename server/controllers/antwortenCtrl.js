module.exports = function (db) {
    return {
        getAntworten: getAntworten
    };

    function getAntworten(req, res) {
        var query = JSON.parse(req.query.query);

        if (query) {
            var antworten = db.get("antworten")
                .filter(query)
                .value();
            if (antworten)
                res.json({status: true, antworten: antworten});
            else
                res.json({status: false, message: "Keine Antworten gefunden"})
        }
        else {
            res.json({status: false, message: 'Parameter "query" wurde nicht korrekt übergeben'});
        }
    }
}