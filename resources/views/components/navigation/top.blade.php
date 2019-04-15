@isset($navigation)
    @if(isset($navigation))
        <div class="header-tabs">
            <ul class="header-tabs__list">
                @foreach($navigation as $item)
                    <li class="header-tabs__block">
                        <a href="{{ $item['link'] }}" class="header-tabs__link @isset($item['active']) active @endisset">{{ $item['name'] }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    @endif
@endisset
