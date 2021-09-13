// const { prependListener } = require("gulp");
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
// const imagemin = require('gulp-imagemin');

// gulp.task('imageMinify', function () {
//     return gulp.src('.src/img/*.{gif,png,jpg,svg,webp}')
//       .pipe(imagemin([
//         imagemin.gifsicle({ interlaced: true }),
//         imagemin.mozjpeg({
//           quality: 75,
//           progressive: true
//         }),
//         imagemin.optipng({ optimizationLevel: 5 }),
//         imagemin.svgo({
//           plugins: [
//             { removeViewBox: true },
//             { cleanupIDs: false }
//           ]
//         })
//       ]))
//       .pipe(gulp.dest('.build/img'))
// })

gulp.task('sass-compile', function() {
    return gulp.src('./src/styles/main.scss')
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ]
      }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
})

gulp.task('pug-compile', function() {
    return gulp.src('./src/pug/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./build/'));
  });

gulp.task('default', async function(){
    browserSync.init({
        server: "./build/"
    })
    gulp.watch('./src/styles/**/*.scss', gulp.series('sass-compile')).on('change', browserSync.reload)
    // gulp.watch('./build/pages/*.html').on('change', browserSync.reload)
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug-compile')).on('change', browserSync.reload)
    // gulp.watch('./app/**/*.css').on('change', browserSync.reload)
    gulp.watch('./build/js/*.js').on('change', browserSync.reload)
    // gulp.watch('./src/img/*', gulp.series('imageMinify'))
})
