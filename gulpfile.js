const gulp = require('gulp')
const sass = require('gulp-sass')
const path = require('path')
const fileinclude = require('gulp-file-include')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const webpack = require('gulp-webpack')
const wpconfig = require('./webpack.config.js')

const paths = {
    src: path.join(__dirname, 'src/'),
    static: path.join(__dirname, 'src/static/'),
    assets: path.join(__dirname, 'src/assets/'),
    js: path.join(__dirname, 'src/js/'),
    sass: path.join(__dirname, 'src/scss/'),
    html: path.join(__dirname, 'src/html/'),
    build: path.join(__dirname, 'build'),
}

function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}

gulp.task('build-sass', () => {
    console.log('Building sass')
    return gulp.src(`${paths.sass}/main.scss`)
    .pipe(plumber((err) => {
        console.log('Build Sass Error')
        console.log(err)
        this.emit('end')
    }))
    .on('error', swallowError)
    .pipe(sass({
        includePaths: ['node_modules/foundation-sites/scss'],
    })) // Using gulp-sass
    .on('error', swallowError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('./build/assets/css/'))
})

gulp.task('build-html', () => {
    console.log('Building html')
    gulp.src(`${paths.html}*.html`)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
        }))
        .pipe(gulp.dest('./build'))
})

gulp.task('copy-assets', () => {
    console.log('Copying assets')
    gulp.src([`${paths.assets}**/*`])
    .pipe(gulp.dest('./build/assets'))
})

gulp.task('copy-static', () => {
    console.log('Copying static files')
    gulp.src([`${paths.static}**/*`])
        .pipe(gulp.dest('./build'))
})

gulp.task('init', () => {
    gulp.watch(`${paths.src}**/*.scss`, ['build-sass'])
    gulp.watch(`${paths.html}**/*.html`, ['build-html'])
    gulp.watch(`${paths.html}**/*.htm`, ['build-html'])
    gulp.watch(`${paths.assets}**/*.*`, { cwd: './' }, ['copy-assets'])
})
gulp.task('build-js', () => {
    gulp.src('src/js/main.js')
    .pipe(webpack(wpconfig))
    .pipe(gulp.dest('build/'))
})

gulp.task('default', ['build-sass', 'build-html', 'copy-assets', 'copy-static', 'init'])
gulp.task('deploy', ['build-js', 'build-sass', 'build-html', 'copy-assets', 'copy-static'])
