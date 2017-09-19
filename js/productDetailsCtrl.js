angular
  .module("assessment")
  .controller("productDetailsCtrl", function($scope, $stateParams, shopSrv) {
    $scope.Id = $stateParams.id;
    $scope.getDetails = function() {
      shopSrv.getDetails($scope.Id).then(response => {
        $scope.inventory = response.data;
      });
    };

    $scope.getDetails();
  });
