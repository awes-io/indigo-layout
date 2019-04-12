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

    <!-- config -->
    <script>AWES_CONFIG = @json(config('indigo-layout.frontend'))</script>

    <!-- scripts -->
    @scripts(['items' => $src['js'], 'nomodule' => false])
    @scripts(['items' => $src['legacy'], 'nomodule' => true])
    @scripts(['items' => [$src['js']['base-js']]])

    {{-- external links styles NEED IMPROVEMENT --}}
    @php
        $ignore_domains = ['awes.io', 'github.com']; // config ?
        $not_domain_rule = ":not([href*='" . implode("']):not([href*='", $ignore_domains) . "'])";
    @endphp

    <style>
        a[href^="http"]{!! $not_domain_rule !!}:after,
        a[href^="//"]{!! $not_domain_rule !!}:after,
        a.external-link:after {
            content: " \ea34";
            font-family: 'icons';
        }
        a.no-icon:after {
            display: none;
        }
    </style>
    {{-- END external links styles NEED IMPROVEMENT --}}
</head>
