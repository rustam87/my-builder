'use strict';

const imgSpritePath = $.config.root + '/assets/img/spites/raster/';
const CSSSpritePath = $.config.src + '/style/common/';

module.exports = function () {

    $.gulp.task('sprite:raster', function () {

        var spriteData =
            $.gulp.src('./source/images/*.*')

            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite-raster.scss'
            }))

            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Raster sprite',
                    message:  error.message
                }
            }));


        // Path to sprite.png
        spriteData.img.pipe($.gulp.dest(imgSpritePath));

        // Path to sprite.scss
        return spriteData.css.pipe($.gulp.dest(CSSSpritePath));

    })
};

