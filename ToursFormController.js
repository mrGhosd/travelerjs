angular.module('travelerjs').controller('ToursFormController', ["$scope", "$location",
    "$route", "formAction", 'Tours', 'Countries', function($scope, $location, $route,
    formAction, Tours, Countries){

    if(formAction === 'edit'){
        Tours.get($route.current.params.slug).then(function(response){
            $scope.tour = response;
            $scope.tour.country = response.Country.objectId;
        });
    } else {
        $scope.tour = {};
    }
    Countries.getAll().then(function(response){
       $scope.countries = response;
    });

    $scope.saveTour = function(){
        var tourForm = angular.copy($scope.tour);
        var tour = {title: tourForm.title,
            price: tourForm.price,
            description: tourForm.description,
            slug: tourForm.slug,
            Country: {__type: "Pointer", className: "Country", objectId: tourForm.country}
        };
        if(formAction === 'create'){
            Tours.create(tour)
                .then(function(response) {
                    $location.path('/');
            });
        } else {
            Tours.update($scope.tour.objectId, tour)
                .then(function(response) {
                    $location.path('/');
                });
        }

    };
}]);