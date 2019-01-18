<script>
    export default {

        name: 'nav-item',

        props: {

            name: {
                type: String,
                required: true
            },
            
            className: {
                type: String,
                default: 'frame__aside-link'
            },

            icon: String,

            url: String,

            children: Array
        },


        data() {
            return {
                isOpened: false
            }
        },


        methods: {
            onClick($event) {
                $event.preventDefault()
                this.isOpened = ! this.isOpened
            }
        },


        render(h) {

            const navItemInner = [ this.name ]
            const navItemData = { 
                class: this.className,
                domProps: {},
                on: {}
            }

            if ( this.icon ) navItemInner.unshift(
                h('i', { class: `icon icon-${this.icon}` })
            )

            if ( this.url ) {
                navItemData.domProps.href = this.url
            } else if ( this.children ) {
                navItemData.domProps.href = ''
                navItemData.on.click = this.onClick
            }

            if ( this.children && this.children.length ) {
                // with subnav
                navItemData.class += ' frame__aside-link_sub'

                return h('div', [
                    h('a', navItemData, navItemInner),
                    h('i', {
                        class: 'icon icon-angle-bottom',
                        on: { click: this.onClick }
                    }),
                    h('slide-up-down', { props: { tag:'ul', show: this.isOpened } }, [
                        this.children.map( child => {
                            return h('li', { class: 'frame__aside-inlist' }, [
                                h('nav-item', { props: {...child, className: 'frame__aside-inlink'} })
                            ])
                        })
                    ])
                ])
            } else {
                // without subnav
                return h('a', navItemData, navItemInner)
            }
        }
    }
</script>
