module.exports = function (app, db) {
    var antwortenCtrl = require('../controllers/antwortenCtrl')(db);
    var fragenCtrl = require('../controllers/fragenCtrl')(db);

    app.get('/api/getFragen', fragenCtrl.getFragen);
    app.get('/api/getAntworten', antwortenCtrl.getAntworten);
}