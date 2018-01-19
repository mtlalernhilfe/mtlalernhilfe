module.exports = function (mongoose){
    var Schema = mongoose.Schema;

    var fragen = new Schema({
        frage : String,
        zuordnung : String,
        fach : String,
        kurs : String
    });
    return mongoose.model('fragen', fragen, 'fragen');
};