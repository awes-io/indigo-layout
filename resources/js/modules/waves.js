const WAVE_DURATION = 1000

export class Waves {

    constructor(root) {
        if ( ! root ) return
        this.addElements()
        this.initObserver(root)
    }

    get hasTouch() {
        return window && ('touchstart' in window)
    }

    get showEvents() {
        return this.hasTouch ? ['touchstart', 'mousedown'] : ['mousedown']
    }

    addElements( container = document ) {
        let config = Object.assign({ selector: '.btn, .frame__header-add, .hljs-copy'}, AWES_CONFIG.waves)

        this._elements = container.querySelectorAll(config.selector)
        this._elements && Array.from(this._elements).forEach( el => {

            if ( ! el.classList.contains('has-wave') ) {
                el.classList.add('has-wave')
            }

            if ( el.__AWES_WAVE__ ) return

            let wave = el.querySelector('span.wave')

            if ( ! wave ) {
                wave = document.createElement('span')
                wave.classList.add('wave')
                el.appendChild(wave)
            }

            el.__AWES_WAVE__ = { wave, active: false, eventType: undefined }
            Waves.resetWave(el)

            const EVENTS = ('touchstart' in window) ? ['touchstart', 'mousedown'] : ['mousedown']

            EVENTS.map( e => {
                el.addEventListener(e, Waves.showWave, false)
            })
        })
    }

    initObserver(root) {
        this._mObserver = new MutationObserver(mutations => {
            clearTimeout(this.__tm)
            this.__tm = setTimeout(this.addElements, 300)
        })

        this._mObserver.observe(root, {
            childList: true,
            subtree: true
        })
    }

    static showWave(ev) {
        if (ev.target !== ev.currentTarget ) return
        let { wave, active, eventType } = this.__AWES_WAVE__
        if ( active && eventType === ev.type ) {
            clearTimeout(this._tm)
            Waves.resetWave(this)
        } else if ( active ) {
            // second binded event on touch screens
            return
        } else {
            this.__AWES_WAVE__.active = true
            this.__AWES_WAVE__.eventType = ev.type
        }
        wave.style.cssText = `
            transition: transform ${WAVE_DURATION}ms ease, opacity ${WAVE_DURATION}ms ease;
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(2);
            top: ${ev.offsetY}px;
            left: ${ev.offsetX}px
        `
        this._tm = setTimeout( () => {
            this.__AWES_WAVE__.active = false
            Waves.resetWave(this)
        }, WAVE_DURATION )
    }

    static resetWave(el) {
        el.__AWES_WAVE__.wave.style.cssText = `
            transform: translate(-50%, -50%) scale(0);
            transition: none;
            opacity: 1;
        `
        delete el._tm
    }
}