<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;
use Illuminate\Support\Facades\Blade;

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function boot()
    {
        Blade::component('indigo-layout::components.card.chart', 'cardchart');

        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'indigo-layout');

        parent::boot();
    }

    public function getPackageName(): string
    {
        return 'indigo-layout';
    }

    public function getPath(): string
    {
        return __DIR__;
    }
}
