/**
 * Created by leejhinkle on 11/9/15.
 */

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});