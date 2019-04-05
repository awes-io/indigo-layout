@if (isset($filter))
    <div class="btn-group">
        @foreach($filter as $_value => $_title)
            <filter-builder label="{{ $_title }}" @if(isset($default) && $default == $_value) active @endif :param="{!! "{'$query': '$_value'}" !!}"></filter-builder>
        @endforeach
    </div>
@endif
