'use strict';

module.exports = function() {
    $.gulp.task('copy:fonts', function() {
        return $.gulp.src($.config.src + '/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
            .pipe($.gulp.dest($.config.root + '/assets/fonts'));
    });
};