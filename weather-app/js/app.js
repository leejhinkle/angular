/**
 * Created by leejhinkle on 8/9/15.
 */
var app = angular.module('weather-app',['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'weatherController',
            templateUrl: 'views/day.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});