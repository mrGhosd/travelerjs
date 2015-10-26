angular.module('travelerjs').controller('TourDetailController', function($scope, $routeParams){
    var tours = JSON.parse(localStorage['tours']);
    angular.forEach(tours, function(tour){
        if($routeParams.slug == tour.title){
            $scope.tour = tour;
        }
    });
});