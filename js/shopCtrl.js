angular.module("assessment").controller("shopCtrl", function($scope, shopSrv) {
  shopSrv.getInventory().then(function(response) {
    console.log(response);
    $scope.inventory = response.data;
  });

  shopSrv.getDetails().then(function(response) {
    console.log(response);
    $scope.Details = response.data;
  });
});
