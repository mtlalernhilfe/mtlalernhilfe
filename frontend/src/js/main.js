var mainApp = angular.module("mainApp", []);
mainApp.controller("mainCtrl", ['$scope', function ($scope) {
    $scope.isOberkurs = false;
    $scope.isMittelkurs = false;
    $scope.isUnterkurs = false;

    $scope.setOberkurs = function () {
        window.location = "html/oberkurs.html";
    };
    $scope.setMittelkurs = function () {
        window.location = "html/mittelkurs.html";
    };
    $scope.setUnterkurs = function () {
        window.location = "html/unterkurs.html";
    };
}]);