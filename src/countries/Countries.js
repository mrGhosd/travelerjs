angular.module('travelerjs').factory('Countries', [ '$http', 'ApiRequest', function($http, ApiRequest){
    var object = {};

    object.getAll = function() {
        return ApiRequest.get("/Country?include=place")
        .then(function(response){
            return response.data.results;
        });
    };

    object.get = function(id){
        return ApiRequest.get("/Country/"+id+"?include=place")
            .then(function(response){
                return response.data;
            });
    };

    object.create = function(country){
        return ApiRequest.post("/Country", country)
            .then(function(response){
                return response.data;
            });
    };

    object.update = function(id, country){
        return ApiRequest.put("/Country/"+id, country)
            .then(function(response){
                return response.data;
            });
    };

    return object;
}]);