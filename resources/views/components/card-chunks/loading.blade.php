{{--Loading slot--}}
<template slot="loading">
    <div class="card loading-block @isset($class) {{ $class }} @endisset" data-loading="{{ __('indigo-layout::common.loading') }}">
        <div class="card__wrap cl-caption">
            <div class="card__middle-cell">
                {{ $slot }}
            </div>
        </div>
        @isset($footer_block) {!! $footer_block !!} @endisset
    </div>
</template>
