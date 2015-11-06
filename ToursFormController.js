angular.module('travelerjs').controller('ToursFormController', ["$scope", "$location",
    "$route", "formAction", 'Tours', 'Countries', 'Place', 'Hotel', function($scope, $location, $route,
    formAction, Tours, Countries, Place, Hotel){
    var allPlaces = [];
    if(formAction === 'edit'){
        Tours.get($route.current.params.slug).then(function(response){
            $scope.tour = response;
            $scope.tour.country = response.Country.objectId;
            $scope.tour.place = response.place;
            $scope.tour.hotel = response.hotel;
        });
    } else {
        $scope.tour = {};
    }

    Place.getAll().then(function(response) {
        allPlaces = response;
       $scope.places = response;
    });

    Countries.getAll().then(function(response){
       $scope.countries = response;
    });

    Hotel.getAll().then(function(response) {
        $scope.hotels = response;
    });

    $scope.findPlaces = function(){
       Place.forCountry($scope.tour.country).then(function(response){
           $scope.places = response;
       });
    };

    $scope.findPlaces = function(){
        var filterPlaces = [];
        angular.forEach(allPlaces, function(value, index){
            if(value.country.objectId === $scope.tour.country){
                filterPlaces.push(value);
            }
        });
        $scope.places = filterPlaces;
    };

    $scope.saveTour = function(){
        var tourForm = angular.copy($scope.tour);
        var tour = {title: tourForm.title,
            price: tourForm.price,
            description: tourForm.description,
            slug: tourForm.slug,
            Country: {__type: "Pointer", className: "Country", objectId: tourForm.country},
            place: {__type: "Pointer", className: "Place", objectId: tourForm.place.objectId || tourForm.place},
            hotel: {__type: "Pointer", className: "Hotel", objectId: tourForm.hotel}
        };
        console.log(tourForm);
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