angular.module('travelerjs').controller('CountryFormController', ['$scope', '$routeParams', '$location', 'formAction',
    'country', 'Countries', 'places',  function($scope, $routeParams, $location, formAction, country, Countries, places){
    $scope.country = country;
    $scope.places = places;

    $scope.saveCountry = function(){
        var country = angular.copy($scope.country);
        country.place = {__type: "Pointer", className: "Place", objectId: country.place};
        if(formAction === 'create'){
         Countries.create(country).then(function(){
             $location.path('/');
         });
        } else {
            Countries.update($scope.country.objectId, country).then(function(){
                $location.path('/');
            });
        }
    };


    function saveToLocalStorage(){
        localStorage['countries'] = JSON.stringify($scope.countries, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }
}]);