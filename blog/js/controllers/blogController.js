/**
 * Created by leejhinkle on 8/9/15.
 */

//Be sure to inject all services and directives I might use
app.controller('blogController',['$scope', function($scope){

    //Set up the firebase server connection
    $scope.firebaseConnection = new Firebase('https://ng-blog-app-hinkle.firebaseio.com/');

    $scope.usersRef = $scope.firebaseConnection.child('users');
    $scope.createEntry = function(){
        alert("Create entry");
    };
    $scope.getEntries = function(){
        alert("Get entries");
    };
}]);