{{-- component bar line chart --}}

@php $render = true; @endphp

{{--GET parameters for API--}}
@if (isset($parameters) && is_array($parameters) && count($parameters) > 0)
    @php
        $queryString = "?{" . implode("}&{", $parameters) . '}';
    @endphp
@else
    @php $queryString = ''; @endphp
@endif

{{-- Check if $name is exist --}}
@if (!isset($name) || (isset($name) && empty($name)))
    @php $name = 'name' . str_random(8); @endphp
@endif

{{-- Check if $chart_type is exist --}}
@if (!isset($chart_type) || (isset($chart_type) && empty($chart_type)))
    @php $chart_type = 'bar' @endphp
@endif

{{-- Render the component --}}
@if ($render)
    <content-wrapper
        store-data="{{ 'id' . str_random(8) }}"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        :check-empty="function(data) { return $get(data, 'datasets[0].data', []).length === 0}"
        @isset($api_url)
            :url="$url.urlFromTemplate('{{ $api_url . $queryString }}', $route.query)"
        @endisset
        >
        <template slot-scope="{{ $name }}">
            <div class="card card_default">

                <chart-builder :data='{{ $name }}'
                               type="{{ $chart_type }}" :options='{
                               elements: {
                        line: {
                            tension: 0
                        }
                    },

                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true,
                            id: "y-axis-1"
                        }, {
                            id: "y-axis-2",
                            display: false
                        }],
                    },
                    legend: {
                        position: "bottom",
                        labels: {
                            usePointStyle: true,
                            padding: 25
                        }
                    },
                    tooltips: {
                        position: "average",
                        mode: "index",
                        intersect: false,
                        cornerRadius: 2,
                        xPadding: 20,
                        yPadding: 20,
                        bodySpacing: 10,
                        titleMarginBottom: 20
                    },
                    hover: {
                        mode: "index",
                        intersect: false,
                    },
                    layout: {
                        padding: {
                            left: 10,
                            right: 10,
                            top: 20,
                            bottom: 15
                        }
                    },
                    plugins: {
                        labels: false
                    },
                    maintainAspectRatio: false
                }'
                ></chart-builder>

                <div class="card__colored-box"></div>
            </div>
        </template>

        @placeholder(['type' => 'chart_default'])

        @loadingCard(['class' => 'card_default', 'footer_block' => '<div class="card__colored-box"></div>'])
        @endloadingCard

        @errorCard(['class' => 'card_default'])
        @enderrorCard

        @emptyCard(['class' => 'card_default', 'footer_block' => '<div class="card__colored-box"></div>'])
        @endemptyCard
    </content-wrapper>
@else
    @wrontConfigCard(['class' => 'card_default'])
    @endwrontConfigCard
@endif
