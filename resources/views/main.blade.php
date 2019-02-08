<!DOCTYPE html>
<html lang="en">

@include('indigo-layout::chunks.head')

<body>
<div class="mainwrapper" id="awes-app">
    <div class="frame">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="frame__overlay" v-show="$awesLayoutCrm.togglenav || $awesLayoutCrm.showUserMenu" @click="$awesLayoutCrm.overlayClick"></div>
        </transition>
        @isset($navs)
        <div class="frame__aside" id="aside">
            <div class="frame__aside-line"><span class="frame__aside-open g-res--tablet-lg" :class="{ active: $awesLayoutCrm.togglenav }" @click="$awesLayoutCrm.openNav"><span></span></span>
                <h2 class="frame__aside-title">{{ config('indigo-layout.name') }}</h2>
                @if(config('indigo-layout.links.sign_in'))<a href="{{ config('indigo-layout.links.sign_in') }}" class="btn frame__aside-callbtn">Sign In</a>@endif
                {{--<button class="frame__aside-ava" @click="$awesLayoutCrm.showUserMenu = ! $awesLayoutCrm.showUserMenu"><i class="icon icon-user novatar novatar_box"></i></button>--}}
            </div>
            <nav class="frame__aside-nav" v-bind:class="{ active: $awesLayoutCrm.togglenav }">
                <div class="frame__aside-mhead g-res--tablet-lg"><a class="frame__aside-close" href="" @click.prevent="$awesLayoutCrm.openNav()"><i class="icon icon-cross"></i></a>
                    <h4 class="frame__aside-mtitle"><span>{{ config('indigo-layout.name') }}</span></h4>
                </div>
                <frame-nav :links='@json($navs)'>
                    <div class="ph">
                        <div class="ph__mnav"><span class="ph__mnav-link"></span><span class="ph__mnav-title"></span></div>
                        <ul class="ph__nav">
                            <li><span class="ph__nav-icon"></span><span class="ph__nav-text"></span></li>
                            <li><span class="ph__nav-icon"></span><span class="ph__nav-text"></span></li>
                            <li><span class="ph__nav-icon"></span><span class="ph__nav-text"></span></li>
                            <li><span class="ph__nav-icon"></span><span class="ph__nav-text"></span></li>
                            <li><span class="ph__nav-icon"></span><span class="ph__nav-text"></span></li>
                        </ul>
                    </div>
                    <template slot="difnav">
                        <div class="frame__head-rlinks">
                            <div class="frame__head-link">
                                <theme-switcher></theme-switcher>
                            </div>
                            {{--<a class="frame__head-link" href="">Link 1</a>--}}
                            {{--<a class="frame__head-link" href="">Link 2</a>--}}
                            @if(config('indigo-layout.links.sign_in'))<a class="btn frame__head-callbtn" href="{{ config('indigo-layout.links.sign_in') }}">Sign In</a>@endif
                        </div>
                    </template>
                </frame-nav>
            </nav>
        </div>
        @endisset
        <div class="frame__right">
            <div class="frame__header">
                <div class="frame__header-top">
                    <form class="frame__search" id="search" v-bind:class="{ active: $awesLayoutCrm.showSearch }" action="js" method="get"> <span class="frame__search-link" v-on:click="$awesLayoutCrm.showSearch = !$awesLayoutCrm.showSearch"><i class="icon icon-search"></i></span>
                        <div class="frame__search-hidden"><input class="frame__search-input" type="text" placeholder="Search..."><button class="frame__search-btn" type="submit">Search</button><span class="frame__search-close" v-on:click="$awesLayoutCrm.showSearch = !$awesLayoutCrm.showSearch"></span><i class="icon icon-cross"></i></div>
                    </form>
                    <div class="frame__userinfo">
                        {{--<a class="frame__userinfo-link" href=""><span class="icon icon-ruppor"><i class="icn-dot"></i></span></a>--}}
                        {{--<a class="frame__userinfo-link" href=""><span class="icon icon-hdd"><i class="icn-dot"></i></span></a>--}}
                    </div>
                </div>
                <div class="frame__header-line">
                    @isset($h1)<h1 class="frame__header-title">{!! $h1 !!}</h1>@endisset
                </div>
            </div>
            {{--<transition name="user-menu">--}}
                {{--<div class="user-menu" v-show="$awesLayoutCrm.showUserMenu" style="display: none;">--}}
                    {{--<ul class="user-menu__list"><button class="user-menu__close" @click="$awesLayoutCrm.showUserMenu = ! $awesLayoutCrm.showUserMenu">&times;</button>--}}
                        {{--<div class="cm-item">--}}
                            {{--<div class="cm-item__panel is-secondary"><strong class="user-menu__title">Terry Gerlach</strong><small class="user-menu__desc">Standart until 10 november<br>                5 users $500 per month</small>--}}
                                {{--<nav class="user-menu__nav" aria-label="Profile navigation">--}}
                                    {{--<ul>--}}
                                        {{--<li><a href="https://company.awescrm.cloud/managers/NQ%3D%3D">Profile</a></li>--}}
                                        {{--<li class="is-expand"><a href="https://www.awescrm.cloud/logout">Logout</a></li>--}}
                                    {{--</ul>--}}
                                {{--</nav><label class="progress user-menu__progress"><span>519.05 MB</span> of 2.5 GB used<progress max="2500" value="519">519 MB of 2.5 GB used</progress></label></div>--}}
                        {{--</div>--}}
                        {{--<div class="cm-item">--}}
                            {{--<div class="cm-item__panel">--}}
                                {{--<theme-switcher></theme-switcher>--}}
                            {{--</div>--}}
                        {{--</div>--}}
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
                    {{--</ul>--}}
                {{--</div>--}}
            {{--</transition>--}}
            <div class="frame__content">
                @yield('content')
            </div>
        </div>
    </div>
</div>
</body>

</html>
