<?php

return [

    //This key pass to vuejs config
    'frontend' => [
        'key' =>  env('AWES_CDN_KEY', 'undefined')
    ],

    'name' => env('APP_NAME', 'Awes.IO'),

    'url' => env('APP_URL', 'https://example.com'),

    'logo' => env('APP_LOGO', 'https://static.awes.io/logo-blue.svg'),

    'auth_bg_left' => '',

    'auth_bg_full' => '',

    'dist' => [
        'js/main.js',
        'js/main.legacy.js',
        'css/main.css'
    ],
    // TODO: migrate colors to rgba
    'chart_colors' => [
        'light-blue' => '#37b3c4',
        'blue' => '#3f87c7',
        'dark-blue' => '#3f4bb5',
        'violet' => 'rgba(135, 43, 188, 0.6)',
        'pink' => '#e05d70',
        'yellow' => '#bf8b2f',
        'orange' => '#a95425',
        'red' => '#bc2b4d',
        'green' => '#13ae45'
    ],

    'nav' => [
        'expanded' => true
    ],

    'footer_copyright' => '© 2019 - Proudly powered on <a href="https://www.awes.io" target="_blank">Awes.IO Platform</a>'
];
