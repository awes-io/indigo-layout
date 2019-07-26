<head>
    <meta charset="utf-8">
    <title>@yield('meta_title', '')</title>
    <meta name="description" content="@yield('meta_description', '')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- head block -->
    @stack('head')

    <!-- styles & fonts -->
    @fonts
    @styles(['items' => $src['css']])
    @theme
    @externalLink

    <!-- config -->
    <script>AWES_CONFIG = @json(array_merge_recursive(config('indigo-layout.frontend'), [
        'lang' => app(\Illuminate\Contracts\Translation\Translator::class)->get('indigo-layout::js')
    ], (isset($awes_custom_config) ? $awes_custom_config : [])))</script>

    <!-- scripts -->
    @scripts([
        'items' => $src['js'],
        'nomodule' => false,
        'exclude' => array_merge(['base-js'], (isset($exclude_scripts) ? $exclude_scripts : []))
    ])
    {{-- if you need IE11 uncomment next line --}}
    {{-- @scripts(['items' => $src['legacy'], 'nomodule' => true]) --}}
    @scripts(['items' => [$src['js']['base-js']]])
</head>
