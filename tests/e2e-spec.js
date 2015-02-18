describe('vmollov.com', function(){
    'use strict';

    describe('header', function(){
        it('should display the big banner on home page', function(){
            browser.get('/');
            browser.sleep(1000);
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeTruthy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeFalsy();
        });
        it('should have a header event element', function(){
            browser.get('/');
            expect(element(by.css('#hEvent'))).toBeDefined();
        });
        it('should display the small banner', function(){
            browser.get('/biography');
            browser.sleep(1000);
            expect(element(by.css('.homeBanner')).isDisplayed()).toBeFalsy();
            expect(element(by.css('.regularBanner')).isDisplayed()).toBeTruthy();
        });
    });

    describe('footer', function(){
        it('should contain a copyright notice and email', function(){
            browser.get('/');
            browser.sleep(1000);
            expect(element(by.css('footer .copyright')).getInnerHtml()).toContain('Vladimir Mollov');
            expect(element(by.css('footer .contact a')).getInnerHtml()).toBe('music@vmollov.com');
        });
    });

    describe('navigation', function(){
        var navElement;

        beforeEach(function(){
            navElement = element(by.css('nav'));
        });

        it('should navigate to pages', function(){
            browser.get('/');

            navElement.$$('ul li a[href="/contact"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/contact');

            navElement.$$('ul li.hasSub a[title="Gallery').click();
            navElement.$$('ul li a[href="/photos"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/photos');

            navElement.$$('ul li.hasSub a[title="Gallery').click();
            navElement.$$('ul li a[href="/videos"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/videos');

            navElement.$$('ul li a[href="/recordings"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/recordings');

            navElement.$$('ul li a[href="/calendar"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/calendar');

            navElement.$$('ul li a[href="/biography"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/biography');

            navElement.$$('ul li a[href="/"').click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain('/');
        });
    });

    describe('playing audio', function(){
        it('should play/stop a featured audio', function(){
            browser.get('/');
            browser.sleep(1000);
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
        it('should play/stop a featured video', function(){
            browser.get('/');
            browser.sleep(1000);
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
            browser.sleep(1000);
        });
        it('should contain a welcome message', function(){
            expect(element(by.css('#h_welcome'))).toBeDefined();
            expect(element(by.css('#h_welcome > h2')).getInnerHtml()).toBe('Welcome');
            expect(element(by.binding('welcomeMessage'))).toBeDefined();
            expect(element(by.binding('welcomeMessage')).$$('p').count()).toBeGreaterThan(0);
        });
        it('should contain a news section', function(){
            expect(element(by.css('#h_news'))).toBeDefined();
            expect(element(by.css('#h_news > h2')).getInnerHtml()).toBe('News');
            expect(element.all(by.repeater('newsItem in news')).count()).toBeGreaterThan(0);
        });
        it('should contain a features section', function(){
            expect(element(by.css('.h_videoFeature'))).toBeDefined();
            expect(element.all(by.repeater('video in videoFeatures')).count()).toBeGreaterThan(0);
            expect(element(by.css('.h_audioFeature'))).toBeDefined();
            expect(element.all(by.repeater('audio in audioFeatures')).count()).toBeGreaterThan(0);
        });
    });

    describe('biography page', function(){
        beforeEach(function(){
            browser.get('/biography');
            browser.sleep(1000);
        });
        it('should contain a photo', function(){
            expect(element(by.css('.pageHeader img[src="assets/img/misc/bio_headshot.png"]')).isPresent()).toBeTruthy();
        });
        it('should contain a title', function(){
            expect(element(by.css('h1')).getInnerHtml()).toBe('Biography');
        });
        it('should contain multiple paragraphs of text', function(){
            expect(element.all(by.css('p')).count()).toBeGreaterThan(0);
        });
    });

    describe('calendar page', function(){
        beforeEach(function(){
            browser.get('/calendar');
            browser.sleep(1000);
        });
        it('should display upcoming and recent events', function(){
            var upcomingEvents = element.all(by.repeater('event in upcomingEvents')),
                recentEvents = element.all(by.repeater('event in recentEvents'));

            upcomingEvents.count().then(function(result){
                if(result === 0){
                    expect(element(by.css('h1(:nth-of-type(1))')).isDisplayed(0)).toBeTruthy();
                }
                if(result < 3){
                    expect(recentEvents.count()).toBe(3);
                    expect(element(by.css('h1:not(:nth-of-type(1))')).isDisplayed(0)).toBeTruthy();
                }
                else{
                    expect(recentEvents.count()).toBe(0);
                    expect(element(by.css('h1:not(:nth-of-type(1))')).isDisplayed(0)).toBeFalsy();
                }
            });
        });
        it('should display relevant information in each event', function(){
            var eventElement = element.all(by.css('.event')).first().$$('.eventDetails');

            eventElement.$$('.itemTitle').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
            eventElement.$$('.eventTime').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
            eventElement.$$('.eventLocation').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
            eventElement.$$('.info').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
            expect(eventElement.$$('.eventMap > div > *').count()).toBeGreaterThan(0);
        });
    });

    describe('recordings page', function(){
        beforeEach(function(){
            browser.get('/recordings');
            browser.sleep(1000);
        });
        it('should display several albums', function(){
            expect(element.all(by.repeater('album in recordings')).count()).toBeGreaterThan(0);
        });
        it('should contain details on albums', function(){
            var albumElement =  element.all(by.repeater('album in recordings')).first().$$(".album");

            expect(albumElement.$$('.albumImage').count()).toBe(1);
            expect(albumElement.$$('.albumDesc > p').count()).toBeGreaterThan(0);
            expect(albumElement.$$('.albumSamples > .audioSample').count()).toBeGreaterThan(0);
        });
        it('should play an audioSample', function(){
            element.all(by.css('.audioSample')).first().$$('img').click();
            browser.sleep(1000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeTruthy();
            expect($('#audioPlayer').getAttribute('paused')).toBeFalsy();

            element.all(by.css('.audioSample')).first().$$('img').click();
            expect($('#audioPlayer').getAttribute('paused')).toBeTruthy();

            browser.sleep(3000);
            expect(element(by.css('#audioPlayerContainer')).isDisplayed()).toBeFalsy();
        });
    });

    describe('photos page', function(){
        beforeEach(function(){
            browser.get('/photos');
            browser.sleep(1000);
        });
        it('should have a center image', function(){
            expect(element(by.css('.slideImg > a > img')).getAttribute('src')).toBeDefined();
        });
        it('should go to the next image on arrow click', function(){
            element(by.css('.slideImg > a > img')).getAttribute('src').then(function(startingSrc){
                element(by.css('a.arrow.next')).click();
                expect(element(by.css('.slideImg > a > img')).getAttribute('src')).not.toBe(startingSrc);
                element(by.css('a.arrow.prev')).click();
                expect(element(by.css('.slideImg > a > img')).getAttribute('src')).toBe(startingSrc);
                element(by.css('a.arrow.prev')).click();
                expect(element(by.css('.slideImg > a > img')).getAttribute('src')).not.toBe(startingSrc);
                element(by.css('a.arrow.next')).click();
                expect(element(by.css('.slideImg > a > img')).getAttribute('src')).toBe(startingSrc);
            });
        });
        it('should have a thumbs view', function(){
            expect(element.all(by.repeater('photo in photos')).count()).toBeGreaterThan(0);
        });
        it('should slide the thumb view on arrow clicks', function(){
            expect(element.all(by.css('.thumbSlider li')).first().isDisplayed()).toBeTruthy();
            element(by.css('.thumbsViewScrollForward')).click();
            browser.sleep(1000);
            expect(element.all(by.css('.thumbSlider li')).first().isDisplayed()).toBeFalsy();
            element(by.css('.thumbsViewScrollBack')).click();
            browser.sleep(1000);
            expect(element.all(by.css('.thumbSlider li')).first().isDisplayed()).toBeTruthy();
        });
        it('should change the main photo on thumb click', function(){
            var testThumb = element.all(by.css('.thumbSlider li img')).get(7);

            testThumb.getAttribute("src").then(function(thumbSrc){
                testThumb.click();
                expect(element(by.css('.slideImg > a > img')).getAttribute('src')).toContain(thumbSrc.substring(0, thumbSrc.length - 6));
            });
        });
    });

    describe('videos page', function(){
        beforeEach(function(){
            browser.get('/videos');
            browser.sleep(1000);
        });
        it('should display a video feed', function(){
            expect(element.all(by.repeater('video in allVideos')).count()).toBeGreaterThan(0);
        });
        it('should display detail information about each video', function(){
            var videoElement = element.all(by.repeater('video in allVideos')).first().$$('.videoDetails');
            videoElement.$$('.itemTitle').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
            videoElement.$$('.info').getText().then(function(text){
                expect(text[0].length).toBeGreaterThan(0);
            });
        });
        it('should play video', function(){
            element.all(by.repeater('video in allVideos')).first().$$('a').click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isDisplayed()).toBeTruthy();
            element(by.css('#videoPlayerContainer .closeButton')).click();
            browser.sleep(1000);
            expect(element(by.css('#videoPlayerContainer')).isPresent()).toBeFalsy();
        });
    });

    describe('contact page', function(){
        beforeEach(function(){
            browser.get('/contact');
            browser.sleep(1000);
        });
        it('should display contact information', function(){
            element.all(by.css('a[href*="tel:"]')).first().getText().then(function(text){
                expect(text).toMatch(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
            });
            expect(element.all(by.css('a[href*="mailto:"]')).first().getAttribute('href'))
                .toMatch(/^mailto\:[A-Za-z0-9.-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/);

            element.all(by.css('a[href*="mailto:"]')).first().getText().then(function(text){
                expect(text).toMatch(/^[A-Za-z0-9.-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/);
            });
        });
    });
});