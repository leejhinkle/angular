/**
 * Created by leejhinkle on 8/9/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.showWeath = false;
    $scope.title = "Weather";
    $scope.getWeather = function (city, country, count){
        $scope.showWeath = true;

        console.log(city, country, count);
    }
}]);