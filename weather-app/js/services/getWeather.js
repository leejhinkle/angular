/**
 * Created by leejhinkle on 8/9/15.
 */

app.factory('weather', ['$http', function($http) {

    function getWeather (city){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city)

    }

    return {getWeather: getWeather}; //exposes the funciton and allows me to call it from other places


}]);
