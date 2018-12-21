<script>
    function easeOutCubic(time, duration) {
        return (time = time / duration - 1) * time * time + 1
    }

    function easeInOutCubic(time, duration) {
        if ( (time/=duration/2) < 1 ) return time*time*time/2;
        return ((time-=2)*time*time + 2) / 2;
    }

    export default {

        name: 'slide-up-down',
        
        props: {

            show: Boolean,
            
            tag: {
                type: String,
                default: 'div'
            },
            
            slideUpDuration: {
                type: Number,
                default: 300 // milliseconds
            },
            
            slideDownDuration: {
                type: Number,
                default: 450 // milliseconds
            }
        },

        data() {
            return {
                isOpened: this.show
            }
        },

        watch: {

            show(value) {
                this.isOpened = value
            }
        },

        methods: {

            slideDown(el, done) {
                const height = el.offsetHeight
                const start = new Date().getTime()
                el.style.height = 0
                el.style.opacity = 0
                const setHeight = () => {
                    let time = new Date().getTime() - start
                    if ( time < this.slideDownDuration ) {
                        let fraction = easeOutCubic(time, this.slideDownDuration)
                        el.style.height = `${Math.round(fraction * height)}px`
                        el.style.opacity = fraction.toFixed(1)
                        requestAnimationFrame(setHeight)
                    } else {
                        el.style.height = null
                        el.style.opacity = null
                        done()
                    }
                }
                requestAnimationFrame(setHeight)
            },
            
            slideUp(el, done) {
                const height = el.offsetHeight
                const start = new Date().getTime()
                const setHeight = () => {
                    let time = new Date().getTime() - start
                    if ( time < this.slideUpDuration ) {
                        let fraction = 1 - easeInOutCubic(time, this.slideUpDuration)
                        el.style.height = `${Math.round( fraction * height )}px`
                        el.style.opacity = fraction.toFixed(1)
                        requestAnimationFrame(setHeight)
                    } else {
                        el.style.height = null
                        el.style.opacity = null
                        done()
                    }
                }
                requestAnimationFrame(setHeight)
            },

            close() {
                this.isOpened = false
            },

            open() {
                this.isOpened = true
            },

            toggle() {
                this.isOpened = ! this.isOpened
            }
        },

        render(h) {
            return h('transition', {
                    props: { css: false },
                    on: {
                        enter: this.slideDown,
                        leave: this.slideUp
                    }
                }, [
                    h(this.tag, {
                        class: 'slide-up-down',
                        style: {
                            overflow: 'hidden'
                        },
                        directives: [
                            { name: 'show', value: this.isOpened }
                        ]
                    }, this.$slots.default)
                ])
        }
    }
</script>
