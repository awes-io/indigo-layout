<form-builder disabled-dialog="" url="{{ route('password.email') }}" send-text="{{ __('indigo-layout::auth.passwords.email.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email"></fb-input>
</form-builder>
{{--{{ __('indigo-layout::layout.password.email.reset') }}--}}
