angular.module('travelerjs').controller('HotelsUpdateFormController', ['$scope', '$routeParams', '$location',
    'Hotel',  function($scope, $routeParams, $location, Hotel){
    Hotel.get($routeParams.id).then(function(response){
        $scope.hotel = response;
    });

    $scope.updateHotel = function(){
        var hotel = angular.copy($scope.hotel);
        Hotel.update($scope.hotel.objectId, hotel).then(function(){
            $location.path('/hotels');
        });
    };
}]);