angular.module('travelerjs').controller('CountriesController', function($scope, $routeParams, $location){
    $scope.countries = localStorage['countries'] ? JSON.parse(localStorage['countries']) : [];
});