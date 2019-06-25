<form-builder disabled-dialog="" url="{{ route('password.update') }}" send-text="Change Password">
	<fb-input name="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email"></fb-input>
	<fb-input type="hidden" name="token" value="{{ $token }}"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::auth.general.password') }}" type="password"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::auth.general.password_confirmation') }}" type="password"></fb-input>
</form-builder>
