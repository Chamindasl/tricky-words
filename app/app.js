myApp = angular.module('myApp', []);

myApp.filter('range', function() {
    return function(input, min, max, step) {
        min = parseInt(min); //Make string input int
        max = parseInt(max);
        for (var i=min; i<max; i+=step)
            input.push(i);
        return input;
    };
});