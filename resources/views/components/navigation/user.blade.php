@isset($navigation)
    @if(isset($navigation))
        <ul>
            @foreach($navigation as $item)
                <li class="@isset($item['class']) {{ $item['class'] }} @endisset">
                    <a href="{{ $item['link'] }}" class="@isset($item['active']) active @endisset">{{ $item['name'] }}</a>
                </li>
            @endforeach
        </ul>
    @endif
@endisset
