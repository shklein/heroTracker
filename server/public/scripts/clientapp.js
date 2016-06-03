var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/create', {
      templateUrl: '/views/create.html',
      controller: "CreateController"
    })
    .when('/list', {
      templateUrl: '/views/list.html',
      controller: "ListController"
    })
    .otherwise({
      redirectTo: 'create'
    })

}]);
