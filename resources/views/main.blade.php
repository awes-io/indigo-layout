<!DOCTYPE html>
<html lang="{{ App::getLocale() }}" @themeswitcher>

@include('indigo-layout::chunks.head')

<body>
<content-wrapper class="mainwrapper">
    <div class="frame">
        @notify(['class' => 'position-top-center', 'name' => 'top', 'stack' => 'top', 'config' => "{theme: 'inline, rounded'}"])
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="frame__overlay" v-show="$awesLayoutCrm.togglenav || $awesLayoutCrm.showUserMenu" @click="$awesLayoutCrm.overlayClick"></div>
        </transition>
        @isset($sidebar)
            <div class="frame__aside" id="aside">
                <div class="frame__aside-line">
                    <span class="frame__aside-open g-res--tablet-lg" :class="{ active: $awesLayoutCrm.togglenav }" @click="$awesLayoutCrm.openNav"><span></span></span>
                    <h2 class="frame__aside-title">{!! config('indigo-layout.name') !!}</h2>
                    @if(config('indigo-layout.simple_navs.btn') && !Auth::check())<a class="btn frame__aside-callbtn" href="{{ config('indigo-layout.simple_navs.btn.link') }}">{{ config('indigo-layout.simple_navs.btn.text') }}</a>@endif
                    {{--<button class="frame__aside-ava" @click="$awesLayoutCrm.showUserMenu = ! $awesLayoutCrm.showUserMenu"><i class="icon icon-user novatar novatar_box"></i></button>--}}
                </div>
                <nav class="frame__aside-nav" v-bind:class="{ active: $awesLayoutCrm.togglenav }">
                    <div class="frame__aside-mhead g-res--tablet-lg"><a class="frame__aside-close" href="" @click.prevent="$awesLayoutCrm.openNav()"><i class="icon icon-cross"></i></a>
                        <h4 class="frame__aside-mtitle"><span>{!! config('indigo-layout.name') !!}</span></h4>
                    </div>
                    @navSidebar(['navigation' => $sidebar])
                </nav>
            </div>
        @endisset

        <div class="frame__right @if(!Auth::check()) frame__right_nui @endif">
            @notify(['name' => 'header', 'stack' => false, 'config' => "{theme: 'inline', timeout: 0}"])
            <div class="frame__header">
                <div class="frame__header-top">
                    <form class="frame__search" id="search" action="{{ config('indigo-layout.search.url') }}" method="get"> <span class="frame__search-link"><i class="icon icon-search"></i></span>
                        <div class="frame__search-hidden"><input class="frame__search-input" name="{{ config('indigo-layout.search.name') }}" type="text" placeholder="Search..."><button class="frame__search-btn" type="submit">Search</button><span class="frame__search-close"><i class="icon icon-cross"></i></span></div>
                    </form>


                    @if(Auth::check())
                        {{--USER AVATAR--}}
                        <button class="frame__userava" @click="$awesLayoutCrm.showUserMenu = ! $awesLayoutCrm.showUserMenu">
                            @if(isset($user_avatar))
                                <img src="{{ $user_avatar }}" />
                            @else
                                <i class="icon icon-user novatar novatar_box"></i>
                            @endif
                        </button>
                    @endif

                    @if(!Auth::check())
                        <div class="frame__header-rlinks">
                            <div class="frame__rccell">
                                <theme-switcher></theme-switcher>
                            </div>
                            @if(config('indigo-layout.simple_navs.links'))
                                @foreach(config('indigo-layout.simple_navs.links') as $link)
                                    <a class="frame__header-link" href="{{ $link['link'] ?? '' }}">{{ $link['text'] ?? '' }}</a>
                                @endforeach
                            @endif
                            @if(config('indigo-layout.simple_navs.btn'))
                                <a class="btn frame__header-callbtn" href="{{ config('indigo-layout.simple_navs.btn.link') }}">{{ config('indigo-layout.simple_navs.btn.text') }}</a>
                            @endif
                        </div>
                    @endif
                </div>
                <div class="frame__header-line">
                    @isset($h1)
                        <div class="frame__header-left">
                            <h1 class="frame__header-title">{!! $h1 !!}</h1>
                        </div>
                    @endisset

                    @hasSection('create_button')
                        <div class="frame__header-btn">
                            @yield('create_button', '')
                        </div>
                    @endif
                </div>
                @if(Auth::check())
                    <transition name="user-menu">
                        <div class="user-menu" v-show="$awesLayoutCrm.showUserMenu" style="display: none;">
                            <ul class="user-menu__list"><button class="user-menu__close" @click="$awesLayoutCrm.showUserMenu = ! $awesLayoutCrm.showUserMenu">&times;</button>
                                <div class="cm-item">
                                    <div class="cm-item__panel is-secondary">
                                        <strong class="user-menu__title">{{ Auth::user()->name }}</strong>
                                        {{--<small class="user-menu__desc">Standart until 10 november<br>5 users $500 per month</small>--}}
                                        @isset($userNavigation)
                                            <nav class="user-menu__nav" aria-label="Profile navigation">
                                                @navUser(['navigation' => $userNavigation])
                                            </nav>
                                        @endisset
                                        {{--<label class="progress user-menu__progress">--}}
                                        {{--<span>519.05 MB</span> of 2.5 GB used--}}
                                        {{--<progress max="2500" value="519">519 MB of 2.5 GB used</progress>--}}
                                        {{--</label>--}}
                                    </div>
                                </div>
                                <div class="cm-item">
                                    <div class="cm-item__panel">
                                        <theme-switcher></theme-switcher>
                                    </div>
                                </div>
                                {{--<div class="cm-item">--}}
                                {{--<div class="cm-item__panel"><strong class="user-menu__companies" id="companies_list">4 companies</strong>--}}
                                {{--<ul class="user-menu__companies-list" aria-labelledby="companies_list">--}}
                                {{--<li><a href="">Awesome</a></li>--}}
                                {{--<li><a href="">Microsoft</a></li>--}}
                                {{--<li><a href="">Apple</a></li>--}}
                                {{--<li><a href="">Tesla</a></li>--}}
                                {{--</ul>--}}
                                {{--</div>--}}
                                {{--</div>--}}
                            </ul>
                        </div>
                    </transition>
                @endif
            </div>
            

            <div class="frame__content">
                @isset($children_top) @navTop(['navigation' => $children_top]) @endisset
                @notify(['name' => 'frame', 'stack' => false, 'config' => "{theme: 'inline', status: 'warning', timeout: 0}"])
                <div class="frame__inlayout">
                    @if (!empty($__env->yieldContent('pagemap')))
                        <div class="frame__inlayout-aside">
                            <page-map content=".frame__inlayout-content" :offset="-70" :sticky='{top: 15, bottom: 15}'>
                                @yield('pagemap')
                            </page-map>
                        </div>
                    @endif
                    <div class="frame__inlayout-content">
                        @yield('content')
                    </div>
                </div>
            </div>

            @if(config('indigo-layout.footer_copyright'))
                <span class="frame__copyright">{!! config('indigo-layout.footer_copyright') !!}</span>
            @endif

            {{-- <div class="float-icns"><button class="float-icns__icon float-icns__icon_helper"></button></div>    --}}


        </div>
    </div>
    @if (!empty($__env->yieldContent('modals')))
        <div class="modals">
            @yield('modals')
        </div>
    @endif
</content-wrapper>
</body>
</html>
