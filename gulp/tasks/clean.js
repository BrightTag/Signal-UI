'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    del = require('del');

gulp.task('clean', [
  'clean:docs',
  'clean:build'
]);

gulp.task('clean:docs', function(callback) {

  del(['build/docs'], callback);

});

gulp.task('clean:build', function(callback) {

  del(['build/*'], callback);

});
