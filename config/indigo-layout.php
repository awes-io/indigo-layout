<?php

return [

    'name' => env('APP_NAME', 'Awes.IO'),
    'url' => env('APP_URL', 'https://example.com'),
    'logo' => env('APP_LOGO', 'https://static.awes.io/logo-blue.svg'),
    'auth_bg_left' => '',
    'auth_bg_full' => '',

//    'simple_navs' => [
//        'btn' => [
//            'link' =>'https://your-site/',
//            'text' => 'Main button'
//        ],
//        'links' => [
//            [
//                'link' =>'https://your-site/',
//                'text' => 'Link'
//            ]
//        ],
//    ],
//
//    'root_variables' => [
//        '--tc_aside_gradient' => 'linear-gradient(0deg,#0B88EE 0%,#122ACC)'
//    ],
//
//    'custom_styles' => "html p { color: black }",

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
