angular.module('vmMusic').directive('navigation', [
    '$location',
    function($location){
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/directives/navigation.html',
            scope:{ },
            link: function(scope, element){
                var subMenuContainer = angular.element(element).find("li.hasSub"),
                    menuTitleItem = angular.element(element).find(".menuTitle"),
                    menuItemsContainer = angular.element(element).find(".menuItems"),
                    menuItems = angular.element(element).find(".menuItems li");

                scope.currentPage = function(){
                    if($location.$$path === "/") {
                        return "";
                    }
                    return " - " + $location.$$path.substr(1).toUpperCase();
                };

                subMenuContainer
                    .on('mouseleave',function(){
                        subMenuContainer.toggleClass("hover", false);
                    })
                    .on('click', function(){
                        subMenuContainer.toggleClass("hover");
                    });

                menuTitleItem.on('click', function(){
                    menuTitleItem.toggleClass("menuOpen");
                    menuItemsContainer.toggleClass("menuOpen");
                });

                menuItems.on('click', function(){
                    menuTitleItem.toggleClass("menuOpen", false);
                    menuItemsContainer.toggleClass("menuOpen", false);
                });
            }
        };
    }
]);