/**
 * Created by leejhinkle on 11/9/15.
 */

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

/*
*
* Thanks to Creative Punch: http://creative-punch.net/2014/04/preserve-html-text-output-angularjs/
* For the code assist
*
* */