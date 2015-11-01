angular.module('travelerjs').controller('CountryFormController', ['$scope', '$routeParams', '$location', 'formAction',
    'country', 'Countries',  function($scope, $routeParams, $location, formAction, country, Countries){
    $scope.country = country;

    $scope.saveCountry = function(){
        var country = angular.copy($scope.country);
        console.log(country);
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