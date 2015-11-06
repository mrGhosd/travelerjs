angular.module('travelerjs').controller('CountriesController', ['$scope', '$routeParams', 'countries',
    function($scope, $routeParams, countries){
    $scope.countries = countries;
    console.log(countries);
}]);