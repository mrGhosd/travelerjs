angular.module('travelerjs', ['ngRoute'])
    .config(function($routeProvider, $locationProvider, $httpProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'tours/travels.html',
                controller: 'TravelsController'
            })

            .when('/admin/tours/:slug/edit', {
                templateUrl: 'tours/edit_form.html',
                controller: 'TourUpdateFormController'
            })
            .when('/admin/tours/new', {
                templateUrl: 'tours/create_form.html',
                controller: 'TourCreateFormController'
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
                    }
                }
            })
            .when('/admin/places/:id/edit', {
                templateUrl: 'place_form.html',
                controller: 'PlacesFormController',
                resolve: {
                    formAction: function(){
                        return "edit";
                    }
                }
            })
            .when('/tours/:slug', {
                templateUrl: "tours/tour.html",
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
                    }
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
                    formAction: function(){
                        return "edit";
                    }
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

            .when('/hotels', {
                templateUrl: 'hotels_list.html',
                controller: 'HotelsController',
                resolve: {
                    hotels: ['Hotel', function(Hotel){
                        return Hotel.getAll();
                    }]
                }
            })
            .when('/admin/hotels/new', {
                templateUrl: 'hotels_form.html',
                controller: 'HotelsFormController',
                resolve: {
                    formAction: function(){
                        return 'create';
                    }
                }
            })
            .when('/admin/hotels/:id/edit', {
                templateUrl: 'hotels_form.html',
                controller: 'HotelsFormController',
                resolve: {
                    formAction: function(){
                        return 'edit';
                    }
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
        });
    });


