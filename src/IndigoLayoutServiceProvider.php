<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Blade;
use AwesIO\IndigoLayout\Nav\{
    NavChecker, NavGenerator
};

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function boot()
    {
        $generator = config('indigo-layout.nav-generator', NavGenerator::class);
        if ($generator && class_exists($generator)) {
            $navs = (new $generator)->getNavs();
            NavChecker::check($navs);
            View::composer('*', function ($view) use ($navs) {
                $view->with('navs', $navs);
            });
        }

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
