# Layout configuration

Additional layout blade template configuration


## Components
- [Blade Components](./components.md)
- [Code Block](./code-block.md)
- [Frame Navigation](./frame-nav.md)
- [Grid](./grid.md)
- [Content](./classes.md)
- **Layout configuration**
- [Slide Up Down](./slide-up-down.md)
- [Margins and paddings](./margins.md)
- [Icons](./icons.md)


## Overwriting global configuration

It is possible to add or overwrite properties in `AWES_CONFIG`, used by front-end of the platform in your page template like this:

```php
@php
    $config = [

        // overwrite languages
        'lang' => [
            'FORMS_SEND' => 'OK',
            'FORMS_CANCEL' => 'Dismiss'
        ],

        // redefine table-builder's breakpoints
        'tableBuilder' => [
            'mediaQueries' => [
                'mobile' => '(max-width: 400px)',
                'tablet' => '(min-width: 401px) and (max-width: 800px)',
                'desktop' => '(min-width: 801px) and (max-width: 1600px)',
                'large' => '(min-width: 1601px)'
            ]
        ]
    ];
@endphp
```

## Excluding unnecessary components for current page

By default, the platform loads a list of basic components for every page. To improve page loading time you may want to disable some of them, by passing their names to `$exclude_scripts` variable, like this:

```php
@php
    $exclude_scripts = ['chart-builder', 'filter-wrapper']
@endphp
```