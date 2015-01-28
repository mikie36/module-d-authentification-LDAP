// include gulp
var gulp = require('gulp');

//plugins
var plugins = require('gulp-load-plugins');


var jsFiles = [
    './app.js',
    './modules/**',
    './routes/**'
];

// JS hint task
gulp.task('jshint', function() {
    gulp.src(jsFiles)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

gulp.task('compress', function(){
    gulp.src(jsFiles)
        .pipe(plugins.uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe(plugins.sass());
});