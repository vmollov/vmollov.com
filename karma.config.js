// Karma configuration
// Updated for Karma 6.x with Chrome Headless

module.exports = function(config) {
    'use strict';

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-touch/angular-touch.min.js',
            'app/app.js',
            'app/services/*.js',
            'app/components/*.js',
            'app/directives/*.js',
            'app/filters/*.js',
            'app/directives/*.html',
            'tests/mockData/*.js',
            'tests/unit/**/*.js'
        ],

        // list of files to exclude
        exclude: [
            'app/bower/**/*',
            'app/angular-js-templates/**/*'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/directives/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates',
            stripPrefix: 'app',
            prependPrefix: ''
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Custom launcher for CI environments and autoplay support
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--disable-gpu', '--autoplay-policy=no-user-gesture-required']
            },
            ChromeHeadlessAutoplay: {
                base: 'ChromeHeadless',
                flags: ['--autoplay-policy=no-user-gesture-required']
            }
        },

        // start these browsers with autoplay allowed
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadlessAutoplay'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level - how many browsers should be started simultaneously
        concurrency: Infinity,

        // Client configuration
        client: {
            jasmine: {
                random: false // Disable random test order for consistency
            }
        }
    });
};
