angular.module('travelerjs').controller('CountriesController', ['$scope', 'countries',
    function($scope,  countries){
    $scope.countries = countries;
}]);