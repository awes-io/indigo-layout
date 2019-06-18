@isset($type)
    {{--Placeholder for table--}}
    <div class="ph">
        <div class="ph__{{ $type }}@isset($dark){{' ph_dark'}}@endisset @isset($items){{' items-' . $items}}@endisset">
            @switch($type)
                @case('table')
                    @for($i = 0; $i < $items; $i++)
                        <i class="ph__{{ $type }}-row"><b class="ph__{{ $type }}-coll"><span></span></b></i>
                    @endfor
                @break
                @case('list')
                    <div class="{{ $class }}">
                        @for($i = 0; $i < 9; $i++)
                    <div class="{{ $row_class }}"><i class="ph__{{ $type }}"><span></span></i></div>
                        @endfor
                    </div>
                @break
                @case('mnav')
                    <span class="ph__{{ $type }}-link"></span><span class="ph__{{ $type }}-title"></span>
                @break
                @case('nav')
                    <ul>
                        @for($i = 0; $i < 6; $i++)
                            <li><span class="ph__{{ $type }}-icon"></span><span class="ph__{{ $type }}-text"></span></li>
                        @endfor
                    </ul>
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
                @case('tab-nav')
                    @if(isset($items) && $items < 10)
                        @for($i = 0; $i < $items; $i++)
                            <span></span>
                        @endfor
                    @else
                        @for($i = 0; $i < 5; $i++)
                            <span></span>
                        @endfor
                    @endif
                @break
            @endswitch
        </div>
    </div>
@endisset
