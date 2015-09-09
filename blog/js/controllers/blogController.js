/**
 * Created by leejhinkle on 8/9/15.
 */

//Be sure to inject all services and directives I might use
app.controller('blogController',['$scope', function($scope){
    $scope.createEntry = function(){
        alert("Create entry");
    };
    $scope.getEntries = function(){
        alert("Get entries");
    };
}]);