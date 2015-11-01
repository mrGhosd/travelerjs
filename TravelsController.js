angular.module('travelerjs').controller('TravelsController', ['tours', '$scope', '$http', function(tours, $scope, $http){
    $scope.title = "Список туров";
    console.log(tours);
    $scope.tours = tours;
}]);