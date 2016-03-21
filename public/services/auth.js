todo.service('AuthService', function($window, jwtHelper) {

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
      var tokenPayload = jwtHelper.decodeToken(token);
      // var params = jwtHelper.decodeToken(token);
      // return Math.round(new Date().getTime() / 1000) <= params.exp;
      return true;
    } else {
      return false;
    }
  }

});
