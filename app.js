var app = angular.module('travelerjs', []);

app.controller('IndexController', function($scope){
    $scope.title = "Список туров";
    $scope.showForm = false;
    $scope.tours = localStorage['tours'] ? JSON.parse(localStorage['tours']) : [];
    $scope.toggleTourForm = function(){
        $scope.showForm = !$scope.showForm;
    };
    console.log(localStorage);
    $scope.saveTour = function(){
        tourForm = $scope.tour;
        tour = {
                title: tourForm.title,
                text: tourForm.text,
                price: tourForm.price,
                contry: tourForm.country
        };
        $scope.tours.push(tour);
        $scope.tour = null;
        $scope.showForm = false;
        localStorage['tours'] = JSON.stringify($scope.tours, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
        console.log($scope.tours);
    }
});