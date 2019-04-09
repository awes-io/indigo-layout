@php $render = true; @endphp

{{-- Check if $filter is exist --}}
@if (!isset($filter) || (isset($filter) && empty($filter)))
    @php $render = false; @endphp
@endif

{{-- Check if $variable is exist --}}
@if (!isset($variable) || (isset($variable) && empty($variable)))
    @php $render = false; @endphp
@endif


{{-- Render the component --}}
@if ($render)
    <div class="btn-group">
        @foreach($filter as $_value => $_title)
            <filter-builder label="{{ $_title }}" @if(isset($default) && $default == $_value) active @endif :param="{!! "{'$variable': '$_value'}" !!}"></filter-builder>
        @endforeach
    </div>
@else
    <p>{{ __('indigo-layout::common.group.error.parameters') }}</p>
@endif
