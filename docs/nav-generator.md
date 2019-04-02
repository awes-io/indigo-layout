# Navigation generator

## Components
- **Navigation generator**
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- [Slide Up Down](./slide-up-down.md)

## Default generator

Default generator gets navs from config `navs` array. Every item have to contain name and link or children.
Additionally it can contain icon. Read more about nav structure you can in [Frame Navigation](./frame-nav.md)

### Active link binding

By default link is set as active if a current url contains it.

You can add an `exact` param to the nav item if you want it active only if the current url equal to nav link.

To exclude nav item from active binding add an `'active' => false` param to it. 

## Custom generator

You can create your own nav generator. 

To replace default generator bind your generator class to `nav-generator` in the config file.

Your generator class should implements `AwesIO\IndigoLayout\Nav\NavGeneratorInterface` and have `getNavs()` method that
returns links array with items described in [Frame Navigation](./frame-nav.md) parameters
