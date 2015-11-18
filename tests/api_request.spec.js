describe('ApiRequest', function(){
    beforeEach(module('travelerjs'));

    var apiRequest = null;
    var httpBackend = null;

    beforeEach(inject(function(ApiRequest, $httpBackend){
        httpBackend = $httpBackend;
        apiRequest = ApiRequest;
    }));

    beforeEach(function(){
        httpBackend.whenGET("tours/travels.html").respond(200);
    });

    describe('GET request', function(){
        it("make a get request", function(){
            var serverList = [];
            var list = [{id: 1}, {id: 2}];
            httpBackend.expectGET("https://api.parse.com/1/classes/Tour").respond(200, list);
            apiRequest.get('/Tour').then(function(response){
                serverList = response.data;
            });
            httpBackend.flush();
            expect(serverList).toEqual(list);
        });
    });

    describe('POST request', function(){
        it("make a post request", function(){
            var serverObject = [];
            var object = [{id: 1, name: "111"}];
            httpBackend.expectPOST("https://api.parse.com/1/classes/Tour").respond(200, object);
            apiRequest.post('/Tour').then(function(response){
                serverObject = response.data;
            });
            httpBackend.flush();
            expect(serverObject).toEqual(object);
        });
    });

    describe('PUT request', function(){
        it("make a put request", function(){
            var serverTour = {};
            var tour = {objectId: 1, name: "Ololo"};
            httpBackend.expectPUT("https://api.parse.com/1/classes/Tour/"+tour.objectId).respond(200, tour);
            apiRequest.put('/Tour/'+tour.objectId).then(function(response){
                serverTour = response.data;
            });
            httpBackend.flush();
            expect(serverTour).toEqual(tour);
        });
    });
});