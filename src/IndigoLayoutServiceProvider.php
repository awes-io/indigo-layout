<?php

namespace AwesIO\IndigoLayout;

use Illuminate\Support\ServiceProvider;
use AwesIO\BaseJS\PackageTools;

class IndigoLayoutServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../config/indigo-layout.php' => config_path('indigo-layout.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/../dist' => public_path('static/indigo-layout'),
        ], 'awes-public');

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'indigo-layout');

        PackageTools::addSrc('indigo-layout', config('indigo-layout.src'));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/indigo-layout.php',
            'indigo-layout'
        );
    }
}
