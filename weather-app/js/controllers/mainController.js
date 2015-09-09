/**
 * Created by leejhinkle on 8/9/15.
 */
app.controller('mainController', ['$scope','weather', function($scope, weather){
    //the weather factory is going to be used by the main controller, so we need to include it above
    $scope.showWeath = false;
    $scope.title = "Weather";
    $scope.getWeather = function (city, country, count){
        //now we access the weather factory and use ITS getWeather function, passing in city
        if (country === undefined)
        {
            alert("Please enter a country name");
        }
        else {
            weather.getWeather(city, country, count)
                .success(function (data) {
                    $scope.forecast = data;
                    console.log($scope.forecast);
                })
                .error(function (err) {
                    console.log(err);
                });
        }


        //need to have passed in factory in order to make sure I can use it.  Have method in
        //factory weather I can call from here
        //weather.

    }

}]);