<template>
    <div>
        <slot :data="content"></slot>
    </div>
</template>

<script>
    export default {
        name: 'content-wrapper',
        props: {
            data: {
                type: Object,
                default: null
            },
            'storeData': {
                type: String,
                require: true
            }
        },
        created() {
            AWES._store.commit('setData', {
                param: this.storeData,
                data: this.data
            });
        },
        computed: {
            content() {
                return AWES._store.state[this.storeData];
            }
        }
    }
</script>
