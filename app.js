angular.module('travelerjs', ['ngRoute'])
    .config(function($routeProvider, $locationProvider, $httpProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'travels.html',
                controller: 'TravelsController',
                resolve: {
                    tours: ['Tours', function(Tours){
                        return Tours.getAll();
                    }]
                }
            })
            .when('/admin/tours/:slug/edit', {
                templateUrl: 'form.html',
                controller: 'ToursFormController',
                resolve: {
                    tour: ['Tours', '$route', function(Tours, $route){
                        return Tours.get($route.current.params.slug);
                    }],
                    countries: ["Countries", function(Countries){
                        return Countries.getAll();
                    }],
                    formAction: function(){
                        return "edit";
                    }
                }
            })
            .when('/places', {
                templateUrl: 'places_list.html',
                controller: 'PlacesController',
                resolve: {
                    places: ['Place', function(Place){
                        return Place.getAll();
                    }]
                }
            })
            .when('/admin/places/new', {
                templateUrl: 'place_form.html',
                controller: 'PlacesFormController',
                resolve: {
                    formAction: function(){
                        return "create";
                    },
                    place: function(){
                        return {};
                    }
                }
            })
            .when('/admin/places/:id/edit', {
                templateUrl: 'place_form.html',
                controller: 'PlacesFormController',
                resolve: {
                    formAction: function(){
                        return "edit";
                    },
                    place: ['Place', '$route', function(Place, $route){
                        return Place.get($route.current.params.id);
                    }]
                }
            })
            .when('/admin/tours/new', {
                templateUrl: 'form.html',
                controller: 'ToursFormController',
                resolve: {
                    formAction: function(){
                        return "create";
                    },
                    countries: ["Countries", function(Countries){
                        return Countries.getAll();
                    }],
                    tour: function(){
                        return {};
                    }
                }
            })
            .when('/tours/:slug', {
                templateUrl: "tour.html",
                controller: 'TourDetailController',
                resolve: {
                    tour: ['Tours', '$route', function(Tours, $route){
                      return Tours.get($route.current.params.slug);
                    }]
                }
            })
            .when('/admin/countries/new', {
                templateUrl: 'country_form.html',
                controller: 'CountryFormController',
                resolve: {
                    formAction: function(){
                        return "create";
                    },
                    country: function(){
                        return {};
                    },
                    places: ['Place', function(Place){
                       return Place.getAll();
                    }]
                }
            })
            .when('/admin/countries', {
                templateUrl: 'countries_list.html',
                controller: 'CountriesController',
                resolve: {
                    countries: ['Countries', function(Countries){
                        return Countries.getAll();
                    }]
                }
            })
            .when('/admin/countries/:slug/edit', {
                templateUrl: 'country_form.html',
                controller: 'CountryFormController',
                resolve: {
                    country: ['Countries', '$route', function(Countries, $route){
                        return Countries.get($route.current.params.slug)
                    }],
                    formAction: function(){
                        return "edit";
                    },
                    places: ['Place', function(Place){
                        return Place.getAll();
                    }]
                }
            })
            .when('/countries', {
                templateUrl: 'countries_list.html',
                controller: 'CountriesController',
                resolve: {
                    countries: ['Countries', function(Countries){
                        return Countries.getAll();
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.common = {
            "X-Parse-Application-Id": "v2AEWIGP7tTYAoCD8M6Jm6MiXrAm9gP2jTeVHvFK",
            "X-Parse-REST-API-Key": "B60EXnlZa9LUgAqN7KmlXV5hAuM8NvqzKP4IFGj1"
        };
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


