describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];
    var Tour = {};
    var Country = {};
    var toursResponse = null;
    var countriesResponse = null;
    var q = {};
    var controller = {};

    beforeEach(inject(function($controller, $httpBackend, Tours, Countries, $q){
        $controller('TravelsController', { $scope: $scope});
        httpBackend = $httpBackend;
        Tour = Tours;
        Country = Countries;
        q = $q;
        spyOn(Tours, 'getAll').and.returnValues([]);
    }));

    beforeEach(function(){
        toursResponse = httpBackend.when('GET', 'https://api.parse.com/1/classes/Tour?include=Country,place,hotel').respond(200);
        countriesResponse = httpBackend.whenGET("https://api.parse.com/1/classes/Country?include=place").respond(200);
        httpBackend.whenGET("travels.html").respond(200);
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('tours list in router resolve', function(){
        beforeEach(function(){
            countriesResponse.respond(200, []);
        });

        it("Make request for tours", function(){
            var tours = { results: [{id: 1, name: "ololo"}] };
            toursResponse.respond(200, tours);
            Tour.getAll();
            httpBackend.flush();
            expect($scope.tours.length).toBe(1)
        });
    });

    describe("countries list load", function(){
        beforeEach(function(){
            toursResponse.respond(200, []);
        });

        it("Make request for countries", function(){
            var countries = { results: [{id: 1, name: "USA"}] };
            countriesResponse.respond(200, countries);
            Country.getAll();
            httpBackend.flush();
            expect($scope.countries.length).toBe(1)
        });
    });


});