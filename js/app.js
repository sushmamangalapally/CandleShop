var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/candles", {
            templateUrl: "partials/candle-list.html",
            controller: "CandleListCtrl"
        })
        .when("/cart", {
            templateUrl: "partials/cart-list.html",
            controller: "CartListCtrl"
        })
    .otherwise({
        redirectTo: "/candles"
    });
});

myApp.factory("cartService", function(){
    var cart = [];

    return {
        getCart: function(){
            return cart;
        },
        addToCart: function(candle){
            cart.push(candle);
            alert("candle:" + " " + candle.name + " added to your cart successfully.");
        },
        buy: function(candle){
            alert("Thanks for buying: "+ candle.name);
        }
    }
});

myApp.factory("candleService", function(){
    var candles = [
        {
            imgUrl: "http://www.ikea.com/gb/en/images/products/sinnlig-scented-block-candle-apple-and-pear-green__0499434_pe630337_s3.jpg",
            name: "Green Candle",
            descrip: "Take a sniff of fresh green apples!",
            madein: "Washington, USA",
            when: "12/10/2016",
            price: 5.60

        },
        {
            imgUrl: "https://cdn.quickcandles.com/media/catalog/product/cache/2/small_image/295x295/c134a546236788ff07c98124e864ef5f/_/m/_mg_1866.jpg",
            name: "Violet Candle",
            descrip: "3\"x3\" Lavender",
            madein: "Switzerland",
            when: "01/08/2017",
            price: 7.60

        },
        {
            imgUrl: "http://www.homedepot.com/catalog/productImages/300/e1/e132b342-1600-49d4-ad2f-f66a39bd7b3c_300.jpg",
            name: "Yellow Candle",
            descrip: "3\"x6\" Lemon",
            madein: "Georgia, USA",
            when: "01/17/2017",
            price: 4.50

        },
        {
            imgUrl: "http://www.beverlyhillscandle.com/media/catalog/product/cache/2/image/660x660/9df78eab33525d08d6e5fb8d27136e95/c/p/cpz-077_n_3_3_blue_pillar_candle.jpg",
            name: "Blue Candle",
            descrip: "3\"x3\" Ocean Breeze",
            madein: "California, USA",
            when: "03/14/2017",
            price: 3.20

        }
    ];

    return {
        getCandles: function() {
            return candles;
        }
    }
});

myApp.controller("CartListCtrl", function($scope, cartService) {
    $scope.cart = cartService.getCart();

    $scope.buy = function(candle) {
        cartService.buy(candle);
    }
});

myApp.controller("HeaderCtrl", function($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "Dear Candles";

});

myApp.controller("CandleListCtrl", function($scope, candleService, cartService) {
    $scope.candles = candleService.getCandles();

    $scope.addToCart = function(candle){
        cartService.addToCart(candle);
    }


});