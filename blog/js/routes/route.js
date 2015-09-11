/**
 * Created by leejhinkle on 11/9/15.
 */

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/mainView/html',
            controller: 'blogController'
        });
        .when('/make-post',{
            templateUrl: 'views/make-post.html',
            controller: 'blogController'
        });
});