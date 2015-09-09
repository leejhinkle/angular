/**
 * Created by leejhinkle on 8/9/15.
 */

app.factory('weather', ['$http', function($http) {

    function getWeather (city, country, count){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+','+country+'&units=metric&cnt='+count)
    }
    //returns an object
    return {getWeather: getWeather}; //exposes the function and allows me to call it from other places


}]);
