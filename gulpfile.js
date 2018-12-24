const gulp = require('gulp')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const noop = require('gulp-noop')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const nib = require('nib')
const sourcemaps = require('gulp-sourcemaps')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const browserSync = require('browser-sync').create()
const pug = require('gulp-pug')
const prettyHtml = require('gulp-pretty-html')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

const isDev = process.env.NODE_ENV === 'development'
const isModern = process.env.BROWSERS_ENV === 'modern'

/*
 * Server
 */

if ( isDev ) {
  gulp.task('serve', function(){

    browserSync.init({
      ui: false,
      open: false,
      notify: false,
      server: ['./examples', './dist']
    })

    gulp.watch('./src/css/**/*.styl', gulp.series('build:styles'))
    gulp.watch(['./src/js/**/*.js', './src/vue/**/*.vue'], gulp.series('build:js', 'reload'))
    gulp.watch('./src/pug/**/*.pug', gulp.series('build:html', 'reload'))
  })

  gulp.task('reload', function(done) { browserSync.reload(); done() })
}

/*
 * JS
 */

gulp.task('build:js', function(){
  return gulp.src('./src/js/main.js')
    .pipe( plumber() )
    .pipe( webpackStream( require('./webpack.config.js'), webpack ) )
    .pipe( gulp.dest('./dist/js') )
})


/*
 * Styles
 */

gulp.task('build:styles', function(){
  return gulp.src('./src/css/main.styl')
    .pipe( plumber() )
    .pipe( isDev ? sourcemaps.init() : noop() )
    .pipe( stylus({ use: nib(), 'include css': true, import: ['nib'], compress: false }) )
    .pipe( isDev ? noop() : postcss() )
    .pipe( isDev ? sourcemaps.write() : noop() )
    .pipe( gulp.dest('./dist/css') )
    .pipe( isDev ? browserSync.stream() : noop() )
})


/*
 * HTML
 */

gulp.task('build:html', function(){
  return gulp.src('./src/pug/*.pug')
    .pipe( plumber() )
    .pipe( pug() )
    .pipe( prettyHtml() )
    .pipe( gulp.dest('./examples') )
})


/*
 * Icon Font
 */

const runTimestamp = Math.round(Date.now()/1000)

gulp.task('build:icons', function(){
    return gulp.src('./src/svg/*.svg')
      .pipe(iconfont({
        fontName: 'icons',
        prependUnicode: true,
        formats: ['ttf', 'eot', 'woff'],
        normalize: true,
        timestamp: runTimestamp
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('./src/svg/template/icons.styl')
        .pipe( consolidate('lodash', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontPath: '../fonts/', // TODO: need full path in production build !!!
          className: 'icon'
        }) )
        .pipe( gulp.dest('./src/css/') )
    })
    .pipe(gulp.dest('./dist/fonts/'));
})


/*
 * Gloabl tasks
 */
 
gulp.task('clean', function(){
  return gulp.src('./dist', { read: false, allowEmpty: true })
    .pipe( clean() )
})

gulp.task('build', gulp.series('build:js', 'build:icons', 'build:styles', 'build:html') )

// start
defaultTask = ['build']
if ( ! isModern ) defaultTask.unshift('clean')
if ( isDev ) defaultTask.push('serve')
gulp.task('default', gulp.series(defaultTask) )
