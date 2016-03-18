var todo = angular.module('todo', []);

todo.controller("coreController", function($scope, $http, authService) {
  $scope.formData = {};

  $scope.isLoggedIn = function() {
    return authService.isLoggedIn();
  };
});
