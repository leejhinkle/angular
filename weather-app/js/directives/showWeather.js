/**
 * Created by leejhinkle on 8/9/15.
 */


app.directive('showWeather', function() {
    return {
        restrict: 'E',
        scope: {
            info : '='
        },
        templateUrl: 'js/directives/showWeather.html',
        link: function(scope){
            scope.buttonText = "Show weather",


            scope.getInfo = function(city){
                alert('Show weather in ' + city);

                app.factory('weather', ['$http', function($http) {

                    return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city)
                        .success(function(data) {
                            console.log(data);
                            return data;
                        })
                        .error(function(err) {
                            console.log("error")
                            return err;
                        });
                }]);
            }
        }
    };
});