const BODY_NO_SCROLL_CLASS = 'body-overflow-hidden'

export default {

    data() {
        return {
            togglenav: false,
            showSearch: false,
            showUserMenu: false,
            stActive: false
        }
    },

    methods: {

        toggleBodyFix(shouldFix) {
            document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS)
        },

        openNav() {
            if(this.togglenav == true) {
                this.togglenav = false;
                this.toggleBodyFix(false)
            } else {
                this.togglenav = true;
                this.toggleBodyFix(true)
            }
        },

        notify(text, type = 'success', group = 'bottom-right') {
            this.$notify({
                group: 'bottom-right',
                type: type,
                title: type,
                text: text
            });
        }
    },
    
    watch: {
        showUserMenu( isShown ) {
            this.toggleBodyFix(isShown)
        }
    }
}
