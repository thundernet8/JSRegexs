"use strict";
/*
 * Gulp配置
 */

var gulp = require('gulp');
var pkg = require('./package.json');

//加载所有 gulp 插件, 插件以 GP 的属性方式调用
//var GP = require('gulp-load-plugins')();

//逐个加载插件
var clean = require('gulp-clean'),
    //concat = require('gulp-concat'),
    header = require('gulp-header'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


/*
 * 构建文件的注释头
 */
var banner = ['/**',
    ' * Generated on <%= (new Date()).toString()%> by <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %> LICENSE',
    ' */',
    ' ',
    ''].join('\n');


/*
 * gulp 任务流
 */


//js压缩合并发布
gulp.task('scripts', function () {
    console.log('start scripts task');
    gulp.src('./bin')
        .pipe(clean());
    gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest('./bin'))
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(rename(function(path){
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./bin'));
});

//监控
gulp.task('watch', function () {
    gulp.watch('./src/*.js', ['scripts']);
});

//默认任务
gulp.task('default', ['watch'], function () {
    console.log('start monitor task');
    gulp.task('watch');
});