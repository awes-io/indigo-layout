<?php

namespace AwesIO\IndigoLayout;

use AwesIO\BaseJS\AwesProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Cookie\Middleware\EncryptCookies;

class IndigoLayoutServiceProvider extends AwesProvider
{

    public function boot()
    {
        $this->registerDirectives();
        $this->registerComponents();

        $this->app->resolving(EncryptCookies::class, function ($object) {
            $object->disableFor('theme_dark');
        });

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

    protected function registerComponents()
    {
        $components = [
            // Tables
            'table' => 'table.default',

            //Filter
            'filter' => 'filter.default',

            // Card statuses
            'errorCard' => 'base.error',
            'emptyCard' => 'base.empty',
            'loadingCard' => 'base.loading',
            'wrontConfigCard' => 'base.wrong-config'
        ];

        foreach ($components as $key => $value) {
            Blade::component('indigo-layout::components.'.$value, $key);
        }
    }

    protected function registerDirectives()
    {
        $directives = [
            // Chart
            'chart' => 'chart.default',
            'cardchartline' => 'chart.card-line',
            'cardchartdoughnut' => 'chart.card-doughnut',
            'chartBarLine' => 'chart.bar-line',
            // Filter
            'filtergroup' => 'filter.group',
            // Head
            'theme' => 'head.theme',
            'styles' => 'head.styles',
            'fonts' => 'head.fonts',
            'scripts' => 'head.scripts',
            'themeswitcher' => 'head.theme-switcher',
            'externalLink' => 'head.external-link',
            // Content Placeholder
            'placeholder' => 'base.placeholder',
            // Navigation
            'navSidebar' => 'navigation.sidebar',
            'navTop' => 'navigation.top',
            'navUser' => 'navigation.user',
        ];

        foreach ($directives as $key => $value) {
            Blade::directive($key, function ($expression) use ($value) {
                if (empty($expression)) {
                    $expression = '[]';
                };
                return '<?php echo view(\'indigo-layout::components.' . $value . '\', ' . $expression . ')->render(); ?>';
            });
        }
    }
}
