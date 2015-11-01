angular.module('travelerjs').controller('TourDetailController', ['$scope', '$routeParams',
    'tour', function($scope, $routeParams, tour){
    $scope.tour = tour;
}]);