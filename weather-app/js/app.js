/**
 * Created by leejhinkle on 8/9/15.
 */
var app = angular.module('weather-app',['ngRoute']);




app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'weatherController',
            templateUrl: 'js/views/one-day.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

