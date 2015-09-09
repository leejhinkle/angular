/**
 * Created by leejhinkle on 9/9/15.
 */

var Firebase = require('firebase');

var firebaseConnection = new Firebase('https://ng-blog-app-hinkle.firebaseio.com/');

firebaseConnection.set({
    object1: "Hello World!"
});