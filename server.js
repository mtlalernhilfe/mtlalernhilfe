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
        require('./server/routes/mainRoutes')(app);
    } else {
        app.use(express.static('./'));
        require('./server/routes/mainRoutes')(app);
        app.listen(ports.development, '0.0.0.0', function () {
            console.log('#  Server is listening on port'.green, colors.magenta(ports.development));
        });
    }
});