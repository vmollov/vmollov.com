describe('navigation directive', function(){
    'use strict';

    var scope, element, location;

    beforeEach(module('vmMusic', 'templates'));

    beforeEach(inject(function($injector){
        var compile = $injector.get('$compile');

        scope = $injector.get('$rootScope').$new();
        location = $injector.get('$location');
        element = '<navigation> </navigation>';

        element = compile(element)(scope);
        scope.$digest();
    }));

    it('should display a dynamic title in the menu title when not on home page', function(){
        location.$$path = '/';
        scope.$digest();
        expect(angular.element(element).find('.menuTitle > a').html()).toBe('MENU');
        location.$$path = '/calendar';
        scope.$digest();
        expect(angular.element(element).find('.menuTitle > a').html()).toBe(('MENU - CALENDAR'));
    });

    /*it('should toggle the hover class on sub menu container items', function () {
        var subMenuContainer = angular.element(element).find("li.hasSub");

        expect(subMenuContainer.attr('class')).not.toContain('hover');
        subMenuContainer.click();
        expect(subMenuContainer.attr('class')).toContain(('hover'));
        subMenuContainer.mouseleave();
        expect(subMenuContainer.attr('class')).not.toContain('hover');
    });
*/
    it('should expand the menu on menuTitle click (phone view)', function(){
        var menuItems = angular.element(element).find(".menuItems");
        var menuTitle = angular.element(element).find(".menuTitle");

        expect(menuItems.hasClass('menuOpen')).toBe(false);
        expect(menuTitle.hasClass('menuOpen')).toBe(false);
        menuTitle.click();
        expect(menuItems.hasClass('menuOpen')).toBe(true);
        expect(menuTitle.hasClass('menuOpen')).toBe(true);
        menuTitle.click();
        expect(menuItems.hasClass('menuOpen')).toBe(false);
        expect(menuTitle.hasClass('menuOpen')).toBe(false);
    });
});