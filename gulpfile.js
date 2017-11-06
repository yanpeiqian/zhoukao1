var gulp = require('gulp');
var webServer = require('gulp-webserver');
var minHtml = require('gulp-htmlmin');
var minCss = require('gulp-clean-css');
var ugify = require('gulp-ugify');

gulp.task('minHtml',function(){
    gulp.src('./index.html')
        .pipe(min)
})