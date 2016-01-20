var
	gulp = require('gulp'),
	connect = require('gulp-connect'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
    concatVendor = require('gulp-concat-vendor'),
	ngMin = require('gulp-ngmin'),
	htmlify = require('gulp-angular-htmlify'),
	angularTemplates = require('gulp-angular-templates'),
	processHtml = require('gulp-processhtml'),
	minifyHtml = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma'),
    insert = require('gulp-insert'),
    packageConfig = require('./package.json'),
    libGlob = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-*/angular-*.js',
        '!bower_components/angular-mocks/angular-mocks.js'
    ],
    unitTestGlob = [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-mocks/angular-mocks.js',
		'bower_components/angular-*/angular-*.min.js',
		'app/app.js',
		'app/**/*.js',
		'app/directives/*.html',
		'tests/mockData/*.js',
		'tests/unit/**/*.js',
        '!app/bower/**/*'
    ];

// server setup -------------------------------
gulp.task('dev-server', function(){
	'use strict';
	connect.server({
		port: 9000,
		host: 'localhost',
		root: 'app',
		fallback: 'app/index.html',
		livereload: true
	});
	console.log(connect);
});

gulp.task('prod-server', function(){
	'use strict';
	connect.server({
		port:9009,
		host: 'localhost',
		root: 'dist',
		fallback: 'dist/index.html',
		livereload: true
	});
});

gulp.task('refresh', function(){
	'use strict';
	return gulp.src('app/index.html')
		.pipe(connect.reload());
});
// end server setup --------------------

// file processing ---------------------
gulp.task('less', function(){
	'use strict';
	return gulp.src('app/style/style.less')
        .pipe(less({
            paths: [ 'app/style' ]
        }))
		.pipe(gulp.dest('app/style/'));
});

gulp.task('css-build', ['less'], function(){
	'use strict';
	return gulp.src('app/style/style.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist'));
});

gulp.task('angular-templates', function(){
	'use strict';
    gulp.src('app/components/*.html')
		.pipe(htmlify())
		.pipe(angularTemplates({module: 'vmMusic', basePath: '/components/'}))
		.pipe(gulp.dest('app/angular-js-templates'));
	gulp.src('app/directives/*.html')
		.pipe(htmlify())
		.pipe(angularTemplates({module: 'vmMusic', basePath: '/directives/'}))
		.pipe(gulp.dest('app/angular-js-templates'));
});

gulp.task('js-app-build', function(){
	'use strict';
	return gulp.src([
		'app/*.js',
		'app/services/*.js',
		'app/components/*.js',
		'app/directives/*.js',
		'app/filters/*.js',
		'app/angular-js-templates/*.js'

	])
		.pipe(ngMin())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('js-lib-build', function(){
	'use strict';
    return gulp.src(libGlob)
        .pipe(concatVendor('lib.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-build', ['js-lib-build', 'js-app-build'], function(){
    'use strict';
    return gulp.src([
        'dist/lib.js',
        'dist/app.js'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(insert.prepend('/*\n name: ' + packageConfig.name +
            '\n description: ' + packageConfig.description +
            '\n version: ' + packageConfig.version +
            '\n copyright: ' + packageConfig.author +
            '\n*/\n')
        )
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-deploy', ['js-build'], function(){
    'use strict';
    return gulp.src([
        'dist/lib.js',
        'dist/app.js'
    ], {read:false})
        .pipe(clean());
});

gulp.task('process-html', function(){
	'use strict';
	return gulp.src('app/*.html')
		.pipe(htmlify())
		.pipe(processHtml())
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/'));
});

gulp.task('process-config', function(){
    'use strict';
    return gulp.src('app/config/htaccess.txt')
        .pipe(rename('.htaccess'))
        .pipe(gulp.dest('dist/'));
});
// end file processing ----------------

//running tests
gulp.task('unit-tests-watch', function(){
    'use strict';
    return gulp.src(unitTestGlob).pipe(karma({
        configFile: 'karma.config.js',
        action: 'watch'
    }));
});

gulp.task('run-unit-tests', function(){
    'use strict';
    return gulp.src(unitTestGlob).pipe(karma({ configFile: 'karma.config.js' }));
});

//end running tests

gulp.task('build',[
    'run-unit-tests',
    'css-build',
    'angular-templates',
    'js-deploy',
    'process-html',
    'process-config'
]);

gulp.task('watch', function(){
	'use strict';
	gulp.watch([
		'app/*.js',
		'app/*/*.js',
		'app/*.html',
		'app/*/*.html',
		'app/*.css',
		'app/*/*.css'
	], ['refresh']);

	gulp.watch('app/style/*.less', ['less']);
});

gulp.task('default', ['dev-server', 'unit-tests-watch', 'watch']);
