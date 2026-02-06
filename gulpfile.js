const gulp = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const templateCache = require('gulp-angular-templatecache');
const rename = require('gulp-rename');
const insert = require('gulp-insert');
const replace = require('gulp-replace');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
const { deleteAsync } = require('del');
const packageConfig = require('./package.json');

// File paths
const paths = {
    styles: {
        src: 'app/style/style.less',
        watch: 'app/style/*.less',
        dest: 'app/style/'
    },
    scripts: {
        app: [
            'app/app.js',
            'app/analytics.js',
            'app/compatibility.js',
            'app/services/*.js',
            'app/components/*.js',
            'app/directives/*.js',
            'app/filters/*.js',
            'app/angular-js-templates/*.js'
        ],
        lib: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-touch/angular-touch.js'
        ]
    },
    templates: {
        components: 'app/components/*.html',
        directives: 'app/directives/*.html'
    },
    assets: 'assets/**/*',
    data: 'data/**/*',
    static: 'static/**/*',
    html: ['app/index.html', 'app/compatibility.html'],
    dist: 'dist/'
};

// Clean dist folder (but preserve structure for assets and data)
function clean() {
    return deleteAsync([
        'dist/**/*',
        '!dist/assets',
        '!dist/assets/**',
        '!dist/data',
        '!dist/data/**'
    ]);
}

// Clean everything including assets
function cleanAll() {
    return deleteAsync([paths.dist]);
}

// Copy assets to dist
function copyAssets() {
    return gulp.src(paths.assets, { encoding: false })
        .pipe(gulp.dest('dist/assets'));
}

// Copy data to dist
function copyData() {
    return gulp.src(paths.data, { encoding: false, allowEmpty: true })
        .pipe(gulp.dest('dist/data'));
}

// Copy static files to dist (preserving folder structure from static/)
function copyStatic() {
    return gulp.src(paths.static, { encoding: false, allowEmpty: true, base: 'static' })
        .pipe(gulp.dest('dist/'));
}

// Compile LESS to CSS
function compileLess() {
    return gulp.src(paths.styles.src)
        .pipe(less({
            paths: ['app/style']
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Build CSS for production
function buildCss() {
    return gulp.src('app/style/style.css')
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist));
}

// Compile Angular templates to JS cache
function compileComponentTemplates() {
    return gulp.src(paths.templates.components)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(templateCache('components-templates.js', {
            module: 'vmMusic',
            root: '/components/'
        }))
        .pipe(gulp.dest('app/angular-js-templates'));
}

function compileDirectiveTemplates() {
    return gulp.src(paths.templates.directives)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(templateCache('directives-templates.js', {
            module: 'vmMusic',
            root: '/directives/'
        }))
        .pipe(gulp.dest('app/angular-js-templates'));
}

const compileTemplates = gulp.parallel(compileComponentTemplates, compileDirectiveTemplates);

// Build library JS
function buildLibJs() {
    return gulp.src(paths.scripts.lib)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(paths.dist));
}

// Build app JS
function buildAppJs() {
    return gulp.src(paths.scripts.app)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.dist));
}

// Combine and minify JS
function combineJs() {
    return gulp.src([
        'dist/lib.js',
        'dist/app.js'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(insert.prepend(`/*
 name: ${packageConfig.name}
 description: ${packageConfig.description}
 version: ${packageConfig.version}
 copyright: ${packageConfig.author}
*/
`))
        .pipe(gulp.dest(paths.dist));
}

// Clean up intermediate JS files
function cleanIntermediateJs() {
    return deleteAsync([
        'dist/lib.js',
        'dist/app.js'
    ]);
}

// Process HTML for production
function processHtml() {
    return gulp.src(['app/index.html', 'app/compatibility.html'], { allowEmpty: true })
        .pipe(replace(/<!-- build:css style.css -->[\s\S]*?<!-- \/build -->/g, '<link href="style.css" rel="stylesheet" />'))
        .pipe(replace(/<!-- build:js script.js -->[\s\S]*?<!-- \/build -->/g, '<script src="script.js"></script>'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(paths.dist));
}

// Development server - serves from app/ with assets from root assets/
function serve(done) {
    browserSync.init({
        server: {
            baseDir: ['app', 'static'],
            routes: {
                '/bower_components': 'bower_components',
                '/assets': 'assets',
                '/data': 'data'
            }
        },
        port: 9000,
        open: true,
        middleware: [
            // SPA fallback
            function(req, res, next) {
                if (req.url.indexOf('.') === -1) {
                    req.url = '/index.html';
                }
                next();
            }
        ]
    });
    done();
}

// Production server - serves from dist/ (assets already copied there)
function serveProd(done) {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        port: 9009,
        open: true,
        middleware: [
            function(req, res, next) {
                if (req.url.indexOf('.') === -1) {
                    req.url = '/index.html';
                }
                next();
            }
        ]
    });
    done();
}

// Reload browser
function reload(done) {
    browserSync.reload();
    done();
}

// Watch files for changes
function watchFiles() {
    gulp.watch(paths.styles.watch, compileLess);
    gulp.watch([
        'app/*.js',
        'app/*/*.js',
        'app/*.html',
        'app/*/*.html'
    ], reload);
}

// Build JS pipeline
const buildJs = gulp.series(
    gulp.parallel(buildLibJs, buildAppJs),
    combineJs,
    cleanIntermediateJs
);

// Full build pipeline
const build = gulp.series(
    clean,
    compileLess,
    compileTemplates,
    gulp.parallel(buildCss, buildJs, processHtml, copyAssets, copyData, copyStatic)
);

// Development task
const dev = gulp.series(
    compileLess,
    gulp.parallel(serve, watchFiles)
);

// Export tasks
exports.clean = clean;
exports.cleanAll = cleanAll;
exports.less = compileLess;
exports.templates = compileTemplates;
exports.assets = copyAssets;
exports.data = copyData;
exports.static = copyStatic;
exports.build = build;
exports.serve = serve;
exports['serve:prod'] = serveProd;
exports.watch = watchFiles;
exports.default = dev;
