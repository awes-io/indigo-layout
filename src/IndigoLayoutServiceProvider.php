<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;
use Illuminate\Support\Facades\View;

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function boot()
    {
        parent::boot();

        View::composer('*', function ($view) {
            $view->with('navs', config('indigo-layout.navs'));
        });
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
