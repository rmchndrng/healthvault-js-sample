"use strict";

const gulp = require("gulp"),
    del = require("del"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    shell = require('gulp-shell'),
    gulpTypings = require("gulp-typings"),
    watch = require('gulp-watch'),
    chmod = require('gulp-chmod');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist", "server/src/common", "client/src/app/common"], cb);
});

gulp.task('copy:common', function () {
    gulp.src('common/**/*.ts')
    //    .pipe(chmod(555))
        .pipe(gulp.dest('server/src/common'))

    gulp.src('common/**/*.ts')
      //  .pipe(chmod(555))
        .pipe(gulp.dest('client/src/app/common'))
});

//http://blog.andrewray.me/how-to-copy-only-changed-files-with-gulp/
gulp.task('watch-common', function () {
    gulp.src('common/**/*.ts', { base: 'common' })
        .pipe(watch('common', { base: 'common' }))       
        .pipe(gulp.dest('client/src/app/common'));

    gulp.src('common/**/*.ts', { base: 'common' })
        .pipe(watch('common', { base: 'common' }))        
        .pipe(gulp.dest('server/src/common'));
    //gulp.watch('common/**/*.ts', ['copy:common']);
});

/**
 * Build Express server
 */
gulp.task('build:server', function () {
    var tsProject = tsc.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/server'))
});

gulp.task('build:client:watch', function () {
    return gulp.src('')
        .pipe(
        shell(['ng build -w --output-path ../dist/client'], { cwd: 'client' })
        )
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('build:server:watch', function () {
    gulp.watch(["server/src/**/*.ts"], ['build:server']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});

gulp.task('start:server', function () {
    return gulp.src('')
        .pipe(
        shell(['node index.js'], { cwd: 'dist/server/src' })
        )
});

gulp.task('default', function () {
    runSequence('clean', 'copy:common', 'watch-common', 'build:server', 'build:server:watch', 'build:client:watch');
});