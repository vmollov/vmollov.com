describe('recordingsCtrl', function(){
    'use strict';

    var scope, recordingsData = { getAllRecordings: function(){ return undefined; }};

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var controller = $injector.get('$controller'),
            defer = $injector.get('$q').defer();

        spyOn(recordingsData, 'getAllRecordings').and.returnValue(defer.promise);

        defer.resolve([{
            order: 1,
            title: 'test title',
            img: 'test image',
            description: 'test description',
            samples: [{
                title: 'sample 1',
                src: 'src1'
            }],
            storelLinks: [{
                storeName: 'test name',
                storeCode: 'test code',
                href: 'test link'
            }]
        }]);

        scope = $injector.get('$rootScope').$new();
        recordingsData = controller('recordingsCtrl', {
            $scope: scope,
            recordingsData: recordingsData
        });

        scope.$apply();
    }));

    it('should retrieve recordings data and set order predicate', function(){
        expect(scope.recordings.length).toBeGreaterThan(0);
        expect(scope.recordingsOrderPredicate).toBe('order');
    });
});