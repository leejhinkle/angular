/**
 * Created by leejhinkle on 8/9/15.
 */

//Be sure to inject all services and directives I might use
app.controller('blogController',['$scope', '$http', function($scope, $http){

    $scope.newPost = '';

    //Set up the firebase server connection
    $scope.firebaseConnection = new Firebase('https://ng-blog-app-hinkle.firebaseio.com/');

    //read from server and get tot

    $scope.usersRef = $scope.firebaseConnection.child('users');
    $scope.entryRef = $scope.firebaseConnection.child('entries');
    $scope.showEntries = false;
    $scope.showButtonText = 'Show Blog Entries';

    //get entries from db
    $scope.entryRef.on('value', function (snapshot) {
        console.log(snapshot.val());

        $scope.entries = snapshot.val();
        $scope.entryNum
        console.log(Object.keys($scope.entries).length);
    }, function (errorObject) {
        console.log("There was an error: " + errorObject);
    });




    //show/hide the entries and change the number of buttons
    $scope.getEntries = function() {
        if ($scope.showEntries){
            $scope.showEntries = false;
            $scope.showButtonText = 'Show blog entries';
        }
        else {
            $scope.showEntries = true;
            $scope.showButtonText = 'Hide Blog Entries';
        }
    };


    $scope.submitEntry = function(){
        //write to fB DB
        if ($scope.entries != null) {
            $scope.entryNum = Object.keys($scope.entries).length + 1;
        }
        else{
            $scope.entryNum = 1;
        }
        $scope.entryRef.push({
            entryNum : $scope.entryNum,
            entry : $scope.newPost
        });
        //$scope.entryRef.on(child_added)
        $scope.newPost = '';

    };

}]);