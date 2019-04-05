{{-- component head theme --}}

@if(config('indigo-layout.custom_styles'))
    <style>
        /* custom styles */
        {!! trim(preg_replace("/\s+/", " ", str_replace("\n", " ", config('indigo-layout.custom_styles')))) !!}
    </style>
@endif
