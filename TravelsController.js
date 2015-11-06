angular.module('travelerjs').controller('TravelsController', ['tours', '$scope', '$http', 'places',
    function(tours, $scope, $http, places){
    $scope.title = "Список туров";
    $scope.tours = tours;
    $scope.places = places;
    console.log($scope.tours);

    $scope.filterTours = function(){
        var tours = angular.copy($scope.tours);
    }
}]);