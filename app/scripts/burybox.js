/* global angular */
(function(window) {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular'])
  .config(function($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: '/views/landing.html'
    });
    $routeProvider.when('/makebox', {
      templateUrl: '/views/makebox.html'
    });
    $routeProvider.when('/viewbox', {
      templateUrl: '/views/viewbox.html'
    });

//path eventually to go here with storage data
//.config(function(RestangularProvider){
//  RestangularProvider.setBaseUrl('https:')
//})

})(window);
