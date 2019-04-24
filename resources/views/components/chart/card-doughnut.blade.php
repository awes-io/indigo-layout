{{-- component card chart --}}

@php $render = true; @endphp

{{--GET parameters for API--}}
@if (isset($parameters) && is_array($parameters) && count($parameters) > 0)
    @php
        $queryString = "?{" . implode("}&{", $parameters) . '}';
    @endphp
@else
    @php $render = false; @endphp
@endif

{{-- Check if $api_url is exist --}}
@if (!isset($api_url) || (isset($api_url) && empty($api_url)))
    @php $render = false; @endphp
@endif

{{-- Check if $name is exist --}}
@if (!isset($name) || (isset($name) && empty($name)))
    @php $name = 'name' . str_random(8); @endphp
@endif

{{-- Render the component --}}
@if ($render)
    <content-wrapper
        class="tf-height-100"
        store-data="{{ 'id' . str_random(8) }}"
        :check-empty="function(data) { return $get(data, 'datasets[0].data', []).length === 0}"
        @if (isset($default_data) && !empty($default_data))
            :default='@json($default_data)'
        @endif
        :url="$url.urlFromTemplate('{{ $api_url . $queryString }}', $route.query)">
        <template slot-scope="{{ $name }}">
            <div class="card card_chartdoughnut">
                <div class="card__wrap">
                    <chart-builder class="card__chart"
                        :data='{{ $name }}'
                        type="doughnut"
                        :options="{
                            responsive: true,
                            maintainAspectRatio: false,
                            aspectRatio: 1, 
                            plugins: {
                                labels: {
                                    render: 'value',
                                    position: 'inside',
                                    textMargin: 10
                                }
                            },
                            legend: {
                                position: 'right',
                                fontSize: 14,
                                labels: {
                                    usePointStyle: true
                                }
                            },
                            tooltips: {
                                cornerRadius: 2,
                                xPadding: 20,
                                yPadding: 20,
                                bodySpacing: 10
                            }
                        }">
                    </chart-builder>
                </div>
            </div>
        </template>

        @placeholder(['type' => 'chartdoughnut'])

        @loadingCard(['class' => 'card_chartdoughnut'])
        @endloadingCard

        @errorCard(['class' => 'card_chartdoughnut'])
        @enderrorCard

        @emptyCard(['class' => 'card_chartdoughnut'])
        @endemptyCard

    </content-wrapper>
@else
    @wrontConfigCard(['class' => 'card_chartdoughnut'])
    @endwrontConfigCard
@endif
