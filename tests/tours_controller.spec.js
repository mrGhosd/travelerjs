describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];
    var tours = [];

    beforeEach(inject(function($controller, $httpBackend){
        httpBackend = $httpBackend;
        $controller('TravelsController', {$scope: $scope, countries: countries, tours: tours});

    }));

    describe('Controller initialization', function(){
        it('sets title to "Список туров"', function(){
            expect($scope.title).toBe('Список туров');
        });

        it('sets tours to resolved value', function(){
            expect($scope.tours).toEqual(tours);
        });
    });

    describe('tours list in router resolve', function(){
        it("Make request for tours", function(){
            httpBackend.expectGET("https://api.parse.com/1/classes/Tour?include=Country,place,hotel").respond(200);
            httpBackend.verifyNoOutstandingExpectation();
        });
    });
});