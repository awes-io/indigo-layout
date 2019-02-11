<form-builder disabled-dialog="" url="{{ route('login') }}" send-text="Login">
    <fb-input name="email" type="email" label="E-Mail" focus=""></fb-input>
    <fb-input name="password" label="Password" type="password"></fb-input>
    <div class="login-page__checkform">
        <fb-checkbox name="remember" label="Remember me" :cell="2" enter-skip=""></fb-checkbox>
        <div class="grid__cell grid__cell_2"><a class="login-page__lostpass" href="{{ route('password.request') }}">Forgot password?</a></div>
    </div>
</form-builder>
