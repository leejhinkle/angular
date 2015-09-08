/**
 * Created by leejhinkle on 8/9/15.
 */
var app = angular.module('weather-app',['ngRoute']);




app.config(function($routeProvider){
    $routeProvider
        .when('/:id', {
            controller: 'weatherController',
            templateUrl: 'views/one-day.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

