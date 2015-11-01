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

    object.get = function(id){
        return ApiRequest.get("/Country/"+id)
            .then(function(response){
                return response.data;
            })
            .catch(function(errors){
                return errors;
            });
    };

    object.create = function(country){
        return ApiRequest.post("/Country", country)
            .then(function(response){
                return response.data;
            })
            .catch(function(errors){
                return errors;
            });
    };

    object.update = function(id, country){
        return ApiRequest.put("/Country/"+id, country)
            .then(function(response){
                return response.data;
            })
            .catch(function(errors){
                return errors;
            });
    }

    return object;
}]);