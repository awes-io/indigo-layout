import layoutApp from './layout.js'

// importing components
import frameNav from '../../vue/frame-nav.vue'
import slideUpDown from '../../vue/slide-up-down.vue'
import codeBlock from '../../vue/code-block.vue'

export function install() {

    if ( this.installed ) return
    this.installed = true

    Vue.prototype.$awesLayoutCrm = new Vue(layoutApp)

    Vue.component('content-placeholder', { functional: true, render(h){ return null }})
    Vue.component('frame-nav', frameNav)
    Vue.component('slide-up-down', slideUpDown)
    Vue.component('code-block', codeBlock)
}

export const plugin = {

    installed: false,

    install
}
