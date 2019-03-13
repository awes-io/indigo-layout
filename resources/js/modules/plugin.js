import layoutApp from './layout.js'

// importing components
import contentWrapper from '../../vue/content-wrapper.vue'
import frameNav from '../../vue/frame-nav.vue'
import slideUpDown from '../../vue/slide-up-down.vue'

export function install() {

    if ( this.installed ) return
    this.installed = true

    Vue.prototype.$awesLayoutCrm = new Vue(layoutApp)

    Vue.component('content-wrapper', contentWrapper)
    Vue.component('content-placeholder', { functional: true, render(h){ return null }})
    Vue.component('frame-nav', frameNav)
    Vue.component('slide-up-down', slideUpDown)
}

export const plugin = {

    installed: false,

    install
}
