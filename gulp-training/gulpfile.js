////////////////////////////////////////////////////////////////////
/*
function defaultTask(cb){ cb(); }
exports.default = defaultTask;
*/
////////////////////////////////////////////////////////////////////
/*
const {series} = require('gulp');

function clean(cb){ cb(); } // private task
function build(cb){ cb(); } // public task

exports.build = build;
exports.default = series(clean, build);

// run 'gulp build' to build only or 'gulp [default]' to clean and build
*/
////////////////////////////////////////////////////////////////////
/*
// Execute tasks in order with series()
const {series} = require('gulp');

function transpile(cb){ cb(); }
function bundle(cb){ cb(); }

exports.build = series(transpile, bundle);
*/
////////////////////////////////////////////////////////////////////
/*
// Execute tasks in parallel with parallel()
const {parallel} = require('gulp');

function javascript(cb){ cb(); }
function css(cb){ cb(); }

exports.build = parallel(javascript, css);
*/
////////////////////////////////////////////////////////////////////
/*
// Conditional tasks

const {series} = require('gulp');
const condition = false;

function minify(cb){ cb(); }
function transpile(cb){ cb(); }
function livereload(cb){ cb(); }

if(condition) exports.build = series(transpile, minify);
else          exports.build = series(transpile, livereload);
*/
////////////////////////////////////////////////////////////////////
/*
// Nest series() and parallel()

const { series, parallel } = require('gulp');

function clean(cb){ cb(); }
function cssTranspile(cb){ cb(); }
function cssMinify(cb){ cb(); }
function jsTranspile(cb){ cb(); }
function jsBundle(cb){ cb(); }
function jsMinify(cb){ cb(); }
function publish(cb){ cb(); }

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle),
    parallel(cssMinify, jsMinify),
    publish
  )
)
*/
////////////////////////////////////////////////////////////////////
/*
// Stream
// series() -> error will end the composition and no further tasks will be executed
// parrallel() -> error will end the composition but the other parallel tasks may or may not complete.

const { src, dest } = require('gulp');

function streamTask(){
  return src('*.js').pipe(dest('output'));
}

exports.default = streamTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Promise

function promiseTask(){ 
  return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Event emitter
const { EventEmitter } = require('events');

function eventEmitterTask(){
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Child process
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Observable
const { Observable } = require('rxjs');

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Error-first callback
function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

exports.default = callbackError;
*/
////////////////////////////////////////////////////////////////////
/*
// Pass callback to another API
const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;
*/
////////////////////////////////////////////////////////////////////
/*
// Using async/await
const fs = require('fs');

async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json');
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;
*/
////////////////////////////////////////////////////////////////////
/*
// Working with files
// src() -> is given a glob(a string of literal and/or wildcard characters used to match filepaths)
// dest() -> output directory

const { src, dest } = require('gulp');
const babel = require('gulp-babel');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('dist/'));
}
*/
////////////////////////////////////////////////////////////////////
/*
// Symlink - symbolic link
// File that contains a reference to another file or directory in the form of an 
// absolute or relative path and that affects pathname resolution
const { src, symlink } = require('gulp');

function link() {
  return src('src/*.js').pipe(symlink('dist/'));
}

exports.link = link;
*/
////////////////////////////////////////////////////////////////////
/*
// Adding files to the stream
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('src/js/*.js'))
    .pipe(uglify())
    .pipe(dest('dist/'));
}
*/
////////////////////////////////////////////////////////////////////
/*
// Output in phases
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('src/*.js'))
    .pipe(dest('dist/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'));
}
*/
////////////////////////////////////////////////////////////////////
/*
// Plugins
const rollup = require('rollup');

// Rollup's promise API works great in an `async` task
exports.default = async function() {
  const bundle = await rollup.rollup({
    input: 'src/some.js'
  });

  return bundle.write({
    file: 'dist/bundle.js',
    format: 'iife'
  });
}
*/
////////////////////////////////////////////////////////////////////
/*
// Conditional plugins
const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

function isJavaScript(file) {
  return file.extname === '.js';
}

exports.default = function() {
  // Include JavaScript and CSS files in a single pipeline
  return src(['src/*.js', 'src/*.css'])
    // Only apply gulp-uglify plugin to JavaScript files
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('dist/'));
}
*/
////////////////////////////////////////////////////////////////////
/*
// Watching files
const { watch, series } = require('gulp');

function clean(cb){ cb(); }
function javascript(cb){ cb(); }
function css(cb){ cb(); }

exports.default = function(){
  watch('src/*.css', css); // single task
  watch('src/*.js', series(clean, javascript)); // compose task
}
*/
////////////////////////////////////////////////////////////////////

const { watch } = require('gulp');

exports.default = function() {
  watch(
    'src/*.js', 
    { 
      events: 'all', // watching all events such as 'add', 'addDir', 'change', 'unlink' and 'unlinkDir' except 'ready and 'error'.
      ignoreInitial: false, // execute tasks before the first file change
      queue: false,
      delay: 500 // delay 500ms to run the tasks
    }, 
    function(cb) { cb(); }
  );
};