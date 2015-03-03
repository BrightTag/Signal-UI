'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    shell = require('child_process').exec,
    util = require('gulp-util');

gulp.task('deploy', function() {

  gulp.start('default');

  shell('git log -1 --pretty=%B', function(error, msg) {
    shell('cd '+ config.docs.root +'; git add -A; git commit -a -m "'+msg+'"; git push;', function(error, stdout, stderr) {
      util
        .log(stdout)
        .log(stderr);
    });
  });

});
