var app = angular.module('SIMS', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        // Home
        .when("/", {templateUrl: "partials/dashboard.html", controller: "mainController"})
        // Pages
        .when("/units/status", {templateUrl: "partials/units-status.html", controller: "unitStatusController"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "mainController"});

}]);