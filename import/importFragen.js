// Datenbank, Source und Spalten bei Bedarf umbenennen.
// TODO: Muss auf LowDb umgestellt werden.
var mongoose = require('mongoose'),
    xlsx = require('xlsx'),
    _ = require("underscore"),
    Models = require('../server/models/allModels')(mongoose);
var async = require('async');


mongoose.connect("mongodb://admin:47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e@ds040637.mlab.com:40637/mtla-lernhilfe-prod", function (remoteErr) {
    console.log("__________________________________________________________");
    console.log("Try to connect to mongolab Database:");
    if (remoteErr) {
        console.log('Connection to mongolab could not be established.');
        console.log(remoteErr);
        mongoose.disconnect();
    } else {
        console.log('Connection to mongolab DB successfully established.');


        var spalten = {
            A: "fach",
            B: "frage",
            C: "kurs",
            D: "zuordnung",
        };

        var source = './data/App Fragen Excel.xlsx';
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
        var fragen = new Models.fragen();
        console.log(fragen)

        async.eachSeries(rowNumbers, function (rowNumber, cb) {
            for (spalte in spalten) {
                if (worksheet[spalte + rowNumber] && worksheet[spalte + rowNumber].v) {
                    if (spalten[spalte] == 'fach') {
                        if (!_.isEmpty(fragen.fach))
                            fragen.save(function (err) {
                                if (err)
                                    console.error(err);
                            })


                        fragen = new Models.fragen();
                        fragen.fach = worksheet[spalte + rowNumber].v;
                        countf = 0
                    }
                    else if (spalten[spalte] == 'frage') {
                        fragen.frage = worksheet[spalte + rowNumber].v;
                        if (fragen.frage.length > 1)
                            countf++
                    }
                    else if (spalten[spalte] == 'kurs') {
                        fragen.kurs = worksheet[spalte + rowNumber].v;
                        if (fragen.kurs.length > 1)
                            countf++
                    }
                    else if (spalten[spalte] == "zuordnung") {
                        fragen.zuordnung = worksheet[spalte + rowNumber].v;
                        if (fragen.zuordnung.length > 1)
                            countf++;
                    }
                    else {
                        if (_.isEmpty(fragen.kurs)) {
                            fragen.frage = "", fragen.kurs = "";
                        }
                        fragen.frage = worksheet[spalte + rowNumber].v;
                    }
                }
            }

            console.log(fragen)

            cb(null)
        }, function () {
            fragen.save(function (err) {

                console.log("=================================");
                console.log("===== File: ", source);
                console.log("Fertig");
                console.log(">>>>>>>>>>>>>>>>>>");
                if (err)
                    console.error(err);
            })

        });
    }
})


