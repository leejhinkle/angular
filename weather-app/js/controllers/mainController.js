/**
 * Created by leejhinkle on 8/9/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.title = "Weather";
    $scope.getWeather = function (city, country, count){


        console.log(city, country, count);
    }
}]);