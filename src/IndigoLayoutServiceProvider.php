<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function getPackageName(): string
    {
        return 'indigo-layout';
    }

    public function getPath(): string
    {
       return __DIR__;
    }
}
