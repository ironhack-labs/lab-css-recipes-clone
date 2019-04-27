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

function validar() {
    return gulp.src("./public/index.html")
        .pipe($.w3cHtmlValidator())
        .pipe($.w3cHtmlValidator.reporter())
        ;

}




gulp.task("watch", () => {

    gulp.watch("./public/", crearPublic)
});


gulp.task("validar", validar);

