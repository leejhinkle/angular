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
    $scope.getEntries = $scope.entryRef.on('value', function(snapshot){
        console.log(snapshot.val());
        $scope.entries = snapshot.val();
    }, function(errorObject){
        console.log("There was an error: " + errorObject);
    });






    $scope.submitEntry = function(entry, entryText){
        //write to fB DB
        $scope.entryRef.update({entry : entryText});
        //$scope.entryRef.on(child_added)
    };

}]);