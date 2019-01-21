<template>
    <a :href="url" :class="[{'frame__aside-link_active': isActive}, className]" v-on="url ? null : $listeners">
        <i v-if="icon"
           :class="`icon icon-${icon}`"></i>
        {{ name }}
    </a>
</template>

<script>
    export default {

        name: 'nav-item',

        props: {

            name: {
                type: String,
                required: true
            },

            icon: String,

            url: {
                type: String,
                default: ''
            },

            active: {
                type: Boolean,
                default: false
            },

            className: [String, Array, Object]
        },


        inject: {

            expanded: {
                from: 'expanded',
                default: false
            }
        },


        data() {
            return {
                isCurrent: false
            }
        },


        computed: {

            isActive() {
                return this.isCurrent || this.active || this.expanded
            }
        },


        methods: {

            checkIsCurrent() {
                this.isCurrent = window.location.pathname === this.url
            }
        },


        beforeMount() {
            // TODO: Отслеживать изменение URL, когда сделаем SPA
            this.checkIsCurrent()
        }
    }
</script>
