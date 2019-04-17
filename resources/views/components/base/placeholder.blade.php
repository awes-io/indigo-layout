@isset($type)
    {{--Placeholder for table--}}
    <div class="ph">
        <div class="ph__{{ $type }}">
            @switch($type)
                @case('table')
                    @for($i = 0; $i < 8; $i++)
                        <i class="ph__{{ $type }}-row"><b class="ph__{{ $type }}-coll"><span></span></b></i>
                    @endfor
                @break
                @case('mnav')
                    <span class="ph__{{ $type }}-link"></span><span class="ph__{{ $type }}-title"></span>
                @break
                @case('nav')
                    @for($i = 0; $i < 6; $i++)
                        <li><span class="ph__{{ $type }}-icon"></span><span class="ph__{{ $type }}-text"></span></li>
                    @endfor
                @break
                @case('chartline')
                    <span></span>
                @break
                @case('chartdoughnut')
                    <span></span>
                @break
                @case('chart_default')
                    <span></span>
                @break
            @endswitch
        </div>
    </div>
@endisset
