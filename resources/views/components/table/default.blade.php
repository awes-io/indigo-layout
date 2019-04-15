{{-- component default table --}}
@php $render = true; @endphp

{{-- Check if $pagination is exist --}}
@if (!isset($pagination))
    @php $pagination = true; @endphp
@endif

{{-- Check if $name is exist --}}
@if (!isset($name) || (isset($name) && empty($name)))
    @php $name = 'name' . str_random(8); @endphp
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
    <div :class="{'loading-block': AWES._store.state.{{ $store_data }}_loading}" data-loading="{{ __('indigo-layout::common.loading') }}">
        <table-builder
            store-data="{{ $store_data }}"
            @isset($row_url)
                row-url="{{ $row_url }}"
            @endif
        >
            @placeholder(['type' => 'table'])

            {{--General slot--}}
            {{ $slot }}

            {{--Mobile slot--}}
            @isset($mobile)
                <template slot="hidden" slot-scope="m">
                    <div>
                        {!! $mobile !!}
                    </div>
                </template>
            @endisset

            @loadingCard(['class' => 'card_table'])
                @isset($loadingCard) {!! $loadingCard !!} @endisset
            @endloadingCard

            @errorCard(['class' => 'card_table'])
                @isset($errorCard) {!! $errorCard !!} @endisset
            @enderrorCard

            @emptyCard(['class' => 'card_table'])
                @isset($emptyCard) {!! $emptyCard !!} @endisset
            @endemptyCard

        </table-builder>


        @if ($pagination)
            {{--Pagination slot--}}
            <paginate-builder
                ref="pb.{{ $name }}"
                @isset($scope_api_url)
                    url="{{ $scope_api_url }}"
                @endisset
                store-data="{{ $store_data }}"
                @if (isset($default_data) && !empty($default_data))
                    :default='@json($default_data)'
                @endif
                :scroll-to="{{ $scroll_to }}"
            ></paginate-builder>
        @endif
    </div>
@else
    @wrontConfigCard(['class' => 'card_table'])
        @isset($wrontConfigCard) {!! $wrontConfigCard !!} @endisset
    @endwrontConfigCard
@endif
