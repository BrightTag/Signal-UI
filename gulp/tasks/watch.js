'use strict;'

var config = require('../config')
    gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function() {
  watch(config.watch.paths, function() {
    gulp.start('default');
  });
});
