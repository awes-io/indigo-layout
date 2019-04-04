{{-- component head styles --}}

@isset($items)
    <!-- component: CSS styles -->
    @foreach($items as $key => $subItems)
        @foreach($subItems as $item)
            <link rel="stylesheet" href="{{ $item }}">
        @endforeach
    @endforeach
@endisset
