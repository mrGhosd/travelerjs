angular.module('travelerjs').controller('HotelsFormController', ['$scope', '$route', '$location', 'formAction',
    'Hotel',  function($scope, $route, $location, formAction, Hotel){
        if(formAction === 'create'){
            $scope.hotel = {}
        } else {
            Hotel.get($route.current.params.id).then(function(response){
                $scope.hotel = response;
            });
        }

        $scope.saveHotel = function(){
            var hotel = angular.copy($scope.hotel);
            if(formAction === 'create'){
                Hotel.create(hotel).then(function(){
                    $location.path('/hotels');
                });
            } else {
                Hotel.update($scope.hotel.objectId, hotel).then(function(){
                    $location.path('/hotels');
                });
            }
        };
    }]);