(function () {
  'use strict';
  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['ApiFactory', "$state"];

  function LoginCtrl (ApiFactory, $state) {
    var self = this;
    self.post = function () {
      ApiFactory.post('/login', {
        username: self.username,
        password: self.password
      }).then(function (result) {
        // TODO: if err, show err, else redirect
        self.username = '';
        self.password = '';
        if (result.error) {
          console.log('error: ', result.error);
        } else if (result.token) {
          localStorage.setItem('token', result.token);
          $state.go('main');
        }
      });
    };

  }
})();
