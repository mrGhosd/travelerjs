angular.module('travelerjs').controller('TravelsController', ['tours', '$scope', '$http', 'places',
    function(tours, $scope, $http, places){
    $scope.title = "Список туров";
    $scope.tours = tours;
    var toursList = tours;
    $scope.places = places;

    $scope.filterTours = function(value){
        var filterTours = [];
        var tours = angular.copy($scope.tours);
        angular.forEach(toursList, function(value, index){
           if(value.place.name === $scope.tour.place ){
               filterTours.push(value);
           }
        });
        $scope.tours = filterTours;
    }
}]);