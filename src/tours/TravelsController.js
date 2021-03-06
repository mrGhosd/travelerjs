angular.module('travelerjs').controller('TravelsController', ['$scope', 'Place', 'Tours', 'Countries',
    function($scope, Place, Tours, Countries){
    $scope.title = "Список туров";
    $scope.tours = [];
    $scope.countries = [];
    $scope.places = [];
    var sortedByCountry = [];
    var toursList = [];

    Tours.getAll().then(function(response){
        $scope.tours = response;
        toursList = response;
    });

    Countries.getAll().then(function(response){
        $scope.countries = response;
    });

    Place.getAll().then(function(response) {
        $scope.places = response;
    });

    $scope.filterByCountry = function(){
        var filterTours = [];
        var selectedCountry;
        var tours = angular.copy($scope.tours);
        angular.forEach(toursList, function(value, index){
            selectedCountry = $scope.tour.country;
           if(value.Country.objectId === $scope.tour.country){
               filterTours.push(value);
           }
        });
        sortedByCountry = filterTours;
        $scope.tours = filterTours;
    };

    $scope.filterByPlace = function(){
        var filterTours = [];
        var tours = angular.copy($scope.tours);
        angular.forEach(sortedByCountry, function(value, index){
            if(value.place.objectId === $scope.tour.place){
                filterTours.push(value);
            }
        });
        $scope.tours = filterTours;
    }
}]);