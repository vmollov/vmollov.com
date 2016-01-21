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
                    menuTitleItem = angular.element(element).find(".menuTitle"), //only used for phone size screens
                    nonMenuTitleItems = angular.element(element).find("ul li:not(.menuTitle)"),
                    getLeafMenuItemOn = function(){
                        return angular.element(element).find(".menuItemOn:not(.hasSub)");

                    };

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
                    nonMenuTitleItems.toggleClass("menuItemOn");
                    getLeafMenuItemOn()
                        .off('click')
                        .on('click', function(){
                            nonMenuTitleItems.toggleClass("menuItemOn", false);
                        });
                });
            }
        };
    }
]);