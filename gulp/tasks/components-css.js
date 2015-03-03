'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    fs = require( 'fs' ),
    rubySass = require('gulp-ruby-sass'),
    concat = require('gulp-concat-util');

gulp.task('components:css', function() {

  var components = config.components;

  return gulp.src(components.scss.src)
    .pipe(rubySass(components.rubySass))
    .pipe(concat(components.scss.out))
    .pipe(concat.header(fs.readFileSync(components.normalize)))
    .pipe(gulp.dest(components.scss.dest))

    // @todo move to docs task
    .pipe(gulp.dest(config.docs.root));

});
