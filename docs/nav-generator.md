# Navigation generator

## Components
- [Content Wrapper](./content-wrapper.md)
- **Navigation generator**
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)

## Default generator

For Indigo Layout you can provide your own navigation generator or use one of ours.

Currently available [config-nav-generator](https://www.awes.io/documentation/components/config-nav-generator)

## Custom generator

You can create your own nav generator. 

It have to [compose](https://laravel.com/docs/5.7/views#view-composers) `$nav` variable to all views.

`$nav` have to be links array with items described in [Frame Navigation](./frame-nav.md) parameters
