angular.module('travelerjs').controller('CountryUpdateFormController', ['$scope', '$routeParams', '$location',
    'Countries', 'Place',  function($scope, $routeParams, $location, Countries, Place){

        Place.getAll().then(function(response){
            $scope.places = response;
        });

        Countries.get($routeParams.slug).then(function(response){
            $scope.country = response;
            $scope.country.place = response.place;
        });

        $scope.updateCountry = function(){
            var country = angular.copy($scope.country);
            country.place = {__type: "Pointer", className: "Place", objectId: country.place};
            Countries.update($scope.country.objectId, country).then(function(){
                $location.path('/countries');
            });
        };
    }]);