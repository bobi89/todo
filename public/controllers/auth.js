todo.controller("authController", function($scope, $http, authService) {
  $scope.formData = {};

  $scope.logIn = function() {
    $http.post('/api/auth', $scope.formData)
      .success(function(data) {
        authService.saveToken(data);
        $scope.formData = {}; // clear the form so our user is ready to enter another
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.logOut = function() {
    authService.removeToken();
  };
});
