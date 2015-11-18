angular.module('travelerjs').service('ApiRequest', ['$http', '$q', function($http, $q){
    var object = {};

    object.get = function(url, parameters){
        return $http.get(wrapUrl(url), {params: parameters});
    };

    object.post = function(url, parameters) {
        return $http.post(wrapUrl(url), parameters);
    };
    object.put = function(url, parameters) {
        return $http.put(wrapUrl(url), parameters );
    };

    function wrapUrl(url){
        return "https://api.parse.com/1/classes" + url;
    }

    return object;

}]);