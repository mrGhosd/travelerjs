angular.module('travelerjs').controller('PlacesController', ['$scope', 'places',
    function($scope, places){
        $scope.places = places;
    }]);