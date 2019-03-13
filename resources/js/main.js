import store from './modules/store.js'
import { plugin } from './modules/plugin.js'
import i18n from './modules/i18n.js'
import { toastedRegistration } from './modules/notifications.js'
import highlight from './modules/highlight'
import { Waves } from './modules/waves'

const awesPlugin = {

    modules: {
        'vue': {
            src: 'https://unpkg.com/vue/dist/vue.min.js',
            cb() {
                Vue.use(plugin)
            }
        },
        'lodash': {
            src: 'https://unpkg.com/lodash/lodash.min.js',
            deps: ['vue'],
            cb() {
                Vue.prototype.$get = _.get
            }
        },
        'vuex': {
            src: 'https://unpkg.com/vuex/dist/vuex.min.js',
            deps: ['vue'],
            cb() {
                AWES._store = AWES._store || new Vuex.Store(store)
            }
        },
        'vue-shortkey': {
            src: 'https://unpkg.com/vue-shortkey@3',
            deps: ['vue'],
            cb() {
                Vue.use(VueShortkey)
            }
        },
        'vue-toasted': {
            src: 'https://unpkg.com/vue-toasted',
            deps: ['vue'],
            cb: toastedRegistration
        },
        'vue-tabs-component': {
            src: 'https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js',
            deps: ['vue'],
            cb() {
                Vue.use(VueTabs);
            }
        },
        ...highlight
    },

    install(AWES) {
        AWES.lang = i18n
        AWES.once('core:inited', () => {
            AWES.Waves = new Waves()
        })
    }
}

if (window && ('AWES' in window)) {
    AWES.use(awesPlugin)
} else {
    window.__awes_plugins_stack__ = window.__awes_plugins_stack__ || []
    window.__awes_plugins_stack__.push(awesPlugin)
}
