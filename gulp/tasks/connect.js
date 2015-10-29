/* jslint node: true */

'use strict';

var gulp        = require('gulp');
var connect     = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: './src',
        fallback: './src/index.html',
        livereload: true 
    });
});