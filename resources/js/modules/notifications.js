/*
 * Docs here: https://github.com/shakee93/vue-toasted
 */

const allowedStatuses = ['success', 'error']

const defaultOptions = {
    type : 'success',
    position: 'bottom-right',
    duration: 5000
}

const templateRightBottom = icon => ({ title, message }) => {
    let html = `<i class="toasted__icon icon icon-${icon}"></i><div class="toasted__content">`;
    html += title ? `<p class="toasted__title">${title}</p>` : '';
    return html + message + '</div>'
}

export function toastedRegistration() {

    Vue.use(Toasted)

    Vue.toasted.register(
        'awes_success',
        templateRightBottom('circle-check'),
        defaultOptions
    )

    Vue.toasted.register(
        'awes_error',
        templateRightBottom('circle-cross'),
        Object.assign({}, defaultOptions, {type : 'error'})
    )

    // Rewrite default core method
    AWES.notify = function({ status = 'success', title, message }) {
        if ( ! allowedStatuses.includes(status) ) return
        Vue.prototype.$toasted.global[`awes_${status}`]({ title, message })
    }
}
