/**
 * Created by leejhinkle on 9/9/15.
 */

var firebaseConnection = new Firebase('https://ng-blog-app-hinkle.firebaseio.com/');

firebaseConnection.set({
    object1: "Hello World!",
    object2: "The ferrets are on fire",
    post: {
        author: "Nathan",
        entry: "Chocolate microbes"
    }
});