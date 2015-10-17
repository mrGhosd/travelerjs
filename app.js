var app = angular.module('travelerjs', []);

app.controller('IndexController', function($scope){
    $scope.title = "Список туров";
    $scope.showForm = false;
    $scope.tours = [];
    $scope.toggleTourForm = function(){
        $scope.showForm = !$scope.showForm;
    };

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
        console.log($scope.tours);
    }
});