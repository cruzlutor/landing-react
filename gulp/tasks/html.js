/* jslint node: true */

'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');


gulp.task('html', function () {
    gulp.src('./src/index.html')
        .pipe(connect.reload());
});