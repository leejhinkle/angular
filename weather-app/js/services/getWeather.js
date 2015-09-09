/**
 * Created by leejhinkle on 8/9/15.
 */

app.factory('weather', ['$http', function($http) {

    return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Provo')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
