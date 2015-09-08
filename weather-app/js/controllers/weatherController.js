/**
 * Created by leejhinkle on 8/9/15.
 */

app.controller('weatherController',['$scope', 'weather', function($scope, weather){
    weather.success(function(data){
        $scope.forecast = data;
        console.log(data);
    });
}]);