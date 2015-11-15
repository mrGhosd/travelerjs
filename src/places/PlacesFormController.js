angular.module('travelerjs').controller('PlacesFormController', ['$scope', '$route',
    'formAction', 'Place', '$location', 'Countries', function($scope, $route, formAction, Place, $location, Countries){
        if(formAction === 'create'){
            $scope.place = {};
        } else {
            Place.get($route.current.params.id).then(function(response){
               $scope.place = response;
            });
        }
        Countries.getAll().then(function(response){
            $scope.countries = response;
        });

        $scope.savePlace = function(){
            var place = angular.copy($scope.place);
            place.country = {__type: "Pointer", className: "Country", objectId: place.country };
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