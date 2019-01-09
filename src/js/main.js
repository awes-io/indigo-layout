import appMixin from './mixins/app'
import Shortkey from 'vue-shortkey'
import Notifications from 'vue-notification'
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css'


!(function (Vue, App) {

    
    // vendor plugins
    Vue.use( Shortkey );
    Vue.use( Notifications );

    hljs.initHighlightingOnLoad();


    // language strings
    let lang = Vue.prototype.$lang || {}

    Vue.prototype.$lang = Object.assign({
        MODAL_BACK: "Go back",
        MODAL_CLOSE: "Close modal"
    }, lang)
    
    // app mixin
    App.mixins = App.mixins || []
    App.mixins.push(appMixin)

    // components
    const requireComponent = require.context('@/vue', true, /\.vue$/);

    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName);
        const componentName = fileName.replace(/^.\/(.+\/)*(.+)\.vue$/, '$2');
        Vue.component(componentName, componentConfig.default || componentConfig)
    });
})(AWES.Vue, AWES.App)
