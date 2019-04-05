<head>
    <meta charset="utf-8">
    <title>@yield('meta_title', '')</title>
    <meta name="description" content="@yield('meta_description', '')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- head block -->
    @stack('head')

    <!-- styles & fonts -->
    @fonts() @endfonts
    @styles(['items' => $src['css']]) @endstyles
    @theme() @endtheme

    <!-- config -->
    <script>AWES_CONFIG = @json(config('indigo-layout.frontend'))</script>

    <!-- scripts -->
    @scripts(['items' => $src['js'], 'nomodule' => false]) @endscripts
    @scripts(['items' => $src['legacy'], 'nomodule' => true]) @endscripts
    @scripts(['items' => [$src['js']['base-js']]]) @endscripts
</head>
