/**************************************************************************************************
 * Load core modules
 **************************************************************************************************/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var ports = require('./server/configuration/port');
var colors = require('colors');
var async = require('async');

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var file = new FileSync('db.json');
var db = low(file);



/**************************************************************************************************
 * Define Express Middlewares
 **************************************************************************************************/
app.set('view engine', 'pug');
app.set('views', path.join('server', 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
/**************************************************************************************************
 * Define Express Middlewares
 **************************************************************************************************/

/**************************************************************************************************
 * Start Server
 **************************************************************************************************/
console.log("##############################################################".green);
console.log("#  Starte ".green + "mtla-lernhilfe".magenta + " Server".green);

async.waterfall([
], function (err) {
    if (err) {
        console.log("#  SERVERFEHLER: ".red,colors.red(err));
        console.log('#  Server wird beendet.'.red);
        console.log("##############################################################".red);
        process.exit();
    } else if (process.env.NODE_ENV === 'production') {
        require('./server/routes/mainRoutes')(app, db);
        app.listen(app.get('port'), function () {
            console.log("app ist listening on port ", app.get('port'))
        })
        app.get('/', function (req, res) {
            res.render('index.pug', {
                min: process.env.NODE_ENV === 'production' ? ".min" : ""
            });
        });
    } else {
        app.use(express.static('./'));
        require('./server/routes/mainRoutes')(app, db);
        app.listen(ports.development, '0.0.0.0', function () {
            console.log('#  Server is listening on port'.green, colors.magenta(ports.development));
        });
    }
});