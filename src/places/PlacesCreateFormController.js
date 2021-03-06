angular.module('travelerjs').controller('PlacesCreateFormController', ['$scope',
    'Place', '$location', 'Countries', function($scope, Place, $location, Countries){

    $scope.place = {};

    Countries.getAll().then(function(response){
        $scope.countries = response;
    });

    $scope.createPlace = function(){
        var place = angular.copy($scope.place);
        place.country = {__type: "Pointer", className: "Country", objectId: place.country };
        Place.create(place)
            .then(function(){
                $location.path("/places");
        });
    }
}]);