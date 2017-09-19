angular.module("assessment").controller("shopCtrl", function($scope, shopSrv) {
  shopSrv.getInventory().then(function(response) {
    console.log(response);
    $scope.inventory = response.data;
  });
});
