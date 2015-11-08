describe("TourService", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var TourMock = {};
    var httpBackend = {};
    var tourListResponse = {};
    var tourResponse = {};
    var createResponse = {};
    var updateResponse = {};

    beforeEach(inject(function($httpBackend, Tours){
        httpBackend = $httpBackend;
        TourMock = Tours;
        tourListResponse = httpBackend.whenGET("https://api.parse.com/1/classes/Tour?include=Country,place,hotel");
        tourResponse = httpBackend.whenGET("https://api.parse.com/1/classes/Tour/1?include=Country,place,hotel");
        createResponse = httpBackend.whenPOST("https://api.parse.com/1/classes/Tour");
        updateResponse = httpBackend.whenPUT("https://api.parse.com/1/classes/Tour/1");
    }));

    beforeEach(function(){
        httpBackend.whenGET("travels.html").respond(200);
    });

    describe("#getAll()", function(){
        it("return tours list", function(){
            var toursList = [];
            var tours = {results: [{id: 1, name: "AAA", description: "BBB", price: 100}]};
            tourListResponse.respond(200, tours);
            TourMock.getAll().then(function(response){
                toursList = response;
            });
            httpBackend.flush();
            expect(tours.results).toEqual(toursList);
        });
    });

    describe("#get", function(){
        it("return tour with id", function(){
            var tourData = null;
            var tour = {id: 1, name: "AAA"};
            tourResponse.respond(200, tour);
            TourMock.get(tour.id).then(function(response){
                tourData = response;
            });
            httpBackend.flush();
            expect(tourData).toEqual(tour);
        });
    });

    describe("#create", function(){
        it("create a new tour", function(){
            var tourData = null;
            var tour = {id: 1, name: "AAA"};
            createResponse.respond(200, tour);
            TourMock.create(tour).then(function(response){
               tourData = response;
            });
            httpBackend.flush();
            expect(tour).toEqual(tour);
        });
    });

    describe("#update", function(){
        it("update an existing tour", function(){
            var serverTour = null;
            var tour = {id: 1, name: "BBB"};
            tour.name = "AAA";
            updateResponse.respond(200, tour);
            TourMock.update(tour.id, tour).then(function(response){
                serverTour = response;
            });
            httpBackend.flush();
            expect(tour).toEqual(tour);
        });
    });
});