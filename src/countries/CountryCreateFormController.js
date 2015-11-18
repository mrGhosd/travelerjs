angular.module('travelerjs').controller('CountryCreateFormController', ['$scope', '$location',
    'Countries', 'Place',  function($scope, $location, Countries, Place){
        $scope.country = {};

        Place.getAll().then(function(response){
            $scope.places = response;
        });

        $scope.createCountry = function(){
            var country = angular.copy($scope.country);
            country.place = {__type: "Pointer", className: "Place", objectId: country.place};
            Countries.create(country)
            .then(function(){
                $location.path('/countries');
            });
        };
    }]);