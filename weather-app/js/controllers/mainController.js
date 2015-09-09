/**
 * Created by leejhinkle on 8/9/15.
 */
app.controller('mainController', ['$scope','weather', function($scope, weather){
    //the weather factory is going to be used by the main controller, so we need to include it above
    $scope.showWeath = false;
    $scope.title = "Weather";
    $scope.getWeather = function (city){
        //now we access the weather factory and use ITS getWeather function, passing in city
        weather.getWeather(city)
            .success(function(data){
                $scope.forecast = data;
            })
            .error(function(err)
            {
                console.log(err);
            });



        //need to have passed in factory in order to make sure I can use it.  Have method in
        //factory weather I can call from here
        //weather.

    }
}]);