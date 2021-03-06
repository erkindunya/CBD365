﻿module myApp {

  var app = angular.module("myApp", ['ngRoute']);

  app.config( ($locationProvider: ng.ILocationProvider,
               $routeProvider: ng.route.IRouteProvider) => {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/", {
        templateUrl: 'App/views/home.html',
        controller: "homeController",
        controllerAs: "vm"
      })
      .when("/products", {
        templateUrl: 'App/views/products.html',
        controller: "productsController",
        controllerAs: "vm"
      })
      .when("/products/showcase", {
        templateUrl: 'App/views/productsShowcase.html',
        controller: "productShowcaseController",
        controllerAs: "vm"
      })
      .otherwise({ redirectTo: "/" });

  });
}