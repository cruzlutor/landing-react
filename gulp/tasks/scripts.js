/* jslint node: true */

'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');


gulp.task('scripts', function () {
    gulp.src('./src/js/bundle.js')
        .pipe(connect.reload());
});