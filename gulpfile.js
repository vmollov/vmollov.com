var
	gulp = require('gulp'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
    mainBowerFiles = require('main-bower-files'),
	uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	ngMin = require('gulp-ngmin'),
	htmlify = require('gulp-angular-htmlify'),
	angularTemplates = require('gulp-angular-templates'),
	processHtml = require('gulp-processhtml'),
	minifyHtml = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma');

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
gulp.task('compass', function(){
	'use strict';
	return gulp.src('app/style/scss/*.scss')
		.pipe(compass({
			css: 'app/style',
			sass: 'app/style/scss',
			require: ['susy', 'breakpoint']
		}))
		.pipe(gulp.dest('app/style/'));
});

gulp.task('css-build', ['compass'], function(){
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
    return gulp.src(mainBowerFiles())
        .pipe(concat('lib.js'))
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
gulp.task('run-unit-tests', function(){
    'use strict';
    return gulp.src([
        'app/lib/jquery.min.js',
        'app/lib/angular.min.js',
        'tests/lib/*.js',
        'app/app.js',
        'app/**/*.js',
        'app/directives/*.html',
        'tests/mockData/*.js',
        'tests/unit/**/*.js'
    ]).pipe(karma({
            configFile: 'tests/karma.config.js',
            action: 'watch'
        }));
});

//end running tests

gulp.task('build',[
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

	gulp.watch('app/style/scss/*.scss', ['compass']);
});

gulp.task('default', ['dev-server', 'run-unit-tests', 'watch']);
