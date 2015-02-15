describe('vmollov.com', function(){
    'use strict';

    describe('home page', function(){
        browser.get('/');

        it('should display the big banner', function(){
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeTruthy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeFalsy();
        });
    });
});