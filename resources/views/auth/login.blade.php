<form-builder disabled-dialog="" url="{{ route('login') }}" send-text="{{ __('indigo-layout::chunks.login.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::chunks.login.email') }}" focus=""></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::chunks.login.password') }}" type="password"></fb-input>
    <div class="login-page__checkform">
        <fb-checkbox name="remember" label="{{ __('indigo-layout::chunks.login.remember') }}" :cell="2" enter-skip=""></fb-checkbox>
        <div class="grid__cell grid__cell_2"><a class="login-page__lostpass" href="{{ route('password.request') }}">{{ __('indigo-layout::chunks.login.forgot_link') }}</a></div>
    </div>
</form-builder>
