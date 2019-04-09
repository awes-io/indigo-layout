# Navigation generator

## Components
- **Navigation generator**
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- [Icons](./icons.md)

## Default generator

For Indigo Layout you can use 
[awes-io/navigation](https://www.awes.io/documentation/components/navigation) package
or provide your own navigation generator.

## Custom generator

You can create your own nav generator. 

It have to [compose](https://laravel.com/docs/5.7/views#view-composers) `$nav` variable to all views.

`$nav` have to be links array with items described in [Frame Navigation](./frame-nav.md) parameters
