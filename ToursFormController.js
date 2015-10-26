angular.module('travelerjs').controller('ToursFormController', function($scope, $location, $routeParams, formAction){
    $scope.tourAction = '';
    $scope.showForm = false;
    $scope.tourIndex = null;
    var tours = $scope.tours = localStorage['tours'] ? JSON.parse(localStorage['tours']) : [];
    $scope.countries = localStorage['countries'] ? JSON.parse(localStorage['countries']) : [];
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
        var tour = { title: tourForm.title, country: tourForm.country, price: tourForm.price,
        text: tourForm.text };
        formAction === 'create' ? $scope.tours.push(tour) : $scope.tours[$scope.tourIndex] = tour;
        $scope.tourIndex = null;
        saveToLocalStorage();
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
});