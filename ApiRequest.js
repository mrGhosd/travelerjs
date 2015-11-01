angular.module('travelerjs').service('ApiRequest', ['$http', '$q', function($http, $q){
    var object = {};

    object.get = function(url, parameters){
        return $http.get(wrapUrl(url), {params: parameters})
            .then(function(response){
                return response;
            })
            .catch((function(errors){
                throw errors;
            }))
    };

    object.post = function(url, parameters) {
        return $http.post(wrapUrl(url), parameters  )
            .then(function(response){
                return response;
            })
            .catch((function(errors){
                throw errors;
            }))
    };

    function wrapUrl(url){
        return "https://api.parse.com/1/classes" + url;
    }

    return object;

}]);