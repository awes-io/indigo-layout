# IndigoLayout

[![Coverage report](http://gitlab.awescode.com/awes-io/indigo-layout/badges/master/coverage.svg)](https://www.awes.io/)
[![Build status](http://gitlab.awescode.com/awes-io/indigo-layout/badges/master/build.svg)](https://www.awes.io/)
[![Composer Ready](https://www.awc.wtf/awes-io/indigo-layout/status.svg)](https://www.awes.io/)
[![Downloads](https://www.awc.wtf/awes-io/indigo-layout/downloads.svg)](https://www.awes.io/)
[![Last version](https://www.awc.wtf/awes-io/indigo-layout/version.svg)](https://www.awes.io/)


This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Documentation

[Russian](./docs/index.md)

## NPM scripts

Development mode `npm run watch` or simply `npm start`
Development mode for IE `npm run watch:legacy`
Production build `npm run build`

## Installation

Via Composer

``` bash
$ composer require awes-io/indigo-layout
```

The package will automatically register itself.

You can publish the migration with:

```bash
php artisan vendor:publish --provider="AwesIO\IndigoLayout\Providers\IndigoLayoutServiceProvider" --tag="migrations"
```

After the migration has been published you can create the table for IndigoLayout by running the migrations:

```bash
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --provider="AwesIO\IndigoLayout\Providers\IndigoLayoutServiceProvider" --tag="config"
```

## Testing

You can run the tests with:

```bash
composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email :author_email instead of using the issue tracker.

## Credits

- [:author_name][link-author]
- [All Contributors][link-contributors]

## License

GNU General Public License v3.0. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/awesio/indigolayout.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/awesio/indigolayout.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/awesio/indigolayout/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/awesio/indigolayout
[link-downloads]: https://packagist.org/packages/awesio/indigolayout
[link-travis]: https://travis-ci.org/awesio/indigolayout
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/awesio
[link-contributors]: ../../contributors]
