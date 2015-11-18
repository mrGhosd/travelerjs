describe("PlacesController", function(){
    beforeEach(angular.mock.module('travelerjs'));

    var service = {};
    var httpBackend = {};
    var controller = {};
    var placesResponse = {};
    var Places = {};
    var scope = {};
    var PlacesMock = {};
    var rootScope = {};

    beforeEach(inject(function($controller, $q, Place, $httpBackend, resolver, $rootScope) {
        Places = Place;
        service = Place;
        rootScope = $rootScope;
        httpBackend = $httpBackend;
        controller = $controller('PlacesController', {
            places: Place.getAll(),
            $scope: scope
        });
    }));

    beforeEach(function() {
        httpBackend.whenGET("tours/travels.html").respond(200);
        httpBackend.whenGET("places/places_list.html").respond(200);
        placesResponse = httpBackend.when('GET', 'https://api.parse.com/1/classes/Place?include=country');
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe("request for getting list of places in route resolve", function(){
        it("return list of places", function(){
            var places = [{id: 1, name: "Ololo"}, {id: 2, name: "Ololo"}];
            placesResponse.respond(200, {results: places});
            httpBackend.flush();
            expect(scope.places.$$state.value).toEqual(places);
        });
    });


});
