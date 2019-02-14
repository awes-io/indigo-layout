<template>
    <component :is="tag">
        <slot v-bind="content"></slot>
    </component>
</template>

<script>
    export default {

        name: 'content-wrapper',


        props: {

            tag: {
                type: String,
                default: 'div'
            },

            default: {
                type: Object,
                default: null
            },

            storeData: {
                type: String,
                required: true
            }
        },


        computed: {

            content() {
                return AWES._store.state[this.storeData];
            }
        },


        watch: {

            default: {
                handler(data) {
                    if (! data ) return
                    AWES._store.commit('setData', {
                        param: this.storeData,
                        data
                    });
                },
                immediate: true
            }
        }
    }
</script>
