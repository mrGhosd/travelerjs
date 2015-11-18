angular.module('travelerjs').factory('Hotel', [ '$http', 'ApiRequest', function($http, $q, ApiRequest){
    var object = {
        hotels: [],
        searchResults: []
    };

    object.getAll = function() {
        return ApiRequest.get("/Hotel").then(function(response){
            return response.data.results;
        });
    };

    object.get = function(id){
        return ApiRequest.get("/Hotel/"+id)
            .then(function(response){
                return response.data;
            });
    };

    object.create = function(params){
        return ApiRequest.post("/Hotel", params)
            .then(function(response){
                return response.data;
            });
    };

    object.update = function(id, params){
        return ApiRequest.put("/Hotel/"+id, params)
            .then(function(response){
                return response.data;
            });
    };

    return object;
}]);