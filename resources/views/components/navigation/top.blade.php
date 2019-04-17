@isset($navigation)
    @if(isset($navigation))
        <content-wrapper class="frame__content-nav">
            <tab-nav :links='@json($navigation)'>
                @placeholder([
                    'type' => 'tab-nav', 
                    'dark' => true,
                    'items' => count($navigation)
                ])
            </tab-nav>
        </content-wrapper>
    @endif
@endisset
