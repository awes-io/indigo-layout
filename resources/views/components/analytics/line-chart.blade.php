{{-- component line chart --}}

@php $render = true; @endphp

{{-- Check if $api_url is exist --}}
@if (!isset($api_url) || (isset($api_url) && empty($api_url)))
    @php $render = false; @endphp
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
        store-data="{{ 'id' . str_random(8) }}"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        :url="`{{ $api_url . $queryString }}`">
        <template slot-scope="chartData">
            <div class="card card_linechart">
                <chart-builder
                :data='chartData'
                :options="{
                    elements: {
                        line: {
                            tension: 0,
                            backgroundColor: 'transparent'
                        },
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                        }],

                        xAxes: [{
                            ticks: {
                                padding: 10,
                                beginAtZero: true,
                                autoSkip: true,
                                maxTicksLimit: 20,
                                max: 20,
                                autoSkipPadding: 1,
                                mirror: true
                            },
                            gridLines: {
                                drawBorder: true,
                                color: 'rgba(150, 150, 150, 0.1)'
                            }
                        }],

                    },
                    legend: {
                        position: 'bottom',
                        labels:{usePointStyle:true, padding: 25}
                    },
                    tooltips: {
                        position: 'average',
                        mode: 'index',
                        intersect: false,
                        cornerRadius: 2,
                        xPadding: 20,
                        yPadding: 20,
                        bodySpacing: 10, 
                        titleMarginBottom: 20
                    },
                    hover: {
                        mode: 'index',
                        intersect: false,
                    }, 
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 15
                        }
                    },
                    borderWidth: {
                        top: 1,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    maintainAspectRatio: false
                }">
            </chart-builder>
                <div class="card__colored-box"></div>
            </div>
        </template>

        @placeholder(['type' => 'linechart'])

        @loadingCard(['class' => 'card_linechart', 'footer_block' => '<div class="card__colored-box"></div>'])
        @endloadingCard

        @errorCard(['class' => 'card_linechart'])
        @enderrorCard

        @emptyCard(['class' => 'card_linechart', 'footer_block' => '<div class="card__colored-box"></div>'])
        @endemptyCard
    </content-wrapper>
@else
    @wrontConfigCard(['class' => 'card_linechart'])
    @endwrontConfigCard
@endif
