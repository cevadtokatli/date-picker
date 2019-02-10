const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const pkg = require('./package.json');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('gulp-uglify');

gulp.task('css', () => {
    return gulp.src('./src/scss/window-date-picker.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch-css', () => {
    gulp.watch('./src/scss/**', gulp.series('css'));
});

gulp.task('minify-css', () => {
    return gulp.src('./dist/css/window-date-picker.css')
    .pipe(cssmin())
    .pipe(rename('window-date-picker.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

const banner = `/*!
* Window Date Picker
* version: ${pkg.version}
*  author: ${pkg.author.name} <${pkg.author.email}>
* website: ${pkg.author.url}
*  github: ${pkg.repository.url}
* license: MIT
*/`;
gulp.task('script', async done => {
    const bundle = await rollup.rollup({
        input: './src/script/index.js',
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                presets: [
                    ['@babel/preset-env', {modules: false}]
                ]
            })
        ]
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.js',
        format: 'umd',
        name: 'WindowDatePicker'
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.common.js',
        format: 'cjs'
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.esm.js',
        format: 'es'
    });

    done();
});

gulp.task('watch-script', () => {
    gulp.watch('./src/script/**', gulp.series('script'));
});

gulp.task('minify-script', () => {
    return gulp.src('dist/js/window-date-picker.js')
    .pipe(uglify({
        output: {
            comments: /Window Date Picker/
        }
    }))
    .pipe(rename('window-date-picker.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', done => {
    gulp.parallel('watch-css', 'watch-script')(done);
});