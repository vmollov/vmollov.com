var
	gulp = require('gulp'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	ngMin = require('gulp-ngmin'),
	angularTemplates = require('gulp-angular-templates'),
	processHtml = require('gulp-processhtml');

// server setup -------------------------------
gulp.task('dev-server', function(){
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
	connect.server({
		port:9009,
		host: 'localhost',
		root: 'dist',
		fallback: 'dist/index.html',
		livereload: true
	});
});

gulp.task('refresh', function(){
	gulp.src('app/index.html')
		.pipe(connect.reload());
});
// end server setup --------------------

// file processing ---------------------
gulp.task('compass', function(){
	gulp.src('app/style/scss/*.scss')
		.pipe(compass({
			css: 'app/style',
			sass: 'app/style/scss',
			require: ['susy', 'breakpoint']
		}))
		.pipe(gulp.dest('app/style/'))
		.pipe(connect.reload());
});

gulp.task('css-build', function(){
	gulp.src('app/style/style.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist'));
});
gulp.task('angular-templates', function(){
	gulp.src('app/components/*.html')
		.pipe(angularTemplates({module: 'vmMusic', basePath: '/components/'}))
		.pipe(gulp.dest('app/angular-js-templates'));
	gulp.src('app/directives/*.html')
		.pipe(angularTemplates({module: 'vmMusic', basePath: '/directives/'}))
		.pipe(gulp.dest('app/angular-js-templates'));
});
gulp.task('js-build', function(){
	gulp.src([
		'app/*.js',
		'app/services/*.js',
		'app/components/*.js',
		'app/directives/*.js',
		'app/filters/*.js',
		'app/angular-js-templates/*.js'
		
	])
		.pipe(ngMin())
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});
gulp.task('deploy-js-lib', function(){
	gulp.src('app/lib/*').pipe(gulp.dest('dist/lib/'));
});

gulp.task('process-html', function(){
	gulp.src('app/index.html')
		.pipe(processHtml())
		.pipe(gulp.dest('dist/'));
});
// end file processing ----------------

gulp.task('build', ['css-build', 'angular-templates', 'js-build', 'deploy-js-lib', 'process-html']);
	
gulp.task('watch', function(){
	gulp.watch([
		'app/*.js', 
		'app/*/*.js', 
		'app/*.html', 
		'app/*/*.html'
	], ['refresh']);
	gulp.watch('app/style/scss/*.scss', ['compass']);
});

gulp.task('default', ['dev-server', 'watch']);
