module.exports = function (app, db) {
    require('./apiRoutes')(app, db);
    require('./jadeRoutes')(app);
};