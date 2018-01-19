module.exports = function (mongoose){
    var Schema = mongoose.Schema;
    var antworten = new Schema({
        antwortText : String,
        zuordnung : String,
        fach : String,
        korrekt : Boolean,
        kurs : String
    });
  return mongoose.model('antworten', antworten, 'antworten');
};