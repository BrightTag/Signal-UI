var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    util        = require('gulp-util'),
    watch       = require('gulp-watch'),
    concat      = require('gulp-concat-util'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify');

gulp.task('css', function() {
  gulp.src('./components/**/index.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(concat('SignalUI.css'))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('js', function() {
  gulp.src('./client/SignalUI.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('docs', function() {
  gulp.src('./docs/**/[^_]*.jade')
    .pipe(jade({
      locals: {
        signalUI: require('./helper')
      }
    }))
    .on('error', function(err) {
      util.log(err.stack);
    })
    .on('error', util.beep)
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('test', function() {

});

gulp.task('default', ['css', 'js', 'docs']);

gulp.task('watch', function() {
  watch(['components/**/*'], function() {
    gulp.start('default');
  });
});
