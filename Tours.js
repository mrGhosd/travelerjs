angular.module('travelerjs').factory('Tours', [ '$http', '$q', 'ApiRequest', function($http, $q, ApiRequest){
    var object = {
        tours: [],
        searchResults: []
    };
    object.getAll = function() {
        return ApiRequest.get("/Tour").then(function(response){
            return response.data.results;
        });
    };

    return object;
}]);