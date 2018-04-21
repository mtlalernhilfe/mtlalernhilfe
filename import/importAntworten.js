// Datenbank, Source und Spalten bei Bedarf umbenennen.
// TODO: Muss auf LowDb umgestellt werden.
var mongoose = require('mongoose'),
    xlsx = require('xlsx'),
    _ = require("underscore"),
    Models = require('../server/models/allModels')(mongoose);
var async = require('async');


mongoose.connect("mongodb://admin:47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e@ds040637.mlab.com:40637/mtla-lernhilfe-prod", function (remoteErr) {
    if (remoteErr) {
        mongoose.disconnect();
    } else {
        var spalten = {
            A: "antwortText",
            B: "fach",
            C: "korrekt",
            D: "kurs",
            E: "zuordnung"
        };

        var source = './data/App Antworten Excel.xlsx';
        var workbook = xlsx.readFileSync(source);
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];

        var rowNumbers = Object.keys(worksheet).map(function (key) {
            var test = key.replace(/[^0-9\.]+/g, "");
            return test;
        }).filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        rowNumbers.shift();
        rowNumbers.shift();

        var countf = 0;
        var antworten = new Models.antworten();
        // console.log(antworten)

        async.eachSeries(rowNumbers, function (rowNumber, cb) {
            for (spalte in spalten) {
                console.log("spalten[spalte]",spalten[spalte])
                if (worksheet[spalte + rowNumber] && worksheet[spalte + rowNumber].v) {
                    if (spalten[spalte] == 'antwortText') {
                        if (!_.isEmpty(antworten.antwortText))
                            antworten.save(function (err) {
                                if (err)
                                    console.error(err);
                            })


                        antworten = new Models.antworten();
                        antworten.antwortText = worksheet[spalte + rowNumber].v;
                        countf = 0
                    }
                    else if (spalten[spalte] == 'fach') {
                        antworten.fach = worksheet[spalte + rowNumber].v;
                        if (antworten.fach.length > 1)
                            countf++
                    }
                    else if (spalten[spalte] == 'korrekt') {
                        antworten.korrekt = worksheet[spalte + rowNumber].v;
                        if (antworten.korrekt.length > 1)
                            countf++
                    }
                    else if (spalten[spalte] == "kurs") {
                        antworten.kurs = worksheet[spalte + rowNumber].v;
                        if (antworten.kurs.length > 1)
                            countf++;
                    }
                    else if (spalten[spalte] == "zuordnung") {
                        antworten.zuordnung = worksheet[spalte + rowNumber].v;
                        if (antworten.zuordnung.length > 1)
                            countf++;
                    }
                    else {
                        if (_.isEmpty(antworten.antwortText)) {
                            antworten.antwortText = "", antworten.kurs = "";
                        }
                        antworten.antwortText = worksheet[spalte + rowNumber].v;
                    }
                }
            }

            cb(null, antworten)
        }, function () {
            antworten.save(function (err) {
                // console.log("=================================");
                // console.log("===== File: ", source);
                console.log("Fertig");
                // console.log(">>>>>>>>>>>>>>>>>>");
                if (err)
                    console.error(err);
            })

        });
    }
})


