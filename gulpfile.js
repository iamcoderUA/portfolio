const
    gulp           = require('gulp'),
    webpack        = require('webpack'),
    gulpWebpack    = require('gulp-webpack'),
    webpackConfig  = require('./webpack.config.js'),
    pug            = require('gulp-pug'),        
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync').create(),
    plumber        = require('gulp-plumber'),
    notify         = require('gulp-notify'),
    del            = require('del'),

    autoprefixer   = require('gulp-autoprefixer'),
    cheerio        = require('gulp-cheerio'),
    csso           = require('gulp-csso'),
    imagemin       = require('gulp-imagemin'),
    normalize      = require('node-normalize-scss'),
    rename         = require('gulp-rename'),        
    replace        = require('gulp-replace'),        
    sourcemaps     = require('gulp-sourcemaps'),
    svgSprite      = require('gulp-svg-sprites'),
    svgmin         = require('gulp-svgmin'),
    uglifyJSPlugin = require('uglifyjs-webpack-plugin');        
        

const paths = {
    root: './prod',

    pug:      {
                src: 'src/pug/**/*.pug',
                pages: 'src/pug/pages/*.pug',
                dest: 'prod/',
    },
    styles:   {
                src: 'src/scss/**/*.scss',
                dest: 'prod/css/',
    },
    scripts:  {
                src: 'src/js/**/*.js',
                dest: 'prod/js/',
    },
    images:   {
                src: 'src/img/{bg,content,icons}/*',
                dest: 'prod/img/',
    },
    fonts:    {
                src: 'src/fonts/**/*.*',
                dest: 'prod/fonts/',
    },
};
    
//  SVG
function sprites() {
    return gulp.src('src/img/svg/*.svg')
        .pipe(plumber())    
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: false },
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({ 
            mode: 'symbols',
            preview: false,
         }))
        .pipe(gulp.dest('src/img/'))        
        .pipe(rename({ 
            basename: 'sprite',
            suffix: '.min',
        }))
        .pipe(notify('Create sprite svg success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('prod/img/'));
}

// Development 
function templates() {
    return gulp.src(paths.pug.pages)
        .pipe(plumber())
        .pipe(pug({ pretty: '\t' }))
        .pipe(notify('Template success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.pug.dest));
}

function scss() {
    return gulp.src('./src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass({ includePaths: normalize.includePaths }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify('Style success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dest));
}
        
function scripts() {
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify('Scripts success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.scripts.dest));
}

function imgMin() {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(notify('Image success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(notify('Fonts success'))
        .pipe(gulp.dest(paths.fonts.dest))
}

function clean() {
	return del(paths.root);
}

function watch() {
	gulp.watch(paths.pug.src, templates);    
	gulp.watch(paths.styles.src, scss);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, imgMin);    
    gulp.watch(paths.fonts.src, fonts);        
}

function server() {
  browserSync.init({
    server: paths.root
  });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// Exports
exports.sprites     = sprites;
exports.templates   = templates;
exports.scss        = scss;
exports.scripts     = scripts;
exports.imgMin      = imgMin;
exports.clean       = clean;
exports.watch       = watch;

// Tasks
gulp.task('build', gulp.series(
    clean,
    sprites,
    gulp.parallel(templates, scss, scripts, imgMin, fonts)
));

gulp.task('default', gulp.series(
    sprites,
    gulp.parallel(templates, scss, scripts, imgMin, fonts),
	gulp.parallel(watch, server)
));
