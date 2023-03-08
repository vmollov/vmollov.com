angular.module('vmMusic').controller('headerCtrl', [
    '$scope',
    '$location',
    function($scope, $location){
        'use strict';

        var
            parentElement = angular.element(".banner"),
            // regularBanner = angular.element(".regularBanner"),
            homeBanner = angular.element(".homeBanner");

            //helper functions
            /*isCurrentPageHome = function(){
                return $location.$$path === "/";
            },*/
            /*swapBannerElements = function(removeElement, displayElement, parentElement){
                removeElement.animate({
                    opacity: 0
                }, 200, function(){
                    parentElement.animate({
                        height: displayElement.height()
                    }, 300, function(){
                        displayElement.css("display", "inline");
                        displayElement.animate({
                            opacity:1
                        });
                        removeElement.css("display", "none");
                    });
                });
            };*/

        /*$scope.$watch(
            function(){
                return $location.$$path;
            },
            function(){
                if(isCurrentPageHome()) { //transition to home
                    swapBannerElements(regularBanner, homeBanner, parentElement);
                } else { //transition away from home
                    swapBannerElements(homeBanner, regularBanner, parentElement);
                }
            }*/
        // );

        angular.element(window).resize(function(){ //event listener to resize the banner container
            parentElement.height(
                // isCurrentPageHome() ? homeBanner.height():regularBanner.height()
              homeBanner.height()
            );
        });

        // $scope.displayFeatureEvent = isCurrentPageHome;
        $scope.displayFeatureEvent = function () {return true;};
    }
]);
