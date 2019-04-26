const gulp = require("gulp");
const $ = require("gulp-load-plugins")();




function crearPublic() {

    console.log("crearpublic...");

    $.livereload.listen();

    return gulp
        .src("./public/*.*")
        .pipe($.livereload())
        ;
}


gulp.task("watch", () => {

    gulp.watch("./public/", crearPublic)
});
