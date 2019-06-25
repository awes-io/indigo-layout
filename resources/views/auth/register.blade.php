<form-builder disabled-dialog="" url="{{ route('register') }}" send-text="{{ __('indigo-layout::auth.register.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::auth.general.email') }}" focus=""></fb-input>
    <fb-input name="name" label="{{ __('indigo-layout::auth.register.name') }}"></fb-input>
    <fb-input name="company" label="{{ __('indigo-layout::auth.register.company') }}"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::auth.general.password') }}" type="password"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::auth.general.password_confirmation') }}" type="password"></fb-input>
</form-builder>
