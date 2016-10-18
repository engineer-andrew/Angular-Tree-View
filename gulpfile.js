var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var jshintStylish = require('jshint-stylish');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var gutil = require('gulp-util');
var del = require( "del" );

gulp.task('delete:dist', function() {
    return del(['dist/*.js']);
});

gulp.task('templates', ['delete:dist'], function() {
    return gulp.src(['src/*.html'])
        .pipe(templateCache('templates.js', { module: 'ea.treeview' }))
        .pipe(gulp.dest('build'));
});

gulp.task('lint', ['templates'], function() {
    return gulp.src(['src/eaTreeView.module.js', 'src/*.js', 'build/templates.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('src:templates', ['lint'], function() {
    return gulp.src(['src/eaTreeView.module.js', 'src/*.js', 'build/templates.js'])
        .pipe(concat('eaTreeView-tpls.min.js'))
        .pipe(ngAnnotate().on('error', gutil.log))
        .pipe(uglify({preserveComments: 'license'}).on('error', gutil.log))
        .pipe(gulp.dest('dist'));
});

gulp.task('src', ['lint'], function() {
    return gulp.src(['src/eaTreeView.module.js', 'src/*.js'])
        .pipe(concat('eaTreeView.min.js'))
        .pipe(ngAnnotate().on('error', gutil.log))
        .pipe(uglify({preserveComments: 'license'}).on('error', gutil.log))
        .pipe(gulp.dest('dist'));
});

gulp.task('delete:build', ['src', 'src:templates'], function() {
    return del(['build']);
});

gulp.task('default', ['delete:build']);