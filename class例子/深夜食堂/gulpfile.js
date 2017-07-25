var gulp          = require('gulp');
const browserSync = require('browser-sync').create();
const babel       = require('gulp-babel');
const sass        = require('gulp-sass');
const tinypng     = require("gulp-tinypng");
const autoprefixer= require('autoprefixer');
const sourcemaps  = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');

// Static server
var reload = browserSync.reload;
gulp.task('browser-sync', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // console.log(1111)
});

gulp.task("ccc",function(){
    console.log(1111);
    gulp.watch('./es6/*.js',['by']);
    gulp.watch("./css/*.scss",['sass']);
    gulp.watch("./*.html").on('change', reload);
    /*gulp.watch("./css/!*.css",['autoprefixer']);*/
});

gulp.task('by', function(event){

    return gulp.src('./es6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./javascript'))
        .pipe(reload({stream: true}));
});

gulp.task('tinypng', function () {
    gulp.src('./img/*.{jpg,jpeg,png}')
        .pipe(tinypng('gsbqKsmAKLeLDYVkAjSK5peWg1Cr6DRD'))
        .pipe(gulp.dest('./images'));
});
gulp.task('sass', function() {
    return gulp.src("./css/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./css"))
        .pipe(reload({stream: true}));

});
gulp.task('autoprefixer', function () {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default',['ccc','browser-sync']); //定义默认任务

//gulp.task('default',['ccc','browser-sync','tinypng']); //定义默认任务


