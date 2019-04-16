@isset($navigation)
    @if(isset($navigation))
        <div class="tab-builder tab-builder_full">
            <div class="tab-builder__togglers">
                <div class="tab-builder__togglers-overflow">
                    @foreach($navigation as $item)
                        <a href="{{ $item['link'] }}" class="tab-builder__toggler @isset($item['active']) is-active @endisset">{{ $item['name'] }}</a>
                    @endforeach
                </div>
            </div>
        </div>
    @endif
@endisset
