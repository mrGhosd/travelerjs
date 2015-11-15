angular.module('travelerjs').controller('HotelsUpdateFormController', ['$scope', '$route', '$location',
    'Hotel',  function($scope, $route, $location, Hotel){
    Hotel.get($route.current.params.id).then(function(response){
        $scope.hotel = response;
    });

    $scope.updateHotel = function(){
        var hotel = angular.copy($scope.hotel);
        Hotel.update($scope.hotel.objectId, hotel).then(function(){
            $location.path('/hotels');
        });
    };
}]);