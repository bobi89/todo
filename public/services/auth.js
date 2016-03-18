todo.service('authService', function($window) {

  this.saveToken = function(token) {
    $window.localStorage['jwtToken'] = token;
  }

  this.getToken = function() {
    return $window.localStorage['jwtToken'];
  }

  this.removeToken = function() {
    $window.localStorage.removeItem('jwtToken')
  }

  this.isLoggedIn = function() {
    var token = this.getToken();
    if(token) {
      return true;
    } else {
      return false;
    }

    // if(token) {
    //   var params = authService.parseJwt(token);
    //   return Math.round(new Date().getTime() / 1000) <= params.exp;
    // } else {
    //   return false;
    // }
  }

});
