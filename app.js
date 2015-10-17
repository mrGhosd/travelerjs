var app = angular.module('travelerjs', []);

app.controller('IndexController', function($scope){
    $scope.title = "Список туров";
    $scope.tourAction = '';
    $scope.showForm = false;
    $scope.tourIndex = null;
    $scope.tours = localStorage['tours'] ? JSON.parse(localStorage['tours']) : [];
    $scope.toggleTourForm = function(){
        $scope.tourAction = 'create';
        $scope.tour = null;
        $scope.showForm = !$scope.showForm;
    };
    $scope.saveTour = function(){
        var tourForm = $scope.tour;
        var tour = {
                title: tourForm.title,
                text: tourForm.text,
                price: tourForm.price,
                country: tourForm.country
        };
        $scope.tourAction === 'create' ? $scope.tours.push(tour) : $scope.tours.splice($scope.tourIndex, 1, tour);
        $scope.showForm = false;
        $scope.tourIndex = null;
        saveToLocalStorage();
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