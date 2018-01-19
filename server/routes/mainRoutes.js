module.exports = function (app, Models) {
    require('./apiRoutes')(app, Models);
    require('./jadeRoutes')(app);
};