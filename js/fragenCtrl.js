angular.module('mainApp', []).controller('fragenCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.fragenArray = [];

    $scope.antwortenArray = [];

    $scope.getFragen = function (query) {
        if (query) {
            $http({
                method: 'GET',
                url: '/api/getFragen',
                params: {query: query}
            }).then(function (res) {
                if (res.data.status) $scope.fragenArray = res.data.fragen;
                else console.error(res.data.message);
            }, function (res) {
                console.error(res.statusText);
            })
        }
        else {
            console.error("Parameter query wurde nicht übergeben");
        }
    }

    $scope.getAntworten = function (query) {
        if (query) {
            $http({
                method: 'GET',
                url: '/api/getAntworten',
                params: {query: query}
            }).then(function (res) {
                if (res.data.status) $scope.antwortenArray = res.data.antworten;
                else console.error(res.data.message);
            }, function (res) {
                console.error(res.statusText);
            })
        }
        else {
            console.error("Parameter query wurde nicht übergeben");
        }
    };

    var query = {};
    $scope.getFragen(query);
    $scope.getAntworten(query);

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
        var n = $scope.antwortenFuerFrage.length;
        var tempArr = [];
        for (var i = 0; i < n - 1; i++) {
            // The following line removes one random element from $scope.antwortenFuerFrage
            // and pushes it onto tempArr
            tempArr.push($scope.antwortenFuerFrage.splice(Math.floor(Math.random() * $scope.antwortenFuerFrage.length), 1)[0]);
        }
        tempArr.push($scope.antwortenFuerFrage[0]);
        $scope.antwortenFuerFrage = tempArr;
    }

    $scope.toggleFragenModus = function () {
        $scope.fragenModus = false;
        $scope.showUebersicht = $scope.richtigBeantwortet > 0 || $scope.falschBeantwortet > 0;
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