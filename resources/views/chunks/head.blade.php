<head>
    <meta charset="utf-8">
    <title>@yield('meta_title', '')</title>
    <meta name="description" content="@yield('meta_description', '')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&amp;subset=cyrillic" rel="stylesheet">
    @stack('head')

@isset($src['style']['indigo-layout'])
    <link rel="stylesheet" href="{{ $src['style']['indigo-layout'] }}">
@endisset

@if(config('indigo-layout.root_variables'))
    <style>
        :root:not([data-dark=true]) {
            @foreach(config('indigo-layout.root_variables') as $k => $v)
            {{ $k }}: {{ $v }};
            @endforeach
        }
    </style>
@endif

@if(config('indigo-layout.custom_styles'))
    <style>
        {{ config('indigo-layout.custom_styles') }}
    </style>
@endif

    <!-- config -->
    <script>AWES_CONFIG = @json(config('base-js'))</script>

    <!-- modules -->
@isset($src['script'])
    @foreach($src['script'] as $script)
        <script type="module" src="{{ $script }}"></script>
    @endforeach
@endisset

@isset($src['script_legacy'])
    @foreach($src['script_legacy'] as $script_legacy)
        <script nomodule src="{{ $script_legacy }}"></script>
    @endforeach
@endisset

    <!-- core -->
@isset($src['base'])
    @foreach($src['base'] as $base)
        <script src="{{ $base }}"></script>
    @endforeach
@endisset

</head>
