'use strict';

var config  = require('../config'),
    gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function () {

  connect.server({
    root: config.docs.root,
    port: config.docs.serverport
  });

});
