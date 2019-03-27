<form-builder disabled-dialog="" url="{{ route('password.update') }}" send-text="Change Password">
	<fb-input name="email" label="Email"></fb-input>
    <fb-input name="password" label="Password" type="password"></fb-input>
    <fb-input name="password_confirmation" label="Confirm Password" type="password"></fb-input>
</form-builder>
