angular.module('mainApp', []).controller('fragenCtrl', ['$scope', function ($scope) {

    $scope.fragenArray = [
        {
            frage: "1",
            zuordnung: "Frage1",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "2",
            zuordnung: "Frage1242",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "2",
            zuordnung: "Frage2",
            fach: "klinische",
            kurs: "oberkurs"
        },
        {
            frage: "3",
            zuordnung: "Frage3",
            fach: "histologie",
            kurs: "oberkurs"
        },
        {
            frage: "4",
            zuordnung: "Frage4",
            fach: "mikrobio",
            kurs: "oberkurs"
        }
    ];

    $scope.antwortenArray = [
        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "asdf",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "qwer",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "yxcv",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "poiu",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        }
    ];

    $scope.fach = "";
    $scope.kurs = "";
    $scope.fragenText = "";
    $scope.showWeiter = false;
    $scope.showUebersicht = false;
    $scope.antwortenFuerFrage = [];
    $scope.richtigBeantwortet = 0;
    $scope.falschBeantwortet = 0;

    $scope.setFach = function (kurs, fach) {
        $scope.fach = fach;
        $scope.kurs = kurs;
        $scope.getFrage();
        $scope.fragenModus = true;
        $scope.showUebersicht = false;
    };

    $scope.getFrage = function () {
        $scope.fragenText = "";
        for (var i = 0; i < $scope.fragenArray.length; i++) {
            var frage = $scope.fragenArray[i];
            if (frage.kurs == $scope.kurs && frage.fach == $scope.fach && !frage.flag) {
                $scope.fragenText = frage.frage;
                frage.flag = true;
                $scope.getAntwortByFrage(frage);
                break;
            }
        }
        if ($scope.fragenText == "") {
            $scope.showUebersicht = true;
            $scope.fragenModus = false;
        }
    };

    $scope.getAntwortByFrage = function (frage) {
        $scope.antwortenFuerFrage = [];
        $scope.antwortenArray.forEach(function (antwort) {
            if (frage.fach === antwort.fach && frage.zuordnung === antwort.zuordnung && frage.kurs === antwort.kurs) {
                $scope.antwortenFuerFrage.push(antwort);
            }
        })
    }

    $scope.toggleFragenModus = function () {
        $scope.fragenModus = !$scope.fragenModus;
    }
    $scope.checkAntwort = function (antwort, id) {
        if (!$scope.showWeiter) {
            if (antwort.korrekt) {
                $scope.richtigBeantwortet++;
                document.getElementById(id).style.background = 'green';
            }
            else {
                $scope.falschBeantwortet++
                document.getElementById(id).style.background = 'red';
            }
            $scope.showWeiter = true;
        }
    }
    $scope.showHome = function () {
        $scope.showWeiter = false;
        $scope.showUebersicht = false;
        $scope.fragenModus = false;
        $scope.richtigBeantwortet = 0;
        $scope.falschBeantwortet = 0;
    }

    $scope.nextFrage = function () {
        $scope.showWeiter = false;
        for (var i = 0; i < 4; i++) {
            document.getElementById(i).style.background = 'lightslategray';
        }
        $scope.getFrage();
    }
}]);