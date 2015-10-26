angular.module('travelerjs').controller('TravelsController', function($scope){
    $scope.title = "Список туров";
    $scope.tours = localStorage['tours'] ? JSON.parse(localStorage['tours']) : [];
    console.log($scope.tours);

});