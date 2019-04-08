# Margins and paddings default classes 

Classes of indents that can be used throughout the system.

## Components
- [Navigation Generator](./nav-generator.md)
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- **Margins and paddings**


If you need to indent, be it margin or padding, you can easily do this using standard system classes. 
In the ```_setting.styl``` there is an array with variables that you can change to suit your needs:

```stylus
margin = {def: 30px, big: 50px, md: 20px, sx: 15px, sl: 10px, sm: 5px}
```
            
    
This array generates padding, which is also available with the mediaquery, which is specified in more detail in the [grid](grid.md).

### The array will generate the following classes:

As default, in the ```m``` or ```p``` class the standard indent will be set, which is specified in the variable ```def```.

#### Margins: 
- **.ml**: margin-left
- **.mt**: margin-top
- **.mb**: margin-bottom
- **.mr**: margin-right
- **.mx**: margin-right and margin-left
- **.my**: margin-top and margin-margin
- **.m**: margin for all sides
- **.mla, .mta, .mba, .mra, .mxa, .mya, .ma**: margins auto

The remaining variables will be set with a hyphen, as exampe:
- **.ml-big**: margin-left 50px
- **.mt-md**: margin-top 20px
- **.mr-sx**: margin-right 15px
- **...**

Indenting breakpoints are also available, as in the grid.

- **.ml-md--tmd**: @media (max-width: 800px) margin-left 20px
- **.ml-md--tmd-i**: @media (min-width: 801px) margin-left 20px

#### Paddings
Everything is the same as in ```margin```, but the first letter of the class is ```p```. As example:
- **.pl-big**: padding-left 50px
- **.py-big**: padding-top and bottom 50px
- **.px-big**: padding-left and right 50px
- **.pt-md--mmd**: @media (max-width: 500px) margin-top 20px
- **...**