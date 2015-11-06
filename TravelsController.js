angular.module('travelerjs').controller('TravelsController', ['tours', '$scope', '$http', 'countries', 'Place',
    function(tours, $scope, $http, countries, Place){
    $scope.title = "Список туров";
    $scope.tours = tours;
    var toursList = tours;
    $scope.countries = countries;

    $scope.filterTours = function(value){
        var filterTours = [];
        var tours = angular.copy($scope.tours);
        angular.forEach(toursList, function(value, index){
           if(value.Country.name === $scope.tour.country){
               filterTours.push(value);
           }
        });
        $scope.tours = filterTours;
    }
}]);