angular.module('travelerjs').controller('ToursFormController', ["$scope", "$location",
    "$routeParams", "formAction", "countries", "ApiRequest", function($scope, $location, $routeParams, formAction, countries, ApiRequest){
    $scope.tourAction = '';
    $scope.showForm = false;
    $scope.tourIndex = null;
    var tours = $scope.tours = localStorage['tours'] ? JSON.parse(localStorage['tours']) : [];
    $scope.countries = countries;
    if(formAction === 'edit') {
        angular.forEach(tours, function (tour, index) {
            if ($routeParams.slug == tour.title) {
                $scope.tourIndex = index;
                $scope.tour = tour;
            }
        });
    }

    $scope.saveTour = function(){
        var tourForm = angular.copy($scope.tour);
        var tour = {title: tourForm.title,
            price: tourForm.price,
            description: tourForm.description,
            slug: tourForm.slug,
            Country: {__type: "Pointer", className: "Country", objectId: tourForm.country}
        };
        if(formAction === 'create'){
            ApiRequest.post("/Tour", tour)
                .then(function(response) {
                console.log(response);
            });
        } else {

        }

        $scope.tourIndex = null;
        $location.path('/');
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