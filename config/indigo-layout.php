<?php

return [

    'name' => env('APP_NAME', 'AwesCRM'),

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

    'bg' => 'https://picsum.photos/600/900/?random',
    
    'src' => [
        'script' => 'awes-io/indigo-layout/v0.x.x/js/main.js',
        'script_legacy' => 'awes-io/indigo-layout/v0.x.x/js/main.legacy.js',
        'style' => 'awes-io/indigo-layout/v0.x.x/css/main.css'
    ],

    'local' => [
        'script' => '/static/indigo-layout/js/main.js',
        'script_legacy' => '/static/indigo-layout/js/main.legacy.js',
        'style' => '/static/indigo-layout/css/main.css'
    ]

];
