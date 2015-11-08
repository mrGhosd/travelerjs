describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];

    beforeEach(inject(function($controller, $httpBackend){
        httpBackend = $httpBackend;
        var tours = {
            getAll: function(){}
        };

        var countries = {
            getAll:function(){}
        };

        spyOn(tours, 'getAll').and.returnValues([]);
        spyOn(countries, 'getAll').and.returnValues([]);
        $controller('TravelsController', { $scope: $scope, tours: tours, countries: countries });
    }));

    describe('tours list in router resolve', function(){
        it("Make request for tours", function(){
            httpBackend.expectGET("travels.html").respond(200);
            httpBackend.verifyNoOutstandingExpectation();
        });
    });
});