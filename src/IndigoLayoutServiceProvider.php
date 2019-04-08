<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;
use Illuminate\Support\Facades\Blade;

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function boot()
    {
        // Chart components
        Blade::component('indigo-layout::components.card.chart', 'cardchart');

        // Filter components
        Blade::component('indigo-layout::components.filter.group', 'filtergroup');

        // Analytics components
        Blade::component('indigo-layout::components.analytics.line-chart', 'linechart');

        // Head components
        Blade::component('indigo-layout::components.head.theme', 'theme');
        Blade::component('indigo-layout::components.head.styles', 'styles');
        Blade::component('indigo-layout::components.head.fonts', 'fonts');
        Blade::component('indigo-layout::components.head.scripts', 'scripts');
        Blade::component('indigo-layout::components.head.theme-switcher', 'themeswitcher');

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
