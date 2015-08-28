var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var reload = browserSync.reload;

var tsProject = ts.createProject({
    target:'ES5',
    declaration: false,
    noExternalResolve: false,
    sortOutput: true
});

gulp.task('ts', function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())				   
    .pipe(ts(tsProject));
  return tsResult.js
              .pipe(concat('main.js'))
              .pipe(sourcemaps.write('./'))
	      .pipe(gulp.dest('public/js/'))
              
});

gulp.task('ts-watch', ['ts'], reload);

gulp.task('default',  function () {

    // Serve files from the root of this project
    browserSync({
        //files:"public/index.html",
        server: {
            baseDir: "public/",
	    //directory:false
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/**/*.ts", ['ts-watch']);
    gulp.watch("public/index.html").on('change', reload);	  
});




