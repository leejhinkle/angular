/**
 * Created by leejhinkle on 8/9/15.
 */

//Be sure to inject all services and directives I might use
app.controller('blogController',['$scope', '$http', function($scope, $http){

    //Set up the firebase server connection
    $scope.firebaseConnection = new Firebase('https://ng-blog-app-hinkle.firebaseio.com/');

    //read from server and get tot

    $scope.usersRef = $scope.firebaseConnection.child('users');
    $scope.entryRef = $scope.firebaseConnection.child('entries');

    //discover number of entries
    $scope.createEntry = function(){


    };
    $scope.submitEntry = function(entryIndex, entry){
        //write to fB DB
        $scope.entryRef.update({entryIndex : entry});
    };

    $scope.getEntries = function(){
        alert("Get entries");
    };
}]);