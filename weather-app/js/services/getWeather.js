/**
 * Created by leejhinkle on 8/9/15.
 */

app.factory('weather', ['$http', function($http) {
    alert("in the weather factory");
    var city = "Provo";
    var country = "USA";
    var count = "1";
    return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+','+country+'&cnt='+count)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
