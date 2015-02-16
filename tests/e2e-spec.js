describe('vmollov.com', function(){
    'use strict';

    describe('header', function(){
        xit('should display the big banner on home page', function(){
            browser.get('/');
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeTruthy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeFalsy();
        });
        xit('should have a header event element', function(){
            browser.get('/');
            expect(element(by.css('#hEvent'))).toBeDefined();
        });
        xit('should display the small banner', function(){
            browser.get('/biography');
            browser.sleep(1000);
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeFalsy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeTruthy();
        });
    });

    describe('footer', function(){
        it('should contain a copyright notice and email', function(){
            browser.get('/');
            expect(element(by.css('footer .copyright')).getInnerHtml()).toContain('Vladimir Mollov');
            expect(element(by.css('footer .contact a')).getInnerHtml()).toBe('music@vmollov.com');
        });
    });

    describe('playing audio', function(){
        it('should play/stop a featured audio', function(){
            browser.get('/');
            element.all(by.repeater('audio in audioFeatures')).first().$$('img').click();
            browser.sleep(1000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeTruthy();
            expect($('#audioPlayer').getAttribute('paused')).toBeFalsy();

            element.all(by.repeater('audio in audioFeatures')).first().$$('img').click();
            expect($('#audioPlayer').getAttribute('paused')).toBeTruthy();

            browser.sleep(3000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeFalsy();
        });
    });

    describe('playing video', function(){
        xit('should play/stop a featured video', function(){
            browser.get('/');
            element.all(by.repeater('video in videoFeatures')).first().$$('a').click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isDisplayed()).toBeTruthy();
            element(by.css('#videoPlayerContainer .closeButton')).click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isPresent()).toBeFalsy();
        });
    });

    describe('home page', function(){
        beforeEach(function(){
            browser.get('/');
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
    });

    describe('biography page', function(){
        beforeEach(function(){
            browser.get('/biography');
        });
    });
    /*xdescribe('calendar page', function(){

    });*/
});