angular.module('travelerjs').controller('TourDetailController', ['$scope',
    'tour', function($scope, tour){
    $scope.tour = tour;
}]);