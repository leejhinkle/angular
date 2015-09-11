/**
 * Created by leejhinkle on 11/9/15.
 */

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/mainView.html',
            controller: 'blogController'
        })
        .when('/make-post',{
            templateUrl: 'js/views/make-post.html',
            controller: 'blogController'
        });
});