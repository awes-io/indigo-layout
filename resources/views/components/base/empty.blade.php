{{--Empty slot--}}
<template slot="empty">
    <div class="card @isset($class) {{ $class }} @endisset">
        <div class="card__wrap cl-caption">
            <div class="card__middle-cell">
                <i class="icon icon-database-error card__icon cl-caption"></i>
                <span class="card__caption">{{ __('indigo-layout::common.no-data') }}</span>
                {{ $slot }}
            </div>
        </div>
        @isset($footer_block) {!! $footer_block !!} @endisset
    </div>
</template>
