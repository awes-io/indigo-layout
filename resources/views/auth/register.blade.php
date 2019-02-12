<form-builder disabled-dialog="" url="{{ route('register') }}" send-text="Register">
    <fb-input name="email" type="email" label="E-Mail" focus=""></fb-input>
    <fb-input name="name" label="Full name"></fb-input>
    <fb-input name="company" label="Company name (Optional)"></fb-input>
    <fb-input name="password" label="Password" type="password"></fb-input>
    <fb-input name="password_confirmation" label="Confirm Password" type="password"></fb-input>
</form-builder>
