<!DOCTYPE html>
<html lang="en">

@include('indigo-layout::chunks.head')

<body>
<div class="mainwrapper" id="awes-app">
    <div class="login-page">
        <div class="login-page__full" @if(config('indigo-layout.bg'))style="background-image: url('{{ config('indigo-layout.bg') }}');"@endif>
            <div class="login-page__swrap">
                <a class="login-page__logo login-page__logo_white" href="https://www.awescrm.cloud">
                    {{--<i class="icon icon-logo"></i><span>{{ config('indigo-layout.name') }}</span>--}}
                </a>
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
</div>
</body>

</html>
