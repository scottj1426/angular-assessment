angular.module("assessment").service("shopSrv", function($http) {
  var baseUrl = "https://practiceapi.devmountain.com/products";

  this.getInventory = function() {
    return $http({
      method: "GET",
      url: baseUrl
    });
  };

  this.getDetails = function(id) {
    return $http.get("https://practiceapi.devmountain.com/products/" + id);
  };
});
