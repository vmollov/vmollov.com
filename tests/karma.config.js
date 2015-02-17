// Karma configuration
// Generated on Sun Feb 01 2015 14:41:39 GMT-0500 (EST)

module.exports = function(config) {
    'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-*/*.js',
        'app/app.js',
        'app/**/*.js',
        'app/directives/*.html',
        'tests/mockData/*.js',
        'tests/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
        'app/bower/**/*'
        /*'tests/unit/controllers*//*.js',
        'tests/unit/services*//*.js'*/
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/directives/*.html': ['ng-html2js']
    },

      ngHtml2JsPreprocessor: {
          moduleName: 'templates'
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


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
