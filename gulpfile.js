const gulp = require('gulp')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const noop = require('gulp-noop')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const nib = require('nib')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('gulp-rollup')
const browserSync = require('browser-sync').create()
const pug = require('gulp-pug')
const prettyHtml = require('gulp-pretty-html')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')
const inject = require('gulp-inject-string')

// Types
const isDev = process.env.NODE_ENV === 'development'
const isModern = process.env.BROWSERS_ENV === 'modern'


/*
 * Server
 */

if ( isDev ) {
  gulp.task('serve',  function() {

    browserSync.init({
      ui: false,
      open: false,
      notify: false,
      port: 3002,
      server: ['./examples', './dist']
    })

    gulp.watch('./resources/css/**/*.styl', gulp.series('build:styles'))
    gulp.watch('./resources/img/**/*', gulp.series('build:img'))
    gulp.watch(['./resources/js/**/*.js', './resources/vue/**/*.vue'], gulp.series('build:js', 'reload'))
    // gulp.watch('./resources/pug/**/*.pug', gulp.series('build:html', 'reload'))
    gulp.watch('./examples/**/*.html', gulp.series('reload'))
  })

  gulp.task('reload', function(done) { browserSync.reload(); done() })
}

/*
 * Watch CSS Only
 */

gulp.task('watch-css',  function() {

    browserSync.init({
        ui: false,
        open: false,
        notify: false,
        port: 3009,
        server: ['./examples', './dist']
    })

    gulp.watch('./resources/css/**/*.styl', gulp.series('build:styles'))
})

/*
 * JS
 */

const rollupConfig = require('./rollup.config.js')
rollupConfig.allowRealFiles = true // solves gulp-rollup hipotetical file system problem
rollupConfig.rollup = require('rollup')

gulp.task('build:js', function(){
  return gulp.src('./resources/js/main.js')
    .pipe( plumber() )
    .pipe( rollup(rollupConfig) )
    .pipe( gulp.dest('./dist/js') )
})


/*
 * Styles
 */

gulp.task('build:styles', function(){
  return gulp.src('./resources/css/framework/+(main|editor).styl')
    .pipe( plumber() )
    .pipe( isDev ? sourcemaps.init() : noop() )
    .pipe( stylus({ use: nib(), 'include css': true, import: ['nib'], compress: false }) )
    .pipe( isDev ? noop() : postcss() )
    .pipe( isDev ? sourcemaps.write() : noop() )
    .pipe( isDev ? noop() : inject.prepend('/* Created: ' + new Date().toLocaleString("ru-RU") + ' */\n') )
    .pipe( gulp.dest('./dist/css') )
    .pipe( isDev ? browserSync.stream() : noop() )
})

/*
 * IMAGES
 */

gulp.task('build:img', function() {
  return gulp.src('./resources/img/**/*')
    .pipe( gulp.dest('./dist/img') )
})



/*
 * HTML
 */


gulp.task('build:html', function(){
  return gulp.src('./resources/pug/*.pug')
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
    return gulp.src('./resources/svg/*.svg')
      .pipe(iconfont({
        fontName: 'icons',
        fontHeight: 1000,
        prependUnicode: true,
        formats: ['ttf', 'eot', 'woff'],
        normalize: true,
        timestamp: runTimestamp
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('./resources/svg/template/icons.styl')
        .pipe( consolidate('lodash', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontPath: '../fonts/', // TODO: need full path in production build !!!
          className: 'icon'
        }) )
        .pipe( gulp.dest('./resources/css/framework/') )
    })
    .pipe(gulp.dest('./dist/fonts/'));
})


/*
 * Gloabl tasks
 */

gulp.task('clean', function(){
  return gulp.src(['./dist'/*, './examples'*/], { read: false, allowEmpty: true })
    .pipe( clean() )
})

gulp.task('build', gulp.series('build:js', 'build:img', 'build:icons', 'build:styles') )

// start
defaultTask = ['build']
if ( ! isModern ) defaultTask.unshift('clean')
if ( isDev ) {
  //defaultTask = defaultTask.concat(['build:html', 'serve'])
  defaultTask.push('serve')
}
gulp.task('default', gulp.series(defaultTask) )
