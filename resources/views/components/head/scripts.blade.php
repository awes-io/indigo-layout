{{-- component head scripts --}}

@isset($items)
    @if (!isset($exclude))
        @php
            $exclude = [];
        @endphp
    @endif
    <!-- component: JS scripts -->
    @foreach($items as $key => $subItems)
        @foreach($subItems as $item)
            @if(!in_array($key, $exclude))
                <script @isset($nomodule) @if (!$nomodule) type="module" @else nomodule @endif @endif src="{{ $item }}"></script>
            @endif
        @endforeach
    @endforeach
@endisset
