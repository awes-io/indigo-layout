{{-- component head scripts --}}

@isset($items)
    <!-- component: JS scripts -->
    @foreach($items as $key => $subItems)
        @foreach($subItems as $item)
            @if($key !== 'base-js')<script @isset($nomodule) @if (!$nomodule) type="module" @else nomodule @endif @endif src="{{ $item }}"></script>@endif
        @endforeach
    @endforeach
@endisset
