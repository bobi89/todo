var todo = angular.module('todo', ['angular-jwt']);

todo.controller("coreController", function($scope, $http, AuthService) {
  $scope.formData = {};

  $scope.isLoggedIn = function() {
    return AuthService.isLoggedIn();
  };
});

todo.config(function($httpProvider) {
    $httpProvider.interceptors.push('APIInterceptor');
});
