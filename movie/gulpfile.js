var gulp = require('gulp')
var path = require('path')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

// js
var es_source = path.join(__dirname, './server/views/layouts/static/src/js/*.js')
var js_dest = path.resolve(__dirname, './server/views/layouts/static/dist/js')

// less
var less_source = path.resolve(__dirname, './server/views/layouts/static/src/less/*.less')
var css_dest = path.resolve(__dirname, './server/views/layouts/static/dist/css')

gulp.task('build', function() {
  return browserify({entries: es_source, debug: true})
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(js_dest))
})