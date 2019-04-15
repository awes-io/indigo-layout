@php
    $not_domain_rule = ":not([href^='" . implode("']):not([href^='", config('indigo-layout.environment_urls')) . "'])";
@endphp

<style>
    a[href^='http']{!! $not_domain_rule !!}:after,
    a[href^='https']{!! $not_domain_rule !!}:after,
    a[href^='//']{!! $not_domain_rule !!}:after,
    a.external-link:after {
        content: ' \ea34';
        font-family: 'icons';
        font-size: 0.75em;
    }
    a.no-icon:after {
        display: none;
    }
</style>
