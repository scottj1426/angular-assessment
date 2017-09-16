angular
  .module("assessment", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      templateUrl: "/js/views/home.html"
    });
    $stateProvider.state("about", {
      url: "/about",
      templateUrl: "/js/views/about.html"
    });
    $stateProvider.state("blog", {
      url: "/blog",
      templateUrl: "/js/views/blog.html"
    });
    $stateProvider.state("shop", {
      url: "/shop",
      templateUrl: "./js/views/shop.html",
      controller: "shopCtrl"
    });
    $stateProvider.state("logo", {
      url: "/logo",
      templateUrl: "/js/views/logo.html"
    });
    $stateProvider.state("detail", {
      url: "/productDetail",
      templateUrl: "/js/views/product-details.html",
      controller: "shopCtrl"
    });

    $urlRouterProvider.otherwise("/");
  });
