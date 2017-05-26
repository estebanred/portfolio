var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
//convert sass to css
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
gulp.task('js', function(){
   gulp.src('js/*.js')
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/'));
});

gulp.task('css', function(){
   gulp.src('css/*.css')
   .pipe(concat('styles.css'))
   .pipe(minify())
   .pipe(gulp.dest('build/'));
});
//Watch task
// gulp.task('default', function(){
//     gulp.watch('sass/**/*.scss',['styles']);
// });
// minify css and js
gulp.task('default',['js','css'],function(){
});
