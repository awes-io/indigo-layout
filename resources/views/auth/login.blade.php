<form-builder disabled-dialog="" url="{{ route('login') }}" send-text="{{ __('indigo-layout::auth.login.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email" :debounce="0"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::auth.general.password') }}" type="password" required autocomplete="current-password" :debounce="0"></fb-input>
    <div class="login-page__checkform">
        <fb-checkbox name="remember" label="{{ __('indigo-layout::auth.login.remember') }}" :cell="2" enter-skip=""></fb-checkbox>
        <div class="grid__cell grid__cell_2"><a class="login-page__lostpass" href="{{ route('password.request') }}">{{ __('indigo-layout::auth.login.forgot_link') }}</a></div>
    </div>
</form-builder>
