# Margins and paddings default classes 

Classes of indents that can be used throughout the system.

## Components
- [Navigation Generator](./nav-generator.md)
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- **Icons**

### HTML:
An example is how to display an icon:
```html
<i class="icon icon-iconname"></i>
```

### Stylus:
If you need to display an icon inside the styles, then you can use the ```icon()``` function, in which you need to specify ```icon(iconname, fontsize in px, before / after)```. The last 2 values ​​are optional.
```stylus
.block
    icon(logo, 14px, before)

.block2
    icon(logout, 15px, after)

.block3
    icon(login, 15px)

.block4
    icon(list)
```

Default icon size is ```1rem```, default position is ```:before```. 
Each icon generates its own symbol code, which you can use in regular CSS. If you go to the ```resources/svg``` folder, you can see it in the name of the icon. When adding a new icon, you need to manually register it before the name of the icon. For example: ```uEA12-clipboard.svg```, where ```clipboard``` is the name of the icon, and ```uEA12``` is its character code.
Example of using symol code:

```css
.icon {
    display: inline-block;
    text-rendering: auto;
    font: normal normal 400 14px/1 icons;
    font-size: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.icon-clipboard::before {
    content: "\ea12";
}
```

If the ```.icon``` class intersects with the classes in your system, you can replace it in ```gulpfile.js```, which is in the root of the project.

```js
gulp.task('build:icons', function(){
    return gulp.src('./resources/svg/*.svg')
        .pipe(iconfont({
            fontName: 'icons',
            fontHeight: 1000,
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff'],
            normalize: true,
            timestamp: runTimestamp
        }))
        .on('glyphs', function(glyphs, options) {
            gulp.src('./resources/svg/template/icons.styl')
                .pipe( consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontPath: '../fonts/', 
                    className: 'icon'
                }) )
                .pipe( gulp.dest('./resources/css/framework/') )
        })
    .pipe(gulp.dest('./dist/fonts/'));
})
```

You can also edit some parameters in the template file located at: ```/resources/svg/template/icons.styl```..

| Name | Preview |
|------|---------|
| angle-bottom | <i class="icon icon-angle-bottom"></i> |  
| ar-right | <i class="icon icon-ar-right"></i> | 
| arrow-left | <i class="icon icon-arrow-left"></i> | 
| arrow-right | <i class="icon icon-arrow-right"></i> | 
| box-down | <i class="icon icon-box-down"></i> | 
| box-minus | <i class="icon icon-box-minus"></i> | 
| box-pause | <i class="icon icon-box-pause"></i> | 
| box-plus | <i class="icon icon-box-plus"></i> | 
| box | <i class="icon icon-box"></i> | 
| briefcase | <i class="icon icon-briefcase"></i> | 
| call | <i class="icon icon-call"></i> | 
| card | <i class="icon icon-card"></i> | 
| checkbox | <i class="icon icon-checkbox"></i> | 
| circle-check | <i class="icon icon-circle-check"></i> | 
| circle-clock | <i class="icon icon-circle-clock"></i> | 
| circle-cross | <i class="icon icon-circle-cross"></i> | 
| circle-plus | <i class="icon icon-circle-plus"></i> | 
| clipboard | <i class="icon icon-clipboard"></i> | 
| cross | <i class="icon icon-cross"></i> | 
| data-error | <i class="icon icon-data-error"></i> | 
| data-time | <i class="icon icon-data-time"></i> | 
| database-error | <i class="icon icon-database-error"></i> | 
| database | <i class="icon icon-database"></i> | 
| dfcheck | <i class="icon icon-dfcheck"></i> | 
| document | <i class="icon icon-document"></i> | 
| dots | <i class="icon icon-dots"></i> | 
| down | <i class="icon icon-down"></i> | 
| drag | <i class="icon icon-drag"></i> | 
| exel | <i class="icon icon-exel"></i> | 
| eye | <i class="icon icon-eye"></i> | 
| eye2 | <i class="icon icon-eye2"></i> | 
| fb | <i class="icon icon-fb"></i> | 
| file | <i class="icon icon-file"></i> | 
| filter | <i class="icon icon-filter"></i> | 
| flag | <i class="icon icon-flag"></i> | 
| gift | <i class="icon icon-gift"></i> | 
| gp | <i class="icon icon-gp"></i> | 
| graph | <i class="icon icon-graph"></i> | 
| hdd | <i class="icon icon-hdd"></i> | 
| head | <i class="icon icon-head"></i> | 
| in | <i class="icon icon-in"></i> | 
| intelligence | <i class="icon icon-intelligence"></i> | 
| link | <i class="icon icon-link"></i> | 
| loading | <i class="icon icon-loading"></i> | 
| logo | <i class="icon icon-logo"></i> | 
| logout | <i class="icon icon-logout"></i> | 
| mastercard | <i class="icon icon-mastercard"></i> | 
| message | <i class="icon icon-message"></i> | 
| money | <i class="icon icon-money"></i> | 
| nav | <i class="icon icon-nav"></i> | 
| no-access | <i class="icon icon-no-access"></i> | 
| openin | <i class="icon icon-openin"></i> | 
| pin | <i class="icon icon-pin"></i> | 
| planner | <i class="icon icon-planner"></i> | 
| plus | <i class="icon icon-plus"></i> | 
| report | <i class="icon icon-report"></i> | 
| road | <i class="icon icon-road"></i> | 
| ruppor | <i class="icon icon-ruppor"></i> | 
| schedule | <i class="icon icon-schedule"></i> | 
| search | <i class="icon icon-search"></i> | 
| sell | <i class="icon icon-sell"></i> | 
| service | <i class="icon icon-service"></i> | 
| settings | <i class="icon icon-settings"></i> | 
| smile | <i class="icon icon-smile"></i> | 
| speed | <i class="icon icon-speed"></i> | 
| stock | <i class="icon icon-stock"></i> | 
| stop | <i class="icon icon-stop"></i> | 
| storage | <i class="icon icon-storage"></i> | 
| timelaps | <i class="icon icon-timelaps"></i> | 
| twousers | <i class="icon icon-twousers"></i> | 
| up | <i class="icon icon-up"></i> | 
| user | <i class="icon icon-user"></i> | 
| visa | <i class="icon icon-visa"></i> | 
| word | <i class="icon icon-word"></i> | 
| git | <i class="icon icon-git"></i> | 
| pencil2 | <i class="icon icon-pencil2"></i> | 
| question | <i class="icon icon-question"></i> | 
| star-circle | <i class="icon icon-star-circle"></i> | 
| hashtag | <i class="icon icon-hashtag"></i> |
| loading-circle | <i class="icon icon-loading-circle"></i> | 
