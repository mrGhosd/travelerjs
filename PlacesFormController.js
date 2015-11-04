angular.module('travelerjs').controller('PlacesFormController', ['$scope', '$route',
    'formAction', 'Place', '$location', function($scope, $route, formAction, Place, $location){
        if(formAction === 'create'){
            $scope.place = {};
        } else {
            Place.get($route.current.params.id).then(function(response){
               $scope.place = response;
            });
        }

        $scope.savePlace = function(){
            var place = angular.copy($scope.place);
            if(formAction === 'create') {
                Place.create(place)
                .then(function(){
                    $location.path("/places");
                });
            } else {
                Place.update($scope.place.objectId, place)
                    .then(function(){
                        $location.path("/places");
                    });
            }
        }
    }]);