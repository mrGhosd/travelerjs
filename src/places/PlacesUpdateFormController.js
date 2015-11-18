angular.module('travelerjs').controller('PlacesUpdateFormController', ['$scope', '$routeParams',
    'Place', '$location', 'Countries', function($scope, $routeParams, Place, $location, Countries){
    Place.get($routeParams.id).then(function(response) {
        $scope.place = response;
        $scope.place.country = response.country.objectId;
    });

    Countries.getAll().then(function (response) {
        $scope.countries = response;
    });

    $scope.updatePlace = function () {
        var place = angular.copy($scope.place);
        place.country = {__type: "Pointer", className: "Country", objectId: place.country};
        Place.update($scope.place.objectId, place)
            .then(function () {
                $location.path("/places");
            });
    }
}]);