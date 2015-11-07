describe('ApiRequest', function(){
    beforeEach(angular.mock.module('travelerjs'));
    var apiRequest = null;
    var httpBackend = null;

    beforeEach(inject(function(ApiRequest, $httpBackend){
        apiRequest = ApiRequest;
        httpBackend = $httpBackend;
    }));

    it("expect to call parse.com", function(){
        //httpBackend.whenGET("https://api.parse.com/1/classes/Tour").respond(200, [{objectId: 1, title: "Ololo"}]);
        //httpBackend.expect('GET', "https://api.parse.com/1/classes/Tour").respond(200)
        //apiRequest.get('/Tour');
        //httpBackend.flush();
    });

    describe("Initial value", function(){
        it("check that service exists", function() {
            expect(apiRequest).not.toEqual(null);
        });
    });

    describe('GET request', function(){

    });
});