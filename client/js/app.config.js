(function () {
  'use strict';

  angular.module('app')
    .config(config);

    // search results
    // user page to set profile pic, contact info, change password
    // login
    // sign up
    // add package view

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          top: {
            templateUrl: 'js/html/landing/landing.top.html',
            controller: 'NavCtrl'
          },
          main: {
            templateUrl: 'js/html/landing/landing.main.html',
            controller: 'LandingPageCtrl'
          }
        }
      })
      .state('createPackage', {
        url: '/package/create',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/packageCreate/package.create.main.html',
            controller: 'PackageCreateCtrl'
          }
        }
      })
      .state('package', {
        url: '/package/:packageName',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/package/package.main.html',
            controller: 'PackageCtrl'
          }
        }
      })
      .state('search', {
        url: '/search/:searchTerm',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/search/search.main.html',
            controller: 'SearchResultsCtrl'
          }
        }
      })
      .state('user', {
        url: '/user/:userId',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/user/user.main.html',
            controller: 'SearchResultsCtrl'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/signup/signup.main.html',
            controller: 'SignUpCtrl'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          top: {
            template: "<div nav-bar-directive></div>",
            controller: "NavCtrl"
          },
          main: {
            templateUrl: 'js/html/login/login.main.html',
            controller: 'LoginCtrl'
          }
        }
      });
  }

})();
