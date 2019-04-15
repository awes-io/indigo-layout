{{--Error slot--}}
<template slot="error">
    <div class="card @isset($class) {{ $class }} @endisset">
        <div class="card__wrap cl-red">
            <div class="card__middle-cell">
                <i class="icon icon-data-error card__icon cl-red"></i>
                <span class="card__caption cl-red">{{ __('indigo-layout::common.no-internet') }}</span>
                {{ $slot }}
            </div>
        </div>
        @isset($footer_block) {!! $footer_block !!} @endisset
    </div>
</template>
