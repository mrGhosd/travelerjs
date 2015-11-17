describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];
    var Tour = {};
    var Country = {};
    var Places = {};
    var toursResponse = null;
    var countriesResponse = null;
    var placesResponse = null;
    var q = {};
    var controller = {};

    beforeEach(inject(function($controller, $httpBackend, Tours, Countries, Place){
        $controller('TravelsController', { $scope: $scope});
        httpBackend = $httpBackend;
        Tour = Tours;
        Country = Countries;
        Places = Place;

        spyOn(Tours, 'getAll').and.returnValues([]);
        spyOn(Country, 'getAll').and.returnValues([]);
    }));

    beforeEach(function(){
        toursResponse = httpBackend.when('GET', 'https://api.parse.com/1/classes/Tour?include=Country,place,hotel').respond(200);
        countriesResponse = httpBackend.whenGET("https://api.parse.com/1/classes/Country?include=place").respond(200);
        placesResponse = httpBackend.whenGET('https://api.parse.com/1/classes/Place?include=country').respond(200);
        httpBackend.whenGET("tours/travels.html").respond(200);
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('tours list in router resolve', function(){
        beforeEach(function(){
            countriesResponse.respond(200, []);
            placesResponse.respond(200, []);
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
            placesResponse.respond(200, []);
        });

        it("Make request for countries", function(){
            var countries = { results: [{id: 1, name: "USA"}] };
            countriesResponse.respond(200, countries);
            Country.getAll();
            httpBackend.flush();
            expect($scope.countries.length).toBe(1)
        });
    });

    describe("places list load", function(){
        beforeEach(function(){
            toursResponse.respond(200, []);
            countriesResponse.respond(200, []);
        });

        it("Make request for countries", function(){
            var places = { results: [{id: 1, name: "Edmonton"}] };
            placesResponse.respond(200, places);
            Places.getAll();
            httpBackend.flush();
            expect($scope.places.length).toBe(1)
        });
    });


});