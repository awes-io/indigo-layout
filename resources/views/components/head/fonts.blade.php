{{-- component head fonts --}}

@if(config('indigo-layout.fonts'))
    @php $items = config('indigo-layout.fonts'); @endphp
    @if (!is_array($items) && $items != "")
        @php $items = [$items]; @endphp
    @endif

    @if (is_array($items) && count($items) > 0)
        <!-- Component: Fonts -->
        @foreach($items as $item)
            <link href="{{ $item }}" rel="stylesheet">
        @endforeach
    @endif
@endisset
