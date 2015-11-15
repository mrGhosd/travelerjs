angular.module('travelerjs').controller('HotelsCreateFormController', ['$scope', '$route', '$location',
    'Hotel',  function($scope, $route, $location, Hotel){

    $scope.hotel = {};

    $scope.createHotel = function(){
        var hotel = angular.copy($scope.hotel);
        Hotel.create(hotel).then(function(){
            $location.path('/hotels');
        });
    };
}]);