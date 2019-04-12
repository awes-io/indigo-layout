{{-- component card chart --}}

@php $render = true; @endphp

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

{{-- Check if $api_url is exist --}}
@if (!isset($api_url) || (isset($api_url) && empty($api_url)))
    @php $render = false; @endphp
@endif

{{-- Colors --}}
@if (!isset($color) || (isset($color) && empty($color)))
    @php $color = ''; @endphp
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

{{-- Render the component --}}
@if ($render)
<content-wrapper
    class="tf-height-100"
    store-data="{{ 'id' . str_random(8) }}"
    @if (isset($default_data) && !empty($default_data))
        :default='@json($default_data)'
    @endif
    :url="`{{ $api_url . $queryString }}`">
    <template slot-scope="chartData">
        <div class="card card_chart">
            {{--Filter configuration--}}
            @if (isset($filter) && isset($filter_variable) && isset($filter_default))
                @filtergroup(['filter' => $filter, 'variable' => $filter_variable, 'default' => $filter_default])
            @endif
            <chart-builder class="card__chart"
                    :data='chartData'
                    :options="{elements: {line: {tension: 0
                    @if ($color != "")
                        , backgroundColor: '{{ $color }}',borderColor: '{{ $color }}'
                    @endif
                    },point: {radius: 0}},legend: {display: false},layout: {padding: {top: 20}},scales: {xAxes: [{display: false}],yAxes: [{display: false}]},maintainAspectRatio: false}">
            </chart-builder>

            <div class="card__chart" style="background: {{ $color }};"></div>

            <div class="card__wrap card__wrap_bottom">
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
        </div>
    </template>

    @placeholder(['type' => 'cardchart'])

    @loadingCard(['class' => 'card_chart'])
    @endloadingCard

    @errorCard(['class' => 'card_chart'])
    @enderrorCard

    @emptyCard(['class' => 'card_chart'])
    @endemptyCard

</content-wrapper>
@else
    @wrontConfigCard(['class' => 'card_chart'])
    @endwrontConfigCard
@endif

