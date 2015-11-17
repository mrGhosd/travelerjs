angular.module('travelerjs').controller('HotelsCreateFormController', ['$scope', '$location',
    'Hotel',  function($scope, $location, Hotel){

    $scope.hotel = {};

    $scope.createHotel = function(){
        var hotel = angular.copy($scope.hotel);
        Hotel.create(hotel).then(function(){
            $location.path('/hotels');
        });
    };
}]);