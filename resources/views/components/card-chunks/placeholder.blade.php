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
                @case('cardchart')
                    {{--TODO: add correct styles--}}
                    <div style="width:100%;height:260px; background: white; border-color: var(--tc_border_light); border-radius: 2px; box-shadow: var(--tc_ui_shadow);">
                        Placeholder
                    </div>
                @break
                @case('linechart')
                    {{--TODO: add correct styles--}}
                    <div style="width:100%;height:480px; background: white; border-color: var(--tc_border_light); border-radius: 2px; box-shadow: var(--tc_ui_shadow);">
                        Placeholder
                    </div>
                @break
            @endswitch
        </div>
    </div>
@endisset
