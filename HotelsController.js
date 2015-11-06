angular.module('travelerjs').controller('HotelsController', ['$scope', '$routeParams', 'hotels',
    function($scope, $routeParams, hotels){
        $scope.hotels = hotels;
    }]);