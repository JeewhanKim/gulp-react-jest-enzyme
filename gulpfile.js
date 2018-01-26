'use strict';

const gulp = require('gulp')
  , del = require('del')
  , inject = require('gulp-inject')
  , watch = require('gulp-watch')
  , browserify = require('browserify')
  , babelify = require('babelify')
  , source = require('vinyl-source-stream')

gulp.task('default', ['clean'], () => {
  gulp.start('dev');
});

gulp.task('dev', [
  'html',
  'css',
  'fonts',
  'js',
  'bundle-react-app'
], () => {
  console.log('index.html has been created in `dist/` folder.')
});

gulp.task('html', () => {
  const indexGenerator = () => {
    return inject(
      gulp.src(['app/views/**/*', '!' + 'app/views/index.html']), {
        starttag: `<!-- inject:views -->`,
        transform: (filepath) => {
          let rootDir = filepath.replace(`/app/views/`, ``)
          return rootDir.includes('html') ?   
             `<div id="${rootDir}"><a href="content/${rootDir}">${rootDir}</a></div>`
             : `<div id="${rootDir}">${rootDir}</div>`
        },
        endtag: '<!-- endinject -->'
      }
    )
  }

  gulp.src('app/views/index.html')
  .pipe(indexGenerator()) 
  .pipe(gulp.dest('./dist/'));
})

gulp.task('css', () => {
  // create gulp-sass tasks if it needs
  gulp.src('app/styles/**/*.css')
  .pipe(gulp.dest('./dist/styles'));
})

gulp.task('fonts', () => {
  gulp.src('app/styles/fonts/**/*')
  .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('js', () => {
  // create JS minify & concat tasks if it needs
  // gulp.src('app/scripts/**/*.js')
  // .pipe(gulp.dest('./dist/'));
})

gulp.task('bundle-react-app', () => {
  return browserify({
      extensions: ['.js', '.jsx'],
      entries: 'app/scripts/index.js',
      debug: true
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", (err) => { console.log("[bundle-react-app] error: " + err.message) })
    .pipe(source('scripts.min.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', (cb) => {
	return del(['./dist/**'], cb);
})