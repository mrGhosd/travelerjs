angular.module('travelerjs').factory('Place', [ '$http', '$q', 'ApiRequest', function($http, $q, ApiRequest){
    var object = {
        places: [],
        searchResults: []
    };

    object.getAll = function() {
        return ApiRequest.get("/Place").then(function(response){
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

    return object;
}]);