const BODY_NO_SCROLL_CLASS = 'body-overflow-hidden'

export default {

    data() {
        return {
            
        }
    },

    methods: {

        toggleBodyFix(shouldFix) {
            document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS)
        },

        notify(text, type = 'success', group = 'bottom-right') {
            this.$notify({
                group: 'bottom-right',
                type: type,
                title: type,
                text: text
            });
        }
    }
}
