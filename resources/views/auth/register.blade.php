<form-builder disabled-dialog="" url="{{ route('register') }}" send-text="{{ __('indigo-layout::auth.register.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email" :debounce="0"></fb-input>
    <fb-input name="name" label="{{ __('indigo-layout::auth.register.name') }}" autocomplete="name" :debounce="0"></fb-input>
    <fb-input name="company" label="{{ __('indigo-layout::auth.register.company') }}"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::auth.general.password') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::auth.general.password_confirmation') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
</form-builder>
