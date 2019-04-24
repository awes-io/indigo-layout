# Margins and paddings

Helper classes of indents that can be used throughout the system.

## Components
- [Blade Components](./components.md)
- [Code Block](./code-block.md)
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- **Margins and paddings**
- [Icons](./icons.md)

## Margins

### Availble variables
- `.ml-{size}`: margin-left: {size}
- `.mt-{size}`: margin-top: {size}
- `.mb-{size}`: margin-bottom: {size}
- `.mr-{size}`: margin-right: {size}
- `.mx-{size}`: margin-right: {size} and margin-left: {size}
- `.my-{size}`: margin-top: {size} and margin-margin: {size}
- `.m-{size}`: margin: {size} for all sides
- `.mla, .mta, .mba, .mra, .mxa, .mya, .ma`: margins auto

### Available sizes
- 50px 
- 30px 
- 20px 
- 15px
- 10px
- 5px
- 0

### Examples
- `<div class="ml-50"></div>` will be `margin-left: 50px`
- `<div class="m-5"></div>` will be `margin: 0`

### Grid issues

- `.ml-20--tmd`: `@media (max-width: 800px) margin-left 20px`
- `.ml-20--tmd-i`: `@media (min-width: 801px) margin-left 20px`

## Paddings
The same system like in margin section.

### Examples
- `.pl-50` will be `padding-left: 50px`
- `.px-50` will be `padding-left and right 50px`
- `.py-50` will be `padding-top and bottom 50px`
- `.pt-20--mmd`: `@media (max-width: 500px) padding-top 20px`
- ...

## Customization
If you need to indent, be it margin or padding, you can easily do this using standard system classes. 
In the ```_setting.styl``` there is an array with variables that you can change to suit your needs:

```stylus
margin  = {'50': 50px, '20': 20px, def: 30px, '15': 15px, '10': 10px, '5': 5px, '0': 0}
```
The ```def``` parameter requires a standard deviation for the classes, ".mb, .mb, ...", which will be available without the modifiers ```.mb-15, .mt-10, ...```          
    
This array generates padding, which is also available with the mediaquery, which is specified in more detail in the [grid](grid.md).

### The array will generate the following classes:

As default, in the ```m``` or ```p``` class the standard indent will be set, which is specified in the variable ```def```.

