gulp.task('war', function () {
    gulp.src(["*.js", "*.md", "test/*.js"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.zip'))
        .pipe(gulp.dest("./dist"));

});