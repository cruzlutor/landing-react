/* jslint node: true */

'use strict';

var gulp = require('gulp');


gulp.task('watch', function(){
    gulp.watch('./src/css/**/*', ['sass']);
    // gulp.watch('./bundle.js', ['scripts']);
    gulp.watch(['./src/index.html'], ['html']);
});
