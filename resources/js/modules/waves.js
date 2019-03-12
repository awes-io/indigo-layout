const WAWE_DURATION = 1000

export class Wawes {

    constructor() {
        this.addElements()
        this.initObserver()
    }

    addElements( container = document ) {
        let config = Object.assign({selector: 'button:not(.no-wawe)'}, AWES_CONFIG.wawes)

        this._elements = container.querySelectorAll(config.selector)
        this._elements && Array.from(this._elements).forEach( el => {

            if ( ! el.classList.contains('has-wawe') ) {
                el.classList.add('has-wawe')
            }

            if ( el.__AWES_WAWE__ ) return

            let wawe = el.querySelector('span.wawe')
            if ( ! wawe ) {
                wawe = document.createElement('span')
                wawe.classList.add('wawe')
                el.appendChild(wawe)
            }

            el.__AWES_WAWE__ = wawe

            el.addEventListener('click', Wawes.showWawe, false)
        })
    }

    initObserver() {
        this._mObserver = new MutationObserver(mutations => {
            clearTimeout(this.__tm)
            this.__tm = setTimeout(this.addElements, 300)
        })

        this._mObserver.observe(document.getElementById('awes-app'), {
            childList: true,
            subtree: true
        })
    }

    static showWawe(ev) {
        if (ev.target !== ev.currentTarget) return
        let wawe = this.__AWES_WAWE__
        if ( this._tm ) {
            clearTimeout(this._tm)
            Wawes.removeWawe(this)
        }
        wawe.style.cssText = `
            transition: transform ${WAWE_DURATION}ms ease, opacity ${WAWE_DURATION}ms ease;
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
            top: ${ev.offsetY}px;
            left: ${ev.offsetX}px
        `
        this._tm = setTimeout(
            () => Wawes.removeWawe(this),
            WAWE_DURATION
        )
    }

    static removeWawe(el) {
        el.__AWES_WAWE__.style.cssText = `
            transform: translate(-50%, -50%) scale(0);
            transition: none;
            opacity: 1;
        `
        delete el._tm
    }
}