
//=============================================
//               DEPENDENCIES
//=============================================

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    bower = require('gulp-bower'),
    runSequence = require('run-sequence'),
    del = require('del'),
    babel = require('gulp-babel'),
    //to use for connection
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    ngdocs = require('gulp-ngdocs'),
    karmaServer = require('karma').Server;

//=============================================
//            DECLARE PATHS
//=============================================

// Proxy stuff
var config = {
 
  uaa: {
           clientId: '',
           serverUrl: '',
           defaultClientRoute: '/about',
           base64ClientCredential: ''
  },
 
  proxy: {
    '/api/view-service(.*)': {
      url: '',
      instanceId: ''
    }
  }
};

var paths = {
    /**
     * The 'gulpfile' file is where our run tasks are hold.
     */
    gulpfile:   'gulpfile.js',
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `public/`). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     */
    app: {
        basePath:       'public/',
        fonts:          ['public/**/*.{eot,svg,ttf,woff}', 'jspm_packages/**/*.{eot,svg,ttf,woff}'],
        styles:         ['public/stylesheets/**/*.scss','public/modules/**/*.scss'],
        images:         ['public/**/*.{png,gif,jpg,jpeg}'],
        scripts:        ['public/app.js',
                         'public/app-controller.js',
                         'public/modules/**/*.js',
                         '!public/modules/**/bower_components/**/*.js',
                         '!public/**/*.spec.js'],
        html:           ['public/index.html'],
        templates:      ['public/index.html','public/modules/**/*.html']
    },
    /**
     * The 'tmp' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    tmp: {
        basePath:       '.tmp/',
        styles:         '.tmp/styles/',
        scripts:        '.tmp/scripts/'
    },
    /**
     * The 'dist' folder is where our app and its documentation
     * resides once they're completely built.
     *
     * - 'app'         application distribution source code
     * - 'docs'         application documentation
     */
    build: {
        dist:           'dist/www/',
        docs:           'docs/'
    }
};



//=============================================
//             TASKS
//=============================================



gulp.task('connect:docs', function() {
    connect.server({
        port: 9001,
        root: paths.build.docs
    });
});

gulp.task('connect:app', function() {
    connect.server({
        port: 9000,
        root: paths.app.basePath,
        livereload: true,
        base: '/',
        directory: '/'
    });
});

gulp.task('connect:dist', function() {
    connect.server({
        port: 9000,
        root: paths.build.dist,
        livereload: true,
        base: '/',
        directory: '/'
    });
});

gulp.task('reload', function(){
  gulp.src(paths.app.scripts)
      .pipe(connect.reload());
});

gulp.task('watch:scripts', function(){
    gulp.watch(paths.app.scripts, ['jshint', 'reload', 'docs']);
});

gulp.task('watch:styles', function(){
    gulp.watch(paths.app.styles, ['sass']);
});

gulp.task('sass', function(cb){
    return gulp.src(paths.app.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({
          includePaths: ['./public/bower_components/',  './public/modules/*/bower_components/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest(paths.app.basePath + 'stylesheets'));
});


gulp.task('jshint', function(cb){
    return gulp.src(paths.app.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('docs', function(cb){
    return gulp.src(paths.app.scripts)
        .pipe(ngdocs.process({
            html5Mode: false,
            startPage: '/api'
        }))
        .pipe(gulp.dest(paths.build.docs));
});

// See https://github.com/karma-runner/gulp-karma
gulp.task('test', function (cb) {
    var karma = new karmaServer({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    });
    karma.start()
});

// Clean dist
gulp.task('clean:dist', function (cb) {
    del.sync(['./dist/www']);
    cb();
});

// Remove runtime components
gulp.task('clean:deps', function(){
    return del.sync(['./public/bower_components', './public/jspm_packages', './public/modules/*/bower_components']);
});

// Update runtime deps
gulp.task('deps', function(cb){
    // main bower.json
    bower();
	  return gulp.src(paths.app.basePath, {read:false})
               .pipe(shell(['jspm install']));
});

// Depencency cache for SPDY
gulp.task('depcache', function(){
    return gulp.src(paths.app.basePath, {read:false})
        .pipe(shell([
            'jspm depcache app'
        ]));
});

// Create a minified bundle.js (and map) and inject it into config.js
gulp.task('bundle', ['depcache'], function () {
    return gulp.src(paths.app.basePath)
        .pipe(shell([
            'jspm bundle app ' + paths.app.basePath + 'bundle.js --inject --minify' +
            '&& mv ' + paths.app.basePath + 'bundle* ' + paths.build.dist +
            '&& cp ' + paths.app.basePath + 'config.js ' + paths.build.dist +
            '&& jspm unbundle'
        ]));
});

// Copy production files from public/ to dist/app/
gulp.task('files', function () {
    return gulp.src([
        // copy everything
        '' + paths.app.basePath + '**/*',
        // except tests and stylesheets from modules/
        '!' + paths.app.basePath + 'test/',
        '!' + paths.app.basePath + 'test/**',
        '!' + paths.app.basePath + 'modules/**/test/',
        '!' + paths.app.basePath + 'modules/**/test/**',
        '!' + paths.app.basePath + 'modules/**/stylesheets/',
        '!' + paths.app.basePath + 'modules/**/stylesheets/**'
    ])
    .pipe(gulp.dest(paths.build.dist));
});

//=============================================
//             PUBLIC TASKS
//=============================================


gulp.task('dist', function(){
  runSequence('clean:dist', 'deps', 'sass', 'docs', 'files');
});

// Start a web server, load the app at public/, watch scripts and styles
gulp.task('default', ['sass', 'connect:app', 'watch:scripts', 'watch:styles']);

//gulp.task('default', ['connect:app', 'watch:scripts', 'watch:styles']);
