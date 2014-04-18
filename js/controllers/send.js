'use strict';

angular.module('copay.send').controller('SendController',
  function($scope, $rootScope, $location, Socket, controllerUtils) {
    $scope.title = 'Send';

    controllerUtils.handleTransactionByAddress($scope); 

    $scope.sendTest = function() {
      var w    = $rootScope.wallet;
      w.createTx( 'mimoZNLcP2rrMRgdeX5PSnR7AjCqQveZZ4', '12345',function() {
        $rootScope.$digest();
      });
    };
  });
