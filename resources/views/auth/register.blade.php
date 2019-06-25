<form-builder disabled-dialog="" url="{{ route('register') }}" send-text="{{ __('indigo-layout::chunks.register.send_text') }}">
    <fb-input name="email" type="email" label="{{ __('indigo-layout::chunks.register.email') }}" focus=""></fb-input>
    <fb-input name="name" label="{{ __('indigo-layout::chunks.register.name') }}"></fb-input>
    <fb-input name="company" label="{{ __('indigo-layout::chunks.register.company') }}"></fb-input>
    <fb-input name="password" label="{{ __('indigo-layout::chunks.register.password') }}" type="password"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::chunks.register.password_confirmation') }}" type="password"></fb-input>
</form-builder>
