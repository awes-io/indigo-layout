const BODY_NO_SCROLL_CLASS = 'body-overflow-hidden'
const BODY_NO_SCROLL_CLASS_MOBILE = "body-overflow-usermenu"

export default {

    data() {
        return {
            togglenav: false,
            showSearch: false,
            showUserMenu: false,
            showHelpers: false,
            stActive: false
        }
    },

    methods: {

        toggleBodyFix(shouldFix) {
            document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS)
        },

        toggleBodyMobileFix(shouldFix) {
            document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS_MOBILE)
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

        overlayClick() {
            this.showUserMenu = false
            this.togglenav = false
            this.toggleBodyFix(false)
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
            this.toggleBodyMobileFix(isShown)
        },

        showHelpers( isShown ) {
            this.toggleBodyMobileFix(isShown)
        }
    }
}
