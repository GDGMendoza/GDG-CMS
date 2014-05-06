'use strict';

var app = angular.module('gdgContentManagerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'route-segment',
    'view-segment',
    'restangular'
  ]);

app.config(['$routeSegmentProvider', '$routeProvider', '$httpProvider', 'RestangularProvider', function ($routeSegmentProvider, $routeProvider, $httpProvider, RestangularProvider) {
    $httpProvider.defaults.headers = {
        "Content-Type": "application/json"
    };
    RestangularProvider.setBaseUrl('https://127.0.0.1/api/');

    $routeSegmentProvider.options.autoLoadTemplates = true;
    $routeSegmentProvider.when('/', 'login')
        .when('/admin/*', 'admin')
        .when('/admin/event', 'admin.event')
        .when('/admin/post', 'admin.post')
        .segment('login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .segment('admin', {
                templateUrl: 'views/admin.html',
                controller: ['$scope', '$routeSegment', function($scope, $routeSegment){
                    $scope.segment = $routeSegment;
                }]
            })
            .within().segment('event', {
                templateUrl: 'views/event.html',
                controller: 'EventCtrl'
            })
            .segment('post', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl'
            })
        .up();

    $routeProvider.otherwise({redirectTo: '/'});
}]);