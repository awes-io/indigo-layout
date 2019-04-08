<!DOCTYPE html>
<html lang="{{ App::getLocale() }}" @themeswitcher() @endthemeswitcher>

@include('indigo-layout::chunks.head')

<body>
<content-wrapper class="mainwrapper">
    <div class="login-page">
        <div class="login-page__full" @if(config('indigo-layout.auth_bg_full'))style="background-image: url('{{ config('indigo-layout.auth_bg_full') }}');"@endif>
            <div class="login-page__swrap">
                @if(config('indigo-layout.logo'))
                    <a class="login-page__logo login-page__logo_white" href="{{ config('indigo-layout.url') }}">
                        <img src="{{ config('indigo-layout.logo') }}" alt="{{ config('indigo-layout.name') }}" title="{{ config('indigo-layout.name') }}" />
                    </a>
                @endif
                <div class="login-page__sbox">
                    @yield('title')
                    <div class="login-page__form">
                        @yield('content')
                    </div>
                    <div class="tf-centerlink">
                        @yield('footer')
                    </div>
                    @if(AwesAuth::isSocialEnabled())
                        <span class="login-page__spacer"><i>or enter with a social network</i></span>
                        <div class="login-page__socials">
                            @foreach (config('awesio-auth.socialite.services') as $item)
                                <a class="icon icon-{{ $item['name'] }}" href="{{ route('login.social', strtolower($item['name'])) }}"></a>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</content-wrapper>
</body>

</html>
