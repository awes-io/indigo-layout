<div class="filter">
    <div class="grid grid-align-center grid-justify-between grid-justify-center--mlg">
        <div class="cell-inline cell-1-1--mlg">
            @isset($quick_filter)
            <div class="grid grid-ungap">
                <div class="cell-inline cell-1-1--mlg">
                    {{ $quick_filter }}
                </div>
            </div>
            @endisset
        </div>
        <div class="cell-inline">
            @isset($order_by)
            <div class="filter__rlink">
                <context-menu button-class="filter__slink" right>
                    <template slot="toggler">
                        <span>{{ __('indigo-layout::components.filter.default.sort-by') }}</span>
                    </template>
                    @foreach($order_by as $value => $label)
                    <cm-query :param="{orderBy: '{{ $value }}'}">{{ $label }} &darr;</cm-query>
                    <cm-query :param="{orderBy: '{{ $value }}_desc'}">{{ $label }} &uarr;</cm-query>
                    @endforeach
                </context-menu>
            </div>
            @endisset
            @if(!empty(trim($slot)))
            <div class="filter__rlink">
                <button class="filter__slink" @click="$refs.filter.toggle()">
                    <i class="icon icon-filter" v-if="">
                        <span class="icn-dot" v-if="$awesFilters.state.active['filter-form']"></span>
                    </i>
                    {{ __('indigo-layout::components.filter.default.filter') }}
                </button>
            </div>
            @endif
        </div>
        @if(!empty(trim($slot)))
        <slide-up-down ref="filter">
            <filter-wrapper name="filter-form">
                <div class="grid grid-gap-x grid_forms">
                    <div class="cell">
                        {{ $slot }}
                    </div>
                </div>
            </filter-wrapper>
        </slide-up-down>
        @endif
    </div>
</div>
