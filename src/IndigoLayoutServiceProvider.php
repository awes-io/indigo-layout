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

    protected function registerDirectives()
    {
        $directives = [
            // Chart
            'cardchart' => 'card.chart',
            // Filter
            'filtergroup' => 'filter.group',
            // Analytics
            'linechart' => 'analytics.line-chart',
            // Head
            'theme' => 'head.theme',
            'styles' => 'head.styles',
            'fonts' => 'head.fonts',
            'scripts' => 'head.scripts',
            'themeswitcher' => 'head.theme-switcher',
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
