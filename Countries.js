angular.module('travelerjs').factory('Countries', [ '$http', '$q', 'ApiRequest', function($http, $q, ApiRequest){
    var object = {
        countries: [],
        searchResults: []
    };
    object.getAll = function() {
        return ApiRequest.get("/Country")
        .then(function(response){
            return response.data.results;
        })
        .catch(function(errors){
            return errors;
        });
    };

    return object;
}]);