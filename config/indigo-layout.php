<?php

return [

    'name' => env('APP_NAME', 'AwesCRM'),

    'links' => [
        //'sign_in' => 'https://your-site/'
    ],
    
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
