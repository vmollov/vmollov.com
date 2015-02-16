describe('vmollov.com', function(){
    'use strict';

    describe('home page', function(){
        beforeEach(function(){
            browser.get('/');
        });
        xit('should display the big banner', function(){
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeTruthy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeFalsy();
        });
        xit('should have a header event element', function(){
            expect(element(by.css('#hEvent'))).toBeDefined();
        });
        xit('should contain a welcome message', function(){
            expect(element(by.css('#h_welcome'))).toBeDefined();
            expect(element(by.css('#h_welcome > h2')).getInnerHtml()).toBe('Welcome');
            expect(element(by.binding('welcomeMessage'))).toBeDefined();
            expect(element(by.binding('welcomeMessage')).$$('p').count()).toBeGreaterThan(0);
        });
        xit('should contain a news section', function(){
            expect(element(by.css('#h_news'))).toBeDefined();
            expect(element(by.css('#h_news > h2')).getInnerHtml()).toBe('News');
            expect(element.all(by.repeater('newsItem in news')).count()).toBeGreaterThan(0);
        });
        xit('should contain a features section', function(){
            expect(element(by.css('.h_videoFeature'))).toBeDefined();
            expect(element.all(by.repeater('video in videoFeatures')).count()).toBeGreaterThan(0);
            expect(element(by.css('.h_audioFeature'))).toBeDefined();
            expect(element.all(by.repeater('audio in audioFeatures')).count()).toBeGreaterThan(0);
        });
        xit('should play/stop a featured video', function(){
            element.all(by.repeater('video in videoFeatures')).first().$$('a').click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isDisplayed()).toBeTruthy();
            element(by.css('#videoPlayerContainer .closeButton')).click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isPresent()).toBeFalsy();
        });
        xit('should play/stop a featured audio', function(){
            element.all(by.repeater('audio in audioFeatures')).first().$$('img').click();
            browser.sleep(1000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeTruthy();
            expect($('#audioPlayer').getAttribute('paused')).toBeFalsy();

            element.all(by.repeater('audio in audioFeatures')).first().$$('img').click();
            expect($('#audioPlayer').getAttribute('paused')).toBeTruthy();

            browser.sleep(5000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeFalsy();
        });
    });

    xdescribe('calendar page', function(){
        xit('should display the small banner', function(){
             browser.get('/biography');
             browser.sleep(1000);
             expect(element(by.css('.homeBanner')).isDisplayed()).toBeFalsy();
             expect(element(by.css('.regularBanner')).isDisplayed()).toBeTruthy();
         });
    });
});