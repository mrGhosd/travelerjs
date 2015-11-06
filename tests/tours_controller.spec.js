describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];
    var tours = [];

    beforeEach(inject(function($controller, $httpBackend){
        $httpBackend.whenGET('https://api.parse.com/1/classe/Tour').respond(200);
        $controller('TravelsController', {$scope: $scope, countries: countries, tours: tours});
        //Инициализация контроллера

    }));

    describe('Controller initialization', function(){
        it('sets title to "Список туров"', function(){
            expect($scope.title).toBe('Список туров');
        });

        it('sets tours to resolved value', function(){
            expect($scope.tours).toEqual(tours);
        });
    });
});