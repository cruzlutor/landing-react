/* jslint node: true */

'use strict';

var gulp        = require('gulp');
var watchify    = require('watchify');
var babelify    = require('babelify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var gutil       = require('gulp-util');
var uglify      = require('gulp-uglify');
var connect     = require('gulp-connect');

// add options to babelify
var options             = watchify.args;
    options.debug       = true;
    options.entries     = ['./src/js/main.jsx'];
    options.extensions  = ['.jsx'];


// prepare browserify object
var w = watchify(browserify(options)).transform(babelify.configure({
        ignore: /(bower_components)|(node_modules)/
    }));
    w.on('update', bundle); // on any dep update, runs the bundler
    w.on('log', gutil.log); // output build logs to terminal


// builder function
function bundle() {
    return w.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('./src/js/'))
        .pipe(connect.reload());
}


// task and listeners
gulp.task('browserify', bundle); // so you can run `gulp js` to build the file