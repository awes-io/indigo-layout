<form-builder disabled-dialog="" url="{{ route('password.update') }}" send-text="Change Password">
	<fb-input name="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email" :debounce="0"></fb-input>
	<fb-input type="hidden" name="token" value="{{ $token }}"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::auth.general.password') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::auth.general.password_confirmation') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
</form-builder>
