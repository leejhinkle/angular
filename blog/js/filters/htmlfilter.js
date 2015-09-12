/**
 * Created by leejhinkle on 11/9/15.
 */

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

/*
 * This ties in with the filter on the blog/index.html page to take the strings stored in the firebase
 * DB and output them as html, rather than as a string.  Apparently ng wants text input to be safe.
 * I had to find a work-around.
 * */

/*
*
* Thanks to Creative Punch: http://creative-punch.net/2014/04/preserve-html-text-output-angularjs/
* For the code assist
*
* */