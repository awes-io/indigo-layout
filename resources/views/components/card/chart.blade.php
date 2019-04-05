{{-- component card chart --}}

@php $render = true; @endphp

{{-- Transformation component name --}}
@if (isset($query) && !empty($query))
    @php
        $query = preg_replace("/[^a-zA-Z0-9-]/", " ", $query);
        $query = trim(preg_replace("/\s+/", " ", $query));
        $query = str_replace([" "], "_", $query);
    @endphp
@else
    @php $render = false; @endphp
@endif

{{-- Check if $api_url is exist --}}
@if (!isset($api_url) || (isset($api_url) && empty($api_url)))
    @php $render = false; @endphp
@endif

{{-- Colors --}}
@if (!isset($color) || (isset($color) && empty($color)))
    @php $color = '*'; @endphp
@endif
@if(config('indigo-layout.chart_colors'))
    @php
        $colorConfig = config('indigo-layout.chart_colors');
        $color = trim(preg_replace("/\s+/", "", $color));

        if ($color == '*') {
            $color = array_values($colorConfig)[mt_rand(0, count($colorConfig) - 1)];
        }elseif (isset($colorConfig[$color])) {
            $color =  $colorConfig[$color];
        }
    @endphp
@endif

@if (!isset($filter_default_name) || (isset($filter_default_name) && empty($filter_default_name)))
    @php $filter_default_name = 'period'; @endphp
@endif

@if (!isset($filter_default_value) || (isset($filter_default_value) && empty($filter_default_value)))
    @php $filter_default_value = 7; @endphp
@endif

{{-- Render the component --}}
@if ($render)
<content-wrapper
    class="card card_chart"
    store-data="{{ $query }}"
    @if (isset($default_data) && !empty($default_data))
        :default='@json($default_data)'
    @endif
    :url="`{{ $api_url }}?{{ $filter_default_name }}=${$get($route, 'query.{{ $query }}', {{ $filter_default_value }})}`">
    <template slot-scope="chartData">
        @if (isset($filter))
            <div class="btn-group">
                @foreach($filter as $_current_value => $_title)
                    <filter-builder label="{{ $_title }}" @if($filter_default_value == $_current_value) active @endif :param="{!! "{'$query': '$_current_value'}" !!}"></filter-builder>
                @endforeach
            </div>
        @endif
        <chart-builder class="card__chart"
                :data='chartData'
                :options="{elements: {line: {tension: 0,backgroundColor: '{{ $color }}',borderColor: '{{ $color }}'},point: {radius: 0}},legend: {display: false},layout: {padding: {top: 20}},scales: {xAxes: [{display: false}],yAxes: [{display: false}]},maintainAspectRatio: false}">
        </chart-builder>

        <div class="card__chart" style="background: {{ $color }};"></div>

        <div class="card__wrap">
            <div class="card__info">
                <span class="block tf-size-small tf-light tf-upper mb-md">{{ (isset($label)) ? $label : "" }}</span>
                <span class="block tf-size-small tf-light tf-upper mb-sm">{{ (isset($title)) ? $title : "" }}</span>
                <span class="block tf-size-title tf-light tf-upper">{{ (isset($value)) ? $value : "" }}</span>
                @if (isset($read_more))
                    <div class="mt-sl">
                        <a href="{{ isset($read_more['url']) ? $read_more['url'] : "#" }}" class="tf-hyplink">{{ isset($read_more['name']) ? $read_more['name'] : __('indigo-layout::common.read_more') }}</a>
                    </div>
                @endif
            </div>
        </div>
    </template>
    <template slot="loading">
        <div class="card__wrap card_nodata loading-block" data-loading="{{ __('indigo-layout::common.loading') }}">
            <i class="icon icon-graph chart-box__icon"></i>
        </div>
    </template>
    <template slot="error">
        <div class="card__wrap card_error">
            <div class="card__middle-cell">
                <i class="icon icon-data-error card__icon cl-red"></i>
                <div class="card__info">
                    <span class="card__info-redcapt cl-red">{{ __('indigo-layout::common.chart.error.loading') }}</span>
                </div>
            </div>
        </div>
    </template>
    <template slot="empty">
        <div class="card__wrap card_nodata">
            <div class="card__middle-cell">
                <i class="icon icon-database-error card__icon cl-caption"></i>
                <div class="card__info">
                    <span class="card__info-label">{{ __('indigo-layout::common.chart.no-data') }}</span>
                </div>
            </div>
        </div>
    </template>
</content-wrapper>
@else
    <div class="card card_chart">
        <div class="card__wrap card_error">
            <div class="card__middle-cell">
                <i class="icon icon-data-error card__icon cl-red"></i>
                <div class="card__info">
                    <span class="card__caption cl-red">{{ __('indigo-layout::common.chart.error.parameters') }}</span>
                </div>
            </div>
        </div>
    </div>
@endif

