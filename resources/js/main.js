import { name, version } from '../../package.json'
import { plugin } from './modules/plugin.js'
import i18n from './modules/i18n.js'
import { replaceCode } from './modules/highlight'
import { Waves } from './modules/waves'

const awesPlugin = {

    name, version,

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
