<?php

namespace AwesIO\IndigoLayout\Tests;

use AwesIO\IndigoLayout\IndigoLayoutServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

abstract class AbstractTestCase extends OrchestraTestCase
{
    protected function getPackageProviders($app)
    {
        return [
            IndigoLayoutServiceProvider::class,
        ];
    }
}
