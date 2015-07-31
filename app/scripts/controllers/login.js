/* global Firebase angular */
  (function() {
    'use strict';

  angular.module('burybox').controller('LoginController', function($location, $firebase) {

  var login = self;

  var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
  ref.authWithOAuthPopup('google', function(error, authData){
    if (error) {
      console.log('error');
    } else {
      console.log('authenticated', authData);
    }
  });
    ref.onAuth(function(authData) {
      if (authData) {
        ref.child('user').child(authData.uid).update({
          provider: authData.provider,
          name: authData.google.displayName,
          image: authData.google.profileImageURL
        });
      }
    });
  });

  })();
