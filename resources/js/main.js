import { name, version } from '../../package.json'
import { plugin } from './modules/plugin.js'
import i18n from './modules/i18n.js'
import { replaceCode } from './modules/highlight'
import { Waves } from './modules/waves'

const awesPlugin = {

    name, version,

    modules: {
        'vue-shortkey': {
            src: 'https://unpkg.com/vue-shortkey@3',
            deps: ['vue'],
            cb() {
                Vue.use(VueShortkey)
            }
        },
        'v-tooltip': {
            src: 'https://unpkg.com/v-tooltip/dist/v-tooltip.min.js',
            deps: ['vue'],
            cb() {
                VTooltip.default.options.defaultClass = 'theme-default';
                VTooltip.default.options.popover = Object.assign(VTooltip.default.options.popover, {
                    defaultPlacement: 'right',
                    defaultAutoHide: false,
                    defaultTrigger: 'manual',
                    defaultPopperOptions: {
                        modifiers: {
                            flip: {
                                behavior: ['right', 'top']
                            }
                        }

                    }
                })
            }
        },
        'vue-tabs-component': {
            src: 'https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js',
            deps: ['vue'],
            cb() {
                Vue.use(VueTabs);
            }
        }
    },

    install(AWES) {
        // set language variables
        AWES.lang = i18n

        // init code highlighting
        replaceCode()
        AWES.on('core:popstate', replaceCode)
        AWES._watchedNames.push('code-block')

        Vue.use(plugin)
        AWES.once('core:inited', () => {
            AWES.Waves = new Waves(document.body)
        })
    }
}

if (window && ('AWES' in window)) {
    AWES.use(awesPlugin)
} else {
    window.__awes_plugins_stack__ = window.__awes_plugins_stack__ || []
    window.__awes_plugins_stack__.push(awesPlugin)
}
