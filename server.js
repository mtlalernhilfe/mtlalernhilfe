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

/**************************************************************************************************
 * Define Express Middlewares
 **************************************************************************************************/
app.set('view engine', 'pug');
app.set('views', path.join('server', 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
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
        app.listen(process.env.PORT || 8080);
        app.get('/', function (req, res) {
            res.render('index.pug', {
                min: process.env.NODE_ENV === 'production' ? ".min" : ""
            });
        });
    } else {
        app.use(express.static('./'));
        require('./server/routes/mainRoutes')(app);
        app.listen(ports.development, '0.0.0.0', function () {
            console.log('#  Server is listening on port'.green, colors.magenta(ports.development));
        });
    }
});