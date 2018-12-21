import appMixin from './mixins/app'
import Shortkey from 'vue-shortkey'
import Notifications from 'vue-notification'

!(function (Vue, App) {

    // vendor plugins
    Vue.use( Shortkey );
    Vue.use( Notifications );

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
        console.log(fileName);
        const componentConfig = requireComponent(fileName);
        const componentName = fileName.replace(/^.\/(.+\/)*(.+)\.vue$/, '$2');
        console.log(componentName);
        Vue.component(componentName, componentConfig.default || componentConfig)
    });
})(AWES.Vue, AWES.App)
