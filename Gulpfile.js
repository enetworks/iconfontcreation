var gulp = require('gulp'); 
var watch       = require('gulp-watch');
var rename      = require("gulp-rename");
var iconfont    = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var fontName = 'enwfont'; // シンボルフォント名
//--------------------------
// add task - gulp-iconfont
gulp.task('Iconfont', function(){
  gulp.src(['src/icons/*.svg'])
    .pipe(iconfont({
      fontName: fontName, // required
      appendUnicode: true
    }))
    .on('glyphs', function(codepoints,opt) {
        var options = {
            glyphs: codepoints,
            fontName: fontName,
            fontPath: '../fonts/', // フォントパスをCSSからの相対パスで指定
            className: 'myfont' // CSSのフォントのクラス名を指定
        };
        console.log(codepoints);
        // シンボルフォント用のcssを作成
        gulp.src('src/templates/myfont.css')
            .pipe(consolidate('lodash', options))
            .pipe(rename({ basename:fontName }))
            .pipe(gulp.dest('dest/css/')); // CSSの吐き出し先を指定
        // シンボルフォント一覧のサンプルHTMLを作成
        gulp.src('src/templates/myfont.html')
            .pipe(consolidate('lodash', options))
            .pipe(rename({ basename:'sample' }))
            .pipe(gulp.dest('dest/')); // サンプルHTMLの吐き出し先を指定
    })
    .pipe(gulp.dest('dest/fonts/'));
});
//-----------
// SVGファイルを監視
gulp.task('watch', function() {
    gulp.watch('src/icons/*.svg', ['Iconfont']);
});
//--------------
// default task
gulp.task('default', ['watch']);