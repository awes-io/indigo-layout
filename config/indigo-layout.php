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

    'nav' => [
        'expanded' => true
    ],

    'footer_copyright' => '© 2019 - Proudly powered on <a href="https://www.awes.io" target="_blank">Awes.IO Platform</a>'
];
