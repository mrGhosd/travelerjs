angular.module('travelerjs', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'travels.html',
                controller: 'TravelsController'
            })
            .when('/admin/tours/:slug/edit', {
                templateUrl: 'form.html',
                controller: 'ToursFormController',
                resolve: {
                    formAction: function(){
                        return "edit";
                    }
                }
            })
            .when('/admin/tours/new', {
                templateUrl: 'form.html',
                controller: 'ToursFormController',
                resolve: {
                    formAction: function(){
                        return "create";
                    }
                }
            })
            .when('/tours/:slug', {
                templateUrl: "tour.html",
                controller: 'TourDetailController'
            })
            .when('/admin/countries/new', {
                templateUrl: 'country_form.html',
                controller: 'CountryFormController',
                resolve: {
                    formAction: function(){
                        return "create";
                    }
                }
            })
            .when('/countries', {
                templateUrl: 'countries_list.html',
                controller: 'CountriesController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    })
    .run(function($rootScope, $route, $location){
        $rootScope.$on('$locationChangeStart', function(event, next, current){
          //var nextPath = $location.path;
          //var nextRoute = $route.routes[nextPath] || $route.routes['/tours/:slug'];
          //if(!nextRoute.publicAccess){
          //    alert('You must be signed in!');
          //    $location.path('/');
          //}
        });
    });


