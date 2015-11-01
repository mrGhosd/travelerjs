angular.module('travelerjs').controller('ToursFormController', ["$scope", "$location",
    "$routeParams", "formAction", "countries", "ApiRequest", 'tour', 'Tours', function($scope, $location, $routeParams, formAction, countries, ApiRequest, tour, Tours){
    $scope.tourAction = '';
    $scope.showForm = false;
    $scope.tourIndex = null;
    $scope.tour = tour;
    $scope.tour.country = tour.Country.objectId;
    $scope.countries = countries;

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
                console.log(response);
            });
        } else {
            Tours.update($scope.tour.objectId, tour)
                .then(function(response) {
                    console.log(response);
                    $location.path('/');
                });
        }

    };

    $scope.editTour = function($index){
        $scope.tourIndex = $index;
        $scope.tourAction = 'edit';
        $scope.tour= $scope.tours[$index];
        $scope.showForm = true;
    };

    $scope.removeTour = function($index){
        $scope.tours.splice($index, 1);
        saveToLocalStorage();
    };

    function saveToLocalStorage(){
        localStorage['tours'] = JSON.stringify($scope.tours, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        });
    }
}]);