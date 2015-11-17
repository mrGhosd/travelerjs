angular.module('travelerjs').controller('HotelsController', ['$scope', 'hotels',
    function($scope, hotels){
        $scope.hotels = hotels;
    }]);