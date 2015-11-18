angular.module('travelerjs').factory('Tours', [ '$http', 'ApiRequest', function($http, ApiRequest){
    var object = {
        tours: [],
        searchResults: []
    };

    object.getAll = function() {
        return ApiRequest.get("/Tour?include=Country,place,hotel")
        .then(function(response){
            return response.data.results;
        });
    };

    object.get = function(id){
        return ApiRequest.get("/Tour/"+id+"?include=Country,place,hotel")
        .then(function(response){
            return response.data;
        });
    };

    object.create = function(params){
        return ApiRequest.post("/Tour", params)
            .then(function(response){
                return response.data;
            });
    };

    object.update = function(id, params){
        return ApiRequest.put("/Tour/"+id, params)
            .then(function(response){
                return response.data;
            });
    };

    return object;
}]);