exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/e2e-spec.js'],
    baseUrl: "http://localhost:9009",

    jasmineNodeOpts: {
        showColors: true
    }
};