angular.module('travelerjs').controller('TourDetailController', function($scope, $routeParams){
    var tours = JSON.parse(localStorage['tours']);
    if (tours.length > 0) {
        angular.forEach(tours, function (tour) {
            if ($routeParams.slug == tour.title) {
                $scope.tour = tour;
            }
        });
    }
});