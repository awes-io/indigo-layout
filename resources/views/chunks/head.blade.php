<head>
    <meta charset="utf-8">
    <title>@yield('meta_title', '')</title>
    <meta name="description" content="@yield('meta_description', '')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    @if(config('indigo-layout.font'))
        <!-- font -->
        <link href="{{ config('indigo-layout.font') }}" rel="stylesheet">
    @endisset

    <!-- head block -->
    @stack('head')

    @isset($src['css']['indigo-layout'])
        <!-- main indigo css -->
        <link rel="stylesheet" href="{{ $src['css']['indigo-layout'][0] }}">
    @endisset

    @if(config('indigo-layout.custom_styles'))
        <style>
            /* custom styles */
            {!! trim(preg_replace("/\s+/", " ", str_replace("\n", " ", config('indigo-layout.custom_styles')))) !!}
        </style>
    @endif

    <!-- config -->
    <script>AWES_CONFIG = @json(config('indigo-layout.frontend'))</script>

    <!-- modules -->
    @isset($src['js'])
        @foreach($src['js'] as $key => $scripts)
            @foreach($scripts as $script)
                @if($key !== 'base-js')<script type="module" src="{{ $script }}"></script>@endif
            @endforeach
        @endforeach
    @endisset

    @isset($src['legacy'])
        @foreach($src['legacy'] as $scripts_legacy)
            @foreach($scripts_legacy as $script_legacy)
                <script nomodule src="{{ $script_legacy }}"></script>
            @endforeach
        @endforeach
    @endisset

    <!-- core js file -->
    @isset($src['js'])
        @foreach($src['js']['base-js'] as $base)
            <script src="{{ $base }}"></script>
        @endforeach
    @endisset

</head>
