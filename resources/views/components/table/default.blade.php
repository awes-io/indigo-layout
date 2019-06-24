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

{{-- Count items length --}}
@php
    $placeholder_rows_count = 11; // 10 rows by default + 1 head
    if ( isset($default_data) && !empty($default_data) ) {
        $_count = $placeholder_rows_count;
        if ( is_array($default_data) ) {
            $_count = count( $default_data );
        } elseif ( is_object($default_data) && method_exists($default_data, 'all') ) {
            $_count = count( $default_data->all() );
        } elseif ( is_object($default_data) && method_exists($default_data, 'count') ) {
            $_count = $default_data->count();
        }
        $placeholder_rows_count = $_count < $placeholder_rows_count ? $_count + 1 /* add head */ : $placeholder_rows_count;
    }
@endphp

{{-- Render the component --}}
@if ($render)
    <content-wrapper name="{{ $name }}" store-data="{{ $store_data }}"
        :check-empty="function(test) { return !(test && (test.data && test.data.length || test.length)) }"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        @isset($scope_api_url)
            :url="$url.urlFromTemplate('{{ $scope_api_url . '?{' . implode('}&{', $watch_params) . '}' }}', $route.query)"
        @endisset>

        {{--Placeholder--}}
        @if(!isset($list))
            @placeholder(['type' => 'table', 'items' => $placeholder_rows_count])
        @else
            @placeholder(['type' => 'list', 'class' => $class, 'row_class' => $row_class])
        @endisset

        <template slot-scope="table">
            <table-builder
                :default="table.data"
                @isset($row_url)
                    row-url="{{ $row_url }}"
                @endif
                
                @isset($row_click)
                    :row-click="{{ $row_click }}"
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
