<template>
    <component :is="tag">
        <!-- empty -->
        <slot name="empty" v-if="isEmpty && ! hasError && ! isLoading">empty</slot>

        <!-- loading -->
        <slot name="loading" v-if="isLoading && ! hasError">loading</slot>

        <!-- error -->
        <slot name="error" v-if="hasError">error</slot>
        
        <!-- default -->
        <slot v-bind="content" v-if="! isEmpty && ! isLoading && ! hasError"></slot>
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
                default: null
            },

            storeData: {
                type: String,
                required: true
            },

            url: String,

            method: {
                type: String,
                default: 'GET'
            }
        },


        data() {
            return {
                hasError: false
            }
        },


        computed: {

            loadingName() {
                return this.storeData + '_loading'
            },

            isLoading() {
                return this.$store.state[this.loadingName];
            },

            isEmpty() {
                return this.AWES.utils.object.isEmpty(this.data)
            },

            data() {
                return this.$store.state[this.storeData]
            },

            content() {
                return typeof this.data === 'object' ?
                       this.data :
                       { data: this.data }
            }
        },


        watch: {

            url() {
                this.fetchData()
            }
        },


        methods: {

            setLoader(event) {
                AWES._store.commit('setData', {
                    param: this.loadingName,
                    data: event.detail
                });
                this.hasError = false;
            },

            fetchData() {
                
                /* uncomment to test loading with 2 seconds delay */
                // this.setLoader({detail: 1})
                // AWES.ajax({}, this.url, this.method)
                //     .then( res => {
                //         setTimeout(() => {
                //             this.setLoader({detail: 0})

                //             if ( res.success ) {
                //                 AWES._store.commit('setData', {
                //                     param: this.storeData,
                //                     data: res.data
                //                 });
                //             } else {
                //                 this.hasError = true
                //             }
                //         }, 2000)
                //     })

                /* comment to test loading */
                AWES.on('core:ajax', this.setLoader)
                AWES.ajax({}, this.url, this.method)
                    .then( res => {

                        AWES.off('core:ajax', this.setLoader)

                        if ( res.success ) {
                            AWES._store.commit('setData', {
                                param: this.storeData,
                                data: res.data
                            });
                        } else {
                            this.hasError = true
                        }
                    })
            }
        },


        created() {
            if ( this.default ) {
                AWES._store.commit('setData', {
                    param: this.storeData,
                    data: this.default
                });
            } else if ( this.url ) {
                this.fetchData()
            }
        },


        errorCaptured(error, component, info) {
            this.hasError = true
            AWES.notify({status:'error', message: error.message})
            if ( AWES_CONFIG.dev ) {
                console.log(error, component, info)
            }
        },
    }
</script>
