var
	gulp = require('gulp'),
	compass = require('gulp-compass'),
	uglify = require('gulp-uglify')
	minifyCss = require('gulp-minify-css'),
	connect = require('gulp-connect');
	//livereload = require('gulp-livereload');
	//tinyLr = require('tiny-lr')();

gulp.task('devServer', function(){
	connect.server({
		port: 9000,
		host: 'localhost',
		root: 'app',
		livereload: true
	});
	console.log(connect);
});

gulp.task('prodServer', function(){
	connect.server({
		port:9000,
		host: 'localhost',
		root: 'dist',
		livereload: true
	});
});

gulp.task('refresh', function(){
	gulp.src('app/index.html')
		.pipe(connect.reload());
});

gulp.task('compass', function(){
	gulp.src('app/style/scss/*.scss')
		.pipe(compass({
			//css: 'app/style/css',
			sass: 'app/style/scss',
			require: ['susy', 'breakpoint']
		}))
		.pipe(gulp.dest('app/style/'))
		.pipe(connect.reload());
});
	
gulp.task('watch', function(){
	//livereload.listen();
	gulp.watch(['app/*.js', 'app/*/*.js', 'app/*.html', 'app/*/*.html'], ['refresh']);
	gulp.watch('app/style/scss/*.scss', ['compass']);
});

gulp.task('default', ['devServer', 'watch']);
