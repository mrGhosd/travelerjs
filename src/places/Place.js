angular.module('travelerjs').factory('Place', [ '$http', 'ApiRequest', function($http, ApiRequest){
    var object = {};

    object.getAll = function() {
        return ApiRequest.get("/Place?include=country").then(function(response){
            return response.data.results;
        });
    };

    object.get = function(id){
        return ApiRequest.get("/Place/"+id)
            .then(function(response){
                return response.data;
            });
    };

    object.create = function(params){
        return ApiRequest.post("/Place", params)
            .then(function(response){
                return response.data;
            });
    };

    object.update = function(id, params){
        return ApiRequest.put("/Place/"+id, params)
            .then(function(response){
                return response.data;
            });
    };

    object.forCountry = function(countryId){
        return ApiRequest.get("/Place", {'where': {'country': {'__type': 'Pointer', 'className': 'Country', 'objectId': countryId}}, include: 'country'})
        .then(function(response){
            return response.data.results;
        });
    };

    return object;
}]);