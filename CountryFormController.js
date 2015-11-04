angular.module('travelerjs').controller('CountryFormController', ['$scope', '$route', '$location', 'formAction',
    'Countries', 'Place',  function($scope, $route, $location, formAction, Countries, Place){
        if(formAction === 'create'){
            $scope.country = {}
        } else {
            Countries.get($route.current.params.slug).then(function(response){
               $scope.country = response;
            });
        }

        Place.getAll().then(function(response){
            $scope.places = response;
        });

    $scope.saveCountry = function(){
        var country = angular.copy($scope.country);
        country.place = {__type: "Pointer", className: "Place", objectId: country.place};
        if(formAction === 'create'){
         Countries.create(country).then(function(){
             $location.path('/');
         });
        } else {
            Countries.update($scope.country.objectId, country).then(function(){
                $location.path('/');
            });
        }
    };
}]);