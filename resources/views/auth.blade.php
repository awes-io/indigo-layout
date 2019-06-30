<!DOCTYPE html>
<html lang="{{ App::getLocale() }}" @themeswitcher>

@include('indigo-layout::chunks.head')

<body>
<content-wrapper class="mainwrapper">
    @notify(['name' => 'top-auth', 'stack' => 'false', 'config' => "{theme: 'inline', timeout: 0}"])
    <div class="login-page">
        <div class="login-page__left">
            <div class="login-page__left-wrap">
                <div class="login-page__left-center">
                    @if(config('indigo-layout.logo'))
                        <a class="login-page__logo" href="{{ config('indigo-layout.url') }}">
                            <img src="{{ config('indigo-layout.logo') }}" alt="{{ config('indigo-layout.name') }}" title="{{ config('indigo-layout.name') }}" />
                        </a>
                    @endif
                    @notify(['name' => 'top-auth-perm', 'stack' => 'false', 'config' => "{theme: 'inline', timeout: 0}"])
                    @yield('title')
                    <div class="login-page__form">
                        @yield('content')
                    </div>
                    @if(View::hasSection('footer'))
                    <div class="tf-centerlink login-page__footer">
                        @yield('footer')
                    </div>
                    @endif
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
        </div><span class="login-page__bg" @if(config('indigo-layout.auth_bg_left'))style="background-image: url('{{ config('indigo-layout.auth_bg_left') }}');"@endif><span></span></span>
    </div>
</content-wrapper>
</body>

</html>
