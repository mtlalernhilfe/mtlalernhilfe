module.exports = function (app, Models) {
    var antwortenCtrl = require('../controllers/antwortenCtrl')(Models);
    var fragenCtrl = require('../controllers/fragenCtrl')(Models);

    app.get('/api/getFragen', fragenCtrl.getFragen);
    app.get('/api/getAntworten', antwortenCtrl.getAntworten);
}