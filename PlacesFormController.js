angular.module('travelerjs').controller('PlacesFormController', ['$scope', '$routeParams',
    'place','formAction', 'Place', '$location', function($scope, $routeParams, place, formAction, Place, $location){
        $scope.place = place;

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