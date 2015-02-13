describe('homeCtrl', function(){
    'use strict';

    var scope, homeCtrl, welcomeData, newsData, featureData;
    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var controller = $injector.get('$controller'),
            q = $injector.get('$q'),
            sce = $injector.get('$sce');

        scope = $injector.get('$rootScope').$new();

        welcomeData = {
            getWelcomeMessage: function(){
                var defered = q.defer();
                defered.resolve({welcome:'Test Welcome Message'});
                return defered.promise;
            }
        };
        featureData = {
            getFeatures: function(){
                var defered = q.defer();
                defered.resolve(
                    {
                        "video": [
                            {
                                "order": 1,
                                "src": "http://testVideo.mp4",
                                "img": "http://testImg.jpg",
                                "title": "Vladimir Mollov - Video"
                            }
                        ],
                        "audio": [
                            {
                                "order": 1,
                                "src": "testAudio.mp3",
                                "title": "Test",
                                "description": "Test Description"
                            }
                        ]
                    }
                );
                return defered.promise;
            }
        };
        newsData = {
            getAllNewsItems: function(){
                return [{title: 'news title'}];
            }
        };

        spyOn(welcomeData, 'getWelcomeMessage').and.callThrough();
        spyOn(featureData, 'getFeatures').and.callThrough();

        homeCtrl = controller('homeCtrl', {$scope:scope, $sce: sce, welcomeData: welcomeData, newsData: newsData, featureData: featureData});
        scope.$digest();
    }));

    describe('welcome section', function(){
        it('should receive a welcome message', function(){
            expect(scope.welcomeMessage.$$unwrapTrustedValue()).toContain('Welcome');
        });
    });

    describe('news section', function(){
        it('should receive news information', function(){
            expect(scope.news.length).toBeGreaterThan(0);
            expect(scope.news[0].title).toContain('news');
        });
    });

    describe('features section', function(){
        it('should receive video features', function(){
            expect(scope.videoFeatures.length).toBeGreaterThan(0);
        });
    });
});