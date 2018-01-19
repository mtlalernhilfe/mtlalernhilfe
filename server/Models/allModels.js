module.exports = function (mongoose) {

    var Models = {};

    Models.fragen = require('./fragen')(mongoose);
    Models.antworten = require('./antworten')(mongoose);

    return Models;
};