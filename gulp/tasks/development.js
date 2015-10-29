/* jslint node: true */

'use strict';

var gulp = require('gulp');

gulp.task('develop', ['browserify', 'connect', 'watch']);