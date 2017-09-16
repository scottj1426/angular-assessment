angular
  .module("assessment", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      templateUrl: "/views/home.html"
    });
    $stateProvider.state("about", {
      url: "/about",
      templateUrl: "/views/about.html"
    });
    $stateProvider.state("blog", {
      url: "/blog",
      templateUrl: "/views/blog.html"
    });
    $stateProvider.state("shop", {
      url: "/shop",
      templateUrl: "/views/shop.html",
      controller: "shopCtrl"
    });
    $stateProvider.state("logo", {
      url: "/logo",
      templateUrl: "/views/logo.html"
    });
    $stateProvider.state("detail", {
      url: "/productDetail",
      templateUrl: "/views/product-details.html",
      controller: "shopCtrl"
    });

    $urlRouterProvider.otherwise("/");
  });
