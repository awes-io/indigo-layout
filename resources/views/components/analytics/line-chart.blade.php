{{-- component line chart --}}

@php $render = true; @endphp

{{-- Check if $api_url is exist --}}
@if (!isset($api_url) || (isset($api_url) && empty($api_url)))
    @php $render = false; @endphp
@endif

{{-- Colors --}}
@if (!isset($color) || (isset($color) && empty($color)))
    @php $color = ''; @endphp
@endif
@if(config('indigo-layout.chart_colors') && $color != '')
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

{{--GET parameters for API--}}
@if (isset($parameters) && is_array($parameters) && count($parameters) > 0)
    @php
        $parametersFormatted = [];
        foreach($parameters as $_key => $_value){
            $parametersFormatted[] = $_key . "=\${\$get(\$route, 'query.$_key', '$_value')}";
        }
        $queryString = "?" . implode("&", $parametersFormatted);
    @endphp
@else
    @php $render = false; @endphp
@endif

{{-- Render the component --}}
@if ($render)
    <content-wrapper
        store-data="{{ str_random(8) }}"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        :url="`{{ $api_url . $queryString }}`">
        <template slot-scope="chartData">
            <chart-builder
                :data='chartData'
                :options="{elements: {line: {tension: 0
                    @if ($color != "")
                        , backgroundColor: '{{ $color }}',borderColor: '{{ $color }}'
                    @endif
                    },  point: {radius: 0}},legend: {position: 'bottom'},tooltips: {position: 'average',mode: 'index',intersect: false,cornerRadius: 2,xPadding: 20,yPadding: 20,bodySpacing: 10,titleMarginBottom: 20},hover: {mode: 'index',intersect: false,},layout: {padding: {left: 5,right: 40,top: 20,bottom: 0}},maintainAspectRatio: false}">
            </chart-builder>
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
