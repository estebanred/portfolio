var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
let cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync");

//configure browser-sync
gulp.task("browser-sync", function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./public/sass/*.scss", ["sass"]);
    gulp.watch("./public/js/**/*.js", ["minifyjs"]);
    gulp.watch("./*.html").on("change", browserSync.reload);
});

//convert sass to css
gulp.task("sass", function () {
    return gulp.src("./public/sass/*.scss")
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("./public/build"))
        .pipe(browserSync.stream());
});

//minify js
gulp.task("minifyjs", function () {
    return gulp.src("./public/js/*.js")
        .pipe(concat("script.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./public/build"))
        .pipe(browserSync.stream());
});


// minify css and js
gulp.task("default", ["minifyjs", "sass", "browser-sync"], function () {
    gulp.watch("./public/sass/**/*.scss", ["sass"]);
    gulp.watch("./public/js/**/*.js", ["minifyjs"]);
});
