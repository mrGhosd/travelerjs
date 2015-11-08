describe("ToursController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var $scope = {};
    var countries = [];
    var Tour = {};
    var toursResponse = null;
    var q = {};
    var controller = {};

    beforeEach(inject(function($controller, $httpBackend, Tours, $q){
        $controller('TravelsController', { $scope: $scope});
        httpBackend = $httpBackend;
        Tour = Tours;
        q = $q;
    }));

    beforeEach(function(){
        toursResponse = httpBackend.when('GET', 'https://api.parse.com/1/classes/Tour?include=Country,place,hotel').respond(200);
        httpBackend.expectGET("https://api.parse.com/1/classes/Country?include=place").respond(200);
        httpBackend.whenGET("travels.html").respond(200);
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('tours list in router resolve', function(){
        it("Make request for tours", function(){
            var tours = JSON.stringify({data: {results: [ {id: 1, name: "ololo"} ]}});
            httpBackend.whenGET('https://api.parse.com/1/classes/Tour?include=Country,place,hotel').respond(200, tours);
            Tour.getAll().then(function(response) {
                console.log(response);
            });
            httpBackend.flush();
            expect($scope.tours.length).toBe(1)
        });
    });


});