const WAVE_DURATION = 1000

export class Waves {

    constructor(root) {
        if ( ! root ) return
        this.initElObserver()
        this.addElements()
        this.initRootObserver(root)
    }

    addElements( container = document ) {
        let config = Object.assign({ selector: '.btn, .frame__header-add, .hljs-copy'}, AWES_CONFIG.waves)

        this._elements = container.querySelectorAll(config.selector)
        this._elements && Array.from(this._elements).forEach( el => {

            if ( ! el.classList.contains('has-wave') ) {
                el.classList.add('has-wave')
            }

            if ( el.__AWES_WAVE__ ) return

            this._elObserver.observe(el, {
                attributes: true,
                attributeFilter:['class']
            })

            let wave = el.querySelector('span.wave')

            if ( ! wave ) {
                wave = document.createElement('span')
                wave.classList.add('wave')
                el.appendChild(wave)
            }

            el.__AWES_WAVE__ = { wave, active: false }
            Waves.resetWave(el)

            el.addEventListener('mousedown', Waves.showWave, false)

            el.addEventListener('mouseup', Waves.hideWave, false)
        })
    }

    initElObserver() {
        this._elObserver = new MutationObserver(mutations => {
            mutations.forEach( record => {
                let el = record.target
                let cls = el.className
                if ( ! /has-wave/.test(cls) ) {
                    el.className = cls ? cls + ' has-wave' : 'has-wave'
                }
            });
        })
    }

    initRootObserver(root) {
        this._rootObserver = new MutationObserver(mutations => {
            clearTimeout(this.__tm)
            console.log(mutations)
            this.__tm = setTimeout(this.addElements, 300)
        })

        this._rootObserver.observe(root, {
            childList: true,
            subtree: true
        })
    }

    static showWave(ev) {
        let { wave, active } = this.__AWES_WAVE__
        if ( active ) {
            clearTimeout(this._tm)
            Waves.resetWave(this)
        } else {
            this.__AWES_WAVE__.active = true
        }
        wave.style.cssText = `
            transition: transform ${WAVE_DURATION * .6}ms ease, opacity ${WAVE_DURATION * .6}ms ease;
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(2);
            top: ${ev.offsetY}px;
            left: ${ev.offsetX}px
        `
    }

    static hideWave(ev) {
        this.__AWES_WAVE__.wave.style.opacity = '0'
        this._tm = setTimeout( () => {
            this.__AWES_WAVE__.active = false
            Waves.resetWave(this)
        }, WAVE_DURATION * .4 )
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