{{-- component default table --}}
@php 
    $render = true;
    $watch_params = ['page', 'limit']
@endphp

{{-- Check if $pagination is exist --}}
@if (!isset($pagination))
    @php $pagination = true; @endphp
@endif

{{-- Check if $name is exist --}}
@if (!isset($name) || (isset($name) && empty($name)))
    @php $name = 'name' . str_random(8); @endphp
@endif

{{-- Check if api params exist --}}
@if (isset($scope_api_params) && ! empty($scope_api_params) && is_array($scope_api_params))
    @php $watch_params = array_merge($watch_params, $scope_api_params) @endphp
@endif

{{--General store area for the element--}}
@if (!isset($store_data) || (isset($store_data) && empty($store_data)))
    @php $store_data = 'id' . str_random(8); @endphp
@endif

{{--Scrool in Paginate--}}
@if (!isset($scroll_to) || (isset($scroll_to) && empty($scroll_to)))
    @php $scroll_to = 'true' @endphp
@endif

{{-- Render the component --}}
@if ($render)
    <content-wrapper :class="{'loading-block': AWES._store.state.{{ $store_data }}_loading}" data-loading="{{ __('indigo-layout::common.loading') }}" store-data="{{ $store_data }}"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        @isset($scope_api_url)
            :url="$url.urlFromTemplate('{{ $scope_api_url . '?{' . implode('}&{', $watch_params) . '}' }}', $route.query)"
        @endisset
        ref="{{ $name }}">

        {{--Placeholder--}}
        @if(!isset($list))
            @placeholder(['type' => 'table'])
        @else
            @placeholder(['type' => 'list', 'class' => $class, 'row_class' => $row_class])
        @endisset

        <template slot-scope="table">
            <table-builder
                :default="table.data"
                @isset($row_url)
                    row-url="{{ $row_url }}"
                @endif

                @isset($class)
                    list-class="{{ $class }}"
                @endif

                @isset($row_class)
                    list-row-class="{{ $row_class }}"
                @endif
            >
                {{--General slot--}}
                {{ $slot }}

                {{--List slot--}}
                @isset($list)
                    <template slot="list" slot-scope="l">
                        {!! $list !!}
                    </template>
                @endisset

                {{--Mobile slot--}}
                @isset($mobile)
                    <template slot="hidden" slot-scope="m">
                        <div>
                            {!! $mobile !!}
                        </div>
                    </template>
                @endisset

            </table-builder>

            @if ($pagination)
                {{--Pagination slot--}}
                <paginate-builder
                    :meta="table.meta"
                    :scroll-to="{{ $scroll_to }}"
                ></paginate-builder>
            @endif
        </template>

        @loadingCard(['class' => 'card_table'])
            @isset($loadingCard) {!! $loadingCard !!} @endisset
        @endloadingCard

        @errorCard(['class' => 'card_table'])
            @isset($errorCard) {!! $errorCard !!} @endisset
        @enderrorCard

        @emptyCard(['class' => 'card_table'])
            @isset($emptyCard) {!! $emptyCard !!} @endisset
        @endemptyCard

    </content-wrapper>
@else
    @wrontConfigCard(['class' => 'card_table'])
        @isset($wrontConfigCard) {!! $wrontConfigCard !!} @endisset
    @endwrontConfigCard
@endif
