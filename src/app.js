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
                templateUrl: 'places/places_list.html',
                controller: 'PlacesController',
                resolve: {
                    places: ['Place', function(Place){
                        return Place.getAll();
                    }]
                }
            })
            .when('/admin/places/new', {
                templateUrl: 'places/create_form.html',
                controller: 'PlacesCreateFormController'
            })
            .when('/admin/places/:id/edit', {
                templateUrl: 'places/edit_form.html',
                controller: 'PlacesUpdateFormController'
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
                templateUrl: 'countries/create_form.html',
                controller: 'CountryCreateFormController'
            })
            .when('/admin/countries/:slug/edit', {
                templateUrl: 'countries/edit_form.html',
                controller: 'CountryUpdateFormController'
            })
            .when('/countries', {
                templateUrl: 'countries/countries_list.html',
                controller: 'CountriesController',
                resolve: {
                    countries: ['Countries', function(Countries){
                        return Countries.getAll();
                    }]
                }
            })

            .when('/hotels', {
                templateUrl: 'hotels/hotels_list.html',
                controller: 'HotelsController',
                resolve: {
                    hotels: ['Hotel', function(Hotel){
                        return Hotel.getAll();
                    }]
                }
            })
            .when('/admin/hotels/new', {
                templateUrl: 'hotels/create_form.html',
                controller: 'HotelsCreateFormController'
            })
            .when('/admin/hotels/:id/edit', {
                templateUrl: 'hotels/edit_form.html',
                controller: 'HotelsUpdateFormController'
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


