todo.service('APIInterceptor', function($rootScope, AuthService) {
    var service = this;

    service.request = function(config) {
        var access_token = AuthService.getToken();

        if (access_token) {
            config.headers.authorization = access_token;
        }
        return config;
    };

    // service.responseError = function(response) {
    //     if (response.status === 401) {
    //         $rootScope.$broadcast('unauthorized');
    //     }
    //     return response;
    // };
})
