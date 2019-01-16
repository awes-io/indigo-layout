import store from './modules/store.js'
import { plugin } from './modules/plugin.js'
import i18n from './modules/i18n.js'
import { toastedRegistration } from './modules/notifications.js'

const awesPlugin = {

    modules: {
        'vue': {
            src: 'https://unpkg.com/vue@2.5.21/dist/vue.js',
            cb() {
                Vue.use(plugin)
                Vue.config.ignoredElements.push('content-wrapper', 'frame-nav', 'modal-window', 'slide-up-down')
            }
        },
        'lodash': {
            src: 'https://unpkg.com/lodash@4.17.11/lodash.min.js',
            deps: ['vue'],
            cb() {
                Vue.prototype.$get = _.get
            }
        },
        'vuex': {
            src: 'https://unpkg.com/vuex@2.5.0/dist/vuex.min.js',
            deps: ['vue'],
            cb() {
                Vue.prototype.$awesLayoutCrm.$store = new Vuex.Store(store)
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
        'highlight': {
            src: [
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github-gist.min.css'
            ]
        },
        'highlight_lang_html': {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/javascript.min.js',
            deps: ['highlight'],
            cb() {
                document.querySelectorAll('pre code.html').forEach( block => { hljs.highlightBlock(block) })
            }
        }
    },

    install() {
        AWES.lang = i18n
        // window.Vue.use(Notifications);
    }
}

if (window && ('AWES' in window)) {
    AWES.use(awesPlugin)
} else {
    window.__awes_plugins_stack__ = window.__awes_plugins_stack__ || []
    window.__awes_plugins_stack__.push(awesPlugin)
}
