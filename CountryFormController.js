angular.module('travelerjs').controller('CountryFormController', function($scope, $routeParams, $location, formAction){
    $scope.countries = localStorage['countries'] ? JSON.parse(localStorage['countries']) : [];

    if(formAction === 'edit') {
        angular.forEach($scope.countries, function (country, index) {
            if ($routeParams.slug == tour.name) {
                $scope.countryIndex = index;
                $scope.country = country;
            }
        });
    }

    $scope.saveCountry = function(){
        var country = angular.copy($scope.country);
        formAction === 'create' ? $scope.countries.push(country) : $scope.countries[$scope.countryIndex] = country;
        $scope.tourIndex = null;
        saveToLocalStorage();
        $location.path('/');
        console.log($scope.countries);
    };


    function saveToLocalStorage(){
        localStorage['countries'] = JSON.stringify($scope.countries, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }
});