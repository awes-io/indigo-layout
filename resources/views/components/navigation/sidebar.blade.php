@isset($navigation)
    <frame-nav :links='@json($navigation)' @if(config('indigo-layout.nav.expanded')) expanded @endif>
        @placeholder(['type' => 'mnav'])
        @placeholder(['type' => 'nav'])
        @if(!Auth::check())
            <template slot="difnav">
                <ul class="frame__aside-mnav">
                    @if(config('indigo-layout.simple_navs.links'))
                        @foreach(config('indigo-layout.simple_navs.links') as $link)
                            <li><a class="frame__aside-link" href="{{ $link['link'] ?? '' }}">{{ $link['text'] ?? '' }}</a></li>
                        @endforeach
                    @endif
                    <li class="frame__aside-link">
                        <theme-switcher></theme-switcher>
                    </li>
                </ul>
            </template>
        @endif
    </frame-nav>
@endisset
