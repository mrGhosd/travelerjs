angular.module('travelerjs').controller('PlacesController', ['$scope', '$routeParams',
    'places', function($scope, $routeParams, places){
        $scope.places = places;
    }]);